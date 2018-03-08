
var path= require("path")
var surveyData = require("../data/friends.js");

module.exports = function(app){
app.get("/api/surveyData",function(req,res){
    res.json(surveyData)

})



app.post("/api/surveyData",function(req,res){

   
    var array = surveyData.scores;
    var totalDifference = 100; 
    var userInput = req.body;
    var userresponse = userInput.scores

    var matchName="";
    var matchImage="";
    for (var i =0 ; i< surveyData.length; i++){
        var diff = 0;

        for (var j=0; j<userresponse.length; j++){
            diff += Math.abs(parseInt(surveyData[i].scores[j]- userresponse[j]))


        }
        if(diff < totalDifference){
            totalDifference =diff;
            matchName = surveyData[i].name;
            matchImage = surveyData[i].photo;
        }

    }
    
    surveyData.push(req.body);
    res.json({status:"ok",matchName: matchName, matchImage:matchImage});


})
}