"use strict";(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[8779,1297],{18779:function(t,e,l){l.r(e),l.d(e,{default:function(){return o}});var n=l(60194),r={mixins:[l(21297).default],data(){const[t]=this.values,e=new Date(t.birthday),l=new Date(t.lastOnlineUtc);return{slider:[t.ageFilterMin,t.ageFilterMax],items:[{title:"Name",value:t.name},{title:"FullName",value:t.fullName},{title:"Birthdate",value:isNaN(e.getTime())?"":n.timeFormat("%B %d, %Y")(e)},{title:"Last Online",value:isNaN(l.getTime())?"":n.timeFormat("%B %d, %Y at %H:%M:%S")(l)},{title:"Email",value:t.email},{title:"Height (cm)",value:t.heightInCm},{title:"Location",value:t.location},{title:"Custom Location",value:t.customLocation},{title:"Account Status",value:t.status},{title:"Account creation",value:n.timeFormat("%B %d, %Y at %H:%M:%S")(new Date(t.registrationDateUtc))},{title:"Notifications Enabled",value:t.pushNotificationsEnabled},{title:"Last used filters",value:t.lastUsedFilters.split(","),list:!0}],...t}}},o=(0,l(1001).Z)(r,(function(){var t=this,e=t._self._c;return e("VRow",[e("VCol",{attrs:{cols:"12",align:"center"}},[e("VCard",{attrs:{"max-width":"600px"}},[e("VCardText",[e("VRow",t._l(t.items,(function(l){return e("VCol",{key:l.title,attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"overline"},[t._v(" "+t._s(l.title)+" ")]),l.value&&0!==l.value.length?l.list?e("div",[e("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},t._l(l.value,(function(l){return e("VChip",{key:l,staticClass:"ma-2",attrs:{label:""}},[t._v(" "+t._s(l)+" ")])})),1)]):e("p",{staticClass:"font-weight-bold"},[t._v(" "+t._s(l.value)+" ")]):e("p",{staticClass:"font-weight-bold"},[t._v(" Not mentioned ")])])})),1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},21297:function(t,e,l){l.r(e);var n=l(40290),r=l(18651),o=l(659);const d={props:{values:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]},messages:{type:Object,default:()=>({})}},data(){return{graphId:"graph_"+this._uid,totalCount:0,filterCount:0}},mounted(){this.drawViz()},watch:{values(){this.drawViz()}},methods:{drawViz(){},createTextFilterWidget(t,e="Search"){const l=new n.TextFilterWidget(t);return l.placeHolder(this.$tev(e,e)),l}}};e.default=(0,r.Z)(d,o.Z)}}]);