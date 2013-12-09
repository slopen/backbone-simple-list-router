define ([

    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {

    // view for item in list
    var itemView = Backbone.View.extend ({

        tagName: 'li',

        events: {
          "click .action-delete" : 'remove'
        },

        // template for one item
        template: _.template ($ ('#tpl-list-item').html ()),

        initialize: function(){
          _(this).bindAll(
            'render',
            'remove',
            'close'
          );

          this.listenTo(this.model,'change', this.render);
        },

        render: function(){

          // render template
          this.$el.html( this.template({data: this.model.toJSON()}) );

          return this;
        },

        remove: function(){
          this.model.destroy();
          this.close();
          return false;
        },

        close: function(){
          this.stopListening();
          this.undelegateEvents();         
        }
    });

    return itemView;

}); 