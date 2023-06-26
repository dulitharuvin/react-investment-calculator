import React from "react";

import styles from "./EmptyMessage.module.css";

const EmptyMessage = () => {
  return (
    <div className={styles.emptyMessage}>
      Currently no yearly data availble, Please enter values in to the form to
      see yearly data
    </div>
  );
};

export default EmptyMessage;
