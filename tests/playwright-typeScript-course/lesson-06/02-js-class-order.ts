interface Item {
  name: string;
  price: number;
  amount: number;
  discount: number;
}

class Order {
  orderId: string = "";
  customerName: string = "";
  items: Item[] = [];
  totalAmount: number = 0;

  addItems(item: Item[]) {
    this.items.push(...item);
  }

  addOrderID(id: string) {
    this.orderId = id;
  }

  addCustomerName(customerName: string) {
    this.customerName = customerName;
  }

  calculateTotal(items: Item[]) {
    this.totalAmount = items.reduce((total, items) => {
      return total + items.amount * items.price - items.discount;
    }, 0);
    return this.totalAmount;
  }
}

let orderItems = [
  {
    name: "Macbook M1 pro",
    price: 26_000_000,
    amount: 1,
    discount: 2_000_000,
  },
  {
    name: "Macbook M2 pro",
    price: 30_000_000,
    amount: 1,
    discount: 2_000_000,
  },
];

const order = new Order();
order.addItems(orderItems);
order.addOrderID("A123");
order.addCustomerName("Anthony Chu");
console.log(order);
const totalAmount = order.calculateTotal(orderItems);
console.log(`Tổng tiền của đơn hàng là ${totalAmount}`);
