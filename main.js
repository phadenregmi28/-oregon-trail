class Traveler {
    constructor(Benjamin) {
        this.name = Benjamin;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food == 0) {
            this.isHealthy = false;
        }
        else {
            this.food -=1;
        }
    }
}

class Wagon {
    constructor(_info) {
        this.capacity = _info;
        this.passangers = [];

    }

    getAvailableSeatCount() {
        return this.capacity - this.passangers.length;
    }

    join(traveler) {
        if (this.passangers.length < this.capacity);      //set not full 
        {
            this.passangers.push(traveler);         //trying to add traveler using push function 
        }
    }

    shouldQuarantine() {
        for (let i = 0; i < this.passangers.length; i++) { //to go access the elemnt in the array 
            if (this.passangers[i].isHealthy === false) // check to see if any passenger are sick...
            {
                return true;
            }
            else {
                return false;
            }
        }
    }

    totalFood() {
        this.totalFood = 0;
        for (let i = 0; i < this.passangers.length; i++) {
            this.totalFood += this.passangers[i].food;
        }
        return this.totalFood;
    }
}