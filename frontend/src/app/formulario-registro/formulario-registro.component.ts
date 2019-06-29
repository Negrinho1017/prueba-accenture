import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/Persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  newPerson: Persona;
  constructor() { }

  ngOnInit() {
    this.newPerson = new Persona();
  }

  validarDatos(){
    if(this.newPerson.identification===undefined){
      this.mensaje("Error!","Identification not entered",2);
    }else if(this.newPerson.birthdate===undefined){
      this.mensaje("Error!","Birthdate not entered",2);
    }else if(this.newPerson.firstname===undefined){
      this.mensaje("Error!","Firstname not entered",2);
    }else if(this.newPerson.lastname===undefined){
      this.mensaje("Error!","Lastname not entered",2);
    }
  }

  mensaje(titulo: string, mensaje: string, tipoMensaje: number) {
    Swal.fire(titulo, mensaje, (tipoMensaje == 1) ? 'success' : 'error')
  }

}
