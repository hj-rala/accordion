function acc(){
		var $accT = $('.accList .box .tit');
		var $accC = $('.accList .box .con');
		$accT.each(function(){
			$(this).bind('click', function(){
				if($(this).is('.on')){
					$(this).removeClass('on');
					$(this).siblings().slideUp();
				} else {
					$accC.slideUp(300);
					$(this).siblings().slideDown();
					$(this).addClass('on');
					$accC.removeClass('on');
				}
				
			})
			
		})
	}
	acc();
