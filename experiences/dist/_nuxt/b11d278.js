(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{923:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f}));o(3),o(9),o(14),o(63),o(22),o(78),o(32),o(154),o(28);var n={d:function(i,e){for(var t in e)n.o(e,t)&&!n.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:e[t]})},o:function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}},i={};n.d(i,{Z:function(){return v}});var A=JSON.parse('{"name":"@hestiaai/other","version":"0.0.1-alpha.36","main":"dist/index","type":"module","files":["dist"],"repository":{"type":"git","url":"https://github.com/hestiaai/hestialabs-experiences","directory":"packages/packages/other"},"publishConfig":{"access":"public"},"author":"","license":"UNLICENSED"}'),r={genericDateViewer:{en:{viewBlocks:{genericDateViewer:{name:"Timeline",title:"Timeline",text:"See all the dated events in your files, corresponding to data that has been collected on you at or concerning a specific date.",graphTitle:"Number of dated events in your files",graphNoDate:"No dated events were found in your file(s).",datedEvents:"From {currMinDate} to {currMaxDate} we found {total} dated events in your file(s).",headers:{"File name":"File name",Date:"Date",Description:"Description"}}}},fr:{viewBlocks:{genericDateViewer:{name:"Chronologie",title:"Chronologie",text:"Voir tous les événements datés dans vos dossiers, correspondant aux données qui ont été collectées sur vous à ou concernant une date spécifique.",graphTitle:"Nombre d'événements datés dans vos dossiers",graphNoDate:"Aucun événement daté n'a été trouvé dans votre (vos) dossier(s).",datedEvents:"De {currMinDate} à {currMaxDate} nous avons trouvé {total} événements datés dans votre (vos) fichier(s).",headers:{"File name":"Nom de fichier",Date:"Date",Description:"Description"}}}}},genericLocationViewer:{en:{viewBlocks:{genericLocationViewer:{name:"Location Observations",title:"Location Observations",text:"See all the location events in your files, corresponding to data that has been collected on you at or concerning a specific location.",graphTitle:"Number of location records in your files",graphNoLocation:"No location were found in your file(s).",locations:"We found {total} locations in your file(s).",headers:{File:"File",Path:"Path",Latitude:"Latitude",Longitude:"Longitude",Description:"Description"}}}},fr:{viewBlocks:{genericLocationViewer:{name:"Positions",title:"Observations de localisation",text:"Voir tous les événements de localisation dans vos fichiers, correspondant aux données qui ont été collectées sur vous à ou concernant un lieu spécifique.",graphTitle:"Nombre de localisation dans vos fichiers",graphNoLocation:"Aucune localisation n'a été trouvé dans votre/vos fichier(s).",locations:"Nous avons trouvé {total} observations de localisation dans votre/vos fichier(s).",headers:{File:"Fichier",Path:"Chemin",Latitude:"Latitude",Longitude:"Longitude",Description:"Description"}}}}}};function a(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c={postprocessor:function(e){return e},showTable:!1};function l(e){return Object.assign(Object.assign({},c),e)}var d={collaborator:void 0,databaseConfig:void 0,dataPortal:void 0,dataPortalMessage:void 0,dataPortalHtml:void 0,dataSamples:[],disabled:!1,files:{},hideFileExplorer:!0,hideSummary:!0,keepOnlyFiles:!0,messages:{en:{viewBlocks:{}},fr:{viewBlocks:{}}},preprocessors:{},subtitle:"Data Experience",tutorialVideos:[],url:void 0},v=new(function(e,i,t){return i&&a(e.prototype,i),t&&a(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(i,t,a){var s=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign(Object.assign({},d),i),i.viewBlocks.filter((function(e){return e.id in r})).forEach((function(e){var t=e.id;if(s.options.messages)for(var a in i.messages){var o=a;s.options.messages[o].viewBlocks[t]=r[t][o].viewBlocks[t]}})),this.options.viewBlocks=i.viewBlocks.map(l);var o=t.name.replace("@hestiaai/",""),n=a.match(/\/([^/]+)\/src\//);if(!n){var A='Package directory for package "'.concat(o,'" not found');throw new Error(A)}var c=n[1];if(o!==c){var v='Package name "'.concat(o,'" must match directory name "').concat(c,'"');throw new Error(v)}this.name=o,this.version=t.version})))({icon:"data:image/png;base64,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",subtitle:"Contact us for specific needs",title:"More to come",url:"mailto:contact@hestialabs.org",viewBlocks:[]},A,"file:///Users/francoisquellec/Documents/Documents%20-%20MacBook%20Pro%20de%20Fran%C3%A7ois%20(2)/Hestia.ai/hestialabs-experiences/hestialabs-experiences/packages/packages/other/src/index.ts"),f=i.Z}}]);