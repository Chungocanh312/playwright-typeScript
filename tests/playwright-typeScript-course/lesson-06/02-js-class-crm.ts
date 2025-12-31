class Customer {
  id: number;
  name: string;
  email: string;
  phone: number;

  constructor(id: number, name: string, email: string, phone: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo() {
    console.log(
      `Customer has name is ${this.name} and phone number is ${this.phone} and email is ${this.email}`
    );
  }

  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}

const customer = new Customer(
  1101,
  "Anthony Chu",
  "anthony@gmail.com",
  84911223344
);
customer.displayInfo();
const updatedCustomer = customer.updateEmail("chu@gmail.com");
customer.displayInfo();
