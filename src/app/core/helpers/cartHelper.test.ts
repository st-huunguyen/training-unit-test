import { Cart, APPLE, ORANGE, STRAWBERRY } from './cartHelper';

describe('Test cart', () => {
  const cart = new Cart();
  beforeEach(() => {
    cart.clearCart();
  });

  describe('Test addItem', () => {
    it('Pass when the cart contains the apple just added', () => {
      cart.addItem(APPLE);
      expect(cart.cartItems).toContainEqual(APPLE);
    });
    it('Pass when the cart contains product just added before with quantity is 2 ', () => {
      cart.addItem(STRAWBERRY);
      cart.addItem(STRAWBERRY);
      expect(cart.cartItems[0].amount).toBe(2);
    });
    it('Pass when the cart quantity is 3 after user add 3 product', () => {
      cart.addItem(APPLE);
      cart.addItem(ORANGE);
      cart.addItem(STRAWBERRY);
      cart.addItem(STRAWBERRY);
      const totalItem = cart.cartItems.reduce(
        (quantity, item) => quantity + item.amount,
        0
      );
      expect(totalItem).toBe(4);
    });
  });
  describe('Test removeItem', () => {
    it('Pass when cart contain 1 apple', () => {
      cart.addItem(APPLE);
      cart.addItem(APPLE);
      cart.removeItem(APPLE);
      expect(cart.cartItems).toContainEqual(APPLE);
    });
    it('Pass when cart contain 2 apple', () => {
      cart.addItem(APPLE);
      cart.addItem(APPLE);
      cart.addItem(APPLE);
      cart.removeItem(APPLE);
      expect(cart.cartItems[0].amount).toBe(2);
    });
    it('Pass when cart not contain orange', () => {
      cart.addItem(ORANGE);
      cart.removeItem(ORANGE);
      expect(cart.cartItems).not.toContainEqual(ORANGE);
    });
    it('Pass when cart not contain strawberry', () => {
      cart.removeItem(STRAWBERRY);
      expect(cart.cartItems).not.toContainEqual(STRAWBERRY);
    });
  });

  describe('Test calculate total bill', () => {
    it('Pass when calculate bill equal to 1 apple cost', () => {
      cart.addItem(APPLE);
      const appleCost = (1 * APPLE.price * (100 - APPLE.discount)) / 100;
      expect(cart.total).toBe(appleCost);
    });
    it('Pass when calculate bill equal to 2 apples cost', () => {
      const appleAmount = 2;
      for (let i = 0; i < appleAmount; i++) {
        cart.addItem(APPLE);
      }
      const appleCost =
        (appleAmount * APPLE.price * (100 - APPLE.extraDiscount)) / 100;
      expect(cart.total).toBe(appleCost);
    });
    it('Pass when calculate bill equal to cost of 1 apple + 1 orange', () => {
      cart.addItem(APPLE);
      cart.addItem(ORANGE);
      const appleCost = (1 * APPLE.price * (100 - APPLE.discount)) / 100;
      const orangeCost = (1 * ORANGE.price * (100 - ORANGE.discount)) / 100;
      const total = appleCost + orangeCost;
      expect(cart.total).toBe(total);
    });
  });
});
