<script>
	// <![CDATA[
		$(document).ready(function(){
			$('#submenu').hide();
			$('#mainmenu').toggle (
				function(){
					$('#submenu').slideDown("fast");
					$("nav,#submenu").addClass("on");
				},
				function(){
					$('#submenu').slideUp("fast");
					$("nav,#submenu").removeClass("on");
				}
			);
		});
	// ]]>
</script>