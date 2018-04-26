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
          var $tab1 = $('.messageMain');
            var $tabItem1 = $tab1.find('.word_tab .word_tab_title');
            var $tabContent1 = $tab1.find('.article_detail_box .article_detail_content');
            $tabContent1.slice(1).hide();
            $tabItem1.first().addClass('active');

            $tab1.on('click','.word_tab_title',function(){
                // 获取当前tab
                // 添加高亮，出去其他高亮
                $(this).addClass('active').siblings().removeClass('active');
                var idx = $(this).index();
                $tabContent1.eq(idx).show().siblings().hide();
                console.log(idx,$tabContent1.eq(idx))
            });
            $('.hot_post_detail').click(function(){
                window.sessionStorage.setItem('userInfo', JSON.stringify(
                        {
                           'tabIndex': 1,
                        }
                  ));
            })
    });
});
