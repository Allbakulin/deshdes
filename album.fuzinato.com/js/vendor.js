(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/"use strict";var _gsScope="undefined" != typeof module && module.exports && "undefined" != typeof global?global:undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function d(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},e=function e(a,b,c){var d,e,f=a.cycle;for(d in f) e = f[d],a[d] = "function" == typeof e?e.call(b[c],c):e[c % e.length];delete a.cycle;},f=function f(a,b,d){c.call(this,a,b,d),this._cycle = 0,this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._dirty = !0,this.render = f.prototype.render;},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype = c.to({},.1,{}),l=[];f.version = "1.18.2",k.constructor = f,k.kill()._gc = !1,f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf,f.getTweensOf = c.getTweensOf,f.lagSmoothing = c.lagSmoothing,f.ticker = c.ticker,f.render = c.render,k.invalidate = function(){return this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._uncache(!0),c.prototype.invalidate.call(this);},k.updateTo = function(a,b){var d,e=this.ratio,f=this.vars.immediateRender || a.immediateRender;b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime - this._delay));for(d in a) this.vars[d] = a[d];if(this._initted || f)if(b)this._initted = !1,f && this.render(0,!0,!0);else if((this._gc && this._enabled(!0,!1),this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable",this),this._time / this._duration > .998)){var g=this._totalTime;this.render(0,!0,!1),this._initted = !1,this.render(g,!0,!1);}else if((this._initted = !1,this._init(),this._time > 0 || f))for(var h,i=1 / (1 - e),j=this._firstPT;j;) h = j.s + j.c,j.c *= i,j.s = h - j.c,j = j._next;return this;},k.render = function(a,b,c){this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if((a >= n - 1e-7?(this._totalTime = n,this._cycle = this._repeat,this._yoyo && 0 !== (1 & this._cycle)?(this._time = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0):(this._time = r,this.ratio = this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed || (d = !0,e = "onComplete",c = c || this._timeline.autoRemoveChildren),0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),(0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0,s > g && (e = "onReverseComplete")),this._rawPrevTime = m = !b || a || s === a?a:g)):1e-7 > a?(this._totalTime = this._time = this._cycle = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0,(0 !== p || 0 === r && s > 0) && (e = "onReverseComplete",d = this._reversed),0 > a && (this._active = !1,0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0),this._rawPrevTime = m = !b || a || s === a?a:g)),this._initted || (c = !0)):(this._totalTime = this._time = a,0 !== this._repeat && (i = r + this._repeatDelay,this._cycle = this._totalTime / i >> 0,0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--,this._time = this._totalTime - this._cycle * i,this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time),this._time > r?this._time = r:this._time < 0 && (this._time = 0)),this._easeType?(j = this._time / r,k = this._easeType,l = this._easePower,(1 === k || 3 === k && j >= .5) && (j = 1 - j),3 === k && (j *= 2),1 === l?j *= j:2 === l?j *= j * j:3 === l?j *= j * j * j:4 === l && (j *= j * j * j * j),1 === k?this.ratio = 1 - j:2 === k?this.ratio = j:this._time / r < .5?this.ratio = j / 2:this.ratio = 1 - j / 2):this.ratio = this._ease.getRatio(this._time / r)),o === this._time && !c && q === this._cycle))return void (p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if(!this._initted){if((this._init(),!this._initted || this._gc))return;if(!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = o,this._totalTime = p,this._rawPrevTime = s,this._cycle = q,h.lazyTweens.push(this),void (this._lazy = [a,b]);this._time && !d?this.ratio = this._ease.getRatio(this._time / r):d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time?0:1));}for(this._lazy !== !1 && (this._lazy = !1),this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0),0 === p && (2 === this._initted && a > 0 && this._init(),this._startAt && (a >= 0?this._startAt.render(a,b,c):e || (e = "_dummyGS")),this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))),f = this._firstPT;f;) f.f?f.t[f.p](f.c * this.ratio + f.s):f.t[f.p] = f.c * this.ratio + f.s,f = f._next;this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a,b,c),b || (this._totalTime !== p || d) && this._callback("onUpdate")),this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")),e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a,b,c),d && (this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[e] && this._callback(e),0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0));},f.to = function(a,b,c){return new f(a,b,c);},f.from = function(a,b,c){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,new f(a,b,c);},f.fromTo = function(a,b,c,d){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,new f(a,b,d);},f.staggerTo = f.allTo = function(a,b,g,h,k,m,n){h = h || 0;var o,p,q,r,s=0,t=[],u=function u(){g.onComplete && g.onComplete.apply(g.onCompleteScope || this,arguments),k.apply(n || g.callbackScope || this,m || l);},v=g.cycle,w=g.startAt && g.startAt.cycle;for(j(a) || ("string" == typeof a && (a = c.selector(a) || a),i(a) && (a = d(a))),a = a || [],0 > h && (a = d(a),a.reverse(),h *= -1),o = a.length - 1,q = 0;o >= q;q++) {p = {};for(r in g) p[r] = g[r];if((v && e(p,a,q),w)){w = p.startAt = {};for(r in g.startAt) w[r] = g.startAt[r];e(p.startAt,a,q);}p.delay = s + (p.delay || 0),q === o && k && (p.onComplete = u),t[q] = new f(a[q],b,p),s += h;}return t;},f.staggerFrom = f.allFrom = function(a,b,c,d,e,g,h){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,f.staggerTo(a,b,c,d,e,g,h);},f.staggerFromTo = f.allFromTo = function(a,b,c,d,e,g,h,i){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,f.staggerTo(a,b,d,e,g,h,i);},f.delayedCall = function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0});},f.set = function(a,b){return new f(a,0,b);},f.isTweening = function(a){return c.getTweensOf(a,!0).length > 0;};var m=function m(a,b){for(var d=[],e=0,f=a._first;f;) f instanceof c?d[e++] = f:(b && (d[e++] = f),d = d.concat(m(f,b)),e = d.length),f = f._next;return d;},n=f.getAllTweens = function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b));};f.killAll = function(a,c,d,e){null == c && (c = !0),null == d && (d = !0);var f,g,h,i=n(0 != e),j=i.length,k=c && d && e;for(h = 0;j > h;h++) g = i[h],(k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1));},f.killChildTweensOf = function(a,b){if(null != a){var e,g,k,l,m,n=h.tweenLookup;if(("string" == typeof a && (a = c.selector(a) || a),i(a) && (a = d(a)),j(a)))for(l = a.length;--l > -1;) f.killChildTweensOf(a[l],b);else {e = [];for(k in n) for(g = n[k].target.parentNode;g;) g === a && (e = e.concat(n[k].tweens)),g = g.parentNode;for(m = e.length,l = 0;m > l;l++) b && e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1);}}};var o=function o(a,c,d,e){c = c !== !1,d = d !== !1,e = e !== !1;for(var f,g,h=n(e),i=c && d && e,j=h.length;--j > -1;) g = h[j],(i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);};return f.pauseAll = function(a,b,c){o(!0,a,b,c);},f.resumeAll = function(a,b,c){o(!1,a,b,c);},f.globalTimeScale = function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b = b || g,d._startTime = e - (e - d._startTime) * d._timeScale / b,d = a._rootFramesTimeline,e = c.ticker.frame,d._startTime = e - (e - d._startTime) * d._timeScale / b,d._timeScale = a._rootTimeline._timeScale = b,b):d._timeScale;},k.progress = function(a){return arguments.length?this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle)?1 - a:a) + this._cycle * (this._duration + this._repeatDelay),!1):this._time / this.duration();},k.totalProgress = function(a){return arguments.length?this.totalTime(this.totalDuration() * a,!1):this._totalTime / this.totalDuration();},k.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),a > this._duration && (a = this._duration),this._yoyo && 0 !== (1 & this._cycle)?a = this._duration - a + this._cycle * (this._duration + this._repeatDelay):0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),this.totalTime(a,b)):this._time;},k.duration = function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration;},k.totalDuration = function(a){return arguments.length?-1 === this._repeat?this:this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)):(this._dirty && (this._totalDuration = -1 === this._repeat?999999999999:this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,this._dirty = !1),this._totalDuration);},k.repeat = function(a){return arguments.length?(this._repeat = a,this._uncache(!0)):this._repeat;},k.repeatDelay = function(a){return arguments.length?(this._repeatDelay = a,this._uncache(!0)):this._repeatDelay;},k.yoyo = function(a){return arguments.length?(this._yoyo = a,this):this._yoyo;},f;},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function d(a){b.call(this,a),this._labels = {},this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,this.smoothChildTiming = this.vars.smoothChildTiming === !0,this._sortChildren = !0,this._onUpdate = this.vars.onUpdate;var c,d,e=this.vars;for(d in e) c = e[d],i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));i(e.tweens) && this.add(e.tweens,0,e.align,e.stagger);},e=1e-10,f=c._internals,g=d._internals = {},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function m(a){var b,c={};for(b in a) c[b] = a[b];return c;},n=function n(a,b,c){var d,e,f=a.cycle;for(d in f) e = f[d],a[d] = "function" == typeof e?e.call(b[c],c):e[c % e.length];delete a.cycle;},o=g.pauseCallback = function(){},p=function p(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},q=d.prototype = new b();return d.version = "1.18.2",q.constructor = d,q.kill()._gc = q._forcingPlayhead = q._hasPause = !1,q.to = function(a,b,d,e){var f=d.repeat && l.TweenMax || c;return b?this.add(new f(a,b,d),e):this.set(a,d,e);},q.from = function(a,b,d,e){return this.add((d.repeat && l.TweenMax || c).from(a,b,d),e);},q.fromTo = function(a,b,d,e,f){var g=e.repeat && l.TweenMax || c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f);},q.staggerTo = function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string" == typeof a && (a = c.selector(a) || a),a = a || [],h(a) && (a = p(a)),f = f || 0,0 > f && (a = p(a),a.reverse(),f *= -1),o = 0;o < a.length;o++) l = m(e),l.startAt && (l.startAt = m(l.startAt),l.startAt.cycle && n(l.startAt,a,o)),r && n(l,a,o),q.to(a[o],b,l,o * f);return this.add(q,g);},q.staggerFrom = function(a,b,c,d,e,f,g,h){return c.immediateRender = 0 != c.immediateRender,c.runBackwards = !0,this.staggerTo(a,b,c,d,e,f,g,h);},q.staggerFromTo = function(a,b,c,d,e,f,g,h,i){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i);},q.call = function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e);},q.set = function(a,b,d){return d = this._parseTimeOrLabel(d,0,!0),null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused),this.add(new c(a,0,b),d);},d.exportRoot = function(a,b){a = a || {},null == a.smoothChildTiming && (a.smoothChildTiming = !0);var e,f,g=new d(a),h=g._timeline;for(null == b && (b = !0),h._remove(g,!0),g._startTime = 0,g._rawPrevTime = g._time = g._totalTime = h._time,e = h._first;e;) f = e._next,b && e instanceof c && e.target === e.vars.onComplete || g.add(e,e._startTime - e._delay),e = f;return h.add(g,0),g;},q.add = function(e,f,g,h){var j,k,l,m,n,o;if(("number" != typeof f && (f = this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a))){if(e instanceof Array || e && e.push && i(e)){for(g = g || "normal",h = h || 0,j = f,k = e.length,l = 0;k > l;l++) i(m = e[l]) && (m = new d({tweens:m})),this.add(m,j),"string" != typeof m && "function" != typeof m && ("sequence" === g?j = m._startTime + m.totalDuration() / m._timeScale:"start" === g && (m._startTime -= m.delay())),j += h;return this._uncache(!0);}if("string" == typeof e)return this.addLabel(e,f);if("function" != typeof e)throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";e = c.delayedCall(0,e);}if((b.prototype.add.call(this,e,f),(this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))for(n = this,o = n.rawTime() > e._startTime;n._timeline;) o && n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc && n._enabled(!0,!1),n = n._timeline;return this;},q.remove = function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline = b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime = (b._paused?b._pauseTime:c._time) - (b._reversed?b.totalDuration() - b._totalTime:b._totalTime) / b._timeScale,this;}if(b instanceof Array || b && b.push && i(b)){for(var d=b.length;--d > -1;) this.remove(b[d]);return this;}return "string" == typeof b?this.removeLabel(b):this.kill(null,b);},q._remove = function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(),this._totalTime = this._totalDuration):this._time = this._totalTime = this._duration = this._totalDuration = 0,this;},q.append = function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a));},q.insert = q.insertMultiple = function(a,b,c,d){return this.add(a,b || 0,c,d);},q.appendMultiple = function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d);},q.addLabel = function(a,b){return this._labels[a] = this._parseTimeOrLabel(b),this;},q.addPause = function(a,b,d,e){var f=c.delayedCall(0,o,d,e || this);return f.vars.onComplete = f.vars.onReverseComplete = b,f.data = "isPause",this._hasPause = !0,this.add(f,a);},q.removeLabel = function(a){return delete this._labels[a],this;},q.getLabelTime = function(a){return null != this._labels[a]?this._labels[a]:-1;},q._parseTimeOrLabel = function(b,c,d,e){var f;if(e instanceof a && e.timeline === this)this.remove(e);else if(e && (e instanceof Array || e.push && i(e)))for(f = e.length;--f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);if("string" == typeof c)return this._parseTimeOrLabel(c,d && "number" == typeof b && null == this._labels[c]?b - this.duration():0,d);if((c = c || 0,"string" != typeof b || !isNaN(b) && null == this._labels[b]))null == b && (b = this.duration());else {if((f = b.indexOf("="),-1 === f))return null == this._labels[b]?d?this._labels[b] = this.duration() + c:c:this._labels[b] + c;c = parseInt(b.charAt(f - 1) + "1",10) * Number(b.substr(f + 1)),b = f > 1?this._parseTimeOrLabel(b.substr(0,f - 1),0,d):this.duration();}return Number(b) + c;},q.seek = function(a,b){return this.totalTime("number" == typeof a?a:this._parseTimeOrLabel(a),b !== !1);},q.stop = function(){return this.paused(!0);},q.gotoAndPlay = function(a,b){return this.play(a,b);},q.gotoAndStop = function(a,b){return this.pause(a,b);},q.render = function(a,b,c){this._gc && this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a >= n - 1e-7)this._totalTime = this._time = n,this._reversed || this._hasPausedChild() || (f = !0,h = "onComplete",i = !!this._timeline.autoRemoveChildren,0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0,this._rawPrevTime > e && (h = "onReverseComplete"))),this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,a = n + 1e-4;else if(1e-7 > a)if((this._totalTime = this._time = 0,(0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete",f = this._reversed),0 > a))this._active = !1,this._timeline.autoRemoveChildren && this._reversed?(i = f = !0,h = "onReverseComplete"):this._rawPrevTime >= 0 && this._first && (i = !0),this._rawPrevTime = a;else {if((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,0 === a && f))for(d = this._first;d && 0 === d._startTime;) d._duration || (f = !1),d = d._next;a = 0,this._initted || (i = !0);}else {if(this._hasPause && !this._forcingPlayhead && !b){if(a >= o)for(d = this._first;d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d),d = d._next;else for(d = this._last;d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d),d = d._prev;l && (this._time = a = l._startTime,this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));}this._totalTime = this._time = this._rawPrevTime = a;}if(this._time !== o && this._first || c || i || l){if((this._initted || (this._initted = !0),this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0),0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")),m = this._time,m >= o))for(d = this._first;d && (g = d._next,m === this._time && (!this._paused || r));) (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c)),d = g;else for(d = this._last;d && (g = d._prev,m === this._time && (!this._paused || r));) {if(d._active || d._startTime <= o && !d._paused && !d._gc){if(l === d){for(l = d._prev;l && l.endTime() > this._time;) l.render(l._reversed?l.totalDuration() - (a - l._startTime) * l._timeScale:(a - l._startTime) * l._timeScale,b,c),l = l._prev;l = null,this.pause();}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c);}d = g;}this._onUpdate && (b || (j.length && k(),this._callback("onUpdate"))),h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(),this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[h] && this._callback(h)));}},q._hasPausedChild = function(){for(var a=this._first;a;) {if(a._paused || a instanceof d && a._hasPausedChild())return !0;a = a._next;}return !1;},q.getChildren = function(a,b,d,e){e = e || -9999999999;for(var f=[],g=this._first,h=0;g;) g._startTime < e || (g instanceof c?b !== !1 && (f[h++] = g):(d !== !1 && (f[h++] = g),a !== !1 && (f = f.concat(g.getChildren(!0,b,d)),h = f.length))),g = g._next;return f;},q.getTweensOf = function(a,b){var d,e,f=this._gc,g=[],h=0;for(f && this._enabled(!0,!0),d = c.getTweensOf(a),e = d.length;--e > -1;) (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);return f && this._enabled(!1,!0),g;},q.recent = function(){return this._recent;},q._contains = function(a){for(var b=a.timeline;b;) {if(b === this)return !0;b = b.timeline;}return !1;},q.shiftChildren = function(a,b,c){c = c || 0;for(var d,e=this._first,f=this._labels;e;) e._startTime >= c && (e._startTime += a),e = e._next;if(b)for(d in f) f[d] >= c && (f[d] += a);return this._uncache(!0);},q._kill = function(a,b){if(!a && !b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d > -1;) c[d]._kill(a,b) && (e = !0);return e;},q.clear = function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time = this._totalTime = 0;--c > -1;) b[c]._enabled(!1,!1);return a !== !1 && (this._labels = {}),this._uncache(!0);},q.invalidate = function(){for(var b=this._first;b;) b.invalidate(),b = b._next;return a.prototype.invalidate.call(this);},q._enabled = function(a,c){if(a === this._gc)for(var d=this._first;d;) d._enabled(a,!0),d = d._next;return b.prototype._enabled.call(this,a,c);},q.totalTime = function(b,c,d){this._forcingPlayhead = !0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead = !1,e;},q.duration = function(a){return arguments.length?(0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a),this):(this._dirty && this.totalDuration(),this._duration);},q.totalDuration = function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;) b = e._prev,e._dirty && e.totalDuration(),e._startTime > f && this._sortChildren && !e._paused?this.add(e,e._startTime - e._delay):f = e._startTime,e._startTime < 0 && !e._paused && (d -= e._startTime,this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f = 0),c = e._startTime + e._totalDuration / e._timeScale,c > d && (d = c),e = b;this._duration = this._totalDuration = d,this._dirty = !1;}return this._totalDuration;}return a && this.totalDuration()?this.timeScale(this._totalDuration / a):this;},q.paused = function(b){if(!b)for(var c=this._first,d=this._time;c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0),c = c._next;return a.prototype.paused.apply(this,arguments);},q.usesFrames = function(){for(var b=this._timeline;b._timeline;) b = b._timeline;return b === a._rootFramesTimeline;},q.rawTime = function(){return this._paused?this._totalTime:(this._timeline.rawTime() - this._startTime) * this._timeScale;},d;},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function d(b){a.call(this,b),this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._cycle = 0,this._yoyo = this.vars.yoyo === !0,this._dirty = !0;},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=new c(null,null,1,0),j=d.prototype = new a();return j.constructor = d,j.kill()._gc = !1,d.version = "1.18.2",j.invalidate = function(){return this._yoyo = this.vars.yoyo === !0,this._repeat = this.vars.repeat || 0,this._repeatDelay = this.vars.repeatDelay || 0,this._uncache(!0),a.prototype.invalidate.call(this);},j.addCallback = function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c);},j.removeCallback = function(a,b){if(a)if(null == b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d > -1;) c[d]._startTime === e && c[d]._enabled(!1,!1);return this;},j.removePause = function(b){return this.removeCallback(a._internals.pauseCallback,b);},j.tweenTo = function(a,c){c = c || {};var d,e,f,g={ease:i,useFrames:this.usesFrames(),immediateRender:!1};for(e in c) g[e] = c[e];return g.time = this._parseTimeOrLabel(a),d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001,f = new b(this,d,g),g.onStart = function(){f.target.paused(!0),f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale),c.onStart && f._callback("onStart");},f;},j.tweenFromTo = function(a,b,c){c = c || {},a = this._parseTimeOrLabel(a),c.startAt = {onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender = c.immediateRender !== !1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);},j.render = function(a,b,c){this._gc && this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a >= o - 1e-7)this._locked || (this._totalTime = o,this._cycle = this._repeat),this._reversed || this._hasPausedChild() || (f = !0,j = "onComplete",k = !!this._timeline.autoRemoveChildren,0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0,u > e && (j = "onReverseComplete"))),this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a?a:e,this._yoyo && 0 !== (1 & this._cycle)?this._time = a = 0:(this._time = p,a = p + 1e-4);else if(1e-7 > a)if((this._locked || (this._totalTime = this._cycle = 0),this._time = 0,(0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete",f = this._reversed),0 > a))this._active = !1,this._timeline.autoRemoveChildren && this._reversed?(k = f = !0,j = "onReverseComplete"):u >= 0 && this._first && (k = !0),this._rawPrevTime = a;else {if((this._rawPrevTime = p || !b || a || this._rawPrevTime === a?a:e,0 === a && f))for(d = this._first;d && 0 === d._startTime;) d._duration || (f = !1),d = d._next;a = 0,this._initted || (k = !0);}else if((0 === p && 0 > u && (k = !0),this._time = this._rawPrevTime = a,this._locked || (this._totalTime = a,0 !== this._repeat && (l = p + this._repeatDelay,this._cycle = this._totalTime / l >> 0,0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,this._time = this._totalTime - this._cycle * l,this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time),this._time > p?(this._time = p,a = p + 1e-4):this._time < 0?this._time = a = 0:a = this._time)),this._hasPause && !this._forcingPlayhead && !b)){if((a = this._time,a >= q))for(d = this._first;d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d),d = d._next;else for(d = this._last;d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d),d = d._prev;m && (this._time = a = m._startTime,this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));}if(this._cycle !== w && !this._locked){var x=this._yoyo && 0 !== (1 & w),y=x === (this._yoyo && 0 !== (1 & this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if((this._totalTime = w * p,this._cycle < w?x = !x:this._totalTime += p,this._time = q,this._rawPrevTime = 0 === p?u - 1e-4:u,this._cycle = w,this._locked = !0,q = x?0:p,this.render(q,b,0 === p),b || this._gc || this.vars.onRepeat && this._callback("onRepeat"),q !== this._time))return;if((y && (q = x?p + 1e-4:-1e-4,this.render(q,!0,!1)),this._locked = !1,this._paused && !v))return;this._time = C,this._totalTime = z,this._cycle = A,this._rawPrevTime = B;}if(!(this._time !== q && this._first || c || k || m))return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));if((this._initted || (this._initted = !0),this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0),0 === r && this.vars.onStart && 0 !== this._totalTime && (b || this._callback("onStart")),n = this._time,n >= q))for(d = this._first;d && (i = d._next,n === this._time && (!this._paused || v));) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c)),d = i;else for(d = this._last;d && (i = d._prev,n === this._time && (!this._paused || v));) {if(d._active || d._startTime <= q && !d._paused && !d._gc){if(m === d){for(m = d._prev;m && m.endTime() > this._time;) m.render(m._reversed?m.totalDuration() - (a - m._startTime) * m._timeScale:(a - m._startTime) * m._timeScale,b,c),m = m._prev;m = null,this.pause();}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration) - (a - d._startTime) * d._timeScale,b,c):d.render((a - d._startTime) * d._timeScale,b,c);}d = i;}this._onUpdate && (b || (g.length && h(),this._callback("onUpdate"))),j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(),this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[j] && this._callback(j)));},j.getActive = function(a,b,c){null == a && (a = !0),null == b && (b = !0),null == c && (c = !1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d = 0;i > d;d++) e = g[d],e.isActive() && (f[h++] = e);return f;},j.getLabelAfter = function(a){a || 0 !== a && (a = this._time);var b,c=this.getLabelsArray(),d=c.length;for(b = 0;d > b;b++) if(c[b].time > a)return c[b].name;return null;},j.getLabelBefore = function(a){null == a && (a = this._time);for(var b=this.getLabelsArray(),c=b.length;--c > -1;) if(b[c].time < a)return b[c].name;return null;},j.getLabelsArray = function(){var a,b=[],c=0;for(a in this._labels) b[c++] = {time:this._labels[a],name:a};return b.sort(function(a,b){return a.time - b.time;}),b;},j.progress = function(a,b){return arguments.length?this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle)?1 - a:a) + this._cycle * (this._duration + this._repeatDelay),b):this._time / this.duration();},j.totalProgress = function(a,b){return arguments.length?this.totalTime(this.totalDuration() * a,b):this._totalTime / this.totalDuration();},j.totalDuration = function(b){return arguments.length?-1 !== this._repeat && b?this.timeScale(this.totalDuration() / b):this:(this._dirty && (a.prototype.totalDuration.call(this),this._totalDuration = -1 === this._repeat?999999999999:this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),this._totalDuration);},j.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),a > this._duration && (a = this._duration),this._yoyo && 0 !== (1 & this._cycle)?a = this._duration - a + this._cycle * (this._duration + this._repeatDelay):0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),this.totalTime(a,b)):this._time;},j.repeat = function(a){return arguments.length?(this._repeat = a,this._uncache(!0)):this._repeat;},j.repeatDelay = function(a){return arguments.length?(this._repeatDelay = a,this._uncache(!0)):this._repeatDelay;},j.yoyo = function(a){return arguments.length?(this._yoyo = a,this):this._yoyo;},j.currentLabel = function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time + 1e-8);},d;},!0),(function(){var a=180 / Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function g(a,b,c,d){this.a = a,this.b = b,this.c = c,this.d = d,this.da = d - a,this.ca = c - a,this.ba = b - a;},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function i(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a + b) / 2,j=(b + c) / 2,k=(c + d) / 2,l=(i + j) / 2,m=(j + k) / 2,n=(m - l) / 8;return e.b = i + (a - i) / 4,f.b = l + n,e.c = f.a = (e.b + f.b) / 2,f.c = g.a = (l + m) / 2,g.b = m - n,h.b = k + (d - k) / 4,g.c = h.a = (g.b + h.b) / 2,[e,f,g,h];},j=function j(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length - 1,x=0,y=a[0].a;for(j = 0;w > j;j++) n = a[x],k = n.a,l = n.d,m = a[x + 1].d,h?(t = b[j],u = c[j],v = (u + t) * e * .25 / (g?.5:d[j] || .5),o = l - (l - k) * (g?.5 * e:0 !== t?v / t:0),p = l + (m - l) * (g?.5 * e:0 !== u?v / u:0),q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))):(o = l - (l - k) * e * .5,p = l + (m - l) * e * .5,q = l - (o + p) / 2),o += q,p += q,n.c = r = o,0 !== j?n.b = y:n.b = y = n.a + .6 * (n.c - n.a),n.da = l - k,n.ca = r - k,n.ba = y - k,f?(s = i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x += 4):x++,y = p;n = a[x],n.b = y,n.c = y + .4 * (n.d - y),n.da = n.d - n.a,n.ca = n.c - n.a,n.ba = y - n.a,f && (s = i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]));},k=function k(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a = [f].concat(a),i = a.length;--i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));if((h = a.length - 2,0 > h))return n[0] = new g(a[0][d],0,0,a[-1 > h?0:1][d]),n;for(i = 0;h > i;i++) j = a[i][d],k = a[i + 1][d],n[i] = new g(j,0,0,k),e && (l = a[i + 2][d],b[i] = (b[i] || 0) + (k - j) * (k - j),c[i] = (c[i] || 0) + (l - k) * (l - k));return n[i] = new g(a[i][d],0,0,a[i + 1][d]),n;},l=function l(a,f,g,i,_l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m || a[0];_l = "string" == typeof _l?"," + _l + ",":h,null == f && (f = 1);for(o in a[0]) w.push(o);if(a.length > 1){for(u = a[a.length - 1],t = !0,n = w.length;--n > -1;) if((o = w[n],Math.abs(x[o] - u[o]) > .05)){t = !1;break;}t && (a = a.concat(),m && a.unshift(m),a.push(a[1]),m = a[a.length - 3]);}for(b.length = c.length = d.length = 0,n = w.length;--n > -1;) o = w[n],e[o] = -1 !== _l.indexOf("," + o + ","),v[o] = k(a,o,e[o],m);for(n = b.length;--n > -1;) b[n] = Math.sqrt(b[n]),c[n] = Math.sqrt(c[n]);if(!i){for(n = w.length;--n > -1;) if(e[o])for(p = v[w[n]],s = p.length - 1,q = 0;s > q;q++) r = p[q + 1].da / c[q] + p[q].da / b[q],d[q] = (d[q] || 0) + r * r;for(n = d.length;--n > -1;) d[n] = Math.sqrt(d[n]);}for(n = w.length,q = g?4:1;--n > -1;) o = w[n],p = v[o],j(p,f,g,i,e[o]),t && (p.splice(0,q),p.splice(p.length - q,q));return v;},m=function m(a,b,c){b = b || "soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic" === b?3:2,r="soft" === b,s=[];if((r && c && (a = [c].concat(a)),null == a || a.length < q + 1))throw "invalid Bezier data";for(m in a[0]) s.push(m);for(j = s.length;--j > -1;) {for(m = s[j],p[m] = i = [],n = 0,l = a.length,k = 0;l > k;k++) d = null == c?a[k][m]:"string" == typeof (o = a[k][m]) && "=" === o.charAt(1)?c[m] + Number(o.charAt(0) + o.substr(2)):Number(o),r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),i[n++] = d;for(l = n - q + 1,n = 0,k = 0;l > k;k += q) d = i[k],e = i[k + 1],f = i[k + 2],h = 2 === q?0:i[k + 3],i[n++] = o = 3 === q?new g(d,e,f,h):new g(d,(2 * e + d) / 3,(2 * e + f) / 3,f);i.length = n;}return p;},n=function n(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1 / c,p=a.length;--p > -1;) for(m = a[p],f = m.a,g = m.d - f,h = m.c - f,i = m.b - f,d = e = 0,k = 1;c >= k;k++) j = o * k,l = 1 - j,d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j),n = p * c + k - 1,b[n] = (b[n] || 0) + d * d;},o=function o(a,b){b = b >> 0 || 6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b - 1,l=[],m=[];for(c in a) n(a[c],g,b);for(e = g.length,d = 0;e > d;d++) i += Math.sqrt(g[d]),f = d % b,m[f] = i,f === k && (j += i,f = d / b >> 0,l[f] = m,h[f] = j,i = 0,m = []);return {length:j,lengths:h,segments:l};},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function init(a,b,c){this._target = a,b instanceof Array && (b = {values:b}),this._func = {},this._round = {},this._props = [],this._timeRes = null == b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values || [],j={},k=i[0],n=b.autoRotate || c.vars.orientToBezier;this._autoRotate = n?n instanceof Array?n:[["x","y","rotation",n === !0?0:Number(n) || 0]]:null;for(d in k) this._props.push(d);for(f = this._props.length;--f > -1;) d = this._props[f],this._overwriteProps.push(d),e = this._func[d] = "function" == typeof a[d],j[d] = e?a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)]?d:"get" + d.substr(3)]():parseFloat(a[d]),h || j[d] !== i[0][d] && (h = j);if((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic" === b.type,b.correlate,h):m(i,b.type,j),this._segCount = this._beziers[d].length,this._timeRes)){var p=o(this._beziers,this._timeRes);this._length = p.length,this._lengths = p.lengths,this._segments = p.segments,this._l1 = this._li = this._s1 = this._si = 0,this._l2 = this._lengths[0],this._curSeg = this._segments[0],this._s2 = this._curSeg[0],this._prec = 1 / this._curSeg.length;}if(n = this._autoRotate)for(this._initialRotations = [],n[0] instanceof Array || (this._autoRotate = n = [n]),f = n.length;--f > -1;) {for(g = 0;3 > g;g++) d = n[f][g],this._func[d] = "function" == typeof a[d]?a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)]?d:"get" + d.substr(3)]:!1;d = n[f][2],this._initialRotations[f] = this._func[d]?this._func[d].call(this._target):this._target[d];}return this._startRatio = c.vars.runBackwards?1:0,!0;},set:function set(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b !== this._startRatio;if(this._timeRes){if((k = this._lengths,l = this._curSeg,b *= this._length,e = this._li,b > this._l2 && m - 1 > e)){for(j = m - 1;j > e && (this._l2 = k[++e]) <= b;);this._l1 = k[e - 1],this._li = e,this._curSeg = l = this._segments[e],this._s2 = l[this._s1 = this._si = 0];}else if(b < this._l1 && e > 0){for(;e > 0 && (this._l1 = k[--e]) >= b;);0 === e && b < this._l1?this._l1 = 0:e++,this._l2 = k[e],this._li = e,this._curSeg = l = this._segments[e],this._s1 = l[(this._si = l.length - 1) - 1] || 0,this._s2 = l[this._si];}if((c = e,b -= this._l1,e = this._si,b > this._s2 && e < l.length - 1)){for(j = l.length - 1;j > e && (this._s2 = l[++e]) <= b;);this._s1 = l[e - 1],this._si = e;}else if(b < this._s1 && e > 0){for(;e > 0 && (this._s1 = l[--e]) >= b;);0 === e && b < this._s1?this._s1 = 0:e++,this._s2 = l[e],this._si = e;}h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec;}else c = 0 > b?0:b >= 1?m - 1:m * b >> 0,h = (b - c * (1 / m)) * m;for(d = 1 - h,e = this._props.length;--e > -1;) f = this._props[e],g = this._beziers[f][c],i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a,this._round[f] && (i = Math.round(i)),n[f]?o[f](i):o[f] = i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e = x.length;--e > -1;) f = x[e][2],v = x[e][3] || 0,w = x[e][4] === !0?1:a,g = this._beziers[x[e][0]],q = this._beziers[x[e][1]],g && q && (g = g[c],q = q[c],r = g.a + (g.b - g.a) * h,t = g.b + (g.c - g.b) * h,r += (t - r) * h,t += (g.c + (g.d - g.c) * h - t) * h,s = q.a + (q.b - q.a) * h,u = q.b + (q.c - q.b) * h,s += (u - s) * h,u += (q.c + (q.d - q.c) * h - u) * h,i = p?Math.atan2(u - s,t - r) * w + v:this._initialRotations[e],n[f]?o[f](i):o[f] = i);}}}),q=p.prototype;p.bezierThrough = l,p.cubicToQuadratic = i,p._autoCSS = !0,p.quadraticToCubic = function(a,b,c){return new g(a,(2 * b + a) / 3,(2 * b + c) / 3,c);},p._cssRegister = function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function parser(a,b,f,g,h,i){b instanceof Array && (b = {values:b}),i = new p();var j,k,l,m=b.values,n=m.length - 1,o=[],q={};if(0 > n)return h;for(j = 0;n >= j;j++) l = c(a,m[j],g,h,i,n !== j),o[j] = l.end;for(k in b) q[k] = b[k];return q.values = o,h = new e(a,"bezier",0,0,l.pt,2),h.data = l,h.plugin = i,h.setRatio = d,0 === q.autoRotate && (q.autoRotate = !0),!q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0?0:Number(q.autoRotate),q.autoRotate = null != l.end.left?[["left","top","rotation",j,!1]]:null != l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate && (g._transform || g._enableTransforms(!1),l.autoRotate = g._target._gsTransform),i._onInitTween(l.proxy,q,g._tween),h;}});}},q._roundProps = function(a,b){for(var c=this._overwriteProps,d=c.length;--d > -1;) (a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b);},q._kill = function(a){var b,c,d=this._props;for(b in this._beziers) if(b in a)for(delete this._beziers[b],delete this._func[b],c = d.length;--c > -1;) d[c] === b && d.splice(c,1);return this._super._kill.call(this,a);};})(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function g(){a.call(this,"css"),this._overwriteProps.length = 0,this.setRatio = g.prototype.setRatio;},h=_gsScope._gsDefine.globals,i={},j=g.prototype = new a("css");j.constructor = g,g.version = "1.18.2",g.API = 2,g.defaultTransformPerspective = 0,g.defaultSkewType = "compensated",g.defaultSmoothOrigin = !0,j = "px",g.suffixMap = {top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\d|\-\d|\.\d|\-\.\d)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function C(a,b){return b.toUpperCase();},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=Math.PI / 180,I=180 / Math.PI,J={},K=document,L=function L(a){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",a):K.createElement(a);},M=L("div"),N=L("img"),O=g._internals = {_specialProps:i},P=navigator.userAgent,Q=(function(){var a=P.indexOf("Android"),b=L("a");return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8,1)) > 3),o = m && Number(P.substr(P.indexOf("Version/") + 8,1)) < 6,n = -1 !== P.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)),b?(b.style.cssText = "top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1;})(),R=function R(a){return v.test("string" == typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter) || "")?parseFloat(RegExp.$1) / 100:1;},S=function S(a){window.console && console.log(a);},T="",U="",V=function V(a,b){b = b || M;var c,d,e=b.style;if(void 0 !== e[a])return a;for(a = a.charAt(0).toUpperCase() + a.substr(1),c = ["O","Moz","ms","Ms","Webkit"],d = 5;--d > -1 && void 0 === e[c[d] + a];);return d >= 0?(U = 3 === d?"ms":c[d],T = "-" + U.toLowerCase() + "-",U + a):null;},W=K.defaultView?K.defaultView.getComputedStyle:function(){},X=g.getStyle = function(a,b,c,d,e){var f;return Q || "opacity" !== b?(!d && a.style[b]?f = a.style[b]:(c = c || W(a))?f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle && (f = a.currentStyle[b]),null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f?f:e):R(a);},Y=O.convertToPixels = function(a,c,d,e,f){if("px" === e || !e)return d;if("auto" === e || !d)return 0;var h,i,j,k=D.test(c),l=a,m=M.style,n=0 > d;if((n && (d = -d),"%" === e && -1 !== c.indexOf("border")))h = d / 100 * (k?a.clientWidth:a.clientHeight);else {if((m.cssText = "border:0 solid red;position:" + X(a,"position") + ";line-height:0;","%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e))m[k?"borderLeftWidth":"borderTopWidth"] = d + e;else {if((l = a.parentNode || K.body,i = l._gsCache,j = b.ticker.frame,i && k && i.time === j))return i.width * d / 100;m[k?"width":"height"] = d + e;}l.appendChild(M),h = parseFloat(M[k?"offsetWidth":"offsetHeight"]),l.removeChild(M),k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {},i.time = j,i.width = h / d * 100),0 !== h || f || (h = Y(a,c,d,e,!0));}return n?-h:h;},Z=O.calculateOffset = function(a,b,c){if("absolute" !== X(a,"position",c))return 0;var d="left" === b?"Left":"Top",e=X(a,"margin" + d,c);return a["offset" + d] - (Y(a,b,parseFloat(e),e.replace(u,"")) || 0);},$=function $(a,b){var c,d,e,f={};if(b = b || W(a,null))if(c = b.length)for(;--c > -1;) e = b[c],(-1 === e.indexOf("-transform") || za === e) && (f[e.replace(A,C)] = b.getPropertyValue(e));else for(c in b) (-1 === c.indexOf("Transform") || ya === c) && (f[c] = b[c]);else if(b = a.currentStyle || a.style)for(c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A,C)] = b[c]);return Q || (f.opacity = R(a)),d = La(a,b,!1),f.rotation = d.rotation,f.skewX = d.skewX,f.scaleX = d.scaleX,f.scaleY = d.scaleY,f.x = d.x,f.y = d.y,Ba && (f.z = d.z,f.rotationX = d.rotationX,f.rotationY = d.rotationY,f.scaleZ = d.scaleZ),f.filters && delete f.filters,f;},_=function _(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g?"" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t,"")?f:0:Z(a,g),void 0 !== j[g] && (h = new oa(j,g,j[g],h)));if(d)for(g in d) "className" !== g && (i[g] = d[g]);return {difs:i,firstMPT:h};},aa={width:["Left","Right"],height:["Top","Bottom"]},ba=["marginLeft","marginRight","marginTop","marginBottom"],ca=function ca(a,b,c){var d=parseFloat("width" === b?a.offsetWidth:a.offsetHeight),e=aa[b],f=e.length;for(c = c || W(a,null);--f > -1;) d -= parseFloat(X(a,"padding" + e[f],c,!0)) || 0,d -= parseFloat(X(a,"border" + e[f] + "Width",c,!0)) || 0;return d;},da=function da(a,b){if("contain" === a || "auto" === a || "auto auto" === a)return a + " ";(null == a || "" === a) && (a = "0 0");var c=a.split(" "),d=-1 !== a.indexOf("left")?"0%":-1 !== a.indexOf("right")?"100%":c[0],e=-1 !== a.indexOf("top")?"0%":-1 !== a.indexOf("bottom")?"100%":c[1];return null == e?e = "center" === d?"50%":"0":"center" === e && (e = "50%"),("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"),a = d + " " + e + (c.length > 2?" " + c[2]:""),b && (b.oxp = -1 !== d.indexOf("%"),b.oyp = -1 !== e.indexOf("%"),b.oxr = "=" === d.charAt(1),b.oyr = "=" === e.charAt(1),b.ox = parseFloat(d.replace(t,"")),b.oy = parseFloat(e.replace(t,"")),b.v = a),b || a;},ea=function ea(a,b){return "string" == typeof a && "=" === a.charAt(1)?parseInt(a.charAt(0) + "1",10) * parseFloat(a.substr(2)):parseFloat(a) - parseFloat(b);},fa=function fa(a,b){return null == a?b:"string" == typeof a && "=" === a.charAt(1)?parseInt(a.charAt(0) + "1",10) * parseFloat(a.substr(2)) + b:parseFloat(a);},ga=function ga(a,b,c,d){var e,f,g,h,i,j=1e-6;return null == a?h = b:"number" == typeof a?h = a:(e = 360,f = a.split("_"),i = "=" === a.charAt(1),g = (i?parseInt(a.charAt(0) + "1",10) * parseFloat(f[0].substr(2)):parseFloat(f[0])) * (-1 === a.indexOf("rad")?1:I) - (i?0:b),f.length && (d && (d[c] = b + g),-1 !== a.indexOf("short") && (g %= e,g !== g % (e / 2) && (g = 0 > g?g + e:g - e)),-1 !== a.indexOf("_cw") && 0 > g?g = (g + 9999999999 * e) % e - (g / e | 0) * e:-1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)),h = b + g),j > h && h > -j && (h = 0),h;},ha={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ia=function ia(a,b,c){return a = 0 > a?a + 1:a > 1?a - 1:a,255 * (1 > 6 * a?b + (c - b) * a * 6:.5 > a?c:2 > 3 * a?b + (c - b) * (2 / 3 - a) * 6:b) + .5 | 0;},ja=g.parseColor = function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number" == typeof a)c = [a >> 16,a >> 8 & 255,255 & a];else {if(("," === a.charAt(a.length - 1) && (a = a.substr(0,a.length - 1)),ha[a]))c = ha[a];else if("#" === a.charAt(0))4 === a.length && (d = a.charAt(1),e = a.charAt(2),f = a.charAt(3),a = "#" + d + d + e + e + f + f),a = parseInt(a.substr(1),16),c = [a >> 16,a >> 8 & 255,255 & a];else if("hsl" === a.substr(0,3))if((c = m = a.match(q),b)){if(-1 !== a.indexOf("="))return a.match(r);}else g = Number(c[0]) % 360 / 360,h = Number(c[1]) / 100,i = Number(c[2]) / 100,e = .5 >= i?i * (h + 1):i + h - i * h,d = 2 * i - e,c.length > 3 && (c[3] = Number(a[3])),c[0] = ia(g + 1 / 3,d,e),c[1] = ia(g,d,e),c[2] = ia(g - 1 / 3,d,e);else c = a.match(q) || ha.transparent;c[0] = Number(c[0]),c[1] = Number(c[1]),c[2] = Number(c[2]),c.length > 3 && (c[3] = Number(c[3]));}else c = ha.black;return b && !m && (d = c[0] / 255,e = c[1] / 255,f = c[2] / 255,j = Math.max(d,e,f),k = Math.min(d,e,f),i = (j + k) / 2,j === k?g = h = 0:(l = j - k,h = i > .5?l / (2 - j - k):l / (j + k),g = j === d?(e - f) / l + (f > e?6:0):j === e?(f - d) / l + 2:(d - e) / l + 4,g *= 60),c[0] = g + .5 | 0,c[1] = 100 * h + .5 | 0,c[2] = 100 * i + .5 | 0),c;},ka=function ka(a,b){var c,d,e,f=a.match(la) || [],g=0,h=f.length?"":a;for(c = 0;c < f.length;c++) d = f[c],e = a.substr(g,a.indexOf(d,g) - g),g += e.length + d.length,d = ja(d,b),3 === d.length && d.push(1),h += e + (b?"hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]:"rgba(" + d.join(",")) + ")";return h;},la="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ha) la += "|" + j + "\\b";la = new RegExp(la + ")","gi"),g.colorStringFilter = function(a){var b,c=a[0] + a[1];la.lastIndex = 0,la.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),a[0] = ka(a[0],b),a[1] = ka(a[1],b));},b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);var ma=function ma(a,b,c,d){if(null == a)return function(a){return a;};var e,f=b?(a.match(la) || [""])[0]:"",g=a.split(f).join("").match(s) || [],h=a.substr(0,a.indexOf(g[0])),i=")" === a.charAt(a.length - 1)?")":"",j=-1 !== a.indexOf(" ")?" ":",",k=g.length,l=k > 0?g[0].replace(q,""):"";return k?e = b?function(a){var b,m,n,o;if("number" == typeof a)a += l;else if(d && G.test(a)){for(o = a.replace(G,"|").split("|"),n = 0;n < o.length;n++) o[n] = e(o[n]);return o.join(",");}if((b = (a.match(la) || [f])[0],m = a.split(b).join("").match(s) || [],n = m.length,k > n--))for(;++n < k;) m[n] = c?m[(n - 1) / 2 | 0]:g[n];return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset")?" inset":"");}:function(a){var b,f,m;if("number" == typeof a)a += l;else if(d && G.test(a)){for(f = a.replace(G,"|").split("|"),m = 0;m < f.length;m++) f[m] = e(f[m]);return f.join(",");}if((b = a.match(s) || [],m = b.length,k > m--))for(;++m < k;) b[m] = c?b[(m - 1) / 2 | 0]:g[m];return h + b.join(j) + i;}:function(a){return a;};},na=function na(a){return a = a.split(","),function(b,c,d,e,f,g,h){var i,j=(c + "").split(" ");for(h = {},i = 0;4 > i;i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];return e.parse(b,h,f,g);};},oa=(O._setPluginRatio = function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;) b = h[i.v],i.r?b = Math.round(b):j > b && b > -j && (b = 0),i.t[i.p] = b,i = i._next;if((g.autoRotate && (g.autoRotate.rotation = h.rotation),1 === a || 0 === a))for(i = g.firstMPT,f = 1 === a?"e":"b";i;) {if((c = i.t,c.type)){if(1 === c.type){for(e = c.xs0 + c.s + c.xs1,d = 1;d < c.l;d++) e += c["xn" + d] + c["xs" + (d + 1)];c[f] = e;}}else c[f] = c.s + c.xs0;i = i._next;}},function(a,b,c,d,e){this.t = a,this.p = b,this.v = c,this.r = e,d && (d._prev = this,this._next = d);}),pa=(O._parseToProxy = function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=J;for(c._transform = null,J = b,d = k = c.parse(a,b,d,e),J = p,f && (c._transform = o,l && (l._prev = null,l._prev && (l._prev._next = null)));d && d !== l;) {if(d.type <= 1 && (h = d.p,n[h] = d.s + d.c,m[h] = d.s,f || (j = new oa(d,"s",h,j,d.r),d.c = 0),1 === d.type))for(g = d.l;--g > 0;) i = "xn" + g,h = d.p + "_" + i,n[h] = d.data[i],m[h] = d[i],f || (j = new oa(d,i,h,j,d.rxp[i]));d = d._next;}return {proxy:m,end:n,firstMPT:j,pt:k};},O.CSSPropTween = function(a,b,d,e,g,h,i,j,k,l,m){this.t = a,this.p = b,this.s = d,this.c = e,this.n = i || b,a instanceof pa || f.push(this.n),this.r = j,this.type = h || 0,k && (this.pr = k,c = !0),this.b = void 0 === l?d:l,this.e = void 0 === m?d + e:m,g && (this._next = g,g._prev = this);}),qa=function qa(a,b,c,d,e,f){var g=new pa(a,b,c,d - c,e,-1,f);return g.b = c,g.e = g.xs0 = d,g;},ra=g.parseComplex = function(a,b,c,d,e,f,g,h,i,j){c = c || f || "",g = new pa(a,b,0,0,g,j?2:1,null,!1,h,c,d),d += "";var l,m,n,o,p,s,t,u,v,w,x,y,z,A=c.split(", ").join(",").split(" "),B=d.split(", ").join(",").split(" "),C=A.length,D=k !== !1;for((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G,", ").split(" "),B = B.join(" ").replace(G,", ").split(" "),C = A.length),C !== B.length && (A = (f || "").split(" "),C = A.length),g.plugin = i,g.setRatio = j,la.lastIndex = 0,l = 0;C > l;l++) if((o = A[l],p = B[l],u = parseFloat(o),u || 0 === u))g.appendXtra("",u,ea(p,u),p.replace(r,""),D && -1 !== p.indexOf("px"),!0);else if(e && la.test(o))y = "," === p.charAt(p.length - 1)?"),":")",z = -1 !== p.indexOf("hsl") && Q,o = ja(o,z),p = ja(p,z),v = o.length + p.length > 6,v && !Q && 0 === p[3]?(g["xs" + g.l] += g.l?" transparent":"transparent",g.e = g.e.split(B[l]).join("transparent")):(Q || (v = !1),z?g.appendXtra(v?"hsla(":"hsl(",o[0],ea(p[0],o[0]),",",!1,!0).appendXtra("",o[1],ea(p[1],o[1]),"%,",!1).appendXtra("",o[2],ea(p[2],o[2]),v?"%,":"%" + y,!1):g.appendXtra(v?"rgba(":"rgb(",o[0],p[0] - o[0],",",!0,!0).appendXtra("",o[1],p[1] - o[1],",",!0).appendXtra("",o[2],p[2] - o[2],v?",":y,!0),v && (o = o.length < 4?1:o[3],g.appendXtra("",o,(p.length < 4?1:p[3]) - o,y,!1))),la.lastIndex = 0;else if(s = o.match(q)){if((t = p.match(r),!t || t.length !== s.length))return g;for(n = 0,m = 0;m < s.length;m++) x = s[m],w = o.indexOf(x,n),g.appendXtra(o.substr(n,w - n),Number(x),ea(t[m],x),"",D && "px" === o.substr(w + x.length,2),0 === m),n = w + x.length;g["xs" + g.l] += o.substr(n);}else g["xs" + g.l] += g.l?" " + p:p;if(-1 !== d.indexOf("=") && g.data){for(y = g.xs0 + g.data.s,l = 1;l < g.l;l++) y += g["xs" + l] + g.data["xn" + l];g.e = y + g["xs" + l];}return g.l || (g.type = -1,g.xs0 = g.e),g.xfirst || g;},sa=9;for(j = pa.prototype,j.l = j.pr = 0;--sa > 0;) j["xn" + sa] = 0,j["xs" + sa] = "";j.xs0 = "",j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null,j.appendXtra = function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs" + h] += f && h?" " + a:a || "",c || 0 === h || g.plugin?(g.l++,g.type = g.setRatio?2:1,g["xs" + g.l] = d || "",h > 0?(g.data["xn" + h] = b + c,g.rxp["xn" + h] = e,g["xn" + h] = b,g.plugin || (g.xfirst = new pa(g,"xn" + h,b,c,g.xfirst || g,0,g.n,e,g.pr),g.xfirst.xs0 = 0),g):(g.data = {s:b + c},g.rxp = {},g.s = b,g.c = c,g.r = e,g)):(g["xs" + h] += b + (d || ""),g);};var ta=function ta(a,b){b = b || {},this.p = b.prefix?V(a) || a:a,i[a] = i[this.p] = this,this.format = b.formatter || ma(b.defaultValue,b.color,b.collapsible,b.multi),b.parser && (this.parse = b.parser),this.clrs = b.color,this.multi = b.multi,this.keyword = b.keyword,this.dflt = b.defaultValue,this.pr = b.priority || 0;},ua=O._registerComplexSpecialProp = function(a,b,c){"object" != typeof b && (b = {parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c = c || [g],d = 0;d < f.length;d++) b.prefix = 0 === d && b.prefix,b.defaultValue = c[d] || g,e = new ta(f[d],b);},va=function va(a){if(!i[a]){var b=a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";ua(a,{parser:function parser(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(S("Error: " + b + " js file not loaded."),f);}});}};j = ta.prototype,j.parseComplex = function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if((this.multi && (G.test(c) || G.test(b)?(h = b.replace(G,"|").split("|"),i = c.replace(G,"|").split("|")):m && (h = [b],i = [c])),i)){for(j = i.length > h.length?i.length:h.length,g = 0;j > g;g++) b = h[g] = h[g] || this.dflt,c = i[g] = i[g] || this.dflt,m && (k = b.indexOf(m),l = c.indexOf(m),k !== l && (-1 === l?h[g] = h[g].split(m).join(""):-1 === k && (h[g] += " " + m)));b = h.join(", "),c = i.join(", ");}return ra(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f);},j.parse = function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(X(a,this.p,e,!1,this.dflt)),this.format(b),f,g);},g.registerSpecialProp = function(a,b,c){ua(a,{parser:function parser(a,d,e,f,g,h,i){var j=new pa(a,e,0,0,g,2,e,!1,c);return j.plugin = h,j.setRatio = b(a,d,f._tween,e),j;},priority:c});},g.useSVGTransformAttr = m || n;var wa,xa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ya=V("transform"),za=T + "transform",Aa=V("transformOrigin"),Ba=null !== V("perspective"),Ca=O.Transform = function(){this.perspective = parseFloat(g.defaultTransformPerspective) || 0,this.force3D = g.defaultForce3D !== !1 && Ba?g.defaultForce3D || "auto":!1;},Da=window.SVGElement,Ea=function Ea(a,b,c){var d,e=K.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c) e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e;},Fa=K.documentElement,Ga=(function(){var a,b,c,d=p || /Android/i.test(P) && !window.chrome;return K.createElementNS && !d && (a = Ea("svg",Fa),b = Ea("rect",a,{width:100,height:50,x:100}),c = b.getBoundingClientRect().width,b.style[Aa] = "50% 50%",b.style[ya] = "scaleX(0.5)",d = c === b.getBoundingClientRect().width && !(n && Ba),Fa.removeChild(a)),d;})(),Ha=function Ha(a,b,c,d,e){var f,h,i,j,k,l,m,n,o,p,q,r,s,t,u=a._gsTransform,v=Ka(a,!0);u && (s = u.xOrigin,t = u.yOrigin),(!d || (f = d.split(" ")).length < 2) && (m = a.getBBox(),b = da(b).split(" "),f = [(-1 !== b[0].indexOf("%")?parseFloat(b[0]) / 100 * m.width:parseFloat(b[0])) + m.x,(-1 !== b[1].indexOf("%")?parseFloat(b[1]) / 100 * m.height:parseFloat(b[1])) + m.y]),c.xOrigin = j = parseFloat(f[0]),c.yOrigin = k = parseFloat(f[1]),d && v !== Ja && (l = v[0],m = v[1],n = v[2],o = v[3],p = v[4],q = v[5],r = l * o - m * n,h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r,i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r,j = c.xOrigin = f[0] = h,k = c.yOrigin = f[1] = i),u && (e || e !== !1 && g.defaultSmoothOrigin !== !1?(h = j - s,i = k - t,u.xOffset += h * v[0] + i * v[2] - h,u.yOffset += h * v[1] + i * v[3] - i):u.xOffset = u.yOffset = 0),a.setAttribute("data-svg-origin",f.join(" "));},Ia=function Ia(a){return !!(Da && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM));},Ja=[1,0,0,1,0,0],Ka=function Ka(a,b){var c,d,e,f,g,h=a._gsTransform || new Ca(),i=1e5;if((ya?d = X(a,za,null,!0):a.currentStyle && (d = a.currentStyle.filter.match(E),d = d && 4 === d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x || 0,h.y || 0].join(","):""),c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d,(h.svg || a.getBBox && Ia(a)) && (c && -1 !== (a.style[ya] + "").indexOf("matrix") && (d = a.style[ya],c = 0),e = a.getAttribute("transform"),c && e && (-1 !== e.indexOf("matrix")?(d = e,c = 0):-1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",c = 0))),c))return Ja;for(e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],sa = e.length;--sa > -1;) f = Number(e[sa]),e[sa] = (g = f - (f |= 0))?(g * i + (0 > g?-.5:.5) | 0) / i + f:f;return b && e.length > 6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e;},La=O.getTransform = function(a,c,d,f){if(a._gsTransform && d && !f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform || new Ca():new Ca(),o=n.scaleX < 0,p=2e-5,q=1e5,r=Ba?parseFloat(X(a,Aa,c,!1,"0 0 0").split(" ")[2]) || n.zOrigin || 0:0,s=parseFloat(g.defaultTransformPerspective) || 0;if((n.svg = !(!a.getBBox || !Ia(a)),n.svg && (Ha(a,X(a,Aa,e,!1,"50% 50%") + "",n,a.getAttribute("data-svg-origin")),wa = g.useSVGTransformAttr || Ga),h = Ka(a),h !== Ja)){if(16 === h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],J=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,J);n.zOrigin && (M = -n.zOrigin,K = G * M - h[12],L = H * M - h[13],M = J * M + n.zOrigin - h[14]),n.rotationX = O * I,O && (w = Math.cos(-O),x = Math.sin(-O),t = C * w + G * x,u = D * w + H * x,v = E * w + J * x,G = C * -x + G * w,H = D * -x + H * w,J = E * -x + J * w,N = F * -x + N * w,C = t,D = u,E = v),O = Math.atan2(-A,J),n.rotationY = O * I,O && (w = Math.cos(-O),x = Math.sin(-O),t = y * w - G * x,u = z * w - H * x,v = A * w - J * x,H = z * x + H * w,J = A * x + J * w,N = B * x + N * w,y = t,z = u,A = v),O = Math.atan2(z,y),n.rotation = O * I,O && (w = Math.cos(-O),x = Math.sin(-O),y = y * w + C * x,u = z * w + D * x,D = z * -x + D * w,E = A * -x + E * w,z = u),n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0,n.rotationY = 180 - n.rotationY),n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q,n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q,n.scaleZ = (Math.sqrt(E * E + J * J) * q + .5 | 0) / q,n.skewX = 0,n.perspective = N?1 / (0 > N?-N:N):0,n.x = K,n.y = L,n.z = M,n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C),n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D));}else if((!Ba || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== X(a,"display",c))){var P=h.length >= 6,Q=P?h[0]:1,R=h[1] || 0,S=h[2] || 0,T=P?h[3]:1;n.x = h[4] || 0,n.y = h[5] || 0,j = Math.sqrt(Q * Q + R * R),k = Math.sqrt(T * T + S * S),l = Q || R?Math.atan2(R,Q) * I:n.rotation || 0,m = S || T?Math.atan2(S,T) * I + l:n.skewX || 0,Math.abs(m) > 90 && Math.abs(m) < 270 && (o?(j *= -1,m += 0 >= l?180:-180,l += 0 >= l?180:-180):(k *= -1,m += 0 >= m?180:-180)),n.scaleX = j,n.scaleY = k,n.rotation = l,n.skewX = m,Ba && (n.rotationX = n.rotationY = n.z = 0,n.perspective = s,n.scaleZ = 1),n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S),n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T));}n.zOrigin = r;for(i in n) n[i] < p && n[i] > -p && (n[i] = 0);}return d && (a._gsTransform = n,n.svg && (wa && a.style[ya]?b.delayedCall(.001,function(){Pa(a.style,ya);}):!wa && a.getAttribute("transform") && b.delayedCall(.001,function(){a.removeAttribute("transform");}))),n;},Ma=function Ma(a){var b,c,d=this.data,e=-d.rotation * H,f=e + d.skewX * H,g=1e5,h=(Math.cos(e) * d.scaleX * g | 0) / g,i=(Math.sin(e) * d.scaleX * g | 0) / g,j=(Math.sin(f) * -d.scaleY * g | 0) / g,k=(Math.cos(f) * d.scaleY * g | 0) / g,l=this.t.style,m=this.t.currentStyle;if(m){c = i,i = -j,j = -c,b = m.filter,l.filter = "";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute" !== m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,w=d.x + q * d.xPercent / 100,x=d.y + r * d.yPercent / 100;if((null != d.ox && (n = (d.oxp?q * d.ox * .01:d.ox) - q / 2,o = (d.oyp?r * d.oy * .01:d.oy) - r / 2,w += n - (n * h + o * i),x += o - (n * j + o * k)),s?(n = q / 2,o = r / 2,t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")"):t += ", sizingMethod='auto expand')",-1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter = b.replace(F,t):l.filter = t + " " + b,(0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")),!s)){var y,z,A,B=8 > p?1:-1;for(n = d.ieOffsetX || 0,o = d.ieOffsetY || 0,d.ieOffsetX = Math.round((q - ((0 > h?-h:h) * q + (0 > i?-i:i) * r)) / 2 + w),d.ieOffsetY = Math.round((r - ((0 > k?-k:k) * r + (0 > j?-j:j) * q)) / 2 + x),sa = 0;4 > sa;sa++) z = ba[sa],y = m[z],c = -1 !== y.indexOf("px")?parseFloat(y):Y(this.t,z,parseFloat(y),y.replace(u,"")) || 0,A = c !== d[z]?2 > sa?-d.ieOffsetX:-d.ieOffsetY:2 > sa?n - d.ieOffsetX:o - d.ieOffsetY,l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa?1:B))) + "px";}}},Na=O.set3DTransformRatio = O.setTransformRatio = function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,I=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || wa && L || !Ba)return void (B || z.skewX || L?(B *= H,x = z.skewX * H,y = 1e5,b = Math.cos(B) * E,e = Math.sin(B) * E,c = Math.sin(B - x) * -F,f = Math.cos(B - x) * F,x && "simple" === z.skewType && (s = Math.tan(x),s = Math.sqrt(1 + s * s),c *= s,f *= s,z.skewY && (b *= s,e *= s)),L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset,wa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(),I += .01 * z.xPercent * p.width,J += .01 * z.yPercent * p.height),p = 1e-6,p > I && I > -p && (I = 0),p > J && J > -p && (J = 0)),u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + I + "," + J + ")",L && wa?this.t.setAttribute("transform","matrix(" + u):A[ya] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(":"matrix(") + u):A[ya] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(":"matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");if((n && (p = 1e-4,p > E && E > -p && (E = G = 2e-5),p > F && F > -p && (F = G = 2e-5),!M || z.z || z.rotationX || z.rotationY || (M = 0)),B || z.skewX))B *= H,q = b = Math.cos(B),r = e = Math.sin(B),z.skewX && (B -= z.skewX * H,q = Math.cos(B),r = Math.sin(B),"simple" === z.skewType && (s = Math.tan(z.skewX * H),s = Math.sqrt(1 + s * s),q *= s,r *= s,z.skewY && (b *= s,e *= s))),c = -r,f = q;else {if(!(D || C || 1 !== G || M || L))return void (A[ya] = (z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(":"translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F?" scale(" + E + "," + F + ")":""));b = f = 1,c = e = 0;}j = 1,d = g = h = i = k = l = 0,m = M?-1 / M:0,o = z.zOrigin,p = 1e-6,v = ",",w = "0",B = D * H,B && (q = Math.cos(B),r = Math.sin(B),h = -r,k = m * -r,d = b * r,g = e * r,j = q,m *= q,b *= q,e *= q),B = C * H,B && (q = Math.cos(B),r = Math.sin(B),s = c * q + d * r,t = f * q + g * r,i = j * r,l = m * r,d = c * -r + d * q,g = f * -r + g * q,j *= q,m *= q,c = s,f = t),1 !== G && (d *= G,g *= G,j *= G,m *= G),1 !== F && (c *= F,f *= F,i *= F,l *= F),1 !== E && (b *= E,e *= E,h *= E,k *= E),(o || L) && (o && (I += d * -o,J += g * -o,K += j * -o + o),L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset,J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset),p > I && I > -p && (I = w),p > J && J > -p && (J = w),p > K && K > -p && (K = 0)),u = z.xPercent || z.yPercent?"translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(":"matrix3d(",u += (p > b && b > -p?w:b) + v + (p > e && e > -p?w:e) + v + (p > h && h > -p?w:h),u += v + (p > k && k > -p?w:k) + v + (p > c && c > -p?w:c) + v + (p > f && f > -p?w:f),C || D || 1 !== G?(u += v + (p > i && i > -p?w:i) + v + (p > l && l > -p?w:l) + v + (p > d && d > -p?w:d),u += v + (p > g && g > -p?w:g) + v + (p > j && j > -p?w:j) + v + (p > m && m > -p?w:m) + v):u += ",0,0,0,0,1,0,",u += I + v + J + v + K + v + (M?1 + -K / M:1) + ")",A[ya] = u;};j = Ca.prototype,j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0,j.scaleX = j.scaleY = j.scaleZ = 1,ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function parser(a,b,c,d,f,h,i){if(d._lastParsedTransform === i)return f;d._lastParsedTransform = i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=xa.length,x=i,y={},z="transformOrigin";if((i.display?(m = X(a,"display"),u.display = "block",j = La(a,e,!0,i.parseTransform),u.display = m):j = La(a,e,!0,i.parseTransform),d._transform = j,"string" == typeof x.transform && ya))m = M.style,m[ya] = x.transform,m.display = "block",m.position = "absolute",K.body.appendChild(M),k = La(M,null,!1),K.body.removeChild(M),k.perspective || (k.perspective = j.perspective),null != x.xPercent && (k.xPercent = fa(x.xPercent,j.xPercent)),null != x.yPercent && (k.yPercent = fa(x.yPercent,j.yPercent));else if("object" == typeof x){if((k = {scaleX:fa(null != x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:fa(null != x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:fa(x.scaleZ,j.scaleZ),x:fa(x.x,j.x),y:fa(x.y,j.y),z:fa(x.z,j.z),xPercent:fa(x.xPercent,j.xPercent),yPercent:fa(x.yPercent,j.yPercent),perspective:fa(x.transformPerspective,j.perspective)},q = x.directionalRotation,null != q))if("object" == typeof q)for(m in q) x[m] = q[m];else x.rotation = q;"string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0,k.xPercent = fa(x.x,j.xPercent)),"string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0,k.yPercent = fa(x.y,j.yPercent)),k.rotation = ga("rotation" in x?x.rotation:"shortRotation" in x?x.shortRotation + "_short":"rotationZ" in x?x.rotationZ:j.rotation,j.rotation,"rotation",y),Ba && (k.rotationX = ga("rotationX" in x?x.rotationX:"shortRotationX" in x?x.shortRotationX + "_short":j.rotationX || 0,j.rotationX,"rotationX",y),k.rotationY = ga("rotationY" in x?x.rotationY:"shortRotationY" in x?x.shortRotationY + "_short":j.rotationY || 0,j.rotationY,"rotationY",y)),k.skewX = null == x.skewX?j.skewX:ga(x.skewX,j.skewX),k.skewY = null == x.skewY?j.skewY:ga(x.skewY,j.skewY),(l = k.skewY - j.skewY) && (k.skewX += l,k.rotation += l);}for(Ba && null != x.force3D && (j.force3D = x.force3D,p = !0),j.skewType = x.skewType || j.skewType || g.defaultSkewType,o = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective,o || null == x.scale || (k.scaleZ = 1);--w > -1;) c = xa[w],n = k[c] - j[c],(n > v || -v > n || null != x[c] || null != J[c]) && (p = !0,f = new pa(j,c,j[c],n,f),c in y && (f.e = y[c]),f.xs0 = 0,f.plugin = h,d._overwriteProps.push(f.n));return n = x.transformOrigin,j.svg && (n || x.svgOrigin) && (r = j.xOffset,s = j.yOffset,Ha(a,da(n),k,x.svgOrigin,x.smoothOrigin),f = qa(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f = qa(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(r !== j.xOffset || s !== j.yOffset) && (f = qa(j,"xOffset",t?r:j.xOffset,j.xOffset,f,z),f = qa(j,"yOffset",t?s:j.yOffset,j.yOffset,f,z)),n = wa?null:"0px 0px"),(n || Ba && o && j.zOrigin) && (ya?(p = !0,c = Aa,n = (n || X(a,c,e,!1,"50% 50%")) + "",f = new pa(u,c,0,0,f,-1,z),f.b = u[c],f.plugin = h,Ba?(m = j.zOrigin,n = n.split(" "),j.zOrigin = (n.length > 2 && (0 === m || "0px" !== n[2])?parseFloat(n[2]):m) || 0,f.xs0 = f.e = n[0] + " " + (n[1] || "50%") + " 0px",f = new pa(j,"zOrigin",0,0,f,-1,f.n),f.b = m,f.xs0 = f.e = j.zOrigin):f.xs0 = f.e = n):da(n + "",j)),p && (d._transformType = j.svg && wa || !o && 3 !== this._transformType?2:3),f;},prefix:!0}),ua("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ua("borderRadius",{defaultValue:"0px",parser:function parser(a,b,c,f,g,h){b = this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q = parseFloat(a.offsetWidth),r = parseFloat(a.offsetHeight),i = b.split(" "),j = 0;j < y.length;j++) this.p.indexOf("border") && (y[j] = V(y[j])),m = l = X(a,y[j],e,!1,"0px"),-1 !== m.indexOf(" ") && (l = m.split(" "),m = l[0],l = l[1]),n = k = i[j],o = parseFloat(m),t = m.substr((o + "").length),u = "=" === n.charAt(1),u?(p = parseInt(n.charAt(0) + "1",10),n = n.substr(2),p *= parseFloat(n),s = n.substr((p + "").length - (0 > p?1:0)) || ""):(p = parseFloat(n),s = n.substr((p + "").length)),"" === s && (s = d[c] || t),s !== t && (v = Y(a,"borderLeft",o,t),w = Y(a,"borderTop",o,t),"%" === s?(m = v / q * 100 + "%",l = w / r * 100 + "%"):"em" === s?(x = Y(a,"borderLeft",1,"em"),m = v / x + "em",l = w / x + "em"):(m = v + "px",l = w + "px"),u && (n = parseFloat(m) + p + s,k = parseFloat(l) + p + s)),g = ra(z,y[j],m + " " + l,n + " " + k,!1,"0px",g);return g;},prefix:!0,formatter:ma("0px 0px 0px 0px",!1,!0)}),ua("backgroundPosition",{defaultValue:"0 0",parser:function parser(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e || W(a,null),q=this.format((o?p?o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),r=this.format(b);if(-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a,"backgroundImage").replace(B,""),m && "none" !== m)){for(h = q.split(" "),i = r.split(" "),N.setAttribute("src",m),j = 2;--j > -1;) q = h[j],k = -1 !== q.indexOf("%"),k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j?a.offsetWidth - N.width:a.offsetHeight - N.height,h[j] = k?parseFloat(q) / 100 * l + "px":parseFloat(q) / l * 100 + "%");q = h.join(" ");}return this.parseComplex(a.style,q,r,f,g);},formatter:da}),ua("backgroundSize",{defaultValue:"0 0",formatter:da}),ua("perspective",{defaultValue:"0px",prefix:!0}),ua("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ua("transformStyle",{prefix:!0}),ua("backfaceVisibility",{prefix:!0}),ua("userSelect",{prefix:!0}),ua("margin",{parser:na("marginTop,marginRight,marginBottom,marginLeft")}),ua("padding",{parser:na("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ua("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function parser(a,b,c,d,f,g){var h,i,j;return 9 > p?(i = a.currentStyle,j = 8 > p?" ":",",h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",b = this.format(b).split(",").join(j)):(h = this.format(X(a,this.p,e,!1,this.dflt)),b = this.format(b)),this.parseComplex(a.style,h,b,f,g);}}),ua("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ua("autoRound,strictUnits",{parser:function parser(a,b,c,d,e){return e;}}),ua("border",{defaultValue:"0px solid #000",parser:function parser(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(X(a,"borderTopWidth",e,!1,"0px") + " " + X(a,"borderTopStyle",e,!1,"solid") + " " + X(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g);},color:!0,formatter:function formatter(a){var b=a.split(" ");return b[0] + " " + (b[1] || "solid") + " " + (a.match(la) || ["#000"])[0];}}),ua("borderWidth",{parser:na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ua("float,cssFloat,styleFloat",{parser:function parser(a,b,c,d,e,f){var g=a.style,h="cssFloat" in g?"cssFloat":"styleFloat";return new pa(g,h,0,0,e,-1,c,!1,0,g[h],b);}});var Oa=function Oa(a){var b,c=this.t,d=c.filter || X(this.data,"filter") || "",e=this.s + this.c * a | 0;100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(")?(c.removeAttribute("filter"),b = !X(this.data,"filter")):(c.filter = d.replace(x,""),b = !0)),b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),-1 === d.indexOf("pacity")?0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")"):c.filter = d.replace(v,"opacity=" + e));};ua("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function parser(a,b,c,d,f,g){var h=parseFloat(X(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha" === c;return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0)?-1:1) * parseFloat(b.substr(2)) + h),j && 1 === h && "hidden" === X(a,"visibility",e) && 0 !== b && (h = 0),Q?f = new pa(i,"opacity",h,b - h,f):(f = new pa(i,"opacity",100 * h,100 * (b - h),f),f.xn1 = j?1:0,i.zoom = 1,f.type = 2,f.b = "alpha(opacity=" + f.s + ")",f.e = "alpha(opacity=" + (f.s + f.c) + ")",f.data = a,f.plugin = g,f.setRatio = Oa),j && (f = new pa(i,"visibility",0,0,f,-1,null,!1,0,0 !== h?"inherit":"hidden",0 === b?"hidden":"inherit"),f.xs0 = "inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f;}});var Pa=function Pa(a,b){b && (a.removeProperty?(("ms" === b.substr(0,2) || "webkit" === b.substr(0,6)) && (b = "-" + b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b));},Qa=function Qa(a){if((this.t._gsClassPT = this,1 === a || 0 === a)){this.t.setAttribute("class",0 === a?this.b:this.e);for(var b=this.data,c=this.t.style;b;) b.v?c[b.p] = b.v:Pa(c,b.p),b = b._next;1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);}else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class",this.e);};ua("className",{parser:function parser(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class") || "",p=a.style.cssText;if((g = f._classNamePT = new pa(a,d,0,0,g,2),g.setRatio = Qa,g.pr = -11,c = !0,g.b = o,k = $(a,e),l = a._gsClassPT)){for(m = {},n = l.data;n;) m[n.p] = 1,n = n._next;l.setRatio(1);}return a._gsClassPT = g,g.e = "=" !== b.charAt(1)?b:o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"),"") + ("+" === b.charAt(0)?" " + b.substr(2):""),a.setAttribute("class",g.e),j = _(a,k,$(a),i,m),a.setAttribute("class",o),g.data = j.firstMPT,a.style.cssText = p,g = g.xfirst = f.parse(a,j.difs,g,h);}});var Ra=function Ra(a){if((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all" === this.e)g.cssText = "",e = !0;else for(b = this.e.split(" ").join("").split(","),d = b.length;--d > -1;) c = b[d],i[c] && (i[c].parse === h?e = !0:c = "transformOrigin" === c?Aa:i[c].p),Pa(g,c);e && (Pa(g,ya),f = this.t._gsTransform,f && (f.svg && (this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform));}};for(ua("clearProps",{parser:function parser(a,b,d,e,f){return f = new pa(a,d,0,0,f,2),f.setRatio = Ra,f.e = b,f.pr = -10,f.data = e._tween,c = !0,f;}}),j = "bezier,throwProps,physicsProps,physics2D".split(","),sa = j.length;sa--;) va(j[sa]);j = g.prototype,j._firstPT = j._lastParsedTransform = j._transform = null,j._onInitTween = function(a,b,h){if(!a.nodeType)return !1;this._target = a,this._tween = h,this._vars = b,k = b.autoRound,c = !1,d = b.suffixMap || g.suffixMap,e = W(a,""),f = this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if((l && "" === x.zIndex && (j = X(a,"zIndex",e),("auto" === j || "" === j) && this._addLazySet(x,"zIndex",0)),"string" == typeof b && (q = x.cssText,j = $(a,e),x.cssText = q + ";" + b,j = _(a,j,$(a)).difs,!Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)),b = j,x.cssText = q),b.className?this._firstPT = n = i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT = n = this.parse(a,b,null),this._transformType)){for(v = 3 === this._transformType,ya?m && (l = !0,"" === x.zIndex && (t = X(a,"zIndex",e),("auto" === t || "" === t) && this._addLazySet(x,"zIndex",0)),o && this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility || (v?"visible":"hidden"))):x.zoom = 1,p = n;p && p._next;) p = p._next;u = new pa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio = ya?Na:Ma,u.data = this._transform || La(a,e,!0),u.tween = h,u.pr = -1,f.pop();}if(c){for(;n;) {for(s = n._next,p = q;p && p.pr > n.pr;) p = p._next;(n._prev = p?p._prev:r)?n._prev._next = n:q = n,(n._next = p)?p._prev = n:r = n,n = s;}this._firstPT = q;}return !0;},j.parse = function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b) n = b[g],h = i[g],h?c = h.parse(a,n,g,this,c,f,b):(m = X(a,g,e) + "",q = "string" == typeof n,"color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n)?(q || (n = ja(n),n = (n.length > 3?"rgba(":"rgb(") + n.join(",") + ")"),c = ra(s,g,m,n,!0,"transparent",c,0,f)):!q || -1 === n.indexOf(" ") && -1 === n.indexOf(",")?(j = parseFloat(m),o = j || 0 === j?m.substr((j + "").length):"",("" === m || "auto" === m) && ("width" === g || "height" === g?(j = ca(a,g,e),o = "px"):"left" === g || "top" === g?(j = Z(a,g,e),o = "px"):(j = "opacity" !== g?0:1,o = "")),r = q && "=" === n.charAt(1),r?(l = parseInt(n.charAt(0) + "1",10),n = n.substr(2),l *= parseFloat(n),p = n.replace(u,"")):(l = parseFloat(n),p = q?n.replace(u,""):""),"" === p && (p = g in d?d[g]:o),n = l || 0 === l?(r?l + j:l) + p:b[g],o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a,g,j,o),"%" === p?(j /= Y(a,g,100,"%") / 100,b.strictUnits !== !0 && (m = j + "%")):"em" === p || "rem" === p || "vw" === p || "vh" === p?j /= Y(a,g,1,p):"px" !== p && (l = Y(a,g,l,p),p = "px"),r && (l || 0 === l) && (n = l + j + p)),r && (l += j),!j && 0 !== j || !l && 0 !== l?void 0 !== s[g] && (n || n + "" != "NaN" && null != n)?(c = new pa(s,g,l || j || 0,0,c,-1,g,!1,0,m,n),c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style")?n:m):S("invalid " + g + " tween value: " + b[g]):(c = new pa(s,g,j,l - j,c,0,g,k !== !1 && ("px" === p || "zIndex" === g),0,m,n),c.xs0 = p)):c = ra(s,g,m,n,!0,null,c,0,f)),f && c && !c.plugin && (c.plugin = f);return c;},j.setRatio = function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if(a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for(;e;) {if((b = e.c * a + e.s,e.r?b = Math.round(b):f > b && b > -f && (b = 0),e.type))if(1 === e.type)if((d = e.l,2 === d))e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if(3 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if(4 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if(5 === d)e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {for(c = e.xs0 + b + e.xs1,d = 1;d < e.l;d++) c += e["xn" + d] + e["xs" + (d + 1)];e.t[e.p] = c;}else -1 === e.type?e.t[e.p] = e.xs0:e.setRatio && e.setRatio(a);else e.t[e.p] = b + e.xs0;e = e._next;}else for(;e;) 2 !== e.type?e.t[e.p] = e.b:e.setRatio(a),e = e._next;else for(;e;) {if(2 !== e.type)if(e.r && -1 !== e.type)if((b = Math.round(e.s + e.c),e.type)){if(1 === e.type){for(d = e.l,c = e.xs0 + b + e.xs1,d = 1;d < e.l;d++) c += e["xn" + d] + e["xs" + (d + 1)];e.t[e.p] = c;}}else e.t[e.p] = b + e.xs0;else e.t[e.p] = e.e;else e.setRatio(a);e = e._next;}},j._enableTransforms = function(a){this._transform = this._transform || La(this._target,e,!0),this._transformType = this._transform.svg && wa || !a && 3 !== this._transformType?2:3;};var Sa=function Sa(a){this.t[this.p] = this.e,this.data._linkCSSP(this,this._next,null,!0);};j._addLazySet = function(a,b,c){var d=this._firstPT = new pa(a,b,0,0,this._firstPT,2);d.e = c,d.setRatio = Sa,d.data = this;},j._linkCSSP = function(a,b,c,d){return a && (b && (b._prev = a),a._next && (a._next._prev = a._prev),a._prev?a._prev._next = a._next:this._firstPT === a && (this._firstPT = a._next,d = !0),c?c._next = a:d || null !== this._firstPT || (this._firstPT = a),a._next = b,a._prev = c),a;},j._kill = function(b){var c,d,e,f=b;if(b.autoAlpha || b.alpha){f = {};for(d in b) f[d] = b[d];f.opacity = 1,f.autoAlpha && (f.visibility = 1);}return b.className && (c = this._classNamePT) && (e = c.xfirst,e && e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e === this._firstPT && (this._firstPT = c._next),c._next && this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT = null),a.prototype._kill.call(this,f);};var Ta=function Ta(a,b,c){var d,e,f,g;if(a.slice)for(e = a.length;--e > -1;) Ta(a[e],b,c);else for(d = a.childNodes,e = d.length;--e > -1;) f = d[e],g = f.type,f.style && (b.push($(f)),c && c.push(f)),1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ta(f,b,c);};return g.cascadeTo = function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a = i._targets || i.target,Ta(a,k,m),i.render(c,!0,!0),Ta(a,l),i.render(0,!0,!0),i._enabled(!0),e = m.length;--e > -1;) if((f = _(m[e],k[e],l[e]),f.firstMPT)){f = f.difs;for(g in d) n[g] && (f[g] = d[g]);h = {};for(g in f) h[g] = k[e][g];j.push(b.fromTo(m[e],c,h,f));}return j;},a.activate([g]),g;},!0),(function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function init(a,b,c){return this._tween = c,!0;}}),b=function b(a){for(;a;) a.f || a.blob || (a.r = 1),a = a._next;},c=a.prototype;c._onInitAllProps = function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g > -1;) h[f[g]] = 1;for(g = f.length;--g > -1;) for(a = f[g],c = e._firstPT;c;) d = c._next,c.pg?c.t._roundProps(h,!0):c.n === a && (2 === c.f && c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d && (d._prev = c._prev),c._prev?c._prev._next = d:e._firstPT === c && (e._firstPT = d),c._next = c._prev = null,e._propLookup[a] = i)),c = d;return !1;},c._add = function(a,b,c,d){this._addTween(a,b,c,c + d,b,!0),this._overwriteProps.push(b);};})(),(function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function init(a,b,c){var d;if("function" != typeof a.setAttribute)return !1;for(d in b) this._addTween(a,"setAttribute",a.getAttribute(d) + "",b[d] + "",d,!1,d),this._overwriteProps.push(d);return !0;}});})(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function init(a,b,c){"object" != typeof b && (b = {rotation:b}),this.finals = {};var d,e,f,g,h,i,j=b.useRadians === !0?2 * Math.PI:360,k=1e-6;for(d in b) "useRadians" !== d && (i = (b[d] + "").split("_"),e = i[0],f = parseFloat("function" != typeof a[d]?a[d]:a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)]?d:"get" + d.substr(3)]()),g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1)?f + parseInt(e.charAt(0) + "1",10) * Number(e.substr(2)):Number(e) || 0,h = g - f,i.length && (e = i.join("_"),-1 !== e.indexOf("short") && (h %= j,h !== h % (j / 2) && (h = 0 > h?h + j:h - j)),-1 !== e.indexOf("_cw") && 0 > h?h = (h + 9999999999 * j) % j - (h / j | 0) * j:-1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)),(h > k || -k > h) && (this._addTween(a,d,f,f + h,d),this._overwriteProps.push(d)));return !0;},set:function set(a){var b;if(1 !== a)this._super.setRatio.call(this,a);else for(b = this._firstPT;b;) b.f?b.t[b.p](this.finals[b.p]):b.t[b.p] = this.finals[b.p],b = b._next;}})._autoCSS = !0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals || _gsScope,f=e.com.greensock,g=2 * Math.PI,h=Math.PI / 2,i=f._class,j=function j(b,c){var d=i("easing." + b,function(){},!0),e=d.prototype = new a();return e.constructor = d,e.getRatio = c,d;},k=a.register || function(){},l=function l(a,b,c,d,e){var f=i("easing." + a,{easeOut:new b(),easeIn:new c(),easeInOut:new d()},!0);return k(f,a),f;},m=function m(a,b,c){this.t = a,this.v = b,c && (this.next = c,c.prev = this,this.c = c.v - b,this.gap = c.t - a);},n=function n(b,c){var d=i("easing." + b,function(a){this._p1 = a || 0 === a?a:1.70158,this._p2 = 1.525 * this._p1;},!0),e=d.prototype = new a();return e.constructor = d,e.getRatio = c,e.config = function(a){return new d(a);},d;},o=l("Back",n("BackOut",function(a){return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;}),n("BackIn",function(a){return a * a * ((this._p1 + 1) * a - this._p1);}),n("BackInOut",function(a){return (a *= 2) < 1?.5 * a * a * ((this._p2 + 1) * a - this._p2):.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);})),p=i("easing.SlowMo",function(a,b,c){b = b || 0 === b?b:.7,null == a?a = .7:a > 1 && (a = 1),this._p = 1 !== a?b:0,this._p1 = (1 - a) / 2,this._p2 = a,this._p3 = this._p1 + this._p2,this._calcEnd = c === !0;},!0),q=p.prototype = new a();return q.constructor = p,q.getRatio = function(a){var b=a + (.5 - a) * this._p;return a < this._p1?this._calcEnd?1 - (a = 1 - a / this._p1) * a:b - (a = 1 - a / this._p1) * a * a * a * b:a > this._p3?this._calcEnd?1 - (a = (a - this._p3) / this._p1) * a:b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a:this._calcEnd?1:b;},p.ease = new p(.7,.7),q.config = p.config = function(a,b,c){return new p(a,b,c);},b = i("easing.SteppedEase",function(a){a = a || 1,this._p1 = 1 / a,this._p2 = a + 1;},!0),q = b.prototype = new a(),q.constructor = b,q.getRatio = function(a){return 0 > a?a = 0:a >= 1 && (a = .999999999),(this._p2 * a >> 0) * this._p1;},q.config = b.config = function(a){return new b(a);},c = i("easing.RoughEase",function(b){b = b || {};for(var c,d,e,f,g,h,i=b.taper || "none",j=[],k=0,l=0 | (b.points || 20),n=l,o=b.randomize !== !1,p=b.clamp === !0,q=b.template instanceof a?b.template:null,r="number" == typeof b.strength?.4 * b.strength:.4;--n > -1;) c = o?Math.random():1 / l * n,d = q?q.getRatio(c):c,"none" === i?e = r:"out" === i?(f = 1 - c,e = f * f * r):"in" === i?e = c * c * r:.5 > c?(f = 2 * c,e = f * f * .5 * r):(f = 2 * (1 - c),e = f * f * .5 * r),o?d += Math.random() * e - .5 * e:n % 2?d += .5 * e:d -= .5 * e,p && (d > 1?d = 1:0 > d && (d = 0)),j[k++] = {x:c,y:d};for(j.sort(function(a,b){return a.x - b.x;}),h = new m(1,1,null),n = l;--n > -1;) g = j[n],h = new m(g.x,g.y,h);this._prev = new m(0,0,0 !== h.t?h:h.next);},!0),q = c.prototype = new a(),q.constructor = c,q.getRatio = function(a){var b=this._prev;if(a > b.t){for(;b.next && a >= b.t;) b = b.next;b = b.prev;}else for(;b.prev && a <= b.t;) b = b.prev;return this._prev = b,b.v + (a - b.t) / b.gap * b.c;},q.config = function(a){return new c(a);},c.ease = new c(),l("Bounce",j("BounceOut",function(a){return 1 / 2.75 > a?7.5625 * a * a:2 / 2.75 > a?7.5625 * (a -= 1.5 / 2.75) * a + .75:2.5 / 2.75 > a?7.5625 * (a -= 2.25 / 2.75) * a + .9375:7.5625 * (a -= 2.625 / 2.75) * a + .984375;}),j("BounceIn",function(a){return (a = 1 - a) < 1 / 2.75?1 - 7.5625 * a * a:2 / 2.75 > a?1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75):2.5 / 2.75 > a?1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375):1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);}),j("BounceInOut",function(a){var b=.5 > a;return a = b?1 - 2 * a:2 * a - 1,a = 1 / 2.75 > a?7.5625 * a * a:2 / 2.75 > a?7.5625 * (a -= 1.5 / 2.75) * a + .75:2.5 / 2.75 > a?7.5625 * (a -= 2.25 / 2.75) * a + .9375:7.5625 * (a -= 2.625 / 2.75) * a + .984375,b?.5 * (1 - a):.5 * a + .5;})),l("Circ",j("CircOut",function(a){return Math.sqrt(1 - (a -= 1) * a);}),j("CircIn",function(a){return -(Math.sqrt(1 - a * a) - 1);}),j("CircInOut",function(a){return (a *= 2) < 1?-.5 * (Math.sqrt(1 - a * a) - 1):.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);})),d = function(b,c,d){var e=i("easing." + b,function(a,b){this._p1 = a >= 1?a:1,this._p2 = (b || d) / (1 > a?a:1),this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0),this._p2 = g / this._p2;},!0),f=e.prototype = new a();return f.constructor = e,f.getRatio = c,f.config = function(a,b){return new e(a,b);},e;},l("Elastic",d("ElasticOut",function(a){return this._p1 * Math.pow(2,-10 * a) * Math.sin((a - this._p3) * this._p2) + 1;},.3),d("ElasticIn",function(a){return -(this._p1 * Math.pow(2,10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));},.3),d("ElasticInOut",function(a){return (a *= 2) < 1?-.5 * (this._p1 * Math.pow(2,10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)):this._p1 * Math.pow(2,-10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1;},.45)),l("Expo",j("ExpoOut",function(a){return 1 - Math.pow(2,-10 * a);}),j("ExpoIn",function(a){return Math.pow(2,10 * (a - 1)) - .001;}),j("ExpoInOut",function(a){return (a *= 2) < 1?.5 * Math.pow(2,10 * (a - 1)):.5 * (2 - Math.pow(2,-10 * (a - 1)));})),l("Sine",j("SineOut",function(a){return Math.sin(a * h);}),j("SineIn",function(a){return -Math.cos(a * h) + 1;}),j("SineInOut",function(a){return -.5 * (Math.cos(Math.PI * a) - 1);})),i("easing.EaseLookup",{find:function find(b){return a.map[b];}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o;},!0);}),_gsScope._gsDefine && _gsScope._gsQueue.pop()(),(function(a,b){"use strict";var c=a.GreenSockGlobals = a.GreenSockGlobals || a;if(!c.TweenLite){var d,e,f,g,h,i=function i(a){var b,d=a.split("."),e=c;for(b = 0;b < d.length;b++) e[d[b]] = e = e[d[b]] || {};return e;},j=i("com.greensock"),k=1e-10,l=function l(a){var b,c=[],d=a.length;for(b = 0;b !== d;c.push(a[b++]));return c;},m=function m(){},n=(function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b);};})(),o={},p=function p(d,e,f,g){this.sc = o[d]?o[d].sc:[],o[d] = this,this.gsClass = null,this.func = f;var h=[];this.check = function(j){for(var k,l,m,n,q,r=e.length,s=r;--r > -1;) (k = o[e[r]] || new p(e[r],[])).gsClass?(h[r] = k.gsClass,s--):j && k.sc.push(this);if(0 === s && f)for(l = ("com.greensock." + d).split("."),m = l.pop(),n = i(l.join("."))[m] = this.gsClass = f.apply(f,h),g && (c[m] = n,q = "undefined" != typeof module && module.exports,!q && "function" == typeof define && define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath + "/":"") + d.split(".").pop(),[],function(){return n;}):d === b && q && (module.exports = n)),r = 0;r < this.sc.length;r++) this.sc[r].check();},this.check(!0);},q=a._gsDefine = function(a,b,c,d){return new p(a,b,c,d);},r=j._class = function(a,b,c){return b = b || function(){},q(a,[],function(){return b;},c),b;};q.globals = c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func = a,this._type = c || 0,this._power = d || 0,this._params = b?s.concat(b):s;},!0),v=u.map = {},w=u.register = function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c || "easeIn,easeOut,easeInOut").split(",");--k > -1;) for(f = i[k],e = d?r("easing." + f,null,!0):j.easing[f] || {},g = l.length;--g > -1;) h = l[g],v[f + "." + h] = v[h + f] = e[h] = a.getRatio?a:a[h] || new a();};for(f = u.prototype,f._calcEnd = !1,f.getRatio = function(a){if(this._func)return this._params[0] = a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1 === b?1 - a:2 === b?a:.5 > a?2 * a:2 * (1 - a);return 1 === c?d *= d:2 === c?d *= d * d:3 === c?d *= d * d * d:4 === c && (d *= d * d * d * d),1 === b?1 - d:2 === b?d:.5 > a?d / 2:1 - d / 2;},d = ["Linear","Quad","Cubic","Quart","Quint,Strong"],e = d.length;--e > -1;) f = d[e] + ",Power" + e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn" + (0 === e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear = j.easing.Linear.easeIn,v.swing = j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners = {},this._eventTarget = a || this;});f = x.prototype,f.addEventListener = function(a,b,c,d,e){e = e || 0;var f,i,j=this._listeners[a],k=0;for(null == j && (this._listeners[a] = j = []),i = j.length;--i > -1;) f = j[i],f.c === b && f.s === c?j.splice(i,1):0 === k && f.pr < e && (k = i + 1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this !== g || h || g.wake();},f.removeEventListener = function(a,b){var c,d=this._listeners[a];if(d)for(c = d.length;--c > -1;) if(d[c].c === b)return void d.splice(c,1);},f.dispatchEvent = function(a){var b,c,d,e=this._listeners[a];if(e)for(b = e.length,c = this._eventTarget;--b > -1;) d = e[b],d && (d.up?d.c.call(d.s || c,{type:a,target:c}):d.c.call(d.s || c));};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now || function(){return new Date().getTime();},B=A();for(d = ["ms","moz","webkit","o"],e = d.length;--e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"],z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b !== !1 && y?"auto":!1,o=500,p=33,q="tick",r=function r(a){var b,g,h=A() - B;h > o && (l += h - p),B += h,j.time = (B - l) / 1e3,b = j.time - i,(!c || b > 0 || a === !0) && (j.frame++,i += b + (b >= f?.004:f - b),g = !0),a !== !0 && (e = d(r)),g && j.dispatchEvent(q);};x.call(j),j.time = j.frame = 0,j.tick = function(){r(!0);},j.lagSmoothing = function(a,b){o = a || 1 / k,p = Math.min(b,o,0);},j.sleep = function(){null != e && (n && z?z(e):clearTimeout(e),d = m,e = null,j === g && (h = !1));},j.wake = function(a){null !== e?j.sleep():a?l += -B + (B = A()):j.frame > 10 && (B = A() - o + 5),d = 0 === c?m:n && y?y:function(a){return setTimeout(a,1e3 * (i - j.time) + 1 | 0);},j === g && (h = !0),r(2);},j.fps = function(a){return arguments.length?(c = a,f = 1 / (c || 60),i = this.time + f,void j.wake()):c;},j.useRAF = function(a){return arguments.length?(j.sleep(),n = a,void j.fps(c)):n;},j.fps(a),setTimeout(function(){"auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1);},1500);}),f = j.Ticker.prototype = new j.events.EventDispatcher(),f.constructor = j.Ticker;var C=r("core.Animation",function(a,b){if((this.vars = b = b || {},this._duration = this._totalDuration = a || 0,this._delay = Number(b.delay) || 0,this._timeScale = 1,this._active = b.immediateRender === !0,this.data = b.data,this._reversed = b.reversed === !0,V)){h || g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused && this.paused(!0);}});g = C.ticker = new j.Ticker(),f = C.prototype,f._dirty = f._gc = f._initted = f._paused = !1,f._totalTime = f._time = 0,f._rawPrevTime = -1,f._next = f._last = f._onUpdate = f._timeline = f.timeline = null,f._paused = !1;var D=function D(){h && A() - B > 2e3 && g.wake(),setTimeout(D,2e3);};D(),f.play = function(a,b){return null != a && this.seek(a,b),this.reversed(!1).paused(!1);},f.pause = function(a,b){return null != a && this.seek(a,b),this.paused(!0);},f.resume = function(a,b){return null != a && this.seek(a,b),this.paused(!1);},f.seek = function(a,b){return this.totalTime(Number(a),b !== !1);},f.restart = function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b !== !1,!0);},f.reverse = function(a,b){return null != a && this.seek(a || this.totalDuration(),b),this.reversed(!0).paused(!1);},f.render = function(a,b,c){},f.invalidate = function(){return this._time = this._totalTime = 0,this._initted = this._gc = !1,this._rawPrevTime = -1,(this._gc || !this.timeline) && this._enabled(!0),this;},f.isActive = function(){var a,b=this._timeline,c=this._startTime;return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale;},f._enabled = function(a,b){return h || g.wake(),this._gc = !a,this._active = this.isActive(),b !== !0 && (a && !this.timeline?this._timeline.add(this,this._startTime - this._delay):!a && this.timeline && this._timeline._remove(this,!0)),!1;},f._kill = function(a,b){return this._enabled(!1,!1);},f.kill = function(a,b){return this._kill(a,b),this;},f._uncache = function(a){for(var b=a?this:this.timeline;b;) b._dirty = !0,b = b.timeline;return this;},f._swapSelfInParams = function(a){for(var b=a.length,c=a.concat();--b > -1;) "{self}" === a[b] && (c[b] = this);return c;},f._callback = function(a){var b=this.vars;b[a].apply(b[a + "Scope"] || b.callbackScope || this,b[a + "Params"] || t);},f.eventCallback = function(a,b,c,d){if("on" === (a || "").substr(0,2)){var e=this.vars;if(1 === arguments.length)return e[a];null == b?delete e[a]:(e[a] = b,e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a + "Scope"] = d),"onUpdate" === a && (this._onUpdate = b);}return this;},f.delay = function(a){return arguments.length?(this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),this._delay = a,this):this._delay;},f.duration = function(a){return arguments.length?(this._duration = this._totalDuration = a,this._uncache(!0),this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration),!0),this):(this._dirty = !1,this._duration);},f.totalDuration = function(a){return this._dirty = !1,arguments.length?this.duration(a):this._totalDuration;},f.time = function(a,b){return arguments.length?(this._dirty && this.totalDuration(),this.totalTime(a > this._duration?this._duration:a,b)):this._time;},f.totalTime = function(a,b,c){if((h || g.wake(),!arguments.length))return this._totalTime;if(this._timeline){if((0 > a && !c && (a += this.totalDuration()),this._timeline.smoothChildTiming)){this._dirty && this.totalDuration();var d=this._totalDuration,e=this._timeline;if((a > d && !c && (a = d),this._startTime = (this._paused?this._pauseTime:e._time) - (this._reversed?d - a:a) / this._timeScale,e._dirty || this._uncache(!1),e._timeline))for(;e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime,!0),e = e._timeline;}this._gc && this._enabled(!0,!1),(this._totalTime !== a || 0 === this._duration) && (I.length && X(),this.render(a,b,!1),I.length && X());}return this;},f.progress = f.totalProgress = function(a,b){var c=this.duration();return arguments.length?this.totalTime(c * a,b):c?this._time / c:this.ratio;},f.startTime = function(a){return arguments.length?(a !== this._startTime && (this._startTime = a,this.timeline && this.timeline._sortChildren && this.timeline.add(this,a - this._delay)),this):this._startTime;},f.endTime = function(a){return this._startTime + (0 != a?this.totalDuration():this.duration()) / this._timeScale;},f.timeScale = function(a){if(!arguments.length)return this._timeScale;if((a = a || k,this._timeline && this._timeline.smoothChildTiming)){var b=this._pauseTime,c=b || 0 === b?b:this._timeline.totalTime();this._startTime = c - (c - this._startTime) * this._timeScale / a;}return this._timeScale = a,this._uncache(!1);},f.reversed = function(a){return arguments.length?(a != this._reversed && (this._reversed = a,this.totalTime(this._timeline && !this._timeline.smoothChildTiming?this.totalDuration() - this._totalTime:this._totalTime,!0)),this):this._reversed;},f.paused = function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a != this._paused && d && (h || a || g.wake(),b = d.rawTime(),c = b - this._pauseTime,!a && d.smoothChildTiming && (this._startTime += c,this._uncache(!1)),this._pauseTime = a?b:null,this._paused = a,this._active = this.isActive(),!a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming?this._totalTime:(b - this._startTime) / this._timeScale,this.render(b,b === this._totalTime,!0))),this._gc && !a && this._enabled(!0,!1),this;};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren = this.smoothChildTiming = !0;});f = E.prototype = new C(),f.constructor = E,f.kill()._gc = !1,f._first = f._last = f._recent = null,f._sortChildren = !1,f.add = f.insert = function(a,b,c,d){var e,f;if((a._startTime = Number(b || 0) + a._delay,a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),a.timeline && a.timeline._remove(a,!0),a.timeline = a._timeline = this,a._gc && a._enabled(!0,!0),e = this._last,this._sortChildren))for(f = a._startTime;e && e._startTime > f;) e = e._prev;return e?(a._next = e._next,e._next = a):(a._next = this._first,this._first = a),a._next?a._next._prev = a:this._last = a,a._prev = e,this._recent = a,this._timeline && this._uncache(!0),this;},f._remove = function(a,b){return a.timeline === this && (b || a._enabled(!1,!0),a._prev?a._prev._next = a._next:this._first === a && (this._first = a._next),a._next?a._next._prev = a._prev:this._last === a && (this._last = a._prev),a._next = a._prev = a.timeline = null,a === this._recent && (this._recent = this._last),this._timeline && this._uncache(!0)),this;},f.render = function(a,b,c){var d,e=this._first;for(this._totalTime = this._time = this._rawPrevTime = a;e;) d = e._next,(e._active || a >= e._startTime && !e._paused) && (e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration) - (a - e._startTime) * e._timeScale,b,c):e.render((a - e._startTime) * e._timeScale,b,c)),e = d;},f.rawTime = function(){return h || g.wake(),this._totalTime;};var F=r("TweenLite",function(b,c,d){if((C.call(this,c,d),this.render = F.prototype.render,null == b))throw "Cannot tween a null target.";this.target = b = "string" != typeof b?b:F.selector(b) || b;var e,f,g,h=b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),i=this.vars.overwrite;if((this._overwrite = i = null == i?T[F.defaultOverwrite]:"number" == typeof i?i >> 0:T[i],(h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0]))for(this._targets = g = l(b),this._propLookup = [],this._siblings = [],e = 0;e < g.length;e++) f = g[e],f?"string" != typeof f?f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType)?(g.splice(e--,1),this._targets = g = g.concat(l(f))):(this._siblings[e] = Y(f,this,!1),1 === i && this._siblings[e].length > 1 && $(f,this,null,1,this._siblings[e])):(f = g[e--] = F.selector(f),"string" == typeof f && g.splice(e + 1,1)):g.splice(e--,1);else this._propLookup = {},this._siblings = Y(b,this,!1),1 === i && this._siblings.length > 1 && $(b,this,null,1,this._siblings);(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k,this.render(-this._delay));},!0),G=function G(b){return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);},H=function H(a,b){var c,d={};for(c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c],delete a[c]);a.css = d;};f = F.prototype = new C(),f.constructor = F,f.kill()._gc = !1,f.ratio = 0,f._firstPT = f._targets = f._overwrittenProps = f._startAt = null,f._notifyPluginsOfEnabled = f._lazy = !1,F.version = "1.18.2",F.defaultEase = f._ease = new u(null,null,1,1),F.defaultOverwrite = "auto",F.ticker = g,F.autoSleep = 120,F.lagSmoothing = function(a,b){g.lagSmoothing(a,b);},F.selector = a.$ || a.jQuery || function(b){var c=a.$ || a.jQuery;return c?(F.selector = c,c(b)):"undefined" == typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#" === b.charAt(0)?b.substr(1):b);};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function L(a){for(var b,c=this._firstPT,d=1e-6;c;) b = c.blob?a?this.join(""):this.start:c.c * a + c.s,c.r?b = Math.round(b):d > b && b > -d && (b = 0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p] = b,c = c._next;},M=function M(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start = a,c && (c(l),a = l[0],b = l[1]),l.length = 0,e = a.match(K) || [],f = b.match(K) || [],d && (d._next = null,d.blob = 1,l._firstPT = d),i = f.length,h = 0;i > h;h++) k = f[h],j = b.substr(m,b.indexOf(k,m) - m),n += j || !h?j:",",m += j.length,o?o = (o + 1) % 5:"rgba(" === j.substr(-5) && (o = 1),k === e[h] || e.length <= h?n += k:(n && (l.push(n),n = ""),g = parseFloat(e[h]),l.push(g),l._firstPT = {_next:l._firstPT,t:l,p:l.length - 1,s:g,c:("=" === k.charAt(1)?parseInt(k.charAt(0) + "1",10) * parseFloat(k.substr(2)):parseFloat(k) - g) || 0,f:0,r:o && 4 > o}),m += k.length;return n += b.substr(m),n && l.push(n),l.setRatio = L,l;},N=function N(a,b,c,d,e,f,g,h){var i,j,k="get" === c?a[b]:c,l=typeof a[b],m="string" == typeof d && "=" === d.charAt(1),n={t:a,p:b,s:k,f:"function" === l,pg:0,n:e || b,r:f,pr:0,c:m?parseInt(d.charAt(0) + "1",10) * parseFloat(d.substr(2)):parseFloat(d) - k || 0};return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)]?b:"get" + b.substr(3),n.s = k = g?a[j](g):a[j]()),"string" == typeof k && (g || isNaN(k))?(n.fp = g,i = M(k,d,h || F.defaultStringFilter,n),n = {t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e || b,pr:0}):m || (n.s = parseFloat(k),n.c = parseFloat(d) - n.s || 0)),n.c?((n._next = this._firstPT) && (n._next._prev = n),this._firstPT = n,n):void 0;},O=F._internals = {isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins = {},Q=O.tweenLookup = {},R=0,S=O.reservedProps = {ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline = new E(),V=C._rootTimeline = new E(),W=30,X=O.lazyRender = function(){var a,b=I.length;for(J = {};--b > -1;) a = I[b],a && a._lazy !== !1 && (a.render(a._lazy[0],a._lazy[1],!0),a._lazy = !1);I.length = 0;};V._startTime = g.time,U._startTime = g.frame,V._active = U._active = !0,setTimeout(X,1),C._updateRoot = F.render = function(){var a,b,c;if((I.length && X(),V.render((g.time - V._startTime) * V._timeScale,!1,!1),U.render((g.frame - U._startTime) * U._timeScale,!1,!1),I.length && X(),g.frame >= W)){W = g.frame + (parseInt(F.autoSleep,10) || 120);for(c in Q) {for(b = Q[c].tweens,a = b.length;--a > -1;) b[a]._gc && b.splice(a,1);0 === b.length && delete Q[c];}if((c = V._first,(!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length)){for(;c && c._paused;) c = c._next;c || g.sleep();}}},g.addEventListener("tick",C._updateRoot);var Y=function Y(a,b,c){var d,e,f=a._gsTweenID;if((Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {target:a,tweens:[]}),b && (d = Q[f].tweens,d[e = d.length] = b,c)))for(;--e > -1;) d[e] === b && d.splice(e,1);return Q[f].tweens;},Z=function Z(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g && (e = g(a,b,c,d)),g = F.onOverwrite,g && (f = g(a,b,c,d)),e !== !1 && f !== !1;},$=function $(a,b,c,d,e){var f,g,h,i;if(1 === d || d >= 4){for(i = e.length,f = 0;i > f;f++) if((h = e[f]) !== b)h._gc || h._kill(null,a,b) && (g = !0);else if(5 === d)break;return g;}var j,l=b._startTime + k,m=[],n=0,o=0 === b._duration;for(f = e.length;--f > -1;) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline?(j = j || _(b,0,o),0 === _(h,j,o) && (m[n++] = h)):h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));for(f = n;--f > -1;) if((h = m[f],2 === d && h._kill(c,a,b) && (g = !0),2 !== d || !h._firstPT && h._initted)){if(2 !== d && !Z(h,b))continue;h._enabled(!1,!1) && (g = !0);}return g;},_=function _(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;) {if((f += d._startTime,e *= d._timeScale,d._paused))return -100;d = d._timeline;}return f /= e,f > b?f - b:c && f === b || !a._initted && 2 * k > f - b?k:(f += a.totalDuration() / a._timeScale / e) > b + k?0:f - b - k;};f._init = function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt && (this._startAt.render(-1,!0),this._startAt.kill()),e = {};for(d in f.startAt) e[d] = f.startAt[d];if((e.overwrite = !1,e.immediateRender = !0,e.lazy = i && f.lazy !== !1,e.startAt = e.delay = null,this._startAt = F.to(this.target,0,e),i))if(this._time > 0)this._startAt = null;else if(0 !== h)return;}else if(f.runBackwards && 0 !== h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt = null;else {0 !== this._time && (i = !1),c = {};for(d in f) S[d] && "autoCSS" !== d || (c[d] = f[d]);if((c.overwrite = 0,c.data = "isFromStart",c.lazy = i && f.lazy !== !1,c.immediateRender = i,this._startAt = F.to(this.target,0,c),i)){if(0 === this._time)return;}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender && (this._startAt = null);}if((this._ease = j = j?j instanceof u?j:"function" == typeof j?new u(j,f.easeParams):v[j] || F.defaultEase:F.defaultEase,f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j,f.easeParams)),this._easeType = this._ease._type,this._easePower = this._ease._power,this._firstPT = null,this._targets))for(a = this._targets.length;--a > -1;) this._initProps(this._targets[a],this._propLookup[a] = {},this._siblings[a],g?g[a]:null) && (b = !0);else b = this._initProps(this.target,this._propLookup,this._siblings,g);if((b && F._onPluginEvent("_onInitAllProps",this),g && (this._firstPT || "function" != typeof this.target && this._enabled(!1,!1)),f.runBackwards))for(c = this._firstPT;c;) c.s += c.c,c.c = -c.c,c = c._next;this._onUpdate = f.onUpdate,this._initted = !0;},f._initProps = function(b,c,d,e){var f,g,h,i,j,k;if(null == b)return !1;J[b._gsTweenID] && X(),this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars,b);for(f in this.vars) if((k = this.vars[f],S[f]))k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k,this));else if(P[f] && (i = new P[f]())._onInitTween(b,this.vars[f],this)){for(this._firstPT = j = {_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g = i._overwriteProps.length;--g > -1;) c[i._overwriteProps[g]] = this._firstPT;(i._priority || i._onInitAllProps) && (h = !0),(i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0),j._next && (j._next._prev = j);}else c[f] = N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e && this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite > 1 && this._firstPT && d.length > 1 && $(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0),h);},f.render = function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a >= i - 1e-7)this._totalTime = this._time = i,this.ratio = this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed || (d = !0,e = "onComplete",c = c || this._timeline.autoRemoveChildren),0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0),(0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0,j > k && (e = "onReverseComplete")),this._rawPrevTime = g = !b || a || j === a?a:k);else if(1e-7 > a)this._totalTime = this._time = 0,this.ratio = this._ease._calcEnd?this._ease.getRatio(0):0,(0 !== h || 0 === i && j > 0) && (e = "onReverseComplete",d = this._reversed),0 > a && (this._active = !1,0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0),this._rawPrevTime = g = !b || a || j === a?a:k)),this._initted || (c = !0);else if((this._totalTime = this._time = a,this._easeType)){var l=a / i,m=this._easeType,n=this._easePower;(1 === m || 3 === m && l >= .5) && (l = 1 - l),3 === m && (l *= 2),1 === n?l *= l:2 === n?l *= l * l:3 === n?l *= l * l * l:4 === n && (l *= l * l * l * l),1 === m?this.ratio = 1 - l:2 === m?this.ratio = l:.5 > a / i?this.ratio = l / 2:this.ratio = 1 - l / 2;}else this.ratio = this._ease.getRatio(a / i);if(this._time !== h || c){if(!this._initted){if((this._init(),!this._initted || this._gc))return;if(!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = h,this._rawPrevTime = j,I.push(this),void (this._lazy = [a,b]);this._time && !d?this.ratio = this._ease.getRatio(this._time / i):d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time?0:1));}for(this._lazy !== !1 && (this._lazy = !1),this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0),0 === h && (this._startAt && (a >= 0?this._startAt.render(a,b,c):e || (e = "_dummyGS")),this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),f = this._firstPT;f;) f.f?f.t[f.p](f.c * this.ratio + f.s):f.t[f.p] = f.c * this.ratio + f.s,f = f._next;this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a,b,c),b || (this._time !== h || d) && this._callback("onUpdate")),e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a,b,c),d && (this._timeline.autoRemoveChildren && this._enabled(!1,!1),this._active = !1),!b && this.vars[e] && this._callback(e),0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0));}},f._kill = function(a,b,c){if(("all" === a && (a = null),null == a && (null == b || b === this.target)))return this._lazy = !1,this._enabled(!1,!1);b = "string" != typeof b?b || this._targets || this.target:F.selector(b) || b;var d,e,f,g,h,i,j,k,l,m=c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;if((n(b) || G(b)) && "number" != typeof b[0])for(d = b.length;--d > -1;) this._kill(a,b[d],c) && (i = !0);else {if(this._targets){for(d = this._targets.length;--d > -1;) if(b === this._targets[d]){h = this._propLookup[d] || {},this._overwrittenProps = this._overwrittenProps || [],e = this._overwrittenProps[d] = a?this._overwrittenProps[d] || {}:"all";break;}}else {if(b !== this.target)return !1;h = this._propLookup,e = this._overwrittenProps = a?this._overwrittenProps || {}:"all";}if(h){if((j = a || h,k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill),c && (F.onOverwrite || this.vars.onOverwrite))){for(f in j) h[f] && (l || (l = []),l.push(f));if((l || !a) && !Z(this,c,b,l))return !1;}for(f in j) (g = h[f]) && (m && (g.f?g.t[g.p](g.s):g.t[g.p] = g.s,i = !0),g.pg && g.t._kill(j) && (i = !0),g.pg && 0 !== g.t._overwriteProps.length || (g._prev?g._prev._next = g._next:g === this._firstPT && (this._firstPT = g._next),g._next && (g._next._prev = g._prev),g._next = g._prev = null),delete h[f]),k && (e[f] = 1);!this._firstPT && this._initted && this._enabled(!1,!1);}}return i;},f.invalidate = function(){return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable",this),this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,this._notifyPluginsOfEnabled = this._active = this._lazy = !1,this._propLookup = this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender && (this._time = -k,this.render(-this._delay)),this;},f._enabled = function(a,b){if((h || g.wake(),a && this._gc)){var c,d=this._targets;if(d)for(c = d.length;--c > -1;) this._siblings[c] = Y(d[c],this,!0);else this._siblings = Y(this.target,this,!0);}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled && this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1;},F.to = function(a,b,c){return new F(a,b,c);},F.from = function(a,b,c){return c.runBackwards = !0,c.immediateRender = 0 != c.immediateRender,new F(a,b,c);},F.fromTo = function(a,b,c,d){return d.startAt = c,d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender,new F(a,b,d);},F.delayedCall = function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0});},F.set = function(a,b){return new F(a,0,b);},F.getTweensOf = function(a,b){if(null == a)return [];a = "string" != typeof a?a:F.selector(a) || a;var c,d,e,f;if((n(a) || G(a)) && "number" != typeof a[0]){for(c = a.length,d = [];--c > -1;) d = d.concat(F.getTweensOf(a[c],b));for(c = d.length;--c > -1;) for(f = d[c],e = c;--e > -1;) f === d[e] && d.splice(c,1);}else for(d = Y(a).concat(),c = d.length;--c > -1;) (d[c]._gc || b && !d[c].isActive()) && d.splice(c,1);return d;},F.killTweensOf = F.killDelayedCallsTo = function(a,b,c){"object" == typeof b && (c = b,b = !1);for(var d=F.getTweensOf(a,b),e=d.length;--e > -1;) d[e]._kill(c,a);};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps = (a || "").split(","),this._propName = this._overwriteProps[0],this._priority = b || 0,this._super = aa.prototype;},!0);if((f = aa.prototype,aa.version = "1.18.0",aa.API = 2,f._firstPT = null,f._addTween = N,f.setRatio = L,f._kill = function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null != a[this._propName])this._overwriteProps = [];else for(b = c.length;--b > -1;) null != a[c[b]] && c.splice(b,1);for(;d;) null != a[d.n] && (d._next && (d._next._prev = d._prev),d._prev?(d._prev._next = d._next,d._prev = null):this._firstPT === d && (this._firstPT = d._next)),d = d._next;return !1;},f._roundProps = function(a,b){for(var c=this._firstPT;c;) (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b),c = c._next;},F._onPluginEvent = function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps" === a){for(;h;) {for(g = h._next,d = e;d && d.pr > h.pr;) d = d._next;(h._prev = d?d._prev:f)?h._prev._next = h:e = h,(h._next = d)?d._prev = h:f = h,h = g;}h = b._firstPT = e;}for(;h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),h = h._next;return c;},aa.activate = function(a){for(var b=a.length;--b > -1;) a[b].API === aa.API && (P[new a[b]()._propName] = a[b]);return !0;},q.plugin = function(a){if(!(a && a.propName && a.init && a.API))throw "illegal plugin definition.";var b,c=a.propName,d=a.priority || 0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",function(){aa.call(this,c,d),this._overwriteProps = e || [];},a.global === !0),h=g.prototype = new aa(c);h.constructor = g,g.API = a.API;for(b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);return g.version = a.version,aa.activate([g]),g;},d = a._gsQueue)){for(e = 0;e < d.length;e++) d[e]();for(f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f);}h = !1;}})("undefined" != typeof module && module.exports && "undefined" != typeof global?global:undefined || window,"TweenMax");

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
"use strict";

!(function (a, b, c, d) {
  "use strict";function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }function g(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
  }function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
      var c = new Error("get-stack-trace"),
          d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }function i(a, b, c) {
    var d,
        e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
  }function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function k(a, b) {
    return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }function l(a, b) {
    return a === d ? b : a;
  }function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function o(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function p(a, b) {
    return a.indexOf(b) > -1;
  }function q(a) {
    return a.trim().split(/\s+/g);
  }function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function s(a) {
    return Array.prototype.slice.call(a, 0);
  }function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
      if ((c = ma[g], e = c ? c + f : b, e in a)) return e;g++;
    }return d;
  }function v() {
    return ua++;
  }function w(b) {
    var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
  }function x(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function y(a) {
    var b,
        c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }function z(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & Ea && d - e === 0,
        g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function A(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function B(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function C(a, b) {
    var c,
        e,
        f,
        g,
        h = a.lastInterval || b,
        i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
          k = b.deltaY - h.deltaY,
          l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
  }function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function E(a) {
    var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;return { x: pa(c / b), y: pa(d / b) };
  }function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
  }function H(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function I(a, b, c) {
    c || (c = Qa);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }function L() {
    this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
  }function M() {
    this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function N() {
    this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
  }function O(a, b) {
    var c = s(a.touches),
        d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }function P() {
    this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
  }function Q(a, b) {
    var c = s(a.touches),
        d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = s(a.changedTouches),
        h = [],
        i = this.target;if ((f = c.filter(function (a) {
      return o(a.target, i);
    }), b === Ea)) for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }function R() {
    x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
  }function S(a, b) {
    a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
  }function T(a) {
    var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
          e = function e() {
        var a = d.indexOf(c);a > -1 && d.splice(a, 1);
      };setTimeout(e, cb);
    }
  }function U(a) {
    for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
      var e = this.lastTouches[d],
          f = Math.abs(b - e.x),
          g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
    }return !1;
  }function V(a, b) {
    this.manager = a, this.set(b);
  }function W(a) {
    if (p(a, jb)) return jb;var b = p(a, kb),
        c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
  }function X() {
    if (!fb) return !1;var b = {},
        c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
      b[d] = c ? a.CSS.supports("touch-action", d) : !0;
    }), b;
  }function Y(a) {
    this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
  }function Z(a) {
    return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
  }function $(a) {
    return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
  }function _(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function aa() {
    Y.apply(this, arguments);
  }function ba() {
    aa.apply(this, arguments), this.pX = null, this.pY = null;
  }function ca() {
    aa.apply(this, arguments);
  }function da() {
    Y.apply(this, arguments), this._timer = null, this._input = null;
  }function ea() {
    aa.apply(this, arguments);
  }function fa() {
    aa.apply(this, arguments);
  }function ga() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function ha(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
  }function ia(a, b) {
    this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function ja(a, b) {
    var c = a.element;if (c.style) {
      var d;g(a.options.cssProps, function (e, f) {
        d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
      }), b || (a.oldCssProps = {});
    }
  }function ka(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var la,
      ma = ["", "webkit", "Moz", "MS", "ms", "o"],
      na = b.createElement("div"),
      oa = "function",
      pa = Math.round,
      qa = Math.abs,
      ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];if (e !== d && null !== e) for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
    }return b;
  } : Object.assign;var sa = h(function (a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;return a;
  }, "extend", "Use `assign`."),
      ta = h(function (a, b) {
    return sa(a, b, !0);
  }, "merge", "Use `assign`."),
      ua = 1,
      va = /mobile|tablet|ip(ad|hone|od)|android/i,
      wa = ("ontouchstart" in a),
      xa = u(a, "PointerEvent") !== d,
      ya = wa && va.test(navigator.userAgent),
      za = "touch",
      Aa = "pen",
      Ba = "mouse",
      Ca = "kinect",
      Da = 25,
      Ea = 1,
      Fa = 2,
      Ga = 4,
      Ha = 8,
      Ia = 1,
      Ja = 2,
      Ka = 4,
      La = 8,
      Ma = 16,
      Na = Ja | Ka,
      Oa = La | Ma,
      Pa = Na | Oa,
      Qa = ["x", "y"],
      Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
    } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
      Ta = "mousedown",
      Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
      var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
    } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
      Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
      Xa = "pointerdown",
      Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      $a = "touchstart",
      _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
      var b = Za[a.type];if ((b === Ea && (this.started = !0), this.started)) {
        var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
      }
    } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
      bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
      var b = ab[a.type],
          c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
    } });var cb = 2500,
      db = 25;i(R, x, { handler: function handler(a, b, c) {
      var d = c.pointerType == za,
          e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
        if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
      }
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var eb = u(na.style, "touchAction"),
      fb = eb !== d,
      gb = "compute",
      hb = "auto",
      ib = "manipulation",
      jb = "none",
      kb = "pan-x",
      lb = "pan-y",
      mb = X();V.prototype = { set: function set(a) {
      a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), W(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      var b = a.srcEvent,
          c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
          e = p(d, jb) && !mb[jb],
          f = p(d, lb) && !mb[lb],
          g = p(d, kb) && !mb[kb];if (e) {
        var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;if (h && i && j) return;
      }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var nb = 1,
      ob = 2,
      pb = 4,
      qb = 8,
      rb = qb,
      sb = 16,
      tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
      return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function b(b) {
        c.manager.emit(b, a);
      }var c = this,
          d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
    }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
    } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
    } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
    }, emit: function emit(a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
      }this._super.emit.call(this, a);
    } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
      return [hb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;if ((this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f)) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
        this.state = rb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
    } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [jb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
    } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
      return ba.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var b,
          c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
    }, emit: function emit(a) {
      var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [ib];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;if ((this.reset(), a.eventType & Ea && 0 === this.count)) return this.failTimeout();if (d && f && c) {
        if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = rb, this.tryEmit();
        }, b.interval, this), ob) : rb;
      }return tb;
    }, failTimeout: function failTimeout() {
      return this._timer = e(function () {
        this.state = tb;
      }, this.options.interval, this), tb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
      vb = 2;ia.prototype = { set: function set(a) {
      return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? vb : ub;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
      }
    }, get: function get(a) {
      if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];return null;
    }, add: function add(a) {
      if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (f(a, "remove", this)) return this;if (a = this.get(a)) {
        var b = this.recognizers,
            c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
      }return this;
    }, on: function on(a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      }
    }, off: function off(a, b) {
      if (a !== d) {
        var c = this.handlers;return g(q(a), function (a) {
          b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
        }), this;
      }
    }, emit: function emit(a, b) {
      this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) c[d](b), d++;
      }
    }, destroy: function destroy() {
      this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
    return ha;
  }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
})(window, document, "Hammer");


},{}],3:[function(require,module,exports){
'use strict';

(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector || function matches(selector) {
		var element = this,
		    elements = (element.document || element.ownerDocument).querySelectorAll(selector),
		    index = 0;

		while (elements[index] && elements[index] !== element) {
			++index;
		}

		return elements[index] ? true : false;
	};

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		var element = this;

		while (element) {
			if (element.matches(selector)) {
				break;
			}

			element = element.parentElement;
		}

		return element;
	};
})(Element.prototype);

/*!
 * A polyfill for Webkit's window.getMatchedCSSRules, based on
 * https://gist.github.com/ydaniv/3033012
 *
 * @author: Yehonatan Daniv
 * @author: ssafejava
 * @author: Christian "Schepp" Schaefer <schaepp@gmx.de>
 *
 */

'use strict';

(function () {
	// polyfill window.getMatchedCSSRules() in FireFox 6+
	if (typeof window.getMatchedCSSRules === 'function') {
		return;
	}

	var ELEMENT_RE = /[\w-]+/g,
	    ID_RE = /#[\w-]+/g,
	    CLASS_RE = /\.[\w-]+/g,
	    ATTR_RE = /\[[^\]]+\]/g,
	   
	// :not() pseudo-class does not add to specificity, but its content does as if it was outside it
	PSEUDO_CLASSES_RE = /\:(?!not)[\w-]+(\(.*\))?/g,
	    PSEUDO_ELEMENTS_RE = /\:\:?(after|before|first-letter|first-line|selection)/g;

	// convert an array-like object to array
	var toArray = function toArray(list) {
		var items = [];
		var i = 0;
		var listLength = list.length;

		for (; i < listLength; i++) {
			items.push(list[i]);
		}

		return items;
	};

	// get host of stylesheet
	var getCSSHost = function getCSSHost(href) {
		var fakeLinkOfSheet = document.createElement('a');

		fakeLinkOfSheet.href = href;

		return fakeLinkOfSheet.host;
	};

	// handles extraction of `cssRules` as an `Array` from a stylesheet or something that behaves the same
	var getSheetRules = function getSheetRules(stylesheet) {
		var sheetMedia = stylesheet.media && stylesheet.media.mediaText;
		var sheetHost;

		// if this sheet is cross-origin and option is set skip it
		if (objectFit.disableCrossDomain == 'true') {
			sheetHost = getCSSHost(stylesheet.href);

			if (sheetHost !== window.location.host) {
				return [];
			}
		}

		// if this sheet is disabled skip it
		if (stylesheet.disabled) {
			return [];
		}

		if (!window.matchMedia) {
			if (sheetMedia && sheetMedia.length) {
				return [];
			}
		}
		// if this sheet's media is specified and doesn't match the viewport then skip it
		else if (sheetMedia && sheetMedia.length && !window.matchMedia(sheetMedia).matches) {
				return [];
			}

		// get the style rules of this sheet
		return toArray(stylesheet.cssRules);
	};

	var _find = function _find(string, re) {
		var matches = string.match(re);

		return re ? re.length : 0;
	};

	// calculates the specificity of a given `selector`
	var calculateScore = function calculateScore(selector) {
		var score = [0, 0, 0];
		var parts = selector.split(' ');
		var part;
		var match;

		//TODO: clean the ':not' part since the last ELEMENT_RE will pick it up
		while ((part = parts.shift(), typeof part === 'string')) {
			// find all pseudo-elements
			match = _find(part, PSEUDO_ELEMENTS_RE);
			score[2] = match;
			// and remove them
			match && (part = part.replace(PSEUDO_ELEMENTS_RE, ''));
			// find all pseudo-classes
			match = _find(part, PSEUDO_CLASSES_RE);
			score[1] = match;
			// and remove them
			match && (part = part.replace(PSEUDO_CLASSES_RE, ''));
			// find all attributes
			match = _find(part, ATTR_RE);
			score[1] += match;
			// and remove them
			match && (part = part.replace(ATTR_RE, ''));
			// find all IDs
			match = _find(part, ID_RE);
			score[0] = match;
			// and remove them
			match && (part = part.replace(ID_RE, ''));
			// find all classes
			match = _find(part, CLASS_RE);
			score[1] += match;
			// and remove them
			match && (part = part.replace(CLASS_RE, ''));
			// find all elements
			score[2] += _find(part, ELEMENT_RE);
		}

		return parseInt(score.join(''), 10);
	};

	// returns the heights possible specificity score an element can get from a give rule's selectorText
	var getSpecificityScore = function getSpecificityScore(element, selectorText) {
		var selectors = selectorText.split(','),
		    selector,
		    score,
		    result = 0;

		while (selector = selectors.shift()) {
			if (element.closest(selector)) {
				score = calculateScore(selector);
				result = score > result ? score : result;
			}
		}

		return result;
	};

	var sortBySpecificity = function sortBySpecificity(element, rules) {
		// comparing function that sorts CSSStyleRules according to specificity of their `selectorText`
		var compareSpecificity = function compareSpecificity(a, b) {
			return getSpecificityScore(element, b.selectorText) - getSpecificityScore(element, a.selectorText);
		};

		return rules.sort(compareSpecificity);
	};

	//TODO: not supporting 2nd argument for selecting pseudo elements
	//TODO: not supporting 3rd argument for checking author style sheets only
	window.getMatchedCSSRules = function (element) {
		/*, pseudo, author_only*/
		var styleSheets;
		var result = [];
		var sheet;
		var rules;
		var rule;

		// get stylesheets and convert to a regular Array
		styleSheets = toArray(window.document.styleSheets);

		// assuming the browser hands us stylesheets in order of appearance
		// we iterate them from the beginning to follow proper cascade order
		while (sheet = styleSheets.shift()) {
			// get the style rules of this sheet
			rules = getSheetRules(sheet);

			// loop the rules in order of appearance
			while (rule = rules.shift()) {
				// if this is an @import rule
				if (rule.styleSheet) {
					// insert the imported stylesheet's rules at the beginning of this stylesheet's rules
					rules = getSheetRules(rule.styleSheet).concat(rules);
					// and skip this rule
					continue;
				}
				// if there's no stylesheet attribute BUT there IS a media attribute it's a media rule
				else if (rule.media) {
						// insert the contained rules of this media rule to the beginning of this stylesheet's rules
						rules = getSheetRules(rule).concat(rules);
						// and skip it
						continue;
					}

				// check if this element matches this rule's selector
				if (element.closest(rule.selectorText)) {
					// push the rule to the results set
					result.push(rule);
				}
			}
		}
		// sort according to specificity
		return sortBySpecificity(element, result);
	};
})();

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function (window) {
	var lastTime = 0,
	    vendors = ['webkit', 'moz'],
	    requestAnimationFrame = window.requestAnimationFrame,
	    cancelAnimationFrame = window.cancelAnimationFrame,
	    i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function (callback) {
			var now = +new Date(),
			    nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function () {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
})(window);

/*!
 * Polyfill CSS object-fit
 * http://helloanselm.com/object-fit
 *
 * @author: Anselm Hannemann <hello@anselm-hannemann.com>
 * @author: Christian "Schepp" Schaefer <schaepp@gmx.de>
 * @version: 0.3.4
 *
 */

(function (global) {

	'use strict';

	// Storage variable
	var objectFit = {};

	objectFit._debug = false;

	objectFit.observer = null;

	objectFit.disableCrossDomain = 'false';

	objectFit.getComputedStyle = function (element, context) {
		context = context || window;

		if (context.getComputedStyle) {
			return context.getComputedStyle(element, null);
		} else {
			return element.currentStyle;
		}
	};

	objectFit.getDefaultComputedStyle = function (element) {
		var newelement = element.cloneNode(true);
		var styles = {};
		var iframe = document.createElement('iframe');
		document.body.appendChild(iframe);
		iframe.contentWindow.document.open();
		iframe.contentWindow.document.write('<body></body>');
		iframe.contentWindow.document.body.appendChild(newelement);
		iframe.contentWindow.document.close();

		var defaultElement = iframe.contentWindow.document.querySelectorAll(element.nodeName.toLowerCase())[0];
		var defaultComputedStyle = this.getComputedStyle(defaultElement, iframe.contentWindow);
		var value;
		var property;

		for (property in defaultComputedStyle) {
			if (defaultComputedStyle.getPropertyValue === true) {
				value = defaultComputedStyle.getPropertyValue(property);
			} else {
				value = defaultComputedStyle[property];
			}

			if (value !== null) {
				switch (property) {
					default:
						styles[property] = value;
						break;

					case 'width':
					case 'height':
					case 'minWidth':
					case 'minHeight':
					case 'maxWidth':
					case 'maxHeight':
						break;
				}
			}
		}

		document.body.removeChild(iframe);

		return styles;
	};

	objectFit.getMatchedStyle = function (element, property) {
		// element property has highest priority
		var val = null;
		var inlineval = null;

		if (element.style.getPropertyValue) {
			inlineval = element.style.getPropertyValue(property);
		} else if (element.currentStyle) {
			inlineval = element.currentStyle[property];
		}

		// get matched rules
		var rules = window.getMatchedCSSRules(element);
		var i = rules.length;
		var r;
		var important;

		if (i) {
			// iterate the rules backwards
			// rules are ordered by priority, highest last
			for (; i-- > 0;) {
				r = rules[i];
				important = r.style.getPropertyPriority(property);

				// if set, only reset if important
				if (val === null || important) {
					val = r.style.getPropertyValue(property);

					// done if important
					if (important) {
						break;
					}
				}
			}
		}

		// if it's important, we are done
		if (!val && inlineval !== null) {
			val = inlineval;
		}

		return val;
	};

	// Detects orientation
	objectFit.orientation = function (replacedElement) {
		if (replacedElement.parentNode && replacedElement.parentNode.nodeName.toLowerCase() === 'x-object-fit') {
			var width = replacedElement.naturalWidth || replacedElement.clientWidth;
			var height = replacedElement.naturalHeight || replacedElement.clientHeight;
			var parentWidth = replacedElement.parentNode.clientWidth;
			var parentHeight = replacedElement.parentNode.clientHeight;

			if (!height || width / height > parentWidth / parentHeight) {
				if (replacedElement.getAttribute('data-x-object-relation') !== 'wider') {
					replacedElement.setAttribute('data-x-object-relation', 'wider');
					replacedElement.className += ' x-object-fit-wider';

					if (this._debug && window.console) {
						console.log('x-object-fit-wider');
					}
				}
			} else {
				if (replacedElement.getAttribute('data-x-object-relation') !== 'taller') {
					replacedElement.setAttribute('data-x-object-relation', 'taller');
					replacedElement.className += ' x-object-fit-taller';

					if (this._debug && window.console) {
						console.log('x-object-fit-taller');
					}
				}
			}
		}
	};

	objectFit.process = function (args) {
		if (!args.selector || !args.replacedElements) {
			return;
		}

		// Set option objectFit.disableCrossDomain
		objectFit.disableCrossDomain = args.disableCrossDomain || 'false';

		// Set option fit-type
		args.fittype = args.fittype || 'none';

		switch (args.fittype) {
			default:
				return;

			case 'none':
			case 'fill':
			case 'contain':
			case 'cover':
				break;
		}

		// Set option replacedElements
		var replacedElements = args.replacedElements;

		if (!replacedElements.length) {
			return;
		}

		for (var i = 0, replacedElementsLength = replacedElements.length; i < replacedElementsLength; i++) {
			this.processElement(replacedElements[i], args);
		}
	};

	objectFit.processElement = function (replacedElement, args) {
		var property;
		var value;
		var replacedElementStyles = objectFit.getComputedStyle(replacedElement);
		var replacedElementDefaultStyles = objectFit.getDefaultComputedStyle(replacedElement);
		var wrapperElement = document.createElement('x-object-fit');

		if (objectFit._debug && window.console) {
			console.log('Applying to WRAPPER-------------------------------------------------------');
		}

		for (property in replacedElementStyles) {
			switch (property) {
				default:
					value = objectFit.getMatchedStyle(replacedElement, property);

					if (value !== null && value !== '') {
						if (objectFit._debug && window.console) {
							console.log(property + ': ' + value);
						}

						wrapperElement.style[property] = value;
					}
					break;

				case 'length':
				case 'parentRule':
					break;
			}
		}

		if (objectFit._debug && window.console) {
			console.log('Applying to REPLACED ELEMENT-------------------------------------------------------');
		}
		for (property in replacedElementDefaultStyles) {
			switch (property) {
				default:
					value = replacedElementDefaultStyles[property];

					if (objectFit._debug && window.console && value !== '') {
						console.log(property + ': ' + value);

						if (replacedElement.style[property] === undefined) {
							console.log('Indexed style properties (`' + property + '`) not supported in: ' + window.navigator.userAgent);
						}
					}

					if (replacedElement.style[property]) {
						replacedElement.style[property] = value; // should work in Firefox 35+ and all other browsers
					} else {
							replacedElement.style.property = value;
						}
					break;

				case 'length':
				case 'parentRule':
					break;
			}
		}

		wrapperElement.setAttribute('class', 'x-object-fit-' + args.fittype);
		replacedElement.parentNode.insertBefore(wrapperElement, replacedElement);
		wrapperElement.appendChild(replacedElement);

		objectFit.orientation(replacedElement);

		var resizeTimer = null;
		var resizeAction = function resizeAction() {
			if (resizeTimer !== null) {
				window.cancelAnimationFrame(resizeTimer);
			}
			resizeTimer = window.requestAnimationFrame(function () {
				objectFit.orientation(replacedElement);
			});
		};

		switch (args.fittype) {
			default:
				break;

			case 'contain':
			case 'cover':
				if (window.addEventListener) {
					replacedElement.addEventListener('load', resizeAction, false);
					window.addEventListener('resize', resizeAction, false);
					window.addEventListener('orientationchange', resizeAction, false);
				} else {
					replacedElement.attachEvent('onload', resizeAction);
					window.attachEvent('onresize', resizeAction);
				}
				break;
		}
	};

	objectFit.listen = function (args) {
		var domInsertedAction = function domInsertedAction(element) {
			var i = 0;
			var argsLength = args.length;

			for (; i < argsLength; i++) {
				if (element.mozMatchesSelector && element.mozMatchesSelector(args[i].selector) || element.msMatchesSelector && element.msMatchesSelector(args[i].selector) || element.oMatchesSelector && element.oMatchesSelector(args[i].selector) || element.webkitMatchesSelector && element.webkitMatchesSelector(args[i].selector)) {
					args[i].replacedElements = [element];
					objectFit.process(args[i]);

					if (objectFit._debug && window.console) {
						console.log('Matching node inserted: ' + element.nodeName);
					}
				}
			}
		};

		var domInsertedObserverFunction = function domInsertedObserverFunction(element) {
			objectFit.observer.disconnect();
			domInsertedAction(element);
			objectFit.observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
		};

		var domInsertedEventFunction = function domInsertedEventFunction(event) {
			window.removeEventListener('DOMNodeInserted', domInsertedEventFunction, false);
			domInsertedAction(event.target);
			window.addEventListener('DOMNodeInserted', domInsertedEventFunction, false);
		};

		var domRemovedAction = function domRemovedAction(element) {
			if (element.nodeName.toLowerCase() === 'x-object-fit') {
				element.parentNode.removeChild(element);

				if (objectFit._debug && window.console) {
					console.log('Matching node removed: ' + element.nodeName);
				}
			}
		};

		var domRemovedObserverFunction = function domRemovedObserverFunction(element) {
			objectFit.observer.disconnect();
			domRemovedAction(element);
			objectFit.observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
		};

		var domRemovedEventFunction = function domRemovedEventFunction(event) {
			window.removeEventListener('DOMNodeRemoved', domRemovedEventFunction, false);
			domRemovedAction(event.target.parentNode);
			window.addEventListener('DOMNodeRemoved', domRemovedEventFunction, false);
		};

		if (window.MutationObserver) {
			if (objectFit._debug && window.console) {
				console.log('DOM MutationObserver');
			}

			this.observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					if (mutation.addedNodes && mutation.addedNodes.length) {
						var nodes = mutation.addedNodes;
						for (var i = 0, nodesLength = nodes.length; i < nodesLength; i++) {
							domInsertedObserverFunction(nodes[i]);
						}
					}
					if (mutation.removedNodes && mutation.removedNodes.length) {
						domRemovedObserverFunction(mutation.target);
					}
				});
			});

			this.observer.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
		} else if (window.addEventListener) {
			if (objectFit._debug && window.console) {
				console.log('DOM Mutation Events');
			}

			window.addEventListener('DOMNodeInserted', domInsertedEventFunction, false);
			window.addEventListener('DOMNodeRemoved', domRemovedEventFunction, false);
		}
	};

	objectFit.init = function (args) {
		if (!args) {
			return;
		}

		if (!(args instanceof Array)) {
			args = [args];
		}

		var i = 0;
		var argsLength = args.length;

		for (; i < argsLength; i++) {
			args[i].replacedElements = document.querySelectorAll(args[i].selector);
			this.process(args[i]);
		}

		this.listen(args);
	};

	objectFit.polyfill = function (args) {
		if ('objectFit' in document.documentElement.style === false) {
			if (objectFit._debug && window.console) {
				console.log('object-fit not natively supported');
			}

			// If the library is loaded after document onload event
			if (document.readyState === 'complete') {
				objectFit.init(args);
			} else {
				// Otherwise attach event listeners
				if (window.addEventListener) {
					window.addEventListener('load', function () {
						objectFit.init(args);
					}, false);
				} else {
					window.attachEvent('onload', function () {
						objectFit.init(args);
					});
				}
			}
		} else {
			if (objectFit._debug && window.console) {
				console.log('object-fit natively supported');
			}
		}
	};

	/*
  * AMD, module loader, global registration
  */

	// Expose modal for loaders that implement the Node module pattern.
	if (typeof module === 'object' && module && typeof module.exports === 'object') {
		module.exports = objectFit;

		// Register as an AMD module
	} else if (typeof define === 'function' && define.amd) {
			define([], function () {
				return objectFit;
			});

			// Export into global space
		} else if (typeof global === 'object' && typeof global.document === 'object') {
				global.objectFit = objectFit;
			}
})(window);

},{}]},{},[1,2,3]);
