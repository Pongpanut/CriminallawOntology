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
//End API declaration

// PORT Configuration
var port = 3000;
app.listen(port)
console.log('Server is running at port 3000');
module.exports = app;
 
