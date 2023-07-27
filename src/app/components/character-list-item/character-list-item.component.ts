import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss'],
})
export class CharacterListItemComponent {
  @Input() character: Partial<Character> = {};
}
