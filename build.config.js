module.exports = {
  build_dir: 'build',
  compile_dir: 'prod',

  server: {
    port: 3333,
    hostname: 'localhost'
  },

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },


  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'vendor/jquery/dist/jquery.js',
      'vendor/lodash/dist/lodash.js',
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/angular-cookies/angular-cookies.js',
      'vendor/angular-local-storage/angular-local-storage.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/numeral/numeral.js',
      'vendor/ngprogress/build/ngProgress.js'
    ],
    css: [
      'vendor/animate.css/animate.css',
      'vendor/ngprogress/ngProgress.css',
      'vendor/bootstrap/dist/css/bootstrap.css'
    ],
    assets: [
    ]
  },
};
