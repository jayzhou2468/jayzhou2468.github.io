// build time:Thu Dec 06 2018 20:38:07 GMT+0800 (GMT+08:00)
(function(i,t,n,s){var e=function(s,e){this.elem=s;this.$elem=i(s);this.options=e;this.metadata=this.$elem.data("plugin-options");this.$win=i(t);this.sections={};this.didScroll=false;this.$doc=i(n);this.docHeight=this.$doc.height()};e.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:false,end:false,scrollChange:false,padding:0},init:function(){this.config=i.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems);if(this.config.filter!==""){this.$nav=this.$nav.filter(this.config.filter)}this.$nav.on("click.onePageNav",i.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on("resize.onePageNav",i.proxy(this.getPositions,this));return this},adjustNav:function(i,t){i.$elem.find("."+i.config.currentClass).removeClass(i.config.currentClass);t.addClass(i.config.currentClass)},bindInterval:function(){var i=this;var t;i.$win.on("scroll.onePageNav",function(){i.didScroll=true});i.t=setInterval(function(){t=i.$doc.height();if(i.didScroll){i.didScroll=false;i.scrollChange()}if(t!==i.docHeight){i.docHeight=t;i.getPositions()}},250)},getHash:function(i){return i.attr("href").split("#")[1]},getPositions:function(){var t=this;var n;var s;var e;t.$nav.each(function(){n=t.getHash(i(this));e=i("#"+n);if(e.length){s=e.offset().top;t.sections[n]=Math.round(s)}})},getSection:function(i){var t=null;var n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var s in this.sections){if(this.sections[s]-n<i){t=s}}return t},handleClick:function(n){var s=this;var e=i(n.currentTarget);var o=e.parent();var a="#"+s.getHash(e);if(!o.hasClass(s.config.currentClass)){if(s.config.begin){s.config.begin()}s.adjustNav(s,o);s.unbindInterval();s.scrollTo(a,function(){if(s.config.changeHash){t.location.hash=a}s.bindInterval();if(s.config.end){s.config.end()}})}n.preventDefault()},scrollChange:function(){var i=this.$win.scrollTop();var t=this.getSection(i);var n;if(t!==null){n=this.$elem.find('a[href$="#'+t+'"]').parent();if(!n.hasClass(this.config.currentClass)){this.adjustNav(this,n);if(this.config.scrollChange){this.config.scrollChange(n)}}}},scrollTo:function(t,n){var s=i(t).offset().top-this.config.padding;i("html, body").animate({scrollTop:s},this.config.scrollSpeed,this.config.easing,n)},unbindInterval:function(){clearInterval(this.t);this.$win.unbind("scroll.onePageNav")}};e.defaults=e.prototype.defaults;i.fn.onePageNav=function(i){return this.each(function(){new e(this,i).init()})}})(jQuery,window,document);
//rebuild by neat 