window.addEventListener('DOMContentLoaded',function(){
	var toggles = document.querySelectorAll('.btnToggle');
	toggles.forEach(function(toggle){
		var parent = toggle.closest('.agreeArea');
			var content = toggle.querySelector('.contents');
			toggle.addEventListener('click',function(){
				parent.classList.toggle('on');
			})
	})
});
