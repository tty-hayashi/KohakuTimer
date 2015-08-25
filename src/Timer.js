define("amber-timer/Timer", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "sevenSeg", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,ko
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Timer');
$core.packages["Timer"].innerEval = function (expr) { return eval(expr); };
$core.packages["Timer"].imports = ["ko=knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "sevenSeg", "silk/Silk"];
$core.packages["Timer"].transport = {"type":"amd","amdNamespace":"amber-timer"};

$core.addClass('Timer', $globals.Object, ['timerProcess', 'viewModel'], 'Timer');
$core.addMethod(
$core.method({
selector: "alertFinish",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._wantsAlert();
if($core.assert($1)){
$recv($Terminal())._alert_("Finish !");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alertFinish",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alertFinish\x0a\x09\x0a\x09self wantsAlert ifTrue: [\x0a\x09\x09\x09\x09Terminal alert: 'Finish !']",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "wantsAlert", "alert:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#start"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAction();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv("body"._asJQuery())._append_("<div class=\x22exampleContainer\x22>\x0a\x09\x09\x09<div data-bind=\x22sevenSeg: { digits: 5, value: counter }\x22 class=\x22big-sevenSeg\x22 style=\x22width: 420px;\x22></div>\x0a\x09\x09</div>");
$recv($recv(ko)._bindingHandlers())._at_put_("sevenSeg",self._sevenSegHandler());
self._setupModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09'#start' asJQuery click: [self doAction].\x0a\x09'body' asJQuery append: \x0a\x09\x09'<div class=\x22exampleContainer\x22>\x0a\x09\x09\x09<div data-bind=\x22sevenSeg: { digits: 5, value: counter }\x22 class=\x22big-sevenSeg\x22 style=\x22width: 420px;\x22></div>\x0a\x09\x09</div>'.\x0a\x0a\x09ko bindingHandlers at: #sevenSeg put: self sevenSegHandler.\x0a\x0a\x09self setupModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAction", "append:", "at:put:", "bindingHandlers", "sevenSegHandler", "setupModel"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "counter",
protocol: 'model accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("counter"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counter",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "counter\x0a\x09^ (self viewModel at: #counter) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "counter:",
protocol: 'model accessing',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._viewModel())._at_("counter"))._value_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counter:",{anObject:anObject},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "counter: anObject\x0a\x0a\x09(self viewModel at: #counter) value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "viewModel"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "decrementCounter",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._counter_($recv(self._counter()).__minus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decrementCounter",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decrementCounter\x0a\x09\x0a\x09self counter: self counter - 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["counter:", "-", "counter"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "doAction",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._isRunning();
if($core.assert($1)){
self._stopTimerProcess();
$2="#start"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._text_("START");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["text:"]=1;
//>>excludeEnd("ctx");
} else {
self._setupCounter();
self._setupTimerProcess();
$recv("#start"._asJQuery())._text_("STOP");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAction",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAction\x0a\x0a\x09self isRunning\x0a\x09\x09ifTrue: [self stopTimerProcess.\x0a\x09\x09\x09'#start' asJQuery text: 'START'.]\x0a\x09\x09ifFalse: [self setupCounter.\x0a\x09\x09\x09self setupTimerProcess.\x0a\x09\x09\x09'#start' asJQuery text: 'STOP'.].\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isRunning", "stopTimerProcess", "text:", "asJQuery", "setupCounter", "setupTimerProcess"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "doStart",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._setupCounter();
self._setupTimerProcess();
$1="#start"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._text_("STOP");
$recv("#start"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doStop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doStart",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doStart\x0a\x0a\x09self setupCounter.\x0a\x09self setupTimerProcess.\x0a\x09'#start' asJQuery text: 'STOP'.\x0a\x09'#start' asJQuery click: [self doStop]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupCounter", "setupTimerProcess", "text:", "asJQuery", "click:", "doStop"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "doStop",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._stopTimerProcess();
$1="#start"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._text_("START");
$recv("#start"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doStart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doStop",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doStop\x0a\x0a\x09self stopTimerProcess.\x0a\x09'#start' asJQuery text: 'START'.\x0a\x09'#start' asJQuery click: [self doStart]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stopTimerProcess", "text:", "asJQuery", "click:", "doStart"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
var selected;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Timer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@timerProcess"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{selected:selected},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09| selected | \x0a\x09super initialize. \x0a\x09\x0a\x0a\x09timerProcess := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "isRunning",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._timerProcess())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isRunning",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRunning\x0a\x0a\x09^self timerProcess notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "timerProcess"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "ko",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=ko;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ko\x0a\x0a\x09^ko",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "selectedTimer",
protocol: 'model accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("selectedTimer"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectedTimer",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectedTimer\x0a\x0a\x09^ (self viewModel at: #selectedTimer ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "setupCounter",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._counter_($recv(self._selectedTimer()).__star((60)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupCounter",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupCounter\x0a\x0a\x09self counter: self selectedTimer * 60.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["counter:", "*", "selectedTimer"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "setupModel",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
var selected;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
selected=$recv(ko)._observable_((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
self["@viewModel"]=$globals.HashedCollection._newFromPairs_([]);
$1=self["@viewModel"];
$3=$recv(ko)._observableArray_([(5), (10), (25)]);
$4=selected;
$5=$recv(ko)._observable_($recv($recv(selected)._value()).__star((60)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=2;
//>>excludeEnd("ctx");
$2=$globals.HashedCollection._newFromPairs_(["availableTimers",$3,"selectedTimer",$4,"counter",$5,"wantsAlert",$recv(ko)._observable_(true)]);
$recv($1)._addAll_($2);
$recv(ko)._applyBindings_(self["@viewModel"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupModel",{selected:selected},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupModel\x0a\x0a\x09| selected | \x0a\x09selected := (ko observable: 25) .\x0a\x09viewModel := #{}.\x0a\x09viewModel addAll: \x0a\x09\x09#{\x0a\x09\x09\x09#availableTimers -> (ko observableArray: #(5 10 25)) .\x0a\x09\x09\x09#selectedTimer -> selected .\x0a\x09\x09\x09#counter -> (ko observable: selected value * 60) .\x0a\x09\x09\x09#wantsAlert -> (ko observable: true)\x0a\x09\x09}.\x0a\x09ko applyBindings: viewModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observable:", "addAll:", "observableArray:", "*", "value", "applyBindings:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "setupTimerProcess",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._timerProcess();
if(($receiver = $1) == null || $receiver.isNil){
self._timerProcess_($recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._timerAction();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithInterval_((1000)));
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupTimerProcess",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupTimerProcess\x0a\x0a\x09self timerProcess ifNil: [\x0a\x09\x09self timerProcess: ([self timerAction] valueWithInterval: 1000).]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "timerProcess", "timerProcess:", "valueWithInterval:", "timerAction"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "sevenSegHandler",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$1=$globals.HashedCollection._newFromPairs_(["init",(function(element,valueAccessor,allBindingAccesso,model,bindingContex){
var bindingValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
bindingValue=$recv(valueAccessor)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
bindingValue;
$2=$recv(element)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv(ko)._toJS_(bindingValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["toJS:"]=1;
//>>excludeEnd("ctx");
return $recv($2)._sevenSeg_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["sevenSeg:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({element:element,valueAccessor:valueAccessor,allBindingAccesso:allBindingAccesso,model:model,bindingContex:bindingContex,bindingValue:bindingValue},$ctx1,1)});
//>>excludeEnd("ctx");
}),"update",(function(element,valueAccessor,allBindingAccesso,model,bindingContex){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(element)._asJQuery())._sevenSeg_($recv(ko)._toJS_($recv(valueAccessor)._value()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({element:element,valueAccessor:valueAccessor,allBindingAccesso:allBindingAccesso,model:model,bindingContex:bindingContex},$ctx1,2)});
//>>excludeEnd("ctx");
})]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sevenSegHandler",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sevenSegHandler\x0a\x0a\x09^#{\x0a\x09\x09#init -> [:element :valueAccessor :allBindingAccesso :model :bindingContex |\x0a\x09\x09\x09\x09\x09| bindingValue |\x0a\x09\x09\x09\x09\x09bindingValue := valueAccessor value.\x0a\x09\x09\x09\x09\x09element asJQuery sevenSeg: (ko toJS: bindingValue)] .\x0a\x09\x09#update -> [:element :valueAccessor :allBindingAccesso :model :bindingContex |\x0a\x09\x09\x09element asJQuery sevenSeg: (ko toJS: valueAccessor value)]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "sevenSeg:", "asJQuery", "toJS:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "stopTimerProcess",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._timerProcess();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["timerProcess"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self._timerProcess())._clearInterval();
self._timerProcess_(nil);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stopTimerProcess",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stopTimerProcess\x0a\x0a\x09self timerProcess ifNotNil: [\x0a\x09\x09self timerProcess clearInterval.\x0a\x09\x09self timerProcess: nil].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "timerProcess", "clearInterval", "timerProcess:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "timerAction",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
function $Terminal(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._counter()).__lt((1));
if($core.assert($1)){
self._doAction();
$recv($Terminal())._alert_("Finish !");
} else {
self._decrementCounter();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timerAction",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timerAction\x0a\x09\x0a\x09self counter < 1\x0a\x09\x09ifTrue: [self doAction.\x0a\x09\x09\x09\x09Terminal alert: 'Finish !']\x0a\x09\x09ifFalse: [self decrementCounter]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<", "counter", "doAction", "alert:", "decrementCounter"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "timerProcess",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@timerProcess"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timerProcess\x0a\x09^ timerProcess",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "timerProcess:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@timerProcess"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "timerProcess: anObject\x0a\x09timerProcess := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "viewModel",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@viewModel"];
if(($receiver = $1) == null || $receiver.isNil){
self._viewModel_($globals.HashedCollection._newFromPairs_([]));
} else {
$1;
};
$2=self["@viewModel"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"viewModel",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewModel\x0a\x09viewModel ifNil: [self viewModel: #{}].\x0a\x09^ viewModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "viewModel:"]
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "viewModel:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@viewModel"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "viewModel: anObject\x0a\x09viewModel := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Timer);

$core.addMethod(
$core.method({
selector: "wantsAlert",
protocol: 'model accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("wantsAlert"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wantsAlert",{},$globals.Timer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wantsAlert\x0a\x0a\x09^ (self viewModel at: #wantsAlert) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.Timer);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Timer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.Timer.klass);

});
