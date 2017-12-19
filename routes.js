page('/', app.listView.initHomePage);

 page('/home', app.listView.initHomePage);

page('/user', app.listView.initListPage); //When user clicks already a user button, get items from join table, call toHtml, direct user to list view

//  page('/:user',    ); //When user clicks submit - new user is created and browser is redirected to list view

//  page('/about')

// page('/about',     );
// page.base('/kit-list-client/');
page.start();

// page('/', app.Card.fetchAll, app.cardView.initIndexPage);
// page('/', app.cardView.initNewPage);

// page('/cards', app.Card.fetchAll, app.cardView.initIndexPage);
// page('/cards/:id', app.Card.fetchOne, app.cardView.initDetailPage);

// page('/new', app.cardView.initNewPage);

// page('/about', app.aboutView.initAboutPage);

// page('*', (ctx, next) => { 
//     console.log('Nothing to see here!'); 
// });
 
// // add base path for production: YOUR REPO NAME!
// page.base('/custom-cards-client');
// page.start();
