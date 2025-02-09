document.addEventListener("DOMContentLoaded", function() {
    // ★ フォーム送信時のイベント処理 ★
    const sampleForm = document.getElementById('sampleForm');
    sampleForm.addEventListener('submit', function(e) {
      e.preventDefault(); // 送信後のページリロードを防ぐ
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert(`送信された情報:\n名前: ${name}\nメール: ${email}`);
      sampleForm.reset();
    });
  
    // ★ カウンターのインクリメント・デクリメント処理 ★
    let counterValue = 0;
    const counterDisplay = document.getElementById('counterValue');
    document.getElementById('increment').addEventListener('click', function() {
      counterValue++;
      counterDisplay.textContent = counterValue;
    });
    document.getElementById('decrement').addEventListener('click', function() {
      counterValue--;
      counterDisplay.textContent = counterValue;
    });
  
    // ★ アラートボックスのクローズ機能 ★
    const alertBox = document.getElementById('alertBox');
    const closeAlert = document.getElementById('closeAlert');
    closeAlert.addEventListener('click', function() {
      alertBox.style.display = 'none';
    });
  
    // ★ Canvasアニメーションのサンプル ★
    const canvas = document.getElementById('sampleCanvas');
    const ctx = canvas.getContext('2d');
    let x = 20;
    let direction = 1;
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 動く円を描画
      ctx.beginPath();
      ctx.arc(x, canvas.height / 2, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#3498db';
      ctx.fill();
      ctx.closePath();
      
      // 位置の更新
      x += direction * 2;
      if (x > canvas.width - 20 || x < 20) {
        direction *= -1;
      }
      requestAnimationFrame(animate);
    }
    
    animate();
  
    // ★ 非同期処理のサンプル ★
    async function fetchSampleData() {
      try {
        // サンプルのための疑似フェッチ処理
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: 'サンプルデータ' });
          }, 1000);
        });
        console.log('非同期データ取得:', response.data);
      } catch (error) {
        console.error('エラーが発生しました:', error);
      }
    }
    
    fetchSampleData();
  });
  