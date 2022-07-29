(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{110:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:function(){return{}}}},head:function(){return{title:this.title}},computed:{title:function(){return this.error.message||(404===this.error.statusCode?"404 Not Found":"An error occurred")}}},o=r(33),c=r(34),l=r.n(c),f=r(656),d=r(645),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",{staticClass:"mt-16",attrs:{fluid:""}},[r("VRow",{staticClass:"flex-column",attrs:{align:"center",justify:"center"}},[r("h1",{staticClass:"h1"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("LogoImg",{staticClass:"my-12",attrs:{"max-width":"300"}}),t._v(" "),r("BaseButton",{attrs:{nuxt:"",to:"/",icon:"mdiHome",text:"Home page"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{LogoImg:r(384).default,BaseButton:r(394).default}),l()(component,{VContainer:f.a,VRow:d.a})},284:function(t,e,r){"use strict";e.a=function(t,e){var r=t.app;e("url",(function(t){var e="http://localhost:3000";return t?e+t.path:e+r.router.currentRoute.path}))}},285:function(t,e,r){"use strict";var n=r(27),o=r(36),c=r(37),l=(r(29),r(3),r(30),r(89),function(){function t(e){Object(o.a)(this,t),this.$axios=e}var e,r,l;return Object(c.a)(t,[{key:"getConfig",value:(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("/bubbles/".concat(e,"/config"));case 3:if(r=t.sent,n=r.status,data=r.data,!(n>=400)){t.next=8;break}throw new Error("Axios error, status: ".concat(n));case 8:return t.abrupt("return",data);case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t){return l.apply(this,arguments)})},{key:"getFilenames",value:function(t,e){var r="".concat("http://127.0.0.1:8000","/bubbles/").concat(t,"/files");fetch(r,{method:"GET"}).then((function(t){if(!t.ok)throw new Error("Unable to fetch filenames from server: Error ".concat(t.status));return t.json()})).then((function(t){return e(null,t)})).catch((function(t){return e(t)}))}},{key:"getFile",value:function(t,e,r){var n="".concat("http://127.0.0.1:8000","/bubbles/").concat(t,"/file/").concat(e);fetch(n,{method:"GET"}).then((function(t){t.ok?t.blob().then((function(t){return r(null,t)})).catch((function(t){return r(t)})):r(new Error("Unable to fetch ".concat(e," from server: Error ").concat(t.status)))})).catch((function(t){return r(t)}))}},{key:"deleteFiles",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("password",r),t.prev=2,t.next=5,fetch("".concat("http://127.0.0.1:8000","/bubbles/").concat(e,"/delete-files"),{method:"POST",body:n});case 5:if((c=t.sent).ok){t.next=12;break}return console.error(c),o=c.statusText,t.next=11,c.json();case 11:o=t.sent;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),o=o||"Error",console.error(t.t0);case 18:return t.abrupt("return",o);case 19:case"end":return t.stop()}}),t,null,[[2,14]])}))),function(t,e){return r.apply(this,arguments)})},{key:"uploadFile",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n,o){var c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(c=new FormData).append("password",o),c.append("source-bubble",n),c.append("file",e,e.name),t.prev=4,t.next=7,fetch("".concat("http://127.0.0.1:8000","/bubbles/").concat(r,"/files"),{method:"POST",body:c});case 7:if((f=t.sent).ok){t.next=14;break}return console.error(f),l=f.statusText,t.next=13,f.json();case 13:l=t.sent;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(4),l=l||"Error",console.error(t.t0);case 20:return t.abrupt("return",l);case 21:case"end":return t.stop()}}),t,null,[[4,16]])}))),function(t,r,n,o){return e.apply(this,arguments)})}]),t}());e.a=function(t,e){var r=t.$axios;e("api",new l(r))}},337:function(t,e,r){"use strict";r.r(e);r(28);var n={props:{collaborator:{type:Object,required:!0},width:{type:Number,default:100}}},o=r(33),c=r(34),l=r.n(c),f=r(236),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.collaborator.url,target:"_blank",rel:"noreferrer noopener"}},[r("VImg",{attrs:{src:t.collaborator.icon,"lazy-src":t.collaborator.icon,alt:t.collaborator.title,contain:"",width:t.width}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:f.a})},368:function(t,e,r){var content=r(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("223ef3fc",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("f12cd7be",content,!0,{sourceMap:!1})},373:function(t,e,r){var content=r(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("605ad071",content,!0,{sourceMap:!1})},374:function(t,e,r){var content=r(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("afd9b790",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r.r(e);var n={computed:{logoSrc:function(){return this.$store.getters.siteConfig.logo||"/hestialabs-logo.svg"}}},o=r(33),c=r(34),l=r.n(c),f=r(236),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("VImg",t._b({attrs:{src:t.logoSrc,"lazy-src":t.logoSrc,alt:"HestiaLabs logo",contain:""}},"VImg",t.$attrs,!1))}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:f.a})},393:function(t,e,r){"use strict";r(13),r(11),r(15),r(3),r(16),r(12),r(17);var n=r(2),o=r(27),c=(r(193),r(29),r(89),r(91));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,path,o,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.params.bubble,path=t.route.path,o=t.isDev,c=t.redirect,l=t.$auth,f=t.$axios,r.state.loaded){e.next=4;break}return e.next=4,r.dispatch("loadExperiences",{isDev:o,$axios:f});case 4:if(!n||!l.loggedIn||n===l.user.username){e.next=8;break}return e.next=7,l.logout();case 7:return e.abrupt("return",c({name:"login",query:{redirect:path}}));case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{snackbar:this.$nuxt.isOffline,timeout:5e3,alert:!1}},head:function(){if(this.appName)return{meta:[{hid:"og:title",property:"og:title",content:this.appName},{hid:"og:url",property:"og:url",content:this.$url(this.$route)},{hid:"twitter:title",property:"twitter:title",content:this.appName}]}},computed:f(f({},Object(c.b)(["experience","appName"])),{},{collaborator:function(){var t=this.experience(this.$route).collaborator,e=void 0===t?{}:t;return e},newsletterURL:function(){var t=this.collaborator.url;return"".concat(void 0===t?"https://hestialabs.org/":t,"#newsletter")},newsletterMessage:function(){var t=this.collaborator.title,title=void 0===t?"HestiaLabs":t,e=title.endsWith("s")?"’":"’s";return"Subscribe to ".concat(title).concat(e," newsletter!")}}),watch:{"$nuxt.isOffline":function(t){this.snackbar=!0,this.timeout=t?5001:5e3}},mounted:function(){window.Worker||this.$nuxt.error({statusCode:500,message:"Web Workers are not supported by this browser"})},methods:{alertClosed:function(){localStorage.alertNewsletterDismissed=new Date}}},h=(r(507),r(522),r(33)),v=r(34),m=r.n(v),x=r(650),y=r(651),w=r(652),_=r(653),O=r(654),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.loaded?r("VApp",[r("TheAppBar"),t._v(" "),r("VMain",[r("Nuxt"),t._v(" "),r("VSnackbar",{attrs:{"content-class":"v-snack__content-online-status",color:"info",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t.$nuxt.isOffline?[t._v("\n        The app is running in offline mode\n      ")]:[t._v("\n        You are online again!\n      ")]],2),t._v(" "),r("VAlert",{staticClass:"fixedAlert",attrs:{value:t.alert,border:"right","colored-border":"",color:"primary",elevation:"2","close-text":"Not now",dismissible:"","max-width":"20%",transition:"slide-x-transition",fixed:"",bottom:"",left:""},on:{input:t.alertClosed}},[t._v("\n      Want to know more about our work ?\n      "),r("br"),t._v(" "),r("a",{attrs:{href:t.newsletterURL,target:"_blank",rel:"noreferrer noopener"}},[t._v("\n        "+t._s(t.newsletterMessage)+"\n      ")])])],1),t._v(" "),r("VFooter",{attrs:{app:"",absolute:"",color:"primary"}},[r("div",{staticClass:"lighten-2 py-2 ma-auto white--text",attrs:{align:"center"}},[t._v("\n      © Copyright 2022\n      "),r("a",{staticStyle:{color:"white"},attrs:{href:"https://hestia.ai",target:"_blank"}},[t._v("Hestia.ai")]),t._v(" "),r("br"),t._v("\n      The Digipower.academy has emerged out of projects initiated separately by\n      "),r("a",{staticStyle:{color:"white"},attrs:{href:"https://www.sitra.fi/en/projects/digipower-investigation",target:"_blank"}},[t._v("SITRA")]),t._v(", "),r("a",{staticStyle:{color:"white"},attrs:{href:"https://www.migros-engagement.ch/en/news-projects/technology-ethics/hestialabs",target:"_blank"}},[t._v("Migros Pioneer Fund")]),t._v(" (via the\n      "),r("a",{staticStyle:{color:"white"},attrs:{href:"http://www.hestialabs.org",target:"_blank"}},[t._v("HestiaLabs ")]),t._v(" project) and\n      "),r("a",{staticStyle:{color:"white"},attrs:{href:"https://personaldata.io/",target:"_blank"}},[t._v("PersonalData.IO ")])])])],1):t._e()}),[],!1,null,"14e12a68",null);e.a=component.exports;m()(component,{TheAppBar:r(584).default}),m()(component,{VAlert:x.a,VApp:y.a,VFooter:w.a,VMain:_.a,VSnackbar:O.a})},394:function(t,e,r){"use strict";r.r(e);r(3),r(41);var n={props:{tooltip:{type:String,default:""},text:{type:String,default:""},fixed:{type:Boolean,default:!1},right:{type:Boolean,default:!1},left:{type:Boolean,default:!1},top:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},status:{type:Boolean,default:!1},error:{type:Boolean,default:!1},icon:{type:String,default:null},outlined:{type:Boolean,default:!0}},computed:{mdiIcon:function(){return this.$vuetify.icons.values[this.icon]}}},o=(r(486),r(33)),c=r(34),l=r.n(c),f=r(173),d=r(271),h=r(644),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VTooltip",{attrs:{left:"",disabled:!t.tooltip},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("VBtn",t._g(t._b({staticClass:"my-2",attrs:{outlined:t.outlined,fixed:t.fixed,right:t.right,bottom:t.bottom,top:t.top,left:t.left},on:{click:function(e){return t.$emit("click",e)}}},"VBtn",[o,t.$attrs],!1),{on:n,$on:t.$on}),[t.icon?r("VIcon",{attrs:{left:""!==t.text}},[t._v("\n        "+t._s(t.mdiIcon)+"\n      ")]):t._e(),t._v(" "),t._t("default",(function(){return[r("span",[t._v(t._s(t.text))])]})),t._v(" "),t.progress?r("BaseProgressCircular",{staticClass:"ml-2"}):t.status?r("StatusIndicator",{attrs:{error:t.error}}):t._e()],2)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.tooltip))])])}),[],!1,null,"075b2462",null);e.default=component.exports;l()(component,{BaseProgressCircular:r(418).default,StatusIndicator:r(583).default}),l()(component,{VBtn:f.a,VIcon:d.a,VTooltip:h.a})},418:function(t,e,r){"use strict";r.r(e);r(28);var n={props:{size:{type:[String,Number],default:14},width:{type:[String,Number],default:2},indeterminate:{type:Boolean,default:!0}}},o=r(33),c=r(34),l=r.n(c),f=r(250),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("VProgressCircular",t._b({},"VProgressCircular",Object.assign({},{indeterminate:t.indeterminate,size:t.size,width:t.width},t.$attrs),!1))}),[],!1,null,null,null);e.default=component.exports;l()(component,{VProgressCircular:f.a})},426:function(t,e,r){"use strict";r.r(e);r(13),r(11),r(16),r(12),r(17);var n=r(87),o=r(2),c=(r(3),r(46),r(41),r(73),r(242),r(15),r(45),r(66),r(193),r(91)),l=r(646);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=function(){return Promise.all([r.e(43),r.e(40)]).then(r.bind(null,1926))},v=function(){return r.e(41).then(r.bind(null,1927))},m={props:{cards:{type:Boolean,default:!1},include:{type:Array,default:void 0},groupByCollaborator:{type:Boolean,default:!0}},computed:d(d({},Object(c.b)(["enabledExperiences","disabledExperiences"])),{},{sections:function(){var t=[],e=this.filterExperiences(this.enabledExperiences);return this.groupByCollaborator?t.push.apply(t,Object(n.a)(this.groupExperiences(e))):t.push({experiences:e,heading:""}),t.push({experiences:this.filterExperiences(this.disabledExperiences),heading:'\n              Available on-demand (<a href="mailto:contact@hestialabs.org">Contact us</a>)\n            '}),t},component:function(){return this.cards?h:v}}),methods:{groupExperiences:function(t){var e=Object(l.a)(t,"collaborator.title");return Object.values(e).map((function(t){var e=t[0].collaborator;return{experiences:t,collaborator:e,heading:(null==e?void 0:e.title)||"Public experiences"}}))},filterExperiences:function(t){var e=this.include,r=t;return e&&(r=r.filter((function(t){return e.includes(t.slug)}))),this.$route.params.bubble||(r=r.filter((function(t){return!t.slug.endsWith("-agg")}))),r}}},x=r(33),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.sections,(function(e,n){var o=e.experiences,c=e.heading,l=e.collaborator;return[o.length?r("div",{key:n},[r("div",{staticClass:"mt-6 mb-4"},[l&&t.groupByCollaborator?[r("span",{staticClass:"text-overline"},[t._v("Made for")]),t._v(" "),l?r("CollaboratorLink",{attrs:{collaborator:l,width:250}}):t._e()]:[r("h1",{staticClass:"text-h4",domProps:{innerHTML:t._s(c)}})]],2),t._v(" "),r(t.component,t._b({tag:"component"},"component",{experiences:o},!1))],1):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollaboratorLink:r(337).default})},437:function(t,e,r){r(438),t.exports=r(439)},486:function(t,e,r){"use strict";r(368)},487:function(t,e,r){var n=r(20)(!1);n.push([t.i,".v-btn[data-v-075b2462]{z-index:4}",""]),t.exports=n},507:function(t,e,r){"use strict";r(372)},508:function(t,e,r){var n=r(20),o=r(509),c=r(510),l=r(511),f=r(512),d=r(513),h=r(514),v=r(515),m=r(516),x=r(517),y=r(518),w=r(519),_=r(520),O=r(521),k=n(!1),C=o(c),j=o(l),V=o(f),E=o(d),I=o(h),$=o(v),P=o(m),B=o(x),S=o(y),D=o(w),L=o(_),A=o(O);k.push([t.i,'h1,h2,h3,h4,h5,h6{font-family:"Roboto",sans-serif}html{overflow-y:auto}html .overflow-y-hidden{overflow-y:scroll!important}.v-card .v-card__title{word-break:break-word}@font-face{font-family:"Roboto";font-weight:400;font-style:normal;src:url('+C+') format("woff2"),url('+j+') format("woff");font-display:swap}@font-face{font-family:"Roboto";font-weight:400;font-style:italic;src:url('+V+') format("woff2"),url('+E+') format("woff");font-display:swap}@font-face{font-family:"Roboto";font-weight:700;font-style:normal;src:url('+I+') format("woff2"),url('+$+') format("woff");font-display:swap}@font-face{font-family:"Roboto";font-weight:700;font-style:italic;src:url('+P+') format("woff2"),url('+B+') format("woff");font-display:swap}@font-face{font-family:"Assistant";font-weight:400;font-style:normal;src:url('+S+') format("woff2"),url('+D+') format("woff");font-display:swap}@font-face{font-family:"Assistant";font-weight:700;font-style:normal;src:url('+L+') format("woff2"),url('+A+') format("woff");font-display:swap}.v-snack__content.v-snack__content-online-status{text-align:center}',""]),t.exports=k},510:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-regular.4673b45.woff2"},511:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-regular.9b78ea3.woff"},512:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-italic.d52a565.woff2"},513:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-italic.c8864b3.woff"},514:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-700.0682ca7.woff2"},515:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-700.0344cc3.woff"},516:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-700italic.c756cf0.woff2"},517:function(t,e,r){t.exports=r.p+"fonts/roboto-v27-latin-700italic.43c0776.woff"},518:function(t,e,r){t.exports=r.p+"fonts/assistant-v8-latin-regular.a777c35.woff2"},519:function(t,e,r){t.exports=r.p+"fonts/assistant-v8-latin-regular.754f017.woff"},520:function(t,e,r){t.exports=r.p+"fonts/assistant-v8-latin-700.10cc61b.woff2"},521:function(t,e,r){t.exports=r.p+"fonts/assistant-v8-latin-700.d243372.woff"},522:function(t,e,r){"use strict";r(373)},523:function(t,e,r){var n=r(20)(!1);n.push([t.i,".fixedAlert[data-v-14e12a68]{position:fixed;bottom:0;z-index:2500}",""]),t.exports=n},524:function(t,e,r){"use strict";r(374)},525:function(t,e,r){var n=r(20)(!1);n.push([t.i,".v-btn__home.theme--light.v-btn--router.v-btn--active:before{opacity:0!important}",""]),t.exports=n},560:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return x})),r.d(e,"getters",(function(){return y})),r.d(e,"mutations",(function(){return w})),r.d(e,"actions",(function(){return _}));r(13),r(11),r(16),r(12),r(17),r(48),r(60),r(68),r(74);var n=r(27),o=r(2),c=r(23),l=(r(89),r(15),r(3),r(154),r(240),r(155),r(45),r(66),r(46),r(41),r(73),r(22),r(81),r(30),r(1)),f=r(586);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=function(){return{loaded:!1,config:{},experiences:[],selectedFiles:[],results:{},currentDB:null,fileManager:null,fileExplorerCurrentItem:{},consentForm:null}},y={appName:function(t){return t.config.appName},enabledExperiences:function(t){return t.experiences.filter((function(t){var e=t.slug;return!t.disabled&&"other"!==e}))},disabledExperiences:function(t,e){var r=t.experiences.filter((function(t){var r=t.slug;return!e.enabledExperiences.find((function(t){return t.slug===r}))})),n=r.findIndex((function(t){return"other"===t.slug})),o=r.splice(n,1),l=Object(c.a)(o,1)[0];return l&&r.push(l),r},siteConfig:function(t){return t.config},selectedPaths:function(t){return t.fileExplorerCurrentItem.selectedPaths},routeConfig:function(t){return function(e){var r,n=null==e||null===(r=e.params)||void 0===r?void 0:r.bubble;return n?t.config.bubbleConfig[n]:t.config}},experience:function(t){return function(e){var r=e.params.experience;return t.experiences.find((function(t){return t.slug===r}))||{}}}},w={setLoaded:function(t){t.loaded=!0},setConfig:function(t,e){t.config=e},setExperiences:function(t,e){t.experiences=e},setCurrentDB:function(t,e){t.currentDB=e},setFileManager:function(t,e){t.fileManager=e},setSelectedFiles:function(t,e){t.selectedFiles=e},selectPath:function(t,path){t.fileExplorerCurrentItem.selectedPaths.includes(path)||(t.fileExplorerCurrentItem.selectedPaths.push(path),t.fileExplorerCurrentItem=m({},t.fileExplorerCurrentItem))},unselectPath:function(t,path){t.fileExplorerCurrentItem.selectedPaths=t.fileExplorerCurrentItem.selectedPaths.filter((function(t){return t!==path}))},setResult:function(t,e){var r=e.experience,n=e.result;l.a.set(t.results,r,Object(f.a)(n))},setConsentForm:function(t,e){if(e){var r,n=d(e);try{for(n.s();!(r=n.n()).done;){var section=r.value;void 0===section.value&&(["checkbox","data"].includes(section.type)?section.value=[]:["radio","input","multiline","select"].includes(section.type)&&(section.value=""))}}catch(t){n.e(t)}finally{n.f()}t.consentForm=e}},setConsentFormValue:function(t,e){var r=e.index,n=e.value;t.consentForm[r].value=n},clearStore:function(t){t.selectedFiles=[],t.results={},t.fileExplorerCurrentItem={},null!==t.currentDB&&t.currentDB.close(),t.currentDB=null,t.fileManager=null,t.consentForm=null},setFileExplorerCurrentItem:function(t,e){t.fileExplorerCurrentItem=e,t.fileExplorerCurrentItem.selectedPaths=[]}},_={loadConfig:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,l,f,h,v,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.commit,t.state.loaded){n.next=27;break}return n.next=4,r.e(219).then(r.t.bind(null,592,3));case 4:if(l=n.sent.default,null===(c=l.bubbles)||void 0===c||!c.length){n.next=26;break}l.bubbleConfig={},f=d(l.bubbles),n.prev=8,f.s();case 10:if((h=f.n()).done){n.next=18;break}return v=h.value,n.next=14,e.$api.getConfig(v);case 14:(data=n.sent)&&(l.bubbleConfig[v]=data);case 16:n.next=10;break;case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(8),f.e(n.t0);case 23:return n.prev=23,f.f(),n.finish(23);case 26:o("setConfig",m(m({},l),{},{appName:"HestiaLabs Experiences"}));case 27:case"end":return n.stop()}}),n,null,[[8,20,23,26]])})))()},loadExperiences:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function n(){var o,l,f,d,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.commit,l=t.state,f=t.dispatch,e.isDev,d=e.$axios,l.loaded){n.next=10;break}return n.next=5,f("loadConfig",d);case 5:return n.next=7,Promise.all(l.config.experiences.map((function(t){var e=t.split("@"),n=Object(c.a)(e,1)[0];return r(562)("./".concat(n,"/dist"))})));case 7:h=n.sent.map((function(t){var e=t.default;return m({slug:e.name,version:e.version},e.options)})),o("setExperiences",h),o("setLoaded");case 10:case"end":return n.stop()}}),n)})))()}}},562:function(t,e,r){var map={"./ad-radar/dist":[593,181],"./amazon/dist":[594,182],"./apple-tracker-agg/dist":[597,183],"./apple-tracker/dist":[596,184],"./apple/dist":[595,185],"./bookbeat/dist":[598,186],"./demdex/dist":[599,187],"./easyjet/dist":[600,188],"./explorer/dist":[601,189],"./facebook/dist":[602,190],"./finnair/dist":[603,191],"./fitbit/dist":[604,192],"./full-contact/dist":[605,193],"./gigantti/dist":[606,194],"./google-agg/dist":[608,195],"./google/dist":[607,196],"./helsingin-sanomat/dist":[609,197],"./her-tinder-agg/dist":[611,198],"./her/dist":[610,199],"./hsl/dist":[612,200],"./instagram/dist":[613,201],"./k-ryhma/dist":[614,202],"./lime/dist":[615,203],"./linkedin/dist":[616,175],"./netflix/dist":[617,176],"./other/dist":[618,204],"./s-ryhma/dist":[619,205],"./sbb/dist":[620,206],"./signal/dist":[621,207],"./spotify/dist":[622,208],"./strava/dist":[623,209],"./tiktok/dist":[624,210],"./tinder/dist":[625,211],"./tracker-control-agg/dist":[627,212],"./tracker-control/dist":[626,177],"./twitter/dist":[628,213],"./uber-driver/dist":[630,178],"./uber/dist":[629,179],"./voi/dist":[631,214],"./whatsapp/dist":[632,215],"./wolt/dist":[633,216],"./youtube/dist":[634,217]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=562,t.exports=n},563:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{progress:!1}},o={setProgress:function(t,e){t.progress=e}}},583:function(t,e,r){"use strict";r.r(e);var n={props:{error:{type:Boolean,required:!0},right:{type:Boolean,default:!0}}},o=r(33),c=r(34),l=r.n(c),f=r(271),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.error?r("VIcon",{attrs:{right:t.right,color:"red"}},[t._v("\n    $vuetify.icons.mdiAlert\n  ")]):r("VIcon",{attrs:{right:t.right,color:"green"}},[t._v("\n    $vuetify.icons.mdiCheckCircle\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:f.a})},584:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{drawer:!1,selected:""}},computed:{e:function(){return this.$store.getters.experience(this.$route)},links:function(){return this.$store.getters.siteConfig.appBarLinks},collaborator:function(){return this.e.collaborator}}},o=(r(524),r(33)),c=r(34),l=r.n(c),f=r(655),d=r(647),h=r(173),v=r(271),m=r(236),x=r(648),y=r(649),w=r(587),_=r(389),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("VAppBar",{staticStyle:{"z-index":"2500"},attrs:{fixed:"",app:"",color:"white",height:"60"}},[r("VAppBarNavIcon",{attrs:{"aria-label":"Open navigation menu"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("VToolbarTitle",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},["/"!==t.$route.path?r("VBtn",{staticClass:"v-btn__home mr-0",attrs:{icon:"",to:"/",color:"primary"}},[r("VIcon",[t._v("$vuetify.icons.mdiHome")])],1):t._e(),t._v(" "),r("VSpacer"),t._v(" "),r("div",{staticClass:"d-flex"},[r("VImg",{attrs:{"max-width":"30",src:t.e.icon,"lazy-src":t.e.icon,contain:""}}),t._v(" "),r("h3",{staticClass:"ml-3"},[t._v("\n          "+t._s(t.e.title)+"\n        ")])],1),t._v(" "),r("VSpacer"),t._v(" "),r("VBtn",{staticClass:"v-btn__home mr-0",attrs:{href:"https://hestia.ai/en/#contact",target:"_blank",text:""}},[t._v("\n        Contact us\n      ")]),t._v(" "),t._l(t.links,(function(link){return r("VBtn",{key:link.url,staticClass:"v-btn__home mr-0",attrs:{to:link.url,text:""}},[t._v("\n        "+t._s(link.name)+"\n      ")])})),t._v(" "),t.collaborator?r("CollaboratorLink",{staticClass:"ml-2 mr-5",attrs:{collaborator:t.collaborator}}):t._e(),t._v(" "),r("a",{staticClass:"ml-2",attrs:{href:"https://hestialabs.org/",target:"_blank",rel:"noreferrer noopener"}},[r("LogoImg",{attrs:{width:"100"}})],1)],2)],1),t._v(" "),r("VNavigationDrawer",{staticClass:"pa-5",staticStyle:{"z-index":"3000"},attrs:{app:"",temporary:"",width:500},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("div",{staticClass:"d-flex justify-space-between align-center"},[r("VBtn",{attrs:{icon:"",to:"/"}},[r("VIcon",[t._v("$vuetify.icons.mdiHome")])],1),t._v(" "),r("VBtn",{attrs:{icon:""},on:{click:function(e){t.drawer=!1}}},[r("VIcon",[t._v("$vuetify.icons.mdiClose")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v(" "),r("div",{staticClass:"my-6"},[r("LogoImg",{attrs:{width:"250"}}),t._v(" "),t.$route.params.bubble?[r("VSubheader",{staticClass:"mt-2"},[t._v("\n          Connected to bubble:\n          "),r("span",{staticClass:"font-weight-black"},[t._v("\n             "+t._s(t.$auth.user.bubble.title)+"\n          ")])])]:t._e(),t._v(" "),r("TheBubbleMenu"),t._v(" "),t.$route.params.bubble?r("TheExperienceMenu",{attrs:{include:t.$auth.user.bubble.experiences}}):r("TheExperienceMenu")],2)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{CollaboratorLink:r(337).default,LogoImg:r(384).default,TheBubbleMenu:r(585).default,TheExperienceMenu:r(426).default}),l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VBtn:h.a,VIcon:v.a,VImg:m.a,VNavigationDrawer:x.a,VSpacer:y.a,VSubheader:w.a,VToolbarTitle:_.a})},585:function(t,e,r){"use strict";r.r(e);var n=r(33),o=r(34),c=r.n(o),l=r(236),f=r(273),d=r(174),h=r(274),v=r(116),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$store.state.config.bubbleConfig?r("div",[r("h4",{staticClass:"mt-6 mb-4 text-h4"},[t._v("\n    Bubbles\n  ")]),t._v(" "),r("VList",{attrs:{rounded:""}},t._l(t.$store.state.config.bubbleConfig,(function(e,n){var title=e.title,o=e.icon;return r("VListItem",{key:n,attrs:{nuxt:"",to:{name:"bubble-bubble",params:{bubble:n}}}},[r("VListItemAvatar",{attrs:{tile:""}},[r("VImg",{attrs:{src:o,"lazy-src":o}})],1),t._v(" "),r("VListItemContent",[r("VListItemTitle",[t._v(t._s(title))])],1)],1)})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:l.a,VList:f.a,VListItem:d.a,VListItemAvatar:h.a,VListItemContent:v.a,VListItemTitle:v.c})}},[[437,163,81,164]]]);