Package.describe({
  name: "nicocrm:compile-svg-react",
  summary: "Gather SVG files and make them available in the document",
  version: "1.0.0"
});

Package.registerBuildPlugin({
  name: "compileSVG",
  use: [
    'caching-html-compiler@1.0.1',
    'ecmascript'
  ],
  sources: ['lib/compile-svg.js']
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('isobuild:compiler-plugin@1.0.0')

  api.addFiles([
    "lib/svg.css"
  ], "client");
  api.mainModule('lib/SvgIcon.jsx', 'client')

});
