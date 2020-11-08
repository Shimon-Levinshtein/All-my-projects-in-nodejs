import{Animal}from"./Animal.js";

class Horse extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const horse = new Horse("fas fa-horse","Horse");
