// デフォルトのインポート
import allow from "./allow.js";
// 複数インポート
import { create, allow_create } from "./allow2.js";

allow();
console.log(create("yyy", "ohonda"));
console.log(allow_create("ttt", "ohonda"));

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
