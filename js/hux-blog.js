// build time:Thu Feb 21 2019 17:17:53 GMT+0800 (GMT+08:00)
$(function(){$("[data-toggle='tooltip']").tooltip()});$(document).ready(function(){$("table").wrap("<div class='table-responsive'></div>");$("table").addClass("table")});$(document).ready(function(){$('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');$('iframe[src*="youtube.com"]').addClass("embed-responsive-item");$('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');$('iframe[src*="vimeo.com"]').addClass("embed-responsive-item")});jQuery(document).ready(function(s){var e=1170;if(s(window).width()>e){var i=s(".navbar-custom").height();s(window).on("scroll",{previousTop:0},function(){var e=s(window).scrollTop();if(e<this.previousTop){if(e>0&&s(".navbar-custom").hasClass("is-fixed")){s(".navbar-custom").addClass("is-visible")}else{s(".navbar-custom").removeClass("is-visible is-fixed")}}else{s(".navbar-custom").removeClass("is-visible");if(e>i&&!s(".navbar-custom").hasClass("is-fixed"))s(".navbar-custom").addClass("is-fixed")}this.previousTop=e})}});
//rebuild by neat 