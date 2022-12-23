import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const val = this.form.value;

    if (val.email && val.password) {
      console.log('User added')
      // this.authService.login(val.email, val.password);
      this.router.navigateByUrl('')
    } else{
      alert('Please fill all credentials!')
    }
  }
}
