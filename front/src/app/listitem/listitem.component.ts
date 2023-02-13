import { Component, OnInit} from '@angular/core';
import { Packet } from './model/packet';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})

export class ListitemComponent implements OnInit {
 itemlist:Packet[];
 constructor(){
  this.itemlist = [
    {
      id:1,
      name:"manuska",
      version:5,
      type:2
    }, {
      id:2,
      name:"firmis",
      version:5,
      type:2
    },{
      id:3,
      name:"ohje",
      version:5,
      type:2
    }, {
      id:4,
      name:"default asetukset",
      version:5,
      type:2
    }
   ];
 }

 ngOnInit(): void{}

}