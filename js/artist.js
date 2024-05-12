$(document).ready(function(){
    
    get_con('js/artist-list.json');
     $(".menu").click(function(){
         $('.bar').stop().slideToggle('slow');
     });
     $('#nav-icon3').click(function(){
         $(this).toggleClass('open');
     });
     
     
 
 });
 
//  function get_con(file_name){
//      $.getJSON(file_name, function(data){
               
//      $("section").empty();
//      $.each(data, function(index, en){
     
//          var html ='<div class="box">';
//          html +='<div class="imgbox">';
//          html +='<a href="'+en['w_url']+'"><img src="img/'+en['img_name']+'"/></a>';
//          html +='</div>';
//          html +='<div class="imgbox2">';
//          html +='<a href="'+en['w_url']+'"><img src="img/'+en['img2_name']+'"/></a>';
//          html +='</div>';
//          html +='<a href="'+en['w_url']+'"><h3>'+en['title']+'</h3></a>';
//          html +='<p>'+en['des']+'</p>';
//          html +='</div>';
         
//          $("section").append(html);
         
//     });
// });}

function get_con(file_name){
    $.getJSON(file_name, function(data){
        $("section").empty();
        $.each(data, function(index, en){
            var html = '<div class="box">';
            html += '<div class="imgbox">';
            html += '<img src="artists/' + en['img_name'] + '" data-alt-src="artists/' + en['img2_name'] + '"/>';
            html += '</div>';
            html += '<h3>' + en['title'] + '</h3>';
            html += '<p>' + en['des'] + '</p>';
            html += '</div>';
            $("section").append(html);
        });

        // 在所有元素被添加到DOM后，添加图片hover效果
        // $('.imgbox img').hover(function(){
        //     // 鼠标悬停时切换到img2_name
        //     var altSrc = $(this).data('alt-src');
        //     $(this).data('alt-src', $(this).attr('src'));  // 保存原始src
        //     $(this).attr('src', altSrc);  // 设置新src为img2_name对应的图片
        // }, function(){
        //     // 鼠标移开时切换回img_name
        //     var altSrc = $(this).data('alt-src');
        //     $(this).data('alt-src', $(this).attr('src'));  // 保存切换后的src
        //     $(this).attr('src', altSrc);  // 恢复原始图片
        // });
        $('.imgbox img').hover(
            function() {
                // 鼠标进入
                var img = $(this); // 缓存当前图片对象
                var newSrc = img.data('alt-src'); // 获取备用图片路径
                var oldSrc = img.attr('src'); // 获取当前图片路径
        
                img.css('opacity', 0).on('transitionend', function() {
                    img.attr('src', newSrc); // 更换图片的src
                    img.data('alt-src', oldSrc); // 交换数据源
                    img.css('opacity', 1);
                    //img.off('transitionend'); // 移除transitionend事件监听

                });
            }, 
            function() {
                // 鼠标离开
                var img = $(this); // 缓存当前图片对象
                var newSrc = img.data('alt-src'); // 获取备用图片路径
                var oldSrc = img.attr('src'); // 获取当前图片路径
                img.css('opacity', 0).on('transitionend', function() {
                    img.attr('src', newSrc); // 更换图片的src
                    img.data('alt-src', oldSrc); // 交换数据源
                    img.css('opacity', 1);
                    //img.off('transitionend'); // 移除transitionend事件监听

                });
            }
        );
    });
}



// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.bottom < 0 || rect.top > window.innerHeight;
//   }
  
//   function addClassToVisibleElements() {
//     var aosElements = document.querySelectorAll(".box");
//     aosElements.forEach(function (aosElement) {
//       if (!isElementInViewport(aosElement)) aosElement.classList.add("ed");
//       else aosElement.classList.remove("ed");
//     });
//   }
  
//   document.addEventListener("scroll", addClassToVisibleElements);
//   addClassToVisibleElements();