
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
const people = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(people);
    });

    app.post("/api/friends", function(req, res) {
       var newPerson = req.body

       console.log(newPerson)

       compare(newPerson)

       

        function compare() {
            var lowestDifference = 7
            var response = []
            for (let i=0; i < people.length; i++) {
                var newDifference = 0
                for (let j=0; j < 3; j++) {
                    newDifference += Math.abs(parseInt(newPerson.answers[j]) - parseInt(people[i].answers[j]))
                }
                console.log("Difference between " + newPerson.name + " and " + people[i].name + " is " + newDifference)
                if (newDifference <= lowestDifference) {
                    lowestDifference = newDifference
                    console.log(people[i].name)
                    response = []
                    response.push(people[i].name, people[i].photo)
                }
            }
            people.push(newPerson)
            res.json(response)
        }

    });
}  