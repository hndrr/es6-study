function create(sei, mei) {
  return {
    name: mei + " " + sei,
    address: "tokyo-to"
  };
}
//オブジェクトリテラルの返却は括弧が必要
let allow_create = (sei, mei) =>
  //{ return
  ({
    name: mei + " " + sei,
    address: "tokyo-to"
  });
//};

//宣言済み関数の名前付きエクスポート
export { create, allow_create };
