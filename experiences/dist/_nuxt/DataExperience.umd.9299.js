"use strict";(("undefined"!=typeof self?self:this).webpackChunkDataExperience=("undefined"!=typeof self?self:this).webpackChunkDataExperience||[]).push([[9299],{79299:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(83068),l=r(68004),h=r(16952),o=r(43434),m=r(44657),d={name:"UnitFileExplorerViewerXlsx",components:{BaseButton:o.Z,UnitFilterableTable:m.Z},mixins:[l.Z,h.Z],data:()=>({loading:!0,error:!1,file:null,sheets:{},headers:[],items:[]}),watch:{filename:{async handler(e){await this.getContentFromFilename(e)},immediate:!0}},methods:{k:e=>`file-explorer.viewer.xlsx.${e}`,async getContentFromFilename(e){this.setLoading(!0),this.file=this.fileManager.fileDict[e];try{const e=(await(0,n.Z)(this.file,{getSheets:!0})).map((s=>s.name)),t=await Promise.all(e.map((s=>(0,n.Z)(this.file,{sheet:s}))));this.sheets=Object.fromEntries(t.map(((t,i)=>{const r=Array.from({length:Math.max(...t.map((e=>e.length)))},((e,t)=>"Column "+(t+1))),n=t.map((e=>Object.fromEntries(r.map(((t,r)=>[t,e[r]])))));return[e[i],{headers:r,items:n}]}))),this.setSheet(e[0]),this.error=!1}catch(e){this.error=!0}this.setLoading(!1)},setSheet(e){this.headers=this.sheets[e].headers,this.items=this.sheets[e].items}}},c=(0,r(1001).Z)(d,(function(){var e=this,t=e._self._c;return e.loading?t("div",{directives:[{name:"t",rawName:"v-t",value:"Loading",expression:"'Loading'"}]}):e.error?t("div",[t("p",{directives:[{name:"t",rawName:"v-t",value:e.k("errorText"),expression:"k('errorText')"}]})]):t("div",[e._l(e.sheets,(function(r,n,i){return t("BaseButton",{key:i,attrs:{text:n},on:{click:t=>e.setSheet(n)}})})),t("UnitFilterableTable",e._b({},"UnitFilterableTable",{headers:e.headers,items:e.items},!1))],2)}),[],!1,null,null,null).exports}}]);