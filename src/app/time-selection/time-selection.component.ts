import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Router,ActivatedRoute } from '@angular/router';
import { MoviesgoService } from '../services/moviesgo.service';


@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.css']
})
export class TimeSelectionComponent {

  data:any;
  id:any;
  upcomingDates: Date[] = [];
  isData = false;
  showdata:any;
  tdate: any;
  currentDate!: string;
  city: any;
  time: any;
  thId: any;

  constructor( private router:Router,
    private route:ActivatedRoute ,
    private moviesgo:MoviesgoService){
    this.id = this.route.snapshot.paramMap.get("id")
    let today = new Date();

    for (let i = 1; i <= 5; i++) {
      let nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      this.upcomingDates.push(nextDate);
    }
    
  }

  ngOnInit(): void {
    this.getshow();
    const today = moment();
    this.currentDate = today.format('DD-MM-YYYY');
  }

  getshow(){
    this.moviesgo.getsingleShow(this.id).subscribe((res:any)=>{
      this.showdata = res[0];
    });
  }

  reloadth(event:any){
    console.log(event,"this event is runnning");
    this.city = event
    this.moviesgo.gettheaterbycity(event).subscribe((res:any) =>{
      console.log(res,"this is city getdata");
      this.data = res;
      this.isData = true;
    });
  }
   
  todayDate(date:any){
    this.tdate = date;
  }

  getTime(value:any,data:any){
    console.log(data);
    this.thId = data._id
    this.time = value.startTime
    console.log(value.startTime,this.city,this.currentDate);
    this.router.navigate(['seat'],{
      queryParams: {
        showId: this.id,
        thId: this.thId,
        startTime: this.time,
        city: this.city,
        currentDate: this.currentDate,
      }
    })
  }

  getfulldata(value:any){
    console.log(value)
  }

}