require.config({

  paths: {

    // 'text'           : 'libs/text',

    'jquery'         : 'libs/jquery.min',
    'underscore'     : 'libs/lodash.min',
    'backbone'       : 'libs/backbone.min',
    'localstorage'   : 'libs/backbone.localStorage',
    'bootstrap'      : 'libs/bootstrap', 

    // application
    'app'            : 'app'
  },

  shim: {

      'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
      },

      'bootstrap': {
        deps: ['jquery']
      }
  }  

});

var deps = [

    // application
    'app',

    // libs
    'jquery',
    'bootstrap'

];

require (deps, function (app, $) {

  // document ready confirm
  $(function (){

    // launching
    window.app = app ( $('#main') );  

  });

});