import{Animal}from"./Animal.js";

class Dog extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const frog = new Dog("fas fa-frog","Frog");
