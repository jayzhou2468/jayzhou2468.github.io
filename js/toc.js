// build time:Wed Dec 05 2018 08:51:38 GMT+0800 (GMT+08:00)
var toc=document.getElementById("toc");if(toc!=null){window.addEventListener("scroll",scrollcatelogHandler);var tocPosition=toc.offsetTop;var height_header=$("#signature").height();function scrollcatelogHandler(o){var t=o||window.event,e=t.target||t.srcElement;var c=document.documentElement.scrollTop||document.body.scrollTop;if(c>tocPosition-60){toc.classList.add("toc-fixed")}else{toc.classList.remove("toc-fixed")}}}
//rebuild by neat 