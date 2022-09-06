function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    shout = string.toUpperCase()
    console.log(shout)
}

function logWhisper(string) {
    whisper = string.toLowerCase()
    console.log(whisper)
}

function sayHiToHeadphonedRoommate(string) {
    if (string == 'Let\'s have dinner together!'){
        return 'I would love to!'
    }
    if (string == string.toLowerCase()){
        return 'I can\'t hear you!' 
    }
    if (string == string.toUpperCase()){
        return 'YES INDEED!'
    }
}