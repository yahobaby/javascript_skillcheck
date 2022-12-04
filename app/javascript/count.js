//② 文字数カウント機能

function count (){
  //②-１ 関数countとして切り出し、関数countの中に、console.logを用いてコンソール上に文字を出力する記述
  //②-１ console.log("文字数カウント機能を実装");②-１確認できたので、削除

  //②-２ 入力フォームへ文字を入力するたびに、または文字を消すたびに、その時存在している文字列をコンソール上に出力
  const articleText  = document.getElementById("article_text");
  //②-２ 文字を入力する要素を取得。今回文字を入力する欄にはarticle_textというidが付与されており、そのidを、getElementByIdを用いて取得
  articleText.addEventListener("keyup", () => {
  //②-２ その要素に何らかのキーボード操作があった場合に、イベントが発火するようにする。そのときに用いるイベントハンドラーがkeyup
    // console.log(articleText.value);
  //②-２ 取得した要素に含まれている値、すなわち実際に入力した文字をvalueを用いて取得し、console.logを用いて出力
  //②-２ 文字列を確認できたら、console.log(articleText.value);は削除

  // console.log(articleText.value.length);②-３確認できたので、削除
  //②-3 lengthを用いると、その文字数をカウントした結果が、戻り値として得られる。


  const countVal = articleText.value.length;
  //②-4入力されている文字数をカウントした結果を取得
  const charNum  = document.getElementById("char_num");
  //②-4 実際に文字を置き換えたい部分の要素を取得。「◯文字」と表示される要素には、char_numというidが付与されているため、getElementByIdで取得
  charNum.innerHTML = `${countVal}文字`;
  //②-4 取得した要素に対して、${countVal}文字を、innerHTMLを用いて置き換える
  });



};

window.addEventListener('load', count);
//②-1「ページが読み込まれたら」を実現するためには、window.addEventListener('load', 【実際に行う処理】);という記述