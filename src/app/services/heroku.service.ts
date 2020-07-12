import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleados } from '../../models/datos';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HerokuService {
  public url = ''

  constructor(
    private http: HttpClient

  ) {
    this.url = 'https://api-new-03.herokuapp.com'
   }

   obtenerEmpleados(){
     debugger
    const url = `${this.url}/read.php`;
    return this.http.get(url)
   
  
}

 eliminar(id){
   debugger
  

  const url = `${this.url}/delete.php`;
  return fetch(url, { method: 'DELETE',
  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8 '},
  body: JSON.stringify(id) })

 }
 obtenerEmpleadosId(){
  const url = `${this.url}/read.php`;
  return this.http.get(url)

 }

 agregarEmpleado(empleados:Empleados){
   debugger
   const httpOptions = new HttpHeaders().append(
    "Content-Type",
    "application/json; charset=UTF-8"
  );
  const url = `${this.url}/insert.php`;
  return this.http.post(url,empleados, { headers: httpOptions })

 }

 editarEmpleado(Empleados:Empleados){
   
  fetch(`${this.url}/update.php`, {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify(Empleados), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
 }
}
