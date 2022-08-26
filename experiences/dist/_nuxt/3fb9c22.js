(window.webpackJsonp=window.webpackJsonp||[]).push([[11,15],{1263:function(t,e,r){"use strict";r.r(e);r(36);var n=r(1012);e.default={props:{ndx:{type:Object,required:!0},title:{type:String,default:""},valueLabel:{type:String,default:"records"},height:{type:Number,default:250},colorPalette:{type:Array,default:function(){return["#58539E","#847CEB","#605BAB","#4A4685","#35325E"]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1456:function(t,e,r){"use strict";r.r(e);var n=r(85),o=(r(36),r(28),r(341)),c=r(1012),l=r(1263);c.config.defaultColors(o.G);var d={mixins:[l.default],props:{dateAccessor:{type:String,required:!0},dateFormat:{type:String,default:""},valueAccessor:{type:String,default:""},defaultValue:{type:Number,default:0}},data:function(){var t=this,e={day:{name:"day",accessor:function(e){return o.L(t.dateParser(e))},xUnits:o.M,round:o.L.round},month:{name:"month",accessor:function(e){return o.R(t.dateParser(e))},xUnits:o.S,round:o.R.round},year:{name:"year",accessor:function(e){return o.V(t.dateParser(e))},xUnits:o.W,round:o.V.round}};return{timeUnits:e,timeUnit:e.day,dateFormatter:o.N("%B %d, %Y")}},computed:{dateParser:function(){return this.dateFormat?o.T(this.dateFormat):function(t){return new Date(t)}}},methods:{drawViz:function(){var t,e=this,r=new c.LineChart("#area-chart-".concat(this.graphId)),l=new c.BarChart("#range-chart-".concat(this.graphId));o.H("#area-chart-".concat(this.graphId," a.reset")).on("click",(function(){r.filterAll(),l.filterAll(),c.redrawAll()}));var d=o.i(this.ndx.all(),(function(t){return e.dateParser(t[e.dateAccessor])}));d[0]=o.L.offset(d[0],-1),d[1]=o.L.offset(d[1],1);var h=(t=o.R).count.apply(t,Object(n.a)(d));this.timeUnit=h>10?h>120?this.timeUnits.year:this.timeUnits.month:this.timeUnits.day;var m=this.ndx.dimension((function(t){return e.timeUnit.accessor(t[e.dateAccessor])})),f=this.valueAccessor?m.group().reduceSum((function(t){return t[e.valueAccessor]})):m.group().reduceCount(),v=o.H("#area-chart-".concat(this.graphId)).node().getBoundingClientRect().width;r.margins({top:20,left:40,right:20,bottom:20}).width(v).transitionDuration(1e3).turnOnControls(!1).curve(o.e).xyTipsOn(!0).height(.8*(this.height-30)).brushOn(!1).renderArea(!0).dimension(m).group(f).x(o.E().domain(d)).elasticY(!0).rangeChart(l).renderDataPoints({radius:3,fillOpacity:.8,strokeOpacity:0}).round(this.timeUnit.round).xUnits(this.timeUnit.xUnits).title((function(t){return"".concat(e.dateFormatter(t.key)," : ").concat(t.value," ").concat(e.valueLabel)})).clipPadding(10).yAxisLabel("Total ".concat(this.valueLabel)).ordinalColors(this.colorPalette),r.xAxis().ticks(10),r.yAxis().ticks(6),r.filterAll(),l.width(v).height(.2*(this.height-30)).margins({top:0,right:10,bottom:20,left:40}).dimension(m).group(f).centerBar(!0).gap(1).x(o.E().domain(d)).valueAccessor((function(t){return t.value})).label((function(t){return t.key})).round(this.timeUnit.round).alwaysUseRounding(!0).xUnits(this.timeUnit.xUnits).ordinalColors(this.colorPalette).yAxis().ticks(0),c.renderAll()}}},h=r(38),m=r(44),f=r.n(m),v=r(968),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",[r("div",{attrs:{id:"area-chart-"+t.graphId}},[r("strong",[t._v(t._s(t.title))]),t._v(" "),r("strong",{directives:[{name:"t",rawName:"v-t",value:"per",expression:"'per'"}]}),t._v(" "),r("strong",{directives:[{name:"t",rawName:"v-t",value:t.timeUnit.name,expression:"timeUnit.name"}]}),t._v(" "),r("a",{directives:[{name:"t",rawName:"v-t",value:"reset",expression:"'reset'"}],staticClass:"reset",staticStyle:{display:"none"}}),t._v(" "),r("p",{staticClass:"filters"},[r("span",{directives:[{name:"t",rawName:"v-t",value:"Current filter",expression:"'Current filter'"}]}),t._v(" "),r("span",{staticClass:"filter"})])]),t._v(" "),r("div",{staticClass:"range-chart",attrs:{id:"range-chart-"+t.graphId}},[r("p",{directives:[{name:"t",rawName:"v-t",value:"select-time-range",expression:"'select-time-range'"}],staticClass:"muted pull-right text-subtitle-2",staticStyle:{"margin-right":"15px","margin-bottom":"5px"}})])])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VContainer:v.a})}}]);