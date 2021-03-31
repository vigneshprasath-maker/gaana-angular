import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input, Output, EventEmitter } from "@angular/core";
import { ComponentService } from 'service/component.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-topcharts',
  templateUrl: './topcharts.component.html',
  styleUrls: ['./topcharts.component.css']
})
export class TopchartsComponent implements OnInit {

  @Output() songs = new EventEmitter();
  constructor(private ComponentService:ComponentService,private http:HttpClient) { }

    // getall() {
    //   this.ComponentService.getAllTopcharts().subscribe((imagess:any)=> {
    //     this.imagess=this.imagess;
    //   });
    // }


  images = [
    {
      path:'https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GQwOybq/size_m_1616673878.webp',
      title:'song1'
    },
    {
      path:'https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/4MKP2xArWo/size_m_1610011810.webp',
      title:'song2'
    },
    {
      path:'https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/JbDEDR0lKn/size_m_1615579922.webp',
      title:'song3'
    },
    {
      path:'https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVRgWkq/XWVVvo10Wk/size_m_1616745092.webp',
      title:'song4'
    },
    {
    path:'https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5EKwRO/qK57eLrXWw/size_m_1610014510.webp',
    title:'song5'
  },
  {
    path:'https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/l3MZ7qeGWr/size_m_1615579343.webp',
    title:'song6'
  },
  {
    path:'https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/Lp36kP5NWr/size_m_1616673715.webp',
    title:'song7'
  },
  {
    path:'https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xP3gVY/d3xOqJnPKg/size_m_1610014627.webp',
    title:'song8'
  },
  {
    path:'https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xzPbgV/d3xDq8gR3g/size_m_1553597328.webp',
    title:'song9'
  }
	];

  colorArray = [ '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  


  public getColor(index :number) : string {
    switch( index) { 
      case 0 : return "#FF6633"
      case 1 : return "#FFB399"
      case 2 : return "#FF33FF"
      case 3 : return "#00B3E6"
      case 4 : return "#E6B333"
      case 5 : return "#3366E6"
      case 6 : return "#6680B3"
      case 7 : return "#66991A"

      case 8 : return "#FF99E6"
      case 9 : return "#6666FF"
      case 10 : return "#FF1A66"
      case 11 : return "#1AB399"
      default: return "#abc"
    }
  }


  dataaa:any;
  public datas:any = [];
  ngOnInit(){
    // this.http.get('https://djn17gpcua.execute-api.us-east-1.amazonaws.com/dev/top-picks').subscribe(data=> {
    //   this.dataaa=data;
    //   console.log("dataaa",this.dataaa);
    // })
     this.ComponentService.getAllTopcharts()
     .subscribe(data=> {
      this.dataaa=data;
      this.dataaa=JSON.parse(this.dataaa.body);
      console.log("dataaaaaaaa",this.dataaa);
    })
  }
  check(event:any) {
    console.log("event.playlistName",event.playlistName);
    this.songs.emit(event.playlistName);
  }
}
