import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListItemComponent } from './character-list-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CharacterListItemComponent],
  exports: [CharacterListItemComponent],
  imports: [CommonModule, MatCardModule],
})
export class CharacterListItemModule {}
