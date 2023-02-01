import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

const users = [
  { email: 'user1@test.com', password: 'test1' },
  { email: 'user2@test.com', password: 'test2' },
  { email: 'user3@test.com', password: 'test3' }
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'login';
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let mensaje = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (this.loginForm.valid) {
      if (users.find(user => user.email === email && user.password === password)) {
        mensaje = 'login_valido';
        this.toastr.success('Success', 'Usuario correcto!');
      } else {
        this.toastr.error('Error', 'Usuario incorrecto!');
      }
      console.log('Respuesta del servicio de login --> ', mensaje);
    }
    return mensaje;
  }
}
