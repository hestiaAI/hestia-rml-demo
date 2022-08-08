(window.webpackJsonp=window.webpackJsonp||[]).push([[28,14,72],{1198:function(e,t,r){"use strict";r.r(t);r(28),r(29),r(15),r(3),r(73),r(41);var n=r(708),o={mixins:[r(705).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{weekDays:["Sun","Mon","Tue","Wen","Thu","Fri","Sat"],hours:n.w(24),colorPalette:n.r}},computed:{width:function(){return this.cellSize*(this.hours.length+3)},height:function(){return this.cellSize*(this.weekDays.length+4)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?n.Q(this.dateFormat):function(e){var t=new Date(e);return isNaN(t.getTime())?null:t}},items:function(){var e=this;return this.values.map((function(t){return{date:e.dateParser(t[e.dateAccessor]),value:e.valueAccessor?t[e.valueAccessor]:1}})).filter((function(e){return e.date}))},itemsPerHour:function(){return n.i(this.items,(function(e){return n.I(e,(function(e){return e.value}))}),(function(e){return e.date.getHours()}),(function(e){return e.date.getDay()}))},extent:function(){return n.h(this.itemsPerHour,(function(e){return e[2]}))},color:function(){return n.B().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},mounted:function(){},methods:{generateTitle:function(e){return n.L("%a at %H:00")(new Date(2e3,12,e[1],e[0]))+" - "+e[2]+" records"},drawViz:function(){},legendSquareXPos:function(e){var t=this.width,s=this.cellSize;return t-2*s*this.legendNbItems+e*s*2-2*s}}},c=(r(1591),r(33)),l=r(34),d=r.n(l),f=r(656),h=r(649),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("div",{staticClass:"d-flex mb-3"},[r("div",{staticClass:"overline"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("VSpacer"),e._v(" "),e.includeTotal?r("div",{staticClass:"overline"},[e._v("\n      total: "),r("strong",[e._v(e._s(e.items.length))])]):e._e()],1),e._v(" "),r("svg",{staticClass:"graph",attrs:{viewBox:e.viewBox}},[r("g",{attrs:{transform:"translate(40.5,"+1.5*e.cellSize+")"}},[r("g",{staticClass:"week-axis"},e._l(e.weekDays,(function(t,n){return r("text",{key:"d_"+n,attrs:{x:"-5",y:(n+.5)*e.cellSize,dy:"0.35em"}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),r("g",{staticClass:"hour-axis"},[r("text",{attrs:{y:"-20",x:(e.hours.length/2+.5)*e.cellSize}},[e._v("Hours")]),e._v(" "),e._l(e.hours,(function(t){return r("text",{key:"h_"+t,attrs:{y:"-5",x:(t+.5)*e.cellSize}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),r("g",{staticClass:"calendar-hour"},e._l(e.itemsPerHour,(function(t,n){return r("g",{key:n},[r("rect",{attrs:{width:e.cellSize-e.cellSpacing,height:e.cellSize-e.cellSpacing,x:t[0]*e.cellSize+.5,y:t[1]*e.cellSize+.5,fill:e.color(t[2]),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("title",[e._v(e._s(e.generateTitle(t)))])])})),0),e._v(" "),r("g",{staticClass:"legend"},[r("text",{staticStyle:{"text-anchor":"end"},attrs:{x:e.legendSquareXPos(0)-e.cellSize,y:e.height-2.5*e.cellSize,dy:"-.20em"}},[e._v("\n          "+e._s(e.legendLabel)+"\n        ")]),e._v(" "),e._l(e.legendSquares,(function(t,n){return r("g",{key:"legend_"+n},[r("rect",{attrs:{width:2*(e.cellSize-e.cellSpacing),height:(e.cellSize-e.cellSpacing)/2,x:e.legendSquareXPos(n),y:e.height-3*e.cellSize,fill:e.color(t),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:e.legendSquareXPos(n)+e.cellSize,y:e.height-2*e.cellSize}},[e._v("\n            "+e._s(t)+"\n          ")])])}))],2)])])])}),[],!1,null,"9ac5ed40",null);t.default=component.exports;d()(component,{VContainer:f.a,VSpacer:h.a})},1338:function(e,t,r){"use strict";r.r(t);r(15),r(3),r(41);var n=r(705),o={components:{ChartViewHeatMapHour:r(1198).default},mixins:[n.default],props:{dateAccessor:{type:String,required:!0}},data:function(){return{}},computed:{messageReceived:function(){return this.values.filter((function(e){return"You"===e.receiver}))},messageSent:function(){return this.values.filter((function(e){return"You"===e.sender}))}},mounted:function(){},methods:{drawViz:function(){}}},c=r(33),l=r(34),d=r.n(l),f=r(837),h=r(656),v=r(645),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("VRow",{attrs:{justify:"center"}},[r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageReceived,title:"Messages Received","legend-label":"Messages"}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1),e._v(" "),r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageSent,title:"Messages Sent","legend-label":"Messages"}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{ChartViewHeatMapHour:r(1198).default}),d()(component,{VCol:f.a,VContainer:h.a,VRow:v.a})},1482:function(e,t,r){var content=r(1592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("2a7135dd",content,!0,{sourceMap:!1})},1591:function(e,t,r){"use strict";r(1482)},1592:function(e,t,r){var n=r(20)(!1);n.push([e.i,'[data-v-9ac5ed40] .week-axis{text-anchor:end}[data-v-9ac5ed40] .hour-axis{text-anchor:middle}[data-v-9ac5ed40] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),e.exports=n},705:function(e,t,r){"use strict";r.r(t),t.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}}}},837:function(e,t,r){"use strict";r(11),r(15),r(16),r(17);var n=r(2),o=(r(3),r(28),r(13),r(22),r(67),r(397),r(46),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(41),r(45),r(12),r(92),r(300),r(1)),c=r(88),l=r(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=h.reduce((function(e,t){return e["offset"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),S=h.reduce((function(e,t){return e["order"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(S)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in r)l+=String(r[d]);var f=_.get(l);return f||function(){var e,t;for(t in f=[],m)m[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),_.set(l,f)}(),e(r.tag,Object(c.a)(data,{class:f}),o)}})}}]);