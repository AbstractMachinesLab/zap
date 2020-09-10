use anyhow::{anyhow, Context};
use crypto::digest::Digest;
use crypto::sha1::Sha1;
use log::{debug, info};
use std::io::{Read, Write};
use std::path::PathBuf;
use std::process::{Command, Stdio};

#[derive(Debug, Clone, Default)]
pub struct Archive {
    url: String,
    sha1: String,
    prefix: String,
}

impl Archive {
    pub fn url(&self) -> String {
        self.url.clone()
    }

    pub fn sha1(&self) -> String {
        self.sha1.clone()
    }

    pub fn prefix(&self) -> String {
        self.prefix.clone()
    }

    pub fn file_name(&self) -> String {
        "toolchain.tar.gz".to_string()
    }

    pub fn with_url(self, url: String) -> Archive {
        Archive {
            url,
            ..self.clone()
        }
    }

    pub fn with_sha1(self, sha1: String) -> Archive {
        Archive {
            sha1,
            ..self.clone()
        }
    }

    pub fn with_prefix(self, prefix: String) -> Archive {
        Archive {
            prefix,
            ..self.clone()
        }
    }

    pub fn is_cached(&self, outdir: &PathBuf) -> Result<bool, anyhow::Error> {
        let archive = &outdir.join(&self.file_name());
        debug!("Checking if archive at: {:?} exists", archive);
        Ok(std::fs::metadata(archive).is_ok())
    }

    pub fn checksum(&self, outdir: &PathBuf) -> Result<bool, anyhow::Error> {
        let mut hasher = Sha1::new();
        let archive = &outdir.join(&self.file_name());
        debug!(
            "Checking if archive at: {:?} has checksum {:?}",
            &archive, &self.sha1
        );
        let mut file = std::fs::File::open(&archive).context(format!(
            "Truly expected {:?} to be a readable file. Was it changed since the build started?",
            archive
        ))?;
        let mut contents: Vec<u8> = std::vec::Vec::with_capacity(file.metadata()?.len() as usize);
        file.read_to_end(&mut contents)?;
        hasher.input(&contents);
        Ok(hasher.result_str() == self.sha1)
    }

    pub fn download(&self, outdir: &PathBuf) -> Result<(), anyhow::Error> {
        info!(
            "Downloading toolchain from {:?} into {:?}",
            &self.url, &outdir
        );

        std::fs::create_dir_all(&outdir).context(format!(
            "Failed to create toolchain root folder at {:?}",
            &outdir
        ))?;

        let wget = Command::new("wget")
            .args(&[self.url.clone()])
            .args(&["-O", self.file_name().as_str()])
            .current_dir(&outdir)
            .output()
            .context("Could not run wget")?;

        if wget.status.success() {
            Ok(())
        } else {
            std::io::stdout().write_all(&wget.stdout).unwrap();
            std::io::stderr().write_all(&wget.stderr).unwrap();
            Err(anyhow!("Error downloading toolchain!"))
        }
    }

    pub fn unpack(&self, final_dir: &PathBuf) -> Result<(), anyhow::Error> {
        let tar = Command::new("tar")
            .args(&["xzf", "toolchain.tar.gz"])
            .current_dir(&final_dir)
            .output()
            .context("Could not run tar")?;

        if tar.status.success() {
            Ok(())
        } else {
            std::io::stdout().write_all(&tar.stdout).unwrap();
            std::io::stderr().write_all(&tar.stderr).unwrap();
            Err(anyhow!("Error downloading toolchain!"))
        }
    }
}