import { Component,ViewChild,ElementRef } from '@angular/core';
import { MoviesgoService } from '../services/moviesgo.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  startTime: any;
  city: any;
  currentDate: any;
  thId: any;
  ticketId:any
  seats: any;
  Array = Array;
  showId: any;
  curseat: any;
  @ViewChild('openqrmodal',{static: false }) qref: any;
  date: any;
  Date: any;
  qrCodeImage: string = '';
  $: any;
  bseatNumber: number[] = [] 
  seatdata: any;
  seatNumbers: any;
  selectedSeats: number[] = [];
  seatToBlur: number[] = [];

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
      this.ticketId = res.savedTicket.ticketId;
      this.bseatNumber = res.savedTicket.seatNumber
      console.log(this.ticketId)
      this.generateQr();
      this.ngOnInit();
    })
  }

  generateQr(){
    let payload = {
      data: this.ticketId
    }
    this.moviesgoservice.creatQr(payload).subscribe((res:any)=>{
      console.log(res);
      this.qrCodeImage = res.QrCODE
      $('#exampleModal').modal('show');
    })
    this.downloadQrcode();
  }

  downloadQrcode(){
    const link = document.createElement('a');
    link.href = this.qrCodeImage;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}