import{Animal}from"./Animal.js";

class Dog extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const dog = new Dog("fas fa-dog","Dog");
