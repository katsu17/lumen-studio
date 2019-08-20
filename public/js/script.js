
console.log("js successfully loaded!");

var topBackGroundVideo = document.querySelectorAll('#topBackGroundVideo');
topBackGroundVideo.autoplay  = true;
topBackGroundVideo.loop  = true;

<script type="text/javascript">
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	})
});
</script>
