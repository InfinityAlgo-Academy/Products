# InfinityRSI Divergence - Advanced Divergence Detection

<div class="product-header-icon" markdown>
:material-chart-bell-curve-cumulative:{ .product-icon-large }
</div>

---

---

## 📋 Overview

**InfinityRSI Divergence** is a powerful indicator for MetaTrader 4 and 5 that automatically detects bullish and bearish divergences on the Relative Strength Index (RSI). It helps traders spot potential trend reversals and continuation patterns with high accuracy.

<div class="grid cards" markdown>

-   :material-chart-bell-curve:{ .lg } **Platform**
    
    MetaTrader 4 / MetaTrader 5

-   :material-arrow-contract:{ .lg } **Asset**
    
    Any (Forex, Crypto, Stocks)

-   :material-eye-outline:{ .lg } **Type**
    
    Oscillator Divergence

-   :material-bell-ring:{ .lg } **Alerts**
    
    Pop-up, Email, Push

</div>

---

## ✨ Features

### 🔍 Divergence Types Detected

- **Regular Divergence** - Signals trend reversal
    - **Bullish**: Price makes Lower Low, RSI makes Higher Low
    - **Bearish**: Price makes Higher High, RSI makes Lower High
- **Hidden Divergence** - Signals trend continuation
    - **Bullish**: Price makes Higher Low, RSI makes Lower Low
    - **Bearish**: Price makes Lower High, RSI makes Higher High

### 🎨 Visual Customization

- **Draw Lines** on Price Chart & RSI Window
- **Color Coding** for Bullish/Bearish signals
- **Line Style** (Solid, Dotted, Dashed)
- **Arrow Display** for clear entry signals

### 🔔 Alert System

- **Pop-up Alert** with sound
- **Email Notification**
- **Push Notification** to mobile
- **Filter** alerts by type (Regular/Hidden)

---

## 🔧 Installation

1. **Download** `InfinityRSI_Divergence.ex4` or `.ex5`.
2. **Open Data Folder** in MetaTrader.
3. **Copy** to `MQL4/Indicators` or `MQL5/Indicators`.
4. **Restart** MetaTrader.
5. **Drag** onto chart.
6. **Adjust** RSI Period (e.g., 14).

---

## ⚙️ Settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| **RSI_Period** | 14 | Period for RSI calculation |
| **ApplyTo** | Close | Applied price (Close, High, Low, etc.) |
| **BullishColor** | Green | Color for bullish divergence lines |
| **BearishColor** | Red | Color for bearish divergence lines |
| **ShowHidden** | true | Show hidden divergences |
| **AlertOnCurrent** | false | Alert on unclosed candle |

---

## 💡 Trading Strategy

### Reversal Trading

Look for **Regular Divergence** at key Support/Resistance levels.
- **Buy**: Bullish Regular Divergence at Support.
- **Sell**: Bearish Regular Divergence at Resistance.

### Trend Continuation

Look for **Hidden Divergence** during a pullback in a trend.
- **Buy**: Bullish Hidden Divergence in an Uptrend.
- **Sell**: Bearish Hidden Divergence in a Downtrend.

---

## ❓ FAQ

??? question "Does it repaint?"
    No, once the candle is closed, the divergence signal is permanent.

??? question "Can I use it on M1?"
    Yes, but higher timeframes (H1, H4) are more reliable.

---

## 🛒 Purchase

<div align="center">

**Master Divergence Trading**

[Get InfinityRSI](https://infinityalgoacademy.net/item/infinityrsi-divergence-v-6-2/){ .md-button .md-button--primary }

</div>



## 🧠 Advanced Algorithmic Logic
**Infinityrsi Divergence** represents the next generation of automated trading. By moving away from lagging indicators like MACD or RSI, we focus on **Price Action & Order Flow**. The algorithm monitors the market structure in real-time, identifying institutional footprints.

## 🛡️ Risk Management Protocols
Capital preservation is the cornerstone of this system.
*   **Dynamic Position Sizing:** Lot size calculates automatically based on your account balance and risk tolerance (%).
*   **Stealth Mode:** Profit and Stop Loss levels are hidden from the broker to prevent "Stop Hunting".
*   **Equity Guard:** A fail-safe mechanism that closes all trades if global equity drops by a defined percentage.

## 📈 Performance Verification
Designed for long-term consistency. The strategy aims for a Sharpe Ratio > 1.5, meaning the returns justify the risk taken.
