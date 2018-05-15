var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ObjectID = mongoose.Types.ObjectId;
var db = require("./db");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello API');
});

app.get('/login', function (req, res) {
  db.get().collection('login').find().toArray(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
});

app.get('/login/:login', function(req, res) {
  db.get().collection('login').findOne(
    { login: req.params.login },
    function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    });
});

app.post('/login', function (req, res) {
  var user = {
    user_id: req.body.user_id,
    login: req.body.login,
    pass: req.body.pass,
    status: req.body.status
  };

  db.get().collection('login').insert(user, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(result);
    res.send(user);
  });
});

app.delete('/login/:login', function (req, res) {
  db.get().collection('login').deleteOne(
    { login: req.params.login },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      console.log(result);
      res.sendStatus(200);
    }
  );
});

app.get('/knowledge-db', function (req, res) {
  db.get().collection('employees').find().toArray(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
});

app.get('/knowledge-db/:id', function(req, res) {
  db.get().collection('employees').findOne(
      { _id: ObjectID(req.params.id) },
      function (err, doc) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.send(doc);
      }
    );
});

app.post('/knowledge-db', function (req, res) {
  var user = {
    name: req.body.name,
    photo: req.body.photo,
    b_day: req.body.b_day,
    spec: req.body.spec,
    experience: req.body.experience,
    english: req.body.english,
    skills: req.body.skills,
    phone: req.body.phone,
    email: req.body.email,
    skype: req.body.skype
  };

  db.get().collection('employees').insert(user, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(result);
    res.send(user);
  });
});

app.put('/knowledge-db/:id', function (req, res) {
  db.get().collection('employees').updateOne(
    { _id: ObjectID(req.params.id) },
    { name: req.body.name },
    { photo: req.body.photo },
    { b_day: req.body.b_day },
    { spec: req.body.spec },
    { experience: req.body.experience },
    { english: req.body.english },
    { skills: req.body.skills },
    { phone: req.body.phone },
    { email: req.body.email },
    { skype: req.body.skype },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      console.log(result);
      res.sendStatus(200);
    }
  );
});

app.delete('/knowledge-db/:id', function (req, res) {
  db.get().collection('employees').deleteOne(
    { _id: ObjectID(req.params.id) },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      console.log(result);
      res.sendStatus(200);
    }
  );
});


db.connect('mongodb://localhost:27017/kms', function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function () {
    console.log('API started');
  });
});