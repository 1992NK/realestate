"use client";

import { useState } from "react";
import { FaUser, FaLocationDot, FaHouse, FaMap, FaPaperPlane } from "react-icons/fa6";
import { relations, quotas, plotOptions } from "@/data/registerData";
import styles from "./registrationForm.module.css";

const RegistrationForm = () => {
  const [sameAddress, setSameAddress] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <FaUser />
          <span>Personal Information</span>
        </div>

        <div className={styles.sectionBody}>
          <div className={styles.field}>
            <label>
              FIRST / SOLE APPLICANT <span>*</span>
            </label>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className={styles.field}>
            <label>
              RELATION <span>*</span>
            </label>
            <div className={styles.radioGroup}>
              {relations.map((relation, index) => (
                <label className={styles.radioOption} key={relation}>
                  <input type="radio" name="relation" defaultChecked={index === 0} />
                  <span>{relation}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label>
              FATHER / HUSBAND NAME <span>*</span>
            </label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.field}>
              <label>
                DATE OF BIRTH <span>*</span>
              </label>
              <input type="date" required />
            </div>

            <div className={styles.field}>
              <label>
                NATIONALITY <span>*</span>
              </label>
              <input type="text" defaultValue="INDIAN" required />
            </div>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.field}>
              <label>
                MOBILE NO. <span>*</span>
              </label>
              <input type="tel" placeholder="10-digit Mobile Number" maxLength={10} required />
            </div>

            <div className={styles.field}>
              <label>TELEPHONE NO.</label>
              <input type="tel" placeholder="Telephone (optional)" />
            </div>
          </div>

          <div className={styles.field}>
            <label>
              EMAIL ID <span>*</span>
            </label>
            <input type="email" placeholder="your@email.com" required />
          </div>

          <div className={styles.divider}></div>

          <div className={styles.field}>
            <label>
              QUOTA <span>*</span>
            </label>
            <div className={styles.radioGroup}>
              {quotas.map((quota, index) => (
                <label className={styles.radioOption} key={quota}>
                  <input type="radio" name="quota" defaultChecked={index === 0} />
                  <span>{quota}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <FaLocationDot />
          <span>Communication Address</span>
        </div>
        <div className={styles.sectionBody}>
          <AddressFields prefix="communication" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <FaHouse />
          <span>Permanent Address</span>
        </div>

        <div className={styles.sectionBody}>
          <label className={styles.sameAddress}>
            <input type="checkbox" checked={sameAddress} onChange={(e) => setSameAddress(e.target.checked)} />
            <span>Same as Communication Address</span>
          </label>

          {!sameAddress && <AddressFields prefix="permanent" />}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <FaMap />
          <span>Select Plot Size</span>
        </div>

        <div className={styles.sectionBody}>
          <div className={styles.plotGrid}>
            {plotOptions.map((plot) => (
              <button type="button" key={plot.id} onClick={() => setSelectedPlot(plot.id)} className={`${styles.plotCard} ${selectedPlot === plot.id ? styles.activePlot : ""}`}>
                <strong>{plot.size}</strong>
                <div>
                  <span>Registration Amount</span>
                  <b>{plot.amount}</b>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.submitBox}>
        <button type="submit" className={styles.submitButton}>
          <FaPaperPlane />
          <span>Submit Application</span>
        </button>
        <p>By submitting, you agree to our Terms & Conditions. Your information is safe with us.</p>
      </div>
    </form>
  );
};

const AddressFields = ({ prefix }) => {
  return (
    <>
      <div className={styles.field}>
        <label>
          HOUSE NO. <span>*</span>
        </label>
        <input type="text" name={`${prefix}-house`} placeholder="House / Flat No." required />
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.field}>
          <label>
            STREET <span>*</span>
          </label>
          <input type="text" name={`${prefix}-street`} placeholder="Street / Road" required />
        </div>

        <div className={styles.field}>
          <label>
            LOCALITY <span>*</span>
          </label>
          <input type="text" name={`${prefix}-locality`} placeholder="Locality / Colony" required />
        </div>
      </div>

      <div className={styles.gridTwo}>
        <div className={styles.field}>
          <label>
            CITY <span>*</span>
          </label>
          <input type="text" name={`${prefix}-city`} placeholder="City" required />
        </div>

        <div className={styles.field}>
          <label>
            STATE <span>*</span>
          </label>
          <input type="text" name={`${prefix}-state`} placeholder="State" required />
        </div>
      </div>

      <div className={styles.halfField}>
        <div className={styles.field}>
          <label>
            PINCODE <span>*</span>
          </label>
          <input type="text" name={`${prefix}-pincode`} placeholder="6-digit Pincode" maxLength={6} required />
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;