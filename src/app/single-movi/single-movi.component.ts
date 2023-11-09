import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesgoService } from '../services/moviesgo.service';
import * as moment from 'moment';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-single-movi',
  templateUrl: './single-movi.component.html',
  styleUrls: ['./single-movi.component.css']
})
export class SingleMoviComponent {

  id:any;
  show:any;
  moment:any;

  constructor( private route:ActivatedRoute, private moviesgo:MoviesgoService,private router:Router){
    this.id = this.route.snapshot.paramMap.get("id")
  }
  
  ngOnInit(){
    this.getsingleshow()
  }

  getsingleshow(){
    console.log(this.id);
    this.moviesgo.getsingleShow(this.id).subscribe((res:any)=>{
      // console.log(res,"this is single data")
      this.show = res[0];
      console.log(this.show);
    })
  }

  singleMovi(id:any){
    this.router.navigate(['time/'+this.id],this.id);
        console.log("route successfull")
  }
}
