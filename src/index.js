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
    }, 2000);
    //アロー関数を使わずにthisをbind()しても良い
    window.setTimeout(
      function() {
        console.log(this.id);
      }.bind(this),
      3000
    );
  }
};

normalFn.counter();
