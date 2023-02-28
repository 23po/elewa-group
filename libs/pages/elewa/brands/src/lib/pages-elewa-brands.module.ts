import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { ElewaBrandsVentureLabsComponent } from './components/elewa-brands-venture-labs/elewa-brands-venture-labs.component';
import { ElewaBrandsHeroComponent } from './components/elewa-brands-hero/elewa-brands-hero.component';

import { BrandsRoutingModule } from './brands.routing';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,

    ElewaBrandsVentureLabsComponent,

    ElewaBrandsHeroComponent,

  ],
})
export class BrandsModule {}
