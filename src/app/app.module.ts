import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DealsComponent } from './sections/deals/deals.component';
import { TrendingProductsComponent } from './sections/trending-products/trending-products.component';
import { GamelowProductsComponent } from './sections/gamelow-products/gamelow-products.component';
import { ProductsTwoComponent } from './sections/products-two/products-two.component';
import { HotGameTrendingComponent } from './sections/hot-game-trending/hot-game-trending.component';
import { FeaturedGigsComponent } from './sections/featured-gigs/featured-gigs.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';


@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    TrendingProductsComponent,
    GamelowProductsComponent,
    ProductsTwoComponent,
    HotGameTrendingComponent,
    FeaturedGigsComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
