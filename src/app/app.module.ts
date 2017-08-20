import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { UsertabComponent } from './usertab/usertab.component';
import { TabContentComponent } from './tabcontent/tabcontent.component';
import { ActivityresultComponent } from './activityresult/activityresult.component';
import { ActorService } from './service/actor.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    HeroListComponent,
    DropdownComponent,
    UsertabComponent,
    TabContentComponent,
    ActivityresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
