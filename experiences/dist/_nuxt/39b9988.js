(window.webpackJsonp=window.webpackJsonp||[]).push([[14,68],{1001:function(t,e,n){"use strict";n.r(e);var r=n(993);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",n=new r.TextFilterWidget(t);return n.placeHolder(this.$t(e)),n}}}},1143:function(t,e,n){"use strict";var r=n(4),l=n(603),c=n(65),o=n(75),d=n(88),f=n(265);r({target:"Array",proto:!0},{flatMap:function(t){var e,n=o(this),r=d(n);return c(t),(e=f(n,0)).length=l(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},1144:function(t,e,n){n(156)("flatMap")},1509:function(t,e,n){"use strict";n.r(e);n(36),n(28),n(16),n(3),n(72),n(40),n(1143),n(1144),n(411);var r=n(341),l={mixins:[n(1001).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{weekDays:["Sun","Mon","Tue","Wen","Thu","Fri","Sat"],formatMonth:r.V("%b"),colorPalette:r.r}},computed:{width:function(){return 55*this.cellSize},calendarHeight:function(){return this.cellSize*(this.weekDays.length+4)},height:function(){return this.calendarHeight*this.itemsPerDay.length},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?r.S(this.dateFormat):function(t){var e=new Date(t);return isNaN(e.getTime())?null:e}},items:function(){var t=this;return this.values.map((function(e){return{date:t.dateParser(e[t.dateAccessor]),value:t.valueAccessor?e[t.valueAccessor]:1}})).filter((function(t){return t.date}))},extent:function(){return r.h(this.itemsPerDay.flatMap((function(t){return r.h(t[1],(function(i){return i[3]}))})))},color:function(){return r.C().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},itemsPerDay:function(){return r.p(this.items,(function(t){return t.date.getUTCFullYear()})).sort((function(a,b){return b[0]-a[0]})).map((function(t){return[t[0],r.i(t[1],(function(t){return r.J(t,(function(t){return t.value}))}),(function(t){return t.date.getUTCMonth()}),(function(t){return t.date.getUTCDate()}),(function(t){return t.date.getDay()}))]}))},monthsPerYear:function(){return this.itemsPerDay.map((function(t){var e=r.h(t[1],(function(i){return new Date(t[0],i[0],i[1])}));return{year:t[0],months:r.Y(r.X(e[0]),e[1])}}))},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},mounted:function(){},methods:{generateTitle:function(t,e,n,l){return r.M("%a %d %B, %Y")(new Date(t,e,n))+" - "+l+" records"},xPos:function(t,e,n){var l=new Date(t,e,n);return r.W.count(r.Z(l),l)*this.cellSize+.5},xPosMonth:function(t){return r.W.count(r.Z(t),r.W.ceil(t))*this.cellSize},legendSquareXPos:function(t){var e=this.width,s=this.cellSize;return e-2*s*this.legendNbItems+t*s*2-2*s},drawViz:function(){}}},c=(n(1813),n(38)),o=n(44),d=n.n(o),f=n(970),h=n(962),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VContainer",[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"overline mb-3"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("VSpacer"),t._v(" "),t.includeTotal?n("div",{staticClass:"overline mb-3"},[t._v("\n      total: "),n("strong",[t._v(t._s(t.items.length))])]):t._e()],1),t._v(" "),n("svg",{staticClass:"graph",attrs:{viewBox:t.viewBox}},[n("g",{attrs:{transform:"translate(40.5,"+1.5*t.cellSize+")"}},[t._l(t.itemsPerDay,(function(e,r){return n("g",{key:"week-axis"+r,staticClass:"week-axis"},t._l(t.weekDays,(function(e,l){return n("text",{key:"d_"+l,attrs:{x:"-5",y:r*t.calendarHeight+(l+.5)*t.cellSize,dy:"0.35em"}},[t._v("\n          "+t._s(e)+"\n        ")])})),0)})),t._v(" "),t._l(t.monthsPerYear,(function(e,r){return n("g",{key:"month-axis"+r,staticClass:"month-axis"},t._l(e.months,(function(e,l){return n("text",{key:"month_"+l,attrs:{x:t.xPosMonth(e),y:r*t.calendarHeight-5,dy:"0.35em"}},[t._v("\n          "+t._s(t.formatMonth(e))+"\n        ")])})),0)})),t._v(" "),n("g",{staticClass:"calendars"},t._l(t.itemsPerDay,(function(e,r){return n("g",{key:"year_"+r},[n("text",{staticStyle:{"font-weight":"bold","font-size":"12px"},attrs:{x:.5,y:r*t.calendarHeight-t.cellSize}},[t._v("\n            "+t._s(e[0])+"\n          ")]),t._v(" "),t._l(e[1],(function(l,c){return n("g",{key:"day_"+c},[n("rect",{attrs:{width:t.cellSize-t.cellSpacing,height:t.cellSize-t.cellSpacing,x:t.xPos(e[0],l[0],l[1]),y:r*t.calendarHeight+l[2]*t.cellSize+.5,fill:t.color(l[3]),rx:t.borderRadius,ry:t.borderRadius}}),t._v(" "),n("title",[t._v("\n              "+t._s(t.generateTitle(e[0],l[0],l[1],l[3]))+"\n            ")])])}))],2)})),0),t._v(" "),n("g",{staticClass:"legend"},[n("text",{staticStyle:{"text-anchor":"end"},attrs:{x:t.legendSquareXPos(0)-t.cellSize,y:t.height-2.5*t.cellSize,dy:"-.20em"}},[t._v("\n          "+t._s(t.legendLabel)+"\n        ")]),t._v(" "),t._l(t.legendSquares,(function(e,r){return n("g",{key:"legend_"+r},[n("rect",{attrs:{width:2*(t.cellSize-t.cellSpacing),height:(t.cellSize-t.cellSpacing)/2,x:t.legendSquareXPos(r),y:t.height-3*t.cellSize,fill:t.color(e),rx:t.borderRadius,ry:t.borderRadius}}),t._v(" "),n("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:t.legendSquareXPos(r)+t.cellSize,y:t.height-2*t.cellSize}},[t._v("\n            "+t._s(e)+"\n          ")])])}))],2)],2)])])}),[],!1,null,"3c12ca77",null);e.default=component.exports;d()(component,{VContainer:f.a,VSpacer:h.a})},1768:function(t,e,n){var content=n(1814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6ca3e037",content,!0,{sourceMap:!1})},1813:function(t,e,n){"use strict";n(1768)},1814:function(t,e,n){var r=n(25)(!1);r.push([t.i,'[data-v-3c12ca77] .week-axis{text-anchor:end}[data-v-3c12ca77] .hour-axis{text-anchor:middle}[data-v-3c12ca77] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),t.exports=r}}]);