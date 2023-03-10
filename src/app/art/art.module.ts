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
import {PortofolioComponent} from "./shared/portofolio/portofolio.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {AuthorComponent} from "./shared/author/author.component";
import {ActionsComponent} from "./shared/actions/actions.component";
import {FeedbackComponent} from "./shared/feedback/feedback.component";
import {SendReviewComponent} from "./shared/send-review/send-review.component";
import {MapComponent} from "./shared/map/map.component";


@NgModule({
  declarations: [
    ArtComponent,
    MainComponent,
    FetchJsonPipe,
    NavComponent,
    Exhibitions,
    ProfileComponent,
    WorksComponent,
    PortofolioComponent,
    FooterComponent,
    AuthorComponent,
    ActionsComponent,
    FeedbackComponent,
    SendReviewComponent,
    MapComponent,
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
