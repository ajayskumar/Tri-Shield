/**
 * Top Bar Front JS (minified)
 */

!function(t){t(document).ready((function(){var e,i=((e=document.createElement("style")).appendChild(document.createTextNode("")),document.head.appendChild(e),e.sheet);function n(t,e,i,n){"insertRule"in t?t.insertRule(e+"{"+i+"}",n):"addRule"in t&&t.addRule(e,i,n)}var o={};for(var r in tpbr_settings)tpbr_settings.hasOwnProperty(r)&&(o[r]=tpbr_settings[r]);if("inactive"==o.status)return!1;var a=o.fixed,d="",s=o.color;if("notloggedin"==o.user_who&&"guests"==o.guests_or_users||"loggedin"==o.user_who&&"users"==o.guests_or_users||"all"==o.guests_or_users){var p,l,f,x,c,u;p=-12,l=parseInt(s.slice(1),16),f=Math.round(2.55*p),d="#"+(16777216+65536*((x=(l>>16)+f)<255?x<1?0:x:255)+256*((c=(l>>8&255)+f)<255?c<1?0:c:255)+((u=(255&l)+f)<255?u<1?0:u:255)).toString(16).slice(1),function(){var e;if(buttonElement=(e="newwindow"==o.button_behavior?'target="_blank"':"","button"==o.yn_button&&o.button_text?'<a id="tpbr_calltoaction" style="background: '+d+'; display: inline-block; padding: 0px 12px 1px; color: white; text-decoration: none; margin: 1px 14px 0px; border-radius: 3px;" href="'+o.button_url+'"'+e+">"+o.button_text+"</a>":""),"fixed"==a)var i='<div class="pushr"></div><div id="tpbr_topbar" style="position:fixed; z-index:99998; width:100%; left:0px; top:0px; background:'+s+';"><div id="tpbr_box" style="line-height: 2em; padding: 5px 0px 6px; background:'+s+'; margin:0 auto; text-align:center; width:100%; color:white; font-size:15px; font-family: Helvetica, Arial, sans-serif;  font-weight:300;"></div></div>';else i='<div id="tpbr_topbar" style="position:relative; z-index:99998; background:'+s+';"><div id="tpbr_box" style="line-height: 2em; padding: 5px 0px 6px; background:'+s+'; margin:0 auto; text-align:center; width:100%; color:white; font-size:15px; font-family: Helvetica, Arial, sans-serif;  font-weight:300;"></div></div>';setTimeout((function(){t(i).prependTo("body").show(),t("#tpbr_box").html(o.message+buttonElement),y()}))}();var b,g,_,h,v=[],m=0;t(window).on("resize",(b=y,g=50,function(){var t=this,e=arguments,i=_&&!h;clearTimeout(h),h=setTimeout((function(){h=null,_||b.apply(t,e)}),g),i&&b.apply(t,e)})),t(window).on("scroll",function(t,e,i){var n;return function(){var o=this,r=arguments,a=i&&!n;n||(n=setTimeout((function(){n=null,i||t.apply(o,r)}),e)),a&&t.apply(o,r)}}(y,10))}function y(){var e=t("#wpadminbar").outerHeight(),r="none"==t("#tpbr_topbar").css("display")?0:t("#tpbr_topbar").outerHeight(),d=t("#wpadminbar").css("position"),s=t(document).scrollTop(),p=0;"fixed"==a?(o.is_admin_bar?"fixed"!=d?s<e?(t("#tpbr_topbar").css("top",e-s),p=e-s,e-s):(t("#tpbr_topbar").css("top",0),p=0,0):(t("#tpbr_topbar").css("top",e),p=0,e):t("#tpbr_topbar").css("top",0),t(".pushr").height(r)):(p=o.is_admin_bar?"fixed"==d?s<r?r-s:0:s<e+r?e+r-s:0:s<r?r-s:0,t("#tpbr_topbar").css("top",0)),1==o.detect_sticky&&function(e,r,d,s,p){if(i.cssRules)for(var l=0;l<i.cssRules.length;l++)i.deleteRule(l);var f=t("body").find("div, header, nav").not("#wpadminbar");if(t.each(f,(function(l,f){if(0==m&&v.push({clean:!1,el:t(f),position:t(f).css("position")}),"fixed"==a){if("fixed"==t(f).css("position")&&t(f).offset().top-p<250){var x=t(f).attr("id")?"#"+t(f).attr("id"):"."+t(f).attr("class").replace(/\s/g,"."),c=t(f).attr("class")||"-",u=0;o.is_admin_bar&&(u+="fixed"==d?parseInt(e):s),u+=parseInt(r),"tpbr_topbar"!=t(f).attr("id")&&"tpbr_box"!=t(f).attr("id")&&(-1===x.indexOf("widget")&&-1===x.indexOf("modal")&&-1===x.indexOf("footer")&&-1===x.indexOf("popup")&&-1===x.indexOf("overlay")&&-1===x.indexOf("loader")&&-1===c.indexOf("widget")&&-1===c.indexOf("modal")&&-1===c.indexOf("footer")&&-1===c.indexOf("popup")&&-1===c.indexOf("overlay")&&-1===c.indexOf("loader")||-1!==x.indexOf("header")||-1!==c.indexOf("header"))&&(v[l].clean=!0,t(x).attr("style","position:fixed; top: "+u+"px !important;"),n(i,x,"top: "+u+"px !important;"))}}else if("fixed"==t(f).css("position")&&t(f).offset().top-p<250){x=t(f).attr("id")?"#"+t(f).attr("id"):"."+t(f).attr("class").replace(/\s/g,"."),c=t(f).attr("class")||"-",u=0;o.is_admin_bar&&"fixed"==d&&(u+=parseInt(e)),"fixed"!=d&&(u+=s),u+=parseInt(r),"tpbr_topbar"!=t(f).attr("id")&&"tpbr_box"!=t(f).attr("id")&&(-1===x.indexOf("widget")&&-1===x.indexOf("modal")&&-1===x.indexOf("footer")&&-1===x.indexOf("popup")&&-1===x.indexOf("overlay")&&-1===x.indexOf("loader")&&-1===c.indexOf("widget")&&-1===c.indexOf("modal")&&-1===c.indexOf("footer")&&-1===c.indexOf("popup")&&-1===c.indexOf("overlay")&&-1===c.indexOf("loader")||-1!==x.indexOf("header")||-1!==c.indexOf("header"))&&(v[l].clean=!0,t(x).attr("style","position:fixed; top: "+u+"px !important;"),n(i,x,"top: "+u+"px !important;"))}})),v.length>0)for(var x=0;x<v.length;x++){var c=v[x].el.clone();c.removeAttr("style"),"fixed"!=c.css("position")&&!0===v[x].clean&&(v[x].el.removeAttr("style"),v[x].clean=!1)}m=1}(e,r,d,p,s)}}))}(jQuery);