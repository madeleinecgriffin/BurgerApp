# BurgerApp
a full stack app using node, javascript, express, handlebars, and mysql

In this app, MySql stores a table called "burgers" that stores a menu list of burgers. These burgers are displayed to the user using a sequence of handlebars files and express routes.

The user can click "devour" to eat a burger on the menu. After that, the burger will appear on the "devoured" list isntead of the burger menu.

The user can also type a burger name and add it to the menu (and the MySql table). After the user adds it, it will display on the menu and can be "devoured". The table list, devoured status, and table additions are sorted through an orm.

To run this app, run the express packages and run "node server.js" and go to localhost:3000 in your browser.