//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery'],function(){
             /*------------------------nav-----------------------*/ 
                var $tab = $('.header_nav');
                var $tabItem = $tab.find('.navbar-list li');
                var tabIndex;
                $tab.on('mouseover','.navbar-list li',function(){
                    // 获取当前tab
                    // 添加高亮，出去其他高亮
                    $(this).addClass('active').siblings().removeClass('active');

                });
                $tab.on('click','.navbar-list li',function(){
                    // 获取当前tab
                    // 添加高亮，出去其他高亮
                    var idx = $(this).index();console.log(idx)
                    window.sessionStorage.setItem('userInfo', JSON.stringify(
                        {
                           'tabIndex': idx,
                        }
                    ));
                    $(this).addClass('active').siblings().removeClass('active');

                });
        
                var userJsonStr = sessionStorage.getItem('userInfo');
                if(userJsonStr){
                      var presentTabIndex = JSON.parse(userJsonStr);
                      tabIndex =  presentTabIndex.tabIndex;
                      try{
                        $($tabItem)[tabIndex].classList.add('active');
                      }catch(err){}
                }else{
                    $tabItem.first().addClass('active')
                }
                
                $('.navbar-logo').click(function(){
                    window.sessionStorage.setItem('userInfo', JSON.stringify(
                            {
                               'tabIndex': 0,
                            }
                      ));
                    location.href='/';
                })
    });
});
