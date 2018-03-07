
var path= require("path")
var surveyData = require("../data/friends.js");

module.exports = function(app){
app.get("/api/surveyData",function(req,res){
    res.json(surveyData)

})



app.post("/api/surveyData",function(req,res){

    var array = [];
    array = friendsSurvey.score;
    var totalDifference = 100; 
    var userInput = req.body;

    var matchName="";
    var matchImage="";
    for (var i =0 ; i< surveyData.length; i++){
        var dif = 0;

        for (var j=0; j<array.length; j++){
            diff += Math.abs(surveyData[i].scores[j]- array[j])


        }
        if(diff < totalDiffernces){
            totalDifference =diff;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }

    }
    
    surveyData.push(userInput);
    res.json({status:"ok",matchName: matchName, matchImage:matchImage});


})
}