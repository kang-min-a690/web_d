/* 문서준비 이벤트 */
$(function() {
    /* 메뉴슬라이드 기능 */
    $(".main-menu").on("mouseover", function(){
        $(".sub-menu").stop().fadeIn()
    })
    $(".main-menu").on("mouseout", function(){
      $(".sub-menu").stop().fadeOut()
  })

  // 탭 배너
  $("#btn-notice").on("click", function() {
      $("#con")
  })
})