(window.webpackJsonp=window.webpackJsonp||[]).push([[25,68],{1001:function(t,n,e){"use strict";e.r(n);var r=e(993);n.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",e=new r.TextFilterWidget(t);return e.placeHolder(this.$t(n)),e}}}},1566:function(t,n,e){"use strict";e.r(n);e(16),e(3),e(72),e(411),e(13),e(40),e(21),e(78);var r={mixins:[e(1001).default],data:function(){return{showAll:{},maxNbItems:5}},computed:{items:function(){var t=this;return Object.keys(this.values[0]).sort().map((function(n){return{name:n,values:t.values[0][n].split("; ")}})).filter((function(i){return i.values[0].length>0}))}},methods:{drawViz:function(){}}},l=e(38),o=e(44),c=e.n(o),d=e(1088),f=e(1114),m=e(970),v=e(1927),h=e(1928),x=e(1929),V=e(1930),_=e(410),w=e(958),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VContainer",[e("VExpansionPanels",{attrs:{accordion:""}},t._l(t.items,(function(n){return e("VExpansionPanel",{key:n.name},[e("VExpansionPanelHeader",{scopedSlots:t._u([{key:"default",fn:function(r){var l=r.open;return[e("VRow",{attrs:{"no-gutters":""}},[e("VCol",{attrs:{cols:"4"}},[t._v("\n            "+t._s(n.name)+":\n          ")]),t._v(" "),e("VCol",{staticClass:"text--secondary",attrs:{cols:"8"}},[e("VFadeTransition",{attrs:{"leave-absolute":""}},[l?t._e():e("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},[t._l(n.values,(function(r,l){return e("div",{key:n.name+r+l},[l<t.maxNbItems?e("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[t._v("\n                    "+t._s(r)+"\n                  ")]):t._e()],1)})),t._v(" "),n.values.length>t.maxNbItems?e("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[t._v("\n                  + "+t._s(n.values.length-t.maxNbItems)+" others\n                ")]):t._e()],2)])],1)],1)]}}],null,!0)}),t._v(" "),e("VExpansionPanelContent",[e("div",{staticClass:"d-flex flex-column flex-md-row flex-wrap"},t._l(n.values,(function(r,l){return e("div",{key:n.name+r+l},[e("VChip",{staticClass:"ma-1",attrs:{outlined:"",color:"primary"}},[t._v("\n              "+t._s(r)+"\n            ")])],1)})),0)])],1)})),1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VChip:d.a,VCol:f.a,VContainer:m.a,VExpansionPanel:v.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:x.a,VExpansionPanels:V.a,VFadeTransition:_.d,VRow:w.a})}}]);