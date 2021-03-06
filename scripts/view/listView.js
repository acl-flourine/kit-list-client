'use strict';

var app = app || {};

(function (module) {
    
    const listView = {};
    
    listView.initHomePage = () => {
        $('main section').hide();
        $('#existing-user').parent().show();
        $('#find').on('click', listView.existingUser);
        $('#new-user').on('submit', listView.createUser); 
        $("#about-link").on('click', listView.initAboutPage);
    };

    listView.createUser = event => {
        event.preventDefault();
        const newUser = {
            name: $('#new-user input[name="user-name"]').val(),
            household: $('#new-user input[name="household"]').val(),
            days: $('#new-user input[name="days"]').val(),
            types: [],
            userState: $('#new-user input[name="userState"]').val(),
            userCity: $('#new-user input[name="userCity"]').val(),
        }
        $("input:checked").each((i, ele) => {
            newUser.types.push(ele.value);
        });
        app.User.create(newUser, (id) => {
            page(`/kitlist/${id}`);
        });
    }

    listView.existingUser = event => {
        event.preventDefault();
        const existingUserName = $('input[name="existing"]').val();
        app.User.retrieve(existingUserName, (res) => {
            page(`/kitlist/${res[0].user_id}`);
        });
    }

    listView.initListPage = (ctx) => {
        $("main section").hide();
        $("#list").empty();
        $("#list-view").show();
        app.Weather.getUserWeather(ctx.params.user_id);
        ctx.items.map(item => $('#list').append(item.toHtml()));
    };

    listView.initAboutPage = event => {
        event.preventDefault();
        $("main section").hide();
        $("#about-view").show();
     };

    module.listView = listView;

})(app);

console.log(app);