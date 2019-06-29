import { Component, OnInit } from '@angular/core';
import { ObtenerClientesService } from './obtener-clientes.service';
import Swal from 'sweetalert2'
import { Persona } from '../modelo/Persona';

@Component({
  selector: 'app-obtener-clientes',
  templateUrl: './obtener-clientes.component.html',
  styleUrls: ['./obtener-clientes.component.css']
})
export class ObtenerClientesComponent implements OnInit {
  clientes: any;
  resultado: Persona[];
  constructor(private service: ObtenerClientesService) { }

  ngOnInit() {
    this.service.obtenerPuntuacionEscalarClaves().subscribe(res => {
      this.clientes = res;
      this.resultado = Object.keys(this.clientes).map(e => this.clientes[e]);
      this.mensaje("Excelente!", "Datos encontrados", 1);
    }, error => {
      this.mensaje("Error!", "Datos no encontrados", 2);
    });
  }

  mensaje(titulo: string, mensaje: string, tipoMensaje: number) {
    Swal.fire(titulo, mensaje, (tipoMensaje == 1) ? 'success' : 'error')
  }

}
