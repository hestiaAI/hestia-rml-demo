"use strict";(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[9258],{19258:function(e,n,t){t.r(n),t.d(n,{addMissingDate:function(){return r}});var l=t(60194);function r(data,e,n,t,r=0,f=null,c=null){if(data.length<=0)return[];const o=l.extent(data,(n=>new Date(n[e])));return t.range(null!==f?t.floor(f):t.floor(o[0]),null!==c?t.ceil(c):t.ceil(o[1]),1).filter((n=>!data.map((n=>n[e])).includes(n.toString()))).forEach((t=>{const l={...data[0]};l[e]=t,l[n]=r,data.push(l)})),data}}}]);