"use strict";(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[2622,1297],{2622:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(60194);function o(t){return function(){return t}}var c=function(t,e,n,r){var c,l,f,d,h,y,x,v,w,m,k=o(.1),j=!0,A=o(Math.min((n-t)/2,(r-e)/2));function N(t,e,n,r,o){return(t-e)*Math.min(2,Math.abs(t-e)/t)*n*o}function z(t){for(var e,i=0,n=c.length;i<n;++i)(e=c[i]).x<d[i]+v[i]||e.x>h[i]-v[i]||e.y<y[i]+v[i]||e.y>x[i]-v[i]?(e.vx+=N(w[i],e.x,l[i],v[i],t),e.vy+=N(m[i],e.y,f[i],v[i],t)):e.y<y[i]+v[i]||(e.y,x[i],v[i]),j&&(e.x>=h[i]&&(e.vx+=h[i]-e.x),e.x<=d[i]&&(e.vx+=d[i]-e.x),e.y>=x[i]&&(e.vy+=x[i]-e.y),e.y<=y[i]&&(e.vy+=y[i]-e.y))}function D(){if(c){var i,o=c.length;for(l=new Array(o),f=new Array(o),d=new Array(o),y=new Array(o),h=new Array(o),x=new Array(o),m=new Array(o),w=new Array(o),v=new Array(o),i=0;i<o;++i)l[i]=isNaN(d[i]=+t(c[i],i,c))||isNaN(h[i]=+n(c[i],i,c))?0:+k(c[i],i,c),f[i]=isNaN(y[i]=+e(c[i],i,c))||isNaN(x[i]=+r(c[i],i,c))?0:+k(c[i],i,c),w[i]=d[i]+(h[i]-d[i])/2,m[i]=y[i]+(x[i]-y[i])/2,v[i]=+A(c[i],i,c)}}return"function"!=typeof t&&(t=o(null==t?-100:+t)),"function"!=typeof n&&(n=o(null==n?100:+n)),"function"!=typeof e&&(e=o(null==e?-100:+e)),"function"!=typeof r&&(r=o(null==r?100:+r)),z.initialize=function(t){c=t,D()},z.x0=function(e){return arguments.length?(t="function"==typeof e?e:o(+e),D(),z):t},z.x1=function(t){return arguments.length?(n="function"==typeof t?t:o(+t),D(),z):n},z.y0=function(t){return arguments.length?(e="function"==typeof t?t:o(+t),D(),z):e},z.y1=function(t){return arguments.length?(r="function"==typeof t?t:o(+t),D(),z):r},z.strength=function(t){return arguments.length?(k="function"==typeof t?t:o(+t),D(),z):k},z.border=function(t){return arguments.length?(A="function"==typeof t?t:o(+t),D(),z):A},z.hardBoundary=function(t){return arguments.length?(j=t,z):j},z},l={name:"NetworkXGraph",mixins:[n(21297).default],props:{width:{type:Number,default:()=>900},height:{type:Number,default:()=>500},padding:{type:Number,default:()=>0},margin:{type:Number,default:()=>0}},data(){return{jsonData:this.values[0].jsonData||{nodes:[],links:{}}}},methods:{drawViz(){r.select("#"+this.graphId+" svg").remove(),this.svg=r.select("#"+this.graphId).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 "+this.width+" "+this.height).style("padding",this.padding).style("margin",this.margin).classed("svg-content",!0),this.updateViz()},updateViz(){const t=r.min(this.jsonData.nodes,(function(t){return+t.size})),e=r.max(this.jsonData.nodes,(function(t){return+t.size})),n=r.scaleLinear().domain([t,e]).range([10,40]),o=r.forceSimulation().force("boundary",c(30,30,this.width-30,this.height-30)).force("link",r.forceLink().id((function(t){return t.id}))).force("center",r.forceCenter(this.width/2,this.height/2)).force("charge",r.forceManyBody().strength(-400)).force("collide",r.forceCollide().radius((function(t){return 16+n(t.size)})).iterations(2)),link=this.svg.append("g").attr("id","links").selectAll("line").data(this.jsonData.links).enter().append("line").attr("stroke-width",(t=>t.weight)).attr("stroke","grey").attr("fill","none"),l=this.svg.append("g").attr("class","nodes").selectAll("g").data(this.jsonData.nodes).enter().append("g");l.append("circle").attr("r",(t=>n(t.size))).attr("fill",(t=>t.color)).attr("stroke","white").attr("stroke-opacity",1).attr("stroke-width",(function(t){return.05*n(t.size)})).call(r.drag().on("start",(function(t){t.active||o.alphaTarget(.3).restart();t.subject.fx=t.subject.x,t.subject.fy=t.subject.y})).on("drag",(function(t){t.subject.fx=t.x,t.subject.fy=t.y})).on("end",(function(t){t.active||o.alphaTarget(0);t.subject.fx=null,t.subject.fy=null}))),l.append("text").text((t=>t.id)).attr("x",0).attr("y",3).attr("text-anchor","middle").attr("text-baseline","middle").style("user-select","none").style("pointer-events","none"),l.append("title").text((t=>t.id)),o.nodes(this.jsonData.nodes).on("tick",(function(){l.attr("transform",(function(t){return"translate("+t.x+","+t.y+")"})),link.attr("x1",(function(t){return t.source.x})).attr("y1",(function(t){return t.source.y})).attr("x2",(function(t){return t.target.x})).attr("y2",(function(t){return t.target.y}))})),o.force("link").links(this.jsonData.links)}}},f=(0,n(1001).Z)(l,(function(){var t=this,e=t._self._c;return e("VContainer",[e("div",{staticStyle:{position:"relative"},attrs:{id:t.graphId}}),e("div",[e("p",[t._v(" "+t._s(t.$t("directed-graph-disclaimer"))+" ")])])])}),[],!1,null,null,null).exports},21297:function(t,e,n){n.r(e);var r=n(40290),o=n(18651),c=n(659);const l={props:{values:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]},messages:{type:Object,default:()=>({})}},data(){return{graphId:"graph_"+this._uid,totalCount:0,filterCount:0}},mounted(){this.drawViz()},watch:{values(){this.drawViz()}},methods:{drawViz(){},createTextFilterWidget(t,e="Search"){const n=new r.TextFilterWidget(t);return n.placeHolder(this.$tev(e,e)),n}}};e.default=(0,o.Z)(l,c.Z)}}]);