//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot',],function(){
         /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('/html/head.html');
            $('#pageFooter').load('/html/foot.html');
        /*-------------------banner-------------------------*/
          $(document).ready(function(){
          var i={animateThreshold:100};
          $(".aniview").AniView(i),
          $(".code").each(function(i,e){hljs.highlightBlock(e)})});
    });
});
