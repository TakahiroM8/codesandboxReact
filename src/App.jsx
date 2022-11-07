import React from "react";

// const App = () => {
//   return (
//     <>
//       <h1>こんにちは！</h1>
//       <p>お元気ですか！？</p>
//     </>
//   );
// };
// // 他のファイルでも使用出来る様にexportできるようになります
// export default App;

// Reactでのイベントやstyleの扱い方を知る
const App = () => {
  // アラートを表示
  const onClickButton = () => alert();
  // CSSのオブジェクト化
  const contetStyle = {
    color: "blue",
    // 従来のCSSの書き方のfont-sizeではダメ
    fontSize: "18px"
  };
  return (
    <>
      {/* 外側の{}はJSを書きますよ！内側の{}JSのオブジェクトを書きますよ！ */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* CSSオブジェクトを使用 */}
      <p style={contetStyle}>お元気ですか！？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
// 他のファイルでも使用出来る様にexportできるようになります
export default App;
