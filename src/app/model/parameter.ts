import {Injectable} from '@angular/core';

@Injectable()
export class ParameterService {

  public _offender:String;
  public _party:String;
  public _innocent:String;
  public _relationWithVictim:String;
  public _attemp:String;
  public _committed:String;
  public _crimeSucceed:String;
  public _makingDecision:String;
  public _preparing:String;
  public _considering:String;
  public _victim:String;
  public _victimDetail:String;
  public _additionalDetail:String;
  public _transferIntent:String;
  public _intentionallyAct:String;
  public _foreseenTheEffect:String;
  public _negligence:String;
  public _noIntention:String;
  public _causation:String;

  // Criminal Impunity
  public _noCriminalImpunity:String;
  public _entrapmentWithOfficer:String;
  public _committedBySpourse:String;
  public _actAccordanceWithTheOrder:String;
  public _intoxication:String;
  public _mentalInfirmly:String;
  public _child:String;
  public _necessity:String;

  // Jusification
  public _assent:String;
  public _defendin:String;
  public _actIsLawfulDefense:String;
  public _dangerToBeImminent:String;
  public _danger:String;

  set offender(value:any) {
    this._offender = value
  }
  set party(value:any) {
    this._party = value
  }
  set innocent(value:any) {
    this._innocent = value 
  }
  set relationWithVictim(value:any) {
    this._relationWithVictim = value
  }
  set attemp(value:any) {
    this._attemp = value
  }
  set committed(value:any) {
    this._committed = value
  }
  set crimeSucceed(value:any) {
    this._crimeSucceed = value
  }
  set makingDecision(value:any) {
    this._makingDecision = value
  }  
  set preparing(value:any) {
    this._preparing = value
  }
  set considering(value:any) {
    this._considering = value
  }
  set victim(value:any) {
    this._victim = value
  }
  set victimDetail(value:any) {
    this._victimDetail = value
  }
  set additionalDetail(value:any) {
    this._additionalDetail = value
  }
  set transferIntent(value:any) {
    this._transferIntent = value
  }
  set intentionallyAct(value:any) {
    this._intentionallyAct= value
  }
  set foreseenTheEffect(value:any) {
    this._foreseenTheEffect = value
  }
  set negligence(value:any) {
    this._negligence = value
  } 
  set noIntention(value:any) {
    this._noIntention = value
  }
  set causation(value:any) {
    this._causation = value
  }
  get offender():any {
    return this._offender;
  }

  get party():any {
    return this._party;
  }
  get innocent():any {
    return this._innocent;
  }
  get relationWithVictim():any{
    return this._relationWithVictim;
  }
  get attemp():any {
    return this._attemp;
  }
  get committed():any {
    return this._committed;
  }
  get crimeSucceed():any {
    return this._crimeSucceed;
  }
  get makingDecision():any {
    return this._makingDecision;
  }  
  get preparing():any {
    return this._preparing;
  }
  get considering():any {
    return this._considering;
  }
  get victim():any {
    return this._victim;
  }
  get victimDetail():any {
    return this._victimDetail;
  }
  get additionalDetail():any {
    return this._additionalDetail;
  }
  get transferIntent():any {
    return this._transferIntent;
  }
  get intentionallyAct():any {
    return this._intentionallyAct;
  }
  get foreseenTheEffect():any {
    return this._foreseenTheEffect;
  }
  get negligence():any {
    return this._negligence;
  } 
  get noIntention():any{
    return this._noIntention;
  }
  get causation():any {
    return this._causation;
  }

  //CRIMINAL IMPUNITY SET GET
  set noCriminalImpunity(value:any) {
    this._noCriminalImpunity = value
  }
  set entrapmentWithOfficer(value:any) {
    this._entrapmentWithOfficer = value 
  }
  set committedBySpourse(value:any) {
    this._committedBySpourse = value
  }
  set actAccordanceWithTheOrder(value:any) {
    this._actAccordanceWithTheOrder = value
  }
  set intoxication(value:any) {
    this._intoxication = value
  }
  set mentalInfirmly(value:any) {
    this._mentalInfirmly = value
  }
  set child(value:any) {
    this._child = value
  }  
  set necessity(value:any) {
    this._necessity = value
  }  

  get noCriminalImpunity():any {
    return this._noCriminalImpunity;
  }
  get entrapmentWithOfficer():any {
    return this._entrapmentWithOfficer;
  }
  get committedBySpourse():any {
    return this._committedBySpourse;
  }
  get actAccordanceWithTheOrder():any {
    return this._actAccordanceWithTheOrder;
  }
  get intoxication():any {
    return this._intoxication;
  } 
  get mentalInfirmly():any{
    return this._mentalInfirmly;
  }
  get child():any {
    return this._child;
  }
  get necessity():any {
    return this._necessity;
  }

   // Jusification SET GET
  set assent(value:any) {
    this._assent = value
  }
  set defendin(value:any) {
    this._defendin = value 
  }
  set actIsLawfulDefense(value:any) {
    this._actIsLawfulDefense = value
  }
  set dangerToBeImminent(value:any) {
    this._dangerToBeImminent = value
  }
  set danger(value:any) {
    this._danger = value
  }

  get assent():any {
    return this._assent;
  }
  get defendin():any {
    return this._defendin;
  } 
  get actIsLawfulDefense():any{
    return this._actIsLawfulDefense;
  }
  get dangerToBeImminent():any {
    return this._dangerToBeImminent;
  }
  get danger():any {
    return this._danger;
  }
}