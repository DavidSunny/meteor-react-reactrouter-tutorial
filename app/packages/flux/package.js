Package.describe({
  name: 'denebjs:flux',
  version: '0.0.1',
  summary: 'A Flux pattern that leverages Tracker.',
  git: 'https://github.com/DavidSunny/flux.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'reactive-dict',
    'tracker',
    'underscore'
  ]);
  api.addFiles('flux.js');
  api.export('Store');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'tinytest',
    'tracker',
    'underscore',
    'woody:flux'
  ]);
  api.addFiles('flux-tests.js');
});
