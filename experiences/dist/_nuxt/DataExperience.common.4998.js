"use strict";(("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience=("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience||[]).push([[4998],{34998:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var r=l(74097),n=l(23096),o=l(4565),h={components:{UnitKepler:n.Z,UnitFilterableTable:o.Z},mixins:[r.default],data(){return{filteredRows:this.values,header:[["File","filename"],["Path","path"],["Latitude","latitude"],["Longitude","longitude"],["Description","description"]].map((([text,e])=>({text:text,value:e})))}},computed:{total(){return this.values.length},filtered(){return this.filteredRows.length},keplerData(){return{fields:this.header.map((({text:e})=>({name:e}))),rows:this.filteredRows.map((e=>this.header.map((t=>e[t.value]))))}},keplerArgs(){return{keplerData:this.keplerData,config:null}}},methods:{onTableFilter(e){this.filteredRows=e}}},c=(0,l(1001).Z)(h,(function(){var e=this,t=e._self._c;return e.values.length>0?t("VContainer",[t("VRow",[t("VCol",{attrs:{cols:"12"}},[t("p",{staticClass:"text-h6"},[e._v(" "+e._s(e.$t(e.kViewBlock("graphTitle")))+" ")]),0===e.total?t("p",{staticClass:"text-subtitle-2"},[e._v(" "+e._s(e.$t(e.kViewBlock("graphNoLocation")))+" ")]):t("i18n",{staticClass:"text-subtitle-2",attrs:{path:e.kViewBlock("locations"),tag:"p"},scopedSlots:e._u([{key:"total",fn:function(){return[t("span",{staticClass:"font-weight-bold",domProps:{textContent:e._s(e.total)}})]},proxy:!0}],null,!1,4258389039)})],1)],1),e.total>0?[t("VRow",[t("VCol",{attrs:{cols:"12"}},[t("UnitKepler",{attrs:{args:e.keplerArgs}})],1)],1),t("VRow",[t("VCol",{attrs:{cols:"12"}},[t("UnitFilterableTable",e._b({on:{"current-items":e.onTableFilter}},"UnitFilterableTable",{headers:e.header,items:e.values,kViewBlock:e.kViewBlock},!1))],1)],1)]:e._e()],2):e._e()}),[],!1,null,null,null).exports}}]);