
//①-１
function post (){

  // ①−２ フォームの投稿ボタンをクリックしたら、投稿したフォームの情報がコンソールに表示されるように実装
  const submit = document.getElementById("submit_btn");
  // ①−２クリックしたことを認識するためには、クリックされる送信ボタンの要素を取得する必要があり、送信ボタンにはsubmit_btnというidが付与されているため、getElementByIdを用いて取得

  submit.addEventListener("click", (e) => {
    // ①−２クリックによるイベントには、clickを用意

    const formData = new FormData(document.getElementById("new_article"));
    // ①ー３フォームの情報を取得し、Ajaxで送信できる形へと整形する。
    const XHR = new XMLHttpRequest();
    //  ①ー３Ajaxに利用するオブジェクトを生成
    XHR.open("POST", "/articles", true);
    // ①ー３Ajaxに関する情報を初期化し、URIを設定
    XHR.responseType = "json";
    // ①ー３ レスポンスとして求めるデータ形式を指定
    XHR.send(formData);
    // ①ー３Ajaxで送信

    XHR.onload = () => {
      //①ー４ XHR.onloadは、Ajaxによる処理が終了したあとに呼び出されるイベントハンドラーで、そのイベントに今回はアロー関数で処理を代入している。
      //①ー４ すなわち、Ajax処理が完了するとアロー関数内に定義した処理が実行される。

      //①-6 エラーがアラートとして表示
      if (XHR.status != 200) {
      //①-6  XHR.status != 200は、HTTPステータスコードが「200以外のとき」を示す。

/*①-6   主要なHTTPステータスコード
100~	処理の継続中
200~	処理の成功
300~	リダイレクト
400~	クライアントのエラー
500~	サーバーのエラー
*/
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        //①-6   XHR.statusはHTTPステータスコードを表してる。XHR.statusTextはそのステータスを表す文言が含まれてる。
        return null;
        //①-6 エラーについてのアラートが表示されたら、それ以降の処理は行う必要がなく、return null;を記述して今回のイベントの処理からは抜け出す。
      };


      const item = XHR.response.article;
      //①ー5 レスポンスのうち、コントローラー側で指定したjson形式のデータを変数に代入
      const contentsArea = document.getElementById("contents_area");
      //①ー5 今回投稿したデータを追加する要素を取得。今回追加する要素の親要素にあたる。
      const articleText = document.getElementById("article_text");
      //①ー5 フォーム投稿の際にテキストを入力した、テキストエリアを取得。

      const HTML = `
        <div class="article">
          ${ item.text }
        </div>`;
        //①ー5 今回追加する要素を定義。${ item.text }によって、レスポンスとして返されたデータのうち、textのプロパティを指定

      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      //①ー5 親要素に直前で定義した要素を追加しています。afterbeginは親要素内の最上部に追加することを意味
      articleText.value = "";
      //①ー5 フォームの入力欄を空にしています。

      const charNum  = document.getElementById("char_num");
      //②-5 ページの「○○文字」と表示される部分のidを取得、付与されているidは「char_num」
      charNum.innerHTML = "0文字";
      //②-5 「0文字」という文字列を挿入すれば、POSTボタンをクリックした時に「0文字」と表示







      // console.log(XHR.response.article); 確認したので、削除、①ー４  
      //①ー４  console.logでレスポンスの内容を出力。
      //①ー４  XHR.response.articleのうち、XHRはAjax通信に使用したオブジェクト、
      //①ー４  responseはAjax通信に含まれるレスポンスの内容を表してる。
      //①ー４  articleはレスポンスに含まれるデータのうち、コントローラー側で指定したjson形式のデータを示してる。
    };


    // console.log(document.getElementById("new_article"));
    //  ①−２コンソール上に表示するのは、フォームの情報で、フォームにはnew_articleというidが付与されているため、getElementByIdを用いて取得
    // ①−２投稿したフォームの情報を確認できたら、console.log(document.getElementById("new_article"));は削除


    e.preventDefault();
    // ①ー２このままだとブラウザ上に用意されているデフォルトの送信が機能してしまい、重複してしまうので、e.preventDefault();を用いてデフォルトの送信をキャンセル
  });


  // console.log("非同期投稿を実装"); ①ー１確認の為だったので、削除
};



// ①-１「ページが読み込まれたら」を実現するため、window.addEventListener('load', 【実際に行う処理】);と記述する。
// ①−１実際に行う処理については、別の関数postとして切り出し、関数postの中に、console.logを用いてコンソール上に出力する記述を設ける。
window.addEventListener('load', post);
