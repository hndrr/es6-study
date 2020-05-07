/*
 * Allow Function
 */
//デフォルトエクスポート
export default function() {
  const uncle = () => {
    return "Uncle JavaScript";
  };
  const testt = uncle();

  console.log(testt);

  //引数を返す
  const rtnStr = String => {
    return String;
  };
  const test2 = rtnStr("sss");

  console.log(test2);

  //引数を返す
  const rtnEmoji = String => {
    return String + "🤔";
  };
  const uuum = rtnEmoji("uuum");

  console.log(uuum);

  //Objectで渡す
  const profile = ({ name, favorite, country }) => {
    return (
      "名前は" +
      name +
      "です。" +
      "好きなものは" +
      favorite +
      "です。" +
      country +
      "出身です。"
    );
  };
  const res = profile({
    name: "ohonda",
    country: "Miyazaki",
    favorite: "JavaScript"
  });
  console.log(res);
}
