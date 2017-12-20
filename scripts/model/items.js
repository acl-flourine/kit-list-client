'use strict';

var app = app || {};

(function(module) {

    function Item (obj) {
        this.item = obj.item;
        this.amount = obj.amount;
        this.added_on = obj.added_on || null;
    };

    Item.all = [];

    Item.fetchAll = (ctx, cb) => {
        console.log(ctx.params.user_id); // returns correct id
        $.get(`${API_URL}/api/v1/kitlist/${ctx.params.user_id}`)
        .then(data => {
            console.log(data); //empty array
            Item.loadAll(data);
            ctx.items = Item.all;
        })
        .then(cb)
        .fail(console.error);
    };

    Item.loadAll = (data) => {
        Item.all = data.map(obj => new Item (obj));
        console.log(Item.all); //empty array
    }

    Item.prototype.toHtml = function(){
        let fillTemplate = Handlebars.compile($('#list-template').text());
        return fillTemplate(this);
    }

    module.Item = Item;

})(app);

