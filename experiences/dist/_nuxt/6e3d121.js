(window.webpackJsonp=window.webpackJsonp||[]).push([[166,49,102],{1320:function(t,e,n){"use strict";n(10),n(8),n(14),n(19),n(9),n(20);var r=n(2),o=(n(28),n(94),n(3),n(342),n(1332),n(441)),l=n(256),c=n(101),d=n(262);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return v(v({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var r,o,d,h=this,v={click:function(t){t.stopPropagation(),h.changedByDelimiters=!0,n()}},f={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},w=null!=(r=null==(o=(d=this.$scopedSlots)[t])?void 0:o.call(d,{on:v,attrs:f}))?r:[this.$createElement(l.a,{props:{icon:!0},attrs:f,on:v},[this.$createElement(c.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},w)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,r=n-1;return n<=2?t<e:t===r&&0===e||(0!==t||e!==r)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},1321:function(t,e,n){"use strict";var r=n(272),o=n(258),l=n(441),c=n(0),d=n(11),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.i)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.i)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},1332:function(t,e,n){var content=n(1333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0d135400",content,!0,{sourceMap:!1})},1333:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=r},1447:function(t,e,n){var content=n(1571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2decc1b6",content,!0,{sourceMap:!1})},1570:function(t,e,n){"use strict";n(1447)},1571:function(t,e,n){var r=n(25)(!1);r.push([t.i,".link[data-v-c0e13b4a]{float:right;margin-top:1em}",""]),t.exports=r},1600:function(t,e,n){"use strict";n.r(e);n(22),n(79),n(39),n(57);var r={name:"VideoWidget",props:{title:{type:String,default:function(){return""}},videoSrc:{type:String,required:!0},width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"250px"}},linkSrc:{type:String,default:function(){return""}},linkTxt:{type:String,default:function(){return""}},caption:{type:String,default:function(){return""}}},computed:{url:function(){var t=this.videoSrc.split("/").pop(),e=null;return this.videoSrc.includes("vimeo.com")&&(e="https://player.vimeo.com/video/"),this.videoSrc.includes("youtube.com")&&(e="https://www.youtube.com/embed/"),e&&t?e+t:null}}},o=(n(1570),n(40)),l=n(44),c=n.n(l),d=n(950),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("div",{staticClass:"overline text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.url?t._e():n("VAlert",{attrs:{color:"red",dense:"",type:"error"}},[t._v("\n    The video link provided is not recognized\n  ")]),t._v(" "),t.url?n("iframe",{staticClass:"pa-3 video",attrs:{src:t.url,width:t.width,height:t.height,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}}):t._e(),t._v(" "),n("div",{staticStyle:{"text-align":"end","margin-top":"0px","font-size":"12px"}},[n("ExternalLink",{attrs:{href:t.linkSrc}},[t._v("\n      "+t._s(t.linkTxt)+"\n    ")])],1)],1)}),[],!1,null,"c0e13b4a",null);e.default=component.exports;c()(component,{ExternalLink:n(346).default}),c()(component,{VAlert:d.a})},1608:function(t,e,n){var content=n(1609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2d62e390",content,!0,{sourceMap:!1})},1609:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=r},1756:function(t,e,n){"use strict";n(28);e.a={props:{experiences:{type:Array,required:!0}},methods:{k:function(t,e){return"experiences.".concat(t,".intro.").concat(e)},menuItemAttrs:function(t){var e=t.url,n=t.slug,r=t.disabled,o=this.$route.params.bubble;return e?{href:e,target:"_blank",rel:"noopener noreferrer",disabled:r}:r?{disabled:r}:{nuxt:!0,exact:!0,to:this.localePath({name:"".concat(o?"bubble-bubble-":"","experience-experience"),params:{bubble:o,experience:n},hash:"#load-data"})}}}}},1757:function(t,e,n){var content=n(1802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("b7495496",content,!0,{sourceMap:!1})},1793:function(t,e,n){"use strict";n(10),n(8),n(14),n(3),n(19),n(9),n(20);var r=n(2),o=n(1321),l=n(334),c=n(11),d=n(0),h=n(156);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(c.a)(o.a,h.a);e.a=w.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(l.a,{staticClass:"v-carousel__item",props:f(f({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.u)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},1798:function(t,e,n){"use strict";n(10),n(8),n(14),n(3),n(19),n(9),n(20);var r=n(2),o=(n(36),n(87),n(1608),n(1320)),l=n(256),c=n(101),d=n(1184),h=n(262),v=h.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return h.a.options.computed.classes.call(this)}},methods:{genData:h.a.options.methods.genData}}),f=n(0),w=n(15);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return y(y({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(l.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(c.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(v,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(f.i)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},1801:function(t,e,n){"use strict";n(1757)},1802:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-card--link[data-v-5e8f31ec]:before{background:none}",""]),t.exports=r},1844:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(1756).a]},o=(n(1801),n(40)),l=n(44),c=n.n(l),d=n(389),h=n(998),v=n(965),f=n(1109),w=n(334),m=n(945),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VRow",{staticClass:"mt-3 mb-6"},t._l(t.experiences,(function(e,r){var o=e.icon,title=e.title,l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(e,["icon","title"]);return n("VCol",{key:r,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("VCard",t._b({staticClass:"pa-3",attrs:{hover:"",height:"100%"}},"VCard",t.menuItemAttrs(l),!1),[n("div",{staticClass:"text-center"},[n("VAvatar",{attrs:{size:"150",tile:""}},[n("VImg",{staticClass:"mt-3",attrs:{contain:"",src:o,"lazy-src":o}})],1)],1),t._v(" "),n("VCardTitle",{staticClass:"justify-center"},[t._v("\n        "+t._s(t.$tev(t.k(l.slug,"title"),title))+"\n      ")]),t._v(" "),n("VCardSubtitle",{staticClass:"subtitle-1 text-center"},[t._v("\n        "+t._s(t.$tet(t.k(l.slug,"subtitle"),"Data Experience"))+"\n      ")])],1)],1)})),1)}),[],!1,null,"5e8f31ec",null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:h.a,VCardSubtitle:v.b,VCardTitle:v.d,VCol:f.a,VImg:w.a,VRow:m.a})},1849:function(t,e,n){var content=n(1873);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7841a97d",content,!0,{sourceMap:!1})},1864:function(t,e,n){"use strict";n.r(e);n(3),n(41);var r={props:{title:{type:String,required:!0},text:{type:String,required:!0},icon:{type:String,required:!0},actionText:{type:String,default:""},actionHref:{type:String,default:""}},computed:{mdiIcon:function(){return this.$vuetify.icons.values[this.icon]}},method:{scrollToElement:function(){var t=this.$refs.scrollToMe;t&&t.scrollIntoView({behavior:"smooth"})}}},o=n(40),l=n(44),c=n.n(l),d=n(389),h=n(245),v=n(998),f=n(965),w=n(385),m=n(949),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VCard",{staticClass:"d-flex flex-column",attrs:{flat:"",height:"100%"}},[n("VCardText",[n("VAvatar",{staticClass:"mb-6",attrs:{color:"primary",size:"80"}},[n("VIcon",{staticClass:"pa-5",attrs:{dark:""}},[t._v("\n        "+t._s(t.mdiIcon)+"\n      ")])],1),t._v(" "),n("h4",{staticClass:"text-subtitle-1 font-weight-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-3 mb-3"},[t._v("\n      "+t._s(t.text)+"\n    ")])],1),t._v(" "),n("VSpacer"),t._v(" "),t.actionText?n("VCardActions",[n("VBtn",{attrs:{text:"",color:"primary",href:t.actionHref}},[t._v("\n      "+t._s(t.actionText)+"\n    ")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:h.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VIcon:w.a,VSpacer:m.a})},1865:function(t,e,n){"use strict";n.r(e);n(3),n(41);var r={props:{title:{type:String,required:!0},description:{type:String,default:""},slug:{type:String,required:!0},icon:{type:String,required:!0}},computed:{mdiIcon:function(){return this.$vuetify.icons.values[this.icon]}}},o=n(40),l=n(44),c=n.n(l),d=n(389),h=n(998),v=n(965),f=n(334),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VCard",{attrs:{height:"100%",nuxt:"",to:t.localePath({name:"bubble-bubble",params:{bubble:t.slug}}),hover:""}},[n("VCardText",[n("VAvatar",{attrs:{size:"200",tile:""}},[n("VImg",{attrs:{src:t.icon,"lazy-src":t.icon,contain:""}})],1),t._v(" "),n("h4",{staticClass:"text-subtitle-1 font-weight-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",[t._v(t._s(t.description))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:h.a,VCardText:v.c,VImg:f.a})},1866:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:""},profileName:{type:String,default:""},profileDescription:{type:String,default:""},profilePhoto:{type:String,default:""},tweetLink:{type:String,default:""}}},o=n(40),l=n(44),c=n.n(l),d=n(998),h=n(965),v=n(385),f=n(334),w=n(246),m=n(388),y=n(95),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VCard",{staticClass:"mx-auto ma-3",attrs:{color:"primary",dark:"","max-width":"400",href:t.tweetLink,hover:""}},[n("VCardTitle",[n("VIcon",{attrs:{large:"",left:""}},[t._v("\n      $vuetify.icons.mdiTwitter\n    ")]),t._v(" "),n("span",{staticClass:"text-h6 font-weight-light"},[t._v("Twitter")])],1),t._v(" "),n("VCardText",{staticClass:"text-subtitle-1 font-weight-bold pr-5 pl-5"},[t._v('\n    "'+t._s(t.text)+'"\n  ')]),t._v(" "),n("VCardActions",[n("VListItem",{staticClass:"grow"},[n("VListItemAvatar",{attrs:{color:"grey darken-3"}},[n("VImg",{staticClass:"elevation-6",attrs:{alt:"",src:t.profilePhoto}})],1),t._v(" "),n("VListItemContent",[n("VListItemTitle",{staticClass:"font-weight-bold"},[t._v("\n          "+t._s(t.profileName)+"\n        ")]),t._v(" "),n("div",[t._v(t._s(t.profileDescription))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VIcon:v.a,VImg:f.a,VListItem:w.a,VListItemAvatar:m.a,VListItemContent:y.a,VListItemTitle:y.c})},1872:function(t,e,n){"use strict";n(1849)},1873:function(t,e,n){var r=n(25)(!1);r.push([t.i,".banner-wrapper[data-v-f61ca012]{background:var(--v-primary-base);padding:20px;min-height:400px;display:flex;align-items:center}.banner-title[data-v-f61ca012]{font-size:6.5vw;display:inline-block;line-height:1.1em;margin:20px 0}.banner-subtitle[data-v-f61ca012]{font-size:20px}.section-title[data-v-f61ca012]{font-size:25px;margin:20px;line-height:30px;color:#464e61}.pa-15[data-v-f61ca012]{padding:50px}.light-background[data-v-f61ca012]{background-color:#f2f2f2}.icon-wrapper[data-v-f61ca012]{background-color:#9ca299;border-radius:100%;width:80px;height:80px;text-align:center;line-height:80px;display:inline-block;margin:20px 0 30px}.icon[data-v-f61ca012]{font-size:50px;color:#fff;vertical-align:middle}",""]),t.exports=r},1928:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(19),n(9),n(20);var r=n(2),o=n(16),l=(n(14),n(3),n(63),n(257),n(39),n(57),n(956));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{TheExperienceMenuCards:n(1844).default},data:function(){return{tools:[{title:"What we do",text:"Digipower.academy empower people and organisations through the mastery of data and data flows.",icon:"mdiDatabaseCog"},{title:"Who is it for",text:"Business leaders, civil servants, researchers, journalists, teachers, you will find here the resources towards understanding and using data in your field.",icon:"mdiAccountGroup"},{title:"Why is it so special",text:"The sessions take place in the digital life of the participants themselves. They retrieve, explore and make sense of their own data. Highly impactful.",icon:"mdiWeb"}]}},computed:{workshops:function(){var t=this,e=this.$store.state.config.bubbleConfig||{};return Object.entries(e).map((function(t){var e=Object(o.a)(t,2),n=e[0],d=e[1];return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({slug:n},Object(l.a)(d,["title","icon","description"]))})).filter((function(e){return(t.$store.state.config.homePageBubbles||[]).includes(e.slug)}))},experiences:function(){var t=this;return["twitter","facebook","google","tracker-control"].map((function(e){return t.$store.getters.experience({params:{experience:e}})}))}}},h=d,v=(n(1872),n(40)),f=n(44),w=n.n(f),m=n(1798),y=n(1793),_=n(1109),x=n(958),C=n(945),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"banner-wrapper"},[n("VContainer",[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"banner-title font-weight-bold white--text text-uppercase text-break"},[t._v("\n          Analyse Your Data\n        ")])])])],1),t._v(" "),n("div",{staticClass:"section-wrapper pa-15"},[n("VContainer",[n("VRow",{attrs:{justify:"center"}},t._l(t.tools,(function(e){return n("VCol",{key:e.title,attrs:{cols:"12",md:"4"}},[n("BaseInfoCard",t._b({},"BaseInfoCard",Object.assign({},e),!1))],1)})),1)],1)],1),t._v(" "),n("div",{staticClass:"section-wrapper pa-15 light-background"},[n("VContainer",[n("VRow",{attrs:{justify:"center"}},[n("VCol",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"section-title font-weight-medium"},[t._v("\n              Showroom\n            ")]),t._v(" "),n("p",[t._v("Try out some of our experiences for free")])])])],1),t._v(" "),n("VRow",{attrs:{justify:"center"}},[n("TheExperienceMenuCards",{staticClass:"pa-3",attrs:{experiences:t.experiences}})],1)],1)],1),t._v(" "),n("div",{staticClass:"section-wrapper pa-15"},[n("VContainer",[n("VRow",{attrs:{justify:"center"}},[n("VCol",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"section-title font-weight-medium"},[t._v("\n              Learning programs\n            ")]),t._v(" "),n("p",[t._v("Choose the course(s) of your choice or assemble them to create curricula relevant to your needs.")])])])],1),t._v(" "),n("VRow",{attrs:{justify:"center"}},[t.workshops.length?t._l(t.workshops,(function(e,r){return n("VCol",{key:r,staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("BaseBubbleCard",t._b({staticClass:"pa-3"},"BaseBubbleCard",e,!1))],1)})):[n("span",{staticClass:"caption"},[t._v("No workshops available right now, please contact us for more informations.")])]],2)],1)],1),t._v(" "),n("div",{staticClass:"section-wrapper pa-15 light-background"},[n("VContainer",[n("VRow",{attrs:{justify:"center"}},[n("VCol",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"section-title font-weight-medium"},[t._v("\n              Testimonial\n            ")]),t._v(" "),n("p",[t._v("See what our customers say")])])])],1),t._v(" "),n("VRow",[n("VCol",[n("div",{staticClass:"text-center"},[n("VCarousel",{attrs:{height:"420","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":"$vuetify.icons.mdiMinus",light:""}},[n("VCarouselItem",[n("VRow",{attrs:{align:"center",justify:"center"}},[n("BaseTwitterCard",{attrs:{text:"To hope to effectively regulate the data economy you need to deeply understand the power companies have through the personal data they hold. That's why I am participating in @sitrafund's #digipower investigation using #GDPR rights to get my data. Who will be the most transparent?","tweet-link":"https://twitter.com/jyrkikatainen/status/1455484493897342977?s=20&t=YdTsvxYhUonm0Gxr9nICvw","profile-name":"Jyrki Katainen","profile-description":"Former Prime Minister of Finland and VP of EU Commission","profile-photo":"https://pbs.twimg.com/profile_images/1229410125930270720/MLN38R_9_400x400.jpg"}})],1)],1),t._v(" "),n("VCarouselItem",[n("VRow",{attrs:{align:"center",justify:"center"}},[n("BaseVideo",{attrs:{"video-src":"https://player.vimeo.com/video/689283925?h=4b12093bf4",height:"360"}})],1)],1)],1)],1)])],1)],1)],1)])}),[],!1,null,"f61ca012",null);e.default=component.exports;w()(component,{BaseInfoCard:n(1864).default,TheExperienceMenuCards:n(1844).default,BaseBubbleCard:n(1865).default,BaseTwitterCard:n(1866).default,BaseVideo:n(1600).default}),w()(component,{VCarousel:m.a,VCarouselItem:y.a,VCol:_.a,VContainer:x.a,VRow:C.a})}}]);