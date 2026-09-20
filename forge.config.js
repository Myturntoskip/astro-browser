module.exports = {
  packagerConfig: {
    asar: true,
    icon: './icon' // O Forge escolhe .ico, .png ou .icns automaticamente conforme o sistema
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // Windows
      config: {
        name: 'astro_browser',
        setupIcon: './icon.ico'
      },
    },
    {
      name: '@electron-forge/maker-deb', // Linux/Ubuntu
      config: {
        options: {
          icon: './icon.png'
        }
      },
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

