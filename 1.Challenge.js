// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var levels = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class User {
    constructor (userName,xp,arr){
        this.userName = userName;
        this.xp = xp;
        this.log = arr;
    }

    newSolvedChallengel(Challenge){
        //let v = Challenge.Level;
        // console.log(v)
        this.xp = this.xp+levels[Challenge.level];
        // console.log(this.xp);
        this.log.push(Challenge.id);
        // console.log(this.log);
    }

}

var user1 = new User("JAD", 0, []);
console.log(user1);
user1.newSolvedChallengel({
    id: 1,
    level: 'VE'
});

let o = {
        id: 2, 
        level: 'ME'
};
        user1.newSolvedChallengel(o);
        console.log(user1.xp);
        console.log(user1.log);
