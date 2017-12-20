page('/', app.listView.initHomePage);

page('/home', app.listView.initHomePage);

page('/kitlist/:user_id', app.Item.fetchAll, app.listView.initListPage); 

page.base('/kit-list-client/');

page.start();