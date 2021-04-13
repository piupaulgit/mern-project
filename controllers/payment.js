var braintree = require("braintree");
const { json } = require("body-parser");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "hq3cfstxtqzvpjxq",
  publicKey: "6tsv7b5b6tzr3d4w",
  privateKey: "099ee63760a2370fbe14da006362ea8b",
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    console.log(err, response);
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.porecessPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = re.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    }
  );
};
