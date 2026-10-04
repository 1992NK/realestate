import { paymentPlanData } from "@/data/paymentPlanData";
import PaymentPlan from "./PaymentPlan";
import styles from "./priceList.module.css";

const PriceList = () => {
  return (
    <section className={styles.priceList} id="payment-plan">
      <div className="container">
        <div className={styles.headingWrapper}>
          <span className={styles.smallTitle}>PRICE DETAILS</span>
          <h2 className={styles.title}>Payment Plan</h2>
          <p className={styles.subtitle}>
            Choose the payment plan that best suits your requirements.
          </p>
        </div>

        <div className={styles.planWrapper}>
          {paymentPlanData.map((plan) => (
            <PaymentPlan key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;