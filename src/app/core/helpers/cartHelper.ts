export interface Product {
  name: string;
  id: string;
  price: number;
  discount: number;
  extraDiscount: number;
  amount: number;
}

export const APPLE: Product = {
  name: 'apple',
  id: 'a1',
  price: 25000,
  discount: 5,
  extraDiscount: 10,
  amount: 1,
};

export const ORANGE: Product = {
  name: 'orange',
  id: 'o1',
  price: 20000,
  discount: 10,
  extraDiscount: 15,
  amount: 1,
};

export const STRAWBERRY: Product = {
  name: 'strawberry',
  id: 's1',
  price: 100000,
  discount: 20,
  extraDiscount: 25,
  amount: 1,
};

interface CartInterface {
  cartItems: Product[];
  total: number;
}

export class Cart implements CartInterface {
  cartItems: Product[];
  total: number;

  constructor() {
    this.cartItems = [];
    this.total = 0;
  }

  addItem(item: Product) {
    const existedItem = this.cartItems.findIndex(
      (product) => product.id === item.id
    );
    if (existedItem !== -1) {
      this.cartItems[existedItem].amount++;
    } else {
      this.cartItems.push({ ...item });
    }
    this.calculate();
  }

  removeItem(item: Product) {
    const existedItem = this.cartItems.findIndex(
      (product) => product.name === item.name
    );
    if (existedItem !== -1) {
      if (this.cartItems[existedItem].amount === 1) {
        this.cartItems.splice(existedItem, 1);
      } else {
        this.cartItems[existedItem].amount--;
      }
    }
    this.calculate();
  }

  clearCart() {
    this.cartItems = [];
    this.total = 0;
  }

  calculate() {
    const getDiscount = (product: Product) =>
      product.amount >= 2 ? product.extraDiscount : product.discount;

    const totalBill = this.cartItems.reduce(
      (total, product) =>
        total +
        product.amount * ((product.price * (100 - getDiscount(product))) / 100),
      0
    );

    this.total = totalBill;
    return totalBill;
  }
}
