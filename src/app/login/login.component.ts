import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  loginForm;
  constructor( private ngZone:NgZone, private router: Router, private fb:FormBuilder,private loginService: LoginService) {

    loginForm:FormControl;
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      name: new FormControl(''),
    });
  }
  // constructor( public loginForm:FormGroup, private fb:FormBuilder, private loginService: LoginService) {
  //   this.loginForm = this.fb.group({
  //     email: new FormControl(''),
  //     name: new FormControl(''),
  //   });
  // }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      name: new FormControl(''),
    });
  }
  onSubmit(formdata:any){

    console.log(formdata);
    this.loginService.post(formdata).subscribe((resp) => {
      console.log(resp);

      this.response = resp;

    });
    // routing logic
    this.ngZone.run(() => this.router.navigateByUrl("/home"));
  }

}
