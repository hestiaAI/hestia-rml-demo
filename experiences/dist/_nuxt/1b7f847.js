(window.webpackJsonp=window.webpackJsonp||[]).push([[131,65],{1243:function(e,t,r){"use strict";r(3),r(46),r(41),r(790),r(412);t.a={computed:{path:function(){return URL.createObjectURL(this.fileManager.fileDict[this.filename])}}}},1314:function(e,t,r){"use strict";r.r(t);var n=r(854),c=r(1243),o={name:"UnitFileExplorerViewerHtml",mixins:[n.a,c.a]},f=r(33),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{attrs:{src:e.path,width:"100%",height:"500px"}})}),[],!1,null,null,null);t.default=component.exports},854:function(e,t,r){"use strict";r(13),r(11),r(15),r(3),r(16),r(12),r(17);var n=r(2),c=r(91);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a={props:{filename:{type:String,required:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["fileManager"]))}}}]);