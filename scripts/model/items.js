'use strict';

var app = app || {};

(function(module) {

    function Item (obj) {
        this.name = obj.name;
        this.unit = obj.unit;
        this.type = obj.type;
        this.amount = obj.amount;
    };

    Item.all = [];

    Item.fetchAll = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/kitlist/2`)
        .then(data => {
            Item.loadAll(data);
            ctx.items = Item.all;
        })
        .then(cb)
        .fail(console.error);
    };

    Item.loadAll = (data) => {
        Item.all = data.map(obj => new Item (obj));
        console.log(Item);
    }


//  Card.loadAll = (data) => {
//     Card.all = data.map(obj => new Card(obj));
// }
    //Item.prototype.toHtml = () {
        /* 
        
        array of items specific to user, forEach
        will fill template with items
        per day items will be amount * this.household 8 this.days
        per person items amount * this.household
        per house, just the item
        */ 
    //}

    module.Item = Item;

})(app);

