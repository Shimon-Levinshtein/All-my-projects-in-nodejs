import{Animal}from"./Animal.js";

class Hippo extends Animal{

    constructor(photo,name){
      super(photo,name);
    }
  }
  
  export const hippo = new Hippo("fas fa-hippo","Hippo");
