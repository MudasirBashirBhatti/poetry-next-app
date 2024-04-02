import styles from "./styles/Poetry.module.css";
import { FiCopy } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
const Poetry = (props) => {
  return (
    <div className={styles.parent}>
      <div className={styles.count}>{props.count}</div>
      <div className={styles.poetryContent}>{props.content}</div>
      <div className={styles.iconsContainer}>
        <FiCopy className={styles.icons} />
        <IoIosHeartEmpty className={styles.icons} />
        <GoShareAndroid className={styles.icons} />
      </div>
    </div>
  );
};
export default Poetry;
