import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponentComponent } from './characters-component/pages/list/characters-component.component';
import { CrudComponentComponent } from './crud-component/crud-component.component';
import { DetailComponentComponent } from './characters-component/pages/detail-component/detail-component.component';

const routes: Routes = [
  {path:'', component:CrudComponentComponent},
  {path:'', loadChildren: () => import('./characters-component/characters.module').then(m => m.CharactersModule)},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
