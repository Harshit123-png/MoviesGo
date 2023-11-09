import { Component } from '@angular/core';
import { MoviesgoService } from '../services/moviesgo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  showData:any

  constructor(private moviego: MoviesgoService ,private router:Router) { }

  ngOnInit() {
    this.getShow();
  }

  getShow() {
    this.moviego.getMovies().subscribe((res: any) => {
      this.showData = res;
      console.log(res , "this is show")
    });
  }

  singleMovi(_id:any){
    this.router.navigate(['single/'+_id],_id);
        console.log("route successfull")
  }
}
