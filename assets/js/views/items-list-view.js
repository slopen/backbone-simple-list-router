define ([

    'jquery',
    'underscore',
    'backbone',

    // data
    'collections/items-list',

    // single item view
    'views/item-list-view'
    
], function ($, _, Backbone, itemsList, itemListView) {

    // collection view for items list
    var collectionView = Backbone.View.extend({

        collection: itemsList,

        events: {
          "click .controls .add-item" : "addItem"
        },

        // template for list
        template: _.template($('#tpl-list').html()),

        initialize: function(){

            _(this).bindAll(
              'render',
              'addItem',
              'close'
            );

            // bind actions
            this.listenTo (this.collection, 'reset add destroy', this.render);

            this.collection.fetch();
        },

        render: function(){

          this.$el.html ( this.template({data: this.collection.toJSON() }) );

          if (this.collection.length) {

            // prepare document fragment
            var fragment = document.createDocumentFragment();

            // populating document fragment
            this.collection.each (function (model){
              fragment.appendChild(

                // rendering model view
                new itemListView({ 
                  model: model
                }).render().el 

              );
            });

            // finally insert fragment
            this.$el.find('ul') [0].appendChild(fragment);
          }

          return this;
        },

        addItem: function(){

          this.collection.create({
            created_at: (new Date()).getTime()
          });

          return false;
        },

        close: function(){
          this.stopListening();
          this.undelegateEvents();
        }

    });

    return collectionView;

}); 