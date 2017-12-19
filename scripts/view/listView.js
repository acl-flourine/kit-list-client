'use strict';

var app = app || {};

(function (module) {

    const listView = {};

    listView.initHomePage = () => {
        $('main section').hide();
        $('#existing-user').parent().show();
        $('#find').on('click', listView.existingUser);
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
        app.User.create(newUser, (id) => {
            page(`/kitlist/${id}`); //creates context object
        });
    }

    listView.existingUser = event => {
        event.preventDefault();
        const existingUserName = $('input[name="existing"]').val();
        app.User.retrieve(existingUserName, (res) => {
            console.log('response is: ', res[0].user_id);
            page(`/kitlist/${res[0].user_id}`); //creates context object
        });
    }

    listView.initListPage = (ctx) => {
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