import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestPageComponent } from './pages/invest-page/invest-page.component';

import { InvestRoutingModule } from './invest.routing';
import { InvestingInElewaComponent } from './components/investing-in-elewa/investing-in-elewa.component';
import { ElewaInvestDetailSectionComponent } from './components/elewa-invest-detail-section/elewa-invest-detail-section.component';
import { ButtonsModule } from "@elewa-group/features/components/buttons"

import {BannersModule} from "@elewa-group/features/components/banners"



@NgModule({
  imports: [CommonModule, InvestRoutingModule, BannersModule, ButtonsModule,],
  declarations: [InvestPageComponent, ElewaInvestDetailSectionComponent,  InvestingInElewaComponent,],
})



export class InvestPageModule {}
