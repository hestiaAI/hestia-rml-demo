(window.webpackJsonp=window.webpackJsonp||[]).push([[104,88,124],{1047:function(e,t,r){"use strict";r.r(t);var c=function(e,t){for(var r=-1,c=null==e?0:e.length;++r<c;)if(!t(e[r],r,e))return!1;return!0},n=r(439);var o=function(e,t){var r=!0;return Object(n.a)(e,(function(e,c,n){return r=!!t(e,c,n)})),r},l=r(429),d=r(38),h=r(430);var f=function(e,t,r){var n=Object(d.a)(e)?c:o;return r&&Object(h.a)(e,t,r)&&(t=void 0),n(e,Object(l.a)(t,3))},v=r(1195),w={props:{data:{type:Object,required:!0},allowMissingColumns:{type:Boolean,default:!1}},computed:{hasValidFormat:function(){var e=this,t=f(["items","headers"],(function(t){return Object(v.a)(e.data,t)&&Array.isArray(e.data[t])}));return this.allowMissingColumns?t:t&&f(this.data.items,(function(i){return f(e.data.headers,(function(e){return Object(v.a)(i,e)||Object(v.a)(i,e.value)}))}))},hasData:function(){var e,t;return!!((null===(e=this.data)||void 0===e?void 0:e.headers.length)>0)&&!!((null===(t=this.data)||void 0===t?void 0:t.items.length)>0)}},methods:{k:function(e){return"data-validator.".concat(e)}}},C=r(40),component=Object(C.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.hasValidFormat?e.hasData?[e._t("default")]:r("BaseAlert",[e._v("\n    "+e._s(e.$t(e.k("no-data")))+"\n  ")]):r("BaseAlert",{attrs:{type:"warning"}},[e._v("\n    "+e._s(e.$t(e.k("invalid-format")))+"\n  ")])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseAlert:r(996).default})},1195:function(e,t,r){"use strict";var c=Object.prototype.hasOwnProperty;var n=function(object,e){return null!=object&&c.call(object,e)},o=r(440);t.a=function(object,path){return null!=object&&Object(o.a)(object,path,n)}},1466:function(e,t,r){var content=r(1600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("4001bb48",content,!0,{sourceMap:!1})},1598:function(e,t,r){var map={"./ChartViewAreaTop":[1542,2,3,1,0,52],"./ChartViewAreaTop.vue":[1542,2,3,1,0,52],"./ChartViewBar":[1573,0,17],"./ChartViewBar.vue":[1573,0,17],"./ChartViewDashboard":[1543,2,3,1,0,66],"./ChartViewDashboard.vue":[1543,2,3,1,0,66],"./ChartViewDirectedGraph":[1570,0,18],"./ChartViewDirectedGraph.vue":[1570,0,18],"./ChartViewGenericDateViewer":[1544,2,3,1,0,61],"./ChartViewGenericDateViewer.vue":[1544,2,3,1,0,61],"./ChartViewGenericLocationViewer":[1545,2,3,1,0,69],"./ChartViewGenericLocationViewer.vue":[1545,2,3,1,0,69],"./ChartViewGenericMap":[1546,2,3,1,0,55],"./ChartViewGenericMap.vue":[1546,2,3,1,0,55],"./ChartViewGoogleAggTrips":[1547,2,3,1,0,53],"./ChartViewGoogleAggTrips.vue":[1547,2,3,1,0,53],"./ChartViewGoogleOnePlace":[1574,1,0,4,38,19],"./ChartViewGoogleOnePlace.vue":[1574,1,0,4,38,19],"./ChartViewGroupBar":[1575,0,20],"./ChartViewGroupBar.vue":[1575,0,20],"./ChartViewHeatMapCalendar":[1525,0,21],"./ChartViewHeatMapCalendar.vue":[1525,0,21],"./ChartViewHeatMapHour":[1481,0,22],"./ChartViewHeatMapHour.vue":[1481,0,22],"./ChartViewIOSAccess":[1548,2,3,1,0,56],"./ChartViewIOSAccess.vue":[1548,2,3,1,0,56],"./ChartViewIOSNetworkActivity":[1549,2,3,1,0,57],"./ChartViewIOSNetworkActivity.vue":[1549,2,3,1,0,57],"./ChartViewLinePieTop":[1550,2,3,1,0,58],"./ChartViewLinePieTop.vue":[1550,2,3,1,0,58],"./ChartViewOverviewHer":[1551,2,3,1,0,62],"./ChartViewOverviewHer.vue":[1551,2,3,1,0,62],"./ChartViewOverviewHerTinder":[1552,2,3,1,0,59],"./ChartViewOverviewHerTinder.vue":[1552,2,3,1,0,59],"./ChartViewOverviewInstagramMessage":[1553,2,3,1,0,60],"./ChartViewOverviewInstagramMessage.vue":[1553,2,3,1,0,60],"./ChartViewOverviewLinkedinConnection":[1554,2,3,1,0,67],"./ChartViewOverviewLinkedinConnection.vue":[1554,2,3,1,0,67],"./ChartViewOverviewNetflix":[1555,2,3,1,0,63],"./ChartViewOverviewNetflix.vue":[1555,2,3,1,0,63],"./ChartViewOverviewTwitter":[1556,2,3,1,0,64],"./ChartViewOverviewTwitter.vue":[1556,2,3,1,0,64],"./ChartViewOverviewUber":[1557,2,3,1,0,54],"./ChartViewOverviewUber.vue":[1557,2,3,1,0,54],"./ChartViewSankey":[1569,2,3,6,23],"./ChartViewSankey.vue":[1569,2,3,6,23],"./ChartViewSearchSunburst":[1576,2,3,1,0,24],"./ChartViewSearchSunburst.vue":[1576,2,3,1,0,24],"./ChartViewSunburst":[1524,2,3,0,6,25],"./ChartViewSunburst.vue":[1524,2,3,0,6,25],"./ChartViewTimeSeries":[1577,2,3,1,0,26],"./ChartViewTimeSeries.vue":[1577,2,3,1,0,26],"./ChartViewTimedObservationsViewer":[1558,2,3,1,0,51],"./ChartViewTimedObservationsViewer.vue":[1558,2,3,1,0,51],"./ChartViewTopRow":[1480,0,5,39,27],"./ChartViewTopRow.vue":[1480,0,5,39,27],"./ChartViewTrackerControl":[1559,2,3,1,0,65],"./ChartViewTrackerControl.vue":[1559,2,3,1,0,65],"./ChartViewTrackerControlAgg":[1568,28],"./ChartViewTrackerControlAgg.vue":[1568,28],"./ChartViewVRowWebShare":[1086,2,3,6,29],"./ChartViewVRowWebShare.vue":[1086,2,3,6,29],"./HerMessageActivity":[1578,0,30],"./HerMessageActivity.vue":[1578,0,30],"./HerUserInfos":[1579,0,41,31],"./HerUserInfos.vue":[1579,0,41,31],"./LinkedinAdTargeting":[1580,0,42,32],"./LinkedinAdTargeting.vue":[1580,0,42,32],"./ListLinkedinInference":[1581,1,0,4,43,33],"./ListLinkedinInference.vue":[1581,1,0,4,43,33],"./TinderMessageActivity":[1582,0,36],"./TinderMessageActivity.vue":[1582,0,36],"./TinderUserInfos":[1583,0,5,44,37],"./TinderUserInfos.vue":[1583,0,5,44,37],"./TwitterInferredInfos":[1560,2,3,1,0,68],"./TwitterInferredInfos.vue":[1560,2,3,1,0,68],"./dc/ChartCaller":[1328,16],"./dc/ChartCaller.vue":[1328,16],"./dc/HourChart":[1455,0,9],"./dc/HourChart.vue":[1455,0,9],"./dc/PieChart":[1456,0,10],"./dc/PieChart.vue":[1456,0,10],"./dc/TimelineChart":[1457,0,11],"./dc/TimelineChart.vue":[1457,0,11],"./dc/TopChart":[1458,0,12],"./dc/TopChart.vue":[1458,0,12],"./dc/WeekChart":[1459,0,13],"./dc/WeekChart.vue":[1459,0,13],"./dc/mixin":[1265,0,15],"./dc/mixin.js":[1265,0,15],"./mixin":[1003,0,77],"./mixin.js":[1003,0,77],"./utils/D3Helpers":[1523,78],"./utils/D3Helpers.js":[1523,78],"./utils/DCHelpers":[1156,0,79],"./utils/DCHelpers.js":[1156,0,79]};function c(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],c=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(c)}))}c.keys=function(){return Object.keys(map)},c.id=1598,e.exports=c},1599:function(e,t,r){"use strict";r(1466)},1600:function(e,t,r){var c=r(25)(!1);c.push([e.i,".dc-chart path.dc-symbol,.dc-legend g.dc-legend-item.fadeout{fill-opacity:.5;stroke-opacity:.5}.dc-chart rect.bar{stroke:none;cursor:pointer}.dc-chart rect.bar:focus,.dc-chart rect.bar:hover{fill-opacity:.5}.dc-chart rect.deselected{stroke:none;fill:#ccc}.dc-chart .pie-slice{fill:#fff;font-size:12px;cursor:pointer}.dc-chart .pie-slice.external{fill:#000}.dc-chart .pie-slice:focus,:hover .dc-chart .pie-slice.highlight{fill-opacity:.8}.dc-chart .pie-path{fill:none;stroke-width:2px;stroke:#000;opacity:.4}.dc-chart .selected circle,.dc-chart .selected path{stroke-width:3;stroke:#ccc;fill-opacity:1}.dc-chart .deselected circle,.dc-chart .deselected path{stroke:none;fill-opacity:.5;fill:#ccc}.dc-chart .axis line,.dc-chart .axis path{fill:none;stroke:#000;shape-rendering:crispEdges}.dc-chart .axis text{font:10px sans-serif}.dc-chart .axis .grid-line,.dc-chart .axis .grid-line line,.dc-chart .grid-line,.dc-chart .grid-line line{fill:none;stroke:#ccc;shape-rendering:crispEdges}.dc-chart .brush rect.selection{fill:#4682b4;fill-opacity:.125}.dc-chart .brush .custom-brush-handle{fill:#eee;stroke:#666;cursor:ew-resize}.dc-chart path.line{fill:none;stroke-width:1.5px}.dc-chart path.area{fill-opacity:.3;stroke:none}.dc-chart path.highlight{stroke-width:3;fill-opacity:1;stroke-opacity:1}.dc-chart g.state{cursor:pointer}.dc-chart g.state :focus,.dc-chart g.state :hover{fill-opacity:.8}.dc-chart g.state path{stroke:#fff}.dc-chart g.deselected path{fill:grey}.dc-chart g.deselected text{display:none}.dc-chart g.row rect{fill-opacity:.8;cursor:pointer}.dc-chart g.row rect:focus,.dc-chart g.row rect:hover{fill-opacity:.6}.dc-chart g.row text{fill:#fff;font-size:12px;cursor:pointer}.dc-chart g.dc-tooltip path{fill:none;stroke:grey;stroke-opacity:.8}.dc-chart g.county path{stroke:#fff;fill:none}.dc-chart g.debug rect{fill:#00f;fill-opacity:.2}.dc-chart g.axis text{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.dc-chart .node{font-size:.7em;cursor:pointer}.dc-chart .node :focus,.dc-chart .node :hover{fill-opacity:.8}.dc-chart .bubble{stroke:none;fill-opacity:.6}.dc-chart .highlight{fill-opacity:1;stroke-opacity:1}.dc-chart .fadeout{fill-opacity:.2;stroke-opacity:.2}.dc-chart .box text{font:10px sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.dc-chart .box line{fill:#fff}.dc-chart .box circle,.dc-chart .box line,.dc-chart .box rect{stroke:#000;stroke-width:1.5px}.dc-chart .box .center{stroke-dasharray:3,3}.dc-chart .box .data{stroke:none;stroke-width:0px}.dc-chart .box .outlier{fill:none;stroke:#ccc}.dc-chart .box .outlierBold{fill:red;stroke:none}.dc-chart .box.deselected{opacity:.5}.dc-chart .box.deselected .box{fill:#ccc}.dc-chart .symbol{stroke:none}.dc-chart .heatmap .box-group.deselected rect{stroke:none;fill-opacity:.5;fill:#ccc}.dc-chart .heatmap g.axis text{pointer-events:all;cursor:pointer}.dc-chart .empty-chart .pie-slice{cursor:default}.dc-chart .empty-chart .pie-slice path{fill:#fee;cursor:default}.dc-data-count{float:right;margin-top:15px;margin-right:15px;margin-left:15px}.dc-data-count .filter-count,.dc-data-count .total-count{color:#3182bd;font-weight:700}.dc-legend{font-size:11px}.dc-legend .dc-legend-item{cursor:pointer}.dc-legend g.dc-legend-item.selected{fill:#00f}.dc-hard .number-display{float:none}div.dc-html-legend{overflow-y:auto;overflow-x:hidden;height:inherit;float:right;padding-right:2px}div.dc-html-legend .dc-legend-item-horizontal{display:inline-block;margin-left:5px;margin-right:5px;cursor:pointer}div.dc-html-legend .dc-legend-item-horizontal.selected{background-color:#3182bd;color:#fff}div.dc-html-legend .dc-legend-item-vertical{display:block;margin-top:5px;padding-top:1px;padding-bottom:1px;cursor:pointer}div.dc-html-legend .dc-legend-item-vertical.selected{background-color:#3182bd;color:#fff}div.dc-html-legend .dc-legend-item-color{display:table-cell;width:12px;height:12px}div.dc-html-legend .dc-legend-item-label{line-height:12px;display:table-cell;vertical-align:middle;padding-left:3px;padding-right:3px;font-size:.75em}.dc-html-legend-container{height:inherit}",""]),e.exports=c},1618:function(e,t,r){"use strict";r.r(t);r(3),r(42),r(41);var c={props:{data:{type:Object,required:!0},graphName:{type:String,required:!0},vizProps:{type:Object,default:function(){return{}}}},computed:{component:function(){var e=this;return function(){return r(1598)("./".concat(e.graphName))}}}},n=(r(1599),r(40)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("DataValidator",{attrs:{data:e.data}},[r("div",[r(e.component,e._b({tag:"component"},"component",Object.assign({},{values:e.data.items||[],headers:e.data.headers||[]},e.vizProps),!1))],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DataValidator:r(1047).default})},996:function(e,t,r){"use strict";r.r(t);var c=r(40),n=r(44),o=r.n(n),l=r(963),component=Object(c.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("VAlert",e._b({attrs:{rounded:""}},"VAlert",Object.assign({},{type:"info"},e.$attrs),!1),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VAlert:l.a})}}]);