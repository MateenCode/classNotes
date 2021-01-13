const dateFns = require("date-fns");
const formatDate = dd => dateFns.format(dd, "MMM-DD-YYYY");
/*
Implement a subscription class that supports following methods:

NPM test in folder to run 

1. setCustomerName(customerName: string)
2. setInterval(length: number, unit: 'days' | 'weeks' | 'months')
3. addProduct(productId: number, sku: string, quantity: number)
4. charge()

Pass the tests
*/

class Subscription {
  constructor() {
    this.customerName = "";
    this.nextShipDate = formatDate(dateFns.addMonths(new Date(), 1));
    this.intervalLength = 1;
    this.intervalUnit = "months";
    this.products = {};
  }

  // set the customerName
  setCustomerName(customerName) {
    this.customerName = customerName;
  }
  setInterval(intervalLength, intervalUnit) {
    this.intervalLength = intervalLength;
    this.intervalUnit = intervalUnit;
  }
  // addProduct should add the productKey correctly
  addProduct(products) {
    this.products = { ...products, productKey };
  }

  // charge should update nextShipDate
  charge() {
    const tmp = this.nextShipDate;
    this.nextShipDate = formatDate(dateFns.addWeeks(tmp, 2));
  }
}

//TEST STARTS
describe("Subscription", () => {
  it("constructor should pass", () => {
    const sub = new Subscription();
    expect(sub.customerName).toEqual("");
    expect(sub.nextShipDate).toEqual(
      formatDate(dateFns.addMonths(new Date(), 1))
    );
    expect(sub.intervalLength).toEqual(1);
    expect(sub.intervalUnit).toEqual("months");
    expect(Object.keys(sub.products).length).toEqual(0);
  });

  it("setCustomerName should pass", () => {
    const sub = new Subscription();
    const customerName = "customer1";
    sub.setCustomerName(customerName);
    expect(sub.customerName).toEqual(customerName);
  });

  it("setInterval should update intervalLength and intervalUnit", () => {
    const sub = new Subscription();
    sub.setInterval(1, "weeks");
    expect(sub.intervalLength).toEqual(1);
    expect(sub.intervalUnit).toEqual("weeks");
  });

  it("addProduct should add the productKey correctly", () => {
    const sub = new Subscription();
    sub.addProduct(1, "ABC-1", 123);
    const productKey = Object.keys(sub.products)[0];
    expect(productKey).toEqual(`1@@@ABC-1`);
    expect(sub.products[productKey]).toBeDefined();
    expect(sub.products[productKey].productId).toEqual(1);
    expect(sub.products[productKey].sku).toEqual("ABC-1");
    expect(sub.products[productKey].quantity).toEqual(123);
  });

  it("charge should update nextShipDate", () => {
    const sub = new Subscription();
    const tmp = sub.nextShipDate;
    sub.setInterval(2, "weeks");
    sub.charge();
    expect(sub.nextShipDate).toEqual(formatDate(dateFns.addWeeks(tmp, 2)));
  });
});
