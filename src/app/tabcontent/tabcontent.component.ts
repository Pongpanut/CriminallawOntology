import { Component, OnInit, Injectable, Inject, Input } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { ActorService } from '../service/actor.service';
import { ActionService } from '../service/action.service';
import { VictimService } from '../service/victim.service';
import { CausationService } from '../service/causation.service';
import { RelizedService } from '../service/relized.service';
import { UsertabComponent } from '../usertab/usertab.component';
import { YesnoAwarenessService } from '../service/yesnoawareness.service';
import { YesnoService } from '../service/yesno.service';
import { OntologyService } from '../service/ontology.service';
import { YesnoDirectService } from '../service/yesnodirect.service';
import { YesnoTransferService } from '../service/yesnotransfer.service';
import { IntoxicationormindService } from '../service/intoxicationormind.service';
import { YesnoMoralService } from '../service/yesnomoral.service';
import { YesnoDangerService } from '../service/yesnodanger.service';
import { CannotavoidService } from '../service/cannotavoid.service';
import { YesnoCriminalImpunityService } from '../service/yesnoCriminalImpunity.service';
import { OffenderageService } from '../service/offenderage.service';
import { IntoxicationService } from '../service/intoxication.service';
import { YesnoDefenseService } from '../service/yesnodefense.service';
import { JustificationApiService } from '../service/justificationapi.service';
import { CriminalImpunityApiService } from '../service/criminalimpunityapi.service';
import { ParameterService } from '../model/parameter';
import { VicDetailService } from '../service/vicdetail.service';
import { AddDetailService } from '../service/addDetail.service';
import { IntentionApiService } from '../service/intentionapi.service';
import {Subscription} from 'rxjs';
import {NgProgressService} from "ng2-progressbar";

@Component({
  selector: 'app-tabcontent',
  templateUrl: './tabcontent.component.html',
  styleUrls: ['./tabcontent.component.css']
})

export class TabContentComponent implements OnInit {
  @Input() userId;
  dropdownListData: {id: string, value: string}[] = [];
  flowchart: string[] = [];
  instancename:  string;
  value: string;
  defaultValue = this.dropdownListData[1];
  resultList: any = [];
  ruleFlag: boolean;
  gatherIntention: boolean;
  gatherIntentionFirsttime: boolean;
  intentionState: string;
  justificationState: string;
  criminalimpunityState: string;
  gatherJustification: boolean;
  gatherJustificationFirsttime: boolean;
  gatherImpunity: boolean;
  gatherImpunityFirsttime: boolean;
  busy: Subscription;
  queryString:  string;

  constructor(private actorService : ActorService,
    private actionService : ActionService, 
    private victimService : VictimService,
    private causationService : CausationService,
    private relizedService : RelizedService, 
    private yesnoAwarenessService : YesnoAwarenessService,
    private yesnoDirectService : YesnoDirectService,
    private yesnoDefenseService : YesnoDefenseService,
    private yesnoTransferService : YesnoTransferService,
    private yesnoMoralService : YesnoMoralService,
    private yesnoDangerService : YesnoDangerService,
    private cannotavoidService : CannotavoidService,
    private yesnoCriminalImpunityService : YesnoCriminalImpunityService,
    private offenderageService: OffenderageService,
    private intoxicationService: IntoxicationService,
    private intoxicationormindService: IntoxicationormindService,
    private yesnoService: YesnoService,
    private ontologyService: OntologyService,
    private usertabcomb : UsertabComponent,
    private vicDetailService : VicDetailService,
    private addDetailService : AddDetailService,
    private intentionApiService : IntentionApiService,
    private justificationApiService : JustificationApiService,
    private criminalImpunityApiService : CriminalImpunityApiService,
    private http: Http,
    private pService: NgProgressService,
    private parameterService: ParameterService) 
  { 

  }

 
  ngOnInit() {
    this.justificationState = "0"
    this.intentionState = "0";
    this.criminalimpunityState = "0"
    var test ="";
    this.gatherIntention = false;
    this.ruleFlag = false;
    this.gatherJustification = false;
    this.instancename = 'Actor';
      this.actorService.findAllActor().subscribe(response => {
        this.resultList = response;
        for (let actor of this.resultList) {
          this.dropdownListData.push({id: actor.id, value: actor.name});
        }
      });
  }

  onChange(event) {
    
  }

  CallOntologyApi(){
        this.pService.start();
        var param = "";
        if(this.parameterService.offender != "" && typeof this.parameterService.offender !== "undefined" )
            param += "offender="+this.parameterService.offender+"&";
        if(this.parameterService.victim != "" && typeof this.parameterService.victim !== "undefined" )
          param += "victim="+this.parameterService.victim+"&";
        if(this.parameterService.crimeSucceed != "" && typeof this.parameterService.crimeSucceed !== "undefined" )
          param += "crimesucceed="+this.parameterService.crimeSucceed+"&";
        if(this.parameterService.victimDetail != "" && typeof this.parameterService.victimDetail !== "undefined" )
          param += "victimdetail="+this.parameterService.victimDetail+"&";
        if(this.parameterService.additionalDetail != "" && typeof this.parameterService.additionalDetail !== "undefined" )
          param += "adddetail="+this.parameterService.additionalDetail+"&";
        if(this.parameterService.causation != "" && typeof this.parameterService.causation !== "undefined" )
          param += "causation="+this.parameterService.causation+"&";

        // Query for intention
        if(this.parameterService.hasreaact != "" && typeof this.parameterService.hasreaact !== "undefined" )
          param += "hasreaact="+this.parameterService.hasreaact+"&";
        if(this.parameterService.hasReaCau != "" && typeof this.parameterService.hasReaCau !== "undefined" )
          param += "hasreacau="+this.parameterService.hasReaCau+"&";
        if(this.parameterService.hasintact != "" && typeof this.parameterService.hasintact !== "undefined" )
          param += "hasintact="+this.parameterService.hasintact+"&";
        if(this.parameterService.hasActHeedless != "" && typeof this.parameterService.hasActHeedless !== "undefined" )
          param += "hasactheedless="+this.parameterService.hasActHeedless+"&";
        if(this.parameterService.hasActHeedlessEng != "" && typeof this.parameterService.hasActHeedlessEng !== "undefined" )
          param += "hasactheedlesseng="+this.parameterService.hasActHeedlessEng+"&";
        if(this.parameterService.hasforeeffect != "" && typeof this.parameterService.hasforeeffect !== "undefined" )
          param += "hasforeeffect="+this.parameterService.hasforeeffect+"&";
        if(this.parameterService.hasIntentOther != "" && typeof this.parameterService.hasIntentOther !== "undefined" )
          param += "hasintentother="+this.parameterService.hasIntentOther+"&";

        // Query for Justification
        if(this.parameterService.hasAssentDuringCrime != "" && typeof this.parameterService.hasAssentDuringCrime !== "undefined" )
          param += "hasassentduringcrime="+this.parameterService.hasAssentDuringCrime+"&";
        if(this.parameterService.hasAssentGoodMoral != "" && typeof this.parameterService.hasAssentGoodMoral !== "undefined" )
          param += "hasassentgoodmoral="+this.parameterService.hasAssentGoodMoral+"&";
        if(this.parameterService.hasDanger != "" && typeof this.parameterService.hasDanger !== "undefined" )
          param += "hasdanger="+this.parameterService.hasDanger+"&";
        if(this.parameterService.hasDangerImn != "" && typeof this.parameterService.hasDangerImn !== "undefined" )
          param += "hasdangerimn="+this.parameterService.hasDangerImn+"&";
        if(this.parameterService.hasDefending != "" && typeof this.parameterService.hasDefending !== "undefined" )
          param += "hasdefending="+this.parameterService.hasDefending+"&";
        if(this.parameterService.hasLawfulDef != "" && typeof this.parameterService.hasLawfulDef !== "undefined" )
          param += "haslawfuldef="+this.parameterService.hasLawfulDef+"&";
        if(this.parameterService.hasPureAssent != "" && typeof this.parameterService.hasPureAssent !== "undefined" )
          param += "haspureassent="+this.parameterService.hasPureAssent+"&";

          // Query for CRIMINAL IMPUNITY
        if(this.parameterService.hasActByOfficerCom != "" && typeof this.parameterService.hasActByOfficerCom !== "undefined" )
          param += "hasactbyofficercom="+this.parameterService.hasActByOfficerCom+"&";
        if(this.parameterService.hasAge != "" && typeof this.parameterService.hasAge !== "undefined" )
          param += "hasage="+this.parameterService.hasAge+"&";
        if(this.parameterService.hasBeForces != "" && typeof this.parameterService.hasBeForces !== "undefined" )
          param += "hasbeforces="+this.parameterService.hasBeForces+"&";
        if(this.parameterService.hasCannotAvoid != "" && typeof this.parameterService.hasCannotAvoid !== "undefined" )
          param += "hascannotavoid="+this.parameterService.hasCannotAvoid+"&";
        if(this.parameterService.hasCauseDrunk != "" && typeof this.parameterService.hasCauseDrunk !== "undefined" )
          param += "hascausedrunk="+this.parameterService.hasCauseDrunk+"&";
        if(this.parameterService.hasDontKnowIlligal != "" && typeof this.parameterService.hasDontKnowIlligal !== "undefined" )
          param += "hasdontknowilligal="+this.parameterService.hasDontKnowIlligal+"&";
        if(this.parameterService.hasDontNeed != "" && typeof this.parameterService.hasDontNeed !== "undefined" )
          param += "hasdontneed="+this.parameterService.hasDontNeed+"&";
        if(this.parameterService.hasDrunk != "" && typeof this.parameterService.hasDrunk !== "undefined" )
          param += "hasdrunk="+this.parameterService.hasDrunk+"&";
        if(this.parameterService.hasIlligalCommand != "" && typeof this.parameterService.hasIlligalCommand !== "undefined" )
          param += "hasilligalcommand="+this.parameterService.hasIlligalCommand+"&";
        if(this.parameterService.hasLimit != "" && typeof this.parameterService.hasLimit !== "undefined" )
          param += "haslimit="+this.parameterService.hasLimit+"&";
        if(this.parameterService.hasMentalInfirmly != "" && typeof this.parameterService.hasMentalInfirmly !== "undefined" )
          param += "hasmentalinfirmly="+this.parameterService.hasMentalInfirmly+"&";
        if(this.parameterService.hasMind != "" && typeof this.parameterService.hasMind !== "undefined" )
          param += "hasmind="+this.parameterService.hasMind+"&";
        if(this.parameterService.hasNeedAction != "" && typeof this.parameterService.hasNeedAction !== "undefined" )
          param += "hasneedaction="+this.parameterService.hasNeedAction+"&";
        if(this.parameterService.hasProtecetd != "" && typeof this.parameterService.hasProtecetd !== "undefined" )
          param += "hasprotecetd="+this.parameterService.hasProtecetd+"&";
        if(this.parameterService.hasSit != "" && typeof this.parameterService.hasSit !== "undefined" )
          param += "hassit="+this.parameterService.hasSit+"&";

        this.ontologyService.findResponse(param).subscribe(response => {
          var res = response;
          alert("Answer is :"+ res);
          this.pService.done();
        });
  }

  myFunc(value){
    var test = this.CheckEndCondition(value);
    if(value == "ไม่มีการกระทำ" || test == true){
      return;
    }
    this.flowchart.push(this.instancename +" ของผู้เกี่ยวข้องที่  "+this.userId+" คือ '"+value+"'");
    this.value = value;

    if(this.gatherImpunity){
      this.updateDropdownAndInstanceForCriminalImpunity();
    }
    
    if(this.gatherJustification){
      this.updateDropdownAndInstanceForJustification();
    }

    if(this.gatherIntention){
      this.updateDropdownAndInstanceForIntention();
    }
  
    this.updateDropdownAndInstance();
  }

  CheckEndCondition(value){
    // For victim
    if( value == "ซ่องสุมซ่องโจรหรืออั้งยี่"){
      this.flowchart.push(this.instancename +" มีความผิดฐาน ซ่องสุมซ่องโจรหรืออั้งยี่");
      return true
    }

    if( value == "วางแผนเผาทรัพย์ หรือ โรงเรือน ของผู้อื่น"){
      this.flowchart.push(this.instancename +" มีความผิดฐาน วางแผนเผาทรัพย์ หรือ โรงเรือน ของผู้อื่น");
      return true
    }

  }

  updateDropdownAndInstance(){

    // For Action
    if(this.value == "ผู้สนับสนุนโดยไม่รู้" || this.value == "ผู้กระทำความผิด" || this.value == "ผู้กระทำความผิดแบบกลุ่ม"){

      if(this.value == "ผู้สนับสนุนโดยไม่รู้" ){
        this.parameterService.innocent = "Innocentagent";
      }
      if(this.value == "ผู้กระทำความผิด"){
        this.parameterService.offender = "Offender";
      }
      if(this.value == "ผู้กระทำความผิดแบบกลุ่ม"){
        this.parameterService.party = "Party" ;
      }
      this.instancename = "Victim"
      this.dropdownListData = [];
      this.victimService.findAllVictim().subscribe(response => {
        this.resultList = response;
        for (let victim of this.resultList) {
          this.dropdownListData.push({id: victim.id, value: victim.name});
        }
      });
    }

    /////  Victim //////
    // For Victim
    if(this.value == "คน"){
       this.parameterService.victim = "victim" ;
       this.instancename = "Action"
       this.dropdownListData = [];
       this.actionService.findAllActionCat1().subscribe(response => {
       this.resultList = response;
       for (let action of this.resultList) {
         this.dropdownListData.push({id: action.id, value: action.name});
       }
     });
    }

     if(this.value == "สิ่งของ"){
       //TODO
       this.instancename = "Action"
       this.dropdownListData = [];
       this.actionService.findAllActionCat2().subscribe(response => {
       this.resultList = response;
       for (let action of this.resultList) {
         this.dropdownListData.push({id: action.id, value: action.name});
       }
     });
    }

     if(this.value == "ไม่มีผู้ถูกกระทำ"){
       //TODO
       this.instancename = "Action"
       this.dropdownListData = [];
       this.actionService.findAllActionCat3().subscribe(response => {
       this.resultList = response;
       for (let action of this.resultList) {
         this.dropdownListData.push({id: action.id, value: action.name});
       }
     });
    }

    /////  Action //////
    // For Causation
    if(this.value == "ทำลาย"){
      //TODO
      this.instancename = "Causation"
      this.dropdownListData = [];
      this.causationService.findCausationVic2().subscribe(response => {
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });
  }

    if(this.value == "ขโมย"){
      //TODO
      this.instancename = "Causation"
      this.dropdownListData = [];
      this.causationService.findCausationVic3().subscribe(response => {
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });
   }

   if(this.value == "เสียชีวิต"){
      this.parameterService.causation = "victimdied" ;
    }

    if(this.value == "บาดเจ็บ"){
      this.parameterService.causation = "injured" ;
    }

    if(this.value == "บาดเจ็บสาหัส"){
      this.parameterService.causation = "seriously_injured" ;
    }
   

    if(this.value == "ฆ่า" || this.value == "ทำร้าย" ){
      if(this.value == "ฆ่า"){
        this.parameterService.crimeSucceed = "kill" ;
      }
      if(this.value == "ทำร้าย"){
        this.parameterService.crimeSucceed = "harm" ;
      }
      this.instancename = "รายละเอียดเหยื่อเพิ่มเติม"
      this.dropdownListData = [];
      this.vicDetailService.findAllVicDetail().subscribe(response => {
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });
  }

  if(this.value == "ไม่มีรายละเอียดเหยื่อเพิ่มเติม" 
    || this.value == "เหยื่อถูกรุมกระทำจากผู้กระทำและพวก 3 คนขึ้นไป" 
    || this.value == "เหยื่ออายุน้อยกว่า 16 ปีบริบูรณ์" ){
      if(this.value == "ไม่มีรายละเอียดเหยื่อเพิ่มเติม"){
        this.parameterService.victimDetail = "NoVictimDetail" ;
      }
      if(this.value == "เหยื่อถูกรุมกระทำจากผู้กระทำและพวก 3 คนขึ้นไป"){
        this.parameterService.victimDetail = "group_morethan3" ;
      }

      if(this.value == "เหยื่ออายุน้อยกว่า 16 ปีบริบูรณ์"){
        this.parameterService.victimDetail = "lessthan16yr" ;
      }
      this.instancename = "รายละเอียดเหตุการณ์เพิ่มเติม"
      this.dropdownListData = [];
      this.addDetailService.findAllAddDetail().subscribe(response => {
      this.resultList = response;
      for (let addDetail of this.resultList) {
        this.dropdownListData.push({id: addDetail.id, value: addDetail.name});
      }
    });
  }

  if(this.value == "ไม่มีรายละเอียดเพิ่มเติม" 
    || this.value == "ฆ่าบุพการี" 
    || this.value == "ฆ่าผู้ช่วยเหลือเจ้าพนักงานในการที่เจ้าพนักงานนั้นกระทำตามหน้าที่" 
    || this.value == "ฆ่าผู้อื่นโดยไตร่ตรองไว้ก่อน" 
    || this.value == "ฆ่าผู้อื่นโดยทรมานหรือโดยกระทำทารุณโหดร้าย" 
    || this.value == "ฆ่าผู้อื่นเพื่อตระเตรียมการหรือเพื่อความสะดวกในการที่จะกระทำความผิดอย่างอื่น" 
    || this.value == "ฆ่าผู้อื่นเพื่อจะเอาหรือเอาไว้ซึ่งผลประโยชน์อันเกิดแต่การที่ตนได้กระทำความผิดอื่นเพื่อปกปิดความผิดอื่นของตน" 
    || this.value == "เหยื่อฆ่าตัวตาย" ){
      if(this.value == "ไม่มีรายละเอียดเพิ่มเติม"){
        this.parameterService.additionalDetail = "Noadd" ;
      }
      if(this.value == "ฆ่าบุพการี"
        || this.value == "ฆ่าผู้ช่วยเหลือเจ้าพนักงานในการที่เจ้าพนักงานนั้นกระทำตามหน้าที่" 
        || this.value == "ฆ่าผู้อื่นโดยไตร่ตรองไว้ก่อน" 
        || this.value == "ฆ่าผู้อื่นโดยทรมานหรือโดยกระทำทารุณโหดร้าย" 
        || this.value == "ฆ่าผู้อื่นเพื่อตระเตรียมการหรือเพื่อความสะดวกในการที่จะกระทำความผิดอย่างอื่น" 
        || this.value == "ฆ่าผู้อื่นเพื่อจะเอาหรือเอาไว้ซึ่งผลประโยชน์อันเกิดแต่การที่ตนได้กระทำความผิดอื่นเพื่อปกปิดความผิดอื่นของตน" ){
        this.parameterService.additionalDetail = "killParent" ;
      }

      if(this.value == "เหยื่อฆ่าตัวตาย"){
        this.parameterService.additionalDetail = "VictimKillThemSelf" ;
      }

      this.instancename = "Causation"
      this.dropdownListData = [];
      this.causationService.findCausationVic1().subscribe(response => {
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });

  this.gatherIntention = true
  }
}

  updateDropdownAndInstanceForIntention(){

    if(this.value == "รับรู้สิ่งที่กระทำอยู่"){
      this.parameterService.hasreaact = "reaact" ;
    }
    else if(this.value == "รับรู้ผลของการกระทำที่จะเกิดขึ้น"){
      this.parameterService.hasReaCau = "reacau"
    }
    else if(this.value == "มุ่งหมายที่จะให้ผลเกิดขึ้น"){
      this.parameterService.hasintact = "intact"
    }
    else if(this.value == "การกระทำโดยปราศจากความระมัดระวัง"){
      this.parameterService.hasActHeedless = "act_heedless_obj"
    }
    else if(this.value == "ผู้กระทำอาจใช้ความระมัดระวังเช่นว่านั้นได้ แต่อาจหาใช้เพียงพอไม่"){
      this.parameterService.hasActHeedlessEng = "act_not_enough_heedless_5"
    }
    else if(this.value == "เล็งเห็นได้ว่าผลนั้นจะเกิดขึ้นแน่นอน"){
      this.parameterService.hasforeeffect = "for1"
    }
    else if(this.value == "เจตนาที่จะกระทำต่อบุคคลอื่น"){
      this.parameterService.hasIntentOther = "intent_other_obj"
    }


    if(this.intentionState == "0"){ 
      this.instancename = "ผู้กระทำรับรู้สิ่งที่กระทำอยู่หรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_rea_act().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "1"
      return;
    }

    if(this.intentionState == "1"){ 
      this.instancename = "ผู้กระทำรับรู้บรู้ผลของการกระทำที่จะเกิดขึ้นหรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_rea_cau().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "2"
      return;
    }

    if(this.intentionState == "2"){ 
      this.instancename = "ผู้กระทำมุ่งหมายที่จะให้ผลเกิดขึ้นด้วยตัวผู้กระทำเองหรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_int_act().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "3"
      return;
    }

    if(this.intentionState == "3"){ 
      this.instancename = "การกระทำนั้นเป็นการกระทำโดยปราศจากความระมัดระวังหรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_act_heedless().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "4"
      return;
    }

    if(this.intentionState == "4"){ 
      this.instancename = "ผู้กระทำอาจใช้ความระมัดระวังเช่นว่านั้นได้ แต่อาจหาใช้เพียงพอ ใช่หรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_act_heedless_eng().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "5"
      return;
    }


    if(this.intentionState == "5"){ 
      this.instancename = "ผู้กระทำเล็งเห็นได้ว่าผลนั้นจะเกิดขึ้นแน่นอนหรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_fore_effectModel().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.intentionState = "6"
      return;
    }

    if(this.intentionState == "6"){ 
      this.instancename = "ผู้กระทำเจตนาที่จะกระทำต่อบุคคลอื่นหรือไม่"
      this.dropdownListData = [];
        this.intentionApiService.getHas_intent_other().subscribe(response => {
        this.resultList = response;
        for (let action of this.resultList) {
          this.dropdownListData.push({id: action.id, value: action.name});
        }
      });  
      this.gatherJustification = true
      this.gatherIntention = false
      return
    }
  }

  updateDropdownAndInstanceForJustification(){
    if(this.value == "ความยินยอมอยู่ระหว่างขณะกระทำ"){
      this.parameterService.hasAssentDuringCrime = "Assent_during_crime_15" ;
    }
    else if(this.value == "ความยินยอมนั้นไม่ขัดต่อสำนึกในศีลธรรมอันดี"){
      this.parameterService.hasAssentGoodMoral = "Assent_with_good_moral_14"
    }
    else if(this.value == "มีภยันตราย"){
      this.parameterService.hasDanger = "Danger_2"
    }
    else if(this.value == "ภยันตรายนั้นใกล้จะถึง"){
      this.parameterService.hasDangerImn = "Danger_to_be_imminent_3"
    }
    else if(this.value == "ผู้กระทำจำต้องกระทำเพื่อป้องกันสิทธิ ของตนเองหรือผู้อื่น"){
      this.parameterService.hasDefending = "Defending_1"
    }
    else if(this.value == "การกระทำโดยป้องกันสิทธิ และไม่เกินขอบเขต"){
      this.parameterService.hasLawfulDef = "Act_is_a_lawful_defense_4"
    }
    else if(this.value == "เป็นการยินยอมอันบริสุทธิ์"){
      this.parameterService.hasPureAssent = "Assent_pure_13"
    }


    if(this.justificationState == "0"){
      this.instancename = "การยินยอมนั้นเกิดอยู่ระหว่างกระทำความผิดหรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasAssentDuringCrime().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "1"
      return
    }

    if(this.justificationState == "1"){
      this.instancename = "ความยินยอมนั้นขัดต่อสำนึกในศีลธรรมอันดีหรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasAssentGoodMoral().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "2"
      return
    }

    if(this.justificationState == "2"){
      this.instancename = "ขณะนั้นมีภยันตรายหรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasDanger().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "3"
      return
    }

    if(this.justificationState == "3"){
      this.instancename = "ภยันตรายนั้นใกล้จะถึงหรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasDangerImn().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "4"
      return
    }

    if(this.justificationState == "4"){
      this.instancename = "ผู้กระทำจำต้องกระทำเพื่อป้องกันสิทธิ ของตนเองหรือผู้อื่น ใช่หรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasDefending().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "5"
      return
    }

    if(this.justificationState == "5"){
      this.instancename = "การกระทำโดยป้องกันสิทธิ และไม่เกินขอบเขต ใช่หรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasLawfulDef().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.justificationState = "6"
      return
    }

    if(this.justificationState == "6"){
      this.instancename = "เป็นการยินยอมอันบริสุทธิ์ ใช่หรือไม่"
      this.dropdownListData = [];
        this.justificationApiService.gethasPureAssent().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.gatherImpunity = true
      this.gatherJustification = false
      return
    }
  }

  updateDropdownAndInstanceForCriminalImpunity(){

    if(this.value == "กระทำความผิดตามคำสั่งเจ้าพนักงาน"){
      this.parameterService.hasActByOfficerCom = "Cri_act_by_officer_com_20" ;
    }
    else if(this.value == "ผู้กระทำความผิดอายุน้อยกว่า 15 ปี"){
      this.parameterService.hasAge = "Cri_age_15"
    }
    else if(this.value == "อยู่ในที่บังคับหรือภายใต้อำนาจ"){
      this.parameterService.hasBeForces = "Cri_be_forces_24"
    }
    else if(this.value == "ไม่สามารถหลักเลี่ยงหรือขัดขืนได้"){
      this.parameterService.hasCannotAvoid = "Cri_cannot_avoid_25"
    }
    else if(this.value == "ผู้เสพย์ไม่รู้ว่าสิ่งนั้นจะทำให้มึนเมา หรือ ผู้เสพย์ถูกขึนใจให้เสพย์"){
      this.parameterService.hasCauseDrunk = "Cri_cause_drunk_19"
    }
    else if(this.value == "ผุ้กระทำไม่รู้ว่าคำสั่งนั้นมิชอบด้วยกฎหมาย"){
      this.parameterService.hasDontKnowIlligal = "Cri_dont_know_illigal_22"
    }
    else if(this.value == "ผู้กระทำตั้งใจกระทำโดยความต้องการของตน"){
      this.parameterService.hasDontNeed = "Cri_dont_need_26"
    }
    else if(this.value == "กระทำเพราะความมึนเมา"){
      this.parameterService.hasDrunk = "Cri_drunk_18" ;
    }
    else if(this.value == "คำสั่งนั้นมิชอบด้วยกฎหมาย"){
      this.parameterService.hasIlligalCommand = "Cri_illigal_command_21"
    }
    else if(this.value == "การกระทำนั้นไม่เกินขอบเขต"){
      this.parameterService.hasLimit = "Cri_limit_27"
    }
    else if(this.value == "มีจิตบกพร่อง โรคจิต จิตฟั่นเฟือน"){
      this.parameterService.hasMentalInfirmly = "Cri_mental_infirmly_46"
    }
    else if(this.value == "ไม่สามารถรู้ผิดชอบได้ หรือ ไม่สามารถบังคับตนเองได้"){
      this.parameterService.hasMind = "Cri_mind_17"
    }
    else if(this.value == "ผู้กระทำมีหน้าที่ปฎิบัติตาม"){
      this.parameterService.hasNeedAction = "Cri_need_action_23"
    }
    else if(this.value == "มีการกระทำ และ ได้กระทำอันกฎหมายบัญญัติไว้ว่าเป็นความผิด"){
      this.parameterService.hasSit = "Cri_situation_16"
    }
    else if(this.value == "กระทำเพื่อให้ผู้อื่นหรือตนเองพ้นอันตราย"){
      this.parameterService.hasProtecetd = "Cri_protecetd_28"
      this.CallOntologyApi();
    }
    else if(this.value == "กระทำมิได้ทำให้ผู้อื่นหรือตนเองพ้นอันตราย"){
      this.CallOntologyApi()
    }
  
    

    if(this.criminalimpunityState == "0"){
      this.instancename = "ผู้กระทำความผิดอายุน้อยกว่า 15 ปี ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasAgeRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "1"
      return
    }

    if(this.criminalimpunityState == "1"){
      this.instancename = "มีการกระทำ และ ได้กระทำอันกฎหมายบัญญัติไว้ว่าเป็นความผิด ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasSitRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "2"
      return
    }

    if(this.criminalimpunityState == "2"){
      this.instancename = "ผู้กระทำไม่สามารถรู้ผิดชอบได้ หรือ ไม่สามารถบังคับตนเองได้ ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasMindRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "3"
      return
    }

    if(this.criminalimpunityState == "3"){
      this.instancename = "ผู้กระทำมีจิตบกพร่อง โรคจิต จิตฟั่นเฟือนใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasMentalInfirmlyRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "4"
      return
    }

    if(this.criminalimpunityState == "4"){
      this.instancename = "กระทำเพราะความมึนเมา ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasDrunkRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "5"
      return
    }

    if(this.criminalimpunityState == "5"){
      this.instancename = "ผู้เสพย์ไม่รู้ว่าสิ่งนั้นจะทำให้มึนเมา หรือ ผู้เสพย์ถูกขึนใจให้เสพย์ ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasCauseDrunkfRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "6"
      return
    }

    if(this.criminalimpunityState == "6"){
      this.instancename = "กระทำความผิดตามคำสั่งเจ้าพนักงานใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasActByOfficerComRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "7"
      return
    }

    if(this.criminalimpunityState == "7"){
      this.instancename = "คำสั่งนั้นมิชอบด้วยกฎหมายหรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasIlligalCommandRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "8"
      return
    }

    if(this.criminalimpunityState == "8"){
      this.instancename = "ผุ้กระทำไม่รู้ว่าคำสั่งนั้นมิชอบด้วยกฎหมาย ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasDontKnowIlligalRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "9"
      return
    }

    if(this.criminalimpunityState == "9"){
      this.instancename = "ผู้กระทำมีหน้าที่ปฎิบัติตาม ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasNeedActionRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "10"
      return
    }

    if(this.criminalimpunityState == "10"){
      this.instancename = "อยู่ในที่บังคับหรือภายใต้อำนาจ ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasBeForcesRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "11"
      return
    }

    if(this.criminalimpunityState == "11"){
      this.instancename = "ไม่สามารถหลักเลี่ยงหรือขัดขืนได้ ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasCannotAvoidRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "12"
      return
    }

    if(this.criminalimpunityState == "12"){
      this.instancename = "ผู้กระทำตั้งใจกระทำโดยความต้องการของตน ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasDontNeedRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "13"
      return
    }

    if(this.criminalimpunityState == "13"){
      this.instancename = "การกระทำนั้นเกินขอบเขตหรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasLimitRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });  
      this.criminalimpunityState = "14"
      return
    }


    if(this.criminalimpunityState == "14"){
      this.instancename = "กระทำเพื่อให้ผู้อื่นหรือตนเองพ้นอันตราย ใช่หรือไม่"
      this.dropdownListData = [];
        this.criminalImpunityApiService.getCrihasProtecetdRes().subscribe(response => {
        this.resultList = response;
        for (let moral of this.resultList) {
          this.dropdownListData.push({id: moral.id, value: moral.name});
        }
      });
      return
    }
  }
}
