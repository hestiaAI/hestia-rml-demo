(window.webpackJsonp=window.webpackJsonp||[]).push([[26,68],{1001:function(e,t,n){"use strict";n.r(t);var r=n(993);t.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",n=new r.TextFilterWidget(e);return n.placeHolder(this.$t(t)),n}}}},1564:function(e,t,n){"use strict";n.r(t);n(16),n(3),n(72),n(40),n(589),n(8),n(62),n(39),n(60);var r={mixins:[n(1001).default],data:function(){return{categoriesSelected:[],inferencesSelected:[],inferenceTypes:["True","False","Others"]}},computed:{items:function(){var e=this;return this.values.map((function(e){var t="true"===e.inference?"True":"No"===e.inference?"False":"Others",n=t;return"Others"===n&&(n=parseFloat(e.inference).toFixed(2)),{type:e.typeOfInference,category:e.category,description:e.description,inferenceValue:n,inferenceType:t,color:"True"===t?"#29AA24":"False"===t?"#E52229":"#F2F2F2"}})).filter((function(t){return 0===e.categoriesSelected.length||e.categoriesSelected.includes(t.category)})).filter((function(t){return 0===e.inferencesSelected.length||e.inferencesSelected.includes(t.inferenceType)}))},categories:function(){return this.values.map((function(e){return e.category}))}},methods:{drawViz:function(){}}},c=(n(1916),n(38)),l=n(44),o=n.n(l),d=n(1918),f=n(386),v=n(1002),_=n(978),h=n(1085),V=n(1111),m=n(970),C=n(958),y=n(962),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VContainer",[n("VRow",[n("span",{staticClass:"overline"},[e._v(" Total inferences: "+e._s(e.values.length))]),e._v(" "),n("VSpacer"),e._v(" "),n("VAutocomplete",{staticClass:"pa-4",attrs:{multiple:"",chips:"",dense:"",label:"Filter by Category",items:e.categories,"menu-props":{closeOnClick:!1}},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.item,c=t.index;return[c<3?n("VChip",{staticClass:"ma-1"},[n("span",[e._v("\n            "+e._s(r)+"\n          ")])]):e._e(),e._v(" "),3===c?n("span",{staticClass:"grey--text caption"},[e._v("\n          (+"+e._s(e.categoriesSelected.length-3)+" others)\n        ")]):e._e()]}}]),model:{value:e.categoriesSelected,callback:function(t){e.categoriesSelected=t},expression:"categoriesSelected"}}),e._v(" "),n("VAutocomplete",{staticClass:"pa-4",attrs:{multiple:"",chips:"",dense:"",label:"Filter by Inference",items:e.inferenceTypes,"menu-props":{closeOnClick:!1}},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.item,c=t.index;return[c<3?n("VChip",{staticClass:"ma-1"},[n("span",[e._v("\n            "+e._s(r)+"\n          ")])]):e._e(),e._v(" "),3===c?n("span",{staticClass:"grey--text caption"},[e._v("\n          (+"+e._s(e.inferencesSelected.length-3)+" others)\n        ")]):e._e()]}}]),model:{value:e.inferencesSelected,callback:function(t){e.inferencesSelected=t},expression:"inferencesSelected"}})],1),e._v(" "),n("VRow",{staticClass:"ma-6"},e._l(e.items,(function(t,i){return n("VCol",{key:i,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("VCard",{staticClass:"d-flex flex-column",attrs:{height:"100%"}},[n("VCardTitle",[e._v(e._s(t.type))]),e._v(" "),n("VCardSubtitle",[e._v(e._s(t.category))]),e._v(" "),n("VCardText",[e._v(e._s(t.description))]),e._v(" "),n("VSpacer"),e._v(" "),n("VCardActions",{staticClass:"ma-3 overline d-flex justify-space-between"},[n("div",[e._v("Inferred")]),e._v(" "),n("div",[n("VAvatar",{staticClass:"mr-1",attrs:{size:"16",color:t.color}}),e._v("\n            "+e._s(t.inferenceValue)+"\n          ")],1)])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VAutocomplete:d.a,VAvatar:f.a,VCard:v.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VChip:h.a,VCol:V.a,VContainer:m.a,VRow:C.a,VSpacer:y.a})},1865:function(e,t,n){var content=n(1917);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("f9696a36",content,!0,{sourceMap:!1})},1916:function(e,t,n){"use strict";n(1865)},1917:function(e,t,n){var r=n(25)(!1);r.push([e.i,".v-card__text,.v-card__title{word-break:normal}",""]),e.exports=r}}]);