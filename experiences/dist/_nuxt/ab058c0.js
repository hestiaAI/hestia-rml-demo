(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1928:function(e,t,n){"use strict";n.r(t);n(48);var l={props:{items:{type:Array,default:function(){return[]}},label:{type:String,default:""}},data:function(){return{selectedItems:[]}},computed:{selectAllItems:function(){return this.selectedItems.length===this.items.length},selectSomeItems:function(){return this.selectedItems.length>0&&!this.selectAllItems},icon:function(){return this.selectAllItems?"$vuetify.icons.mdiCloseBox":this.selectSomeItems?"$vuetify.icons.mdiMinusBox":"$vuetify.icons.mdiCheckboxBlankOutline"}},methods:{toggle:function(){var e=this;this.$nextTick((function(){e.selectAllItems?e.selectedItems=[]:e.selectedItems=e.items.slice()}))}}},c=n(33),o=n(34),m=n.n(o),r=n(656),d=n(680),I=n(271),f=n(174),V=n(277),h=n(116),v=n(683),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VContainer",{attrs:{fluid:""}},[n("VSelect",e._b({attrs:{multiple:""},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[n("VListItem",{attrs:{ripple:""},on:{mousedown:function(e){e.preventDefault()},click:e.toggle}},[n("VListItemAction",[n("VIcon",{attrs:{color:e.selectedItems.length>0?"indigo darken-4":""}},[e._v("\n            "+e._s(e.icon)+"\n          ")])],1),e._v(" "),n("VListItemContent",[n("VListItemTitle",[e._v(" Select All ")])],1)],1),e._v(" "),n("VDivider",{staticClass:"mt-2"})]},proxy:!0}]),model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}},"VSelect",{label:e.label,items:e.items},!1))],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VContainer:r.a,VDivider:d.a,VIcon:I.a,VListItem:f.a,VListItemAction:V.a,VListItemContent:h.a,VListItemTitle:h.c,VSelect:v.a})}}]);