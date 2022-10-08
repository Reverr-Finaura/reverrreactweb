import React from "react";
import { ColorRing } from "react-loader-spinner";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.main}>
      <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#DBDFFD", "#9BA3EB", "#646FD4", "#242F9B", "#002E94"]}
      />
    </div>
  );
}

export default Loading;
