import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApeService } from '../api/ape.service';

import { FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    correo: "",
    nombre: "",
    password: ""

  };
  constructor(private api: ApeService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.user.password = btoa(this.user.password); //Funcion para encriptar en base64.
    this.api.login(this.user).subscribe(
      (res: any) => {
        console.log(res);
        this.api.setToken(res.token);
        console.log(res.token);
        this.router.navigate([`/user/${res[0].nombre}`]);
        Swal.fire(
          'Bienvenido',
          'Inicio de sesión correcto!',
          'success'
        )
      }
    );

  }

}
