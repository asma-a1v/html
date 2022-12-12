function window_load() {
	var sW,sH,s;
	sW = window.innerWidth;
	sH = window.innerHeight;

	s = "ウィンドウサイズ：横幅 = " + sW + " / 高さ = " + sH;
	document.getElementById("winsize2").innerHTML = s;
}