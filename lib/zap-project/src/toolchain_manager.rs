use super::*;
use anyhow::*;
use dashmap::DashMap;
use log::*;
use std::path::PathBuf;
use zap_buildscript::*;
use zap_core::*;

#[derive(Debug, Clone, Default)]
pub struct ToolchainManager {
    toolchains: DashMap<String, Toolchain>,
    archives: DashMap<String, Archive>,
}

impl ToolchainManager {
    pub fn new() -> ToolchainManager {
        ToolchainManager::default()
    }

    pub async fn load_from_workspace(
        &self,
        workspace: &Workspace,
        mut bs_ctx: &mut BuildScript,
    ) -> Result<(), anyhow::Error> {
        self.load(workspace.root(), &mut bs_ctx).await
    }

    pub async fn load(
        &self,
        root: &PathBuf,
        bs_ctx: &mut BuildScript,
    ) -> Result<(), anyhow::Error> {
        let toolchains = ToolchainScanner::scan(&root)?;

        for toolchainfile in toolchains {
            trace!("Loading toolchain: {:?}", toolchainfile);
            bs_ctx.load(toolchainfile).await?;
        }
        Ok(())
    }

    pub fn register_toolchain(&self, rule: Rule, cache_root: PathBuf) {
        let name = rule.name().to_string();
        if let Some(archive) = self.archives.get(rule.name()) {
            let toolchain =
                Toolchain::new(rule, archive.value().clone().with_cache_root(cache_root));
            self.toolchains.insert(name, toolchain);
        }
    }

    pub fn register_archive(&self, archive: Archive) {
        self.archives.insert(archive.name().to_string(), archive);
    }

    pub fn get(&self, label: &String) -> Option<Toolchain> {
        self.toolchains.get(label).map(|r| r.value().clone())
    }

    pub fn targets(&self) -> Vec<Target> {
        let mut targets = vec![];
        for entry in self.toolchains.iter() {
            targets.push(entry.value().as_target().clone());
        }
        targets
    }

    pub fn archives(&self) -> Vec<Archive> {
        self.archives
            .iter()
            .map(|entry| entry.value().clone())
            .collect()
    }

    pub fn toolchains(&self) -> Vec<Toolchain> {
        self.toolchains
            .iter()
            .map(|entry| entry.value().clone())
            .collect()
    }
}