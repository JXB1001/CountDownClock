var data = [
    {
        name:"Small Embedded Systems Submission",
        month:5,
        day:9,
        hour:23,
        minute:59
    },
    {
        name:"CCN Exam",
        month:5,
        day:21,
        hour:9,
        minute:30
    },
    {
        name:"SCAS Exam",
        month:5,
        day:23,
        hour:14,
        minute:0
    }
]

var daysInMonth = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

var c = {x:window.innerWidth*0.98, y:window.innerHeight*0.97};

var currentDataInt;
const warningColour = "#FF0000";
const normalColour = "#000000";
var warning;

function setup() {
    createCanvas(c.x,c.y);
    currentDataInt = 0;
    textAlign(CENTER);
    fill(255);
    warning = false;
}

function draw() {
    
    c = {x:window.innerWidth*0.98, y:window.innerHeight*0.97};
    createCanvas(c.x,c.y);
    d = data[currentDataInt];
    let daysToGo = 0
    
    if(d["month"] != month()){
        daysToGo += daysInMonth[month()] - day();
        tempMonth = month();
        while(tempMonth < d.month-1){
            tempMonth++;
            daysToGo += daysInMonth[tempMonth];
        }
    }
    daysToGo += d["day"];

    let ts = 60;
    textSize(ts);
    let hoursToGo = d["hour"]-hour();
    let minutesToGo = d["minute"]-minute();
    let secondsToGo = 59-second();

    hoursToGo = (hoursToGo < 0) ? hoursToGo = 23-hour()+d["hour"] : hoursToGo;
    minutesToGo = (minutesToGo < 0) ? minutesToGo = 59-hour()+d["hour"] : minutesToGo;

    if(daysToGo < 2){
        background(warningColour);
    }
    else{
        background(normalColour);
    }

    write(daysToGo, "day", c.x/2, c.y/4)
    write(hoursToGo, "hour", c.x/2, c.y/4 + 75*1)
    write(minutesToGo, "minute", c.x/2, c.y/4 + 75*2)
    write(secondsToGo, "second", c.x/2, c.y/4 + 75*3)

    while(textWidth(d["name"]) > c.x*0.8){
        ts--;
        textSize(ts);
    }
    text(d["name"], c.x/2, c.y-c.y/4)


}

function write(v, tag, x, y){
    var end = "";
    var string = "";
    if(v > 1){
        end = "s";
    }
    string += v.toString();
    string += (" " + tag + end);
    text(string,x,y);
}

function mousePressed() {
    currentDataInt = (currentDataInt+1)%data.length;
}

