'use strict';

var app = app || {};

// const API_URL = 'https://kit-list.herokuapp.com'; 
const API_URL = 'http://localhost:3000';

(function(module) {
    function User (obj) {
        this.name = obj.name,
        this.household = obj.household,
        this.days = obj.days,
        this.types = []
    };

    
    User.dbEntry = user => {
        $.post(`${API_URL}/api/v1/user`, user)
            .catch(console.error);
    }
    
    User.fillJoin = function () {
        // create join table based on username and list types (which will give item_id to join table)
        // if this.types includes xxxxxx then join those items into the User.itemsTable
    }
    
    
    
    
    module.User = User;
    
})(app);

console.log(app);