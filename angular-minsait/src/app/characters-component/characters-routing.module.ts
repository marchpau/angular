import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersComponentComponent } from "./pages/list/characters-component.component";
import { DetailComponentComponent } from "./pages/detail-component/detail-component.component";

const routes: Routes = [
    {path: '', redirectTo: 'characters', pathMatch: 'full'},
    {path: 'characters', component: CharactersComponentComponent},
    {path: 'characters/:id', component: DetailComponentComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharactersRoutingModule {}