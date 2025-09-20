import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'splitSentences', standalone: true, pure: true })
export class SplitSentencesPipe implements PipeTransform {
  transform(value?: string): string[] {
    if (!value) return [];
    return value.split('.').map(s => s.trim()).filter(Boolean);
  }
}