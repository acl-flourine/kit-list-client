'use strict';

var app = app || {};

// const API_URL = 'https://kit-list.herokuapp.com'; 
const API_URL = 'http://localhost:3000';

(function(module) {
    function User (obj) {
        this.name = obj.name,
        this.household = obj.household,
        this.days = obj.days,
        this.types = [base]
    };

    
    User.create = (user, cb) => {
        $.post(`${API_URL}/api/v1/kitlist`, user)
            .catch(console.error)
            .then( (data) => {
                cb(data)
            })
    }

    User.retrieve = (userName, cb) => {
        $.get(`${API_URL}/api/v1/kitlist/users/${userName}`)
            .catch(console.error)
            .then( (data) => {
                cb(data)
            })
    }
      


    module.User = User;
    
})(app);