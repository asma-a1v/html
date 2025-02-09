// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    // フォーム要素を取得
    const form = document.getElementById('sampleForm');
    const resultDiv = document.getElementById('result');
  
    // フォームの送信時の処理
    form.addEventListener('submit', (event) => {
      // ページのリロードを防止
      event.preventDefault();
      
      // 入力値を取得
      const nameValue = document.getElementById('name').value;
      const emailValue = document.getElementById('email').value;
      const messageValue = document.getElementById('message').value;
  
      // 簡易的なバリデーション（空じゃないか）
      if(!nameValue || !emailValue) {
        resultDiv.innerText = '名前とメールアドレスは必須です。';
        return;
      }
  
      // 送信された情報を画面に表示（本来はサーバーに送信）
      resultDiv.innerHTML = `
        <p>送信ありがとうございました。</p>
        <p>名前: ${nameValue}</p>
        <p>メールアドレス: ${emailValue}</p>
        <p>メッセージ: ${messageValue}</p>
      `;
  
      // フォームのリセット
      form.reset();
    });
  });
  