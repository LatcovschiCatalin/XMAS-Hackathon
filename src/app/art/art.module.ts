import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtComponent } from './art.component';
import {MainComponent} from "./shared/main/main.component";
import {FetchJsonPipe} from "../fetch-json.pipe";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ArtComponent,
    MainComponent,
    FetchJsonPipe,
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    HttpClientModule
  ]
})
export class ArtModule { }
