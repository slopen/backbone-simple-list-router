define ([

    'jquery',
    'underscore',
    'backbone',
    'router'

], function ($, _, Backbone, createRouter) {

  return function ($element){

    // application 
    var app = {

      navigationStart: function (router){

        // links click to router navigate
        $(document).on('click', 'a', function (){
          router.navigate( $(this).attr('href'), true );
          return false;
        });

        Backbone.history.start ();           
      },

      start: function ($element) {

        // setup
        this.$el = $element;
        this.router = createRouter (app);

        // navigation start
        this.navigationStart (this.router);


        // ensure that we got here
        console.log('application started...');

        return this;
      }

    };

    // init with element provided
    return app.start ($element);

  };

}); 