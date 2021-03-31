import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToppicksComponent } from './toppicks/toppicks.component';
import { TrendingsongsComponent } from './trendingsongs/trendingsongs.component';
import { TopchartsComponent } from './topcharts/topcharts.component';
import { ComponentService } from 'service/component.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaywindowComponent } from './playwindow/playwindow.component';

@NgModule({
  declarations: [
    AppComponent,
    ToppicksComponent,
    TrendingsongsComponent,
    TopchartsComponent,
    PlaywindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
