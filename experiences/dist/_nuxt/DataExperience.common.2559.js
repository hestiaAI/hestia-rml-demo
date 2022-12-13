"use strict";(("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience=("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience||[]).push([[2559,5416],{12559:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(74097),o=r(45506),l=r(85416),c=r(23096),h=r(33242),d={components:{ChartViewTopRow:l.default,UnitKepler:c.Z,UnitFilterableTable:h.Z},mixins:[n.default],props:{keplerConfig:{type:Object,default:()=>null}},data:()=>({filteredRows:[]}),computed:{total(){return this.values.length},get_name_transport(){const t=this.values.map((t=>({name_of_transport:t.transitPath.substr(0,t.transitPath.indexOf(":")),k:t.k})));return(0,o.a)(t,["name_of_transport"],[])},header_name_transport(){return Object.keys(this.get_name_transport[0])},get_trips(){const t=this.values.map((t=>({...t,start_end:t.transitPath.substr(t.transitPath.indexOf(":")+1)})));return(0,o.a)(t,["start_end"],["startLatitude","startLongitude","endLatitude","endLongitude"])},header_trips(){return Object.keys(this.get_trips[0])},keplerData(){return{fields:this.header_trips.map((t=>({name:t}))),rows:this.get_trips.map((t=>this.header_trips.map((e=>t[e]))))}},keplerArgs(){return{keplerData:this.keplerData,config:this.keplerConfig}}},methods:{onTableFilter(t){this.filteredRows=t}}},f=(0,r(1001).Z)(d,(function(){var t=this,e=t._self._c;return t.values.length>0?e("VContainer",[e("VRow",[e("VCol",{attrs:{cols:"12"}},[0===t.total?e("p",{directives:[{name:"t",rawName:"v-t",value:"records-none",expression:"'records-none'"}],staticClass:"text-subtitle-2"}):e("p",{staticClass:"text-subtitle-2"},[t._v(" This shows the public tansportation that was used by at least k participants: ")])])],1),t.total>0?[e("VRow",[e("VCol",{attrs:{cols:"12"}},[e("ChartViewTopRow",t._b({attrs:{"y-accessor":"name_of_transport","x-accessor":"k","x-label":"k","count-label":"public tansportation that was used by at least k participants","y-label":"transport line"}},"ChartViewTopRow",{headers:t.header_name_transport,values:t.get_name_transport},!1))],1)],1),e("VRow",[e("VCol",{attrs:{cols:"12"}},[e("p",[t._v(" This map shows the trips made in public transport by at least k participants: ")]),e("UnitKepler",{attrs:{args:t.keplerArgs}})],1)],1),e("VRow",[e("VCol",{attrs:{cols:"12"}},[e("UnitFilterableTable",t._b({on:{"current-items":t.onTableFilter}},"UnitFilterableTable",{headers:t.header_trips,items:t.get_trips},!1))],1)],1)]:t._e()],2):t._e()}),[],!1,null,null,null).exports},85416:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var n=r(60194),o=r(60171),l={mixins:[r(74097).default],props:{yAccessor:{type:String,required:!0},xAccessor:{type:String,default:""},dateAccessor:{type:String,default:""},yAxisMaxTickLength:{type:Number,default:20},margin:{type:Number,default:5},adjVertical:{type:Array,default:()=>[5,50]},adjHorizontal:{type:Array,default:()=>[150,150]},countLabel:{type:String,default:"records"},xLabel:{type:String,default:"records"},yLabel:{type:String,default:"companies"},dateFormat:{type:String,default:""}},data:()=>({total:0,minDate:null,maxDate:null,records:[],topKSlider:null,othersCheck:!1}),computed:{validProps(){let t=!0;return this.values.length?(this.dateAccessor&&!Object.keys(this.values[0]).includes(this.dateAccessor)&&(console.error("Date Accessor not found"),t=!1),Object.keys(this.values[0]).includes(this.yAccessor)||(console.error("Y Accessor not found"),t=!1),this.xAccessor&&!Object.keys(this.values[0]).includes(this.xAccessor)&&(console.error("X Accessor not found"),t=!1),t):(console.error("Values is empty"),t=!1,t)}},methods:{k:t=>`chart-view.top-row.${t}`,draw(){const t=this.records.slice(0,this.othersCheck?this.topKSlider-1:this.topKSlider);this.othersCheck&&(t.push({key:"Others",value:n.sum(this.records.slice(this.topKSlider),(t=>t.value))}),t.sort((function(a,b){return n.descending(a.value,b.value)}))),this.xScale.domain(n.extent(t,(t=>t.value))),this.yScale.domain(t.map((function(t){return t.key})));const e=this.svg.selectAll(".bars").data(t,(t=>t.key)),r=this;e.enter().append("rect").attr("class","bars").attr("x",5).attr("y",(t=>this.yScale(t.key))).attr("width",0).attr("height",this.yScale.bandwidth()).attr("fill",this.colorPalette[0]).on("mouseover",(function(t,e){n.select(this).style("opacity",.7),n.select(this.parentNode).append("text").attr("class","barsLabel").text(e.value).attr("text-anchor","start").attr("alignment-baseline","middle").attr("x",r.xScale(e.value)+15).attr("y",r.yScale(e.key)+r.yScale.bandwidth()/2).style("font-size","0.8rem").style("font-weight","bold").style("fill","#0A0A0A")})).on("mouseleave",(function(t,e){n.select(this).style("opacity",1),n.select(".barsLabel").remove()})).merge(e).transition().duration(1e3).delay(200).attr("y",(t=>this.yScale(t.key))).attr("width",(t=>this.xScale(t.value)+5)).attr("height",this.yScale.bandwidth()),e.exit().transition().duration(1e3).attr("width",0).remove(),n.select(".yAxis").transition().duration(1e3).delay(200).call(this.yAxis),n.selectAll(".yAxis g text").transition().duration(1e3).delay(200).style("font-size",1.8/Math.log(this.topKSlider)+"rem"),n.select(".xAxis").transition().duration(1e3).delay(200).call(this.xAxis)},drawViz(){if(!this.validProps)return;const t=this.dateFormat?n.timeParse(this.dateFormat):t=>new Date(t),e=t=>this.$d(t,"dateOnly",this.$i18n.locale);if(this.dateAccessor){const[r,o]=n.extent(this.values,(e=>t(e[this.dateAccessor])));if(!r||!o)throw new Error("Unable to parse date fields");this.minDate=e(r),this.maxDate=e(o)}this.total=this.xAccessor?n.sum(this.values,(t=>t[this.xAccessor])):this.values.length,this.topKSlider=Math.min(20,this.total),this.records=(0,o.b1)().key((t=>t[this.yAccessor])).rollup((t=>n.sum(t,(t=>this.xAccessor?t[this.xAccessor]:1)))).entries(this.values).sort((function(a,b){return n.descending(a.value,b.value)}));n.select("#"+this.graphId+" svg").remove(),this.svg=n.select("#"+this.graphId).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","-"+this.adjHorizontal[0]+" -"+this.adjVertical[0]+" "+(300+n.sum(this.adjHorizontal))+" "+(380+n.sum(this.adjVertical))).style("padding",this.padding).style("margin",this.margin).classed("svg-content",!0),this.xScale=n.scaleLinear().range([0,300]),this.yScale=n.scaleBand().range([0,380]).paddingInner(.1);const r=n.axisLeft(this.yScale).tickFormat((t=>{return e=t,r=this.yAxisMaxTickLength,e.length>r?e.slice(0,r)+"..":e;var e,r})).tickSizeOuter(0),l=n.axisBottom(this.xScale).ticks(4);this.xAxis=l,this.yAxis=r,this.svg.append("g").attr("class","xAxis").attr("transform","translate(0,380)").call(l).append("text").attr("dy",".75em").attr("y",30).attr("x",150).style("text-anchor","middle").text(this.xLabel),this.svg.append("g").attr("class","yAxis").call(r),this.draw()}}},c=(0,r(1001).Z)(l,(function(){var t=this,e=t._self._c;return t.validProps?e("VContainer",[e("VRow",{attrs:{dense:""}},[e("VCol",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[e("i18n",{attrs:{tag:"p",path:t.k("heading")},scopedSlots:t._u([{key:"total",fn:function(){return[e("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s(t.total)}})]},proxy:!0},{key:"countLabel",fn:function(){return[t._v(" "+t._s(t.countLabel)+" ")]},proxy:!0},{key:"minDate",fn:function(){return[e("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s(t.minDate)}})]},proxy:!0},{key:"maxDate",fn:function(){return[e("span",{staticClass:"font-weight-bold",domProps:{textContent:t._s(t.maxDate)}})]},proxy:!0}],null,!1,923081494)})],1)],1),e("VRow",{attrs:{justify:"center",dense:""}},[e("VCol",{staticStyle:{position:"relative"},attrs:{cols:"12",md:"7"}},[e("VMenu",{attrs:{"offset-x":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:n}){return[e("VBtn",t._g(t._b({staticStyle:{position:"absolute",right:"0","z-index":"10"},attrs:{icon:""}},"VBtn",n,!1),r),[e("VIcon",{attrs:{small:""}},[t._v(" $vuetify.icons.mdiCog ")])],1)]}}],null,!1,2520745846)},[e("VCard",{staticStyle:{width:"300px"}},[e("VCardTitle",[t._v(t._s(t.$t("Settings")))]),e("VDivider"),e("VCardText",[e("VRow",{staticClass:"mt-3"},[e("VCol",[e("VSlider",{attrs:{label:`N° ${t.$t("of")} ${t.yLabel}`,"thumb-color":"primary","thumb-label":"always",min:"1",max:Math.min(t.total,50),"hide-details":"",dense:""},on:{change:t.draw},model:{value:t.topKSlider,callback:function(e){t.topKSlider=e},expression:"topKSlider"}})],1)],1),e("VRow",[e("VCol",[e("VCheckbox",{attrs:{dense:"",label:t.$t("Display Others"),"hide-details":""},on:{change:t.draw},model:{value:t.othersCheck,callback:function(e){t.othersCheck=e},expression:"othersCheck"}})],1)],1)],1)],1)],1),e("div",{staticStyle:{position:"relative"},attrs:{id:t.graphId}})],1)],1)],1):t._e()}),[],!1,null,"be13dd44",null).exports},60171:function(t,e,r){r.d(e,{XP:function(){return k},b1:function(){return c}});var n="$";function o(){}function map(object,t){var map=new o;if(object instanceof o)object.each((function(t,e){map.set(e,t)}));else if(Array.isArray(object)){var e,i=-1,r=object.length;if(null==t)for(;++i<r;)map.set(i,object[i]);else for(;++i<r;)map.set(t(e=object[i],i,object),e)}else if(object)for(var n in object)map.set(n,object[n]);return map}o.prototype=map.prototype={constructor:o,has:function(t){return n+t in this},get:function(t){return this[n+t]},set:function(t,e){return this[n+t]=e,this},remove:function(t){var e=n+t;return e in this&&delete this[e]},clear:function(){for(var t in this)t[0]===n&&delete this[t]},keys:function(){var t=[];for(var e in this)e[0]===n&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)e[0]===n&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)e[0]===n&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)e[0]===n&&++t;return t},empty:function(){for(var t in this)if(t[0]===n)return!1;return!0},each:function(t){for(var e in this)e[0]===n&&t(this[e],e.slice(1),this)}};var l=map;function c(){var t,e,r,n=[],o=[];function c(r,o,h,d){if(o>=n.length)return null!=t&&r.sort(t),null!=e?e(r):r;for(var f,y,m,i=-1,v=r.length,x=n[o++],k=l(),_=h();++i<v;)(m=k.get(f=x(y=r[i])+""))?m.push(y):k.set(f,[y]);return k.each((function(t,e){d(_,e,c(t,o,h,d))})),_}function m(map,t){if(++t>n.length)return map;var r,l=o[t-1];return null!=e&&t>=n.length?r=map.entries():(r=[],map.each((function(e,n){r.push({key:n,values:m(e,t)})}))),null!=l?r.sort((function(a,b){return l(a.key,b.key)})):r}return r={object:function(t){return c(t,0,h,d)},map:function(t){return c(t,0,f,y)},entries:function(t){return m(c(t,0,f,y),0)},key:function(t){return n.push(t),r},sortKeys:function(t){return o[n.length-1]=t,r},sortValues:function(e){return t=e,r},rollup:function(t){return e=t,r}}}function h(){return{}}function d(object,t,e){object[t]=e}function f(){return l()}function y(map,t,e){map.set(t,e)}function m(){}var v=l.prototype;function x(object,t){var e=new m;if(object instanceof m)object.each((function(t){e.add(t)}));else if(object){var i=-1,r=object.length;if(null==t)for(;++i<r;)e.add(object[i]);else for(;++i<r;)e.add(t(object[i],i,object))}return e}m.prototype=x.prototype={constructor:m,has:v.has,add:function(t){return this[n+(t+="")]=t,this},remove:v.remove,clear:v.clear,values:v.keys,size:v.size,empty:v.empty,each:v.each};function k(map){var t=[];for(var e in map)t.push(e);return t}}}]);