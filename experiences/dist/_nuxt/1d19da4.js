(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1679:function(t,e,r){"use strict";e.a={props:{experiences:{type:Array,required:!0}},methods:{menuItemAttrs:function(t){var e=t.url,r=t.slug,n=t.disabled,l=this.$route.params.bubble;return e?{href:e,target:"_blank",rel:"noopener noreferrer",disabled:n}:n?{disabled:n}:{nuxt:!0,exact:!0,to:{name:"".concat(l?"bubble-bubble-":"","experience-experience"),params:{bubble:l,experience:r},hash:"#load-data"}}}}}},1927:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(1679).a]},l=r(33),o=r(34),c=r.n(o),m=r(236),d=r(273),I=r(174),V=r(274),v=r(116),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("VList",{attrs:{rounded:""}},t._l(t.experiences,(function(e,n){var title=e.title,l=e.subtitle,o=e.icon,c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}(e,["title","subtitle","icon"]);return r("VListItem",t._b({key:n},"VListItem",t.menuItemAttrs(c),!1),[r("VListItemAvatar",{attrs:{tile:""}},[r("VImg",{attrs:{src:o,"lazy-src":o}})],1),t._v(" "),r("VListItemContent",[r("VListItemTitle",[t._v(t._s(title))]),t._v(" "),r("VListItemSubtitle",[t._v(t._s(l))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:m.a,VList:d.a,VListItem:I.a,VListItemAvatar:V.a,VListItemContent:v.a,VListItemSubtitle:v.b,VListItemTitle:v.c})}}]);