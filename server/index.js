const express = require("express");
const app = express();
const cors=require('cors')
app.use(cors())
app.use(express.static(__dirname + "/../client/dist"));
require('./data/index')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const school = require('./routes/index');
const categ = require('./routes/index');

app.use('/api/categ', categ);

app.use('/api/school', school);
let port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
