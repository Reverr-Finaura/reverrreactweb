import styles from "./Payment.module.css";
import { cashfreeSandbox, cashfreeProd } from "cashfree-dropjs";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { idGen } from "../../util/idGen";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {
  addPaymentInDatabase,
  getMentorFromDatabase,
  getUserFromDatabase,
  updateUserInDatabse,
} from "../../firebase";
import { updateCurrentUser } from "firebase/auth";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { selectMentor } from "../../features/scheduleSlice";

const Payment = () => {
  const [orderToken, setOrderToken] = useState(null);
  const [fetchedUser, setFetchedUser] = useState("");
  const [fetchedMentor, setFetchedMentor] = useState("");
  const user = useSelector(selectUser);
  const { mentorEmail } = useParams();

  const scheduleMentor = useSelector(selectMentor);

  const navigate = useNavigate();

  var orderID = idGen(12);

  const plans = useSelector((state) => state.plans.plans);

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

  // var amt = 1;

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
    await axios
      .post("https://reverrserver.herokuapp.com/webcftoken", order, {
        headers: headers,
      })
      .then((res) => {
        setOrderToken(() => res.data.token);
        // console.log(orderToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = useCallback(async () => {
    const results = await getUserFromDatabase(user.uid, "Users");
    setFetchedUser(results);
  }, []);

  const getMentor = useCallback(async () => {
    const results = await getMentorFromDatabase(mentorEmail, "Users");
    setFetchedMentor(results);
  }, []);

  console.log("User Data -", fetchedUser);
  console.log("Mentor Data -", fetchedMentor);

  useEffect(() => {
    getToken();
    getUser();
    getMentor();
  }, []);

  console.log("Order Token-", orderToken);

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
      await updateUserInDatabse(user.uid, "Users", {
        ...fetchedUser,
        mentors: [...fetchedUser.mentors, mentorEmail],
      });

      await updateUserInDatabse(fetchedMentor.email, "Users", {
        ...fetchedMentor,
        clients: [...fetchedMentor.clients, user.email],
      });

      data = {
        orderAmount: data.transaction.transactionAmount || "",
        orderId: data.order.orderId || "",
        paymentMode: data.order.activePaymentMethod || "",
        referenceId: "",
        signature: "",
        txMsg: data.transaction.txMsg || "",
        txStatus: data.transaction.txStatus || "",
        txTime: new Date().toISOString(),
        user: user.email,
        vendor: mentorEmail,
      };
      const paymentId = idGen(20);
      await addPaymentInDatabase(paymentId, data);
      toast.success("Payment Successful");
      console.log(paymentId, "--", data);

      navigate(`/schedule/${scheduleMentor?.email}`);
    },
    onFailure: async (data) => {
      toast.error("Payment Failed");
      console.log(data);
      data = {
        orderAmount: data.transaction.transactionAmount || "",
        orderId: data.order.orderId || "",
        paymentMode: data.order.activePaymentMethod || "",
        referenceId: "",
        signature: "",
        txMsg: data.transaction.txMsg || "",
        txStatus: data.transaction.txStatus || "",
        txTime: new Date().toISOString(),
        user: user.email,
        vendor: mentorEmail,
      };
      const paymentId = idGen(20);
      await addPaymentInDatabase(paymentId, data);
      console.log(paymentId, "--", data);
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
      <Toaster />
    </div>
  );
};

export default Payment;
