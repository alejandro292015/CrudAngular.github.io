import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../../../services/heroku.service';
import { Empleados } from '../../../../models/datos';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.css']
})
export class HomeCrudComponent implements OnInit {
  public opcionesFiltro$: Subject<Empleados[]> = new Subject<Empleados[]>();
   
  public id ={
    id : ''
  }
  public  empleados: Empleados[] = [];
   resultado : string

  constructor(
    private herokuServices : HerokuService,
    private router: Router,

  ) { }

  ngOnInit() {
    debugger
    this.obtenerData()
    
  }
  obtenerData(){
  this.herokuServices.obtenerEmpleados().subscribe( (resp:any ) => 
  this.empleados = resp)}
  obtenerAgregarFormulario(){
    this.router.navigate(['/agregar'])

  }

  obtenerFormularioEditar(data){
      debugger
    
    this.router.navigate(['/editar',data.id,data.nombre,data.apellido,data.identificacion,data.correo])
  }

eliminarData(id){
  debugger
  this.id = {id}
  this.herokuServices.eliminar(this.id)
    this.obtenerData()
}

}
