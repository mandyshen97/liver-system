const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");

const path = require("path");


module.exports = override(
  fixBabelImports("import", {
    "libraryName": "@alifd/next",
    "libraryDirectory": "es",
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "./src"),
  })
);