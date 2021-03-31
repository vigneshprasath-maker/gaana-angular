import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { ComponentService } from 'service/component.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-toppicks',
  templateUrl: './toppicks.component.html',
  styleUrls: ['./toppicks.component.css']
})
export class ToppicksComponent implements OnInit {
  
  constructor(private ComponentService:ComponentService) { }
  images = [
    {
      path:'https://a10.gaanacdn.com/gn_img/showcase/7rVW1Rbk56/rVW1axRWk5/size_m_1553005010.webp'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/showcase/kGxbn03y4r/GxbnJV1by4/size_m_1616949541.webp'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/showcase/jBr3gybR1m/jBr3gV9KR1/size_m_1553018225.webp'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/showcase/ogNWkDbmXJ/ogNWkXpbmX/size_m_1553002080.webp'
    }
	];
  dataaa:any;
  ngOnInit(): void {
    this.ComponentService.allToppicks()
     .subscribe(data=> {
      this.dataaa=data;
      this.dataaa=JSON.parse(this.dataaa.body);
      console.log("top picks",this.dataaa);
    })
  }
  songs:any;
  parse:any;
  check(event:any) {
    this.songs=event;
    console.log("event.playlistName",this.songs);
  }
  }

