// 1) Create a user


// db.User.create({name: "Boberto!"}, 
// 	function(err, user) { 
// 	if (err) console.log(err); 
// 	console.log("user"); 
// 	console.log("user created!");
// });


// gives you the first user it finds
// db.User.findOne({name: "Boberto!"}, function(err, user ) {
// 	console.log(user);
// });


// 2) Create tweets embedded in that user

// var user = new db.User({name: "Boberto"}),


var createUserTweets = new db.Tweet({_id: 5744cf99872ab8a301af35e6}),

createUserTweets.save(function(err, user) {
	console.log(user);
});

var tweet1 = new db.Tweet({body: "shhhh"});
var tweet2 = new db.Tweet({body: "tweeter"});

user.tweets.push(tweet1, tweet1);
user.save();

// 3) List all the users

// 4) List all tweets of a specific user

// 5) Create several ingredients




// 6) Create a food that references those ingredients

// 7) List all the Foods

// 8) List all the ingredients in a Food







db.User.find({}, function(err, user) {
}

db.User.find({name: "boberto"}, function(err, user) {
	console.log(user.tweets)
}





