const toggleSwitch=document.getElementById("themeToggleCheckbox"),root=document.documentElement;window.matchMedia("(prefers-color-scheme: dark)").matches&&(toggleSwitch.checked=!1,root.setAttribute("data-theme","dark")),window.matchMedia("(prefers-color-scheme: light)").matches&&(toggleSwitch.checked=!0,root.setAttribute("data-theme","light")),whichTransitionEvent=()=>{let t,e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(void 0!==e.style[t])return n[t]};let transitionEvent=whichTransitionEvent(),item=document.querySelector(".circle"),message=document.querySelector(".footer"),counter=1;function switchTheme(t){root.classList.toggle("transitioning"),t.target.checked?root.setAttribute("data-theme","light"):root.setAttribute("data-theme","dark"),root.addEventListener(transitionEvent,transitionEndCallback)}function updateQueryStringParameter(t,e){var n=new URLSearchParams(window.location.search);if("URLSearchParams"in window){""===e?n.delete(t):n.set(t,e);var a=window.location.pathname+"?"+n.toString();history.pushState(null,"",a)}}function clearQueryStringParameter(){new URLSearchParams(window.location.search);if("URLSearchParams"in window){var t=window.location.pathname;history.pushState(null,"",t)}}function unescapeSlashes(t){if(null!==t){let e=t.replace(/(^|[^\\])(\\\\)*\\$/,"$&\\");try{e=JSON.parse(`"${e}"`)}catch(e){return t}return t.replace(/(^|[^\\])(\\\\)*\\$/,"$&\\")}return t}function appendSelectboxStateClass(t,e){""!==e?t.addClass("changed"):t.removeClass("changed")}toggleSwitch.addEventListener("change",switchTheme,!1),transitionEndCallback=t=>{root.removeEventListener(transitionEvent,transitionEndCallback),root.classList.remove("transitioning")},$(document).ready((function(){$("html").removeClass("page-loading")}));
$(document).ready((function(){var a,e,t=new URLSearchParams(window.location.search),r=[{displayTitle:"ID (system)",name:"id",data:"id",className:"id",visible:!1},{displayTitle:"#",name:"index",data:"image_url",className:"id",data:function(a){return a.image_url.split(".")[0]},render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},width:"20px",searchable:!1},{displayTitle:"アルバムアート",name:"jacket",data:"image_url",className:"jacket",render:function(a){return'<span class="img-wrap"><img src="jacket/'+a.split(".")[0]+'.jpg"/></span><span class="index">'+a.split(".")[0]+"</span>"},width:"50px",orderable:!1,searchable:!1},{displayTitle:"曲名",name:"title",data:"title",className:"song-title",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="title">'+a+'</span><span class="artist-display hidden">'+t.artist+"</span></div>":"filter"===e?a:t.title_sort},width:"80vw"},{displayTitle:"曲名 (読み)",name:"title_sort",data:"title_sort",className:"title-sort",visible:!1,searchable:!1},{displayTitle:"曲名・アーティスト",name:"title_merged",data:"title",className:"artist",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="artist-display hidden">'+t.artist+"</span></div>":t.title_sort},searchable:!1},{displayTitle:"ジャンル",name:"category",data:"category",className:"category",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"category_id",filterable:!0},{displayTitle:"ジャンルID",name:"category_id",data:"category_id",width:"90px",visible:!1},{displayTitle:"チャプターID",name:"chap_id",data:"chap_id",className:"chapter-id",visible:!1},{displayTitle:"チャプター",name:"chap",data:function(a,e,t,r){return"sort"===e||"meta"===e?a.chap_id:(a.chap_chapter=a.chap_id.substr(3,2),"0"==a.chap_id.substr(0,1)?"1"==a.chap_id.substr(1,1)?(a.chap_book="1",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"2"==a.chap_id.substr(1,1)?(a.chap_book="2",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"3"==a.chap_id.substr(1,1)?"0308"==a.chap_id.substr(0,4)?(a.chap_book="3",a.chap_chapter=a.chap_id.substr(4,1),a.chap_display=a.chap_book+"-S"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_book="3",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"4"==a.chap_id.substr(1,1)?(a.chap_book="4",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_display=a.chapter,a.chap_display):"80"==a.chap_id.substr(0,2)?(a.chap_book="SP2",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"99"==a.chap_id.substr(0,2)?(a.chap_book="SP",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_display=a.chap_id+" "+a.chapter,a.chap_display))},className:"chapter",width:"15em",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},filterable:!0},{displayTitle:"属性",name:"enemy_type",data:"enemy_type",className:"type",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="element-type-icon '+a.toLowerCase()+'"><span class="icon"></span><span class="label-text">'+a+"</span></span></div>":a},width:"40px",filterable:!0},{displayTitle:"キャラID",name:"chara_id",data:"chara_id",visible:!1},{displayTitle:"相手キャラ",name:"character",data:"character",className:"character",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"chara_id",width:"10em",filterable:!0},{displayTitle:"相手レベル",name:"enemy_lv",data:"enemy_lv",className:"enemy-lv",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">Lv.'+a+"</div>":a},customDropdownSortSource:n("enemy_lv"),width:"4em"},{displayTitle:"BASIC",name:"lev_bas",data:s("lev_bas","lev_bas_i"),className:"lv lv-bsc",render:c("lev_bas","lev_bas_i"),customDropdownSortSource:n("lev_bas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"ADVANCED",name:"lev_adv",data:s("lev_adv","lev_adv_i"),className:"lv lv-adv",render:c("lev_adv","lev_adv_i"),customDropdownSortSource:n("lev_adv"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"EXPERT",name:"lev_exc",data:s("lev_exc","lev_exc_i"),className:"lv lv-exp",render:c("lev_exc","lev_exc_i"),customDropdownSortSource:n("lev_exc"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"MASTER",name:"lev_mas",data:s("lev_mas","lev_mas_i"),className:"lv lv-mas",render:c("lev_mas","lev_mas_i"),customDropdownSortSource:n("lev_mas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"LUNATIC",name:"lev_lnt",data:s("lev_lnt","lev_lnt_i"),className:"lv lv-lnt",render:c("lev_lnt","lev_lnt_i"),customDropdownSortSource:n("lev_lnt"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"譜面",name:"chart_diff",data:function(a,e,t,r){return 1==flat_view?"sort"===e||"meta"===e?(console.log(a.chart_diff),a.chart_diff):d(a.chart_diff):null},className:"lv-name detail-hidden",width:"3rem",createdCell:flat_view?function(a,e,t,r,l){$(a).addClass(t.chart_diff)}:null,render:flat_view?(e="chart_diff",function(a,t,r){return"display"===t?'<span class="diff-name">'+d(r[e])+"</span>":a}):null,customDropdownSortSource:flat_view?(a="chart_diff",function(e,t){return d(e[a],!0).localeCompare(d(t[a],!0))}):null,searchable:flat_view,filterable:flat_view,visible:!1},{displayTitle:"難易度グループ",name:"chart_lev",data:flat_view?"chart_lev":null,className:"lv detail-hidden",width:"4rem",customDropdownSortSource:n("chart_lev"),reverseSortOrder:!0,filterable:!1,visible:!1},{displayTitle:"譜面レベル",name:"chart_lev_i",data:flat_view?"chart_lev_i":null,className:"lv lv-name detail-hidden",render:flat_view?function(a,e,t,r){return function(t,l,s){return"display"===l?'<div class="inner-wrap"><span class="diff-name">'+d(s[a])+'</span><span class="lv-num-wrap"><span class="lv-num-simple">'+s[e]+'</span><span class="lv-num-precise">'+s[r]+"</span></span></div>":t}}("chart_diff","chart_lev",0,"chart_lev_i_display"):null,width:"4rem",createdCell:flat_view?function(a,e,t,r,l){$(a).addClass(t.chart_diff)}:null,filterable:!1,searchable:!1,visible:flat_view},{displayTitle:"NEW",name:"new",data:"new",searchable:!1,visible:!1},{displayTitle:"追加日",name:"date",data:"date",className:"date",filterable:!0,render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},reverseSortOrder:!0,width:"4em"},{displayTitle:"(details)",name:"details",data:"id",className:"details detail-hidden",width:"10px"}],l=flat_view?[[21,"desc"],[13,"desc"],[23,"desc"]]:[[23,"desc"],[9,"asc"],[0,"asc"]];function s(a,e){return function(t,r,l,s){return"sort"===r?""===t[e]?i(t[a]):i(t[e]):t[a]}}function i(a){return""!=a?(lev_processed=parseInt(a)<10?"0"+a:a,lev_processed):""}function n(a){return function(e,t){return i(e[a]).localeCompare(i(t[a]))}}function c(a,e){return function(t,r,l){return"display"===r?'<div class="inner-wrap"><span class="lv-num-simple">'+l[a]+'</span><span class="lv-num-precise">'+l[e]+"</span></div>":t}}function d(a,e){if(e)switch(a){case"lev_bas":t="1 BASIC";break;case"lev_adv":t="2 ADVANCED";break;case"lev_exc":t="3 EXPERT";break;case"lev_mas":t="4 MASTER";break;case"lev_lnt":t="5 LUNATIC"}else switch(a){case"lev_bas":var t="BASIC";break;case"lev_adv":var t="ADVANCED";break;case"lev_exc":var t="EXPERT";break;case"lev_mas":var t="MASTER";break;case"lev_lnt":var t="LUNATIC"}return t}function o(a,e){return e?a.map((a=>["lev_bas","lev_adv","lev_exc","lev_mas","lev_lnt"].map((e=>a[e]?{...a,chart_diff:e,chart_lev:a[e],chart_lev_i:parseFloat(a[e+"_i"]||a[e].replace("+",".7")),chart_lev_i_display:a[e+"_i"]||'<span class="approx">'+parseFloat(a[e].replace("+",".7")).toFixed(1)+"</span>"}:null)))).flat().filter((a=>!!a)):a}if($.getJSON("data/music-ex.json",(a=>{$("#table").DataTable({data:o(a,flat_view),buttons:[{extend:"colvis",className:"config-btn",columns:".toggle",text:"カラムON/OFF",collectionTitle:"表示するカラムを選択",collectionLayout:"fixed",fade:150}],columns:r,deferRender:!0,dom:'<"toolbar-group"<"toolbar filters"><"toolbar search"f>><"toolbar secondary"<"info"ilB>><"table-inner"rt><"paging"p>',language:{sEmptyTable:"テーブルにデータがありません",sInfo:" _TOTAL_項目 (_START_〜_END_ 表示中)",sInfoEmpty:" 0 項目",sInfoFiltered:"（全 _MAX_ 項目）",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"1ページ表示 _MENU_",sLoadingRecords:"読み込み中...",sProcessing:"処理中...",sSearch:"キーワード検索",sZeroRecords:"一致するレコードがありません",oPaginate:{sFirst:"先頭",sLast:"最終",sNext:"次",sPrevious:"前"},oAria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}},lengthMenu:[[25,50,100,-1],[25,50,100,"All"]],order:l,responsive:{details:{type:"column",target:"tr",display:$.fn.dataTable.Responsive.display.modal({header:function(a){var e=a.data();return'<div class="modal-header"><div class="img-wrap"><img src="jacket/'+e.image_url.split(".")[0]+'.jpg"/></div><div class="content-wrap"><span class="title">'+e.title+'</span><span class="artist">'+e.artist+"</span></div></div>"}}),renderer:$.fn.dataTable.Responsive.renderer.tableAll()}},rowGroup:{dataSrc:"date",startRender:flat_view||""!=t?null:function(a,e){return"<div>"+e+" 追加</div>"}},scrollX:!0,initComplete:function(){var a=this.api().rows().data(),e=this.api();e.columns().every((function(){var l=e.order(),s=this,i=s.data(),n=r[s.index()];if("filterable"in n&&1==n.filterable){var c=$('<div class="select-wrap"><span class="label">'+n.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),d=$('<select id="'+n.name+'"><option value="" data-default>——</option></select>');if(d.appendTo(c),d.on("change",(function(){var a=$(this).val(),e=$.fn.dataTable.util.escapeRegex($(this).val());appendSelectboxStateClass($(this),a),23===s.index()||""===e&&23===l[0][0]?s.rowGroup().enable():s.rowGroup().disable(),updateQueryStringParameter(n.name,a),s.search(e?"^"+e+"$":"",!0,!1).draw()})),i=n.customDropdownSortSource?i.map((function(a,e){return e})).sort((function(e,t){var r=a[e],l=a[t];return"function"==typeof n.customDropdownSortSource?n.customDropdownSortSource(r,l):r[n.customDropdownSortSource].localeCompare(l[n.customDropdownSortSource])})).map((function(a){return i[a]})):i.sort(),n.reverseSortOrder&&i.reverse(),i.unique().each((function(a,e){""!=a&&d.append('<option value="'+a+'">'+a+"</option>")})),"URLSearchParams"in window){var o=t.get(n.name);if(null!==o){var p=unescapeSlashes(o);i.unique().each((function(a){d.val(p)})),appendSelectboxStateClass(d,p)}}}})),"URLSearchParams"in window&&(t.forEach((function(a,l){e.columns().every((function(){var a=r[this.index()],e=t.get(a.name),l=$.fn.dataTable.util.escapeRegex(decodeURIComponent(e));null!==e&&this.search(e?"^"+l+"$":"",!0,!1)}))})),e.draw()),e.on("order.dt",(function(){var a=e.order(),t=e.columns().search(),r=!1;for(let a=0;a<t.length;a+=1)if(a in t&&""!==t[a]){r=!0;break}return 23!==a[0][0]?void e.rowGroup().disable():23!==a[0][0]||r?void 0:void e.rowGroup().enable()})),$("#table").addClass("loading-done"),$("html").removeClass("table-loading")}})})),$("select#chart_lev").on("change",(function(){var a=$("#table").DataTable(),e=$(this),t=$(this).val(),r=$.fn.dataTable.util.escapeRegex($(this).val());"filter"==e.data("type")?(a.column("chart_lev:name").search(r?"^"+r+"$":"",!0,!1),updateQueryStringParameter("chart_lev",t),a.draw()):window.location.href="/lv?chart_lev="+encodeURIComponent(t)})),"URLSearchParams"in window){var p=t.get("chart_lev");if(null!==p){var v=unescapeSlashes(p);$("select#chart_lev").val(v)}}$("a.reset-search").on("click",(function(){$("#table").DataTable().order(l).search("").columns().search("").draw(),clearQueryStringParameter(),$(".toolbar.filters select").prop("selectedIndex",0),console.log("search reset")}))}));
