
var date = new Date();
date.setTime(date.getTime() + (2592000));

function createCookie(value) {
    var cookie = "teamID=" + value + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: teamID value: " + value);
}
