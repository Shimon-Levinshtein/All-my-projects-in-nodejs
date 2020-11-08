import{Animal}from"./Animal.js";

class Dragon extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const dragon = new Dragon("fas fa-dragon","Dragon");
