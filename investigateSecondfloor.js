var choiceTime = true;

document.body.onkeyup = function(e) {
    if( e.keyCode == 32 ) {
        if (choiceTime == false) {
          console.log("yeet");
        }
    }
}

var evidenceChoices = ["Security", "Autopsy", "Broken Instruments"];
var evidenceChoiceNum = 0;

var backAChoice = function(){
    evidenceChoiceNum--;
    if (evidenceChoiceNum < 0){
        evidenceChoiceNum = 2;
    }
    document.getElementById("choices").innerHTML = evidenceChoices[evidenceChoiceNum];
}

var forwardAChoice = function(){
    evidenceChoiceNum++;
    if (evidenceChoiceNum > 2){
        evidenceChoiceNum = 0;
    }
    document.getElementById("choices").innerHTML = evidenceChoices[evidenceChoiceNum];
}

var myChoice;

var submitChoice = function(){
    myChoice = document.getElementById("choices").innerHTML;
    if(myChoice == "Autopsy"){
        choiceTime = false;
    }
}