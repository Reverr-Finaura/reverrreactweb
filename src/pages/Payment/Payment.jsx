import styles from "./Payment.module.css";
import { cashfreeSandbox, cashfreeProd } from "cashfree-dropjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { idGen } from "../../util/idGen";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {
  addPaymentInDatabase,
  getUserFromDatabase,
  updateUserInDatabse,
} from "../../firebase";
import { updateCurrentUser } from "firebase/auth";
import { useParams } from "react-router-dom";

const Payment = () => {
  const [orderToken, setOrderToken] = useState(null);
  const user = useSelector(selectUser);
  console.log(user);
  const { mentorEmail } = useParams();

  var orderID = idGen(12);
  //   console.log(orderID);

  const plans = useSelector((state) => state.plans.plans);
  console.log(plans);

  const customerID = "xyz";
  const customerPhone = "1234567890";

  var amt = plans[0] / 2;
  if (amt < 501) {
    amt = 500;
  } else {
    if (amt < 751) {
      amt = 750;
    } else {
      amt = 1000;
    }
  }

  const order = {
    id: orderID,
    currency: "INR",
    amount: amt,
    customer_id: customerID,
    customer_phone: customerPhone,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const getToken = async () => {
    const res = await axios
      .post("http://localhost:8080/order", order, {
        headers: headers,
      })
      .then((res) => {
        setOrderToken(() => res.data.token);
        console.log(orderToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  console.log(orderToken);

  const dropConfig = {
    components: [
      "order-details",
      "card",
      "netbanking",
      "app",
      "upi",
      "paylater",
      "credicardemi",
      "cardlessemi",
    ],
    orderToken: orderToken,

    onSuccess: async (data) => {
      const user = await getUserFromDatabase(user.uid, "Users");
      await updateUserInDatabse(user.uid, "Users", {
        ...user,
        mentors: [...user.mentors],
      });

      await addPaymentInDatabase(idGen(20), {
        orderAmount: data.transactionAmount,
        orderId: data.orderId,
        paymentMode: data.activePaymentMethod,
        referenceId: null,
        signature: null,
        txMsg: data.txMsg,
        txStatus: data.txStatus,
        txTime: Date.now().toISOString(),
        user: user.email,
        vendor: mentorEmail,
      });
    },
    onFailure: async (data) => {
      await addPaymentInDatabase(idGen(20), {
        orderAmount: data.transactionAmount,
        orderId: data.orderId,
        paymentMode: data.activePaymentMethod,
        referenceId: null,
        signature: null,
        txMsg: data.txMsg,
        txStatus: data.txStatus,
        txTime: Date.now().toISOString(),
        user: user.email,
        vendor: mentorEmail,
      });
    },
    style: {
      backgroundColor: "#ffffff",
      color: "#11385b",
      fontFamily: "Lato",
      fontSize: "14px",
      errorColor: "#ff0000",
      theme: "light",
    },
  };

  const payButtonClickHandler = () => {
    let paymentDOM = document.getElementById("drop_in_container");
    paymentDOM.innerHTML = "";

    let cashfree = new cashfreeProd.Cashfree();

    // console.log("before Initialisation");
    cashfree.initialiseDropin(paymentDOM, dropConfig);
    // console.log("after Initialisation");
  };

  if (orderToken) {
    payButtonClickHandler();
  }

  return (
    <div className={styles.main}>
      <div
        className={styles["dropin-parent"]}
        id="drop_in_container"
        style={{ height: "600px" }}
      >
        Loading...
      </div>
    </div>
  );
};

export default Payment;
