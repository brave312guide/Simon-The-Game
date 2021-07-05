(function(e){function t(t){for(var i,r,u=t[0],c=t[1],s=t[2],d=0,m=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Simon-The-Game/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f0f":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},"23f2":function(e,t,n){"use strict";n("a92c")},"2b90":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"3d90":function(e,t,n){},"3e31":function(e,t,n){"use strict";n("3d90")},4190:function(e,t,n){"use strict";n("46a2")},"46a2":function(e,t,n){},"516d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Game")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"game"},[n("h1",[e._v("«Simon The Game»")]),n("game-controller",{attrs:{round:e.round,active:e.active,lost:e.lost,gameMode:e.gameMode},on:{start:e.startGame}}),n("game-complexity",{attrs:{complexity:e.complexity},on:{"update:complexity":function(t){e.complexity=t}}}),n("game-settings",{attrs:{gameMode:e.gameMode},on:{"update:gameMode":function(t){e.gameMode=t},"update:game-mode":function(t){e.gameMode=t}}}),n("game-field",{ref:"gameField",attrs:{sequence:e.sequence,gameMode:e.gameMode},on:{validate:function(t){return e.validateSequence(t)}}})],1)])},u=[],c=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-controller"},[n("button",{staticClass:"game-btn",attrs:{type:"button",disabled:e.active||"free"===e.gameMode},on:{click:function(t){return e.$emit("start")}}},[e._v(e._s(e.round&&e.active?"Раунд "+e.round:"Начать игру"))]),e.lost&&"free"!==e.gameMode?n("h3",{staticClass:"game-round"},[e._v(e._s("Очень жаль, вы проиграли на "+e.round+" раунде. "+e.losesMsg))]):e._e()])}),s=[],l=(n("a9e3"),{name:"gameController",props:{round:Number,active:Boolean,lost:Boolean,gameMode:String},computed:{losesMsg:function(){return this.round<5?"Попробуйте сменить сложность.":"Отличный результат!"}}}),d=l,m=(n("23f2"),n("2877")),p=Object(m["a"])(d,c,s,!1,null,"86b4c264",null),f=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-complexity"},[n("h2",[e._v("Сложность:")]),n("label",[e._v("Легкая "),n("input",{attrs:{type:"radio",name:"complexity",value:"easy"},domProps:{checked:"easy"===e.complexity},on:{change:function(t){return e.$emit("update:complexity",t.target.value)}}})]),n("label",[e._v("Средняя "),n("input",{attrs:{type:"radio",name:"complexity",value:"medium"},domProps:{checked:"medium"===e.complexity},on:{change:function(t){return e.$emit("update:complexity",t.target.value)}}})]),n("label",[e._v("Сложная "),n("input",{attrs:{type:"radio",name:"complexity",value:"hard"},domProps:{checked:"hard"===e.complexity},on:{change:function(t){return e.$emit("update:complexity",t.target.value)}}})])])},g=[],h={name:"gameComplexity",props:{complexity:String}},b=h,y=(n("f914"),Object(m["a"])(b,v,g,!1,null,null,null)),x=y.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-settings"},[n("h2",[e._v("Режим:")]),n("label",[e._v("Стандартный "),n("input",{attrs:{type:"radio",name:"game-mode",value:"normal"},domProps:{checked:"normal"===e.gameMode},on:{change:function(t){return e.$emit("update:gameMode",t.target.value)}}})]),n("label",[e._v("Без звука "),n("input",{attrs:{type:"radio",name:"game-mode",value:"mute"},domProps:{checked:"mute"===e.gameMode},on:{change:function(t){return e.$emit("update:gameMode",t.target.value)}}})]),n("label",[e._v("Только звук "),n("input",{attrs:{type:"radio",name:"game-mode",value:"audio"},domProps:{checked:"audio"===e.gameMode},on:{change:function(t){return e.$emit("update:gameMode",t.target.value)}}})]),n("label",[e._v("Свободный "),n("input",{attrs:{type:"radio",name:"game-mode",value:"free"},domProps:{checked:"free"===e.gameMode},on:{change:function(t){return e.$emit("update:gameMode",t.target.value)}}})])])},_=[],w={name:"gameSettings",props:{gameMode:String}},O=w,$=(n("a432"),Object(m["a"])(O,M,_,!1,null,null,null)),S=$.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"gameField",staticClass:"game-field"},[n("div",{staticClass:"simon"},[n("div",{staticClass:"tile red",class:{lit:e.buttons[0].lit,hoverable:e.activeField},on:{mousedown:function(t){return e.clickOnBtn(e.buttons[0].id)},mouseup:function(t){return e.$emit("validate",e.buttons[0].id)}}}),n("div",{staticClass:"tile blue",class:{lit:e.buttons[1].lit,hoverable:e.activeField},on:{mousedown:function(t){return e.clickOnBtn(e.buttons[1].id)},mouseup:function(t){return e.$emit("validate",e.buttons[1].id)}}}),n("div",{staticClass:"tile yellow",class:{lit:e.buttons[2].lit,hoverable:e.activeField},on:{mousedown:function(t){return e.clickOnBtn(e.buttons[2].id)},mouseup:function(t){return e.$emit("validate",e.buttons[2].id)}}}),n("div",{staticClass:"tile green",class:{lit:e.buttons[3].lit,hoverable:e.activeField},on:{mousedown:function(t){return e.clickOnBtn(e.buttons[3].id)},mouseup:function(t){return e.$emit("validate",e.buttons[3].id)}}})])])},k=[],C=(n("7db0"),{name:"gameField",props:{sequence:Array,gameMode:String},data:function(){return{buttons:[{id:1,lit:!1},{id:2,lit:!1},{id:3,lit:!1},{id:4,lit:!1}],activeField:!1}},methods:{reproduceSequence:function(e){var t=this,n=0,i=setInterval((function(){t.showBtn(t.sequence[n]),t.playSound(t.sequence[n]),n++,n>=t.sequence.length&&(clearInterval(i),t.activeField=!0)}),e)},showBtn:function(e){if("audio"!==this.gameMode){var t=this.buttons.find((function(t){return t.id===e}));t.lit=!0,setTimeout((function(){t.lit=!1}),300)}},playSound:function(e){if("mute"!==this.gameMode){var t=this.buttons.find((function(t){return t.id===e})),i=new Audio(n("d75d")("./".concat(t.id,".mp3")));i.play()}},clickOnBtn:function(e){this.activeField&&(this.showBtn(e),this.playSound(e))}}}),q=C,j=(n("4190"),Object(m["a"])(q,F,k,!1,null,null,null)),P=j.exports,B={name:"Game",components:{gameController:f,gameComplexity:x,gameSettings:S,gameField:P},data:function(){return{round:0,active:!1,complexity:"easy",gameMode:"normal",sequence:[],lost:!1}},methods:{startGame:function(){this.round=0,this.active=!0,this.lost=!1,this.sequence=[],this.createNewRound()},createNewRound:function(){this.round++,this.sequence.push(this.getRandomNum()),this.$refs.gameField.reproduceSequence(this.interval)},getRandomNum:function(){return Math.floor(4*Math.random()+1)},validateSequence:function(e){var t=this;if(this.$refs.gameField.activeField&&"free"!==this.gameMode){var n=this.cacheSequence.shift();e===n&&0===this.cacheSequence.length?(this.$refs.gameField.activeField=!1,setTimeout((function(){t.createNewRound()}),500)):e!==n&&(this.$refs.gameField.activeField=!1,this.stopGame())}},stopGame:function(){this.active=!1,this.lost=!0}},computed:{interval:function(){return"easy"===this.complexity?1500:"medium"===this.complexity?1e3:400},cacheSequence:function(){return this.sequence.slice(0)}},watch:{gameMode:function(e){"free"===e&&(this.stopGame(),this.lost=!1,this.round=0,this.$refs.gameField.activeField=!0)}}},G=B,E=(n("3e31"),Object(m["a"])(G,r,u,!1,null,"3c7c5e95",null)),N=E.exports,T={name:"App",components:{Game:N}},R=T,A=(n("5c0b"),Object(m["a"])(R,o,a,!1,null,null,null)),D=A.exports;i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"84f6":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"9c0c":function(e,t,n){},a08d:function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},a432:function(e,t,n){"use strict";n("516d")},a92c:function(e,t,n){},cb35:function(e,t,n){},d75d:function(e,t,n){var i={"./1.mp3":"84f6","./2.mp3":"2b90","./3.mp3":"a08d","./4.mp3":"0f0f"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id="d75d"},f914:function(e,t,n){"use strict";n("cb35")}});
//# sourceMappingURL=app.18036de8.js.map