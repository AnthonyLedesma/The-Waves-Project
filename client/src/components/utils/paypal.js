import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
  render() {

    const onSuccess = (payment) => {
      this.props.onSuccess(payment);
    }

    const onCancel = (data) => {
      console.log(JSON.stringify(data))
    }

    const onError = (er) => {
      console.log(JSON.stringify(er))
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    const client = {
        sandbox:'AaCV1g--GXWrGQnBdno7o6rPewj-QqTIkeoiQb5oxzuPjIGDtWmGZMisd8JzWtt6trapWu8d7PuZ6UYS',
        production:''
    }

    // {"paid":true,"cancelled":false,"payerID":"BQEBGRZYJECM8","paymentID":"PAY-81H27848SG625205TLOMUOKY","paymentToken":"EC-4BK83620AP000425X","returnUrl":"https://www.sandbox.paypal.com/?paymentId=PAY-81H27848SG625205TLOMUOKY&token=EC-4BK83620AP000425X&PayerID=BQEBGRZYJECM8","address":{"recipient_name":"test buyer","line1":"1 Main St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"},"email":"anthonymledesma-buyer@gmail.com"}

    return (
      <div>
        <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
            style={{
              size:'large',
              color:'black',
              shape:'rect',
              label:'checkout'
             }}
        />
      </div>
    )
  }
}

export default Paypal;