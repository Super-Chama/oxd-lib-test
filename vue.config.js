module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@orangehrm/oxd": "@ohrm/oxd",
        assets: "@ohrm/oxd/assets",
      },
    },
  },
  publicPath: ".",
};
