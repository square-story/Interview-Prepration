//OCP means open-close principles that follow 
// Software entities should be open for extension, 
// closed for modification.

//That means you should add behaviors not for editing the existing codes.

interface IPayment {
    pay(amount: number): void
}

class PaymentUsingUPI implements IPayment {
    pay(amount: number): void {
        console.log(`payment is done by UPI amount: ${amount}`)
    }
}

class PaymentUsingCard implements IPayment {
    pay(amount: number): void {
        console.log(`payment is done by Card amount: ${amount}`)
    }
}

class PaymentService {
    constructor(private payment: IPayment) { }
    process(amount: number) {
        this.payment.pay(amount)
    }
}

//If new payment methods is arrived, 
// we don't want to change the existing code. 
// We only add a class.
// That's OCP