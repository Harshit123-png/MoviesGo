import { Component, Output, EventEmitter, } from '@angular/core';
import { MoviesgoService } from '../services/moviesgo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  city:any
  selectedCity: any;
  @Output() reloadth = new EventEmitter();

  constructor(private moviesgo: MoviesgoService) { }

  ngOnInit() {
    this.getcity();
  }

  cities: any[] = [
    { name: 'New delhi'},
    { name: 'Mumbai'},
    { name: 'haridwar'},
    { name: 'Dehradun'},
    { name: 'kolkata'}
  ];

  getcity() {
    this.moviesgo.getcity().subscribe((res: any) => {
      this.city = res;
    });
  }

  changeCity(event:any){
    console.log(event.target.value,"this is value of city")
    this.selectedCity = event.target.value;
    this.reloadth.emit(this.selectedCity)
  }

  gettheaterbycity(){
    this.moviesgo.gettheaterbycity(this.selectedCity).subscribe((res:any) =>{
      console.log(res,"this is data of gettheaterbycity ");
    });
  }
}