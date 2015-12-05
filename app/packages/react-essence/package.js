Package.describe({
  name: 'denebjs:react-essence',
  version: '0.1.6',
  summary: 'React-Essence for Meteor',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.5.0',
  'react-addons-transition-group': '0.14.1',
  'react-essence': '0.1.6',
  'classnames': '2.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use(['react-runtime@0.14.1_1', 'cosmos:browserify']);
  api.imply(['react-runtime@0.14.1_1']);

  api.addFiles([
    'react-essence.browserify.options.json',
    'react-essence.browserify.js'
  ]);

  // css and js for client
  api.addFiles([
    'dist/css/essence.css',
    'dist/css/icons.css',
    'dist/css/project.css'
  ], 'client');

  api.addAssets([
    'dist/font/roboto/roboto-black.eot',
    'dist/font/roboto/roboto-black.svg',
    'dist/font/roboto/roboto-black.ttf',
    'dist/font/roboto/roboto-black.woff',
    'dist/font/roboto/roboto-black.woff2',
    'dist/font/roboto/roboto-blackitalic.eot',
    'dist/font/roboto/roboto-blackitalic.svg',
    'dist/font/roboto/roboto-blackitalic.ttf',
    'dist/font/roboto/roboto-blackitalic.woff',
    'dist/font/roboto/roboto-blackitalic.woff2',
    'dist/font/roboto/roboto-bold.eot',
    'dist/font/roboto/roboto-bold.svg',
    'dist/font/roboto/roboto-bold.ttf',
    'dist/font/roboto/roboto-bold.woff',
    'dist/font/roboto/roboto-bold.woff2',
    'dist/font/roboto/roboto-bolditalic.eot',
    'dist/font/roboto/roboto-bolditalic.svg',
    'dist/font/roboto/roboto-bolditalic.ttf',
    'dist/font/roboto/roboto-bolditalic.woff',
    'dist/font/roboto/roboto-bolditalic.woff2',
    'dist/font/roboto/roboto-italic.eot',
    'dist/font/roboto/roboto-italic.svg',
    'dist/font/roboto/roboto-italic.ttf',
    'dist/font/roboto/roboto-italic.woff',
    'dist/font/roboto/roboto-italic.woff2',
    'dist/font/roboto/roboto-light.eot',
    'dist/font/roboto/roboto-light.svg',
    'dist/font/roboto/roboto-light.ttf',
    'dist/font/roboto/roboto-light.woff',
    'dist/font/roboto/roboto-light.woff2',
    'dist/font/roboto/roboto-lightitalic.eot',
    'dist/font/roboto/roboto-lightitalic.svg',
    'dist/font/roboto/roboto-lightitalic.ttf',
    'dist/font/roboto/roboto-lightitalic.woff',
    'dist/font/roboto/roboto-lightitalic.woff2',
    'dist/font/roboto/roboto-medium.eot',
    'dist/font/roboto/roboto-medium.svg',
    'dist/font/roboto/roboto-medium.ttf',
    'dist/font/roboto/roboto-medium.woff',
    'dist/font/roboto/roboto-medium.woff2',
    'dist/font/roboto/roboto-mediumitalic.eot',
    'dist/font/roboto/roboto-mediumitalic.svg',
    'dist/font/roboto/roboto-mediumitalic.ttf',
    'dist/font/roboto/roboto-mediumitalic.woff',
    'dist/font/roboto/roboto-mediumitalic.woff2',
    'dist/font/roboto/roboto-regular.eot',
    'dist/font/roboto/roboto-regular.svg',
    'dist/font/roboto/roboto-regular.ttf',
    'dist/font/roboto/roboto-regular.woff',
    'dist/font/roboto/roboto-regular.woff2',
    'dist/font/roboto/roboto-thin.eot',
    'dist/font/roboto/roboto-thin.svg',
    'dist/font/roboto/roboto-thin.ttf',
    'dist/font/roboto/roboto-thin.woff',
    'dist/font/roboto/roboto-thin.woff2',
    'dist/font/roboto/roboto-thinitalic.eot',
    'dist/font/roboto/roboto-thinitalic.svg',
    'dist/font/roboto/roboto-thinitalic.ttf',
    'dist/font/roboto/roboto-thinitalic.woff',
    'dist/font/roboto/roboto-thinitalic.woff2',
    'dist/font/roboto/robotocondensed-bold.eot',
    'dist/font/roboto/robotocondensed-bold.svg',
    'dist/font/roboto/robotocondensed-bold.ttf',
    'dist/font/roboto/robotocondensed-bold.woff',
    'dist/font/roboto/robotocondensed-bold.woff2',
    'dist/font/roboto/robotocondensed-bolditalic.eot',
    'dist/font/roboto/robotocondensed-bolditalic.svg',
    'dist/font/roboto/robotocondensed-bolditalic.ttf',
    'dist/font/roboto/robotocondensed-bolditalic.woff',
    'dist/font/roboto/robotocondensed-bolditalic.woff2',
    'dist/font/roboto/robotocondensed-italic.eot',
    'dist/font/roboto/robotocondensed-italic.svg',
    'dist/font/roboto/robotocondensed-italic.ttf',
    'dist/font/roboto/robotocondensed-italic.woff',
    'dist/font/roboto/robotocondensed-italic.woff2',
    'dist/font/roboto/robotocondensed-light.eot',
    'dist/font/roboto/robotocondensed-light.svg',
    'dist/font/roboto/robotocondensed-light.ttf',
    'dist/font/roboto/robotocondensed-light.woff',
    'dist/font/roboto/robotocondensed-light.woff2',
    'dist/font/roboto/robotocondensed-lightitalic.eot',
    'dist/font/roboto/robotocondensed-lightitalic.svg',
    'dist/font/roboto/robotocondensed-lightitalic.ttf',
    'dist/font/roboto/robotocondensed-lightitalic.woff',
    'dist/font/roboto/robotocondensed-lightitalic.woff2',
    'dist/font/roboto/robotocondensed-regular.eot',
    'dist/font/roboto/robotocondensed-regular.svg',
    'dist/font/roboto/robotocondensed-regular.ttf',
    'dist/font/roboto/robotocondensed-regular.woff',
    'dist/font/roboto/robotocondensed-regular.woff2',
    'dist/font/Material-Design-Icons.eot',
    'dist/font/Material-Design-Icons.svg',
    'dist/font/Material-Design-Icons.ttf',
    'dist/font/Material-Design-Icons.woff'
  ], 'client');

  api.export('Essence');
});

