import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character.routing';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, CharacterRoutingModule],
})
export class CharacterModule {}
