(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{987:function(t,e,n){"use strict";n.r(e);var l=n(85),r=(n(3),n(1013),n(41),n(1014),n(1015),n(1016),n(1017),n(1018),n(1019),n(1020),n(1021),n(1022),n(1023),n(1024),n(1025),n(1026),n(1027),n(1028),n(1029),n(40),n(16),n(39),n(60),n(46),{name:"UnitFilter",props:{values:{type:Array,default:function(){return[]}}},data:function(){return{filter:Object(l.a)(new Set(this.values))}},computed:{items:function(){return Object(l.a)(new Set(this.values))},selectAll:function(){return this.filter.length===this.items.length},selectSome:function(){return this.filter.length>0&&!this.selectAll},icon:function(){return this.selectAll?"$vuetify.icons.mdiCloseBox":this.selectSome?"$vuetify.icons.mdiMinusBox":"$vuetify.icons.mdiCheckboxBlankOutline"},filterFunction:function(){var t=this;return this.selectAll?null:function(e){return t.filter.includes(e)}}},methods:{toggle:function(){var t=this;this.$nextTick((function(){t.selectAll?t.filter=[]:t.filter=t.items.slice(),t.filterChange()}))},filterChange:function(){this.$emit("filter-change",this.filterFunction)},reset:function(){this.filter=this.items,this.filterChange()}}}),c=n(38),o=n(44),f=n.n(o),h=n(1869),m=n(241),d=n(1042),v=n(1564),V=n(382),_=n(242),C=n(388),w=n(95),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VAutocomplete",{staticClass:"pa-3",attrs:{flat:"","hide-details":"","full-width":"",multiple:"",dense:"",label:t.$t("Search"),items:t.items,"menu-props":{closeOnClick:!0,bottom:!0}},on:{change:t.filterChange},scopedSlots:t._u([{key:"prepend-item",fn:function(){return[n("VListItem",{attrs:{ripple:""},on:{click:t.toggle}},[n("VListItemAction",[n("VIcon",{attrs:{color:t.filter.length>0?"indigo darken-4":""}},[t._v("\n          "+t._s(t.icon)+"\n        ")])],1),t._v(" "),n("VListItemContent",[n("VListItemTitle",[t._v(" "+t._s(t.$t("Select All"))+" ")])],1)],1),t._v(" "),n("VDivider",{staticClass:"mt-2"})]},proxy:!0},{key:"selection",fn:function(e){var l=e.item,r=e.index;return[r<1?n("VChip",{staticClass:"ma-1 pr-1"},[n("span",{staticStyle:{"overflow-x":"hidden",whitespace:"nowrap","text-overflow":"ellipsis"}},[t._v("\n        "+t._s(l)+"\n      ")]),t._v(" "),n("VBtn",{attrs:{icon:"",small:"",right:""},on:{click:function(e){return t.filter.splice(r,1)}}},[n("VIcon",{attrs:{small:""}},[t._v("\n          $vuetify.icon.mdiCloseCircle\n        ")])],1)],1):t._e(),t._v(" "),1===r?n("span",{staticClass:"grey--text caption"},[t._v("\n      (+"+t._s(t.filter.length-1)+" others)\n    ")]):t._e()]}}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAutocomplete:h.a,VBtn:m.a,VChip:d.a,VDivider:v.a,VIcon:V.a,VListItem:_.a,VListItemAction:C.a,VListItemContent:w.a,VListItemTitle:w.c})}}]);