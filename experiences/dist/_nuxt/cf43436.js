(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{958:function(t,e,r){"use strict";r.r(e);var n=r(950);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}}}]);