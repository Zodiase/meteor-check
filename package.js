Package.describe({
  name: 'zodiase:check',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'Add custom error messages to checks.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zodiase/meteor-check.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('check');
  api.imply('check');
  api.export('check', ['client', 'server']);
  api.addFiles('check.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('zodiase:check');
  api.addFiles('check-tests.js');
});
