/*! For license information please see 546.6da1ed0a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpoints=self.webpackChunkpoints||[]).push([[546],{2546:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>o});var r=n(5315),s=n(7029),i=n(3953);const o=(t,e,n,o,a)=>{const c=t.ownerDocument.defaultView;let l=(0,s.i)(t);const u=t=>l?-t.deltaX:t.deltaX;return(0,i.G)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:n=>(l=(0,s.i)(t),(t=>{const{startX:e}=t;return l?e>=c.innerWidth-50:e<=50})(n)&&e()),onStart:n,onMove:t=>{const e=u(t)/c.innerWidth;o(e)},onEnd:t=>{const e=u(t),n=c.innerWidth,s=e/n,i=(t=>l?-t.velocityX:t.velocityX)(t),o=i>=0&&(i>.2||e>n/2),h=(o?1-s:s)*n;let d=0;if(h>5){const t=h/Math.abs(i);d=Math.min(t,540)}a(o,s<=0?.01:(0,r.m)(0,s,.9999),d)}})}}}]);