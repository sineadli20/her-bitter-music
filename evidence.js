var visibleElement = function(element) {
    document.getElementById(element).style.visibility = "visible";
}

var pieceOfEvidence;
var evidenceList = ["security", "autopsy", "skid-marks", "sheet-music", "locks", "broken-instruments"];

for (pieceOfEvidence of evidenceList) {
    if (window.localStorage.getItem(pieceOfEvidence) == 1) {
        visibleElement(pieceOfEvidence);
    }
}

var textBoxDisplay = function(textToDisplay) {
    document.getElementById("text").innerHTML = textToDisplay;
}

var showSecurity = function() {
    textBoxDisplay("There is only one entrance to the SL Records Building. It’s heavily protected by a metal detector and guards that pat down everyone who enters.");
}

var showAutopsy = function() {
    textBoxDisplay("Evelyn died at 1:34 AM. She was strangled by a metal ligature. There were no bruises or cuts on her.");
}

var showSkidMarks = function() {
    textBoxDisplay("Something heavy was dragged toward the door of Evelyn’s studio and back across the hallway.");
}

var showSheetMusic = function() {
    textBoxDisplay("The track that Evelyn was recording on the night she was murdered.");
}

var showLocks = function() {
    textBoxDisplay("There's a heavy-duty lock on the inside of the door and the window in Evelyn’s studio. Neither of them was tampered with. Both are unlocked by keys. The window was found locked and the door was found unlocked.");
}

var showBrokenInstruments = function() {
    textBoxDisplay("The murderer destroyed the instruments in the storage room.");
}

var goToStory = function(){
    window.location.href = window.localStorage.getItem("actName");
}