import { ProductsInfo, Order, Fruit } from './cartHelper';

const fruitStorage: ProductsInfo = {
  apple: {
    name: 'apple',
    id: 'a1',
    price: 25000,
    discount: [
      {
        quantityApplied: 1,
        percent: 5,
      },
      {
        quantityApplied: 2,
        percent: 10,
      },
    ],
  },
  orange: {
    name: 'orange',
    id: 'o1',
    price: 20000,
    discount: [
      {
        quantityApplied: 1,
        percent: 3,
      },
      {
        quantityApplied: 2,
        percent: 7,
      },
    ],
  },
};

describe('Test Order Class', () => {
  describe('Order is empty', () => {
    const order = new Order();

    it('order details should be empty', () => {
      expect(order.getDetails().size).toBe(0);
    });

    it('total price should be 0', () => {
      expect(order.getTotal()).toBe(0);
    });

    it('export bill should be empty', () => {
      expect(order.getBill()).toEqual([]);
    });
  });

  describe('Order has one product', () => {
    const order = new Order();

    test('Add an apple', () => {
      order.addFruit(new Fruit(fruitStorage.apple), 1);
      expect(order.getDetails().size).toBe(1);
      expect(order.getDetail(fruitStorage.apple.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.apple.id).quantity).toBe(1);
    });

    test('Total price is 23750', () => {
      expect(order.getTotal()).toBe(23750);
    });

    test('Add more 2 apples', () => {
      order.addFruit(new Fruit(fruitStorage.apple), 2);
      expect(order.getDetails().size).toBe(1);
      expect(order.getDetail(fruitStorage.apple.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.apple.id).quantity).toBe(3);
    });

    test('Total price is 67500', () => {
      expect(order.getTotal()).toBe(67500);
    });

    test('Update quantity of apple to 4', () => {
      order.updateFruit(new Fruit(fruitStorage.apple), 4);
      expect(order.getDetails().size).toBe(1);
      expect(order.getDetail(fruitStorage.apple.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.apple.id).quantity).toBe(4);
    });

    test('Total price is 90000', () => {
      expect(order.getTotal()).toBe(90000);
    });

    test('Remove apple in order', () => {
      order.removeFruit(fruitStorage.apple.id);
      expect(order.getDetails().size).toBe(0);
      expect(order.getDetail(fruitStorage.apple.id)).toBeUndefined();
    });

    test('Total price is 0', () => {
      expect(order.getTotal()).toBe(0);
    });
  });

  describe('Order has more one product', () => {
    const order = new Order();

    test('Add 4 apples', () => {
      order.addFruit(new Fruit(fruitStorage.apple), 4);
      expect(order.getDetails().size).toBe(1);
      expect(order.getDetail(fruitStorage.apple.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.apple.id).quantity).toBe(4);
    });

    test('Total price is 90000', () => {
      expect(order.getTotal()).toBe(90000);
    });

    test('Add more 2 orange', () => {
      order.addFruit(new Fruit(fruitStorage.orange), 1);
      expect(order.getDetails().size).toBe(2);
      expect(order.getDetail(fruitStorage.orange.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.orange.id).quantity).toBe(1);
    });

    test('Total price is 109400', () => {
      expect(order.getTotal()).toBe(109400);
    });

    test('Update quantity of orange to 4', () => {
      order.updateFruit(new Fruit(fruitStorage.orange), 4);
      expect(order.getDetails().size).toBe(2);
      expect(order.getDetail(fruitStorage.orange.id)).not.toBeUndefined();
      expect(order.getDetail(fruitStorage.orange.id).quantity).toBe(4);
    });

    test('Total price is 164400', () => {
      expect(order.getTotal()).toBe(164400);
    });

    test('Remove apple in order', () => {
      order.removeFruit(fruitStorage.apple.id);
      expect(order.getDetails().size).toBe(1);
      expect(order.getDetail(fruitStorage.apple.id)).toBeUndefined();
    });

    test('Total price is 74400', () => {
      expect(order.getTotal()).toBe(74400);
    });
  });
});
