import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetIdFromUrlPipe } from './get-id-from-url.pipe';

@NgModule({
  declarations: [GetIdFromUrlPipe],
  exports: [GetIdFromUrlPipe],
  imports: [CommonModule],
})
export class PipesModule {}
