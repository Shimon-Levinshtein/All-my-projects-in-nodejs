import{Animal}from"./Animal.js";

class Republican extends Animal{

    constructor(photo,name){
      super(photo,name);
      this.name = name;
      this.photo = photo;
    }
  }
  
  export const republican = new Republican("fas fa-republican","Republican");
