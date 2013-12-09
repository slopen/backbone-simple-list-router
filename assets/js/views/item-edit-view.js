define ([

    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {

    var itemEditView = Backbone.View.extend({

        events: {
          'change'        : 'update'
        },

        // template for one item
        template: _.template($('#tpl-item-edit').html()),

        initialize: function(){
          _(this).bindAll(
            'render',
            'update',
            'close'
          );

          this.listenTo(this.model, 'change', this.render);

          // TODO: review placement of fetch
          this.model.fetch();
        },

        render: function(){

          this.$el.html( this.template({data: this.model.toJSON()}) );

          return this;
        },

        update: function (event) {
          var $field = $ (event.target),
              name = $field.attr('name'),
              data = {};

          data [name] = $field.val();

          this.model.save (data);
        },

        close: function(){
          this.stopListening();
          this.undelegateEvents();
        }
    });    

    return itemEditView;

}); 