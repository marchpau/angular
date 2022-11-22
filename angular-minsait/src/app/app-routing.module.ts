import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponentComponent } from './characters-component/characters-component.component';
import { CrudComponentComponent } from './crud-component/crud-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  {path:'', component:CrudComponentComponent},
  {path:'characters', component:CharactersComponentComponent},
  {path:'detail', component:DetailComponentComponent},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
