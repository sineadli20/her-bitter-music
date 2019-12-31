mainScene = [ 
{name: "Tay", 
    talk: "Don’t I look scared?",
    char: "neutral-right"},
{name: "Mina", 
    talk: "Right now? You seem pretty relaxed—"},
{name: "Tay", 
    talk: "No, I meant the other me. The person on stage.",
    char: "neutral"},
{name: "Mina", 
    talk: "…You look energetic, maybe, but I wouldn’t say <i>scared.<i>"},
{name: "Tay", 
    talk: "It was a big night for me. I was under a lot of pressure.",
    char: "worried"},
{name: "Mina", 
    talk: "I mean, a lot of people were looking at you."},
{name: "Tay", 
    talk: "No, it was like… I don’t know. I thought it was my chance to prove myself, to succeed.",
    char: "sigh"},
{name: "Tay",
    talk: "My only chance.",
    char: "worried"},
{name: "Mina", 
    talk: "That doesn’t exist."},
{name: "Tay", 
    talk: "What? <i>Success?</i>",
    char: "confused"},
{name: "Mina", 
    talk: "A single chance."},
{name: "Tay", 
    talk: "You’re such a poet.",
    char: "pleased"},
{name: "Mina", 
    talk: "What does that mean?"},
{name: "Tay", 
    talk: "You have so much hope—",
    char: "happy"},
{name: "Mina", 
    talk: "Have you ever read poetry?"},
{name: "Tay", 
    talk: "Being hopeful isn’t a bad thing.",
    char: "confused"},
{name: "Mina", 
    talk: "Maybe, but it’s not a poet thing."},
{name: "Tay", 
    talk: "There’s a lot of electricity.",
    char: "happy-right"},
{name: "Mina", 
    talk: "On stage?"},
{name: "Tay", 
    talk: "No, in your poetry.",
    char: "happy"},
{name: "Mina", 
    talk: "I like metaphors."},
{name: "Tay", 
    talk: "They’re all the same, though.",
    char: "pleased"},
{name: "Mina", 
    talk: "Huh?"},
{name: "Tay", 
    talk: "No, no, I just meant…",
    char: "concerned-right"},
{name: "Tay",
    talk: "You have so many different ways to say <i>brave.</i>",
    char: "touched"},
{name: "Mina", 
    talk: "It’s important to me. Like how performing is important to you. Or, <i>was</i> important to you."},
{name: "Tay", 
    talk: "You’re not subtle.",
    char: "neutral"},
{name: "Mina", 
    talk: "I wasn’t trying to be."},
{name: "Tay", 
    talk: "We’re not doing this again. I’ve already told you—",
    char: "angry"},
{name: "Mina", 
    talk: "I know, I know. Your career tanked after your first single."},
{name: "Tay", 
    talk: "You didn't have to say it out loud.",
    char: "sigh"},
{name: "Mina", 
    talk: "One of us has to acknowledge it."},
{name: "Tay", 
    talk: "I do acknowledge it—I'm even a songwriter for Evelyn.",
    char: "angry"},
{name: "Mina", 
    talk: "You're better than her."},
{name: "Tay", 
    talk: "That's not fair. We're talented in different ways.",
    char: "sigh"},
{name:"Tay",
    talk: "I'm told that Evelyn has an aura.",
    char: "touched"},
{name: "Mina", 
    talk: "You're content to be a one-hit wonder? "},
{name: "Tay", 
    talk: "I don’t like that word—",
    char: "worried"},
{name: "Mina", 
    talk: "When was the last time you released music?"},
{name: "Tay", 
    talk: "Evelyn and I penned a new song on her upcoming album just last week—",
    char: "pleased"},
{name: "Mina", 
    talk: "I meant music under your own name."},
{name: "Tay", 
    talk: "I know what you meant.",
    char: "confused"},
{name: "Mina", 
    talk: "It's been a decade, hasn't it? A decade since a single failed album and you decided to call it quits—"},
{name: "Tay", 
    talk: "Two.",
    char: "neutral"},
{name: "Mina", 
    talk: "Fine, two failed albums, whatever."},
{name: "Tay", 
    talk: "I'm good at what I do now.",
    char: "happy"},
{name: "Mina", 
    talk: "You're good at most things, so what?"},
{name: "Tay", 
    talk: "...You think highly of me.",
    char: "touched"},
{name: "Mina", 
    talk: "Obviously—I'd have to be blind to not—"},
{name: "Tay", 
    talk: "I like it.",
    char: "pleased"},
{name: "Tay", 
    talk: "What other things am I good at?",
    char: "daring"},
{name: "Mina", 
    talk: "Stop fishing for compliments, it's gross."},
{name: "Tay", 
    talk: "Do you like my voice?",
    char: "happy"},
{name: "Mina", 
    talk: "...You won the third season of American Idol."},
{name: "Tay", 
    talk: "Yes, but do <i>you</i> like my voice?",
    char: "pleased"},
{name: "Mina", 
    talk: "I do."},
{name: "Tay", 
    talk: "Let me sing you a lullaby.",
    char: "happy-right"},
{name: "Mina", 
    talk: "You're distracting me."},
{name: "Tay", 
    talk: "Do you mind?",
    char: "touched"}
];
    
    
/*
{flag: function () {
    renderChooseActionMech(
        [
            {name: "one", text: "what the fuck?"},
            {name: "two", text: "how is that possible"}
        ]
    )
} }
];
*/

var cutScene;
var tempLineNum;
var lineNum = 0;
var currentScene = mainScene;
var currentLine;
var text;

mainFunction();

function mainFunction() {
    currentLine = currentScene[lineNum];
    if (typeof currentLine.flag === 'function'){
        currentLine.flag();
    } else {
        if (currentLine.char != null) {
            renderCharacterImage(currentLine.char);
        }
        if (currentLine.name != null) {
            renderName(currentLine.name);
        }
    }
    renderText(currentLine);
    lineNum++;
}

function playCutScene() {
    removeChooseActionMech();
    cutScene.push ( {flag: function() {
            renderText(currentLine)
            currentScene = mainScene;
            lineNum = tempLineNum;
            lineNum++;
            mainFunction();
            }
        }
    );
    tempLineNum = lineNum;
    lineNum = 0;
    currentScene = cutScene;
    mainFunction();
}

function renderCharacterImage(imageName) {
    document.getElementById('character-img').src = "images/character/Tay/" + imageName + ".png";
    document.getElementById('character-img').style.visibility = "visible";
}

function remove(elementName) {
    document.getElementById(elementName).style.visibility = "hidden";
}

function renderName(characterName) {
    document.getElementById('name').innerHTML = characterName;
    document.getElementById('name').style.visibility = "visible";
}

function renderText(textObj) {
    if (textObj.narrate != null) {
        text = "<div id='narrate'>"+textObj.narrate+"</div>";
    } else if (textObj.think != null) {
        text = "<div id='think'>"+textObj.think+"</div>";
    } else if (textObj.talk != null) {
        text = "<div id='talk'>"+textObj.talk+"</div>";
    }
    document.getElementById('text').innerHTML = text;   
}

function removeChooseActionMech() {
    document.getElementById('other-choose').style.visibility = "hidden";
}

function renderChooseActionMech(choiceArray) {
    remove('name');
    remove('character-img');
    remove('text-box');
    let choicesHTML = "";
    for (choice of choiceArray) {
        choicesHTML += "<li id='" + choice.name + "'>" + choice.text + "</li>";
    }
    document.getElementById('other-choose').style.visibility = "visible";
    document.getElementById('other-choose').innerHTML = choicesHTML;
}