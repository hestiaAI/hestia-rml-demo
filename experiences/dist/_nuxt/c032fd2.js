(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1298:function(e,t,r){"use strict";r.d(t,"b",(function(){return P})),r.d(t,"a",(function(){return S}));r(51),r(65),r(9),r(75),r(79),r(11),r(16),r(17);var n=r(1),o=r(55),c=r(26),l=(r(91),r(13),r(6),r(10),r(29),r(81),r(50),r(46),r(78),r(36),r(485),r(486),r(1304)),f=r.n(l),d=r(1288),m=r.n(d),v=r(1339),h=r.n(v);function y(){return new Worker(r.p+"dcd8252.worker.js")}function x(e,t){return e.postMessage(t),new Promise((function(t,r){e.addEventListener("message",(function(e){t(e.data)})),e.addEventListener("error",(function(e){console.error("worker error",e),r(e)})),e.addEventListener("messageerror",(function(e){console.error("worker error",e),r(e)}))}))}function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function k(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function P(e,t){return 0===t.filter((function(t){var r=f.a.makeRe(t);return!e.file(r).length})).length}function R(e,t){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(regeneratorRuntime.mark((function e(t,r){var n,c,l,f,d,v,h,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=k(t),e.prev=2,c.s();case 4:if((l=c.n()).done){e.next=29;break}if("zip"!==(f=l.value).extension){e.next=18;break}return d=new m.a,e.next=10,d.loadAsync(f.data);case 10:return v=e.sent,h=v.file(r).filter((function(e){return!e.dir})),e.next=14,Promise.all(h.map((function(e){var t=e.name.split("/").pop(),r=e.name.split(".").pop();return e.async("string").then((function(text){return{text:text,name:t,extension:r}}))})));case 14:y=e.sent,n.push.apply(n,Object(o.a)(y)),e.next=27;break;case 18:if(!r.test(f.name)){e.next=27;break}return e.t0=n,e.next=22,f.data.text();case 22:e.t1=e.sent,e.t2=f.name,e.t3=f.name.split(".").pop(),e.t4={text:e.t1,name:e.t2,extension:e.t3},e.t0.push.call(e.t0,e.t4);case 27:e.next=4;break;case 29:e.next=34;break;case 31:e.prev=31,e.t5=e.catch(2),c.e(e.t5);case 34:return e.prev=34,c.f(),e.finish(34);case 37:return e.abrupt("return",n);case 38:case"end":return e.stop()}}),e,null,[[2,31,34,37]])})))).apply(this,arguments)}function L(e){return U.apply(this,arguments)}function U(){return U=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},e.next=3,new Promise((function(e,n){h.a.parse(t,O({header:!0,skipEmptyLines:!0,complete:function(t){t.errors.forEach((function(e){return console.error(e)})),e({headers:t.meta.fields,items:t.data})}},r))}));case 3:return n=e.sent,o=n.headers,c=n.items,e.abrupt("return",{headers:o,items:c});case 7:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function E(e,t){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(regeneratorRuntime.mark((function e(text,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="json"===e.t0?3:"csv"===e.t0?4:7;break;case 3:return e.abrupt("return",JSON.parse(text));case 4:return e.next=6,L(text);case 6:return e.abrupt("return",e.sent.items);case 7:throw new Error("Invalid file type, ".concat(t," is not supported."));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return z.apply(this,arguments)}function z(){return z=Object(c.a)(regeneratorRuntime.mark((function e(t,r){var n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.makeRe(r.file),e.next=3,R(t,n);case 3:if((o=e.sent).length){e.next=6;break}throw new Error("No files where found with the current regex: "+n);case 6:return e.next=8,Promise.all(o.map(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.text,t.extension);case 2:return n=e.sent,e.next=5,x(new y,{json:n,arrayPath:r.array,columns:r.columns});case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return l=e.sent.flat(1),e.abrupt("return",{headers:r.columns.map((function(e){return{text:e.name,value:e.name}})),items:l});case 10:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}},1309:function(e,t,r){"use strict";r.r(t);var n=r(1254),o=r(1252),c=r(1628),l=r(460),f=r(1265),d=(r(42),r(98),{props:{paymentURL:{type:String,required:!0},timeout:{type:Number,default:5e3}},data:function(){return{dialog:!0}},mounted:function(){var e=this;setTimeout((function(){window.location.href=e.paymentURL}),this.timeout)}}),m=r(58),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{transition:"dialog-bottom-transition","max-width":"600",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(n.a,[t(o.c,{staticClass:"text-center pa-6"},[t(l.a,{staticClass:"mb-3",attrs:{color:"success",size:"100"}},[e._v("\n        $vuetify.icons.mdiCheckCircleOutline\n      ")]),e._v(" "),t("div",{staticClass:"mb-3"},[t("span",{staticClass:"text-h6 font-weight-bold"},[e._v("\n          Votre archive a bien été envoyée!\n        ")])]),e._v(" "),t("span",[e._v("\n        Vous allez être redirigé vers la page de paiement.\n      ")]),e._v(" "),t("div",{staticClass:"ma-3"},[t(f.a,{attrs:{color:"success",indeterminate:"",rounded:"",height:"6"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},1350:function(e,t,r){"use strict";r.r(t);var n=r(1248),o=r(1254),c=r(1840),l=r(1310),f=r(1265),d=(r(11),r(9),r(13),r(16),r(17),r(7)),m=r(26),v=r(1),h=(r(91),r(42),r(302),r(36),r(105),r(6),r(10),r(252),r(76),r(50),r(46),r(387),r(33),r(95)),y=r(1288),x=r.n(y),w=r(192),O=r(309),k=r(1304),j=r.n(k),P=r(1309),R=r(1298);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var U={name:"FileUploader",components:{CheckoutDialog:P.default},props:{platform:{type:String,required:!0},country:{type:String,required:!0},productId:{type:Number,required:!0}},data:function(){return{file:null,progress:!1,uploadPercentage:0,disabled:!1,validated:!1,error:!1,errorMessage:"",success:!1,status:"",successMessage:"Votre archive a bien été envoyée. Nous vous contacterons dès que possible.",fileRules:[function(e){return!!e||"Fichier requis"},function(e){return e&&e.size<5e8||"Le fichier est trop volumineux"},function(e){return e&&e.name.endsWith(".zip")||"Le fichier doit être un zip"}],paymentURL:null,fileType:null,paymentLink:null}},computed:L({},Object(h.c)({encryptionPK:function(e){return e.uploads.encryptionPK},serverlessUrl:function(e){return e.uploads.serverlessUrl},products:function(e){return e.uploads.products}})),watch:{file:function(){this.validated=!1,this.error=!1,this.progress=!1,this.success=!1,this.paymentURL=null,this.paymentLink=null}},methods:{getUberInfos:function(e){var t=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.products[t.country][t.platform].find((function(e){return e.name===t.fileType}))){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,e.file(j.a.makeRe(n.driverInfos.file))[0].async("text");case 5:return o=r.sent,r.next=8,O.a(o,(function(e){var t={};return Object.entries(n.driverInfos.fields).forEach((function(r){var n=Object(d.a)(r,2),o=n[0],c=n[1];t[o]=e[c]})),t}))[0];case 8:return r.abrupt("return",r.sent);case 9:case"end":return r.stop()}}),r)})))()},getFileType:function(e){var t=this;return this.products[this.country][this.platform].some((function(r){return!!Object(R.b)(e,r.filesNeeded)&&(t.fileType=r.name,t.paymentLink=r.paymentLink,!0)}))},uploadFile:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,content,f,d,m,v,text,h,y,O,k,j,P,R,_,U;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.fileForm.validate()){t.next=2;break}return t.abrupt("return");case 2:return e.disabled=!0,e.error=!1,e.progress=!0,e.status="Reading file...",r=new x.a,t.next=9,r.loadAsync(e.file);case 9:if(n=t.sent,e.status="Validating file...",e.error=!e.getFileType(n),!e.error){t.next=17;break}return e.errorMessage='Erreur pendant la validation du fichier: votre archive n\'est pas reconnu par notre système. Si vous rencontrez des problèmes pour récupérer vos données ou si ce message apparait alors que vous avez récemment récupéré vos données en suivant bien le protocole indiqué sur <a href="https://personaldata.io/nos-donnees-nos-projets/mobilite/uber/rgpd/" target="blank">cette page</a>, veuillez nous contacter via <a :href="whatsAppLink" target="blank">Whatsapp</a>',e.disabled=!1,e.progress=!1,t.abrupt("return");case 17:return e.status="Getting file name...",t.next=20,Object(w.hashFile)(e.file);case 20:return o=t.sent,c="Uber_".concat(o,".zip"),e.status="Encrypting file...",l=null,t.prev=24,t.next=27,n.generateAsync({type:"uint8array"});case 27:return content=t.sent,t.next=30,Object(w.encryptFile)(content,e.encryptionPK);case 30:f=t.sent,l=new File([f],c,{type:"application/zip"}),t.next=42;break;case 34:return t.prev=34,t.t0=t.catch(24),e.error=!0,e.disabled=!1,e.progress=!1,e.status="",e.errorMessage="Erreur pendant l'encryption du fichier: "+t.t0.toString(),t.abrupt("return");case 42:return e.status="Getting presigned URL...",d=null,t.prev=44,m=e.serverlessUrl+"getUploadUrl?"+new URLSearchParams({platform:e.platform,country:e.country,name:c}),t.next=48,fetch(m);case 48:if(200===(v=t.sent).status){t.next=54;break}return t.next=52,v.text();case 52:throw text=t.sent,new Error("Le serveur à retourner le code d'erreur ".concat(v.status," : ").concat(text));case 54:return t.next=56,v.json();case 56:if(h=t.sent,d=h.presignedUrl){t.next=60;break}throw new Error("No presigned URL returned");case 60:t.next=70;break;case 62:return t.prev=62,t.t1=t.catch(44),e.error=!0,e.disabled=!1,e.progress=!1,e.status="",e.errorMessage="Erreur pendant la récupération du lien d'upload: "+t.t1.toString(),t.abrupt("return");case 70:return e.status="Uploading file...",t.prev=71,t.next=74,e.$axios.put(d,l,{headers:{"Content-Type":"application/zip"},onUploadProgress:function(t){var progress=Math.round(100*t.loaded/t.total);progress<100&&(e.uploadPercentage=progress)}});case 74:if(200===(y=t.sent).status){t.next=80;break}return t.next=78,y.text();case 78:throw O=t.sent,new Error("Le serveur à retourner le code d'erreur ".concat(y.status," : ").concat(O));case 80:t.next=90;break;case 82:return t.prev=82,t.t2=t.catch(71),e.error=!0,e.disabled=!1,e.progress=!1,e.status="",e.errorMessage="Erreur pendant l'upload du fichier: "+t.t2.toString(),t.abrupt("return");case 90:return e.status="Creating a transaction...",t.next=93,e.getUberInfos(n);case 93:return k=t.sent,j=null,t.prev=95,P=e.serverlessUrl+"createTransaction?"+new URLSearchParams(L(L({filename:c},k),{},{product:e.productId})),t.next=99,fetch(P);case 99:if(200===(R=t.sent).status){t.next=105;break}return t.next=103,R.text();case 103:throw _=t.sent,new Error("Le serveur à retourner le code d'erreur ".concat(R.status," : ").concat(_));case 105:return t.next=107,R.json();case 107:if(U=t.sent,j=U.client_reference_id){t.next=111;break}throw new Error("No clientRefID returned");case 111:t.next=121;break;case 113:return t.prev=113,t.t3=t.catch(95),e.error=!0,e.disabled=!1,e.progress=!1,e.status="",e.errorMessage="Erreur pendant la création de la transaction: "+t.t3.toString(),t.abrupt("return");case 121:e.paymentURL="".concat(e.paymentLink,"?prefilled_email=").concat(k.email,"&client_reference_id=").concat(j,"&locale=fr"),e.status="",e.success=!0,e.disabled=!1,e.progress=!1;case 126:case"end":return t.stop()}}),t,null,[[24,34],[44,62],[71,82],[95,113]])})))()}}},E=r(58),component=Object(E.a)(U,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"pa-6",attrs:{outlined:""}},[t(l.a,{ref:"fileForm"},[t(c.a,{staticClass:"mx-auto",attrs:{disabled:e.disabled,rules:e.fileRules,"show-size":"",label:"Sélectionnez votre archive",accept:"application/zip"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),e._v(" "),t("BaseButton",e._b({staticClass:"my-sm-2 mr-sm-4",attrs:{"mdi-icon":"mdiUpload",color:"primary"},on:{click:e.uploadFile}},"BaseButton",{error:e.error,success:e.success,disabled:e.disabled,progress:e.progress},!1),[t("span",[e._v("Transmettez vos données")])]),e._v(" "),e.status?t("div",{domProps:{textContent:e._s(e.status)}}):e._e(),e._v(" "),e.error||e.success?t(n.a,{staticClass:"mt-6 text-left",attrs:{type:e.error?"error":"success",text:""}},[t("div",{domProps:{innerHTML:e._s(e.error?e.errorMessage:e.successMessage)}})]):e._e(),e._v(" "),e.success&&e.paymentURL?t("CheckoutDialog",e._b({},"CheckoutDialog",{paymentURL:e.paymentURL},!1)):e._e()],1),e._v(" "),e.progress&&e.uploadPercentage?t("div",{staticClass:"text-center mt-6"},[t(f.a,{attrs:{value:e.uploadPercentage,color:"primary",height:"4"}}),e._v(" "),t("div",[e._v(e._s(e.uploadPercentage)+"%")])],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseButton:r(674).default,CheckoutDialog:r(1309).default})}}]);