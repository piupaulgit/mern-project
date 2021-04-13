import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { getMeToken } from "./helper/paymentHelper";

const Paymentb = ({ products, setReload = (f) => f, reload = undefined }) => {
  const [info, setInfo] = useState({
    loding: false,
    success: false,
    clientToken: null,
    error: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  //   get token function
  const getToken = (userId, token) => {
    getMeToken(userId, token).then((info) => {
      //   console.log(info);
    });
  };
  // =================

  useEffect(() => {
    getToken(userId, token);
  }, []);

  return (
    <div>
      <h3>Test BT</h3>
    </div>
  );
};

export default Paymentb;
