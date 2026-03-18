# Celsius Holdings (CELH) - Sensitivity Analysis Website

An interactive web-based tool for performing DCF (Discounted Cash Flow) valuation sensitivity analysis on Celsius Holdings Inc. (CELH).

## Features

- **Interactive Sensitivity Sliders**: Adjust key valuation parameters in real-time
  - WACC (Weighted Average Cost of Capital): 5% - 15%
  - Terminal Growth Rate: 1% - 5%
  - FCF Growth Year 1-2: 10% - 50%
  - FCF Growth Year 3-5: 5% - 30%

- **Live DCF Calculations**: Instantly see how changes affect:
  - Enterprise Value
  - Equity Value
  - Intrinsic Price Per Share
  - Comparison to Current Market Price

- **Financial Data Display**:
  - Market Data (Share Price, Market Cap, Shares Outstanding, Beta)
  - Debt & Capital Structure
  - Valuation Metrics
  - Historical Cash Flow Analysis
  - WACC Components Breakdown

- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Data Sources

- 2025 Financial Data: CELH Official Filings
- Market Data: Market Research Future, AlphaSpread
- Historical Analysis: MacroTrends
- DCF Methodology: NextGen Investors

## Key Metrics (2025)

| Metric | Value |
|--------|-------|
| Share Price | $44.18 |
| Market Cap | $11,353.38M |
| Enterprise Value | $11,407.29M |
| Net Debt | $1,904.47M |
| Intrinsic Value (Base Case) | $36.98/share |
| WACC | 9% |

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Adjust the sensitivity sliders to explore different valuation scenarios
4. View real-time updates to valuation metrics

## How It Works

The tool uses a **5-year DCF model** with:
- Explicit forecast period: Years 1-5
- Terminal value calculation using perpetuity growth method
- All cash flows discounted at WACC

### Formula Overview

**Enterprise Value = PV(Explicit FCF) + PV(Terminal Value)**

Where:
- Terminal Value = FCF(Year 5) × (1 + TGR) / (WACC - TGR)
- PV = Present Value discounted at WACC

## Base Case Assumptions

- 2025 Free Cash Flow: $323.38M
- Year 1-2 FCF Growth: 30%
- Year 3-5 FCF Growth: 15%
- Terminal Growth Rate: 3.00%
- WACC: 9%

## Valuation Results (Base Case)

- Enterprise Value: $11,407.29M
- Net Debt: $1,904.47M
- Equity Value: $9,502.82M
- **Intrinsic Price Per Share: $36.98**
- Current Market Price: $44.18
- **Implied Upside/(Downside): -16.4%**

## Historical Cash Flow Performance

| Year | Cash Flow Income | YoY Change |
|------|------------------|-----------|
| 2021 | ($99.74M) | - |
| 2022 | $99.92M | +200.3% |
| 2023 | $123.79M | +23.9% |
| 2024 | $239.51M | +93.3% |
| 2025 | $323.38M | +35.0% |

## Technical Stack

- HTML5
- CSS3 (with gradient backgrounds and responsive design)
- Vanilla JavaScript (no external dependencies)

## Files

- `index.html` - Main webpage with styling and layout
- `script.js` - DCF calculation and interactivity logic
- `README.md` - Documentation

## License

Open source - feel free to use and modify for your analysis.

## Disclaimer

This tool is for educational and analytical purposes only. It is not financial advice. Past performance does not guarantee future results. Always conduct your own due diligence and consult with a financial advisor before making investment decisions.