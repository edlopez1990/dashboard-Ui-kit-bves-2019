import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangueColorService {

  color : number = 0;
  
  constructor() { }

  public chnagueColor(index){
    this.color= index;
  }
}
