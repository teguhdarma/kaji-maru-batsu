var qa = [
    ['消防署は日曜日は休みである。○でしょうか？×でしょうか？', 2],
    ['消防車を呼ぶ電話番号と救急車を呼ぶ電話番号は同じである。○でしょうか？×でしょうか？ ', 1],
    ['コンセントにほこりがたまると火災になる危険がある。○でしょうか？×でしょうか？', 1],
    ['火事が起こったら、最初に火の消火をする。○でしょうか？×でしょうか？', 2],
    ['火災の発生をなるべく早く気づかせるための「火災警報器」は、大きなビルだけでなく、家にもつけなくてはいけない。○でしょうか？×でしょうか？ ', 1],
    ['火災や地震が発生して逃げるときにはエレベーターで避難してはいけない。○でしょうか？×でしょうか？', 1],
    ['消火器の粉が出る時間は約13秒である。○でしょうか？×でしょうか？', 1],
    ['防災の日は9月1日である。○でしょうか？×でしょうか？', 1],
    ['火事で煙が充満した時、姿勢を低くして避難する。○でしょうか？×でしょうか？ ', 1],
    ['初期消火が可能な火災はほかの部屋に火が移るまでである。○でしょうか？×でしょうか？', 2],
]
  var a = [
    ['　消防署は休みなく災害に備えています。', 1],
    ['　同じく「119」番です。最初は112番（昭和元年まで）でした。', 2],
    ['　コンセントにほこりがたまると、それが原因で火災になる可能性があります。', 2],
    ['　火事が発生したらまずは大声で「火事だ！」と叫び、周りの人に知らせましょう。', 1],
    ['　「住宅用火災警報器」は法令で設置が義務付けられています。', 2],
    ['　停電などでエレベーターが停止して閉じ込められる可能性があります。階段で避難しましょう。', 2],
    ['　消火器の大きさにもよりますが、概ね10～15秒程度です。', 2],
    ['　防災の日は9月1日です。', 2],
    ['　煙を吸わないよう姿勢を低くして避難しましょう。煙が部屋や廊下に充満してきた場合は、ハンカチやタオルなどで口・鼻をしっかり覆いましょう。', 2],
    ['　初期消火が可能な火災は炎が天井にとどくまでです。それ以上は、消火が困難になり、炎や煙にまかれて負傷する可能性が高まりますので、迷わず安全な場所に避難してください。', 1]
  ];
  
  var count = 0;
  var correctNum = 0;
  var kekkacount = 0;
  window.onload = function() {
    // 最初の問題を表示
    var question = document.getElementById('question');
    question.innerHTML = (count + 1) + '問目：' + qa[count][0];
    document.getElementById("abc").style.display = "none";
  };
  
  // クリック時の答え判定
  function hantei(btnNo) {
    if (qa[count][1] == btnNo) {
      Swal.fire({
        icon:'success',
       title: '正解!',
       
     })
      correctNum++;
      kekkacount++;
    }else{
      Swal.fire({
        icon: 'error',
        title: '残念',
        text: a[count][0],
      })
     kekkacount++;
    }
    //結果ボタン表示
    if(kekkacount == 10){
      document.getElementById("abc").style.display = "block";
    }else{
      document.getElementById("abc").style.display = "none";
    }
    // 次の問題表示
    count++;
    var question = document.getElementById('question');
    question.innerHTML = (count + 1) + '問目：' + qa[count][0];

    
  }

  function kekka() {
    Swal.fire('あなたの正解数は' + correctNum + '問です！')
      
    }
   

