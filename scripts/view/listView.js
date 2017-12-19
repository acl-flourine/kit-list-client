'use strict';

var app = app || {};

(function (module) {

    const listView = {};

    listView.initHomePage = () => {
        $('main section').hide();
        $('#existing-user').parent().show();
        // event listeners for #find and #submit-user - will listen for the click, call functions
        $('#find').on('submit', listView.existingUser);
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
        app.User.create(newUser);
    }

    listView.existingUser = event => {
        event.preventDefault();
        const newUser = {

        }
    }

    listView.initListPage = () => {
        $("main section").hide();
        $("#list-view").show();
        ctx.items.map(item => $('#list').append(item.toHtml()));
    };

    // listView.initAboutPage = () => {
    //     // you get the idea
    // };


    module.listView = listView;
})(app);

console.log(app);