import {
  FaArrowRightLong,
  FaCircleInfo,
  FaFileInvoice,
  FaHouse,
} from "react-icons/fa6";

import { paymentTableData } from "@/data/paymentTableData";
import styles from "./priceList.module.css";

const PriceList = () => {
  const {
    title,
    importantNote,
    columns,
    rows,
    additionalCharges,
  } = paymentTableData;

  return (
    <section className={styles.priceSection} id="price-list">
      <div className="container">
        <div className={styles.headingWrapper}>         
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.importantNote}>
          <div className={styles.infoIcon}>
            <FaCircleInfo />
          </div>

          <p>
            <strong>Important Note:</strong> {importantNote}
          </p>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key}>{column.label}</th>
                  ))}

                  <th>Apply</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td key={column.key}>
                        {row[column.key]}
                      </td>
                    ))}

                    <td className={styles.applyCell}>
                      <a
                        href={row.applyLink}
                        className={styles.applyButton}
                      >
                        <span>Apply Now</span>
                        <FaArrowRightLong />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.additionalCharges}>
            <div className={styles.chargeIcon}>
              <FaFileInvoice />
            </div>

            <div className={styles.chargeContent}>
              <h3>Additional Charges :</h3>

              <ol>
                {additionalCharges.map((charge) => (
                  <li key={charge}>{charge}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;