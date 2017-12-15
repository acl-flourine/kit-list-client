'use strict';

var app = app || {};

(function(module) {

    function Item (obj) {
        this.name = obj.name;
        this.unit = obj.unit;
        this.type = obj.type;
        this.amount = obj.amount
    };

    Item.all = [];

    Item.fetchAll = () => {
        // get
    };

    module.Item = Item;

})(app);

