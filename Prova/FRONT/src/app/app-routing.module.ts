import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './components/views/medicos/medicos.component';
import { ListarMedicoComponent } from './components/views/listar-medico/listar-medico.component';

const routes: Routes = [
  {
    path: '',
    component: ListarMedicoComponent
  },
  {
    path: 'medico/cadastrar',
    component: MedicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
