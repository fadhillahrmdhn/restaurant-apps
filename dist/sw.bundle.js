if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const c=e=>r(e,o),d={module:{uri:o},exports:a,require:c};i[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),a)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"6be1d3a5bc2314528f139523864f64d3"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"25505a78d3f38cb6653174e744008a06"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"favicon.png",revision:"61a516ee99d89a0fabddebdbd59d081e"},{url:"icons/restaurant-icon-128x128.png",revision:"e76e30864d6ed920f6c4dff230c106c0"},{url:"icons/restaurant-icon-144x144.png",revision:"ee281f96e6c95f7f871fd10db42c259a"},{url:"icons/restaurant-icon-152x152.png",revision:"9c0aae488d3b53b2162f868cdf2818a0"},{url:"icons/restaurant-icon-192x192.png",revision:"61a516ee99d89a0fabddebdbd59d081e"},{url:"icons/restaurant-icon-384x384.png",revision:"5c7f3f870be2cb98105b46e9fcac5871"},{url:"icons/restaurant-icon-512x512.png",revision:"28d365e40852a3e82044b5b87217998d"},{url:"icons/restaurant-icon-72x72.png",revision:"b52e75ab8af1c91f9cd2dcbdfb3d8dee"},{url:"icons/restaurant-icon-96x96.png",revision:"ef3e573b31b8d0dd0205e5d00008e500"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"b448cdbbb399bb2a5aac2e3bbb9194cf"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
