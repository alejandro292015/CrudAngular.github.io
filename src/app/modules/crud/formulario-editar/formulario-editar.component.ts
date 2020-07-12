import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleados } from '../../../../models/datos';
import { ActivatedRoute, Router } from '@angular/router';
import { HerokuService } from '../../../services/heroku.service';


@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {
  public  id : string;
  public  nombre : string;
  public apellido : string;
  public identificacion : string;
  public correo : string;
  empleados:Empleados
  empleado : any
 
  public frmAgregarEmpleado: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private activedRoute : ActivatedRoute,
    public service : HerokuService,
    private router:Router

    ) {
      debugger
      this.empleados = new Empleados()
      this.obtenerData()
    }
    
    ngOnInit() {
      this.validacionesCampos()
    }
    obtenerData(){
      debugger
      this.empleados.id = (this.activedRoute.snapshot.params.id.toString());
      this.empleados.nombre = (this.activedRoute.snapshot.params.nombre.toString());
      this.empleados.apellido = (this.activedRoute.snapshot.params.apellido.toString());
      this.empleados.identificacion = (this.activedRoute.snapshot.params.identificacion.toString());
      this.empleados.correo = (this.activedRoute.snapshot.params.correo.toString());
      
      
    }

    editarEmpleados(){
      debugger
     
      this.service.editarEmpleado(this.empleados)
      this.router.navigate(['/home']);

    }
    
    cancelar(){
      this.router.navigate(['/home']);

    }
   
    
    validacionesCampos() {
      debugger
      this.frmAgregarEmpleado = this.formBuilder.group({
      idd: this.formBuilder.control('', [Validators.required]),

      nombre: this.formBuilder.control('', [Validators.required,Validators.maxLength(40)]),
      apellido: this.formBuilder.control('', [Validators.required]),
      id: this.formBuilder.control('', [Validators.required]),
      correo: this.formBuilder.control('', [Validators.required,Validators.maxLength(40)])
     
    });
  }


}
