(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1807:function(e,t,r){"use strict";r(28);t.a={props:{experiences:{type:Array,required:!0}},methods:{k:function(e,t){return"experiences.".concat(e,".intro.").concat(t)},menuItemAttrs:function(e){var t=e.url,r=e.slug,n=e.disabled,c=this.$route.params.bubble;return t?{href:t,target:"_blank",rel:"noopener noreferrer",disabled:n}:n?{disabled:n}:{nuxt:!0,exact:!0,to:this.localePath({name:"".concat(c?"bubble-bubble-":"","experience-experience"),params:{bubble:c,experience:r},hash:"#load-data"})}}}}},1857:function(e,t,r){var content=r(1899);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("11b063fa",content,!0,{sourceMap:!1})},1898:function(e,t,r){"use strict";r(1857)},1899:function(e,t,r){var n=r(25)(!1);n.push([e.i,".v-card--link[data-v-2c1cfd20]:before{background:none}",""]),e.exports=n},1940:function(e,t,r){"use strict";r.r(t);var n={mixins:[r(1807).a]},c=(r(1898),r(38)),l=r(44),o=r.n(l),d=r(1002),f=r(978),m=r(1111),x=r(333),v=r(958),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("VRow",{staticClass:"mt-3 mb-6"},e._l(e.experiences,(function(t,n){var c=t.icon,title=t.title,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(t,["icon","title"]);return r("VCol",{key:n,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("VCard",e._b({staticClass:"d-flex flex-column",attrs:{hover:""}},"VCard",e.menuItemAttrs(l),!1),[r("VImg",{staticClass:"mt-3",attrs:{"max-height":"150",contain:"",src:c,"lazy-src":c}}),e._v(" "),r("VCardTitle",{staticClass:"justify-center"},[e._v("\n          "+e._s(e.$tev(e.k(l.slug,"title"),title))+"\n        ")]),e._v(" "),r("VCardSubtitle",{staticClass:"subtitle-1 text-center"},[e._v("\n          "+e._s(e.$tet(e.k(l.slug,"subtitle"),"Data Experience"))+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,"2c1cfd20",null);t.default=component.exports;o()(component,{VCard:d.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:m.a,VImg:x.a,VRow:v.a})}}]);