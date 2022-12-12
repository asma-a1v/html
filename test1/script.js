function main(){
	window_load();
	
	window.onresize = window_load;
}

function window_load() {		
	var w2 = window.innerWidth;
	var h2 = window.innerHeight;
	
	var w2 = w2/2;
	var h2 = h2/2;
	
	document.winsize.sw.value = w2;
	document.winsize.sh.value = h2;
	
	document.getElementById("w1").innerHTML = window.innerWidth;
	document.getElementById("h1").innerHTML = window.innerHeight;
}
