module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    // Windows (.exe)
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'astro_browser',
      },
    },
    // Linux (.deb para Ubuntu)
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
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

