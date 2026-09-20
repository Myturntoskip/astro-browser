module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'astro_browser',
      },
    },
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

