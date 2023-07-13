// Smooth Scrool Sample

// slider option

$(function(){
   $('.bxslider').bxSlider({
     mode: 'fade',
     captions: true,
     slideWidth: 400
   });
 });

$(function(){

   $('a[href^="#"]').click(function() {

      // 初期設定：移動時間(ms)と頭出し位置
      var speed = 500;
      var offset = -0;

      // アンカーを取得
      var anchor = $(this).attr("href");

      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});

