const { API } = require("../../backend");

export const getMeToken = (userId, token) => {
  return fetch(`${API}/payment/gettoken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
      console.log("opopopopopopopiii");
    })
    .catch((err) => {
      console.log(err, "opopopopopopop");
    });
};

export const proccessPaymnet = (userId, token, paymnetInfo) => {
  return fetch(`${API}/payment/braintree/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymnetInfo),
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {});
};
