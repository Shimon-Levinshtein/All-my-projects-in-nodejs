

export const animalsArray = ['Dog', 'Horse', 'Cat', 'Dove', 'Republican', 'Hippo', 'Dragon', 'Frog'];

export class Animal {
    constructor(photo,name) {
        this.photo = photo;
        this.name = name;
    }
    draw() {
        let divCard = document.createElement("div");
        divCard.className = "flp-card";
        let fontAnimmal = document.createElement("i");
        fontAnimmal.className = this.photo;
        let front = document.createElement("div");
        let back = document.createElement("div");
        front.className = "front";
        back.className = "back";
        back.appendChild(fontAnimmal);
        divCard.appendChild(front);
        divCard.appendChild(back);
        
        return divCard;
        
       
    }
    compare(){
      return this.name;
    }
}


