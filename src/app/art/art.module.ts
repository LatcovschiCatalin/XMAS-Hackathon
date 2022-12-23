import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtRoutingModule} from './art-routing.module';
import {ArtComponent} from './art.component';
import {MainComponent} from "./shared/main/main.component";
import {FetchJsonPipe} from "../fetch-json.pipe";
import {HttpClientModule} from "@angular/common/http";
import {NavComponent} from "./shared/nav/nav.component";
import {Exhibitions} from "./shared/exhibitions/exhibitions";
import {ProfileComponent} from './shared/profile/profile.component';
import {WorksComponent} from "./shared/works/works.component";
import {SlickCarouselModule} from "ngx-slick-carousel";


@NgModule({
  declarations: [
    ArtComponent,
    MainComponent,
    FetchJsonPipe,
    NavComponent,
    Exhibitions,
    ProfileComponent,
    WorksComponent,
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class ArtModule {
}
