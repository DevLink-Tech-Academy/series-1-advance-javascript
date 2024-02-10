export class Human {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} speak.`);
    }

    walk() {
        console.log(`${this.name} is walking.`);
      }

    sleep() {
        console.log(`${this.name} sleep.`);
      }
    eat() {
        console.log(`${this.name} eat.`);
      }
  };

 
 

//   const human = new Human('Muhammad');
//   human.speak(); // Cat makes a sound.
  