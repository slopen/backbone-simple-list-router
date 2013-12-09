define ([

    'underscore',
    'backbone',

    'models/item'

], function (_, Backbone, itemModel) {

    // collection for items list
    var itemsList = Backbone.Collection.extend({
      model: itemModel
    });    

    return itemsList;

});