/* โหลด Express มาใช้งาน */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uri = 'mongodb://localhost/criminallaw';
var db = mongoose.connect(uri);

mongoose.connection.on("open", function(){
  console.log("mongodb is connected")}  //this gets printed
);

 var Schema = mongoose.Schema;
 
// START Schema design

//intention

var Has_act_heedless = new Schema({
    id: Number,
    name: String
}, { collection: 'has_act_heedless' });
Has_act_heedless.set('collection', 'has_act_heedless');

var Has_act_heedless_eng = new Schema({
    id: Number,
    name: String
}, { collection: 'has_act_heedless_eng' });
Has_act_heedless_eng.set('collection', 'has_act_heedless_eng');

var Has_fore_effect = new Schema({
    id: Number,
    name: String
}, { collection: 'has_fore_effect' });
Has_fore_effect.set('collection', 'has_fore_effect');

var Has_int_act = new Schema({
    id: Number,
    name: String
}, { collection: 'has_int_act' });
Has_int_act.set('collection', 'has_int_act');

var Has_intent_other = new Schema({
    id: Number,
    name: String
}, { collection: 'has_intent_other' });
Has_intent_other.set('collection', 'has_intent_other');

var Has_rea_act = new Schema({
    id: Number,
    name: String
}, { collection: 'has_rea_act' });
Has_rea_act.set('collection', 'has_rea_act');

var Has_rea_cau = new Schema({
    id: Number,
    name: String
}, { collection: 'has_rea_cau' });
Has_rea_cau.set('collection', 'has_rea_cau');


//End intention


// actor schema
var Actor = new Schema({
    id: Number,
    name: String
}, { collection: 'actor' });
Actor.set('collection', 'actor');

// action schema
var Action = new Schema({
    id: Number,
    name: String
}, { collection: 'action' });
Action.set('collection', 'action');

// cannot avoid schema
var CannotAvoidSch = new Schema({
    id: Number,
    name: String
}, { collection: 'cannotavoid' });
CannotAvoidSch.set('collection', 'cannotavoid');

// causation schema
var Causationsch = new Schema({
    id: Number,
    name: String
}, { collection: 'causation' });
Causationsch.set('collection', 'causation');

// intoxicationormind schema
var IntoxicationormindSch = new Schema({
    id: Number,
    name: String
}, { collection: 'intoxicationormind' });
IntoxicationormindSch.set('collection', 'intoxicationormind');

// offenderage schema
var OffenderageSch = new Schema({
    id: Number,
    name: String
}, { collection: 'offenderage' });
OffenderageSch.set('collection', 'offenderage');

// relized schema
var relizedSch = new Schema({
    id: Number,
    name: String
}, { collection: 'relized' });
relizedSch.set('collection', 'relized');

// relized schema
var victimSch = new Schema({
    id: Number,
    name: String
}, { collection: 'victim' });
victimSch.set('collection', 'victim');

// yesno relized schema
var yesnoSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesno' });
yesnoSch.set('collection', 'yesno');

var yesnoDirectSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnodirect' });
yesnoDirectSch.set('collection', 'yesnodirect');

var yesnoTransferSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnotransfer' });
yesnoTransferSch.set('collection', 'yesnotransfer');

var yesnoAwarenessSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnoawareness' });
yesnoAwarenessSch.set('collection', 'yesnoawareness');


var yesnoMoralSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnomoral' });
yesnoMoralSch.set('collection', 'yesnomoral');

var yesnoDangerSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnodanger' });
yesnoDangerSch.set('collection', 'yesnodanger');

var yesnoDefenseSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnodefense' });
yesnoDefenseSch.set('collection', 'yesnodefense');

var yesnoControlSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnocontrol' });
yesnoControlSch.set('collection', 'yesnocontrol');

var yesnoNecessitySch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnonecessity' });
yesnoNecessitySch.set('collection', 'yesnonecessity');

var yesnoOwnSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnoneown' });
yesnoOwnSch.set('collection', 'yesnoneown');

var yesnoImmiSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnoimmi' });
yesnoImmiSch.set('collection', 'yesnoimmi');

var yesnoReasonSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnoreason' });
yesnoReasonSch.set('collection', 'yesnoreason');

var yesnoSpouseSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnospouse' });
yesnoSpouseSch.set('collection', 'yesnospouse');

var yesno334Sch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesno334' });
yesno334Sch.set('collection', 'yesno334');

var yesnoUnlawfulSch = new Schema({
    id: Number,
    name: String
}, { collection: 'yesnoofficer' });
yesnoUnlawfulSch.set('collection', 'yesnoofficer');

var intoxicationSch = new Schema({
    id: Number,
    name: String
}, { collection: 'intoxication' });
intoxicationSch.set('collection', 'intoxication');

var AddDetail = new Schema({
    id: Number,
    name: String
}, { collection: 'adddetail' });
AddDetail.set('collection', 'adddetail');

var VicDetail = new Schema({
    id: Number,
    name: String
}, { collection: 'vicdetail' });
VicDetail.set('collection', 'vicdetail');

//Justification
var Has_assentGoodMoral = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasAssentGoodMoral' });
Has_assentGoodMoral.set('collection', 'just_hasAssentGoodMoral');

var Has_assentDuringCrime = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasAssentDuringCrime' });
Has_assentDuringCrime.set('collection', 'just_hasAssentDuringCrime');

var Has_danger = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasDanger' });
Has_danger.set('collection', 'just_hasDanger');

var Has_dangerImn = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasDangerImn' });
Has_dangerImn.set('collection', 'just_hasDangerImn');

var Has_defending = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasDefending' });
Has_defending.set('collection', 'just_hasDefending');

var Has_lawfulDef = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasLawfulDef' });
Has_lawfulDef.set('collection', 'just_hasLawfulDef');

var Has_pureAssent = new Schema({
    id: Number,
    name: String
}, { collection: 'just_hasPureAssent'});
Has_pureAssent.set('collection', 'just_hasPureAssent');

// Criminal impunity
var Cri_hasAge = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasAge'});
Cri_hasAge.set('collection', 'cri_hasAge');

var Cri_hasSit = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasSit'});
Cri_hasSit.set('collection', 'cri_hasSit');

var Cri_hasMind = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasMind'});
Cri_hasMind.set('collection', 'cri_hasMind');

var Cri_hasMentalInfirmly = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasMentalInfirmly'});
Cri_hasMentalInfirmly.set('collection', 'cri_hasMentalInfirmly');

var Cri_hasDrunk = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasDrunk'});
Cri_hasDrunk.set('collection', 'cri_hasDrunk');

var Cri_hasActByOfficerCom = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasActByOfficerCom'});
Cri_hasActByOfficerCom.set('collection', 'cri_hasActByOfficerCom');

var Cri_hasCauseDrunk = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasCauseDrunk'});
Cri_hasCauseDrunk.set('collection', 'cri_hasCauseDrunk');

var Cri_hasIlligalCommand = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasIlligalCommand'});
Cri_hasIlligalCommand.set('collection', 'cri_hasIlligalCommand');

var Cri_hasDontKnowIlligal = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasDontKnowIlligal'});
Cri_hasDontKnowIlligal.set('collection', 'cri_hasDontKnowIlligal');

var Cri_hasNeedAction = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasNeedAction'});
Cri_hasNeedAction.set('collection', 'cri_hasNeedAction');

var Cri_hasBeForces = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasBeForces'});
Cri_hasBeForces.set('collection', 'cri_hasBeForces');

var Cri_hasCannotAvoid = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasCannotAvoid'});
Cri_hasCannotAvoid.set('collection', 'cri_hasCannotAvoid');

var Cri_hasDontNeed = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasDontNeed'});
Cri_hasDontNeed.set('collection', 'cri_hasDontNeed');

var Cri_hasLimit = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasLimit'});
Cri_hasLimit.set('collection', 'cri_hasLimit');

var Cri_hasProtecetd = new Schema({
    id: Number,
    name: String
}, { collection: 'cri_hasProtecetd'});
Cri_hasProtecetd.set('collection', 'cri_hasProtecetd'); 

// End Schema design 

// SET model

var adddetailModel = mongoose.model('adddetail', AddDetail);
var vicdetailModel = mongoose.model('vicdetail', VicDetail);
var actorModel = mongoose.model('actor', Actor);
var actionModel = mongoose.model('action', Action);
var cannotavoidModel = mongoose.model('cannotavoid', CannotAvoidSch);
var causationModel = mongoose.model('causation', Causationsch);
var intoxicationormindModel = mongoose.model('intoxicationormind', IntoxicationormindSch);
var offenderageModel = mongoose.model('offenderage', OffenderageSch);
var relizedModel = mongoose.model('relized', relizedSch);
var victimModel = mongoose.model('victim', victimSch);
var yesnoModel = mongoose.model('yesno', yesnoSch);
var yesnoDirectModel = mongoose.model('yesnodirect', yesnoDirectSch);
var yesnoTransferModel = mongoose.model('yesnotransfer', yesnoTransferSch);
var yesnoAwarenessModel = mongoose.model('yesnoawareness', yesnoAwarenessSch);
var yesnoMoralModel = mongoose.model('yesnomoral', yesnoMoralSch);
var yesnoDangerModel = mongoose.model('yesnodanger', yesnoDangerSch);
var yesnoDefenseModel = mongoose.model('yesnodefense', yesnoDefenseSch);

var yesnoControlModel = mongoose.model('yesnocontrol', yesnoControlSch);
var yesnoNecessityModel = mongoose.model('yesnonecessity', yesnoNecessitySch);
var yesnoImmiModel = mongoose.model('yesnoimmi', yesnoImmiSch);
var yesnoOwnModel = mongoose.model('yesnoneown', yesnoOwnSch);
var yesnoReasonModel = mongoose.model('yesnoreason', yesnoReasonSch);
var yesnoSpouseModel = mongoose.model('yesnospouse', yesnoSpouseSch);
var yesno334Model = mongoose.model('yesno334', yesno334Sch);
var yesnoUnlawfulModel = mongoose.model('yesnoofficer', yesnoUnlawfulSch);
var intoxicationModel= mongoose.model('intoxication', intoxicationSch);
// เริ่ม express
var app = express();

// Create response

//Intention response
var has_act_heedless_Model = mongoose.model('has_act_heedless', Has_act_heedless_eng);
var has_act_heedless_engModel = mongoose.model('has_act_heedless_eng', Has_act_heedless_eng);
var has_fore_effectModel = mongoose.model('has_fore_effect', Has_fore_effect);
var has_int_actModel = mongoose.model('has_int_act', Has_int_act);
var has_intent_otherModel = mongoose.model('has_intent_other', Has_intent_other);
var has_rea_actModel = mongoose.model('has_rea_act', Has_rea_act);
var has_rea_cauModel = mongoose.model('has_rea_cau', Has_rea_cau);

//Justificarion Response
var hasAssentGoodMoralModel = mongoose.model('just_hasAssentGoodMoral', Has_assentGoodMoral);
var hasAssentDuringCrimeModel = mongoose.model('just_hasAssentDuringCrime', Has_assentDuringCrime);
var hasDangerModel = mongoose.model('just_hasDanger', Has_danger);
var hasDangerImnModel = mongoose.model('just_hasDangerImn', Has_dangerImn);
var hasDefendingModel = mongoose.model('just_hasDefending', Has_defending);
var hasLawfulDefModel = mongoose.model('just_hasLawfulDef', Has_lawfulDef);
var hasPureAssentModel = mongoose.model('just_hasPureAssent', Has_pureAssent);

//Justificarion Response
var CrihasAgeModel = mongoose.model('cri_hasAge', Cri_hasAge);
var CrihasSitModel = mongoose.model('cri_hasSit', Cri_hasSit);
var CrihasMindModel = mongoose.model('cri_hasMind', Cri_hasMind);
var CrihasMentalInfirmlyModel = mongoose.model('cri_hasMentalInfirmly', Cri_hasMentalInfirmly);
var CrihasDrunkModel = mongoose.model('cri_hasDrunk', Cri_hasDrunk);
var CrihasCauseDrunkfModel = mongoose.model('cri_hasCauseDrunk', Cri_hasCauseDrunk);
var CrihasActByOfficerComModel = mongoose.model('cri_hasActByOfficerCom', Cri_hasActByOfficerCom);
var CrihasIlligalCommandModel = mongoose.model('cri_hasIlligalCommand', Cri_hasIlligalCommand);
var CrihasDontKnowIlligalModel = mongoose.model('cri_hasDontKnowIlligal', Cri_hasDontKnowIlligal);
var CrihasNeedActionModel = mongoose.model('cri_hasNeedAction', Cri_hasNeedAction);
var CrihasBeForcesModel = mongoose.model('cri_hasBeForces', Cri_hasBeForces);
var CrihasCannotAvoidModel = mongoose.model('cri_hasCannotAvoid', Cri_hasCannotAvoid);
var CrihasDontNeedModel = mongoose.model('cri_hasDontNeed', Cri_hasDontNeed);
var CrihasLimitModel = mongoose.model('cri_hasLimit', Cri_hasLimit);
var CrihasProtecetdModel = mongoose.model('cri_hasProtecetd', Cri_hasProtecetd);

var has_rea_cauRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_rea_cauModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var has_rea_actRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_rea_actModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var has_intent_otherRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_intent_otherModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var has_int_actRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_int_actModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};


var has_act_heedlessRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_act_heedless_Model.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};


var has_act_heedless_engRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_act_heedless_engModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var has_fore_effectRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    has_fore_effectModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// actor response
var actorRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    actorModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// action response
var actionRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    actionModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var actionResCat1 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    actionModel.find({"Cat": 1}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var actionResCat2 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    actionModel.find({"Cat": 2}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var actionResCat3 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    actionModel.find({"Cat": 3}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// cannotavoid response
var cannotavoidRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    cannotavoidModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// causation response
var causationRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    causationModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var causationResVic1 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    causationModel.find({'vic_type': 'คน'}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var causationResVic2 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    causationModel.find({'vic_type': 'pro1'}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var causationResVic3 = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    causationModel.find({'vic_type': 'pro2'}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// intoxicationormind response
var intoxicationormindRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    intoxicationormindModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// offenderage response
var offenderageRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    offenderageModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// relized response
var relizedRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    relizedModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};


// victim response
var victimRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    victimModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

// yesno response
var yesnoRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnodirectRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoDirectModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoTransferRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoTransferModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoAwarenessRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoAwarenessModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

//Justification

var yesnoMoralRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoMoralModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoDangerRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoDangerModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoDefenseRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoDefenseModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

//Criminal impunity
var intoxicationRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    intoxicationModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoControlRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoControlModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var yesnoNecessityRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoNecessityModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoOwnRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoOwnModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var yesnoImmiRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoImmiodel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoReasonRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoReasonModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoSpouseRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoSpouseModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesno334Res = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesno334Model.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var yesnoUnlawfulRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    yesnoUnlawfulModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var adddetailRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    adddetailModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var vicdetailRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    vicdetailModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

//Response for justification
var hasAssentDuringCrimeRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasAssentDuringCrimeModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var hasAssentGoodMoralRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasAssentGoodMoralModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};


var hasDangerRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasDangerModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var hasDangerImnRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasDangerImnModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var hasDefendingRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasDefendingModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var hasLawfulDefRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasLawfulDefModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var hasPureAssentRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    hasPureAssentModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

//Criminal impunity response
var CrihasAgeRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasAgeModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasSitRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasSitModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasMindRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasMindModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var CrihasMentalInfirmlyRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasMentalInfirmlyModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasDrunkRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasDrunkModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasCauseDrunkfRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasCauseDrunkfModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var CrihasActByOfficerComRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasActByOfficerComModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasIlligalCommandRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasIlligalCommandModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasDontKnowIlligalRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasDontKnowIlligalModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var CrihasNeedActionRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasNeedActionModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasBeForcesRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasBeForcesModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasDontNeedRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasDontNeedModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasCannotAvoidRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasCannotAvoidModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};

var CrihasLimitRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasLimitModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};
var CrihasProtecetdRes = function(req, res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    CrihasProtecetdModel.find({}, function(err, calls) { 
        console.log(err, calls, calls.length);  //prints out: null [] 0
        if(calls.length > 0){
            res.send(calls);
        }
    });
};


// End Create response section

app.disable('etag');

// Define API
app.use('/getActorData',actorRes);
app.use('/getActionData',actionRes);
app.use('/getActionDataCat1',actionResCat1);
app.use('/getActionDataCat2',actionResCat2);
app.use('/getActionDataCat3',actionResCat3);
app.use('/getCannotavoidData',cannotavoidRes);

app.use('/getCausationData',causationRes);
app.use('/getCausationVic1Data',causationResVic1);
app.use('/getCausationVic2Data',causationResVic2);
app.use('/getCausationVic3Data',causationResVic3);

app.use('/getYesnoDirectData',yesnodirectRes);
app.use('/getYesnoTransferData',yesnoTransferRes);
app.use('/getYesnoAwarenessData',yesnoAwarenessRes);

// Justification api
app.use('/getYesnoMoralData',yesnoMoralRes);
app.use('/getYesnoDangerData',yesnoDangerRes);
app.use('/getYesnoDefenseData',yesnoDefenseRes);
//new version
app.use('/gethasAssentDuringCrime',hasAssentDuringCrimeRes);
app.use('/gethasAssentGoodMoral',hasAssentGoodMoralRes);
app.use('/gethasDanger',hasDangerRes);
app.use('/gethasDangerImn',hasDangerImnRes);
app.use('/gethasDefending',hasDefendingRes);
app.use('/gethasLawfulDef',hasLawfulDefRes);
app.use('/gethasPureAssent',hasPureAssentRes);

// Criminal inpunity api
app.use('/getIntoxicationData',intoxicationRes);
app.use('/getIntoxicationormindData',intoxicationormindRes);
app.use('/getOffenderageData',offenderageRes);
app.use('/getRelizedData',relizedRes);
app.use('/getVictimData',victimRes);
app.use('/getYesnoData',yesnoRes);
app.use('/getYesnoControlData',yesnoControlRes);
app.use('/getYesnoNecessityData',yesnoNecessityRes);
app.use('/getYesnoOwnData',yesnoOwnRes);
app.use('/getYesnoImmiData',yesnoImmiRes);
app.use('/getYesnoReasonData',yesnoReasonRes);
app.use('/getYesnoSpouseData',yesnoSpouseRes);
app.use('/getYesno334Data',yesno334Res);
app.use('/getYesnoUnlawfulData',yesnoUnlawfulRes);
app.use('/getVicDetailData',vicdetailRes);
app.use('/getAddDetailData',adddetailRes);

// Criminal impunity new api
app.use('/getCrihasAgeRes',CrihasAgeRes);
app.use('/getCrihasSitRes',CrihasSitRes);
app.use('/getCrihasMindRes',CrihasMindRes);
app.use('/getCrihasMentalInfirmlyRes',CrihasMentalInfirmlyRes);
app.use('/getCrihasDrunkRes',CrihasDrunkRes);
app.use('/getCrihasCauseDrunkfRes',CrihasCauseDrunkfRes);
app.use('/getCrihasActByOfficerComRes',CrihasActByOfficerComRes);
app.use('/getCrihasIlligalCommandRes',CrihasIlligalCommandRes);
app.use('/getCrihasDontKnowIlligalRes',CrihasDontKnowIlligalRes);
app.use('/getCrihasNeedActionRes',CrihasNeedActionRes);
app.use('/getCrihasBeForcesRes',CrihasBeForcesRes);
app.use('/getCrihasCannotAvoidRes',CrihasCannotAvoidRes);
app.use('/getCrihasDontNeedRes',CrihasDontNeedRes);
app.use('/getCrihasLimitRes',CrihasLimitRes);
app.use('/getCrihasProtecetdRes',CrihasProtecetdRes);
//End API declaration

//Start API intention
app.use('/getHasreacauRes',has_rea_cauRes);
app.use('/getHasreaactModel',has_rea_actRes);
app.use('/getHasintentotherModel',has_intent_otherRes);
app.use('/getHasintactModel',has_int_actRes);
app.use('/getHasactheedlessModel',has_act_heedlessRes);
app.use('/getHasforeeffectModel',has_fore_effectRes);
app.use('/getHasactheedlessengModel',has_act_heedless_engRes);
//End API intention

// PORT Configuration
var port = 3000;
app.listen(port)
console.log('Server is running at port 3000');
module.exports = app;
 
