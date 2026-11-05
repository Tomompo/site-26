import { Component, computed, signal } from '@angular/core';
import { Hero } from '../../ui/hero/hero';
import { MatTabsModule } from '@angular/material/tabs';
import { IPortfolioItem, PortfolioItem } from '../../ui/portfolio-item/portfolio-item';
import { About } from '../../ui/about/about';

export interface IPortfollioCategory {
  label: string;
  items: IPortfolioItem[];
  startDate: number;
  endDate: number | null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Hero, MatTabsModule, PortfolioItem, About],
})
export class Home {
  private createCategoryFrom(item: IPortfolioItem) {
    const CATEGORY_MAP = {
      personal: 'Personal projects',
      rdc: 'RDC aviation Ltd',
      intergral: 'Intergral GmbH',
    };

    return {
      label: CATEGORY_MAP[item.category],
      startDate: item.startDate,
      endDate: item.endDate,
      items: [],
    };
  }

  private addToCategory(cat: any, item: IPortfolioItem) {
    cat.startDate = Math.min(cat.startDate, item.startDate);

    const updateEndDate = !!cat.endDate;

    if (updateEndDate) {
      cat.endDate = item.endDate === null ? null : Math.max(cat.endDate, item.endDate);
    }

    cat.items.push(item);
  }

  computedCategories = computed(() => {
    const cetegorised = this.items().reduce<Record<string, IPortfollioCategory>>((acc, cur) => {
      const cat = acc[cur.category] || this.createCategoryFrom(cur);

      this.addToCategory(cat, cur);

      acc[cur.category] = cat;

      return acc;
    }, {});

    return Object.values(cetegorised);
  });

  items = signal<IPortfolioItem[]>([
    {
      title: 'Airport Charges Assistant',
      description: `A concept for an AI assistant within the Airport charges (APC) app using the CopilotKit connected to Googles Gemini API. Capable of front-end and back-end tool calling to query and display charges for an airport or country, or charges for an aircraft at a particular airport or country.`,
      isNew: true,
      startDate: 2026,
      endDate: 2026,
      imageUrl: 'assets/img/apc.png',
      tags: ['Angular', 'CopilotKit', 'Gemeni API', 'NestJS'],
      category: 'rdc',
    },
    {
      title: 'RDC Labs',
      description: 'A simple app that renders embedded Sigma dashboards within an iframe.',
      isNew: true,
      startDate: 2026,
      endDate: 2026,
      imageUrl: 'assets/img/labs.png',
      tags: ['Angular', 'NX', 'Azure', 'Sigma', 'AI Driven'],
      category: 'rdc',
    },
    {
      title: 'Bickle.dev',
      description: 'I hope you are enjoying your visit!',
      startDate: 2026,
      endDate: 2026,
      imageUrl: 'assets/img/tb.png',
      tags: ['Angular', 'Firebase', 'Material UI'],
      category: 'personal',
    },
    {
      title: 'En-Route navigation',
      description:
        'En-Route is a route plannig and cost calculation service for the aviation industry. Plot your origin, destination and any waypoints on the map and the cost of flying the journey is caluclated. Avoid airspace for alternate route suggestions or draw your own route on the map and see charges updated accordingly.',
      startDate: 2025,
      endDate: null,
      imageUrl: 'assets/img/enr.png',
      tags: ['Angular', 'Mapbox', 'WorkOs'],
      category: 'rdc',
    },
    {
      title: 'LOOP',
      description:
        'Fleet data management for airlines and lessors, and a single common formatted source of truth for airports that is customisable and filterable data-view. Airlines manage and upload their fleet to LOOP where it can be shared or requested by airports for use in charge caluclation and for document reference.',
      startDate: 2022,
      endDate: null,
      imageUrl: 'assets/img/loop.png',
      tags: ['Angular', 'NX', 'Azure', 'Signal store'],
      category: 'rdc',
    },
    {
      title: 'APEX',
      description:
        'An aviation and business analytics platform with millions of data-point records available for tabular and visualised output. Additional modules assist users in recognising oppotunities and risks within the aviation industry as well as checking actual vs projected performance.',
      startDate: 2022,
      endDate: null,
      imageUrl: 'assets/img/apex.png',
      tags: ['Angular', 'NX', 'Azure', 'Highcharts', 'ngrx store'],
      category: 'rdc',
    },
    {
      title: 'NERD.VISION',
      description:
        'A product for real-time debugging of internal and production applications. Install the nerd.vision agent into your project and it will allow you to capture variables and stack traces in apps deployed to any environment without redeployment.',
      startDate: 2019,
      endDate: 2022,
      imageUrl: 'assets/img/nv.png',
      tags: ['Angular', 'Docker', 'Webhooks', 'Stripe', 'Auth0'],
      category: 'intergral',
    },
    {
      title: 'fusion-reactor.com',
      description:
        "Intergral's flagsip product website for sales and marketing. Start a trial, Download the agents, Get support and view the documentation. (There is no image as the current site does not represent my work)",
      startDate: 2017,
      endDate: 2020,
      tags: ['Wordpress', 'PHP', 'MySQL', 'SQLlite', 'Node'],
      category: 'intergral',
    },
    {
      title: 'Intergral CRM (FORD)',
      description:
        "Intergral's internal order management and CRM, connected to salesforce to track open leads and contracts. (There is no image as this was an private internal system)",
      startDate: 2016,
      endDate: 2018,
      tags: ['Coldfusion', 'MySQL', 'JQuery', 'Docker'],
      category: 'intergral',
    },
  ]);
}
