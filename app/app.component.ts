import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl : "../views/appComponent.html"

})
export class AppComponent { 
    title : string  ;
    myFavHero : string ;
    heroList : Array<string>;
    constructor(){
        this.title = 'Tour Of Heroes';
        this.myFavHero = 'Muhammad Sallallahu Alaihi Wasallam';
        this.heroList = ['Hazrat Abu Bakr (R.A)' , 'Hazrat Ali (R.A)'];
    }
}
