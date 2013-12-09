define ([

    'underscore',
    'backbone'

], function (_, Backbone) {

	// model for item in list
    var itemModel = Backbone.Model.extend({
        defaults:{
            title: "New item"
        }
    }); 
    
    return itemModel;

});