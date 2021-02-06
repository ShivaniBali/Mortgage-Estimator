import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

// THIS MORTGAGE CALCULATION METHOD CALCULATES THE GIVEN USER INPUT AND RETURN THE MORTGAGE PAYMENT INFORMATION REQUESTED FOR A SPECIFIC TIME PERIOD
function MortgageCalculator() {
  // STATE THAT STORE USER INPUT VALUES
  const [userInputs, setUserInputs] = useState({
    amount: "",
    interest: "",
    years: "",
    frequency: "",
    term: "",
  });

  // STATE THAT STORES THE RESULT OF MORTGAGE CALCULATION
  const [calculatedResults, setCalculatedResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
    noOfTermPayments: "",
    amortizationPeriodPayments: "",
    totalCostTerm: "",
    termPrincipal: "",
    termInterest: "",
    frequencyValue: "",
  });

  // ARRAY TO HOLD THE OPTIONS FOR PAYMENT FREQUENCY
  const payOptions = [
    { value: 52, label: "Accelerated Weekly" },
    { value: 52, label: "Weekly" },
    { value: 26, label: "Accelerated Bi-Weekly" },
    { value: 26, label: "Bi-Weekly" },
    { value: 24, label: "Semi-Monthly" },
    { value: 12, label: "Monthly" },
  ];
  // STATE TO STORE THE ERROR MESSAGES
  const [error, setError] = useState("");

  // UPDATE STATE VIA EVENT HANDLER FOR ALL USER INPUT VALUES
  const handleInputChange = (event) =>
    setUserInputs({ ...userInputs, [event.target.name]: event.target.value });

  // ERROR MESSAGE VALIDATION
  const inputErrorCheck = () => {
    const { amount, interest, years } = userInputs;
    let errorMessage = "";

    // CHECK FOR POSITIVE INTEGERS
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      errorMessage = "USER INPUTS MUST BE A POSITIVE INTEGER";
    }
    if (errorMessage) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  // DATA HANDLER THAT VALIDATES INPUTS AND PASS THEM AS A FUNCTION PARAMETER TO CALCULATE MORTGAGE
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (inputErrorCheck()) {
      calculateMortgage(userInputs);
      setError("");
    }
  };

  // METHOD CALL FOR FINAL MORTGAGE CALCULATION
  const calculateMortgage = ({ amount, interest, years, frequency, term }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const compoundValue = Math.pow(1 + calculatedInterest, calculatedPayments);
    let monthlyAmount =
      (userAmount * compoundValue * calculatedInterest) / (compoundValue - 1);
    let noOfTermPaymentsResult = term * 12;
    let frequencyValueResult = 12;
    let paymentInterest = calculatedInterest;

    if (frequency == "Weekly") {
      monthlyAmount = (monthlyAmount * 12) / 52;
      noOfTermPaymentsResult = term * 52;
      frequencyValueResult = 52;
      paymentInterest = Number(interest) / 100 / 52;
    }
    if (frequency == "Accelerated Weekly") {
      monthlyAmount = monthlyAmount / 4;
      noOfTermPaymentsResult = term * 52;
      frequencyValueResult = 52;
      paymentInterest = Number(interest) / 100 / 52;
    }
    if (frequency == "Bi-Weekly") {
      monthlyAmount = (monthlyAmount * 12) / 26;
      noOfTermPaymentsResult = term * 26;
      frequencyValueResult = 26;
      paymentInterest = Number(interest) / 100 / 26;
    }
    if (frequency == "Accelerated Bi-Weekly") {
      monthlyAmount = monthlyAmount / 2;
      noOfTermPaymentsResult = term * 26;
      frequencyValueResult = 26;
      paymentInterest = Number(interest) / 100 / 26;
    }
    if (frequency == "Semi-Monthly") {
      monthlyAmount = monthlyAmount / 2;
      noOfTermPaymentsResult = term * 24;
      frequencyValueResult = 24;
      paymentInterest = Number(interest) / 100 / 24;
    }
    const amortizationPeriodPaymentsResult = years * frequencyValueResult;

    // HERE THE LOGIC CALCULATES MORTGAGE WITH INTEREST AND PRINCIPAL FOR EACH GIVEN FREQUENCY
    let totalInterest = 0,
      totalPrincipal = 0,
      totalInterestTerm = 0,
      totalPrincipalTerm = 0,
      totalCostAP = 0,
      totalCostTerm = 0;
    let outstandingAmount,
      outstandingAmountTerm = userAmount;

    // THIS FOR LOOP CALCULATES THE INDIVIDUAL MORTGAGE FOR AMORTIZATION PERIOD
    for (let i = 0; i < amortizationPeriodPaymentsResult; i++) {
      let interestAmount = paymentInterest * outstandingAmount;
      let principalAmount = monthlyAmount - interestAmount;
      outstandingAmount -= principalAmount;

      totalInterest = totalInterest + interestAmount;
      totalPrincipal = totalPrincipal + principalAmount;
      totalCostAP = totalInterest + totalPrincipal;
    }

    // THIS FOR LOOP CALCULATES THE INDIVIDUAL MORTGAGE FOR TERM PERIOD
    for (let i = 0; i < noOfTermPaymentsResult; i++) {
      let interestAmountTerm = paymentInterest * outstandingAmountTerm;
      let principalAmountTerm = monthlyAmount - interestAmountTerm;
      outstandingAmountTerm -= principalAmountTerm;

      totalInterestTerm += interestAmountTerm;
      totalPrincipalTerm += principalAmountTerm;
      totalCostTerm = totalInterestTerm + totalPrincipalTerm;
    }

    // DETERMINE WHETHER THE PASSED NUMBER IS FINITE
    if (isFinite(monthlyAmount)) {
      const monthlyPaymentCalculated = monthlyAmount.toFixed(2);
      const totalPaymentCalculated = (
        monthlyAmount * amortizationPeriodPaymentsResult
      ).toFixed(2);
      const totalInterestCalculated = (
        monthlyAmount * amortizationPeriodPaymentsResult -
        userAmount
      ).toFixed(2);
      const totalCostTermResult = totalCostTerm.toFixed(2);
      const principalTerm = totalPrincipalTerm.toFixed(2);
      const interestTerm = totalInterestTerm.toFixed(2);

      // STATE UPDATE OF CALCULATED RESULT FIELDS TO BE DISPLAYED TO THE USER
      setCalculatedResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
        noOfTermPayments: noOfTermPaymentsResult,
        amortizationPeriodPayments: amortizationPeriodPaymentsResult,
        totalCostTerm: totalCostTermResult,
        termPrincipal: principalTerm,
        termInterest: interestTerm,
        frequencyValue: frequencyValueResult,
      });
    }
    return;
  };

  // CLEAR THE USER INPUT FIELDS
  const clearFields = () => {
    setUserInputs({
      amount: "",
      interest: "",
      years: "",
      frequency: "",
      term: "",
    });

    setCalculatedResults({
      monthlyPayment: "",
      totalPayment: "",
      totalInterest: "",
      isResult: false,
    });
  };

  // ARRAY FOR AMORTIZATION PERIOD OPTIONS
  const yearOptions = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ].map((year) => {
    return { value: year, label: year + " " + "years" };
  });

  // ARRAY FOR TERM OPTIONS
  const termOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((term) => {
    return { value: term, label: term + " " + "years" };
  });

  // FINAL DOM RETURN WITH MORTGAGE SUMMARY AND CALCULATED SUMMARY REPORT
  return (
    <>
      <div className="deviceWrapper">
        <div className="formWrapper">
          <form
            autoComplete="off"
            className="form"
            onSubmit={handleSubmitValues}
          >
            <div className="body">
              <FontAwesomeIcon icon={faLaptopHouse} />
              <span> Mortgage Calculator System </span>
            </div>

            <div className="inWrapper">
              <div>
                <label className="label">Mortgage Amount:</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter Loan Amount"
                  value={userInputs.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="label">Loan Interest Value:</label>
                <input
                  type="number"
                  name="interest"
                  placeholder="Enter Interest Value"
                  value={userInputs.interest}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="label">Amortization Period:</label>
                <select
                  required
                  name="years"
                  value={userInputs.years}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select years to repay
                  </option>
                  {yearOptions.map(function (data, key) {
                    return (
                      <option key={key} value={data.value}>
                        {data.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="label">Payment Frequency Value:</label>
                <select
                  required
                  name="frequency"
                  value={userInputs.frequency}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select frequency
                  </option>
                  {payOptions.map(function (data, key) {
                    return (
                      <option key={key} value={data.label}>
                        {data.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="label">Term:</label>
                <select
                  required
                  name="term"
                  value={userInputs.term}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select term
                  </option>
                  {termOptions.map(function (data, key) {
                    return (
                      <option key={key} value={data.value}>
                        {data.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              {error && <p className="error">{error}</p>}
            </div>
            <div className="submitButton">
              <button className="button" type="submit">
                Calculate
              </button>
            </div>

            <div
              style={
                calculatedResults.noOfTermPayments
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <h2>Mortgage Summary</h2>
              <div>
                <p>
                  Over the {userInputs.years}-year amortization period, you
                  will:
                </p>
                <ul>
                  <li>
                    have made{" "}
                    <strong>
                      {calculatedResults.amortizationPeriodPayments}
                    </strong>{" "}
                    {userInputs.frequency} payments of{" "}
                    <strong>${calculatedResults.monthlyPayment}</strong>.
                  </li>
                  <li>
                    have paid <strong>${userInputs.amount}</strong> in
                    principal,{" "}
                    <strong>${calculatedResults.totalInterest}</strong> in
                    interest, for a total of{" "}
                    <strong>${calculatedResults.totalPayment}</strong>.
                  </li>
                </ul>
                <p>&nbsp;Over the {userInputs.term} term, you will:</p>
                <ul>
                  <li>
                    have made{" "}
                    <strong>{calculatedResults.frequencyValue} </strong>
                    {userInputs.frequency} payments of{" "}
                    <strong>${calculatedResults.monthlyPayment}</strong>.
                  </li>
                  <li>
                    have paid{" "}
                    <strong>${calculatedResults.termPrincipal}</strong> in
                    principal,{" "}
                    <strong>${calculatedResults.termInterest}</strong> in
                    interest, for a total of{" "}
                    <strong>${calculatedResults.totalCostTerm}</strong>.
                  </li>
                </ul>
                <p>
                  &nbsp;At the end of your {userInputs.term} term, you will:
                </p>
                <ul>
                  <li>
                    have a balance of{" "}
                    <strong>
                      ${userInputs.amount - calculatedResults.termPrincipal}
                    </strong>
                    .
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-items">
              <div>
                <label id="label">Monthly Payment:</label>
                <input
                  type="text"
                  value={calculatedResults.monthlyPayment}
                  disabled
                />
              </div>
              <div>
                <label id="label">Total Cost: </label>
                <input
                  type="text"
                  value={calculatedResults.totalPayment}
                  disabled
                />
              </div>
              <div>
                <label id="label">Total Interest:</label>
                <input
                  type="text"
                  value={calculatedResults.totalInterest}
                  disabled
                />
              </div>
              <div className="submitButton">
                <button className="button" onClick={clearFields}>
                  Re-Calculate
                </button>
              </div>
            </div>
            <div
              style={
                calculatedResults.noOfTermPayments
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <h2>Calculated Summary</h2>
              <table className="table table-sm table-hover table-striped table-dark">
                <thead className="thead-dark" align="center">
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Term</th>
                    <th scope="col">Amortization Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr align="center">
                    <td>Number of Payments</td>
                    <td>{calculatedResults.noOfTermPayments}</td>
                    <td>{calculatedResults.amortizationPeriodPayments}</td>
                  </tr>
                  <tr align="center">
                    <td>Mortgage Payment</td>
                    <td>{calculatedResults.monthlyPayment}</td>
                    <td>{calculatedResults.monthlyPayment}</td>
                  </tr>
                  <tr align="center">
                    <td>Principal Payments</td>
                    <td>{calculatedResults.termPrincipal}</td>
                    <td>{userInputs.amount}</td>
                  </tr>
                  <tr align="center">
                    <td>Interest Payments</td>
                    <td>{calculatedResults.termInterest}</td>
                    <td>{calculatedResults.totalInterest}</td>
                  </tr>
                  <tr align="center">
                    <td>Total Cost</td>
                    <td>{calculatedResults.totalCostTerm}</td>
                    <td>{calculatedResults.totalPayment}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MortgageCalculator;
