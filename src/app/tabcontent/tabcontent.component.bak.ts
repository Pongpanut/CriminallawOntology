// import { Component, OnInit, Injectable, Inject, Input } from '@angular/core';
// import { Http, Response, Headers,RequestOptions } from '@angular/http';
// import { ActorService } from '../service/actor.service';
// import { ActionService } from '../service/action.service';
// import { VictimService } from '../service/victim.service';
// import { CausationService } from '../service/causation.service';
// import { RelizedService } from '../service/relized.service';
// import { UsertabComponent } from '../usertab/usertab.component';
// import { YesnoAwarenessService } from '../service/yesnoawareness.service';
// import { YesnoService } from '../service/yesno.service';
// import { OntologyService } from '../service/ontology.service';
// import { YesnoDirectService } from '../service/yesnodirect.service';
// import { YesnoTransferService } from '../service/yesnotransfer.service';
// import { IntoxicationormindService } from '../service/intoxicationormind.service';
// import { YesnoMoralService } from '../service/yesnomoral.service';
// import { YesnoDangerService } from '../service/yesnodanger.service';
// import { CannotavoidService } from '../service/cannotavoid.service';
// import { YesnoCriminalImpunityService } from '../service/yesnoCriminalImpunity.service';
// import { OffenderageService } from '../service/offenderage.service';
// import { IntoxicationService } from '../service/intoxication.service';
// import { YesnoDefenseService } from '../service/yesnodefense.service';
// import { ParameterService } from '../model/parameter';
// import { VicDetailService } from '../service/vicdetail.service';
// import { AddDetailService } from '../service/addDetail.service';
// import {Subscription} from 'rxjs';
// import {NgProgressService} from "ng2-progressbar";

// @Component({
//   selector: 'app-tabcontent',
//   templateUrl: './tabcontent.component.html',
//   styleUrls: ['./tabcontent.component.css']
// })

// export class TabContentBAKComponent implements OnInit {
//   @Input() userId;
//   dropdownListData: {id: string, value: string}[] = [];
//   flowchart: string[] = [];
//   instancename:  string;
//   value: string;
//   defaultValue = this.dropdownListData[1];
//   resultList: any = [];
//   ruleFlag: boolean;
//   gatherIntention: boolean;
//   gatherIntentionFirsttime: boolean;
//   gatherJustification: boolean;
//   gatherJustificationFirsttime: boolean;
//   gatherImpunity: boolean;
//   gatherImpunityFirsttime: boolean;
//   busy: Subscription;
//   queryString:  string;

//   constructor(private actorService : ActorService,
//     private actionService : ActionService, 
//     private victimService : VictimService,
//     private causationService : CausationService,
//     private relizedService : RelizedService, 
//     private yesnoAwarenessService : YesnoAwarenessService,
//     private yesnoDirectService : YesnoDirectService,
//     private yesnoDefenseService : YesnoDefenseService,
//     private yesnoTransferService : YesnoTransferService,
//     private yesnoMoralService : YesnoMoralService,
//     private yesnoDangerService : YesnoDangerService,
//     private cannotavoidService : CannotavoidService,
//     private yesnoCriminalImpunityService : YesnoCriminalImpunityService,
//     private offenderageService: OffenderageService,
//     private intoxicationService: IntoxicationService,
//     private intoxicationormindService: IntoxicationormindService,
//     private yesnoService: YesnoService,
//     private ontologyService: OntologyService,
//     private usertabcomb : UsertabComponent,
//     private vicDetailService : VicDetailService,
//     private addDetailService : AddDetailService,
//     private http: Http,
//     private pService: NgProgressService,
//     private parameterService: ParameterService) 
//   { 

//   }

 
//   ngOnInit() {
//     var test ="";
//     this.gatherIntention = false;
//     this.ruleFlag = false;
//     this.gatherJustification = false;
//     this.instancename = 'Actor';
//       this.actorService.findAllActor().subscribe(response => {
//         this.resultList = response;
//         for (let actor of this.resultList) {
//           this.dropdownListData.push({id: actor.id, value: actor.name});
//         }
//       });
//   }

//   onChange(event) {
    
//   }

//   CallOntologyApi(){
//         this.pService.start();
//         var param = "";
//         if(this.parameterService.offender != "" && typeof this.parameterService.offender !== "undefined" )
//             param += "offender="+this.parameterService.offender+"&";
//         if(this.parameterService.victim != "" && typeof this.parameterService.victim !== "undefined" )
//           param += "victim="+this.parameterService.victim+"&";
//         if(this.parameterService.crimeSucceed != "" && typeof this.parameterService.crimeSucceed !== "undefined" )
//           param += "crimesucceed="+this.parameterService.crimeSucceed+"&";
//         if(this.parameterService.victimDetail != "" && typeof this.parameterService.victimDetail !== "undefined" )
//           param += "victimdetail="+this.parameterService.victimDetail+"&";
//         if(this.parameterService.additionalDetail != "" && typeof this.parameterService.additionalDetail !== "undefined" )
//           param += "adddetail="+this.parameterService.additionalDetail+"&";

//         this.ontologyService.findResponse(param).subscribe(response => {
//           var res = response;
//           alert("Answer is :"+ res);
//           this.pService.done();
//         });
//   }

//   myFunc(value){
//     var test = this.CheckEndCondition(value);
//     if(value == "ไม่มีการกระทำ" || test == true){
//       return;
//     }
//     this.flowchart.push(this.instancename +" ของผู้เกี่ยวข้องที่  "+this.userId+" คือ '"+value+"'");
//     this.value = value;

//     if(this.gatherJustification){
//       this.updateDropdownAndInstanceForJustification();
//     }

//     if(this.gatherImpunity){
//       this.updateDropdownAndInstanceForCriminalImpunity();
//     }

//     if(this.gatherIntention){
//       this.updateDropdownAndInstanceForIntention();
//     }
  
//     this.updateDropdownAndInstance();
//   }

//   CheckEndCondition(value){
//     // For victim
//     if( value == "ซ่องสุมซ่องโจรหรืออั้งยี่"){
//       this.flowchart.push(this.instancename +" มีความผิดฐาน ซ่องสุมซ่องโจรหรืออั้งยี่");
//       return true
//     }

//     if( value == "วางแผนเผาทรัพย์ หรือ โรงเรือน ของผู้อื่น"){
//       this.flowchart.push(this.instancename +" มีความผิดฐาน วางแผนเผาทรัพย์ หรือ โรงเรือน ของผู้อื่น");
//       return true
//     }

//   }

//   updateDropdownAndInstance(){

//     // For Action
//     if(this.value == "ผู้สนับสนุนโดยไม่รู้" || this.value == "ผู้กระทำความผิด" || this.value == "ผู้กระทำความผิดแบบกลุ่ม"){

//       if(this.value == "ผู้สนับสนุนโดยไม่รู้" ){
//         this.parameterService.innocent = "Innocentagent";
//       }
//       if(this.value == "ผู้กระทำความผิด"){
//         this.parameterService.offender = "Offender";
//       }
//       if(this.value == "ผู้กระทำความผิดแบบกลุ่ม"){
//         this.parameterService.party = "Party" ;
//       }
//       this.instancename = "Victim"
//       this.dropdownListData = [];
//       this.victimService.findAllVictim().subscribe(response => {
//         this.resultList = response;
//         for (let victim of this.resultList) {
//           this.dropdownListData.push({id: victim.id, value: victim.name});
//         }
//       });
//     }

//     // For Victim
//     if(this.value == "คน"){
//        this.parameterService.victim = "victim" ;
//        this.instancename = "Action"
//        this.dropdownListData = [];
//        this.actionService.findAllActionCat1().subscribe(response => {
//        this.resultList = response;
//        for (let action of this.resultList) {
//          this.dropdownListData.push({id: action.id, value: action.name});
//        }
//      });
//     }

//      if(this.value == "สิ่งของ"){
//        //TODO
//        this.instancename = "Action"
//        this.dropdownListData = [];
//        this.actionService.findAllActionCat2().subscribe(response => {
//        this.resultList = response;
//        for (let action of this.resultList) {
//          this.dropdownListData.push({id: action.id, value: action.name});
//        }
//      });
//     }

//      if(this.value == "ไม่มีผู้ถูกกระทำ"){
//        //TODO
//        this.instancename = "Action"
//        this.dropdownListData = [];
//        this.actionService.findAllActionCat3().subscribe(response => {
//        this.resultList = response;
//        for (let action of this.resultList) {
//          this.dropdownListData.push({id: action.id, value: action.name});
//        }
//      });
//     }

//     if(this.value == "ทำลาย"){
//       //TODO
//       this.instancename = "Causation"
//       this.dropdownListData = [];
//       this.causationService.findCausationVic2().subscribe(response => {
//       this.resultList = response;
//       for (let action of this.resultList) {
//         this.dropdownListData.push({id: action.id, value: action.name});
//       }
//     });
//   }

//     if(this.value == "ขโมย"){
//       //TODO
//       this.instancename = "Causation"
//       this.dropdownListData = [];
//       this.causationService.findCausationVic3().subscribe(response => {
//       this.resultList = response;
//       for (let action of this.resultList) {
//         this.dropdownListData.push({id: action.id, value: action.name});
//       }
//     });
//    }


//     // For Causation
//    if(this.value == "เสียชีวิต"){
//       this.parameterService.causation = "victimdied" ;
//     }

//     if(this.value == "บาดเจ็บ"){
//       this.parameterService.causation = "injured" ;
//     }

//     if(this.value == "บาดเจ็บสาหัส"){
//       this.parameterService.causation = "seriously_injured" ;
//     }
   

//     if(this.value == "ฆ่า" || this.value == "ทำร้าย" ){
//       if(this.value == "ฆ่า"){
//         this.parameterService.crimeSucceed = "kill" ;
//       }
//       if(this.value == "ทำร้าย"){
//         this.parameterService.crimeSucceed = "harm" ;
//       }
//       this.instancename = "รายละเอียดเหยื่อเพิ่มเติม"
//       this.dropdownListData = [];
//       this.vicDetailService.findAllVicDetail().subscribe(response => {
//       this.resultList = response;
//       for (let action of this.resultList) {
//         this.dropdownListData.push({id: action.id, value: action.name});
//       }
//     });
//   }

//   // For victim detail
//   if(this.value == "ไม่มีรายละเอียดเหยื่อเพิ่มเติม" 
//     || this.value == "เหยื่อถูกรุมกระทำจากผู้กระทำและพวก 3 คนขึ้นไป" 
//     || this.value == "เหยื่ออายุน้อยกว่า 16 ปีบริบูรณ์" ){
//       if(this.value == "ไม่มีรายละเอียดเหยื่อเพิ่มเติม"){
//         this.parameterService.victimDetail = "NoVictimDetail" ;
//       }
//       if(this.value == "เหยื่อถูกรุมกระทำจากผู้กระทำและพวก 3 คนขึ้นไป"){
//         this.parameterService.victimDetail = "group_morethan3" ;
//       }

//       if(this.value == "เหยื่ออายุน้อยกว่า 16 ปีบริบูรณ์"){
//         this.parameterService.victimDetail = "lessthan16yr" ;
//       }
//       this.instancename = "รายละเอียดเหตุการณ์เพิ่มเติม"
//       this.dropdownListData = [];
//       this.addDetailService.findAllAddDetail().subscribe(response => {
//       this.resultList = response;
//       for (let addDetail of this.resultList) {
//         this.dropdownListData.push({id: addDetail.id, value: addDetail.name});
//       }
//     });
//   }

//   // For additional detail
//   if(this.value == "ไม่มีรายละเอียดเพิ่มเติม" 
//     || this.value == "ฆ่าบุพการี" 
//     || this.value == "ฆ่าผู้ช่วยเหลือเจ้าพนักงานในการที่เจ้าพนักงานนั้นกระทำตามหน้าที่" 
//     || this.value == "ฆ่าผู้อื่นโดยไตร่ตรองไว้ก่อน" 
//     || this.value == "ฆ่าผู้อื่นโดยทรมานหรือโดยกระทำทารุณโหดร้าย" 
//     || this.value == "ฆ่าผู้อื่นเพื่อตระเตรียมการหรือเพื่อความสะดวกในการที่จะกระทำความผิดอย่างอื่น" 
//     || this.value == "ฆ่าผู้อื่นเพื่อจะเอาหรือเอาไว้ซึ่งผลประโยชน์อันเกิดแต่การที่ตนได้กระทำความผิดอื่นเพื่อปกปิดความผิดอื่นของตน" 
//     || this.value == "เหยื่อฆ่าตัวตาย" ){
//       if(this.value == "ไม่มีรายละเอียดเพิ่มเติม"){
//         this.parameterService.additionalDetail = "Noadd" ;
//       }
//       if(this.value == "ฆ่าบุพการี"
//         || this.value == "ฆ่าผู้ช่วยเหลือเจ้าพนักงานในการที่เจ้าพนักงานนั้นกระทำตามหน้าที่" 
//         || this.value == "ฆ่าผู้อื่นโดยไตร่ตรองไว้ก่อน" 
//         || this.value == "ฆ่าผู้อื่นโดยทรมานหรือโดยกระทำทารุณโหดร้าย" 
//         || this.value == "ฆ่าผู้อื่นเพื่อตระเตรียมการหรือเพื่อความสะดวกในการที่จะกระทำความผิดอย่างอื่น" 
//         || this.value == "ฆ่าผู้อื่นเพื่อจะเอาหรือเอาไว้ซึ่งผลประโยชน์อันเกิดแต่การที่ตนได้กระทำความผิดอื่นเพื่อปกปิดความผิดอื่นของตน" ){
//         this.parameterService.additionalDetail = "killParent" ;
//       }

//       if(this.value == "เหยื่อฆ่าตัวตาย"){
//         this.parameterService.additionalDetail = "VictimKillThemSelf" ;
//       }

//       this.instancename = "Causation"
//       this.dropdownListData = [];
//       this.causationService.findCausationVic1().subscribe(response => {
//       this.resultList = response;
//       for (let action of this.resultList) {
//         this.dropdownListData.push({id: action.id, value: action.name});
//       }
//     });

//   this.gatherIntention = true
//   }
// }

//   updateDropdownAndInstanceForIntention(){
      
//     if(!this.gatherIntentionFirsttime){
//       this.instancename = "ว่าผู้กระทำรับรู้ถึงสิ่งที่กระทำอยู่หรือไม่"
//       this.CallOntologyApi();
//       this.dropdownListData = [];
//         this.relizedService.findAllRelized().subscribe(response => {
//         this.resultList = response;
//         for (let action of this.resultList) {
//           this.dropdownListData.push({id: action.id, value: action.name});
//         }
//       });  
//       this.gatherIntention = true
//       this.gatherIntentionFirsttime = true
//     }
    
//       if(this.value == "รับรู้ถึงสิ่งที่เกิดขึ้น" ){
//       this.instancename = "ผู้กระทำกระทำโดยเจตนา"
//       this.dropdownListData = [];
//       this.yesnoDirectService.findAllYesnoDirect().subscribe(response => {
//       this.resultList = response;
//           for (let action of this.resultList) {
//             this.dropdownListData.push({id: action.id, value: action.name});
//           }
//         });
//         this.gatherJustification = true;
//         this.gatherIntention = false;
//       }
//       if(this.value == "ผู้กระทำไม่รับรู้ แต่ต้องการกระทำกับผู้อื่น" ){
//         this.instancename = "ผู้กระทำกระทำโดยเจตนาต่อบุคคลอื่น"
//         this.dropdownListData = [];
//         this.yesnoTransferService.findAllYesnoTransfer().subscribe(response => {
//         this.resultList = response;
//           for (let action of this.resultList) {
//             this.dropdownListData.push({id: action.id, value: action.name});
//           }
//         });
//         this.gatherJustification = true;
//         this.gatherIntention = false;
//       }
//       if(this.value == "ผู้กระทำไม่รับรู้ถึงสิ่งที่เกิดขึ้นและผลที่จะตามมา" ){
//         this.instancename = "ผู้กระทำกระทำโดยเจตนา"
//         this.dropdownListData = [];
//         this.yesnoAwarenessService.findAllYesnoAwareness().subscribe(response => {
//         this.resultList = response;
//           for (let action of this.resultList) {
//             this.dropdownListData.push({id: action.id, value: action.name});
//           }
//         });
//         this.gatherJustification = true;
//         this.gatherIntention = false;
//       }
//   }

//   updateDropdownAndInstanceForJustification(){
//     if(!this.gatherJustificationFirsttime){
//       this.instancename = "รายละเอียดเพิ่มเติม เพื่อพิจราณาการยกเว้นความผิด"
//       this.dropdownListData = [];
//         this.yesnoMoralService.findAllYesnoMoral().subscribe(response => {
//         this.resultList = response;
//         for (let moral of this.resultList) {
//           this.dropdownListData.push({id: moral.id, value: moral.name});
//         }
//       });  
//       this.gatherJustificationFirsttime = true
//     }
    
//       if(this.value == "ผู้กระทำไม่รู้ผิดชอบขณะกระทำความผิด" ){
//       this.instancename = "รายละเอียดเพิ่มเติม เพื่อพิจราณาการยกเว้นความผิด"
//       this.dropdownListData = [];
//       this.yesnoDangerService.findAllYesnoDanger().subscribe(response => {
//       this.resultList = response;
//           for (let danger of this.resultList) {
//             this.dropdownListData.push({id: danger.id, value: danger.name});
//           }
//         });
//       }
//       if(this.value == "ผู้กระทำขณะภยันอันตรายใกล้จะถึง" ){
//         this.instancename = "รายละเอียดเพิ่มเติม เพื่อพิจราณาการยกเว้นความผิด"
//         this.dropdownListData = [];
//         this.yesnoDefenseService.findAllYesnoDefense().subscribe(response => {
//         this.resultList = response;
//           for (let defense of this.resultList) {
//             this.dropdownListData.push({id: defense.id, value: defense.name});
//           }
//         });
//       }

//       if(this.value == "ผู้กระทำขณะไม่มีภยันอันตรายใดๆ"
//       || this.value == "ผู้กระทำมิได้กระทำเพื่อปกป้องตนเองหรือผู้อื่น"){
//         this.gatherImpunity = true
//       }
//   }

//   updateDropdownAndInstanceForCriminalImpunity(){
//     if(!this.gatherImpunityFirsttime){
//       this.instancename = "รายละเอียดเพิ่มเติม เพื่อพิจราณาการยกเว้นความโทษซ อายุของผู้กระทำความผิด"
//       this.dropdownListData = [];
//         this.offenderageService.findOffenderage().subscribe(response => {
//         this.resultList = response;
//         for (let moral of this.resultList) {
//           this.dropdownListData.push({id: moral.id, value: moral.name});
//         }
//       });  
//       this.gatherImpunityFirsttime = true
//     }
    
//     // Offender age
//       if(this.value == "มากกว่า 15 ปีบริบูรณ์" ){
//       this.instancename = "ผู้กระทำกระทำด้วยความจำเป็นหรือไม่"
//       this.dropdownListData = [];
//       this.yesnoCriminalImpunityService.findAllYesnoNecessity().subscribe(response => {
//       this.resultList = response;
//           for (let criminalImpunity of this.resultList) {
//             this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//           }
//         });
//       }
//       if(this.value == "ระหว่าง 7 ถึง 15 ปี" ){
        
//       }

//       if(this.value == "น้อยกว่า 7 ปี" ){
        
//       }
//      // End offender age
     
//       // Necessity
//       if(this.value == "ผู้กระทำกระทำด้วยความจำเป็น" ){
//       this.instancename = "อยู่ภายใต้สถานการณ์บังคับ หรือภายใต้ความจำเป็นหรือไม่"
//       this.dropdownListData = [];
//       this.cannotavoidService.findCannotavoidActor().subscribe(response => {
//       this.resultList = response;
//           for (let criminalImpunity of this.resultList) {
//             this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//           }
//         });
//       }
//       if(this.value == "ผู้กระทำไม่ได้กระทำด้วยความจำเป็น" ){
//         this.instancename = "ผู้กระทำอยู่ในสภาวะจิตผิดปกติ หรือภายใต้ความมึนเมาหรือไม่"
//         this.dropdownListData = [];
//         this.intoxicationService.findIntoxication().subscribe(response => {
//         this.resultList = response;
//             for (let intoxication of this.resultList) {
//               this.dropdownListData.push({id: intoxication.id, value: intoxication.name});
//             }
//           });
//       }
//       // End Necessity

//       //Cannot avoid
//       if(this.value == "อยู่ในสถานการณ์ปกติ" ){
         
//       }
//       if(this.value == "อยู่ภายใต้สถานการณ์บังคับ" ){
//         this.instancename = "ผู้กระทำกระทำด้วยความจำเป็นหรือไม่"
//         this.dropdownListData = [];
//         this.yesnoCriminalImpunityService.findAllYesnoOwn().subscribe(response => {
//         this.resultList = response;
//             for (let criminalImpunity of this.resultList) {
//               this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//             }
//           });
//       }
//       if(this.value == "อยู่ภายใต้ภยันตราย" ){
//         this.instancename = "ผู้กระทำกระทำด้วยความจำเป็นหรือไม่"
//         this.dropdownListData = [];
//         this.yesnoCriminalImpunityService.findAllYesnoImmi().subscribe(response => {
//         this.resultList = response;
//             for (let criminalImpunity of this.resultList) {
//               this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//             }
//           });
//       }
//       // Finish cannot avoid

//       // Yes no own and immi
//       if(this.value == "ผลจากการกระทำมิได้มาจากมูลความผิดของผู้กระทำ" ){
        
//       }

//       if(this.value == "ไม่ได้มีภยันอันตรายใกล้จะถึง" ){

//       }
   
//      if(this.value == "ผลจากการกระทำมาจากมูลความผิดของผู้กระทำ" 
//     || this.value == "มีภยันอันตรายใกล้จะถึง"){
//        this.instancename = "ผู้กระทำกระทำอย่างเหมาะสมหรือไม่"
//        this.dropdownListData = [];
//        this.yesnoCriminalImpunityService.findAllYesnoReason().subscribe(response => {
//        this.resultList = response;
//            for (let criminalImpunity of this.resultList) {
//              this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//            }
//          });
//      }
//      // Finish Yes no own

//      //Start Intoxication
//      if(this.value == "ผู้กระทำอยู่ภายใต้สภาวะจิตไม่ปกติหรือมึนเมา" ){
//       this.instancename = "ผู้กระทำความผิดมีสภาวะจิตปกติและสามารถควบคุมตนเองได้หรือไม่"
//       this.dropdownListData = [];
//       this.yesnoCriminalImpunityService.findAllYesnoControl().subscribe(response => {
//       this.resultList = response;
//           for (let criminalImpunity of this.resultList) {
//             this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//           }
//         });
//       }
//       if(this.value == "ผู้กระทำอยู่ภายใต้สภาวะจิตปกติและไม่มึนเมา" ){
//         this.instancename = "ผู้กระทำเป็นคู่สามีภรรยาหรือไม่"
//         this.dropdownListData = [];
//         this.yesnoCriminalImpunityService.findAllYesnoSpouse().subscribe(response => {
//         this.resultList = response;
//             for (let criminalImpunity of this.resultList) {
//               this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//             }
//           });
//       }
//      //Finish Itnoxication

//      //Start yesno control
     
//      if(this.value == "ผู้กระทำมีสติสัมปชัญญะและสามารถควบคุมตนเองได้" ){
//      }

//      if(this.value == "ผู้กระทำไม่มีสติสัมปชัญญะหรือไม่สามารถควบคุมตนเองได้" ){
//       this.instancename = "สาเหตุของการไม่มีสติสัมปชัญญะหรือไม่สามารถควบคุมตนเองได้คืออะไร"
//       this.dropdownListData = [];
//       this.intoxicationormindService.findIntoxicationormind().subscribe(response => {
//       this.resultList = response;
//           for (let criminalImpunity of this.resultList) {
//             this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//           }
//         });
//      }
//      //finish yesno control

//      //start Intoxication or mind
//      if(this.value == "เป็นบุคคลจิตวิกลจริต" ){
//     }

//     if(this.value == "มึนเมาขาดสติ" ){
//      this.instancename = "การมึนเมานั้นเกิดจากความไม่รู้ ถูกมอมเมาให้ขาดสติจากบุคคลอื่น"
//      this.dropdownListData = [];
//      this.yesnoService.findAllYesno().subscribe(response => {
//      this.resultList = response;
//          for (let criminalImpunity of this.resultList) {
//            this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//          }
//        });
//     }
//      //finish Intoxication or mind

//       //start yesno
//       if(this.value == "ใช่" ){
//       }
  
//       if(this.value == "ไม่" ){
       
//       }
//        //finish yesno

//       //start spouse
//       if(this.value == "ผู้กระทำเป็นคู่สมรสของผู้ถูกกระทำ" ){
//           this.instancename = "เป็นความผิดที่บัญญัติไว้ตามมาตรา 334 ถึง 336 หรือ 341 ถึง 364"
//           this.dropdownListData = [];
//           this.yesnoCriminalImpunityService.findAllYesno334().subscribe(response => {
//           this.resultList = response;
//               for (let criminalImpunity of this.resultList) {
//                 this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//               }
//             });
//       }
  
//       if(this.value == "ผู้กระทำไม่ได้เป็นคู่สมรสของผู้ถูกกระทำ" ){
//         this.instancename = "เป็นคำสั่งจากพนักงานรัฐ และเป็นคำสั่งที่ผิดกฎหมาย"
//         this.dropdownListData = [];
//         this.yesnoCriminalImpunityService.findAllYesnoUnlawful().subscribe(response => {
//         this.resultList = response;
//             for (let criminalImpunity of this.resultList) {
//               this.dropdownListData.push({id: criminalImpunity.id, value: criminalImpunity.name});
//             }
//           });
//       }
       

//   }
// }
