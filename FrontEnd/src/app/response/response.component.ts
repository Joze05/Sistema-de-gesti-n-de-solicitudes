import { Component, OnInit } from '@angular/core';
import { ApeService } from '../api/ape.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  idBoleta = undefined;
  registroSolicitudes: any[] = [];
  boleta = {
    linea: '',
    evidenciaArchivo1: '',
    detalle1: ''
  }

  public respuesta: any;

  public userName = "";
  submitted = false;
  formularioRespuesta: any;

  constructor(private api: ApeService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      console.log("UserName: ", this.userName);
    });

    this.route.params.subscribe((params) => {//Con esto obtenemos el id de la boleta que se va a responder
      this.idBoleta = params['idBoleta']; // (+) converts string 'id' to a number
      //console.log(this.idBoleta);

      this.api.getAllRequests().subscribe(

        (response: any) => {

          this.registroSolicitudes = response;
          //console.log(this.registroSolicitudes[0].idBoleta);
          var item = this.registroSolicitudes.filter(x => x.idBoleta == this.idBoleta)[0];
          this.boleta.linea = item.linea;
          this.boleta.evidenciaArchivo1 = item.evidenciaArchivo1;
          this.boleta.detalle1 = item.detalle1;
          console.log(this.boleta.linea)

        }

      );
    });

    this.formularioRespuesta = this.formBuilder.group({
      descripcion: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.formularioRespuesta.controls;
  }

  insertResponse(){ //Metodo para guardar una respuesta 

    this.respuesta = {
      descripcion: this.formularioRespuesta.value.descripcion
    };

    this.api.insertRespuesta(this.respuesta).subscribe((response: any) => {
      //alert(response.message);
      Swal.fire(
        'Envío exitoso!',
        'La respuesta fue enviada correctamente',
        'success'
      )
    });

  }


  onSubmit(): void {
    // Process checkout data here

    this.submitted = true;

    if (this.formularioRespuesta.invalid) {
      alert('Por favor ingrese una descripción válida');
      return;
    } else {
      this.insertResponse();
      this.router.navigate([`/respuestaLegal/${this.userName}`]);
      this.formularioRespuesta.reset();
      this.submitted = false;
    }
  }

}
