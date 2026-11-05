import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  imports: [],
  host: {
    '[class]': 'classList()',
  },
})
export class Chip {
  size = input<'sm' | 'md'>('md');

  shape = input<'rounded' | 'square'>('rounded');

  colour = input<'default' | 'warn' | 'primary' | 'secondary'>('default');

  classList = computed(() => [this.shape(), this.size(), this.colour()]);
}
