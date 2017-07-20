/**
 * 鼠标滚动滚动条切换背景图片
 */

window.onscroll = function(e){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>100){
        $('.banner-wrapper').addClass('active');
        $('.banner-wrapper .big-video').addClass('inactive');
        $('.menu-wrapper').addClass('active');
        $('.content-wrapper').addClass('active');
        $('.footer').addClass('active');
    }
    return;
}

/**
 * 图片切换效果
 **/
$('.menu-wrapper > .menu-inner').on('click' , 'li' , function (e) {
    var li = e.currentTarget;  //首先获取到li，当前被点击的元素
    var $li = $(li);
    $li.addClass('current');
    $li.siblings('.current').removeClass('current');
    var index = $li.index();    //当前li 的索引
    var $content = $('.content-wrapper > .content-inner').children().eq(index);
    $content.addClass('active');
    $content.siblings('.active').removeClass('active');
})
/**
 * news-nav
 **/
$('.newest-wrapper > .newest-left > .tabs-nav > .news-nav').on('click' , 'li' , function (e) {
    var li = e.currentTarget;  //首先获取到li，当前被点击的元素
    var $li = $(li);
    $li.addClass('current');
    $li.siblings('.current').removeClass('current');
    var index = $li.index();    //当前li 的索引
    var $content = $('.newest-wrapper > .newest-left > .tabs-content').children().eq(index);
    $content.addClass('active');
    $content.siblings('.active').removeClass('active');
})
/**
 * hero-nav
 **/
$('.newest-wrapper > .newest-right > .tabs-nav-right > .hero-nav').on('mouseover' , 'li' , function (e) {
    var li = e.currentTarget;  //首先获取到li，当前被点击的元素
    var $li = $(li);
    $li.addClass('current');
    $li.siblings('.current').removeClass('current');
    var index = $li.index();    //当前li 的索引
    var $content = $('.newest-wrapper > .newest-right > .tabs-content-right').children().eq(index);
    $content.addClass('active');
    $content.siblings('.active').removeClass('active');
})
/**
 * last-nav
 **/
$('.newest-recommend > .tabs-nav-last > .last-nav').on('click' , 'li' , function (e) {
    var li = e.currentTarget;  //首先获取到li，当前被点击的元素
    var $li = $(li);
    $li.addClass('current');
    $li.siblings('.current').removeClass('current');
    var index = $li.index();    //当前li 的索引
    //console.log("index=="+index);
    var $content = $('.newest-recommend > .recommend-list').children().eq(index);
    $content.addClass('active');
    $content.siblings('.active').removeClass('active');
    //console.log(888)
})
/**
 * 鼠标移入改变背景颜色
 * */
 $('.download .user-links').on('mouseover' ,'li' , function (e) {
    var li = e.currentTarget;
    var jQueryLi = jQuery(li);
    var jQueryA = jQueryLi.children().eq(0);
    jQueryA.addClass('hover').parent().siblings('li').children().removeClass('hover');
})

/**
 * 图片轮播效果
 */
$(function(){
    $('#slides').slidesjs({
        navigation:false,
        width: 780,
        height: 330,
        callback: {
            loaded: function(){
                var texts = ['无极剑圣斩星魔剑','庆LPL登顶亚洲','LPL15日赛程','洲际赛冠军之选','新英雄凯隐大揭秘']
                $('.slidesjs-pagination-item').each(function(index, element){
                    element.children[0].innerText = texts[index]
                })
            }
        }
    })
})
