import { Component, OnInit } from '@angular/core';

import { ApeService } from '../api/ape.service';

import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  public userName = "";

  formularioBoleta: any;

  submitted = false;
  titulo = 'Formulario Solicitud';

  public boleta: any;
  constructor(private api: ApeService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      console.log("UserName: ", this.userName);
    });

    this.formularioBoleta = this.formBuilder.group({
      linea: ['', Validators.required, Validators.minLength(10)],
      evidenciaArchivo1: ['', Validators.required],
      detalle1: ['', Validators.required]
    });
  }

  get f() { return this.formularioBoleta.controls; }

  addBoleta() {
    this.boleta = {
      linea: this.formularioBoleta.value.linea,
      detalle1: this.formularioBoleta.value.detalle1,
      evidenciaArchivo1: this.formularioBoleta.value.evidenciaArchivo1
    };

    this.api.insert(this.boleta).subscribe(
      (response: any) => {
        //alert(response);
        Swal.fire(
          'Envío exitoso!',
          'La solicitud se envió correctamente',
          'success'
        )
      }

    );
  }

  onSubmit(): void {
    // Process checkout data here
    this.submitted = true;

    if (this.formularioBoleta.invalid) {
      return;
    } else {
      this.addBoleta();
      console.log(this.formularioBoleta.value.detalle1);
      console.warn('Su solicitud ha sido enviada', this.formularioBoleta.value);
      this.formularioBoleta.reset();
      this.submitted = false;
    }
    
  }
}
