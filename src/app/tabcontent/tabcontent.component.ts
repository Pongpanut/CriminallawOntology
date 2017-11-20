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
import { ConfirmComponent } from '../dialog/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";



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
  displayname: string;
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
  isValid: boolean;
  information: string;

  //Skip question logic
  hasIntention: boolean;
  hasreaact: boolean;
  hasreacau: boolean;
  hasintact: boolean;

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
    private parameterService: ParameterService,
    private dialogService: DialogService) 
  { 

  }

 
  ngOnInit() {
    this.justificationState = "2"
    this.intentionState = "0";
    this.criminalimpunityState = "0"
    var test ="";
    this.gatherIntention = false;
    this.ruleFlag = false;
    this.gatherJustification = false;
    this.isValid = false;
    this.instancename = 'กรุณาเลือกประเภทของผู้กระทำความผิด';
    this.displayname = 'ประเภทของผู้กระทำความผิด คือ ';
      this.actorService.findAllActor().subscribe(response => {
        this.information =""
        +"\nตัวการ คือ ผู้ที่ร่วมกระทำผิดกับผู้กระทำผิด ต้องรับโทษเท่ากับผู้กระทำผิด ตัวอย่างเช่น นายโป่งกับนายหนุ่ยร่วมกันทำร้ายร่างกายนายหน่อยจนได้รับบาดเจ็บ นายโป่งและนายหนุ่ยเป็นตัวการร่วมกระทำความผิดด้วยกัน ต้องรับโทษเท่ากัน เป็นต้น"
        +"\n\nผู้กระทำความผิดโดยทางอ้อม คือผู้ที่หลอกบุคคลอื่นซึ่งมีการกระทำตามมาตรา ๕๙ ให้กระทำความ ผิด โดยที่ผู้ถูกหลอกไม่มีเจตนากระทำความผิด เพราะไม่รู้ข้อเท็จจริงอันเป็นองค์ประกอบของความผิดนั้น ๆ";
        this.resultList = response;
        for (let actor of this.resultList) {
          this.dropdownListData.push({id: actor.id, value: actor.name});
        }
      });
  }

  onChange(event) {
    
  }

  showConfirm(message: string) {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'คำตอบจากการประมวลผล', 
        message: message})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                //alert('accepted');
            }
            else {
                //alert('declined');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
  }

  showInformation() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
        title:'ข้อมูลเพิ่มเติม', 
        message: this.information})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                //alert('accepted');
            }
            else {
                //alert('declined');
            }
        });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
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
          this.showConfirm(res); 
          //alert("คำตอบจากการประมวลผล: \n"+ res);
          this.pService.done();
        });
  }
callOntology(){
  this.CallOntologyApi();
}
myFunc(value){
    var test = this.CheckEndCondition(value);
    if(value == "ไม่มีการกระทำ" || test == true){
      return;
    }
    this.flowchart.push(this.displayname + value);
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
    if(this.value == "ผู้สนับสนุนโดยไม่รู้" || this.value == "ตัวการกระทำความผิด" || this.value == "ผู้กระทำความผิดแบบกลุ่ม"){

      if(this.value == "ผู้สนับสนุนโดยไม่รู้" ){
        this.parameterService.innocent = "Innocentagent";
      }
      if(this.value == "ตัวการกระทำความผิด"){
        this.parameterService.offender = "Offender";
      }
      if(this.value == "ผู้กระทำความผิดแบบกลุ่ม"){
        this.parameterService.party = "Party" ;
      }
      this.instancename = "กรุณาเลือกประเภทของเหยื่อจากการกระทำ"
      this.displayname = 'ประเภทของเหยื่อจากการกระทำ คือ ';
      this.dropdownListData = [];
      this.victimService.findAllVictim().subscribe(response => {
        this.information = "ไม่มีคำอธิบายเพิ่มเติมเกี่ยวกับประเภทของเหยื่อ";
        this.resultList = response;
        for (let victim of this.resultList) {
          this.dropdownListData.push({id: victim.id, value: victim.name});
        }
      });
    }

    /////  Victim //////
    // For Victim
    if(this.value == "เหยื่อจากการกระทำเป็นคน"){
       this.parameterService.victim = "victim" ;
       this.instancename = "กรุณาเลือกประเภทของการกระทำที่เกิดขึ้น"
       this.displayname = 'ประเภทของการกระทำที่เกิดขึ้น คือ ';
       this.dropdownListData = [];
       this.actionService.findAllActionCat1().subscribe(response => {
       this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับประเภทของเหยื่อ";
       this.resultList = response;
       for (let action of this.resultList) {
         this.dropdownListData.push({id: action.id, value: action.name});
       }
     });
    }

     if(this.value == "เหยื่อจากการกระทำเป็นสิ่งของ"){
       //TODO
       this.instancename = "กรุณาเลือกประเภทของการกระทำที่เกิดขึ้น"
       this.displayname = 'ประเภทของการกระทำที่เกิดขึ้น คือ ';
       this.dropdownListData = [];
       this.actionService.findAllActionCat2().subscribe(response => {
       this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับการกระทำในรูปแบบต่างๆ";
       this.resultList = response;
       for (let action of this.resultList) {
         this.dropdownListData.push({id: action.id, value: action.name});
       }
     });
    }

     if(this.value == "ไม่มีผู้ถูกกระทำ"){
       //TODO
       this.instancename = "กรุณาเลือกประเภทของการกระทำที่เกิดขึ้น"
       this.displayname = 'ประเภทของการกระทำที่เกิดขึ้น คือ ';
       this.dropdownListData = [];
       this.actionService.findAllActionCat3().subscribe(response => {
       this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับการกระทำในรูปแบบต่างๆ";
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
      this.instancename = "กรุณาเลือกผลที่เกิดขึ้นจากการกระทำของผู้กระทำความผิด"
      this.displayname = 'ผลที่เกิดขึ้นจากการกระทำ คือ เหยื่อ';
      this.dropdownListData = [];
      this.causationService.findCausationVic2().subscribe(response => {
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับผลจากการกระทำ";
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });
  }

    if(this.value == "ขโมย"){
      //TODO
      this.instancename = "กรุณาเลือกผลที่เกิดขึ้นจากการกระทำของผู้กระทำความผิด"
      this.displayname = 'ผลที่เกิดขึ้นจากการกระทำ คือ เหยื่อ';
      this.dropdownListData = [];
      this.causationService.findCausationVic3().subscribe(response => {
        this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับผลจากการกระทำ";
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
   

    if(this.value == "ฆ่า" || this.value == "ทำร้าย" || this.value == "ยุยง" ){
      if(this.value == "ฆ่า"){
        this.parameterService.crimeSucceed = "kill" ;
      }
      if(this.value == "ทำร้าย"){
        this.parameterService.crimeSucceed = "harm" ;
      }
      if(this.value == "ยุยง"){
        this.parameterService.crimeSucceed = "becruel" ;
      }
      this.displayname = 'รายละเอียดเพิ่มเติมของเหยื่อ คือ ';
      this.instancename = "รายละเอียดเหยื่อเพิ่มเติม"
      this.dropdownListData = [];
      this.vicDetailService.findAllVicDetail().subscribe(response => {
        this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับรายละเอียดของเหยื่อ";
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
      this.displayname = 'เหตุการณ์ที่เกิดขึ้นมีรายละเอียดเพิ่มเติม คือ ';
      this.dropdownListData = [];
      this.addDetailService.findAllAddDetail().subscribe(response => {
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับรายละเอียดของเหตุการณ์";
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

      this.instancename = "กรุณาเลือกผลที่เกิดขึ้นจากการกระทำของผู้กระทำความผิด"
      this.displayname = 'ผลที่เกิดขึ้นจากการกระทำ คือ เหยื่อ';
      this.dropdownListData = [];
      this.causationService.findCausationVic1().subscribe(response => {
        this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับผลจากการกระทำ";
      this.resultList = response;
      for (let action of this.resultList) {
        this.dropdownListData.push({id: action.id, value: action.name});
      }
    });

  this.gatherIntention = true
  }
}

  updateDropdownAndInstanceForIntention(){

    if(this.value == "รู้สำนึก หรือ ตระหนักถึงสิ่งที่กำลังกระทำอยู่"){
      this.parameterService.hasreaact = "reaact" ;
      this.hasreaact = true;
    }
    else if(this.value == "เล็งเห็นผล หรือ คาดหมายผลของการกระทำที่จะเกิดขึ้น"){
      this.parameterService.hasReaCau = "reacau"
      this.hasreacau = true;
    }
    else if(this.value == "มุ่งหมายที่จะให้ผลเกิดขึ้น"){
      this.parameterService.hasintact = "intact"
      this.hasintact = true;
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
      this.instancename = "ผู้กระทำรู้สำนึก หรือ ตระหนักถึงสิ่งที่กระทำอยู่หรือไม่"
      this.displayname = 'ผู้กระทำ';
      this.information ="การกระทำโดยรู้สำนึก หมายความว่า ผู้กระทำได้กระทำโดยรู้สำนึกในการเคลื่อนไหวร่างกาย หรืองดเว้นการเคลื่อนไหวร่างกายดยมีลำดับ ดังนี้"
      +"\n1. ผู้กระทำได้คิดว่าจะกระทำ"
      +"\n2. ผู้กระทำได้ตกลงใจที่จะกระทำความผิดนั้น"
      +"\n3. ผู้กระทำได้กระทำตามที่ได้คิดและตกลงใจนั้น"
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
      this.instancename = "ผู้กระทำตระหนักถึงผลของการกระทำที่จะเกิดขึ้นหรือไม่"
      this.displayname = 'ผู้กระทำ';
      this.information ="การกระทำโดยรู้สำนึกถึงผลของการกระทำ หมายความว่า ผู้กระทำได้กระทำโดยรู้สำนึกในผลของการกระทำที่เกิดขึ้น"
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
      this.instancename = "ผู้กระทำมีความมุ่งหมายที่จะให้ผลเกิดขึ้นด้วยใช่หรือไม่"
      this.displayname = 'ผู้กระทำ';
      this.information ="โดยที่ประสงค์ต่อผล หมายความว่า ผู้กระทำได้กระทำโดยรู้สำนึกและประสงค์ต่อผลของการกระทำนั้นๆ";
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

    if(this.hasintact && this.hasreaact && this.hasreacau){
      this.gatherJustification = true
      this.gatherIntention = false
      return
    }

    if(this.intentionState == "3"){ 
      this.instancename = "การกระทำนั้นเป็นการกระทำโดยปราศจากความระมัดระวังหรือไม่"
      this.displayname = 'การกระทำที่เกิดขึ้นเป็น'
      this.information =" เป็นการกระทำโดยปราศจากความระมัดระวังซึ่งบุคคล ในภาวะเช่นนั้นต้องมีตามวิสัยและพฤติการณ์  จะเห็นได้ว่าในข้อนี้มีปัจจัยที่ต้องนำมาพิจารณา 4 ข้อคือ"
      +"\n\n2.1 บุคคล  หมายความว่า ความระมัดระวังของบุคคลที่แตกต่างกันย่อมมีไม่เท่ากัน เช่นจะเอาความระมัดระวังของเด็กไปเปรียบเทียบกับความระมัดระวังของผู้ใหญ่ไม่ได้  หรือ ศัลยแพทย์ก็ควรต้องมีความระมัดระวังในการผ่าตัดมากกว่าแพทย์ทั่วไป  สรุปก็คือว่าการที่จะวัดความระมัดระวังของผู้กระทำจะต้องคำนึงถึง เพศ  อายุ  อาชีพ  ฐานะ ให้เป็นอย่างเดียวกับผู้กระทำด้วย"
      +"\n\n2.2 ในภาวะเช่นนั้น หมายถึง ขณะทำการนั้น เช่นขณะขับรถควรมีความระมัดระวังเพียงใด"
      +"\n\n2.3  วิสัย หมายถึงสภาพภายในตัวผู้กระทำ เช่น วิสัยของเด็ก(ที่ต้องซุกซน) , วิสัยของแพทย์ซึ่งต้องมีการพิจารณาถึง อายุ เพศ การศึกษาอบรม ความจัดเจนแห่งชีวิต ประกอบด้วย"
      +"\n\n2.4 พฤติการณ์  หมายถึงสภาพภายนอกของตัวผู้กระทำ เช่นสภาพแวดล้อมภายนอก เช่น ขับรถขณะมืดสนิทก็ย่อมมองเห็นได้ไม่ชัดเจนเท่ากับขับรถในเวลากลางวันดังนั้นผู้ขับรถในทางที่มืดสนิทย่อมใช้ความระมัดระวังได้ไม่เท่ากับผู้ที่ขับรถในเวลากลางวันหรือกรณีที่ผู้ป่วยป่วยหนักกลางป่าต้องทำการผ่าตัดฉุกเฉิน  (เช่น ทหารได้รับบาดเจ็บจากการรบ)แพทย์ก็ย่อมไม่สามารถใช้ความระมัดระวังได้เท่ากับการผ่าตัดในโรงพยาบาลที่อยู่ในเมือง"
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
      this.information ="เช่น วิสัยของผู้ประกอบวิชาชีพด้านสุขภาพ ย่อมต้องมีความรู้ความชำนาญมากกว่าคนธรรมดา  จึงต้องใช้ความระมัดระวังมากกว่า";
      this.displayname = '';
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
      this.information ="เล็งเห็นผล หมายความว่า ผู้กระทำเห็นแล้วว่าผลจะเกิดจากการกระทำของตนแต่ผู้กระทำไม่ไยดีในผลที่จะเกิดขึ้นนั้น";
      this.displayname = 'ผู้กระทำ';
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
      this.displayname = 'ผู้กระทำ';
      this.information ="1. ต้องมีผู้ถูกกระทำสองผ่ายขึ้นไป ฝ่ายแรก คือคนที่ผู้กระทำมุ่งหมายกระทำโดยมีเจตนาประสงค์ต่อผล ฝ่ายสองคือผู้เสียหายอีกคนที่ได้รับผลร้าย"
      +"2. ผ้กระทำต้องไม่ประสงค์ต่อผล ต่อบุคคลที่ได้รับผลร้าย รวมถึงไม่เล็งเห็นผลด้วย";
      
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


    // if(this.justificationState == "0"){
    //   this.instancename = "การยินยอมนั้นเกิดอยู่ระหว่างกระทำความผิดหรือไม่"
    //   this.dropdownListData = [];
    //     this.justificationApiService.gethasAssentDuringCrime().subscribe(response => {
    //     this.resultList = response;
    //     for (let moral of this.resultList) {
    //       this.dropdownListData.push({id: moral.id, value: moral.name});
    //     }
    //   });  
    //   this.justificationState = "1"
    //   return
    // }

    // if(this.justificationState == "1"){
    //   this.instancename = "ความยินยอมนั้นขัดต่อสำนึกในศีลธรรมอันดีหรือไม่"
    //   this.dropdownListData = [];
    //     this.justificationApiService.gethasAssentGoodMoral().subscribe(response => {
    //     this.resultList = response;
    //     for (let moral of this.resultList) {
    //       this.dropdownListData.push({id: moral.id, value: moral.name});
    //     }
    //   });  
    //   this.justificationState = "2"
    //   return
    // }

    if(this.justificationState == "2"){
      this.instancename = "ขณะเกิดเหตุการณ์นั้นมีภยันตรายหรือไม่"
      this.displayname = 'ขณะเกิดเหตุการณ์';
      this.information ="มีภยันตราย หมายถึงขณะเกิดเหตุมีอันตรายซึ่งเกิดจากการประทุษร้ายอันละเมิดต่อกฎหมาย"
      
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
      this.instancename = "หากระหว่างกระทำความผิดนั้นมีภยันตราย ภยันอันตรายนั้นใกล้จะถึงหรือไม่"
      this.information ="ผู้ทำละเมิดไม่มีอำนาจ และภัยนั้นจะเกิด หรือยังไม่เกิด แต่ใกล้จะเกิด อ้างป้องกันได้ แต่หากยังไม่น่าจะเกิดภัย อ้างป้องกันไม่ได้"
                      +"หรือภยันตรายที่เกิดจากการกระทำโดยประมาท หากใกล้จะถึง ก็สามารถป้องกันสิทธิได้"
                      +"\n\nตัวอย่าง แดงขับในที่ชุมชนด้วยความเร็วสูง รถจะชนบุตรของเหลือง เหลืองยิงยางรถ เพื่อป้องกันบุตรได้"
                      +"\n\n ตัวอย่างจากคำพิพากษาฎีกาที่ 2285/2528 (ผู้ตายกำลังชักปืน แม้ยังไม่ถึงเป็นความผิด (ยังไม่ถึงขั้นลงมือ คือเล็ง หรือพร้อมจะยิงได้) โดยไม่ต้องรอให้ถูกยิง หรือมือถึงไกปืน ก็ยิงป้องกันได้) ผู้ตายมาพูดขอแบ่งวัวจากจำเลย จำเลยไม่ยอมแบ่ง และชวนให้ไปตกลงกันที่บ้านผู้ใหญ่บ้านหรือที่บ้านกำนัน แต่ผู้ตายไม่ยอมไป กลับชักปืนออกมาจากเอว จำเลยย่อมเข้าใจว่าผู้ตายจะใช้ปืนยิงจำเลย อันเป็นภยันตราย ซึ่งเกิดจากการประทุษร้ายอันละเมิดกฎหมาย และเป็นภยันตรายที่ใกล้จะถึงการที่จำเลยใช้ปืนยิงผู้ตายไป 1 นัด และผู้ตายถึงแก่ความตาย จึงเป็นการป้องกันสิทธิของตนพอสมควรแก่เหตุ การกระทำของจำเลยเป็นการป้องกันโดยชอบด้วยกฎหมาย จำเลยไม่มีความผิด"
      this.displayname = 'ขณะเกิดเหตุการณ์';
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
      this.instancename = "ผู้กระทำจำเป็นต้องกระทำเพื่อป้องกันสิทธิ ของตนเองหรือผู้อื่น ใช่หรือไม่"
      this.displayname = 'ขณะเกิดเหตุการณ์';
      this.information =" การป้องกันสิทธิของตนหรือคนอื่น ก็คือ การป้องกันสิทธิขั้นพื้นฐานของมนุษย์นี้ เช่น สิทธิของการมีชีวิต สิทธิบนเนื้อตัวร่างกายของเรา สิทธิครอบครองเคหสถานที่อยู่อาศัย สิทธิในทรัพย์สินของเรา ฯลฯ ที่จะให้คนอื่นมากระทำละเมิดต่อกฎหมายกับเราหรือคนอื่นไม่ได้ เช่น มาทำร้าย มาฆ่า มาทุบตี มาคุกคามขับไล่ หรือมาขโมยของๆ เรา ไม่ได้"
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
      this.instancename = "การกระทำนั้นเกิดขึ้นเพื่อป้องกันสิทธิ และไม่เกินขอบเขต ใช่หรือไม่"
      this.displayname = 'การกระทำนั้น';
      this.information =" กระทำไปไม่เกินขอบเขต ได้แก่ ไม่เกินสมควรแก่เหตุ หรือไม่เกินกว่ากรณีแห่งความจำเป็น"
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

    // if(this.justificationState == "6"){
    //   this.instancename = "เป็นการยินยอมอันบริสุทธิ์ ใช่หรือไม่"
    //   this.dropdownListData = [];
    //     this.justificationApiService.gethasPureAssent().subscribe(response => {
    //     this.resultList = response;
    //     for (let moral of this.resultList) {
    //       this.dropdownListData.push({id: moral.id, value: moral.name});
    //     }
    //   });  
    //   this.justificationState = "7"
    //   return
    // }

    if(this.justificationState == "6"){
      this.gatherImpunity = true
      this.gatherJustification = false
      return
    }
  }

  isValidForm() {
    return this.isValid;
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
      this.isValid = true
      //this.CallOntologyApi();
    }
    else if(this.value == "มิได้ทำให้ผู้อื่นหรือตนเองพ้นอันตราย"){
      this.isValid = true
      //this.CallOntologyApi()
    }
  
    

    if(this.criminalimpunityState == "0"){
      this.instancename = "ผู้กระทำความผิดอายุน้อยกว่า 15 ปี ใช่หรือไม่"
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับอายุของผู้กระทำ";
      this.displayname = '';
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
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับการกระทำอันกฎหมายบัญญัติไว้ว่าเป็นความผิด";
      this.displayname = 'เหตุการณ์ที่เกิดขึ้น';
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
      this.information = "ไม่สามารถรู้ผิดชอบ หมายถึง ไม่สามารถรู้ได้ว่าการกระทำนั้นผิดศีลธรรม ไม่อาจแยกแยะตามหลักศีลธรรมได้"
      this.displayname = 'ผู้กระทำ';
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
      this.information = "- จิตบกพร่อง หมายถึง ลักษณะของผู้ที่สมองไม่เจริญเติบโตตามวัย หรือบกพร่องมาแต่กำเนิด"
      +"\n- โรคจิต หมายถึง ความบกพร่องแห่งจิตที่เกิดจากโรค"
      +"\n- จิตฟั่นเฟือน หมายถึง ผู้ที่มีความหลงผิด ประสาทหลอน และแปลผิด"
  
      this.displayname = 'ผู้กระทำ';
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
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับความมึนเมา";
      this.displayname = 'ผู้กระทำ';
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
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับสาเหตุของความมึนเมา";
      this.displayname = '';
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

      this.information = "เจ้าพนักงาน หมายถึง เจ้าพนักงานตามที่กฎหมายบัญญัติไว้โดยเฉพาะ และกระทำการในหน้าที่นั้น หรือ เจ้าพนักงานตามที่ได้รับมอบหมาย"
      +"\n\n  เช่น คำพิพากษาฎีกาที่ 700/2490 คำว่าเจ้าพนักงานตามความหมายของกฎหมายอาญานั้น ย่อมมีความหมายถึงผู้ที่ได้รับแต่งตั้งโดยทางการของรัฐไทยให้ปฏิบัติราชการของรัฐไทยเท่านั้น"
      this.displayname = 'การกระทำที่เกิดขึ้น';
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
      this.instancename = "คำสั่งจากเจ้าพนักงานเป็นคำสั่งที่มิชอบด้วยกฎหมายหรือไม่"
      this.information = "คำสั่งที่มิชอบด้วยกฎหมาย หรือคำสั่งที่ผิดกฎหมาย";
      this.displayname = '';
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
      this.instancename = "ผุ้กระทำรู้หรือไม่ว่าคำสั่งนั้นมิชอบด้วยกฎหมาย"
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับการรับรู้ของผู้กระทำ";
      this.displayname = '';
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
      this.instancename = "จากคำสั่งของเจ้าพนักงานผู้กระทำมีหน้าที่ปฎิบัติตาม ใช่หรือไม่"
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับหน้าที่ของผู้กระทำ";
      this.displayname = '';
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
      this.instancename = "ผู้กระทำความผิดถูกบังคับหรืออยู่ภายใต้อำนาจ ใช่หรือไม่"
      this.information = "อยู่ในที่บังคับหรือภายใต้อำนาจ หมายความว่า ความจำเป็นที่จะต้องกระทำความผิดนั้นเป็นเพราะอยู่ในที่บังคับหรือภายใต้อำนาจบังคับของบุคคลอื่น  อำนาจจากภายนอกมาบังคับบงการผู้กระทำให้กระทำความผิดโดยการกระทำหรือไม่ให้กระทำการอย่างใดอย่างหนึ่ง อย่างไรก็ตามการบังคับเช่นนี้มิใช่บังคับความรู้สึกทางจิตใจเท่านั้นแต่ต้องบังคับการกระทำด้วยการบังคับบงการ"
      this.displayname = 'ขณะเกิดเหตุการณ์ผู้กระทำ';
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
      this.information = "ไม่สามารถหลีกเลี่ยงหรือขัดขืนให้ตนเองหรือผู้อื่นพ้นจากภยันตรายนั้นโดยวิธีอื่นใดได้"
      +"จึงจำต้องกระทำความผิดเพื่อพ้นจากภยันตรายนั้นได้"
      +"แต่ผู้กระทำยังสามารถหลีกเลี่ยงหรือขัดขืนได้ก็จะต้องหลีกเลี่ยงถ้าไม่หลีกเลี่ยงแต่ไปกระทำความผิดก็จะมาอ้าง"
      this.displayname = 'ขณะเกิดเหตุการณ์ผู้กระทำ';
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
      this.instancename = "การกระทำเกิดจากความต้องการของผู้กระทำ ใช่หรือไม่"
      this.information = "ผู้กระทำความผิดต้องการกระทำให้เกิดเหตุการณ์นี้ขึ้นมา";
      this.displayname = 'ขณะเกิดเหตุการณ์';
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
      this.instancename = "การกระทำที่เกิดขึ้นเกินขอบเขตหรือไม่"
      this.information = "จะรู้ได้ว่าการกระทำนั้นๆเกินสมควรแก่เหตุหรือไม่ก็ต้องเปรียบเทียบดูว่าภยันตรายที่เขาจะได้รับกับความผิดที่กระทำใครมีมากกว่าถ้าภยันตรายที่เขาจะได้รับมีมากกว่าความผิดที่ทำลงไปด้วยความจำเป็นมีน้อยกว่าก็ไม่เกินสมควรแก่เหตุผลของการกระทำ"
      this.displayname = '';
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
      this.instancename = "ผู้กระทำได้กระทำไปเพื่อให้ผู้อื่นหรือตนเองพ้นอันตราย ใช่หรือไม่"
      this.information = "ไม่มีคำอธิบายเพิ่มเติมที่เกี่ยวข้องกับการกระทำของผู้กระทำ";
      this.displayname = 'ผู้กระทำ';
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
