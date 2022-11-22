import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersComponentComponent } from './pages/list/characters-component.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { DetailComponentComponent } from './pages/detail-component/detail-component.component';

@NgModule({
  declarations: [CharactersComponentComponent, DetailComponentComponent],
  exports: [CharactersComponentComponent, DetailComponentComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
