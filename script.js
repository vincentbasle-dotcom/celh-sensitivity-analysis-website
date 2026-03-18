'use strict';

/**
 * DCF Valuation Calculation
 * This script includes functions to calculate the Discounted Cash Flow (DCF) valuation.
 */

/**
 * Calculates the present value of future cash flows.
 * @param {number} cashFlow - The projected cash flow for the year.
 * @param {number} discountRate - The discount rate as a decimal (e.g., 0.10 for 10%).
 * @param {number} year - The year of the cash flow.
 * @returns {number} Present value of the cash flow.
 */
function calculatePresentValue(cashFlow, discountRate, year) {
    return cashFlow / Math.pow((1 + discountRate), year);
}

/**
 * Calculates the DCF valuation based on projected cash flows.
 * @param {Array<number>} cashFlows - Array of projected cash flows over the years.
 * @param {number} discountRate - The discount rate as a decimal.
 * @returns {number} DCF valuation.
 */
function calculateDCF(cashFlows, discountRate) {
    let totalValue = 0;
    
    for (let year = 0; year < cashFlows.length; year++) {
        totalValue += calculatePresentValue(cashFlows[year], discountRate, year + 1);
    }
    
    return totalValue;
}

// Example usage:
const cashFlows = [1000, 1500, 2000, 2500, 3000]; // projected cash flows for 5 years
const discountRate = 0.10; // 10% discount rate
const dcfValue = calculateDCF(cashFlows, discountRate);
console.log('DCF Valuation:', dcfValue);