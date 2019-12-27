// an act is an array of scenes; a scene is an array of lines

var startScene = ["<i>You check your watch and sigh. Preksha's late, as always.</i>", "<i>Maybe you shouldn't poke around until she gets here… but that metal detector looks awfully interesting.</i>"]
var securitySceneAndAfter = ["<i>God, it’s like an airport. There are metal detectors for both people and bags—I think you even need to take off your shoes. And there are four guards stationed at the front… I wonder how the murderer got past all of this security?</i>", "<b>SECURITY has been added to Evidence</b>", "<div id='name'>PREKSHA</div>How’s my favorite ex?", "<i>You turn around to see Preksha, a snide look on her face.</i>", "<div id='name'>ALEX</div>Stop calling me that. I don’t need the constant reminder that… this once happened.", "<div id='name'>PREKSHA</div>And here I thought that you needed me. Especially since I managed to get my hands on the autopsy.", "<div id='name'>ALEX</div>…Please give it to me.", "<b>AUTOPSY has been added to evidence.</b>", "<div id='name'>ALEX</div>Huh, she was strangled by a metal ligature… What's a ligature?", "<div id='name'>PREKSHA</div>Something for binding. Like a rope.", "<div id='name'>ALEX</div>That's weird.", "<div id='name'>PREKSHA</div>Why?"];
var afterAutopsyScene = ["<div id='name'>ALEX</div>How would the murderer get the metal ligature inside the building? There are metal detectors.", "<div id='name'>PREKSHA</div>That's a good point.", "<div id='name'>ALEX</div>Aren’t you supposed to have all of the answers?", "<div id='name'>PREKSHA</div>In time, my young grasshopper. First, we must investigate!"];

var plantScene = ["<div id='name'>PREKSHA</div>Ugh, ferns. Easily top ten worst plants.", "<div id='name'>ALEX</div>I like them! I think they’re nice and green. They remind me of Tay.", "<div id='name'>PREKSHA</div>…", "<div id='name'>ALEX</div>What?"]; 
var signScene = ["<div id='name'>ALEX</div>Is SL Records really famous or something?", "<div id='name'>PREKSHA</div>. You didn’t know? But you’re friends with Tay.", "<div id='name'>ALEX</div>She doesn’t like talking about work with me.", "<div id='name'>PREKSHA</div>. SL Records was floundering for a bit but they hit jackpot with Evelyn. I think they’re now one of the richest labels. Maybe top three.", "<div id='name'>ALEX</div>I didn’t know you were into music.", "<div id='name'>PREKSHA</div>. I’m not. I’m into money; I invested in them.", "<div id='name'>ALEX</div>You do stocks?", "<div id='name'>PREKSHA</div>. I tried it for a minute, but I’m not good at the whole ‘buy low, sell high’ shit.", "<div id='name'>ALEX</div>You don’t have the restraint.", "<div id='name'>PREKSHA</div>. Yup, I don’t have the restraint. But SL Records—they’re steady. Rarely fluctuates on the market. The owner runs a tight ship and they don’t like to lose."];
var deskScene = ["<div id='name'>PREKSHA</div>Ah, this reminds me of the time when I was a hotel receptionist. I really wasn’t cut out to even pretend to work in customer service.", "<div id='name'>ALEX</div>You’ve gone undercover before?", "<div id='name'>PREKSHA</div>Of course.", "<div id='name'>ALEX</div>Using a British accent isn’t the same thing as going undercover.", "<div id='name'>PREKSHA</div>Never mind then."];

var act = [startScene, securitySceneAndAfter, afterAutopsyScene, plantScene, signScene, deskScene];

// access memory to keep player where they are

window.localStorage.clear(); // for now

function getStorage(StoredItem) {
    return window.localStorage.getItem(StoredItem);
}

function setStorage(StoredItem, valueOfStoredItem) {
    window.localStorage.setItem(StoredItem, valueOfStoredItem);
}

var lineNum = getStorage("lineNum");
var sceneNum = getStorage("sceneNum");

var wrongFlag = 0;

if (lineNum == null){
    lineNum = 1;
}

if (sceneNum == null){
    sceneNum = 0;
}

lineNum--;
mainFunction();

// when the spacebar is pressed, execute the main function

document.body.onkeyup = function(e) {
    if( e.keyCode == 32 ) {
      mainFunction();
    }
}

// when the 'Evidence' is clicked, go to the evidence webpage

function goToEvidence() {
    setStorage("lineNum", lineNum);
    setStorage("sceneNum", sceneNum);
    setStorage("actName", "investigateFirstFloor.html");
    window.location.href = "evidence.html";
}

// mainFunction()

function mainFunction() {
    console.log(sceneNum, lineNum);
    if (wrongFlag == 100) {
        transitionToAfterAutopsyScene();
    } else if (sceneNum < 3) {
        cutScenePart();
    } else if (2 < sceneNum && sceneNum < 7) {
        investigatePart();
    }
    boxDisplay("text", currentLine);
    lineNum++;
}

// cutScenePart()

function cutScenePart (){
    if (sceneNum == 0) {
        if (lineNum < startScene.length - 1) {
            currentLine = act[0][lineNum];
        } else {
            currentLine = act[0][startScene.length - 1];
            ableElement("security", function() {investigateSecurity();});
            cursorElement("security", "pointer");
        }
    } else if (sceneNum == 1) {
        if (lineNum < securitySceneAndAfter.length) {
            currentLine = act[1][lineNum];
            if (lineNum == 1) {
                setStorage("security", 1);
            }
            if (lineNum == 7) {
                setStorage("autopsy", 1);
            }
        } else {
            transitionToAfterAutopsyScene();
        }
    } else if (sceneNum == 2) {
        if (lineNum < afterAutopsyScene.length) {
            currentLine = act[2][lineNum];
        } else {
            sceneNum = 3;
            mainFunction();
        }
    }
}

// cutScenePart() - flags

function investigateSecurity() {
    sceneNum = 1;
    lineNum = 0;
    ableElement("security", "null");
    cursorElement("security", "default");
    mainFunction();
}

function transitionToAfterAutopsyScene() {
    boxDisplay("question", "Why is it weird that the murder weapon is a metal ligature?");
    startChoiceMech();
    choiceNum = 0;
    choiceList = ["Security", "Autopsy"];
    correctChoice = "Security";
}

// investigatePart()

// choosing evidence mechanism - onclick functions

var choiceNum;
var choiceList;
var currentChoice;
var correctChoice;

function startChoiceMech() {
    showElement("text", "none");
    showElement("question", "block");
    showElement("choose", "block");
}

function endChoiceMech() {
    showElement("text", "block");
    showElement("question", "none");
    showElement("choose", "none");
}

function backAChoice() {
    choiceNum--;
    if (choiceNum < 0){
        choiceNum = choiceList.length - 1;
    }
    document.getElementById("choices").innerHTML = choiceList[choiceNum];
}

function forwardAChoice() {
    choiceNum++;
    if (choiceNum > choiceList.length - 1){
        choiceNum = 0;
    }
    document.getElementById("choices").innerHTML = choiceList[choiceNum];
}

function submitChoice() {
    currentChoice = document.getElementById("choices").innerHTML;
    if (currentChoice == correctChoice) {
        sceneNum++;
        lineNum = 0;
        wrongFlag = 0;
        endChoiceMech();
        mainFunction();
    } else {
        wrongFlag = 100;
        endChoiceMech();
        boxDisplay("text", "<div id='name'>PREKSHA</div>How does that evidence prove anything?");
    }
}

// misc functions

function boxDisplay(element, newText) {
    document.getElementById(element).innerHTML = newText;
}

function showElement(element, noneOrBlock) {
    document.getElementById(element).style.display = noneOrBlock;
}

function ableElement(element, nullOrFunction) {
    document.getElementById(element).onclick = nullOrFunction;
}

function cursorElement(element, defaultOrPointer) {
    document.getElementById(element).style.cursor = defaultOrPointer;
}

function changeImage(newImage) {
    document.getElementById("main-img").src = newImage;
}