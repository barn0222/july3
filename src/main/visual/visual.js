$(document).ready(function(){
	var isAnimated = true;
	var speed = 1000;

	var slider1 = [
		{"background":"url(../img/visual_img2.jpg) no-repeat center/cover", "txt":"design"},
        {"background":"url(../img/visual_img4.png) no-repeat center/cover", "txt":"space" },
        {"background":"url(../img/visual_img1.jpg) no-repeat center/cover", "txt":"daily"}
	];

	init('#slider1>ul', slider1);

	function init(selector, data){
		$(selector).css({
			width:(100*data.length)+'%', height:'100%', marginLeft:'-100%'
		})

		$(data).each(function(){
			$(selector)
				.append(
                    $('<li>')
                        .text(this.txt)
						.css({
							width:(100/data.length)+'%',
							height:'100%', float:'left',fontSize:180,
                            display:'flex', justifyContent:'left', 
                            padding : '40px 100px', boxSizing:'border-box',
							alignItems:'flex-end',background:this.background,overflow:'hidden', color:'#fff'
						})
				);
		});
		
	}

	$('.next').on('click',function(e){
		e.preventDefault();	
		if(isAnimated){
			isAnimated = false;
			next('#slider0>ul',speed);	
			next('#slider1>ul',speed);	
		}		
	});

	$('.prev').on('click',function(e){
		e.preventDefault();
		if(isAnimated){
			isAnimated = false;
			prev('#slider0>ul',speed);
			prev('#slider1>ul',speed);
		}				
	});
	function next(selector,speed){
		$(selector).animate({ marginLeft : '-200%'},speed,function(){
			$(this).children('li').first().appendTo(this);
			$(this).css({marginLeft: '-100%'});	
			isAnimated = true;
		});
	}
	function prev(selector, speed){
		$(selector).animate({ marginLeft : '0%'},speed,function(){
			$(this).children('li').last().prependTo(this);
			$(this).css({marginLeft : '-100%'});
			isAnimated = true;
		});
	}
	
}); 