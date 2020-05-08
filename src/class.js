export class Item {
  getTax() {
    return 100 * 0.1;
  }
}

export class Item2 {
  constructor(price) {
    this.tax = 10;
    this.price = price;
  }
  getTax() {
    return Math.round(this.price * (this.tax / 100));
  }
}

export class Item3 {
  constructor(tax) {
    if (isFinite(tax)) {
      this._tax = tax;
    } else {
      this._tax = 0;
    }
  }
  //Getter
  get tax() {
    return this._tax + "%";
  }
  //Setter
  set tax(tax) {
    if (isFinite(tax)) {
      this._tax = tax;
    } else {
      this._tax = 0;
    }
  }
}
