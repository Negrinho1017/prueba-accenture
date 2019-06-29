import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtenerClientesComponent } from './obtener-clientes/obtener-clientes.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

const routes: Routes = [
   { path: 'obtener-clientes', component: ObtenerClientesComponent },
   { path: 'formulario-registro', component: FormularioRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
