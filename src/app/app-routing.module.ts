import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './pages/altas/altas.component';
import { ListadoAuthoresComponent } from './pages/listado-authores/listado-authores.component';

const routes: Routes = [
  {path:'listado', component:ListadoAuthoresComponent},
  {path:'altas', component:AltasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
