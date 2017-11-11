window.onload=function(){
	showTime();
}

function checkTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}

function showTime(){
	var mydate=new Date();
	var year=mydate.getFullYear();
	var month=mydate.getMonth()+1;
	var day=mydate.getDate();
	var h=mydate.getHours();
	var m=mydate.getMinutes();
	var s=mydate.getSeconds();
	m=checkTime(m);
	s=checkTime(s);

	var week=mydate.getDay();
	var weekday=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	document.getElementById("time").innerHTML=""+year+"年"+month+"月"+day+"日 "+weekday[week]+" "+h+":"+m+":"+s;
}

var itv=setInterval(showTime,1000);