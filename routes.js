page('/', app.listView.initHomePage);

page('/kitlist/:user_id', app.Item.fetchAll, app.listView.initListPage); //When user clicks already a user button, get items from join table, call toHtml, direct user to list view

//  page('/:user',    ); //When user clicks submit - new user is created and browser is redirected to list view
  // page('/about')

// page.base('/kit-list-client/');

page.start();