"use strict";(("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience=("undefined"!=typeof self?self:this).webpackChunk_hestia_ai_data_experience||[]).push([[1716],{61716:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var l={mixins:[n(74097).default],data:()=>({showAll:{},maxNbItems:5}),computed:{items(){return Object.keys(this.values[0]).sort().map((e=>{const t=this.values?.[0]?.[e];return{name:this.$tev(this.kViewBlock(e,"names"),e),values:"string"==typeof t||t instanceof String?t.split("; "):[]}})).filter((i=>i.values.length&&i.values[0].length>0))}}},r=(0,n(1001).Z)(l,(function(){var e=this,t=e._self._c;return t("VContainer",[t("VExpansionPanels",{attrs:{accordion:""}},e._l(e.items,(function({name:n,values:l}){return t("VExpansionPanel",{key:n},[t("VExpansionPanelHeader",{scopedSlots:e._u([{key:"default",fn:function({open:r}){return[t("VRow",{attrs:{"no-gutters":""}},[t("VCol",{attrs:{cols:"4"}},[e._v(" "+e._s(n)+": ")]),t("VCol",{staticClass:"text--secondary",attrs:{cols:"8"}},[t("VFadeTransition",{attrs:{"leave-absolute":""}},[r?e._e():t("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},[e._l(l,(function(l,r){return t("div",{key:n+l+r},[r<e.maxNbItems?t("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[e._v(" "+e._s(l)+" ")]):e._e()],1)})),l.length>e.maxNbItems?t("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"secondary"}},[e._v(" "+e._s(e.$tc("plusXOther",l.length-e.maxNbItems))+" ")]):e._e()],2)])],1)],1)]}}],null,!0)}),t("VExpansionPanelContent",[t("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},e._l(l,(function(l,r){return t("div",{key:n+l+r},[t("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[e._v(" "+e._s(l)+" ")])],1)})),0)])],1)})),1)],1)}),[],!1,null,null,null).exports}}]);