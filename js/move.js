window.onload = function(){
	var container=document.getElementById('container')
	var list=document.getElementById('list');
	var buttons=document.getElementById('buttons').getElementsByTagName('span');
	var prv=document.getElementById('prev');
	var next=document.getElementById('next');
	var index=1;
	var animated=false;
	var timer;

	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='on';	
	}

	function animate(offset){
		animated=true;
		var time=300;
		var inteval=10;
		var speed=offset/(time/inteval);
		var newLeft=parseInt(list.style.left)+offset;
		function go(){
			if((speed>0&&parseInt(list.style.left)<newLeft)||(speed
				<0&&parseInt(list.style.left)>newLeft)){
				list.style.left=parseInt(list.style.left)+speed+'px';
				setTimeout(go,inteval);
			}
			else{
				animated=false;
				list.style.left=newLeft+'px';
				if(newLeft>-320){
					list.style.left=-1280+'px';
				}
				if(newLeft<-1280){
					list.style.left=-320+'px';
				}
			}
		}
		go();	
	}

	function play(){
		timer=setInterval(function(){
			next.onclick();},3000);
	}
	function stop(){
		clearInterval(timer);
	}

	next.onclick=function(){
		if(index==4){
			index=1;
		}
		else{
			index +=1;
		}
		if(!animated){
			animate(-320);
		}
		showButton();
	}
	prev.onclick=function(){
		if(index==1){
			index=4;
		}
		else{
			index -=1;
		}
		if(!animated){
			animate(320);
		}
		showButton();
	}
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex=parseInt(this.getAttribute('index'));
			var offset=-320*(myIndex-index);
			if(!animated){
				animate(offset);
			}
			index=myIndex;
			showButton();
			// debugger;
		}
	}

	container.onmouseover=stop;
	container.onmouseout=play;
	play();
}