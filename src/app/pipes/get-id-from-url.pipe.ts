import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIdFromUrl',
})
export class GetIdFromUrlPipe implements PipeTransform {
  transform(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }
}
