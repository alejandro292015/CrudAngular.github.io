import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCrudComponent } from './modules/crud/home-crud/home-crud.component';
import { FormularioAgregarComponent } from './modules/crud/formulario-agregar/formulario-agregar.component';
import { FormularioEditarComponent } from './modules/crud/formulario-editar/formulario-editar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeCrudComponent },
  { path: 'agregar', component: FormularioAgregarComponent },
  { path: 'editar/:id/:nombre/:apellido/:identificacion/:correo', component: FormularioEditarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
