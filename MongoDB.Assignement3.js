#Complex Queries
--------------------------------------------------------------------------------------------------
1) db.addresses.find()

2) db.addresses.find({ "restaurant_id" : 1,
                            "name":1,
                            "borough":1,
                            "cuisine" :1});

3) db.addresses.find({"restaurant_id" : 1,
                            "name":1,
                            "borough":1,
                            "cuisine" :1,"_id" : 0})

4) db.addresses.find({"restaurant_id" : 1,
                       "name":1,
                        "borough":1,"zipcode" :1,
                         "_id":0})


5) db.addresses.find({"borough": "Bronx").limit(5)

6) db.addresses.find({"borough": "Bronx"});

7) db.addresses.find({"borough": "Bronx"}).skip(5).limit(5);

8) db.addresses.find({$score:{$gt: 90}});

9) db.addresses.find({$score: {$gt: 80}, {$lt: 100}});

10) db.addresses.find($coord: {$lt: -65.754168}})

11) db.addresses.find($not: {$cuisine: "American"},{$and: {$score: $gt: 70},{$coord: {$lt: -65.754168}}})

12) db.addresses.find({"cuisine" : {$ne : "American "}, "score" :{$gt: 70},"coord" : {$lt : -65.754168}})
                            
                             
                     

13) db.addresses.find({"cuisine" : {$ne : "American "},
                             "grade" :"A",
                             "borough": {$ne : "Brooklyn"}}).sort({"cuisine":-1});
                       
                    


14) db.addresses.find({name: /^Wil/},
                       {
                            "restaurant_id" : 1,
                             "name":1,"borough":1,
                             "cuisine" :1
                                             })
                           

15) db.addresses.find({name: /ces$/},
                             {"restaurant_id" : 1,
                             "name":1,"borough":1,
                             "cuisine" :1})

16) db.addresses.find({"name": /.*Reg.*/},{{"restaurant_id" : 1,
                             "name":1,"borough":1,
                             "cuisine" :1}})

17) db.addresses.find({"borough":"Bronx", $or: ["cuisine": "American"},{"cuisine":"chinese"}]})

18) db.addresses.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},
                                                                                        {"restaurant_id" : 1,
                                                                                          "name":1,
                                                                                          "borough":1,
                                                                                          "cuisine" :1})


19) db.addresses.find({"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},
                                                                                          {"restaurant_id" : 1,
                                                                                          "name":1,
                                                                                          "borough":1,
                                                                                          "cuisine" :1})


20) db.addresses.find()

21) db.addresses.find()

22) db.addresses.find(
                 {"date": ISODate("2014-08-11T00:00:00Z"),"grade":"A","score" : 11},
                 
                 {"restaurant_id" : 1,
                  "name":1,
                  "grades":1});
                 


23) db.addresses.find({ "date": ISODate("2014-08-11T00:00:00Z"),  "grade":"A" ,  "score" : 9},
                       
                       {"restaurant_id" : 1,"name":1,"grades":1});


24) db.addresses.find({ "address.coord.1": {$gt : 42, $lte : 52}},{"restaurant_id" : 1,"name":1,"address":1,"coord":1});
                    

25) db.addresses.find().sort({"name": 1});

26) db.addresses.find().sort({"name": -1});

27) db.addresses.find().sort({"cuisine":1,"borough" : -1,});
                          
                          

28) db.addresses.find({"address.street" : { $exists : true } })
                         
                     

29) db.addresses.find({"address.coord" :{$type : 1}});
                    
                    
30) db.addresses.find(   {"score" :
                         {$mod : [7,0]}},
                         {"restaurant_id" : 1,"name":1,"grades":1});
                    

31) db.addresses.find({name: {$regex: "mon.*", $options: "i"}},{"name":1,
                                                                "borough": 1,
                                                                "coord": 1,
                                                                "cuisine":1})

32) db.addresses.find({name: {$regex: /^mad/i}},{"name":1,
                                                  "borough": 1,
                                                   "coord": 1,
                                                    "cuisine":1})
