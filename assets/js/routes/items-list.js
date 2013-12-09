define ([

    'underscore',
    'backbone',

    // data
    'models/item',
    'collections/items-list',

    // views
    'views/item-edit-view',
    'views/items-list-view',

    // localStorage adapter
    'localstorage'

], function (
    _, 
    Backbone,

    // data
    itemModel,
    itemsList,

    // views
    itemEditView,
    itemsListView,

    localStorage
  ) {

  // NOTE: essential backbone.localStorage module issue
  // must be created one time to keep persistency
  var localStorage = new localStorage ('items-list');

  // prepare for backbone.localStorage support
  var itemModel = itemModel.extend({localStorage: localStorage}),
      itemsList = itemsList.extend({localStorage: localStorage});


  // common routes code

  var routes = {};

  // collection route 
  routes [''] = {

    eventName: 'show-list',

    getView: function () {

      // bind view -> collection via extend
      return itemsListView.extend({
        collection: new itemsList ()
      });

    }
  };

  // single model route
  routes ['item/:id'] = {

    eventName: 'show-item',

    getView: function (id) {

      // bind view -> model via extend
      return itemEditView.extend({
        model: new itemModel ({id: id})
      });

    }     
  };

  return routes;

}); 