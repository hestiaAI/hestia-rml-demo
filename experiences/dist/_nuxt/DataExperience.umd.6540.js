"use strict";(("undefined"!=typeof self?self:this).webpackChunkDataExperience=("undefined"!=typeof self?self:this).webpackChunkDataExperience||[]).push([[6540],{56540:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(74097),o={name:"ChartViewTwitterInferredInfos",components:{UnitFilterableTable:n(44657).Z},mixins:[r.default],computed:{v(){const[e]=this.values;return Object.fromEntries(Object.entries(e).map((([e,t])=>{try{return[e,JSON.parse(t)]}catch{return[e,t]}})))},items(){const{v:e}=this;return[{id:"gender",value:e?.gender||"Unknown"},{id:"age",value:e?.age||"Unknown"},{id:"languages",value:e?.languages.map((e=>e.language))||"Unknown"},{id:"numAudiences",value:e?.numAudiences}]},tables(){const{v:e}=this;return[{id:"interests",headers:[{text:"Inferred Interests",value:"v"}],values:e.interests.map((e=>({v:e.name})))},{id:"lookalikeAdvertisers",headers:[{text:"Look-alike Advertisers",value:"v"}],values:e.lookalikeAdvertisers.map((e=>({v:e})))},{id:"advertisers",headers:[{text:"Advertisers",value:"v"}],values:e.advertisers.map((e=>({v:e})))},{id:"shows",headers:[{text:"Shows",value:"v"}],values:e.shows.map((e=>({v:e})))},{id:"locationHistory",headers:[{text:"Location History",value:"v"}],values:e.locationHistory.map((e=>({v:e})))},{id:"partnerInterests",headers:[{text:"Partner Interests",value:"v"}],values:e.partnerInterests.map((e=>({v:e})))}].map((({id:e,headers:t,...n})=>({id:e,headers:t.map((({text:text,...t})=>({text:this.messages.tables?.[e].headers?.[text],...t}))),...n})))}}},l=(0,n(1001).Z)(o,(function(){var e=this,t=e._self._c;return t("VContainer",[t("VRow",[t("VCol",{attrs:{cols:"12",md:"6"}},[t("h3",{domProps:{textContent:e._s(e.messages.itemsTitle)}}),t("VList",e._l(e.items,(function({id:n,value:r}){return t("VListItem",{key:n},[t("VListItemContent",[t("div",{staticClass:"d-flex justify-space-between"},[t("span",{domProps:{textContent:e._s(e.messages.items?.[n].title)}}),Array.isArray(r)?t("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},e._l(r,(function(n){return t("VChip",{key:n,staticClass:"ma-2",attrs:{label:""}},[e._v(" "+e._s(n)+" ")])})),1):t("span",{domProps:{textContent:e._s(r)}})])]),t("VListItemIcon",[e.messages.items?.[n].hint?t("VTooltip",{attrs:{left:"","max-width":"200"},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:r}){return[t("VHover",[t("VIcon",e._g(e._b({attrs:{color:""}},"VIcon",r,!1),n),[e._v(" $vuetify.icons.mdiInformationOutline ")])],1)]}}],null,!0)},[t("span",{domProps:{textContent:e._s(e.messages.items?.[n].hint)}})]):e._e()],1)],1)})),1)],1)],1),t("VRow",[t("VCol",{attrs:{cols:"12"}},[t("h3",{domProps:{textContent:e._s(e.messages.tablesTitle)}})])],1),t("VRow",e._l(e.tables,(function({id:n,headers:r,values:o}){return t("VCol",{key:n,attrs:{cols:"12",md:"6",align:"center"}},[t("VCard",{attrs:{"max-width":"",height:"100%"}},[t("VCardTitle",[e._v(" "+e._s(e.messages.tables?.[n].title)+" "),t("VSpacer"),e.messages.tables?.[n].hint?t("VTooltip",{attrs:{left:"","max-width":"200"},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:r}){return[t("VIcon",e._g(e._b({attrs:{color:""}},"VIcon",r,!1),n),[e._v(" $vuetify.icons.mdiInformationOutline ")])]}}],null,!0)},[t("span",{domProps:{textContent:e._s(e.messages.tables?.[n].hint)}})]):e._e()],1),t("VCardText",[t("UnitFilterableTable",e._b({},"UnitFilterableTable",{headers:r,items:o},!1))],1)],1)],1)})),1)],1)}),[],!1,null,null,null).exports}}]);