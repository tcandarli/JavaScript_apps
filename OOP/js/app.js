
function Human(FirstAge) {
    var age = FirstAge;

    this.increaseAge = function() {
        age++;
    }

    this.tellYourAge = function() {
        return age;
    }
}

function InterestingClass() {
    this.doSomethingInteresting = function(humanObject) {
        humanObject.increaseAge();
        humanObject.increaseAge();
        humanObject.increaseAge();
        humanObject.increaseAge();
    }
}

let interesting = new InterestingClass();

let John = new Human(41);
let Mike = new Human(22);