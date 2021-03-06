Package.describe({
  name: 'denebjs:essence',
  version: '0.1.6',
  summary: 'React Essence package for Meteor',
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
    'lib/react-essence.browserify.options.json',
    'lib/react-essence.browserify.js'
  ]);

  api.addFiles([
    'v0.1.6/roboto.css',
    'v0.1.6/icons.css',
    'v0.1.6/essence.less',
    'v0.1.6/project.css'
  ], 'client');

  api.addFiles([
    '.npm/package/node_modules/react-essence/src/less/essence/normalize.less',
    '.npm/package/node_modules/react-essence/src/less/essence/essence-variables.less',
    '.npm/package/node_modules/react-essence/src/less/essence/essence-mixins.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/red.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/pink.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/purple.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/deep-purple.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/indigo.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/blue.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/light-blue.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/cyan.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/teal.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/green.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/light-green.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/lime.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/yellow.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/amber.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/orange.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/deep-orange.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/brown.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/grey.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/blue-grey.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/black.less',
    '.npm/package/node_modules/react-essence/src/less/essence/colors/white.less',
    '.npm/package/node_modules/react-essence/src/less/essence/buttons/button.less',
    '.npm/package/node_modules/react-essence/src/less/essence/buttons/floating-action-button.less',
    '.npm/package/node_modules/react-essence/src/less/essence/buttons/flat.less',
    '.npm/package/node_modules/react-essence/src/less/essence/buttons/raised.less',
    '.npm/package/node_modules/react-essence/src/less/essence/typography/type.less',
    '.npm/package/node_modules/react-essence/src/less/essence/tabs/tabs.less',
    '.npm/package/node_modules/react-essence/src/less/essence/text-fields/single-line-text-field.less',
    '.npm/package/node_modules/react-essence/src/less/essence/menu/menu.less',
    '.npm/package/node_modules/react-essence/src/less/essence/snackbartoast/snackbartoast.less',
    '.npm/package/node_modules/react-essence/src/less/essence/tooltips/tooltips.less',
    '.npm/package/node_modules/react-essence/src/less/essence/switches/switches.less',
    '.npm/package/node_modules/react-essence/src/less/essence/essence-globals.less',
    '.npm/package/node_modules/react-essence/src/less/essence/slider/slide.less',
    '.npm/package/node_modules/react-essence/src/less/essence/list/list.less',
    '.npm/package/node_modules/react-essence/src/less/essence/cards_chips/cards.less',
    '.npm/package/node_modules/react-essence/src/less/essence/cards_chips/chips.less',
    '.npm/package/node_modules/react-essence/src/less/essence/dialogs/dialogs.less',
    '.npm/package/node_modules/react-essence/src/less/essence/dividers/dividers.less',
    '.npm/package/node_modules/react-essence/src/less/essence/subheaders/subheaders.less',
    '.npm/package/node_modules/react-essence/src/less/essence/essence-ripple.less',
    '.npm/package/node_modules/react-essence/src/less/essence/grid/grid.less',
    '.npm/package/node_modules/react-essence/src/less/essence/style/style.less',
    '.npm/package/node_modules/react-essence/src/less/essence/utils/utils.less',
    '.npm/package/node_modules/react-essence/src/less/essence/menu_controls/menu_controls.less',
    '.npm/package/node_modules/react-essence/src/less/essence/list_controls/list_controls.less',
    '.npm/package/node_modules/react-essence/src/less/essence/navigation-drawer/navigation-drawer.less',
    '.npm/package/node_modules/react-essence/src/less/essence/progress/progress.less',
    '.npm/package/node_modules/react-essence/src/less/essence/appbar/appbar.less',
    '.npm/package/node_modules/react-essence/src/less/essence/bottom_sheets/bottom_sheets.less',
    '.npm/package/node_modules/react-essence/src/less/essence/date-picker/date-picker.less',
    '.npm/package/node_modules/react-essence/src/less/essence/paper/paper.less',
    '.npm/package/node_modules/react-essence/src/less/essence/toolbar/toolbar.less',
    '.npm/package/node_modules/react-essence/src/less/essence/site-components/site-components.less'
  ], 'client', { isImport: true });

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

