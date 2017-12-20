'use strict';

var app = app || {};

(function (module) {

    const listView = {};

    listView.initHomePage = () => {
        $('main section').hide();
        $('#existing-user').parent().show();
        // event listeners for #find and #submit-user - will listen for the click, call functions
        $('#find').on('submit', function (ctx) {
        // get user from join table via user ID, populate list view with that user's items
        });
        $('#new-user').on('submit', listView.createUser); 
};

    listView.createUser = event => {
        event.preventDefault();
        const newUser = {
            name: $('#new-user input[name="user-name"]').val(),
            household: $('#new-user input[name="household"]').val(),
            days: $('#new-user input[name="days"]').val(),
            types: [],
        }
        $("input:checked").each((i, ele) => {
            console.log(ele);
            newUser.types.push(ele.value);
        });
        console.log("New user= ", newUser);
        app.User.dbEntry(newUser);
    }

    // listView.initListPage = () => {
    //     // hide home and about, show lists
    // };

    // listView.initAboutPage = () => {
    //     // you get the idea
    // };

    app.Weather.populateWeather();
    
    module.listView = listView;

})(app);

console.log(app);