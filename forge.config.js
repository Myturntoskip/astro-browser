module.exports = {
  packagerConfig: {
    asar: true,
    // Removido a linha do ícone genérico para evitar erros na nuvem
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // Windows
      config: {
        name: 'astro_browser',
      },
    },
    {
      name: '@electron-forge/maker-deb', // Linux/Ubuntu
      config: {}, // Removido o bloco que exigia obrigatoriamente o icon.png
    },
    {
      name: '@electron-forge/maker-dmg', // macOS
      config: {
        name: 'Astro Browser',
        format: 'ULFO'
      }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Myturntoskip',
          name: 'astro-browser'
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};

