"use strict";(("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience=("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience||[]).push([[6273,5701,6622,5225],{76273:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(60194),l=r(40290),main=r(26641),o=r(74097),c=r(85225),d=r(65701),h=r(96622),f=r(4565);l.config.defaultColors(n.schemePaired);var m={components:{ChartViewVRowWebShare:d.default,ChartViewFilters:h.default,UnitFilterableTable:f.Z},mixins:[o.default],props:{},data:()=>({header:[{text:"Application",value:"app"},{text:"Resource",value:"category"},{text:"Identifier",value:"identifier"},{text:"Timestamp",value:"timestamp"}],results:[]}),methods:{resetAll(){l.filterAll(),l.renderAll()},decodeDefault:t=>t?decodeURIComponent(escape(t)):"Unknown",createTopRowChart(t,e,r){const o=new l.RowChart(`#${e}-chart-${this.graphId}`),d=this.createTextFilterWidget(`#${e}-search-${this.graphId}`);n.select(`#${e}-chart-${this.graphId} a.reset`).on("click",(function(){o.filterAll(),d.filterAll(),l.redrawAll()}));const h=t.dimension((t=>t[e]));d.dimension(t.dimension((t=>t[e].toLowerCase())));const f=h.group().reduceCount(),m=n.select(`#${e}-chart-${this.graphId}`).node().getBoundingClientRect().width;o.width(m).height(400).margins({top:20,left:10,right:10,bottom:20}).group((0,c.removeEmptyBins)(f)).dimension(h).ordinalColors([this.colorPalette[r]]).label((t=>t.key)).data((t=>t.top(20))).title((t=>t.value)).elasticX(!0).xAxis().ticks(4)},createPieChart(t,e,r){const o=new l.PieChart(`#${e}-chart-${this.graphId}`);n.select(`#${e}-chart-${this.graphId} a.reset`).on("click",(function(){o.filterAll(),l.redrawAll()}));const c=t.dimension((t=>t[e])),d=c.group().reduceSum((t=>r?t[r]:1)),h=n.select(`#${e}-chart-${this.graphId}`).node().getBoundingClientRect().width;o.width(h).height(400).radius(h/2.5).innerRadius(h/8).dimension(c).group(d).valueAccessor((t=>t.value)).title((t=>t.key+": "+t.value+" records")).ordinalColors(this.colorPalette),o.on("pretransition",(function(t){t.selectAll("text.pie-slice.pie-label").call((function(t){t.each((function(t){const e=n.select(this);let text=e.text();text.length>14&&(text=text.substring(0,14)+".. "),text.length>0&&(text=text+" ("+l.utils.printSingleValue((t.endAngle-t.startAngle)/(2*Math.PI)*100)+"%)"),e.text(text)}))}))}))},drawViz(){this.results=this.values.map((t=>({app:this.decodeDefault(t.app),category:this.decodeDefault(t.category),identifier:this.decodeDefault(t.identifier),timestamp:this.decodeDefault(t.timestamp)})));const t=(0,main.Z)(this.results);this.createTopRowChart(t,"app",0),this.createPieChart(t,"category");const e=t.groupAll(),r=t.dimension((t=>t));new l.DataCount(`#dc-data-count-${this.graphId}`).crossfilter(t).groupAll(e).html({some:`<strong>%filter-count</strong> ${this.$t("selected-out-of")} <strong>%total-count</strong>  | <a class='resetAll'>${this.$t("Reset All")}</a>`,all:`Total: <strong>%total-count</strong>. ${this.$t("click-graph")}`}).on("pretransition",((t,filter)=>{this.results=r.top(e.value()),n.select(`#dc-data-count-${this.graphId} a.resetAll`).on("click",(()=>{l.filterAll(),l.renderAll()}))})),l.renderAll()}}},x=(0,r(1001).Z)(m,(function(){var t=this,e=t._self._c;return e("VContainer",[e("ChartViewVRowWebShare",[e("VCol",{attrs:{cols:"12"}},[e("VRow",[e("VCol",{attrs:{cols:"12",md:"6"}},[e("div",{attrs:{id:`app-chart-${t.graphId}`}},[e("div",{staticStyle:{display:"flex"}},[e("VTooltip",{attrs:{left:"","max-width":"200"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:n}){return[e("strong",t._g(t._b({},"strong",n,!1),r),[t._v("Application")])]}}])},[e("span",[t._v(t._s(t.$t("chart-view.ios-access.app-info")))])]),e("VSpacer"),e("div",{attrs:{id:`app-search-${t.graphId}`}})],1),e("ChartViewFilters")],1)]),e("VCol",{attrs:{cols:"12",md:"6"}},[e("div",{attrs:{id:`category-chart-${t.graphId}`}},[e("div",{staticStyle:{display:"flex"}},[e("VTooltip",{attrs:{left:"","max-width":"200"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:n}){return[e("strong",t._g(t._b({},"strong",n,!1),r),[t._v("Resource")])]}}])},[e("span",[t._v(t._s(t.$t("chart-view.ios-access.resource-info")))])])],1),e("ChartViewFilters")],1)])],1)],1)],1),e("VRow",[e("div",{staticClass:"dc-data-count",attrs:{id:`dc-data-count-${t.graphId}`}})]),e("VRow",[e("VCol",{attrs:{cols:"12"}},[e("UnitFilterableTable",t._b({},"UnitFilterableTable",{headers:t.header,items:t.results},!1))],1)],1)],1)}),[],!1,null,null,null).exports},65701:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(14226),l=r(25593),o=r(97888),c=r(39474),d={components:{BaseButton:l.Z,BaseButtonDownloadData:o.Z,BaseButtonShare:c.Z},mixins:[(0,n.Z)()]},h=(0,r(1001).Z)(d,(function(){var t=this,e=t._self._c;return e("VRow",t._b({ref:"domToImageNode"},"VRow",t.$attrs,!1),[t._t("default"),e("VCol",{staticClass:"dom-to-image-exclude webshare d-flex",attrs:{cols:"12"}},[e("div",{staticClass:"webshare__export-button"},[e("BaseButton",t._b({attrs:{"mdi-icon":"mdiExport",text:"Export"},on:{click:t.exportImage}},"BaseButton",{progress:t.progress,status:t.status,error:t.error},!1))],1),e("div",{staticClass:"webshare__download-button"},[e("BaseButtonDownloadData",t._b({},"BaseButtonDownloadData",{disabled:!t.blob,extension:t.extension,filename:t.filename,data:t.blob},!1))],1),e("div",{staticClass:"webshare__share-button"},[e("BaseButtonShare",t._b({attrs:{"file-share":""}},"BaseButtonShare",{files:t.files,disabled:!t.files},!1))],1)])],2)}),[],!1,null,null,null).exports},96622:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n={},l=(0,r(1001).Z)(n,(function(){var t=this,e=t._self._c;return e("p",{staticClass:"filters"},[e("span",[t._v(" "+t._s(t.$t("Current filter"))+" "),e("span",{staticClass:"filter"})]),e("a",{directives:[{name:"t",rawName:"v-t",value:"reset",expression:"'reset'"}],staticClass:"reset",staticStyle:{display:"none"}})])}),[],!1,null,null,null).exports},85225:function(t,e,r){r.r(e),r.d(e,{addPiePercentage:function(){return f},addXLabel:function(){return o},addYLabel:function(){return c},createCumulativeGroup:function(){return d},removeEmptyBins:function(){return h}});var n=r(60194),l=r(40290);function o(t,e){const r=t.svg().append("text").attr("class","x-axis-label").attr("text-anchor","middle").attr("x",t.width()/2).attr("y",t.height()-10).text(e),n=r.node().getBBox(),l=t.margins();r.attr("x",l.left+(t.width()-l.left-l.right)/2).attr("y",t.height()-Math.ceil(n.height)/2)}function c(t,e){const r=t.svg().append("text").attr("class","y-axis-label").attr("text-anchor","middle").attr("transform","rotate(-90)").attr("x",-t.height()/2).attr("y",10).text(e),n=r.node().getBBox(),l=t.margins();r.attr("x",-l.top-(t.height()-l.top-l.bottom)/2).attr("y",Math.max(Math.ceil(n.height),l.left-Math.ceil(n.height)-5))}function d(t){return{all(){const e={};return t.all().map((function(t){return e[t.key[0]]?e[t.key[0]]+=t.value:e[t.key[0]]=t.value,{key:t.key,value:e[t.key[0]]}}))}}}function h(t){return{top:e=>t.top(1/0).filter((function(t){return 0!==t.value.count&&0!==t.value})).slice(0,e)}}function f(t){t.selectAll("text.pie-slice.pie-label").call((function(t){t.each((function(t){const e=n.select(this);let text=e.text();text.length>14&&(text=text.substring(0,14)+".. "),text.length>0&&(text=text+" ("+l.utils.printSingleValue((t.endAngle-t.startAngle)/(2*Math.PI)*100)+"%)"),e.text(text)}))}))}}}]);