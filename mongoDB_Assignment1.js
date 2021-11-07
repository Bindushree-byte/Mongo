#Query / Find Documents
-----------------------------------------------------------------

1) db.movies.find()
2) db.movies.find({writer: "Quentin Tarontino"})
3) db.movies.find({actors: "Brad Pitt"})
4) db.movies.find({franchise: "The Hobbit"})
5) db.movies.find({year: {$gt: 1990, $lt: 2000}})
6) db.movies.find({$or: [{year: {$lt: 2000},{$gt: 2010}}]})


#Update documents
-----------------------------------------------------------------

1) db.movies.update({$set:{synopsis:  "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain 
	                                  with a spirited group of dwarves to reclaim their
                                     mountain home - and the gold within it - from the dragon Smaug."}})

2) db.movies.update({$set:{synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue 
	                                 their quest to reclaim Erebor,  their homeland, from Smaug. 
	                                 Bilbo Baggins is in possession of a mysterious and magical ring."}})

3) db.movies.updateOne({title: "Pulp Fiction"},{$set:{actors:"Samuel L. Jackson"}})






#Delete documents
------------------------------------------------------------------

1) db.movies.deleteMany({title: "Pee wee Herman's Big adventures"})
2) db.movies.deleteMany({title: "Avatar"})


#Text Search
-------------------------------------------------------------------

1) db.movies.find({synopsis: {$regex: "Bilbo"}})
2) db.movies.find({synopsis: {$regex: "Gandalf"}})
3) db.movies.find({and: [{synopsis: {$regex: "Bilbo"}},{synopsis: {$not: /Gandalf/}}]})
4) db.movies.find({$or: [{synopsis: {$regex: "dwarves"}},{synopsis: {$regex: "Hobbit"}}]})
5) db.movies.find({$and: [{synopsis: {$regex: "gold"}},{synopsis: {$regex" "dragon"}}]})


#Query related Collections
----------------------------------------------------------------------

1) db.users.find().pretty()
2) db.posts.find().pretty()
3) db.posts.find({username: "GoodGuyGreg"})
4) db.posts.find({username: "ScumbagSteve"})
5) db.comments.find().pretty()
6) db.comments.find({username: "GoodGuyGreg"})
7) db.comments.find({username: "ScumbagSteve"})
8) db.comments.find({title: "Reports a bug in your code"})




