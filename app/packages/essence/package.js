Package.describe({
  name: 'denebjs:essence',
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
  api.use(['less'], 'client');

  api.imply(['react-runtime@0.14.1_1']);

  api.addFiles([
    'react-essence.browserify.options.json',
    'react-essence.browserify.js'
  ]);

  api.addFiles([
    'v0.1.6/fontface.css',
    'v0.1.6/icons.css',
    'essence.less',
    'v0.1.6/project.css'
  ], 'client');

  api.addFiles([
    '.npm/package/node_modules/react-essence/src/less/essence/normalize.less'
  ], 'client', { isImport: true });

  api.addFiles([
    'v0.1.6/less/imports/essence/essence-variables.less',
    'v0.1.6/less/imports/essence/essence-mixins.less',
    'v0.1.6/less/imports/essence/colors/red.less',
    'v0.1.6/less/imports/essence/colors/pink.less',
    'v0.1.6/less/imports/essence/colors/purple.less',
    'v0.1.6/less/imports/essence/colors/deep-purple.less',
    'v0.1.6/less/imports/essence/colors/indigo.less',
    'v0.1.6/less/imports/essence/colors/blue.less',
    'v0.1.6/less/imports/essence/colors/light-blue.less',
    'v0.1.6/less/imports/essence/colors/cyan.less',
    'v0.1.6/less/imports/essence/colors/teal.less',
    'v0.1.6/less/imports/essence/colors/green.less',
    'v0.1.6/less/imports/essence/colors/light-green.less',
    'v0.1.6/less/imports/essence/colors/lime.less',
    'v0.1.6/less/imports/essence/colors/yellow.less',
    'v0.1.6/less/imports/essence/colors/amber.less',
    'v0.1.6/less/imports/essence/colors/orange.less',
    'v0.1.6/less/imports/essence/colors/deep-orange.less',
    'v0.1.6/less/imports/essence/colors/brown.less',
    'v0.1.6/less/imports/essence/colors/grey.less',
    'v0.1.6/less/imports/essence/colors/blue-grey.less',
    'v0.1.6/less/imports/essence/colors/black.less',
    'v0.1.6/less/imports/essence/colors/white.less',
    'v0.1.6/less/imports/essence/buttons/button.less',
    'v0.1.6/less/imports/essence/buttons/floating-action-button.less',
    'v0.1.6/less/imports/essence/buttons/flat.less',
    'v0.1.6/less/imports/essence/buttons/raised.less',
    'v0.1.6/less/imports/essence/typography/type.less',
    'v0.1.6/less/imports/essence/tabs/tabs.less',
    'v0.1.6/less/imports/essence/text-fields/single-line-text-field.less',
    'v0.1.6/less/imports/essence/menu/menu.less',
    'v0.1.6/less/imports/essence/snackbartoast/snackbartoast.less',
    'v0.1.6/less/imports/essence/tooltips/tooltips.less',
    'v0.1.6/less/imports/essence/switches/switches.less',
    'v0.1.6/less/imports/essence/essence-globals.less',
    'v0.1.6/less/imports/essence/slider/slide.less',
    'v0.1.6/less/imports/essence/list/list.less',
    'v0.1.6/less/imports/essence/cards_chips/cards.less',
    'v0.1.6/less/imports/essence/cards_chips/chips.less',
    'v0.1.6/less/imports/essence/dialogs/dialogs.less',
    'v0.1.6/less/imports/essence/dividers/dividers.less',
    'v0.1.6/less/imports/essence/subheaders/subheaders.less',
    'v0.1.6/less/imports/essence/essence-ripple.less',
    'v0.1.6/less/imports/essence/grid/grid.less',
    'v0.1.6/less/imports/essence/style/style.less',
    'v0.1.6/less/imports/essence/utils/utils.less',
    'v0.1.6/less/imports/essence/menu_controls/menu_controls.less',
    'v0.1.6/less/imports/essence/list_controls/list_controls.less',
    'v0.1.6/less/imports/essence/navigation-drawer/navigation-drawer.less',
    'v0.1.6/less/imports/essence/progress/progress.less',
    'v0.1.6/less/imports/essence/appbar/appbar.less',
    'v0.1.6/less/imports/essence/bottom_sheets/bottom_sheets.less',
    'v0.1.6/less/imports/essence/date-picker/date-picker.less',
    'v0.1.6/less/imports/essence/paper/paper.less',
    'v0.1.6/less/imports/essence/toolbar/toolbar.less',
    'v0.1.6/less/imports/essence/site-components/site-components.less'
  ], 'client');

  // css and js for client
  //api.addFiles([
  //  'dist/css/essence.css',
  //  'dist/css/icons.css',
  //  'dist/css/project.css'
  //], 'client'),

  api.addAssets([
    'v0.1.6/font/roboto/roboto-black.eot',
    'v0.1.6/font/roboto/roboto-black.svg',
    'v0.1.6/font/roboto/roboto-black.ttf',
    'v0.1.6/font/roboto/roboto-black.woff',
    'v0.1.6/font/roboto/roboto-black.woff2',
    'v0.1.6/font/roboto/roboto-blackitalic.eot',
    'v0.1.6/font/roboto/roboto-blackitalic.svg',
    'v0.1.6/font/roboto/roboto-blackitalic.ttf',
    'v0.1.6/font/roboto/roboto-blackitalic.woff',
    'v0.1.6/font/roboto/roboto-blackitalic.woff2',
    'v0.1.6/font/roboto/roboto-bold.eot',
    'v0.1.6/font/roboto/roboto-bold.svg',
    'v0.1.6/font/roboto/roboto-bold.ttf',
    'v0.1.6/font/roboto/roboto-bold.woff',
    'v0.1.6/font/roboto/roboto-bold.woff2',
    'v0.1.6/font/roboto/roboto-bolditalic.eot',
    'v0.1.6/font/roboto/roboto-bolditalic.svg',
    'v0.1.6/font/roboto/roboto-bolditalic.ttf',
    'v0.1.6/font/roboto/roboto-bolditalic.woff',
    'v0.1.6/font/roboto/roboto-bolditalic.woff2',
    'v0.1.6/font/roboto/roboto-italic.eot',
    'v0.1.6/font/roboto/roboto-italic.svg',
    'v0.1.6/font/roboto/roboto-italic.ttf',
    'v0.1.6/font/roboto/roboto-italic.woff',
    'v0.1.6/font/roboto/roboto-italic.woff2',
    'v0.1.6/font/roboto/roboto-light.eot',
    'v0.1.6/font/roboto/roboto-light.svg',
    'v0.1.6/font/roboto/roboto-light.ttf',
    'v0.1.6/font/roboto/roboto-light.woff',
    'v0.1.6/font/roboto/roboto-light.woff2',
    'v0.1.6/font/roboto/roboto-lightitalic.eot',
    'v0.1.6/font/roboto/roboto-lightitalic.svg',
    'v0.1.6/font/roboto/roboto-lightitalic.ttf',
    'v0.1.6/font/roboto/roboto-lightitalic.woff',
    'v0.1.6/font/roboto/roboto-lightitalic.woff2',
    'v0.1.6/font/roboto/roboto-medium.eot',
    'v0.1.6/font/roboto/roboto-medium.svg',
    'v0.1.6/font/roboto/roboto-medium.ttf',
    'v0.1.6/font/roboto/roboto-medium.woff',
    'v0.1.6/font/roboto/roboto-medium.woff2',
    'v0.1.6/font/roboto/roboto-mediumitalic.eot',
    'v0.1.6/font/roboto/roboto-mediumitalic.svg',
    'v0.1.6/font/roboto/roboto-mediumitalic.ttf',
    'v0.1.6/font/roboto/roboto-mediumitalic.woff',
    'v0.1.6/font/roboto/roboto-mediumitalic.woff2',
    'v0.1.6/font/roboto/roboto-regular.eot',
    'v0.1.6/font/roboto/roboto-regular.svg',
    'v0.1.6/font/roboto/roboto-regular.ttf',
    'v0.1.6/font/roboto/roboto-regular.woff',
    'v0.1.6/font/roboto/roboto-regular.woff2',
    'v0.1.6/font/roboto/roboto-thin.eot',
    'v0.1.6/font/roboto/roboto-thin.svg',
    'v0.1.6/font/roboto/roboto-thin.ttf',
    'v0.1.6/font/roboto/roboto-thin.woff',
    'v0.1.6/font/roboto/roboto-thin.woff2',
    'v0.1.6/font/roboto/roboto-thinitalic.eot',
    'v0.1.6/font/roboto/roboto-thinitalic.svg',
    'v0.1.6/font/roboto/roboto-thinitalic.ttf',
    'v0.1.6/font/roboto/roboto-thinitalic.woff',
    'v0.1.6/font/roboto/roboto-thinitalic.woff2',
    'v0.1.6/font/roboto/robotocondensed-bold.eot',
    'v0.1.6/font/roboto/robotocondensed-bold.svg',
    'v0.1.6/font/roboto/robotocondensed-bold.ttf',
    'v0.1.6/font/roboto/robotocondensed-bold.woff',
    'v0.1.6/font/roboto/robotocondensed-bold.woff2',
    'v0.1.6/font/roboto/robotocondensed-bolditalic.eot',
    'v0.1.6/font/roboto/robotocondensed-bolditalic.svg',
    'v0.1.6/font/roboto/robotocondensed-bolditalic.ttf',
    'v0.1.6/font/roboto/robotocondensed-bolditalic.woff',
    'v0.1.6/font/roboto/robotocondensed-bolditalic.woff2',
    'v0.1.6/font/roboto/robotocondensed-italic.eot',
    'v0.1.6/font/roboto/robotocondensed-italic.svg',
    'v0.1.6/font/roboto/robotocondensed-italic.ttf',
    'v0.1.6/font/roboto/robotocondensed-italic.woff',
    'v0.1.6/font/roboto/robotocondensed-italic.woff2',
    'v0.1.6/font/roboto/robotocondensed-light.eot',
    'v0.1.6/font/roboto/robotocondensed-light.svg',
    'v0.1.6/font/roboto/robotocondensed-light.ttf',
    'v0.1.6/font/roboto/robotocondensed-light.woff',
    'v0.1.6/font/roboto/robotocondensed-light.woff2',
    'v0.1.6/font/roboto/robotocondensed-lightitalic.eot',
    'v0.1.6/font/roboto/robotocondensed-lightitalic.svg',
    'v0.1.6/font/roboto/robotocondensed-lightitalic.ttf',
    'v0.1.6/font/roboto/robotocondensed-lightitalic.woff',
    'v0.1.6/font/roboto/robotocondensed-lightitalic.woff2',
    'v0.1.6/font/roboto/robotocondensed-regular.eot',
    'v0.1.6/font/roboto/robotocondensed-regular.svg',
    'v0.1.6/font/roboto/robotocondensed-regular.ttf',
    'v0.1.6/font/roboto/robotocondensed-regular.woff',
    'v0.1.6/font/roboto/robotocondensed-regular.woff2',
    'v0.1.6/font/Material-Design-Icons.eot',
    'v0.1.6/font/Material-Design-Icons.svg',
    'v0.1.6/font/Material-Design-Icons.ttf',
    'v0.1.6/font/Material-Design-Icons.woff'
  ], 'client');

  api.export('Essence');
});

