const   express = require("express"),
        app = express(),
        PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => { console.log("App listening on PORT: " + PORT) } );