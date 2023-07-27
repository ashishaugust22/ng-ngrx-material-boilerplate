import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character.routing';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { PipesModule } from '../../pipes/pipes.module';
import { LoaderModule } from '../../components/loader/loader.module';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, PipesModule, CharacterRoutingModule, LoaderModule],
})
export class CharacterModule {}
