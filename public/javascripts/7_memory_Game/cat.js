import{Animal}from"./Animal.js";

class Cat extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const cat = new Cat("fas fa-cat","Cat");
