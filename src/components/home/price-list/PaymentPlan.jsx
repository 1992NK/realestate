import Link from "next/link";
import { FaArrowRightLong, FaCircleInfo } from "react-icons/fa6";
import styles from "./paymentPlan.module.css";

const PaymentPlan = ({ plan }) => {
  return (
    <div className={styles.planCard}>
      <div className={styles.note}>
        <FaCircleInfo />
        <p><strong>Note:</strong> {plan.note}</p>
      </div>

      <div className={styles.planHeading}>
        <h3>{plan.title}</h3>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Plot Available</th>
              <th>Plot Size</th>
              <th>Price Per Sq. Yard</th>
              <th>10% On Allotment</th>
              <th>40% Within 30-45 Days</th>
              <th>40% On OC</th>
              <th>10% On Possession</th>
              <th>Total</th>
              <th>Apply</th>
            </tr>
          </thead>

          <tbody>
            {plan.rows.map((row) => (
              <tr key={row.type}>
                <td>{row.type}</td>
                <td>{row.available}</td>
                <td>{row.plotSize}</td>
                <td>{row.price}</td>
                <td>{row.allotment}</td>
                <td>{row.days}</td>
                <td>{row.oc}</td>
                <td>{row.possession}</td>
                <td className={styles.total}>{row.total}</td>
                <td>
                  <Link href="/register_online" className={styles.applyButton}>
                    Apply Now <FaArrowRightLong />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPlan;