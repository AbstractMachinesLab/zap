use crate::build_artifact::Artifact;
use crate::build_context::BuildContext;
use crate::build_rules::build_rule::BuildRule;
use crate::model::target::Label;
use std::collections::HashSet;
use std::path::PathBuf;

#[derive(Debug, Clone)]
pub struct Library {
    name: Label,
    sources: Vec<PathBuf>,
    headers: Vec<PathBuf>,
    dependencies: Vec<Label>,
    outputs: Vec<PathBuf>,
    has_changed: bool,
}

impl Library {
    pub fn new(name: Label) -> Library {
        Library {
            name,
            sources: vec![],
            headers: vec![],
            dependencies: vec![],
            outputs: vec![],
            has_changed: false,
        }
    }

    pub fn set_name(&self, name: Label) -> Library {
        Library {
            name,
            ..self.clone()
        }
    }

    pub fn set_sources(&self, sources: Vec<PathBuf>) -> Library {
        Library {
            sources,
            ..self.clone()
        }
    }

    pub fn set_headers(&self, headers: Vec<PathBuf>) -> Library {
        Library {
            headers,
            ..self.clone()
        }
    }

    pub fn set_dependencies(&self, dependencies: Vec<Label>) -> Library {
        Library {
            dependencies,
            ..self.clone()
        }
    }

    pub fn name(&self) -> Label {
        self.name.clone()
    }

    pub fn sources(&self) -> Vec<PathBuf> {
        self.sources.clone()
    }

    pub fn headers(&self) -> Vec<PathBuf> {
        self.headers.clone()
    }

    pub fn dependencies(&self) -> Vec<Label> {
        self.dependencies.clone()
    }

    pub fn inputs(&self) -> Vec<PathBuf> {
        vec![self.headers.clone(), self.sources.clone()]
            .iter()
            .flatten()
            .cloned()
            .collect()
    }

    pub fn outputs(&self, _ctx: &BuildContext) -> Vec<Artifact> {
        vec![Artifact {
            inputs: self.inputs(),
            outputs: self
                .sources
                .iter()
                .map(|file| file.with_extension("beam"))
                .chain(self.headers.clone())
                .collect(),
        }]
    }

    pub fn has_changed(&self) -> bool {
        self.has_changed
    }

    pub fn build(&self, ctx: &mut BuildContext) -> Result<(), anyhow::Error> {
        let wrapped = BuildRule::Library(self.clone());
        let transitive_deps = ctx.transitive_dependencies(&wrapped);

        let transitive_headers: HashSet<PathBuf> = transitive_deps
            .iter()
            .flat_map(|dep| dep.outputs(&ctx))
            .flat_map(|artifact| artifact.inputs)
            .map(|path| ctx.output_path().join(path))
            .collect();

        let headers: Vec<PathBuf> = self
            .headers
            .iter()
            .cloned()
            .map(|f| ctx.declare_output(f))
            .chain(transitive_headers)
            .collect();

        let files: Vec<PathBuf> = self.headers.iter().cloned().collect();

        files.iter().cloned().for_each(|f| {
            ctx.declare_output(f);
        });

        ctx.copy(&files).and_then(|_| {
            if self.sources.len() > 0 {
                let transitive_beam_files: HashSet<PathBuf> = transitive_deps
                    .iter()
                    .flat_map(|dep| dep.outputs(&ctx))
                    .flat_map(|artifact| artifact.outputs)
                    .map(|path| ctx.output_path().join(path))
                    .collect();

                let beam_files: Vec<PathBuf> = self
                    .sources
                    .iter()
                    .cloned()
                    .map(|f| ctx.declare_output(f.with_extension("beam")))
                    .collect();

                let beam_files: Vec<PathBuf> = beam_files
                    .iter()
                    .chain(transitive_beam_files.iter())
                    .cloned()
                    .collect();

                let dest = beam_files[0].clone();

                ctx.toolchain()
                    .compile(&self.sources, &headers, &beam_files, &dest)
            } else {
                Ok(())
            }
        })
    }

    pub fn run(&self) -> Result<(), anyhow::Error> {
        Ok(())
    }
}
