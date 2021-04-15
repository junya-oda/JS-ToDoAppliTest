import "./styles.css";

function con(v) {
  console.log(v);
}

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  // alert();
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
  // // div生成
  // const div = document.createElement("div");
  // // con(div);
  // div.className = "list-row";

  // // liタグ生成
  // const li = document.createElement("li");
  // li.innerText = inputText;
  // // con(li);

  // // button(完了)タグ生成
  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";
  // // con(completeButton);
  // completeButton.addEventListener("click", () => {
  //   // alert("完了");
  //   // 押された完了ボタンの親タグ（div）を未完了リストから削除
  //   deleteFromIncompleteList(completeButton.parentNode);

  //   // 完了リストに追加する要素
  //   const addTarget = completeButton.parentNode;

  //   // TODO内容テキストを取得
  //   const text = addTarget.firstElementChild.innerText;
  //   // con(text);

  //   // div以下を初期化
  //   addTarget.textContent = null;
  //   // con(addTarget);

  //   // liタグを生成
  //   const li = document.createElement("li");
  //   li.innerText = text;
  //   // con(li);

  //   // buttonタグ生成
  //   const backButton = document.createElement("button");
  //   backButton.innerText = "戻す";
  //   backButton.addEventListener("click", () => {
  //     // alert("戻す");
  //     // 押された戻すボタンの親タグ（div）を完了リストから削除
  //     const deleteTaget = backButton.parentNode;
  //     document.getElementById("complete-list").removeChild(deleteTaget);

  //     // テキスト取得
  //     const text = backButton.parentNode.firstElementChild.innerText;
  //     // con(text);

  //   });

  //   // divタグの子要素に各要素を設定
  //   addTarget.appendChild(li);
  //   addTarget.appendChild(backButton);
  //   // con(addTarget);

  //   // 完了リストに追加
  //   document.getElementById("complete-list").appendChild(addTarget);

  //   // deleteFromIncompleteList(completeButton.parentNode);
  //   // const deleteTaget = completeButton.parentNode;
  //   // con(completeTaget);
  //   // document.getElementById("incomplete-list").removeChild(deleteTaget);
  // });

  // // button(削除)タグ生成
  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // deleteButton.addEventListener("click", () => {
  //   // alert("削除");
  //   // 押された削除ボタンの親タグ（div）を未完了リストから削除
  //   deleteFromIncompleteList(deleteButton.parentNode);
  //   // const deleteTarget = deleteButton.parentNode;
  //   // // con(deleteTarget);
  //   // document.getElementById("incomplete-list").removeChild(deleteTarget);
  // });
  // // con(deleteButton);

  // // divタグの子要素に各要素を設定
  // div.appendChild(li);
  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);
  // // con(div);

  // // 未完了リストに追加
  // document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  // con(div);
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  // li.innerText = inputText;
  li.innerText = text;
  // con(li);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // con(completeButton);
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // con(text);

    // div以下を初期化
    addTarget.textContent = null;
    // con(addTarget);

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // con(li);

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // alert("戻す");
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTaget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTaget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // con(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // con(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // deleteFromIncompleteList(completeButton.parentNode);
    // const deleteTaget = completeButton.parentNode;
    // con(completeTaget);
    // document.getElementById("incomplete-list").removeChild(deleteTaget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // // con(deleteTarget);
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  // con(deleteButton);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // con(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
