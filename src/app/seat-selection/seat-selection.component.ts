import { Component } from '@angular/core';
import { MoviesgoService } from '../services/moviesgo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  // seats: number[] = Array.from({ length: 24 }, (_, index) => index + 1);
  startTime: any;
  city: any;
  currentDate: any;
  thId: any;
  seats: any;
  Array = Array;
  showId: any;
  curseat: any;
  date: any;
  Date: any;
  seatdata: any;
  seatNumbers: any;
  selectedSeats: number[] = [];
  seatToBlur: any;

  constructor(private moviesgoservice: MoviesgoService, private activroute: ActivatedRoute) { }
  ngOnInit() {
    this.activroute.queryParams.subscribe(params => {
      this.startTime = params['startTime'];
      this.city = params['city'];
      this.currentDate = params['currentDate'];
      this.thId = params['thId'];
      this.showId = params['showId']
      this.Date = params['currentDate']
    });

    console.log(this.city)
    this.getsingleTheater();
    this.getBookedSeats();
  }


  toggleSeat(seat:any){
    const index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  getsingleTheater() {
    this.moviesgoservice.getSingleTheater(this.thId).subscribe((res: any) => {
      console.log(res);
      this.seats = res;
    });
  }

  getBookedSeats() {
    let payload = {
      theater_id: this.thId,
      show_id: this.showId,
      city: this.city,
      timing: this.startTime,
      showDate: this.Date,
    }
    this.moviesgoservice.getTicket(payload).subscribe((res: any) => {
      console.log(res, "this is tickets for this theater");
      this.seatdata = res; 
      const allSeatNumbers = this.seatdata.flatMap((seat:any) => seat.seatNumber);
      // this.seatNumbers = this.seatdata.map((seat: { seatNumber: any; }) => seat.seatNumber.map((numberofseat:any)=> numberofseat));
      this.seatToBlur = allSeatNumbers;
      console.log(this.seatToBlur, "this seats for blur");
    });
  }

  bookSeat() {
    console.log('Selected Seats:', this.selectedSeats);
    let payload = {
      theater_id: this.thId,
      show_id: this.showId,
      city: this.city,
      timing: this.startTime,
      seatNumber: this.selectedSeats,
      showDate: this.Date
    }
    console.log(payload)
    this.moviesgoservice.bookTicket(payload).subscribe((res: any) => {
      console.log(res, "ticket booked successfully");
      alert("successfully booked");
    })
  }
}