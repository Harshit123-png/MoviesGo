import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesgoService } from '../services/moviesgo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authform! : FormGroup

  constructor( private movieservice:MoviesgoService){}
  ngOnInit(){
    this.authform= new FormGroup({
      email : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    let payload = {
      email: this.authform.value.email,
      password: this.authform.value.password
    }
    this.movieservice.authCus(payload).subscribe((res:any)=>{
      console.log("successfulllt authentication")
    })
  }
}
