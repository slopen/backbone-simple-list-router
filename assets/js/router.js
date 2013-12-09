define ([

    'underscore',
    'backbone',

    'routes/registry'

], function (_, Backbone, registry) {

  return function (app){

    var options = {

      routes: {
        '*notFound' : 'notFound'
      },

      initialize: function(){

        // apply routes from registry
        _.each (registry, function (entry) {
          var route     = entry [0],
              eventName = entry [1],
              getView   = entry [2];

          this.route (route, eventName, _.bind (function () {
            var view = getView.apply(this, arguments);
            this.swapView ( new view ({ el: app.$el [0] }) );
          }, this));

        }, this);

      },

      swapView: function (view) {

        if (app.currentView){
          // cleanup the previous view
          app.currentView.close ();
        }

        app.currentView = view.render();
      },

      notFound: function (id){

        // simple 'Not found' message
        app.$el.html('<h1>Not found: ' + id + '</h1>');
      }

    };

    return new (Backbone.Router.extend (options)) ();

  };

}); 