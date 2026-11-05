import { Component, input } from '@angular/core';
import { Chip } from '../../../../shared/ui/chip/chip';

export interface IPortfolioItem {
  title: string;
  description: string;
  isNew?: boolean;
  startDate: number;
  endDate: number | null;
  imageUrl?: string;
  tags: string[];
  category: 'personal' | 'rdc' | 'intergral';
}

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.html',
  styleUrl: './portfolio-item.scss',
  imports: [Chip],
})
export class PortfolioItem {
  portfollioItem = input.required<IPortfolioItem>();
}
