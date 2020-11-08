import{Animal}from"./Animal.js";

class Dove extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const dove = new Dove("fas fa-dove","Dove");
