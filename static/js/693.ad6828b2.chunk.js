/*! For license information please see 693.ad6828b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdwellings=self.webpackChunkdwellings||[]).push([[693],{5693:(e,s,t)=>{t.r(s),t.d(s,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let s=[],t=!0;const r=e?e.shadowRoot:document,i=e||document.body,c=e=>{s.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),s=e},d=()=>{t=!1,c([])},a=e=>{t=n.includes(e.key),t||c([])},u=e=>{if(t&&void 0!==e.composedPath){const s=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));c(s)}},v=()=>{r.activeElement===i&&c([])};r.addEventListener("keydown",a),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",d,{passive:!0}),r.addEventListener("mousedown",d);return{destroy:()=>{r.removeEventListener("keydown",a),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)},setFocus:c}}}}]);