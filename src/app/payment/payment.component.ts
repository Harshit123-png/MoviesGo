import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesgoService } from '../services/moviesgo.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payform!: FormGroup;


  constructor(private moviesgo:MoviesgoService){}
  ngOnInit(){
    this.payform= new FormGroup({
      seatNumber : new FormControl(null,Validators.required),
      seatPrice : new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    let payload = {
      seatNumber: this.payform.value.seatNumber,
      seatPrice: this.payform.value.seatPrice
    }
    console.log(payload);   
    this.moviesgo.payTicket(payload).subscribe((res:any)=>{
      console.log(res);
    });
  }

}
