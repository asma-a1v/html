function window_load() {
	var sW,sH,s;
	sW = window.innerWidth;
	sH = window.innerHeight;

	s = "ウィンドウサイズ：横幅 = " + sW + " / 高さ = " + sH;
	document.getElementById("winsize2").innerHTML = s;
}

// ウィンドウサイズを取得して表示する関数
function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// DOMが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
    // 初期サイズを表示
    updateWindowSize();

    // ウィンドウがリサイズされるたびにサイズを更新
    window.addEventListener('resize', updateWindowSize);
});
