(()=>{"use strict";var e,r={8321:(e,r,t)=>{var o,a,n;t.d(r,{b:()=>n,d:()=>o}),function(e){e[e.Small=576]="Small",e[e.Medium=768]="Medium",e[e.Large=992]="Large",e[e.ExtraLarge=1200]="ExtraLarge"}(o||(o={})),function(e){e.Department="department",e.Category="category"}(a||(a={})),function(e){e.FRUUGO="self",e.BYTEPLUS="bp"}(n||(n={}))},3819:(e,r,t)=>{var o=t(3992),a=t(8846),n=t(2130),i=t(7461),c=t(7741),d=t(5905),s=t(6760),u=t(8654),l=t(9324);!async function(){await(0,o.QE)(),(0,a.Z)(),(0,n.Z)(),(0,i.l)(),function(){if("warehouse"===window.pageType){let e=[];Array.isArray(window.warehouseCategoryNames)&&window.warehouseCategoryNames.length>0&&(e=window.warehouseCategoryNames.reduce(((e,r)=>`${e} > ${r}`))),(0,d.ZH)({eventType:"category-page-view",attributes:{userCountry:{text:[window.currentCountry]},userLanguage:{text:[window.currentLang]}},pageCategories:e})}else if("search"===window.pageType){if(!window.searchQuery)return;(0,d.ZH)({eventType:"search",searchQuery:window.searchQuery,orderBy:window.searchSorting,attributes:{userCountry:{text:[window.currentCountry]},userLanguage:{text:[window.currentLang]}},productDetails:window.shortProductList}),(0,s.q)("Search",{content_ids:[...document.querySelectorAll(".product-item")].map((e=>e.dataset.productid)),search_string:window.searchQuery})}}(),(0,u.am)();const e=(0,c.bK)();document.querySelectorAll(".product-item").forEach((r=>e.observe(r))),document.querySelectorAll("#sort-by, #page-size").forEach((e=>e.addEventListener("change",(e=>window.location.href=e.target.value))));const r=document.querySelector(".sidebar");if(r){const e=document.createElement("div"),t=(0,l.t2)(r)[0];e.classList.add("sidebar-backdrop");const o=()=>{(0,l.Qp)(),document.body.classList.add("sidebar-open"),document.body.appendChild(e),t&&(t.focus(),t.blur())},a=()=>{(0,l.tG)(),document.body.classList.remove("sidebar-open"),e.parentNode.removeChild(e)},n=document.querySelector(".mobile-filters");n&&n.addEventListener("click",o),r.querySelector(".btn-close").addEventListener("click",a)}}()},5854:(e,r,t)=>{t.d(r,{Z:()=>o});const o={dev:"DEV",test:"TEST",production:"PRODUCTION"}}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,a,n)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,a,n]=e[u],c=!0,d=0;d<t.length;d++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](t[d])))?t.splice(d--,1):(c=!1,n<i&&(i=n));if(c){e.splice(u--,1);var s=a();void 0!==s&&(r=s)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,a,n]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.j=362,(()=>{var e={362:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[i,c,d]=t,s=0;if(i.some((r=>0!==e[r]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(d)var u=d(o)}for(r&&r(t);s<i.length;s++)n=i[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},t=globalThis.webpackChunkmarketplace=globalThis.webpackChunkmarketplace||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o.O(void 0,[647,736],(()=>o(3819)));a=o.O(a)})();
//# sourceMappingURL=brand.bundle.js.map