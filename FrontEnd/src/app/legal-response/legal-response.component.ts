import { Component, OnInit } from '@angular/core';
import { ApeService } from '../api/ape.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal-response',
  templateUrl: './legal-response.component.html',
  styleUrls: ['./legal-response.component.css']
})
export class LegalResponseComponent implements OnInit {

  public userName = "";
  registroSolicitudes: any[] = []; //Array para almacenar todas las solicitudes de la db

  constructor(private api: ApeService, private router: Router, private route: ActivatedRoute) { }

  replica(idBoleta: number): void {

    //console.log('usted presionó en responder '+idBoleta)
    //Hay que redireccionar a el componente de respuesta con el id de boleta correspondiente

    this.router.navigate([`/detailedResponse/${this.userName}/${idBoleta}`]);


  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params['name'];
      console.log("UserName: ", this.userName);
    });
    
    this.api.getAllRequests().subscribe(
      (response: any) => {

        this.registroSolicitudes = response;
        console.log(this.registroSolicitudes)
      }
    );
  }

}
