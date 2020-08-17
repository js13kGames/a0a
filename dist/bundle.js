var Tetris=function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){const s=n(2);e.exports=s.app},function(e,t,n){"use strict";function s(e){const t=document.createElement("canvas");this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,t.width=this.width=320,t.height=this.height=180,e.appendChild(t),r(e,t);const n=document.createElement("canvas");this.fontCtx=n.getContext("2d"),this.fontCtx.imageSmoothingEnabled=!1,n.width=1600,n.height=900,e.appendChild(n),r(e,n),window.addEventListener("resize",()=>{r(e,t),r(e,n)})}function r(e,t){const n=e.getBoundingClientRect();let s=n.width,r=s/(16/9);n.height<r&&(r=n.height,s=r*(16/9)),t.style.width=s+"px",t.style.height=r+"px"}function a(e,t){let n=e.ctx,s=e.fontCtx,r=0,a=0;this.font=(e,t)=>{s.font=`${t}px ${e}`,s.textBaseline="middle"},this.fill=e=>{n.fillStyle=e},this.clear=()=>{s.clearRect(0,0,1600,900),n.clearRect(0,0,320,180)},this.fr=(e,t,s,r)=>{n.fillRect(e,t,s,r)},this.print=(e,t,n)=>{t+=r,n+=a,s.fillText(e,5*t,5*n)},this.camera=(e=0,t=0)=>{r=e,a=t},this.sspr=(e,s,o,i,l,d,h=o,c=i)=>{l=Math.floor(l+r),d=Math.floor(d+a),n.drawImage(t,e,s,o,i,l,d,h,c)}}function o(e){this.start=t=>{let n=new Image;n.onload=()=>{t(n)},n.src=e}}function i(e){function t(){e(),requestAnimationFrame(t)}this.start=()=>{t()}}function l(){this.init=()=>{},this.update=()=>{},this.draw=()=>{}}function d(){let e;this.level=t=>{t=c.length-t-1,e=c[t].replace(/^\n|\n$/g,"").split("\n"),this.maxMoves=h[t]},this.mget=(t,n)=>e[n][t]}n.r(t),n.d(t,"app",(function(){return X}));const h=[1,1,1,57,19,12,11,7,7,5],c=["\nH.V...\nO..JH.\n.....J\n@J..V.\nV.H...\n..QB..\n","\nVB..H.\n.B....\nH.JB..\n@..H..\nH..O.V\nQQ....\n","\n...O.V\nVO....\n...H..\n@H.JJJ\nH.....\nH.....\n  ","\nVJ....\n..O.H.\n....O.\n@.JJ..\nH...O.\nH.....\n","\n.Bbb.J\n.J.J..\nVj..V.\n.j...J\nBbbOo.\n@o.oo.\n","\nHh.Bbb\nOoJBbb\noojBbb\n@.jBbb\n.HhBbb\n.HhBbb\n","\n.B..H.\n...J..\n.....J\n@.....\n...V..\nB...H.\n","\n....Hh\n......\n@....V\n.....v\n......\n....Hh\n","\n......\n......\n@.Vv..\n......\n......\n......\n","\n......\n......\n......\n@.....\n......\n......\n"],f={sx:64,sy:48,sw:16,sh:16,dw:16,dh:16,w:1,h:1},u={sx:0,sy:48,sw:16,sh:16,dw:16,dh:16,w:1,h:1},p={sx:0,sy:64,sw:32,sh:16,dw:32,dh:16,w:2,h:1},w={sx:0,sy:80,sw:16,sh:32,dw:16,dh:32,w:1,h:2},k={sx:16,sy:48,sw:48,sh:16,dw:48,dh:16,w:3,h:1},b={sx:16,sy:80,sw:16,sh:48,dw:16,dh:48,w:1,h:3},m={sx:32,sy:64,sw:32,sh:32,dw:32,dh:32,w:2,h:2};let x=["up","down","left","right"];function v(e,t){let n,s,r,{g:a,e:o}=t;this.init=e=>{let t,a;n=[],s={s:0,prevBlocks:[]},r={moves:0,maxMoves:e.maxMoves||0,addMoveX:0,addMoveY:0,shakeBiasX:0,shakeBiasY:0,shakeX:0,shakeTarget:0,shakeTimer:0,shakeY:0,shakeTargetY:0};for(let n=0;n<6;n++)for(let s=0;s<6;s++)switch(e.mget(n,s)){case"@":t=n,a=s;break;case"O":i(m,n,s);break;case"V":i(w,n,s);break;case"H":i(p,n,s);break;case"B":i(k,n,s);break;case"J":i(b,n,s);break;case"Q":i(u,n,s)}s.block=i(f,t,a),s.nextBlock=l()};const i=(e,t,s)=>{let r={};for(let e of x)r[e]={addTimer:0,add:!1,value:!1};let a={t:e,x:t,y:s,dx:0,dy:0,addXTimer:0,addYTimer:0,allows:r};return n.push(a),a},l=()=>{let e=n.indexOf(s.block);return n[(e+1)%n.length]},d=e=>{let t=s.block.allows[e];return t.addTimer>0?t.add:t.value},h=(e,t,s)=>{let r=g(e);if(r.x+=t,r.y+=s,r.x<0||r.x+r.w>6||r.y<0||r.y+r.h>6)return!0;for(let t of n){if(e===t)continue;if(T(r,g(t)))return!0}return!1};function c(e){let t={};if(s.block===e)t.up=!h(s.block,0,-1),t.left=!h(s.block,-1,0),t.right=!h(s.block,1,0),t.down=!h(s.block,0,1);else for(let e of x)t[e]=!1;e.addXTimer>0&&(e.addXTimer--,0===e.addXTimer&&(r.addMoveX=e.dx,e.x+=e.dx,e.dx=0)),e.addYTimer>0&&(e.addYTimer--,0===e.addYTimer&&(r.addMoveY=e.dy,e.y+=e.dy,e.dy=0));for(let n of x){let s=e.allows[n];s.addTimer>0?(s.addTimer--,0===s.addTimer&&(s.value=s.add)):s.value&&!t[n]?(s.add=t[n],s.addTimer=10):!s.value&&t[n]&&(s.value=t[n])}}function v(e){let t=(1-e.addXTimer/10)*e.dx*16,n=(1-e.addYTimer/10)*e.dy*16;a.sspr(e.t.sx,e.t.sy,e.t.sw,e.t.sh,96+16*(e.x+1)+t,40+16*(e.y+1)+n)}function B(e){let t=(1-e.addXTimer/10)*e.dx*16,n=(1-e.addYTimer/10)*e.dy*16;if(e.allows.right.value){let r=Math.floor(3*(1-e.allows.right.addTimer/10))%3;a.sspr(176+16*r,0,16,16,t+96+16*e.x+e.t.dw+16+4*Math.sin(s.s%30/30*Math.PI)-2,n+40+16*(e.y+1)+e.t.dh/2-8,16,16)}if(e.allows.left.value){let r=Math.floor(3*(1-e.allows.left.addTimer/10))%3;a.sspr(176+16*r,16,16,16,t+96+16*(e.x+1)-16-4*Math.sin(s.s%30/30*Math.PI)+2,n+40+16*(e.y+1)+e.t.dh/2-8,16,16)}if(e.allows.up.value){let r=Math.floor(3*(1-e.allows.up.addTimer/10))%3;a.sspr(176+16*r,32,16,16,t+96+16*(e.x+1)+e.t.dw/2-8,n+40+16*(e.y+1)-16-4*Math.sin(s.s%30/30*Math.PI)+2,16,16)}if(e.allows.down.value){let r=Math.floor(3*(1-e.allows.down.addTimer/10))%3;a.sspr(176+16*r,48,16,16,t+96+16*(e.x+1)+e.t.dw/2-8,n+40+16*e.y+e.t.dh+16+4*Math.sin(s.s%30/30*Math.PI)-2,16,16)}}this.update=()=>{if(s.s++,0==s.block.addXTimer&&0==s.block.addYTimer)if(o.p.right?d("right")&&(s.block.dx=1,s.block.addXTimer=10):o.p.left?d("left")&&(s.block.dx=-1,s.block.addXTimer=10):o.p.up?d("up")&&(s.block.dy=-1,s.block.addYTimer=10):o.p.down&&d("down")&&(s.block.dy=1,s.block.addYTimer=10),o.p.c)s.prevBlocks[s.prevBlocks.length-1]!==s.block&&s.prevBlocks.push(s.block),s.block=s.nextBlock,s.nextBlock=l();else if(o.p.x){let e=s.prevBlocks.pop();e&&(s.nextBlock=s.block,s.block=e)}for(let e of n)c(e);s.block.t===f&&5===s.block.x&&3===s.block.y&&e.nextLevel();let t=!0;for(let e of x)if(d(e)){t=!1;break}t&&(s.block=s.nextBlock,s.nextBlock=l()),0===r.addMoveX&&0===r.addMoveY||(r.shakeBiasX=4*r.addMoveX,r.shakeBiasY=4*r.addMoveY,r.addMoveX=0,r.addMoveY=0,r.moves++,r.moves>r.maxMoves&&(r.shakeTimer=10)),r.shakeTimer>0?(r.shakeTimer--,r.shakeTarget=r.shakeBiasX+-1+2*Math.random()*1,r.shakeTargetY=r.shakeBiasY+-1+2*Math.random()*1):(r.shakeTarget=0,r.shakeTargetY=0),r.shakeX=M(r.shakeX,r.shakeTarget,2),r.shakeY=M(r.shakeY,r.shakeTargetY,2)},this.draw=()=>{r.moves>1.4*r.maxMoves&&a.camera(r.shakeX,r.shakeY),a.sspr(0,0,16,16,96,40),a.sspr(32,0,16,16,208,40),a.sspr(0,32,16,16,96,152),a.sspr(32,32,16,16,208,152);for(let e=0;e<6;e++){a.sspr(16,0,16,16,96+16*(e+1),40),a.sspr(16,32,16,16,96+16*(e+1),152),a.sspr(0,16,16,16,96,40+16*(e+1)),a.sspr(32,16,16,16,208,40+16*(e+1));for(let t=0;t<6;t++)a.sspr(16,16,16,16,96+16*(e+1),40+16*(t+1))}a.sspr(48,0,16,16,96,88),a.sspr(48,16,16,16,96,104),a.sspr(48,32,16,16,96,120),a.sspr(64,0,16,16,208,88),a.sspr(64,16,16,16,208,104),a.sspr(64,32,16,16,208,120);for(let e of n)v(e);for(let e of n)B(e);let e=196;e+=r.shakeX,a.sspr(0,160,48,32,e,4),a.print(`${y(r.moves)}/${y(r.maxMoves)}`,e+4,20),a.camera()}}function y(e){return e<10?"0"+e:""+e}function g(e){let t=e.y+e.dy;return{x:e.x+e.dx,y:t,w:e.t.w,h:e.t.h}}function T(e,t){return!(e.x>=t.x+t.w||t.x>=e.x+e.w||e.y>=t.y+t.h||t.y>=e.y+e.h)}function M(e,t,n){return e<t?Math.min(t,e+n):Math.max(t,e-n)}function B(e){let t,{g:n,e:s}=e,r=0,a=new d,o=new v(this,e);new l(this,e);n.fill("#1d2b53"),this.init=()=>{a.level(r),o.init(a),t=[];for(let e=0;e<6.625;e++)for(let n=0;n<11;n++)Math.random()<.3&&t.push({l:0,i:32*e-10,j:32*n})},this.nextLevel=()=>{r++,a.level(r),o.init(a)},this.update=()=>{s.p.enter&&o.init(a),o.update();for(let e of t)e.l>0?(s.c||s.x)&&e.l--:(e.ml=120+60*Math.random()*6,e.l=e.ml)},this.draw=()=>{n.clear(),n.fr(0,0,320,180);for(let e of t)e.l/e.ml<.5&&n.sspr(224,224,32,32,e.j-32,e.i,32,32);n.sspr(241,16,8,8,40,0,32,180),n.sspr(241,16,8,8,248,0,32,180);for(let e=0;e<5.625;e+=2)n.sspr(192,224,32,32,40,32*(e+1)-10,32,32),n.sspr(192,224,32,32,248,32*e-10,32,32);o.draw()}}function Y(){let e=["up","left","right","down","x","c","enter"];this.p={};let t={};this.update=()=>{for(let n of e)this[n]&&!t[n]?this.p[n]=!0:this.p[n]=!1,t[n]=this[n]};const n=e=>{this[e]=!0},s=e=>{this[e]=!1},r=e=>{switch(e.code){case"ArrowUp":n("up");break;case"ArrowDown":n("down");break;case"ArrowLeft":n("left");break;case"ArrowRight":n("right");break;case"KeyX":n("x");break;case"KeyC":n("c");break;case"Enter":n("enter")}},a=e=>{switch(e.code){case"ArrowUp":s("up");break;case"ArrowDown":s("down");break;case"ArrowLeft":s("left");break;case"ArrowRight":s("right");break;case"KeyX":s("x");break;case"KeyC":s("c");break;case"Enter":s("enter")}};this.bind=()=>{document.addEventListener("keydown",r),document.addEventListener("keyup",a)}}function X(e,t){let n=new s(e),r=new Y;r.bind(),new o("assets/sprites.png").start(e=>{let t=new a(n,e);t.font("Arial",80);let s=new B({g:t,e:r});s.init(),new i(()=>{r.update(),s.update(),s.draw()}).start()})}}]);