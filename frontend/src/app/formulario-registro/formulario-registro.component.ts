import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/Persona';
import Swal from 'sweetalert2';
import { ObtenerClientesService } from '../obtener-clientes/obtener-clientes.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  newPerson: Persona;
  clientes: any;
  resultado: Persona[];
  selectedColor: string;
  constructor(private service: ObtenerClientesService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.newPerson = new Persona();
    this.selectedColor = localStorage.getItem('selectedColor');
  }

  validarDatos() {
    if (this.newPerson.identification === undefined) {
      this.mensaje("Error!", "Identification not entered", 2);
    } else if (this.newPerson.birthdate === undefined) {
      this.mensaje("Error!", "Birthdate not entered", 2);
    } else if (this.newPerson.firstname === undefined) {
      this.mensaje("Error!", "Firstname not entered", 2);
    } else if (this.newPerson.lastname === undefined) {
      this.mensaje("Error!", "Lastname not entered", 2);
    } else {
      this.validaciones();
    }
  }

  ingresarUsuario() {
    this.db.list('/clients').push(this.newPerson);
  }

  validaciones() {
    this.service.obtenerClientes().subscribe(res => {
      this.clientes = res;
      this.resultado = Object.keys(this.clientes).map(e => this.clientes[e]);
      if (this.resultado.find(cliente => cliente.identification == this.newPerson.identification)) {
        this.mensaje("Error!", "Client already registered in the database", 2);
      } else if (!this.esMayorDeEdad()) {
        this.mensaje("Error!", "You are not of legal age", 2);
      } else {
        this.ingresarUsuario();
        this.mensaje("Excellent!", "You are registered", 1);
      }
    })

  }

  mensaje(titulo: string, mensaje: string, tipoMensaje: number) {
    Swal.fire(titulo, mensaje, (tipoMensaje == 1) ? 'success' : 'error')
  }

  esMayorDeEdad(): boolean {
    let age = (new Date().getTime() - new Date(<string>this.newPerson.birthdate).getTime()) / (1000 * 3600 * 24 * 365);
    if (age < 18) {
      return false;
    }
    return true
  }

}
