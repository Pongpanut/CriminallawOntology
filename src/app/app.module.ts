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
import { ActionService } from './service/action.service';
import { OntologyService } from './service/ontology.service';
import { CausationService } from './service/causation.service';
import { CannotavoidService } from './service/cannotavoid.service';
import { IntoxicationormindService } from './service/intoxicationormind.service';
import { OffenderageService } from './service/offenderage.service';
import { RelizedService } from './service/relized.service';
import { VictimService } from './service/victim.service';
import { YesnoService } from './service/yesno.service';
import { YesnoAwarenessService } from './service/yesnoawareness.service';
import { YesnoDirectService } from './service/yesnodirect.service';
import { YesnoTransferService } from './service/yesnotransfer.service';
import { YesnoMoralService } from './service/yesnomoral.service';
import { IntentionApiService } from './service/intentionapi.service';
import { VicDetailService } from './service/vicdetail.service';
import { AddDetailService } from './service/addDetail.service';
import { ParameterService } from './model/parameter';
import { YesnoDangerService } from './service/yesnodanger.service';
import { YesnoDefenseService } from './service/yesnodefense.service';
import { YesnoCriminalImpunityService } from './service/yesnoCriminalImpunity.service';
import { JustificationApiService } from './service/justificationapi.service';
import { CriminalImpunityApiService } from './service/criminalimpunityapi.service';
import { IntoxicationService } from './service/intoxication.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import { NgProgressModule } from 'ng2-progressbar';

//import { MdTabsModule } from '@angular/material';


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
    AppRoutingModule,
    BrowserAnimationsModule,
    BusyModule,
    NgProgressModule
  ],
  providers: [
    ActorService, 
    ActionService,
    CannotavoidService,
    CausationService,
    IntoxicationormindService,
    OffenderageService,
    RelizedService,
    VictimService,
    YesnoService,
    YesnoAwarenessService,
    YesnoDirectService,
    YesnoTransferService,
    YesnoMoralService,
    YesnoDangerService,
    YesnoCriminalImpunityService,
    IntoxicationService,
    OntologyService,
    YesnoDefenseService,
    VicDetailService,
    JustificationApiService,
    CriminalImpunityApiService,
    AddDetailService,
    IntentionApiService,
    ParameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
