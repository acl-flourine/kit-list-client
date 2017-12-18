'use strict';

var app = app || {};

// const API_URL = 'https://kit-list.herokuapp.com'; 
const API_URL = 'http://localhost:5050';

(function(module) {
    function User (obj) {
        this.name = obj.name,
        this.household = obj.household,
        this.days = obj.days,
        this.types = []
    };

    
    User.dbEntry = user => {
        $.post(`${API_URL}/api/v1`, user)
            .catch(console.error);
    }
    
    User.createItemsTable = function () {
        // create join table based on username and list types (which will give item_id to join table)
        // if this.types includes xxxxxx then join those items into the User.itemsTable
    }
    
    //User.prototype.toHtml = () {
        /* 
        
        array of items specific to user, forEach
        will fill template with items
        per day items will be amount * this.household 8 this.days
        per person items amount * this.household
        per house, just the item
        */ 
    //}
    
    
    module.User = User;
    
})(app);

console.log(app);