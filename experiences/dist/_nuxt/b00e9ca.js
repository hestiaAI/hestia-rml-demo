(window.webpackJsonp=window.webpackJsonp||[]).push([[17,78],{1560:function(t,e,n){"use strict";n.r(e);var r=n(86),l=n(344);var c={mixins:[n(990).default],methods:{drawViz:function(){var t=function(){var t=440,e=120;function n(n){n.each((function(data){var svg=l.H(this).append("svg").attr("width",t).attr("height",e),n=e/data.length,c=t/Math.max.apply(Math,Object(r.a)(data));svg.selectAll("rect").data(data).enter().append("rect").attr("x",0).attr("y",(function(t,i){return i*n})).attr("width",(function(t){return t*c+"px"})).attr("height",n).attr("fill","peru"),svg.selectAll("text").data(data).enter().append("text").text((function(t){return t})).attr("x",5).attr("y",(function(t,i){return i*n+16}))}))}return n.width=function(e){return arguments.length?(t=e,n):t},n.height=function(t){return arguments.length?(e=t,n):e},n}().height(200).width(this.$refs.graph.clientWidth);l.H(this.$refs.graph).datum([44,8,15,16,23,42]).call(t)}}},h=c,o=n(40),component=Object(o.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"graph"})}),[],!1,null,null,null);e.default=component.exports},990:function(t,e,n){"use strict";n.r(e);var r=n(1e3);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},messages:{type:Object,default:function(){return{}}}},data:function(){return{graphId:"graph_"+this._uid,totalCount:null,filterCount:null,kViewBlock:this.$store.state.kViewBlock}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{drawViz:function(){},createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",n=new r.TextFilterWidget(t);return n.placeHolder(this.$t(e)),n}}}}}]);