import { Component, OnInit } from '@angular/core';


import { ComponentService } from 'service/component.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trendingsongs',
  templateUrl: './trendingsongs.component.html',
  styleUrls: ['./trendingsongs.component.css']
})
export class TrendingsongsComponent implements OnInit {

  constructor(private ComponentService:ComponentService) { }
  images = [
    {
      path:'https://a10.gaanacdn.com/images/albums/80/4028580/crop_175x175_4028580.jpg',
      title:'song1'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/albums/4Z9bqZoKyQ/9bqgZl7D3y/size_m_1616137005.webp',
      title:'song2'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/9bqgoZZP3y/size_m_1616135425.webp',
      title:'song3'
    },
    {
      path:'https://a10.gaanacdn.com/images/albums/53/3890653/crop_175x175_3890653.jpg',
      title:'song4'
    },
    {
      path:'https://a10.gaanacdn.com/images/albums/91/3983891/crop_175x175_3983891.jpg',
      title:'song5'
    },
    {
      path:'https://a10.gaanacdn.com/images/albums/9/4019209/crop_175x175_4019209.jpgg',
      title:'song6'
    },
    {
      path:'https://a10.gaanacdn.com/images/albums/30/3966230/crop_175x175_3966230.jpg',
      title:'song7'
    },
    {
      path:'https://a10.gaanacdn.com/gn_img/albums/zLp36v3rGe/p36PloZmbr/size_m_1616002409.webp',
      title:'song8'
    },
    {
      path:'https://a10.gaanacdn.com/images/albums/29/3943129/crop_175x175_3943129.jpg',
      title:'song9'
    }
	];


  dataaa:any;
  ngOnInit(): void {
    this.ComponentService.allToppicks()
     .subscribe(data=> {
      this.dataaa=data;
      this.dataaa=JSON.parse(this.dataaa.body);
      console.log("trending",this.dataaa);
    })
  }
  songs:any;
  parse:any;
  check(event:any) {
    this.songs=event;
    console.log("event.playlistName",this.songs);
  }
  }


