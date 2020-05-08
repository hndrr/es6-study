/**
 * モジュール読み込み
 * https://ja.javascript.info/import-export
 */

// デフォルトエクスポート時は波括弧がいらない
import allow from "./allow.js";
// 複数インポート
import { create, allow_create } from "./allow2.js";
// Classのインポート
import { Item, Item2, Item3 } from "./class.js";

// allow.jsの確認
allow();

// allow2.jsの確認
console.log(create("yyy", "ohonda"));
console.log(allow_create("ttt", "ohonda"));

// class.jsの確認
let item = new Item();
console.log("tax", item.getTax());

let item2 = new Item2(500);
console.log("tax", item2.getTax());

let item3 = new Item3(10);
//item3.tax = "hhh";
console.log("tax", item3.tax);

/**
 * thisのバインドについて
 */
let normalFn = {
  id: 43,
  counter() {
    //thisはidを読みに行く
    console.log(this.id);
    //setTimeoutはwindowオブジェクトなのでundifined
    setTimeout(function() {
      console.log(this.id);
    }, 1000);
    //this.idをthatIdに格納
    let thatId = this.id;
    setTimeout(function() {
      console.log(thatId);
    }, 2000);
    //アロー関数にするとthisがbindされる
    setTimeout(() => {
      console.log(this.id);
    }, 3000);
    //アロー関数を使わずにthisをbind()しても良い
    setTimeout(
      function() {
        console.log(this.id);
      }.bind(this),
      4000
    );
  }
};

normalFn.counter();
