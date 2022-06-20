import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RequestComponent } from './request/request.component';
import { LegalResponseComponent } from './legal-response/legal-response.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'user/:name', component: UserComponent},
  {path: 'request/:name', component: RequestComponent},
  {path: 'respuestaLegal/:name', component: LegalResponseComponent},
  {path: 'detailedResponse/:name/:idBoleta', component: ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent, UserComponent, RequestComponent, ResponseComponent, LegalResponseComponent];