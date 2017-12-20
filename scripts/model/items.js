'use strict';

var app = app || {};

(function(module) {

    function Item (obj) {
        this.item = obj.item;
        this.amount = obj.amount;
        this.category = obj.category;
        this.added_on = obj.added_on || null;
    };

    Item.all = [];

    Item.fetchAll = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/kitlist/${ctx.params.user_id}`)
        .then(data => {
            Item.loadAll(data);
            ctx.items = Item.all;
        })
        .then(cb)
        .fail(console.error);
    };

    Item.loadAll = (data) => {
        Item.all = data.map(obj => new Item (obj));
    }

    Item.prototype.toHtml = function(){
        let fillTemplate = Handlebars.compile($('#list-template').text());
        return fillTemplate(this);
    }

    module.Item = Item;

})(app);

