// the script

var oneLines = ["<div id='name'>ANNOUNCER</div>Taylor Yang is the winner!", "<div id='name'>TAY</div>Don’t I look scared?", "<div id='name'>ALEX</div>Right now? You seem pretty relaxed—", "<div id='name'>TAY</div>No, I meant the other me. The person on stage.", "<div id='name'>ALEX</div>…You look energetic, maybe, but I wouldn’t say <i>scared.</i>", "<div id='name'>TAY</div>It was a big night for me. I was under a lot of pressure.", "<div id='name'>ALEX</div>I mean, a lot of people were looking at you.", "<div id='name'>TAY</div>No, it was like… I don’t know. I thought it was my chance to prove myself, to succeed. My only chance.", "<div id='name'>ALEX</div>That doesn’t exist.", "<div id='name'>TAY</div>What? <i>Success?</i>", "<div id='name'>ALEX</div>A single chance.", "<div id='name'>TAY</div>You’re such a poet.", "<div id='name'>ALEX</div>What's that supposed to mean?", "<div id='name'>TAY</div>You have so much hope—", "<div id='name'>ALEX</div>Have you ever read poetry? ", "<div id='name'>TAY</div>Being hopeful isn’t a bad thing.", "<div id='name'>ALEX</div>Maybe, but it’s not a <i>poet</i> thing.", "<div id='name'>TAY</div>There’s a lot of electricity.", "<div id='name'>ALEX</div>On stage?", "<div id='name'>TAY</div>No, in your poetry.", "<div id='name'>ALEX</div>I like metaphors.", "<div id='name'>TAY</div>They’re all the same, though.", "<div id='name'>ALEX</div>The fuck?", "<div id='name'>TAY</div>No, no, I just meant… you have so many different ways to say <i>brave.</i>", "<div id='name'>ALEX</div>It’s important to me. Like how performing is important to you. Or, <i>was</i> important to you.", "<div id='name'>TAY</div>You’re not subtle.", "<div id='name'>ALEX</div>I wasn’t trying to be. ", "<div id='name'>TAY</div>We’re not doing this again. I’ve already told you—", "<div id='name'>ALEX</div>I know, I know. Your career tanked after your first single.", "<div id='name'>TAY</div>You didn't have to say it out loud.", "<div id='name'>ALEX</div>One of us has to acknowledge it.", "<div id='name'>TAY</div>I do acknowledge it—I'm even a songwriter for Evelyn.", "<i>You turn to the TV, and as if on cue...</i>", "<div id='name'>ANNOUNCER</div>Evelyn Tran is the runner-up!","<i>You turn back to Tay, watching her carefully. You notice a bitterness in the curve of her lip.</i>","<div id='name'>ALEX</div>You're better than her.", "<div id='name'>TAY</div>That's not fair. We're talented in different ways. I'm told that Evelyn has an aura.", "<div id='name'>ALEX</div>You're content to be a one-hit wonder? ", "<div id='name'>TAY</div>I don’t like that word—", "<div id='name'>ALEX</div>When was the last time you released music?", "<div id='name'>TAY</div>Evelyn and I penned a new song on her upcoming album just last week—", "<div id='name'>ALEX</div>I meant music under your own name.", "<div id='name'>TAY</div>I know what you meant.", "<div id='name'>ALEX</div>It's been a decade, hasn't it? A decade since a single failed album and you decided to call it quits—", "<div id='name'>TAY</div>Two.", "<div id='name'>ALEX</div>Fine, two failed albums, whatever.", "<div id='name'>TAY</div>I'm good at what I do now.", "<div id='name'>ALEX</div>You're good at most fucking things, so what?", "<div id='name'>TAY</div>…You think highly of me.", "<div id='name'>ALEX</div>Obviously—I'd have to be blind to not—", "<div id='name'>TAY</div>I like it.", "<i>A slight smile plays at the corner of her mouth, and you try not to stare.</i>", "<div id='name'>TAY</div>What other things am I good at?", "<div id='name'>ALEX</div>Stop fishing for compliments, it's gross.", "<div id='name'>TAY</div>Do you like my voice?", "<div id='name'>ALEX</div>...You won the third season of American Idol.", "<div id='name'>TAY</div>Yes, but do <i>you</i> like my voice?", "<div id='name'>ALEX</div>I do.", "<div id='name'>TAY</div>Let me sing you a lullaby.", "<div id='name'>ALEX</div>You're distracting me.", "<div id='name'>TAY</div>Do you mind?", "<i>You sigh and rest your head into Tay's lap. She hums a sweet melody. </i>", "<i>Before you fall asleep, you catch a glimpse of Tay's face. There's something heartbreaking in her expression.</i>"];
var twoLines = ["Blah"];
var threeLines = ["<i>You're writing poetry at the dinner table when Tay enters.</i>", "<div id='name'>TAY</div>Up already?", "<div id='name'>ALEX</div>Did you know that there’s a planet covered in burning ice?", "<div id='name'>TAY</div>You’re writing.", "<div id='name'>ALEX</div>This time, I’m using a fire metaphor.", "<div id='name'>TAY</div>Is this about the ‘electricity’ thing?", "<div id='name'>ALEX</div>It’s not about the ‘electricity’ thing.", "<div id='name'>TAY</div>It’s totally about the ‘electricity’ thing. Oh my god, you’re insecure about your literary devices.", "<div id='name'>ALEX</div>Shut <i>up</i>.", "<div id='name'>TAY</div>That’s adorable.", "<div id='name'>ALEX</div>Okay, fine: am I repetitive?", "<div id='name'>TAY</div>Alex, I love your work. Everyone will love your work.", "<div id='name'>ALEX</div>Are you sure?", "<div id='name'>TAY</div>Yes!", "<div id='name'>ALEX</div>…you’re right. I’m a great poet.", "<div id='name'>TAY</div>Definitely!", "<div id='name'>ALEX</div>My book can succeed.", "<div id='name'>TAY</div>Exactly!", "<div id='name'>ALEX</div>One day, you’ll be living in my mansion.", "<div id='name'>TAY</div>How presumptuous.", "<div id='name'>ALEX</div>Come on! You know I’ll make it.", "<div id='name'>TAY</div>I meant the other part—about me living with you.", "<i>Tay ducks inside the kitchen, but her voice carries:</i>", "<div id='name'>TAY</div>Don't you think I'll get married? Find a husband, have kids, settle down?", "<i>Staring at your poetry, you don't respond.</i>", "<i>After a moment, you decide to follow Tay into the kitchen, where she's currently hunched over, grabbing some milk from the refrigerator.", "<div id='name'>ALEX</div>Tay—Hey, what’s up with your hand?", "<i>There are bandages all over Tay's right hand.</i>", "<div id='name'>TAY</div>I cut myself when making eggs.", "<div id='name'>ALEX</div>Why did you use a knife to make eggs—", "<div id='name'>TAY</div>Alex, what did you come here to tell me?", "<div id='name'>ALEX</div>Take me with you.", "<i>Tay stiffens.</i>", "<div id='name'>TAY</div>To SL Records?", "<div id='name'>ALEX</div>We’ve been roommates for what, two years already? And I’ve never been there.", "<div id='name'>TAY</div>Don't you have poetry to work on?", "<div id='name'>ALEX</div>I’ll be waiting in the car."];
var fourLines = ["<i>A few minutes later, Tay joins you in the car. She starts to drive to work.</i>", "<div id='name'>TAY</div>Don't talk to her.", "<div id='name'>ALEX</div>What?", "<div id='name'>TAY</div>I'll take you to work if you don't talk to Evelyn.", "<div id='name'>ALEX</div>Why not?", "<div id='name'>TAY</div>How profound. Why do we do anything, really? Like, why did I turn on the radio?", "<i>She turns on the radio.<i>", "<div id='name'>TAY</div>Was I destined to?", "<div id='name'>RADIO</div>Famous pop star Evelyn Tran—", "<div id='name'>ALEX</div>You're so fucking evasive—", "<div id='name'>TAY</div>Shhh!", "<div id='name'>RADIO</div>—was found dead this morning.", "<i>You and Tay look at each other, shocked.</i>", "<div id='name'>RADIO</div>Her body was discovered by her manager Sydney White. Police just confirmed that she was murdered—"];
var fiveLines = ["5"];
var sixLines = ["6"];
var sevenLines = ["7"];

var act = [oneLines, twoLines, threeLines, fourLines, fiveLines, sixLines];

// access memory to keep player where they are

var lineNum = window.localStorage.getItem("lineNum");
var sceneNum = window.localStorage.getItem("sceneNum");

if (lineNum == null){
    lineNum = -1;
}

if (sceneNum == null){
    sceneNum = 0;
}

var currentLine = act[sceneNum][lineNum];

if (currentLine == null){
    currentLine = "Press space to begin.";
}

document.getElementById("text").innerHTML = currentLine;

// when you press the space bar...

document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    addLineNum();
  }
}

// go to the next line...

var addLineNum = function() {
    lineNum++;
    displayCurrentLine();
}

// and display that line!

var displayCurrentLine = function(){
    currentLine = act[sceneNum][lineNum];
    if (currentLine == null){
        if (sceneNum < 7){
            sceneNum++;
            lineNum = -1;
            transitionToNextScene();
        }
        else {
            window.localStorage.clear();
            window.location.href = "investigateFirstfloor.html";
        }
    }
    else{
        document.getElementById("text").innerHTML = currentLine;
    }
}

var transitionToNextScene = function(){
    addLineNum();
}

var goToEvidence = function(){
    window.localStorage.setItem("lineNum", lineNum);
    window.localStorage.setItem("sceneNum", sceneNum);
    window.location.href = "evidence.html";
}