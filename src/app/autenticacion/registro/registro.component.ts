import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  formularioForm: FormGroup; // Para extraer los datos
  formulario: any; // Para almanecenar los datos    
  
  constructor(private _formBuilder: FormBuilder) { }
// Inicializamos el objeto con sus valores por default 
// y sus validaciones en el evento ngOnInit
  ngOnInit() {
    this.formularioForm = this._formBuilder.group({
      'email':['',[ Validators.required, Validators.email ]],
      'password':['',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    }); 
  }
// Agregamos un metodo para guardar los datos del form en el objeto
  enviarDatos(){ this.formulario = this.guardarDatos(); }
// obtenemos los datos del formulario
  guardarDatos(){
    const datos = {
      email: this.formularioForm.get('email').value,
      password: this.formularioForm.get('password')
    }
    return datos;
  }


}
