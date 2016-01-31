var movies = {
	show:function(){
		document.getElementById("movies").style.top = "50%";
	},
	hide:function(){
		document.getElementById("movies").style.top = "201%";
	}
}
var series = {
	show:function(){
		document.getElementById("series").style.top = "50%";
	},
	hide:function(){
		document.getElementById("series").style.top = "201%";
	}
}
var watch_br = {
	show:function(){
		document.getElementById("watch_wrapper_br").style.display = "inline";
		document.getElementById("cover").style.display = "inline";
	},
	hide:function(){
		document.getElementById("watch_wrapper_br").style.display = "none";
		document.getElementById("cover").style.display = "none";
		document.getElementById("watch_wrapper_br").innerHTML = '<iframe src="https://openload.co/embed/sdwCfctmzt4/" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
	}
}
var watch_en = {
	show:function(){
		document.getElementById("watch_wrapper_en").style.display = "inline";
		document.getElementById("cover3").style.display = "inline";
	},
	hide:function(){
		document.getElementById("watch_wrapper_en").style.display = "none";
		document.getElementById("cover3").style.display = "none";
		document.getElementById("watch_wrapper_en").innerHTML = '<iframe src="https://openload.co/embed/sdwCfctmzt4/" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
	}
}
var watchs_br = {
	show:function(){
		document.getElementById("watch_wrapper_s_br").style.display = "inline";
		document.getElementById("cover").style.display = "inline";
	},
	hide:function(){
		document.getElementById("watch_wrapper_s_br").style.display = "none";
		document.getElementById("cover").style.display = "none";
		document.getElementById("watch_wrapper_s_br").innerHTML = '<iframe src="https://openload.co/embed/sdwCfctmzt4/" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
	}
}
var watchs_en = {
	show:function(){
		document.getElementById("watch_wrapper_s_en").style.display = "inline";
		document.getElementById("cover3").style.display = "inline";
	},
	hide:function(){
		document.getElementById("watch_wrapper_s_en").style.display = "none";
		document.getElementById("cover3").style.display = "none";
		document.getElementById("watch_wrapper_s_en").innerHTML = '<iframe src="https://openload.co/embed/sdwCfctmzt4/" scrolling="no" frameborder="0" width="100%" height="90%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
	}
}
var trailer = {
	show:function(){
		document.getElementById("youtube_wrapper").style.display = "inline";
		document.getElementById("cover2").style.display = "inline";
	},
	hide:function(){
		document.getElementById("youtube_wrapper").style.display = "none";
		document.getElementById("cover2").style.display = "none";
		document.getElementById("youtube_wrapper").innerHTML = '<iframe width="100%" src="https://www.youtube.com/embed/A-0imt4S2w4" height="90%" ng-src="{{ youtube }}" frameborder="0" allowfullscreen></iframe>';
	}
}
var trailers = {
	show:function(){
		document.getElementById("youtube_wrapper_s").style.display = "inline";
		document.getElementById("cover2").style.display = "inline";
	},
	hide:function(){
		document.getElementById("youtube_wrapper_s").style.display = "none";
		document.getElementById("cover2").style.display = "none";
		document.getElementById("youtube_wrapper_s").innerHTML = '<iframe width="100%" src="https://www.youtube.com/embed/A-0imt4S2w4" height="90%" ng-src="{{ youtubes }}" frameborder="0" allowfullscreen></iframe>';
	}
}
var genres = {
	show:function(){
		document.getElementById("genres_box").style.left = "201px";
		document.getElementById("genres_box").style.display = "inline";
	},
	hide:function(){
		document.getElementById("genres_box").style.left = "-140px";
    	document.getElementById("genres_box").style.display = "none";
	}
}
var season = {
	select:function(){
		var x = document.getElementById("season_select").value;
		if(x=="1")
		{
			document.getElementById("episodes_box1").style.display = "inline";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="2")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "inline";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="3")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "inline";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="4")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "inline";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="5")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "inline";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="6")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "inline";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="7")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "inline";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="8")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "inline";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="9")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "inline";
			document.getElementById("episodes_box10").style.display = "none";
		}
		if(x=="10")
		{
			document.getElementById("episodes_box1").style.display = "none";
			document.getElementById("episodes_box2").style.display = "none";
			document.getElementById("episodes_box3").style.display = "none";
			document.getElementById("episodes_box4").style.display = "none";
			document.getElementById("episodes_box5").style.display = "none";
			document.getElementById("episodes_box6").style.display = "none";
			document.getElementById("episodes_box7").style.display = "none";
			document.getElementById("episodes_box8").style.display = "none";
			document.getElementById("episodes_box9").style.display = "none";
			document.getElementById("episodes_box10").style.display = "inline";
		}
	}
} 
