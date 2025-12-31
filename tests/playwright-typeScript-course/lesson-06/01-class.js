class car {
    carName
    color
    model

    constructor(carName, color, model){
        this.carName = carName;
        this.color = color;
        this.model = model;
    }

    myModel(){
        console.log(`My model is ${this.model}`);
    }

    feedbackCar (feedback) {
        console.log(`Customer send feedback with detail is ${feedback}`);
    }

    saySomething (message) {
        console.log(`Say something: ${message}`);
        return `Say something: ${message}`
    }
}

const toyota = new car ("toyota","black","2010")
console.log(toyota);
toyota.myModel(); // in ra My model is 2010
console.log(toyota.carName);
console.log(toyota.color);
console.log(toyota.model);
toyota.feedbackCar("Very good");
toyota.saySomething("sayonara")
const saySomething = toyota.saySomething("sayonara");
console.log(saySomething)