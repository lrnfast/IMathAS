(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["special"],{"0cbf":function(t,e,s){},1148:function(t,e,s){"use strict";var n=s("5926"),i=s("577e"),o=s("1d80"),r=RangeError;t.exports=function(t){var e=i(o(this)),s="",a=n(t);if(a<0||a===1/0)throw r("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(s+=e);return s}},1912:function(t,e,s){"use strict";s.r(e);s("99af"),s("fb6a");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("assess-header"),t.isTeacher?e("livepoll-nav",{attrs:{qn:t.curqn},on:{selectq:t.selectQuestion,openq:t.openInput,closeq:t.closeInput,newversion:t.newVersion}}):t._e(),t.curstate>0&&t.curqn>-1&&(t.isTeacher||t.timelimit>0)?e("div",{staticClass:"subheader"},[t.isTeacher?e("div",{staticStyle:{"flex-grow":"1"},attrs:{id:"livepoll_qsettings"}},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showQuestion,expression:"showQuestion"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showQuestion)?t._i(t.showQuestion,null)>-1:t.showQuestion},on:{change:function(e){var s=t.showQuestion,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showQuestion=s.concat([o])):r>-1&&(t.showQuestion=s.slice(0,r).concat(s.slice(r+1)))}else t.showQuestion=i}}}),t._v(" "+t._s(t.$t("livepoll.show_question"))+" ")]),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showResults,expression:"showResults"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showResults)?t._i(t.showResults,null)>-1:t.showResults},on:{change:function(e){var s=t.showResults,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showResults=s.concat([o])):r>-1&&(t.showResults=s.slice(0,r).concat(s.slice(r+1)))}else t.showResults=i}}}),t._v(" "+t._s(t.$t("livepoll.show_results"))+" ")]),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showAnswers,expression:"showAnswers"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showAnswers)?t._i(t.showAnswers,null)>-1:t.showAnswers},on:{change:[function(e){var s=t.showAnswers,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showAnswers=s.concat([o])):r>-1&&(t.showAnswers=s.slice(0,r).concat(s.slice(r+1)))}else t.showAnswers=i},t.updateShowAnswers]}}),t._v(" "+t._s(t.showAnswersLabel)+" ")])]):e("div",{staticStyle:{"flex-grow":"1"}}),t.timelimit>0&&t.starttime>0?e("timer",{attrs:{end:1e3*(t.starttime+t.timelimit),total:t.timelimit}}):t._e()],1):t._e(),!t.isTeacher&&t.curstate>0?e("div",[e("h2",[t._v(" "+t._s(t.$t("question_n",{n:t.curqn+1}))+" ")])]):t._e(),e("div",{staticClass:"scrollpane",attrs:{"aria-label":t.$t("regions.questions")}},[!t.isTeacher||0!==t.curstate&&-1!==t.curqn?t._e():e("livepoll-settings",{staticClass:"questionpane"}),!t.isTeacher&&t.curstate<2?e("div",{staticClass:"questionpane"},[t._v(" "+t._s(t.$t("livepoll.waiting"))+" ")]):t._e(),t.curqn>=0&&(t.isTeacher&&t.curstate>0||!t.isTeacher&&t.curstate>1)?e("question",{directives:[{name:"show",rawName:"v-show",value:t.showQuestion,expression:"showQuestion"}],attrs:{qn:t.curqn,active:!0,state:t.curstate,seed:t.curseed}}):t._e(),t.isTeacher?e("livepoll-results",{key:t.curqn+"-"+t.curseed,attrs:{showresults:t.showResults,showans:4===t.curstate,qn:t.curqn}}):t._e()],1)],1)},i=[],o=(s("e25e"),s("b64b"),s("c975"),s("97cd")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"subheader"},[e("div",{staticClass:"flexrow",staticStyle:{"flex-grow":"1"},attrs:{role:"navigation","aria-label":t.$t("regions.qnav")}},[e("menu-button",{attrs:{id:"qnav",options:t.navOptions,selected:t.dispqn,searchby:"dispqn"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.option;return[t._v(" "+t._s(s.title)+" ")]}}])}),t.showNextPrev?e("button",{staticClass:"secondarybtn",attrs:{disabled:t.dispqn<=0,id:"qprev","aria-label":t.$t("previous")},on:{click:function(e){return t.selectQuestion(t.dispqn-1)}}},[e("icons",{attrs:{name:"left"}})],1):t._e(),t.showNextPrev?e("button",{staticClass:"secondarybtn",attrs:{disabled:t.dispqn>=t.navOptions.length-1,id:"qnext","aria-label":t.$t("next")},on:{click:function(e){return t.selectQuestion(t.dispqn+1)}}},[e("icons",{attrs:{name:"right"}})],1):t._e()],1),e("div",{staticStyle:{"flex-grow":"1"}},[2===t.curstate&&t.dispqn>0?e("button",{staticClass:"primary",on:{click:t.closeQuestion}},[t._v(" "+t._s(t.$t("livepoll.close_input"))+" ")]):t.curstate>0&&t.dispqn>0?e("button",{staticClass:"primary",on:{click:t.openQuestion}},[t._v(" "+t._s(t.$t("livepoll.open_input"))+" ")]):t._e(),t.curstate>2&&t.dispqn>0?e("button",{staticClass:"secondary",on:{click:t.newVersion}},[e("icons",{attrs:{name:"retake"}}),t._v(" "+t._s(t.$t("livepoll.new_version"))+" ")],1):t._e()]),e("div",[t._v(" "+t._s(t.studentCount)+" ")])])},a=[],l=(s("14d9"),s("ad76")),u=s("f05b"),c=s("6081"),h={name:"LivepollNav",props:["qn"],components:{MenuButton:l["a"],Icons:u["a"]},computed:{navOptions:function(){var t=this,e=[];e.push({onclick:function(){return t.$emit("selectq",0)},title:this.$t("livepoll.settings"),dispqn:0});var s=function(){var s=parseInt(n)+1;e.push({onclick:function(){return t.$emit("selectq",s)},title:t.$t("question_n",{n:s}),dispqn:s})};for(var n in c["b"].assessInfo.questions)s();return e},showNextPrev:function(){return Object.keys(this.navOptions).length>1},dispqn:function(){return parseInt(this.qn)+1},curstate:function(){return c["b"].assessInfo.livepoll_status.curstate},studentCount:function(){return this.$tc("livepoll.stucnt",c["b"].livepollStuCnt)}},methods:{selectQuestion:function(t){this.$emit("selectq",t)},openQuestion:function(){this.$emit("openq")},closeQuestion:function(){this.$emit("closeq")},newVersion:function(){this.$emit("newversion")}}},p=h,d=(s("28f3"),s("2877")),f=Object(d["a"])(p,r,a,!1,null,null,null),v=f.exports,w=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.$t("livepoll.settings")))]),e("p",[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showQuestionDefault,expression:"showQuestionDefault"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showQuestionDefault)?t._i(t.showQuestionDefault,null)>-1:t.showQuestionDefault},on:{change:function(e){var s=t.showQuestionDefault,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showQuestionDefault=s.concat([o])):r>-1&&(t.showQuestionDefault=s.slice(0,r).concat(s.slice(r+1)))}else t.showQuestionDefault=i}}}),t._v(" "+t._s(t.$t("livepoll.show_question_default"))+" ")]),e("br"),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showResultsLiveDefault,expression:"showResultsLiveDefault"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showResultsLiveDefault)?t._i(t.showResultsLiveDefault,null)>-1:t.showResultsLiveDefault},on:{change:function(e){var s=t.showResultsLiveDefault,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showResultsLiveDefault=s.concat([o])):r>-1&&(t.showResultsLiveDefault=s.slice(0,r).concat(s.slice(r+1)))}else t.showResultsLiveDefault=i}}}),t._v(" "+t._s(t.$t("livepoll.show_results_live_default"))+" ")]),e("br"),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showResultsAfter,expression:"showResultsAfter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showResultsAfter)?t._i(t.showResultsAfter,null)>-1:t.showResultsAfter},on:{change:function(e){var s=t.showResultsAfter,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showResultsAfter=s.concat([o])):r>-1&&(t.showResultsAfter=s.slice(0,r).concat(s.slice(r+1)))}else t.showResultsAfter=i}}}),t._v(" "+t._s(t.$t("livepoll.show_results_after"))+" ")]),e("br"),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.showAnswersAfter,expression:"showAnswersAfter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showAnswersAfter)?t._i(t.showAnswersAfter,null)>-1:t.showAnswersAfter},on:{change:function(e){var s=t.showAnswersAfter,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.showAnswersAfter=s.concat([o])):r>-1&&(t.showAnswersAfter=s.slice(0,r).concat(s.slice(r+1)))}else t.showAnswersAfter=i}}}),t._v(" "+t._s(t.$t("livepoll.show_answers_after"))+" ")]),e("br"),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.useTimer,expression:"useTimer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useTimer)?t._i(t.useTimer,null)>-1:t.useTimer},on:{change:function(e){var s=t.useTimer,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=t._i(s,o);n.checked?r<0&&(t.useTimer=s.concat([o])):r>-1&&(t.useTimer=s.slice(0,r).concat(s.slice(r+1)))}else t.useTimer=i}}}),t._v(" "+t._s(t.$t("livepoll.use_timer"))+" ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.useTimer,expression:"useTimer"}]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.questionTimelimit,expression:"questionTimelimit"}],attrs:{type:"text",size:"3"},domProps:{value:t.questionTimelimit},on:{input:function(e){e.target.composing||(t.questionTimelimit=e.target.value)}}}),t._v(" "+t._s(t.$t("livepoll.seconds"))+" ")])])])},m=[],b={name:"LivepollSettings",computed:{showQuestionDefault:{set:function(t){this.$set(c["b"].livepollSettings,"showQuestionDefault",t)},get:function(){return c["b"].livepollSettings.showQuestionDefault}},showResultsLiveDefault:{set:function(t){this.$set(c["b"].livepollSettings,"showResultsLiveDefault",t)},get:function(){return c["b"].livepollSettings.showResultsLiveDefault}},showResultsAfter:{set:function(t){this.$set(c["b"].livepollSettings,"showResultsAfter",t)},get:function(){return c["b"].livepollSettings.showResultsAfter}},showAnswersAfter:{set:function(t){this.$set(c["b"].livepollSettings,"showAnswersAfter",t)},get:function(){return c["b"].livepollSettings.showAnswersAfter}},useTimer:{set:function(t){this.$set(c["b"].livepollSettings,"useTimer",t)},get:function(){return c["b"].livepollSettings.useTimer}},questionTimelimit:{set:function(t){this.$set(c["b"].livepollSettings,"questionTimelimit",t)},get:function(){return c["b"].livepollSettings.questionTimelimit}}}},y=b,q=Object(d["a"])(y,w,m,!1,null,null,null),_=q.exports,g=function(){var t=this,e=t._self._c;return t.qinfo&&t.qinfo.answeights?e("div",[e("p",[t._v(t._s(t.$tc("livepoll.numresults",t.numResults)))]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showresults&&t.numResults>0,expression:"showresults && numResults > 0"}]},t._l(t.results,(function(s,n){return e("div",{key:t.qn+"-"+n,staticClass:"med-below"},[s.hasOwnProperty("choices")?e("livepoll-results-choices",{attrs:{results:s,showans:t.showans}}):e("livepoll-results-general",{attrs:{results:s,showans:t.showans,itemid:t.qn+"-"+n}})],1)})),0)]):t._e()},I=[],x=(s("ac1f"),s("1276"),s("d3b7"),s("25f0"),s("466d"),s("a9e3"),s("5319"),s("a15b"),s("4e82"),s("b680"),s("e9c4"),function(){var t=this,e=t._self._c;return e("table",{ref:"main",staticClass:"LPres"},[e("caption",{staticClass:"sr-only"},[t._v("Results")]),e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("livepoll.answer")))]),e("th",{staticStyle:{"min-width":"10em"}},[t._v(t._s(t.$t("livepoll.frequency")))])])]),e("tbody",t._l(t.results.choices,(function(s,n){return e("tr",{key:n,class:[t.showans?t.results.scoredata[n]>0?"LPshowcorrect":"LPshowwrong":""]},[e("td",{domProps:{innerHTML:t._s(s)}}),e("td",[e("span",{staticClass:"LPresbarwrap"},[e("span",{staticClass:"LPresbar",style:{width:Math.round(100*t.results.datatots[n]/t.results.maxfreq)+"%"}},[e("span",{staticClass:"LPresval"},[t._v(t._s(t.results.datatots[n]))])])])])])})),0)])}),A=[],k={name:"LivepollResultsChoices",props:["results","showans"],methods:{onUpdate:function(){var t=this;this.$nextTick((function(){setTimeout(window.drawPics,100),window.rendermathnode(t.$refs.main)}))}},mounted:function(){this.onUpdate()},watch:{results:function(t,e){this.onUpdate()}}},P=k,T=Object(d["a"])(P,x,A,!1,null,null,null),R=T.exports,O=function(){var t=this,e=t._self._c;return"draw"===t.results.qtype&&0===t.results.initpts[11]?e("div",{ref:"main",staticClass:"LPdrawgrid"},t._l(t.sortedKeys,(function(s,n){return e("div",{key:s,class:[t.showans?t.results.scoredata[s]>0?t.results.scoredata[s]<.99?"LPshowpartial":"LPshowcorrect":"LPshowwrong":""]},[e("canvas",{staticClass:"drawcanvas",attrs:{id:"canvasLP"+t.itemid+"-"+n,width:t.results.initpts[6],height:t.results.initpts[7]}}),e("input",{attrs:{type:"hidden",id:"qnLP"+t.itemid+"-"+n}})])})),0):e("table",{ref:"main",staticClass:"LPres"},[e("caption",{staticClass:"sr-only"},[t._v("Results")]),e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("livepoll.answer")))]),e("th",{staticStyle:{"min-width":"10em"}},[t._v(t._s(t.$t("livepoll.frequency")))])])]),e("tbody",t._l(t.sortedKeys,(function(s,n){return e("tr",{key:s,class:[t.showans?t.results.scoredata[s]>0?t.results.scoredata[s]<.99?"LPshowpartial":"LPshowcorrect":"LPshowwrong":""]},["draw"===t.results.qtype?e("td",[e("canvas",{staticClass:"drawcanvas",attrs:{id:"canvasLP"+t.itemid+"-"+n,width:t.results.initpts[6],height:t.results.initpts[7]}}),e("input",{attrs:{type:"hidden",id:"qnLP"+t.itemid+"-"+n}})]):e("td",[t._v(" "+t._s(s)+" ")]),e("td",[e("span",{staticClass:"LPresbarwrap"},[e("span",{staticClass:"LPresbar",style:{width:Math.round(100*t.results.datatots[s]/t.results.maxfreq)+"%"}},[e("span",{staticClass:"LPresval"},[t._v(t._s(t.results.datatots[s]))])])])])])})),0)])},S=[],L=(s("3c65"),{name:"LivepollResultsGeneral",props:["results","showans","itemid"],computed:{sortedKeys:function(){var t=this.results.datatots,e=Object.keys(t);return e.sort((function(e,s){return t[s]-t[e]}))}},methods:{onUpdate:function(){var t=this;if("draw"===this.results.qtype){for(var e=0;e<this.sortedKeys.length;e++){var s=this.sortedKeys[e].replace(/\(/g,"[").replace(/\)/g,"]");s=s.split(";;"),""!==s[0]&&(s[0]="["+s[0].replace(/;/g,"],[")+"]"),s="[["+s.join("],[")+"]]";var n="LP"+this.itemid+"-"+e;window.canvases[n]=this.results.initpts.slice(),window.canvases[n].unshift(n),window.drawla[n]=JSON.parse(s)}this.$nextTick((function(){for(var e=0;e<t.sortedKeys.length;e++)window.imathasDraw.initCanvases("LP"+t.itemid+"-"+e)}))}this.$nextTick((function(){setTimeout(window.drawPics,100),window.rendermathnode(t.$refs.main)}))}},mounted:function(){this.onUpdate()},watch:{results:function(t,e){this.onUpdate()}}}),$=L,C=Object(d["a"])($,O,S,!1,null,null,null),N=C.exports,Q={name:"LivepollResults",props:["qn","showresults","showans"],components:{LivepollResultsChoices:R,LivepollResultsGeneral:N},computed:{qinfo:function(){return c["b"].assessInfo.questions[this.qn]},numResults:function(){return c["b"].livepollResults.hasOwnProperty(this.qn)?Object.keys(c["b"].livepollResults[this.qn]).length:0},params:function(){for(var t=[],e=0;e<this.qinfo.answeights.length;e++)0===e&&this.qinfo.jsparams.hasOwnProperty(this.qn)?t[e]=this.qinfo.jsparams[this.qn]:t[e]=this.qinfo.jsparams[1e3*(this.qn+1)+e];return t},results:function(){for(var t=[],e=0;e<this.qinfo.answeights.length;e++){var s={},n={};if(this.params[e].hasOwnProperty("livepoll_choices"))for(var i=0;i<this.params[e].livepoll_choices.length;i++)s[i]=0,n[i]=0;var o=this.params[e].qtype,r="choices"===o||"multans"===o;if(r){var a=void 0;a="choices"===o?this.params[e].livepoll_ans.toString().split(/\s+or\s+/):this.params[e].livepoll_ans.toString().split(/\s*,\s*/);for(var l=0;l<a.length;l++)n[a[l]]=1}var u=[],h=void 0;for(var p in c["b"].livepollResults[this.qn]){var d=c["b"].livepollResults[this.qn][p].ans[e];d=r?d.toString().split("|"):o.match(/calc/)||"numfunc"===o?["`"+d+"`"]:[d],"draw"===o&&(h=this.condenseDraw(d[0]),u.hasOwnProperty(h)||(u[h]=d[0]));for(var f=0;f<d.length;f++)"draw"===o&&s.hasOwnProperty(u[h])?s[u[h]]+=1:s.hasOwnProperty(d[f])?s[d[f]]+=1:(s[d[f]]=1,n[d[f]]=c["b"].livepollResults[this.qn][p].score[e])}var v=1;for(var w in s)s[w]>v&&(v=s[w]);if(t[e]={datatots:s,scoredata:n,maxfreq:v,qtype:o},r&&(t[e].choices=this.params[e].livepoll_choices),"draw"===o){for(var m=this.params[e].livepoll_drawinit,b=1;b<Math.min(11,m.length);b++)m[b]=Number(m[b]);t[e].initpts=m}}return t}},methods:{condenseDraw:function(t){if(""===t)return t;var e=t.replace(/\(/g,"[").replace(/\)/g,"]");e=e.split(";;"),""!==e[0]&&(e[0]="["+e[0].replace(/;/g,"],[")+"]"),e="[["+e.join("],[")+"]]";var s,n,i,o,r=JSON.parse(e);if(r[0].length>0)for(var a=0;a<r[0].length;a++)2===r[0][a].length&&r[0][a].sort((function(t,e){return t[0]===e[0]?t[1]-e[1]:t[0]-e[0]}));else if(r.length>4&&r[4].length>0)return t;if(r[1].length>0&&r[1].sort((function(t,e){return t[0]===e[0]?t[1]-e[1]:t[0]-e[0]})),r[2].length>0&&r[2].sort((function(t,e){return t[0]===e[0]?t[1]-e[1]:t[0]-e[0]})),r.length>3&&r[3].length>0)for(var l=0;l<r[3].length;l++)s=r[3][l],5===s[0]?(s[1]===s[3]?n=[5,"x",s[1]]:(i=(s[4]-s[2])/(s[3]-s[1]),o=s[2]-i*s[1],n=[5,i.toFixed(4),o.toFixed(2)]),r[3][l]=n):5.2===s[0]?(s[1]===s[3]?n=[5.2,"x",s[1],s[2]]:(i=(s[4]-s[2])/(s[3]-s[1]),n=[5.2,i.toFixed(4),s[1],s[2]]),r[3][l]=n):5.3===s[0]?(n=s[1]<s[3]||s[1]===s[3]&&s[2]<s[4]?[5.3,s[1],s[2],s[3],s[4]]:[5.3,s[3],s[4],s[1],s[2]],r[3][l]=n):6===s[0]?(s[1]===s[3]?n=[6,"x",s[1],s[2]]:(i=(s[4]-s[2])/((s[3]-s[1])*(s[3]-s[1])),n=[6,i.toFixed(4),s[1],s[2]]),r[3][l]=n):6.5===s[0]?(s[1]===s[3]?n=[6.5,"x",s[1],s[2]]:(o=s[3]>s[1]?1:-1,i=(s[4]-s[2])/Math.sqrt(Math.abs(s[3]-s[1])),n=[6.5,i.toFixed(4),o,s[1],s[2]]),r[3][l]=n):8===s[0]&&(s[1]===s[3]?n=[8,"x",s[1],s[2]]:(i=(s[4]-s[2])/Math.abs(s[3]-s[1]),n=[8,i.toFixed(4),s[1],s[2]]),r[3][l]=n);return JSON.stringify(r)}}},j=Q,D=(s("4222"),Object(d["a"])(j,g,I,!1,null,null,null)),V=D.exports,E=s("5dc8"),F=s("84ac"),M={name:"livepoll",components:{LivepollNav:v,Question:E["a"],LivepollSettings:_,LivepollResults:V,AssessHeader:o["a"],Timer:F["a"]},data:function(){return{showQuestion:!0,showResults:!0,showAnswers:!0,onSettings:!1,livepollTimer:null,socket:null}},computed:{isTeacher:function(){return c["b"].assessInfo.is_teacher},curqn:function(){return this.onSettings?-1:parseInt(c["b"].assessInfo.livepoll_status.curquestion)-1},curseed:function(){return c["b"].assessInfo.livepoll_status.seed},curstate:function(){return c["b"].assessInfo.livepoll_status.curstate},starttime:function(){return c["b"].assessInfo.livepoll_status.startt},timelimit:function(){return c["b"].livepollSettings.useTimer?parseInt(c["b"].livepollSettings.questionTimelimit):c["b"].assessInfo.livepoll_status.timelimit?parseInt(c["b"].assessInfo.livepoll_status.timelimit):0},showAnswersLabel:function(){return this.curstate<3?this.$t("livepoll.show_answers_after"):this.$t("livepoll.show_answers")}},methods:{updateUsercount:function(t){c["b"].livepollStuCnt=t.cnt,0===t.teachcnt&&(c["b"].assessInfo.livepoll_status.curstate=0)},addResult:function(t){c["b"].livepollResults.hasOwnProperty(this.curqn)||this.$set(c["b"].livepollResults,this.curqn,{}),t.score=JSON.parse(t.score),t.ans=JSON.parse(t.ans),this.$set(c["b"].livepollResults[this.curqn],t.user,t)},showHandler:function(t){if("showq"===t.action){if(c["a"].clearInitValue(t.qn),-1!==t.startt.indexOf("-")){var e=t.startt.split("-");t.startt=e[0],t.timelimit=e[1]}else t.timelimit=0;this.$set(c["b"].assessInfo,"livepoll_status",{curstate:2,curquestion:parseInt(t.qn)+1,seed:parseInt(t.seed),startt:parseInt(t.startt),timelimit:parseInt(t.timelimit)})}else this.$set(c["b"].assessInfo,"livepoll_status",Object.assign(c["b"].assessInfo.livepoll_status,{curquestion:parseInt(t.qn)+1,curstate:parseInt(t.action),timelimit:0}))},selectQuestion:function(t){clearTimeout(this.livepollTimer);var e=parseInt(t)-1;if(-1!==e){if(this.onSettings=!1,e!==this.curqn){this.showQuestion=c["b"].livepollSettings.showQuestionDefault,this.showResults=c["b"].livepollSettings.showResultsLiveDefault,this.showAnswers=c["b"].livepollSettings.showAnswersAfter;var s=1;c["b"].livepollResults[e]&&Object.keys(c["b"].livepollResults[e]).length>0&&(s=this.showAnswers?4:3),e>=0&&c["a"].setLivepollStatus({newquestion:t,newstate:s})}}else this.onSettings=!0},openInput:function(){var t=this;c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:2,timelimit:this.timelimit}),this.timelimit>0&&(this.livepollTimer=window.setTimeout((function(){return t.closeInput()}),1e3*this.timelimit))},closeInput:function(){clearTimeout(this.livepollTimer);var t=this.showAnswers?4:3;c["b"].livepollSettings.showResultsAfter&&(this.showResults=!0),c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:t})},newVersion:function(){c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:1,forceregen:1}),this.$set(c["b"].livepollResults,this.curqn,{})},updateShowAnswers:function(){if(this.curstate>2){var t=this.showAnswers?4:3;c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:t})}}},mounted:function(){var t=this,e=c["b"].assessInfo.livepoll_server,s=c["b"].assessInfo.livepoll_data,n="room="+s.room+"&now="+s.now;s.sig&&(n+="&sig="+encodeURIComponent(s.sig)),this.socket=window.io("https://"+e+":3000",{query:n}),this.socket.off(),this.socket.on("livepoll usercount",(function(e){return t.updateUsercount(e)})),c["b"].assessInfo.is_teacher?this.socket.on("livepoll qans",(function(e){return t.addResult(e)})):this.socket.on("livepoll show",(function(e){return t.showHandler(e)}))},created:function(){0===c["b"].assessInfo.livepoll_status.curquestion&&this.isTeacher&&(this.onSettings=!0)}},U=M,H=(s("eb0f"),Object(d["a"])(U,n,i,!1,null,null,null));e["default"]=H.exports},"28f3":function(t,e,s){"use strict";s("0cbf")},"296b":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("a",{staticClass:"sr-only",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$refs.scrollpane.focus()}}},[t._v(" "+t._s(t.$t("jumptocontent"))+" ")]),e("assess-header"),e("videocued-nav",{attrs:{cue:t.cue,toshow:t.toshow},on:{jumpto:t.jumpTo}},[e("videocued-result-nav",{staticClass:"med-left",attrs:{qn:t.qn,cue:t.cue},on:{jumpto:t.jumpTo}})],1),e("div",{ref:"scrollpane",staticClass:"scrollpane",attrs:{role:"region",tabindex:"-1","aria-label":t.$t("regions.q_and_vid")}},[e("intro-text",{key:"-1",attrs:{active:-1==t.cue,html:t.intro}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cue>-1&&-1===t.qn,expression:"cue > -1 && qn === -1"}],attrs:{id:"playerwrapper"}},[e("div",{staticClass:"video-wrapper-wrapper",style:{"max-width":t.videoWidth+"px"}},[e("div",{staticClass:"fluid-width-video-wrapper",style:{"padding-bottom":t.aspectRatioPercent+"%"}},[e("div",{attrs:{id:"player"}})])])]),t._l(t.questionArray,(function(s){return e("div",{key:s,class:{inactive:s!=t.qn},attrs:{"aria-hidden":s!=t.qn}},[e("inter-question-text-list",{attrs:{pos:"before",qn:s,active:s==t.qn,textlist:t.textList,lastq:t.lastQ}}),e("full-question-header",{directives:[{name:"show",rawName:"v-show",value:s==t.qn,expression:"curqn == qn"}],attrs:{qn:s}}),e("question",{attrs:{qn:s,active:s==t.qn,getwork:1}}),e("inter-question-text-list",{attrs:{pos:"after",qn:s,active:s==t.qn,textlist:t.textList,lastq:t.lastQ}})],1)}))],2)],1)},i=[],o=(s("e25e"),s("97cd")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"subheader",attrs:{role:"navigation","aria-label":t.$t("regions.qvidnav")}},[e("menu-button",{attrs:{id:"qnav",options:t.navOptions,selected:t.curOption,searchby:"title"},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.option,n=t.selected;return[e("videocued-nav-list-item",{attrs:{option:s,selected:n}})]}}])}),t._t("default")],2)},a=[],l=(s("14d9"),s("b64b"),s("ad76")),u=function(){var t=this,e=t._self._c;return e("span",{staticClass:"flex-nowrap-center"},[e("span",{staticClass:"qname-wrap"},[e("icons",{staticClass:"qstatusicon",attrs:{name:t.statusIcon}}),e("span",{class:{greystrike:""!==t.nameHover},attrs:{title:t.nameHover}},[t._v(" "+t._s(t.option.title)+" ")]),t._v(" "+t._s(t.scoreDisplay)+" ")],1),t.selected?t._e():e("span",{staticClass:"redoicon"},[t.canRetry?e("icons",{attrs:{name:"retry"}}):t._e()],1),t.selected?t._e():e("span",{staticClass:"redoicon"},[t.canRegen?e("icons",{attrs:{name:"retake"}}):t._e()],1)])},c=[],h=s("f05b"),p=s("6081"),d=s("6c5a"),f={name:"VideocuedNavListItem",props:["option","selected"],components:{Icons:h["a"]},mixins:[d["a"]],computed:{statusIcon:function(){if("v"===this.option.type||"f"===this.option.type)return"video";if("q"===this.option.type){if("unattempted"===p["b"].assessInfo.questions[this.option.qn].status){if(1===this.qsAttempted[this.option.qn])return"attempted";if(this.qsAttempted[this.option.qn]>0)return"partattempted"}return p["b"].assessInfo.questions[this.option.qn].status}return"none"},nameHover:function(){return"q"===this.option.type&&0!==p["b"].assessInfo.questions[this.option.qn].withdrawn?this.$t("header.withdrawn"):""},scoreDisplay:function(){if("q"!==this.option.type)return"";var t=p["b"].assessInfo.questions[this.option.qn];if(t.hasOwnProperty("gbscore")){var e=t.canretry?"(":"[";return e+=t.gbscore+"/"+t.points_possible,e+=t.canretry?")":"]",e}return this.$tc("header.pts",t.points_possible)},canRetry:function(){if("q"===this.option.type){var t=p["b"].assessInfo.questions[this.option.qn];return t.canretry}return!1},canRegen:function(){if("q"===this.option.type){var t=p["b"].assessInfo.questions[this.option.qn];return t.regens_remaining}return!1}}},v=f,w=(s("d50d"),s("2877")),m=Object(w["a"])(v,u,c,!1,null,null,null),b=m.exports,y={name:"VideocuedNav",props:["cue","toshow"],components:{MenuButton:l["a"],VideocuedNavListItem:b},computed:{hasIntro:function(){return""!==p["b"].assessInfo.intro},navOptions:function(){var t=this,e=[];this.hasIntro&&e.push({onclick:function(){return t.$emit("jumpto",-1,"i")},title:this.$t("intro"),type:"i"});for(var s=function(s){var n=p["b"].assessInfo.videocues[s];e.push({onclick:function(){return t.$emit("jumpto",s,"v")},type:"v",title:n.title,cue:s}),n.hasOwnProperty("qn")&&e.push({onclick:function(){return t.$emit("jumpto",s,"q")},type:"q",title:t.$t("question_n",{n:parseInt(n.qn)+1}),qn:parseInt(n.qn),cue:s,subitem:!0}),n.hasOwnProperty("followuptime")&&e.push({onclick:function(){return t.$emit("jumpto",s,"f")},type:"f",title:n.followuptitle,cue:s,subitem:!0})},n=0;n<p["b"].assessInfo.videocues.length;n++)s(n);return e},curOption:function(){var t=parseInt(this.cue);if(-1===t&&this.hasIntro)return 0;for(var e=this.hasIntro?1:0;e<this.navOptions.length;e++)if(this.navOptions[e].cue===t&&this.navOptions[e].type===this.toshow)return e;return-1},showNextPrev:function(){return Object.keys(this.navOptions).length>1},prevLink:function(){return this.curOption<=0?"":this.navOptions[this.curOption-1].internallink},nextLink:function(){return this.curOption>=this.navOptions.length-1?"":this.navOptions[this.curOption+1].internallink}}},q=y,_=(s("fe9a"),Object(w["a"])(q,r,a,!1,null,null,null)),g=_.exports,I=s("e536"),x=s("0597"),A=function(){var t=this,e=t._self._c;return-1===t.qn||t.showNav?e("div",[-1===t.qn&&-1===t.cue?e("button",{staticClass:"primary",on:{click:t.startVid}},[t._v(" "+t._s(t.$t("videocued.start"))+" ")]):t._e(),t.qn>-1&&t.hasNextVid?e("button",{class:{primary:"correct"!==t.status||!t.showSkip},on:{click:t.nextVidLink}},[t._v(" "+t._s(t.$t("videocued.continue",{title:t.nextVidTitle}))+" ")]):t._e(),t.qn>-1&&t.showSkip?e("button",{staticClass:"primary",on:{click:t.skipLink}},[t._v(" "+t._s(t.$t("videocued.skipto",{title:t.skipTitle}))+" ")]):t._e()]):t._e()},k=[],P={name:"VideocuedResultNav",props:["qn","cue"],computed:{qdata:function(){return p["b"].assessInfo.questions[this.qn]},showNav:function(){return p["b"].inProgress&&p["b"].assessInfo.hasOwnProperty("questions")&&this.qdata.hasOwnProperty("score")&&(this.qdata.try>0||this.qdata.hasOwnProperty("tries_remaining_range"))&&0===this.qdata.withdrawn},showScores:function(){return"during"===p["b"].assessInfo.showscores},status:function(){if(!this.showScores||!this.qdata.hasOwnProperty("parts"))return"neutral";for(var t=0;t<this.qdata.parts.length;t++)if(0===this.qdata.parts[t].try||this.qdata.parts[t].rawscore<.98)return"neutral";return"correct"},nextVidType:function(){return p["b"].assessInfo.videocues[this.cue].hasOwnProperty("followuptitle")?"followup":"nextseg"},hasNextVid:function(){return"followup"===this.nextVidType||p["b"].assessInfo.videocues.hasOwnProperty(this.cue+1)},nextVidTitle:function(){return"followup"===this.nextVidType?p["b"].assessInfo.videocues[this.cue].followuptitle:p["b"].assessInfo.videocues[this.cue+1].title},showSkip:function(){return"correct"===this.status&&"followup"===this.nextVidType&&p["b"].assessInfo.videocues.hasOwnProperty(this.cue+1)},skipTitle:function(){return p["b"].assessInfo.videocues[this.cue+1].title}},methods:{skipLink:function(){this.$emit("jumpto",this.cue+1,"v")},nextVidLink:function(){"followup"===this.nextVidType?this.$emit("jumpto",this.cue,"f"):this.$emit("jumpto",this.cue+1,"v")},startVid:function(){this.$emit("jumpto",0,"v")}}},T=P,R=Object(w["a"])(T,A,k,!1,null,null,null),O=R.exports,S=s("5dc8"),L=s("eeaa"),$={name:"videocued",components:{FullQuestionHeader:I["a"],VideocuedNav:g,Question:S["a"],VideocuedResultNav:O,InterQuestionTextList:x["a"],AssessHeader:o["a"],IntroText:L["a"]},data:function(){return{videoWidth:600,aspectRatioPercent:56.2,ytplayer:null,timer:null,cue:0,toshow:"v"}},computed:{curCue:function(){return this.cue>-1?p["b"].assessInfo.videocues[this.cue]:{}},qn:function(){return"q"===this.toshow?parseInt(this.curCue.qn):-1},timeCues:function(){var t={};for(var e in p["b"].assessInfo.videocues)p["b"].assessInfo.videocues[e].hasOwnProperty("qn")&&(t[p["b"].assessInfo.videocues[e].time]=parseInt(e));return t},nextVidTimes:function(){for(var t={},e=0;e<p["b"].assessInfo.videocues.length;e++)p["b"].assessInfo.videocues[e].hasOwnProperty("followuptime")&&p["b"].assessInfo.videocues.hasOwnProperty(e+1)?t[p["b"].assessInfo.videocues[e].followuptime]=e:!p["b"].assessInfo.videocues[e].hasOwnProperty("qn")&&p["b"].assessInfo.videocues.hasOwnProperty(e+1)&&(t[p["b"].assessInfo.videocues[e].time]=e);return t},intro:function(){return p["b"].assessInfo.intro},questionArray:function(){for(var t={},e=0;e<p["b"].assessInfo.questions.length;e++)t[e]=e;return t},lastQ:function(){return p["b"].assessInfo.questions.length-1},textList:function(){return p["b"].assessInfo.hasOwnProperty("interquestion_text")?p["b"].assessInfo.interquestion_text:[]}},methods:{createPlayer:function(){var t=this,e=!!(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen),s={autoplay:0,wmode:"transparent",fs:e?1:0,controls:2,rel:0,modestbranding:1,showinfo:0,origin:window.location.protocol+"//"+window.location.host},n=p["b"].assessInfo.videoar.split(":"),i=window.innerHeight-50;this.videoWidth=n[0]/n[1]*i,this.aspectRatioPercent=Math.round(1e3*i/this.videoWidth)/10,this.ytplayer=new window.YT.Player("player",{height:i,width:this.videoWidth,videoId:p["b"].assessInfo.videoid,playerVars:s,events:{onReady:function(){return t.handlePlayerReady()},onStateChange:function(e){return t.handlePlayerStateChange(e)},onError:function(e){return t.handlePlayerError(e)}}})},exitFullscreen:function(){var t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;t&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())},checkTime:function(){var t=this,e=Math.floor(this.ytplayer.getCurrentTime());!this.timeCues.hasOwnProperty(e)||"v"===this.toshow&&this.cue===this.timeCues[e]+1||"f"===this.toshow&&this.cue===this.timeCues[e]||this.ytplayer.getPlayerState()!==window.YT.PlayerState.PLAYING?(this.nextVidTimes.hasOwnProperty(e)&&this.cue===this.nextVidTimes[e]&&(this.cue=this.cue+1,this.toshow="v"),this.timer=window.setTimeout((function(){t.checkTime()}),200)):this.jumpTo(parseInt(this.timeCues[e]),"q")},handlePlayerReady:function(){window.$("iframe#player").removeAttr("height").removeAttr("width").css("height","").css("width","")},handlePlayerStateChange:function(t){var e=this;t.data===window.YT.PlayerState.PLAYING?this.timer=window.setTimeout((function(){e.checkTime()}),200):t.data===window.YT.PlayerState.ENDED&&"v"===this.toshow&&this.curCue.hasOwnProperty("qn")&&(window.clearTimeout(this.timer),this.jumpTo(this.cue,"q"))},handlePlayerError:function(t){p["b"].errorMsg=t.data},jumpTo:function(t,e){var s=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(-1===t||"q"===e)this.exitFullscreen(),this.ytplayer&&this.ytplayer.pauseVideo();else{if(null===this.ytplayer||"function"!==typeof this.ytplayer.seekTo)return 0===n&&(p["b"].errorMsg="ytnotready"),void window.setTimeout((function(){s.jumpTo(t,e,1)}),100);n>0&&(p["b"].errorMsg=null);var i=p["b"].assessInfo.videocues[t],o=0;if("v"===e){if(t>0){var r=p["b"].assessInfo.videocues[t-1];o=r.hasOwnProperty("followuptime")?r.followuptime:r.time}}else"f"===e&&(o=i.time);this.ytplayer.seekTo(o,!0),this.ytplayer.playVideo()}this.cue=t,this.toshow=e}},mounted:function(){var t=this;if(window.YT)this.createPlayer();else if(window.onYouTubePlayerAPIReady=function(){t.createPlayer()},!document.getElementById("yt_player_api")){var e=document.createElement("script");e.id="yt_player_api",e.src="https://www.youtube.com/player_api",document.head.appendChild(e)}},created:function(){""!==p["b"].assessInfo.intro&&(this.cue=-1,this.toshow="i")}},C=$,N=Object(w["a"])(C,n,i,!1,null,null,null);e["default"]=N.exports},"3c65":function(t,e,s){"use strict";var n=s("23e7"),i=s("7b0b"),o=s("07fa"),r=s("3a34"),a=s("083a"),l=s("3511"),u=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=u||!c();n({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=i(this),s=o(e),n=arguments.length;if(n){l(s+n);var u=s;while(u--){var c=u+n;u in e?e[c]=e[u]:a(e,c)}for(var h=0;h<n;h++)e[h]=arguments[h]}return r(e,s+n)}})},"408a":function(t,e,s){"use strict";var n=s("e330");t.exports=n(1..valueOf)},4222:function(t,e,s){"use strict";s("fd84")},a9e3:function(t,e,s){"use strict";var n=s("23e7"),i=s("c430"),o=s("83ab"),r=s("da84"),a=s("428f"),l=s("e330"),u=s("94ca"),c=s("1a2d"),h=s("7156"),p=s("3a9b"),d=s("d9b5"),f=s("c04e"),v=s("d039"),w=s("241c").f,m=s("06cf").f,b=s("9bf2").f,y=s("408a"),q=s("58a8").trim,_="Number",g=r[_],I=a[_],x=g.prototype,A=r.TypeError,k=l("".slice),P=l("".charCodeAt),T=function(t){var e=f(t,"number");return"bigint"==typeof e?e:R(e)},R=function(t){var e,s,n,i,o,r,a,l,u=f(t,"number");if(d(u))throw A("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=q(u),e=P(u,0),43===e||45===e){if(s=P(u,2),88===s||120===s)return NaN}else if(48===e){switch(P(u,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=k(u,2),r=o.length,a=0;a<r;a++)if(l=P(o,a),l<48||l>i)return NaN;return parseInt(o,n)}return+u},O=u(_,!g(" 0o1")||!g("0b1")||g("+0x1")),S=function(t){return p(x,t)&&v((function(){y(t)}))},L=function(t){var e=arguments.length<1?0:g(T(t));return S(this)?h(Object(e),this,L):e};L.prototype=x,O&&!i&&(x.constructor=L),n({global:!0,constructor:!0,wrap:!0,forced:O},{Number:L});var $=function(t,e){for(var s,n=o?w(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;n.length>i;i++)c(e,s=n[i])&&!c(t,s)&&b(t,s,m(e,s))};i&&I&&$(a[_],I),(O||i)&&$(a[_],g)},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("e330"),o=s("5926"),r=s("408a"),a=s("1148"),l=s("d039"),u=RangeError,c=String,h=Math.floor,p=i(a),d=i("".slice),f=i(1..toFixed),v=function(t,e,s){return 0===e?s:e%2===1?v(t,e-1,s*t):v(t*t,e/2,s)},w=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},m=function(t,e,s){var n=-1,i=s;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=h(i/1e7)},b=function(t,e){var s=6,n=0;while(--s>=0)n+=t[s],t[s]=h(n/e),n=n%e*1e7},y=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var n=c(t[e]);s=""===s?n:s+p("0",7-n.length)+n}return s},q=l((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!l((function(){f({})}));n({target:"Number",proto:!0,forced:q},{toFixed:function(t){var e,s,n,i,a=r(this),l=o(t),h=[0,0,0,0,0,0],f="",q="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(a!==a)return"NaN";if(a<=-1e21||a>=1e21)return c(a);if(a<0&&(f="-",a=-a),a>1e-21)if(e=w(a*v(2,69,1))-69,s=e<0?a*v(2,-e,1):a/v(2,e,1),s*=4503599627370496,e=52-e,e>0){m(h,0,s),n=l;while(n>=7)m(h,1e7,0),n-=7;m(h,v(10,n,1),0),n=e-1;while(n>=23)b(h,1<<23),n-=23;b(h,1<<n),m(h,1,1),b(h,2),q=y(h)}else m(h,0,s),m(h,1<<-e,0),q=y(h)+p("0",l);return l>0?(i=q.length,q=f+(i<=l?"0."+p("0",l-i)+q:d(q,0,i-l)+"."+d(q,i-l))):q=f+q,q}})},c854:function(t,e,s){},d50d:function(t,e,s){"use strict";s("c854")},d58a:function(t,e,s){},d5c9:function(t,e,s){},eb0f:function(t,e,s){"use strict";s("d58a")},fd84:function(t,e,s){},fe9a:function(t,e,s){"use strict";s("d5c9")}}]);
//# sourceMappingURL=special.js.map?v=f40456592e3feabb1cf8