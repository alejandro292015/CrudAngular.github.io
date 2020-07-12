import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleados } from '../../../../models/datos';
import { ThrowStmt } from '@angular/compiler';
import { HerokuService } from '../../../services/heroku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.css']
})
export class FormularioAgregarComponent implements OnInit {

  empleados: Empleados
  public frmAgregarEmpleado: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private servie: HerokuService,
    private router: Router,



  ) {
    this.empleados = new Empleados()

  }
  
  ngOnInit() {
    this.validacionesCampos()
  }

  cancelar(){
    this.router.navigate(['/home']);

  }
 

   agregarEmpleado(){
     debugger
     this.servie.agregarEmpleado(this.empleados).subscribe((res:any)=>{
      if (res !== null || res !== {}) {


        this.router.navigate(['/home']);
      }
     }

     )
   }
  validacionesCampos() {
    debugger
    this.frmAgregarEmpleado = this.formBuilder.group({
      nombre: this.formBuilder.control('', [Validators.required,Validators.maxLength(40)]),
      apellido: this.formBuilder.control('', [Validators.required]),
      id: this.formBuilder.control('', [Validators.required]),
      correo: this.formBuilder.control('', [Validators.required,Validators.maxLength(40)])
     
    });
  }


}
