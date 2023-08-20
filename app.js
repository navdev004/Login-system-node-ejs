const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const { v4: uuidv4 } = require('uuid');
const loginRouter = require('./routes/loginRouter.js')



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));
app.use(flash());
app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname,'public/css')));



app.use('/',loginRouter)



app.listen(3000,()=>{
    console.log("Severver listening on port 3000");
})