"use strict";(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[9961],{39961:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(46187),f=n(57116),o={name:"UnitFileExplorerViewerUnknown",components:{BaseButton:n(43434).Z},mixins:[r.Z,f.Z],data:()=>({showIframe:!1,href:""}),computed:{iframeClass(){return this.showIframe?"":"d-none"}},watch:{filename(){this.showIframe=!1}},methods:{click(){this.href=this.path},onIframeLoad(){this.href===this.path&&(this.showIframe=!0)}}},h=(0,n(1001).Z)(o,(function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(" Unknown file type "),t("BaseButton",{staticClass:"ml-2",attrs:{small:""},on:{click:e.click}},[e._v(" Try to open it ")])],1),t("iframe",{ref:"iframe",class:e.iframeClass,attrs:{src:e.href,width:"100%",height:"500px"},on:{load:e.onIframeLoad}})])}),[],!1,null,null,null).exports},57116:function(e,t){t.Z={computed:{path(){return URL.createObjectURL(this.fileManager.fileDict[this.filename].blob)}}}}}]);