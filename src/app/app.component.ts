import { Component, OnInit } from '@angular/core';
import { InformationsService } from './informations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'restauranttemplate';
  infos:any;
  constructor(
    private infoServ:InformationsService
  ){}
  ngOnInit(){
    this.infoServ.getInformations().subscribe((response)=>{
      this.infos=response;
    })
  }

}
