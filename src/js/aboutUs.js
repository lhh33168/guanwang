//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery','head','foot'],function(){
         /*-------------------header and footer-------------------------*/
            $('#pageHeader').load('/html/head.html');
            $('#pageFooter').load('/html/foot.html');
        /*-------------------banner-------------------------*/
            var contentHeight = window.innerHeight - 370 + 'px';
            $('#coreMember').css({height:contentHeight})
    });
});
