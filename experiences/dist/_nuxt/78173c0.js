(window.webpackJsonp=window.webpackJsonp||[]).push([[30,21,22,77],{1008:function(e,t,r){"use strict";r.r(t);var n=r(1018);t.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},kViewBlock:{type:Function,default:function(){return""}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{drawViz:function(){},createTextFilterWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(e);return r.placeHolder(this.$t(t)),r}}}},1063:function(e,t,r){r(1147)},1064:function(e,t,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(1148)})},1065:function(e,t,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(602)})},1066:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=f(this),r=new(d(t,o("Set")))(t),n=l(r.delete);return h(e,(function(e){c(n,r,e)})),r}})},1067:function(e,t,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(986),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return!f(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1068:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(75),h=r(155),v=r(986),S=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(e){var t=f(this),r=v(t),n=d(e,arguments.length>1?arguments[1]:void 0),y=new(h(t,o("Set"))),m=l(y.add);return S(r,(function(e){n(e,e,t)&&c(m,y,e)}),{IS_ITERATOR:!0}),y}})},1069:function(e,t,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(986),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return f(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1070:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=f(this),r=new(d(t,o("Set"))),n=l(t.has),v=l(r.add);return h(e,(function(e){c(n,t,e)&&c(v,r,e)})),r}})},1071:function(e,t,r){"use strict";var n=r(4),o=r(29),c=r(67),l=r(23),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=l(this),r=c(t.has);return!f(e,(function(e,n){if(!0===o(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},1072:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(30),d=r(23),h=r(347),v=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=h(this),r=d(e),n=r.has;return f(n)||(r=new(o("Set"))(e),n=l(r.has)),!v(t,(function(e,t){if(!1===c(n,r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1073:function(e,t,r){"use strict";var n=r(4),o=r(29),c=r(67),l=r(23),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=l(this),r=c(t.has);return!f(e,(function(e,n){if(!1===o(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},1074:function(e,t,r){"use strict";var n=r(4),o=r(18),c=r(23),l=r(54),f=r(986),d=r(74),h=o([].join),v=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(e){var t=c(this),r=f(t),n=void 0===e?",":l(e),o=[];return d(r,v,{that:o,IS_ITERATOR:!0}),h(o,n)}})},1075:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(75),l=r(29),f=r(67),d=r(23),h=r(155),v=r(986),S=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(e){var t=d(this),r=v(t),n=c(e,arguments.length>1?arguments[1]:void 0),y=new(h(t,o("Set"))),m=f(y.add);return S(r,(function(e){l(m,y,n(e,e,t))}),{IS_ITERATOR:!0}),y}})},1076:function(e,t,r){"use strict";var n=r(4),o=r(67),c=r(23),l=r(986),f=r(74),d=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(e){var t=c(this),r=l(t),n=arguments.length<2,h=n?void 0:arguments[1];if(o(e),f(r,(function(r){n?(n=!1,h=r):h=e(h,r,r,t)}),{IS_ITERATOR:!0}),n)throw d("Reduce of empty set with no initial value");return h}})},1077:function(e,t,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(986),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(e){var t=o(this),r=l(t),n=c(e,arguments.length>1?arguments[1]:void 0);return f(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1078:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=f(this),r=new(d(t,o("Set")))(t),n=l(r.delete),v=l(r.add);return h(e,(function(e){c(n,r,e)||c(v,r,e)})),r}})},1079:function(e,t,r){"use strict";var n=r(4),o=r(68),c=r(67),l=r(23),f=r(155),d=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=l(this),r=new(f(t,o("Set")))(t);return d(e,c(r.add),{that:r}),r}})},1128:function(e,t,r){"use strict";r(8),r(14),r(19),r(20);var n=r(2),o=(r(3),r(36),r(10),r(22),r(78),r(416),r(42),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(41),r(39),r(9),r(104),r(437),r(1)),c=r(119),l=r(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),S=h.reduce((function(e,t){return e["offset"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),y=h.reduce((function(e,t){return e["order"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(S),order:Object.keys(y)};function _(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},S),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=x.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=_(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),x.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},1147:function(e,t,r){"use strict";r(600)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(601))},1148:function(e,t,r){"use strict";var n=r(29),o=r(67),c=r(23);e.exports=function(){for(var e=c(this),t=o(e.add),r=0,l=arguments.length;r<l;r++)n(t,e,arguments[r]);return e}},1163:function(e,t,r){"use strict";var n=r(4),o=r(610),c=r(67),l=r(76),f=r(88),d=r(267);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=l(this),n=f(r);return c(e),(t=d(r,0)).length=o(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},1164:function(e,t,r){r(159)("flatMap")},1486:function(e,t,r){"use strict";r.r(t);r(36),r(28),r(14),r(3),r(63),r(41);var n=r(344),o={mixins:[r(1008).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{hours:n.y(24),colorPalette:n.s}},computed:{width:function(){return this.cellSize*(this.hours.length+3)},height:function(){return this.cellSize*(this.$days().length+4)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?n.T(this.dateFormat):function(e){var t=new Date(e);return isNaN(t.getTime())?null:t}},items:function(){var e=this;return this.values.map((function(t){return{date:e.dateParser(t[e.dateAccessor]),value:e.valueAccessor?t[e.valueAccessor]:1}})).filter((function(e){return e.date}))},itemsPerHour:function(){return n.j(this.items,(function(e){return n.K(e,(function(e){return e.value}))}),(function(e){return e.date.getHours()}),(function(e){return e.date.getDay()}))},extent:function(){return n.i(this.itemsPerHour,(function(e){return e[2]}))},color:function(){return n.D().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},methods:{generateTitle:function(e){return n.N("%a at %H:00")(new Date(2e3,12,e[1],e[0]))+" - "+e[2]+" records"},legendSquareXPos:function(e){var t=this.width,s=this.cellSize;return t-2*s*this.legendNbItems+e*s*2-2*s}}},c=(r(1788),r(40)),l=r(44),f=r.n(l),d=r(976),h=r(967),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("div",{staticClass:"d-flex mb-3"},[r("div",{staticClass:"overline"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("VSpacer"),e._v(" "),e.includeTotal?r("div",{staticClass:"overline"},[e._v("\n      total: "),r("strong",[e._v(e._s(e.items.length))])]):e._e()],1),e._v(" "),r("svg",{staticClass:"graph",attrs:{viewBox:e.viewBox}},[r("g",{attrs:{transform:"translate(40.5,"+1.5*e.cellSize+")"}},[r("g",{staticClass:"week-axis"},e._l(e.$days(),(function(t,n){return r("text",{key:"d_"+n,attrs:{x:"-5",y:(n+.5)*e.cellSize,dy:"0.35em"}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),r("g",{staticClass:"hour-axis"},[r("text",{attrs:{y:"-20",x:(e.hours.length/2+.5)*e.cellSize}},[e._v(e._s(e.$t("hour"))+"s")]),e._v(" "),e._l(e.hours,(function(t){return r("text",{key:"h_"+t,attrs:{y:"-5",x:(t+.5)*e.cellSize}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),r("g",{staticClass:"calendar-hour"},e._l(e.itemsPerHour,(function(t,n){return r("g",{key:n},[r("rect",{attrs:{width:e.cellSize-e.cellSpacing,height:e.cellSize-e.cellSpacing,x:t[0]*e.cellSize+.5,y:t[1]*e.cellSize+.5,fill:e.color(t[2]),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("title",[e._v(e._s(e.generateTitle(t)))])])})),0),e._v(" "),r("g",{staticClass:"legend"},[r("text",{staticStyle:{"text-anchor":"end"},attrs:{x:e.legendSquareXPos(0)-e.cellSize,y:e.height-2.5*e.cellSize,dy:"-.20em"}},[e._v("\n          "+e._s(e.legendLabel)+"\n        ")]),e._v(" "),e._l(e.legendSquares,(function(t,n){return r("g",{key:"legend_"+n},[r("rect",{attrs:{width:2*(e.cellSize-e.cellSpacing),height:(e.cellSize-e.cellSpacing)/2,x:e.legendSquareXPos(n),y:e.height-3*e.cellSize,fill:e.color(t),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:e.legendSquareXPos(n)+e.cellSize,y:e.height-2*e.cellSize}},[e._v("\n            "+e._s(t)+"\n          ")])])}))],2)])])])}),[],!1,null,"7c34f79e",null);t.default=component.exports;f()(component,{VContainer:d.a,VSpacer:h.a})},1530:function(e,t,r){"use strict";r.r(t);r(36),r(28),r(14),r(3),r(63),r(41),r(1163),r(1164),r(415);var n=r(344),o={mixins:[r(1008).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{formatMonth:n.X("%b"),colorPalette:n.s}},computed:{width:function(){return 55*this.cellSize},calendarHeight:function(){return this.cellSize*(this.$days().length+4)},height:function(){return this.calendarHeight*this.itemsPerDay.length},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?n.T(this.dateFormat):function(e){var t=new Date(e);return isNaN(t.getTime())?null:t}},items:function(){var e=this;return this.values.map((function(t){return{date:e.dateParser(t[e.dateAccessor]),value:e.valueAccessor?t[e.valueAccessor]:1}})).filter((function(e){return e.date}))},extent:function(){return n.i(this.itemsPerDay.flatMap((function(e){return n.i(e[1],(function(i){return i[3]}))})))},color:function(){return n.D().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},itemsPerDay:function(){return n.q(this.items,(function(e){return e.date.getUTCFullYear()})).sort((function(a,b){return b[0]-a[0]})).map((function(e){return[e[0],n.j(e[1],(function(e){return n.K(e,(function(e){return e.value}))}),(function(e){return e.date.getUTCMonth()}),(function(e){return e.date.getUTCDate()}),(function(e){return e.date.getDay()}))]}))},monthsPerYear:function(){return this.itemsPerDay.map((function(e){var t=n.i(e[1],(function(i){return new Date(e[0],i[0],i[1])}));return{year:e[0],months:n.ab(n.Z(t[0]),t[1])}}))},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},methods:{generateTitle:function(e,t,r,o){return n.N("%a %d %B, %Y")(new Date(e,t,r))+" - "+o+" records"},xPos:function(e,t,r){var o=new Date(e,t,r);return n.Y.count(n.bb(o),o)*this.cellSize+.5},xPosMonth:function(e){return n.Y.count(n.bb(e),n.Y.ceil(e))*this.cellSize},legendSquareXPos:function(e){var t=this.width,s=this.cellSize;return t-2*s*this.legendNbItems+e*s*2-2*s}}},c=(r(1834),r(40)),l=r(44),f=r.n(l),d=r(976),h=r(967),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"overline mb-3"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("VSpacer"),e._v(" "),e.includeTotal?r("div",{staticClass:"overline mb-3"},[e._v("\n      total: "),r("strong",[e._v(e._s(e.items.length))])]):e._e()],1),e._v(" "),r("svg",{staticClass:"graph",attrs:{viewBox:e.viewBox}},[r("g",{attrs:{transform:"translate(40.5,"+1.5*e.cellSize+")"}},[e._l(e.itemsPerDay,(function(t,n){return r("g",{key:"week-axis"+n,staticClass:"week-axis"},e._l(e.$days(),(function(t,o){return r("text",{key:"d_"+o,attrs:{x:"-5",y:n*e.calendarHeight+(o+.5)*e.cellSize,dy:"0.35em"}},[e._v("\n          "+e._s(t)+"\n        ")])})),0)})),e._v(" "),e._l(e.monthsPerYear,(function(t,n){return r("g",{key:"month-axis"+n,staticClass:"month-axis"},e._l(t.months,(function(t,o){return r("text",{key:"month_"+o,attrs:{x:e.xPosMonth(t),y:n*e.calendarHeight-5,dy:"0.35em"}},[e._v("\n          "+e._s(e.formatMonth(t))+"\n        ")])})),0)})),e._v(" "),r("g",{staticClass:"calendars"},e._l(e.itemsPerDay,(function(t,n){return r("g",{key:"year_"+n},[r("text",{staticStyle:{"font-weight":"bold","font-size":"12px"},attrs:{x:.5,y:n*e.calendarHeight-e.cellSize}},[e._v("\n            "+e._s(t[0])+"\n          ")]),e._v(" "),e._l(t[1],(function(o,c){return r("g",{key:"day_"+c},[r("rect",{attrs:{width:e.cellSize-e.cellSpacing,height:e.cellSize-e.cellSpacing,x:e.xPos(t[0],o[0],o[1]),y:n*e.calendarHeight+o[2]*e.cellSize+.5,fill:e.color(o[3]),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("title",[e._v("\n              "+e._s(e.generateTitle(t[0],o[0],o[1],o[3]))+"\n            ")])])}))],2)})),0),e._v(" "),r("g",{staticClass:"legend"},[r("text",{staticStyle:{"text-anchor":"end"},attrs:{x:e.legendSquareXPos(0)-e.cellSize,y:e.height-2.5*e.cellSize,dy:"-.20em"}},[e._v("\n          "+e._s(e.legendLabel)+"\n        ")]),e._v(" "),e._l(e.legendSquares,(function(t,n){return r("g",{key:"legend_"+n},[r("rect",{attrs:{width:2*(e.cellSize-e.cellSpacing),height:(e.cellSize-e.cellSpacing)/2,x:e.legendSquareXPos(n),y:e.height-3*e.cellSize,fill:e.color(t),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:e.legendSquareXPos(n)+e.cellSize,y:e.height-2*e.cellSize}},[e._v("\n            "+e._s(t)+"\n          ")])])}))],2)],2)])])}),[],!1,null,"1ca16591",null);t.default=component.exports;f()(component,{VContainer:d.a,VSpacer:h.a})},1583:function(e,t,r){"use strict";r.r(t);r(14),r(3),r(41),r(1063),r(42),r(1064),r(1065),r(1066),r(1067),r(1068),r(1069),r(1070),r(1071),r(1072),r(1073),r(1074),r(1075),r(1076),r(1077),r(1078),r(1079),r(63);var n={mixins:[r(1008).default],props:{dateAccessor:{type:String,required:!0}},data:function(){return{}},computed:{messageReceived:function(){return this.values.filter((function(e){return"Her"!==e.sender&&"User"!==e.sender}))},messageSent:function(){return this.values.filter((function(e){return"Her"!==e.sender&&"User"===e.sender}))},nbUser:function(){return new Set(this.values.map((function(e){return e.sender}))).size-2},nbMsg:function(){return this.values.filter((function(e){return"Her"!==e.sender})).length}}},o=r(40),c=r(44),l=r.n(c),f=r(1128),d=r(976),h=r(963),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("VRow",[r("VCol",{attrs:{cols:"12"}},[r("h3",{staticClass:"text-h6"},[e._v("\n        Messages exchanged per hour and day of week\n      ")]),e._v(" "),r("p",[e._v("\n        In total you exchanged "),r("strong",[e._v(e._s(e.nbMsg))]),e._v(" messages with\n        "),r("strong",[e._v(e._s(e.nbUser))]),e._v(" users.\n      ")])]),e._v(" "),r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageReceived,title:"Messages Received","legend-label":"Messages","include-total":""}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1),e._v(" "),r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageSent,title:"Messages Sent","legend-label":"Messages","include-total":""}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1)],1),e._v(" "),r("VRow",[r("VCol",{attrs:{cols:"12"}},[r("h3",{staticClass:"text-h6"},[e._v("\n        Messages exchanged per day\n      ")]),e._v(" "),r("ChartViewHeatMapCalendar",e._b({attrs:{values:e.messageReceived,"legend-label":"Messages"}},"ChartViewHeatMapCalendar",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{ChartViewHeatMapHour:r(1486).default,ChartViewHeatMapCalendar:r(1530).default}),l()(component,{VCol:f.a,VContainer:d.a,VRow:h.a})},1718:function(e,t,r){var content=r(1789);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("ce2991f0",content,!0,{sourceMap:!1})},1787:function(e,t,r){var content=r(1835);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("4c34a7e6",content,!0,{sourceMap:!1})},1788:function(e,t,r){"use strict";r(1718)},1789:function(e,t,r){var n=r(25)(!1);n.push([e.i,'[data-v-7c34f79e] .week-axis{text-anchor:end}[data-v-7c34f79e] .hour-axis{text-anchor:middle}[data-v-7c34f79e] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),e.exports=n},1834:function(e,t,r){"use strict";r(1787)},1835:function(e,t,r){var n=r(25)(!1);n.push([e.i,'[data-v-1ca16591] .week-axis{text-anchor:end}[data-v-1ca16591] .hour-axis{text-anchor:middle}[data-v-1ca16591] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),e.exports=n},986:function(e,t,r){var n=r(29);e.exports=function(e){return n(Set.prototype.values,e)}}}]);