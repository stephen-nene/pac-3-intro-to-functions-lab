function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase ();
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())

}

//three cases

function sayHiToHeadphonedRoommate(string){
    let cantHear = "I can't hear you!";
    let yesResponse = "YES INDEED!";
    let freeDinner = "I would love to!";
    if (string.toLowerCase(string)=== string){
        return cantHear;
     }
     else if (string.toUpperCase(string) === string){
        return yesResponse;
    }
    else if ("Let's have dinner together!" === string){
        return freeDinner
    } 
}