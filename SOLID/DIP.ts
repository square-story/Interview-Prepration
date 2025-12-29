//Dependency inversion principles means 
//high-level modules are not depending on the lower-level modules
//Both should depend on the abstraction layers.


interface IPaymentProcess {
    pay(amount: number): void;
}

class StripeProcess implements IPaymentProcess {
    pay(amount: number): void {
        console.log(`The amount ${amount} will process using Stripe`)
    }
}

class RazorPayProcess implements IPaymentProcess {
    pay(amount: number): void {
        console.log(`The amount ${amount} will process using Razorpay`)
    }
}

class Store {
    private paymentProcess: IPaymentProcess;
    constructor(payment: IPaymentProcess) {
        this.paymentProcess = payment
    }

    purchaseBike(quantity: number) {
        this.paymentProcess.pay(100000 * quantity)
    }
}

const myStripe = new StripeProcess()
const myRazorpay = new RazorPayProcess()

const store1 = new Store(myStripe)
const store2 = new Store(myRazorpay)

store1.purchaseBike(2)
store2.purchaseBike(4)

//the dependency arrow points towards the interface: Store → Interface ← Stripe