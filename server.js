var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, rep, next) {
    if(req.headers['X-forwarded-proto'] === 'http'){
      next();
    }else {
      req.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('./public'));


app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
