import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesgoService } from '../services/moviesgo.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  authform! : FormGroup

  constructor(private movieservice: MoviesgoService){}
  ngOnInit(){
    this.authform= new FormGroup({
      name: new FormControl(null,Validators.required),
      email : new FormControl(null,Validators.required),
      phone: new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    // let dt = this.authform.value
    // console.log(dt);
    let payload = {
      name : this.authform.value.name,
      email : this.authform.value.email,
      phone : this.authform.value.phone,
      password : this.authform.value.password 
    }
    console.log(payload);
    this.movieservice.cusAuth(payload).subscribe((res:any)=>{
      console.log(res,"successfully authenticate");
    });
  }

}
