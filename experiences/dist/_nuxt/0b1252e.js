(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15],{1263:function(t,e,r){"use strict";r.r(e);r(36);var n=r(1012);e.default={props:{ndx:{type:Object,required:!0},title:{type:String,default:""},valueLabel:{type:String,default:"records"},height:{type:Number,default:250},colorPalette:{type:Array,default:function(){return["#58539E","#847CEB","#605BAB","#4A4685","#35325E"]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1458:function(t,e,r){"use strict";r.r(e);r(36);var n=r(341),o=r(1012),c=r(1263);o.config.defaultColors(n.G);var l={mixins:[c.default],props:{dateAccessor:{type:String,required:!0},dateFormat:{type:String,default:""},valueAccessor:{type:String,default:""},defaultValue:{type:Number,default:0}},data:function(){return{results:[],weekDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}},computed:{dateParser:function(){return this.dateFormat?n.T(this.dateFormat):function(t){return new Date(t)}}},methods:{drawViz:function(){var t=this,e=new o.RowChart("#week-chart-".concat(this.graphId));n.H("#week-chart-".concat(this.graphId," a.reset")).on("click",(function(){e.filterAll(),o.redrawAll()}));var r=this.ndx.dimension((function(e){var r=t.dateParser(e[t.dateAccessor]).getDay();return"".concat(t.weekDays[r])})),c=this.valueAccessor?r.group().reduceSum((function(e){return e[t.valueAccessor]})):r.group().reduceCount(),l=n.H("#week-chart-".concat(this.graphId)).node().getBoundingClientRect().width;e.width(l).height(this.height).margins({top:10,left:10,right:10,bottom:20}).group(c).dimension(r).ordinalColors(this.colorPalette).label((function(t){return t.key})).title((function(t){return t.value})).elasticX(!0).xAxis().ticks(4),e.ordering((function(e){return t.weekDays.indexOf(e.key)})),o.renderAll()}}},d=r(38),h=r(44),f=r.n(h),v=r(968),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",[r("div",{attrs:{id:"week-chart-"+t.graphId}},[t.title?r("strong",[t._v(t._s(t.title))]):r("strong",{directives:[{name:"t",rawName:"v-t",value:t.$tc("Day",1),expression:"$tc('Day', 1)"}]}),t._v(" "),r("a",{directives:[{name:"t",rawName:"v-t",value:"reset",expression:"'reset'"}],staticClass:"reset",staticStyle:{display:"none"}}),t._v(" "),r("p",{staticClass:"filters"},[r("span",{directives:[{name:"t",rawName:"v-t",value:"Current filter",expression:"'Current filter'"}]}),t._v(" "),r("span",{staticClass:"filter"})])])])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VContainer:v.a})}}]);