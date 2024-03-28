import styles from "./styles/Poetry.module.css";
import { FiCopy } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
const Poetry = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.count}>1</div>
      <div className={styles.poetryContent}>
        <div>میں سینہ چاک ظالم دا قلم دے نال کر ویساں</div>
        <div>امن کیتے میں ہر خطرے دی دوزخ توں گزر ویساں</div>
        <div>میڈے حالات دے اتے میڈے جزبات غالب ہن</div>
        <div>جے میں اجڑیم تاں کوئی ڈر نئیں جے قوم اجڑی تے مر ویساں</div>
      </div>
      <div className={styles.iconsContainer}>
        <FiCopy className={styles.icons} />
        <IoIosHeartEmpty className={styles.icons} />
        <GoShareAndroid className={styles.icons} />
      </div>
    </div>
  );
};
export default Poetry;
