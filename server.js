// 20 minutes

// 	make a new express app that has this array in it with 3 students

// 	var students = [
// 		{
// 			name: 'Josh',
// 			role: 'warrior',
// 			age: 42,
// 			power: 5
// 		},
// 		...
// 	];

// 	make a get route that returns all the students in json

// 	make another get route that takes a number and returns that student from the array (the number represents an index)

// 		app.get("/students/:num", function(req, res) {
// 		  var num = req.params.num;


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var students = [
  {
	name: 'Josh',
	role: 'warrior',
	age: 42,
	power: 5
  },
  {
  	name: 'Seth',
  	role: 'green',
  	age: 22,
  	power: 55
  },
  {
  	name: 'ryan',
  	role: 'actor',
  	age: 25,
  	power: 555
  },
  {
  	name: 'troy',
  	role: 'king',
  	age: 23,
  	power: 459
  }
];

/*
curl -X GET http://localhost:3000/all
*/
app.get('/all', function(req,res){
	res.json(students);
});

app.get('/students/:num', function(req,res){
  var num = req.params.num;
  res.json(students[num]);
});

  
/*
curl -d '{"name": "Josh", "role": "warrior", "age": "42", "power": "5"}' -H "Content-Type: application/json" -X POST http://localhost:3000/students
*/
app.post('/students', function(req, res){
  students.push(req.body);
  res.json(students);
});

//new thing to do
  // get route, you're going to put in a url

  //   you're going to send back a file

  //   you're going to make that file

  //     that file is going to have a form that makes a post request to /students
app.get('/new-student', function(req,res){
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get('/new-student-ajax', function(req,res){
  res.sendFile(path.join(__dirname, "form2.html"));
});


//new activity
  // make another file called form2.html
  //   copy and paste the previous form 

  //   submit the form using ajax to the post route you had before

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



