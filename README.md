# Trust Graph - Multi-Actor Fraud Detection & Remediation

> AI BUILD 2026 - Track 5 | Trust, Safety & Risk | E-Commerce in India

### The Problem
Fraud in e-commerce is not just customer fraud. Sellers do self-ordering & fake listings, delivery partners do fake delivery marks & pilferage, customers do return abuse. Most dangerous is **COLLUSION** - Seller + Delivery partner, Seller + Customer working together. Single-transaction models miss this. Also, honest sellers get suspended by blunt rules with no fast appeal.

### Our Solution - Trust Graph
We built a Graph-based AI system that sees the NETWORK, not just one transaction.

**Risk Score = 40% Transaction Model + 40% Graph Anomaly + 20% Live Intelligence (GSTIN/IP/Email)**

**Graph Logic:**
- Node: Seller, Customer, Delivery Partner, Device, IP, Address
- Edge: Shared device, Shared IP, Same Address cluster, Same GPS
- If 3+ sellers share same deviceId (DEV_01) => +40 Collusion Score
- If same IP creates 10+ orders to same address => +30 Self-Ordering
- If GSTIN invalid (07 series / fake) => +20 Seller Legitimacy Fail
- If Delivery Partner fakeDeliveryCount > 10 in 5 mins at same GPS => +35 Pilferage

**Graduated Remediation (Livelihood Guardrail):**
- Score < 40: Allow (Genuine)
- 40-85: Soft Action - Payout Hold 48hrs + OTP Verification via SendGrid/Twilio
- >85 with >=95% Precision: Hard Action - Suspend + Appeal Button (SLA 24hrs)
- >85 with <95% Precision: Route to Human Investigator

Every action is appealable, time-bound, and has immutable plain-English evidence trail.

### Key Features Built
- **Dashboard:** Total Txns, Fraud Blocked, Money Saved ₹12.4L, Investigation Time 2.3 min (vs 45 min before), Risk Distribution Chart, High-Risk Table
- **Trust Graph Visualization:** Interactive vis-network graph with SELLER_001/002/003 collusion demo (shared DEV_01, shared IP 192.168.1.10), DP_005 fake delivery cluster. Click node -> side panel.
- **Case Review:** Timeline evidence, graduated action panel, mock email confirmation, audit log, appeal form with localStorage persistence.
- **Guardrails:** DPDP Act Badge (PII in India Region), Fairness Metric (Small sellers 4.2% vs Large 4.0% - No bias), Cost-per-Decision ₹0.40, Auditability.

### Tech Stack
- Frontend: React + Vite + Tailwind CSS + vis-network + Recharts
- Logic: NetworkX concept implemented in JS, LightGBM concept (rule-based for MVP)
- APIs Integrated: AbuseIPDB (IP risk), GSTINCheck.co.in (Seller legitimacy), DeBounce (Disposable email), SendGrid (Email), Twilio (SMS/WhatsApp)
- Deployment: Bolt.host / Vercel

### Datasets Used
1.  **IEEE-CIS Fraud Detection (590k Txns)** - Base transaction model training
2.  **Comprehensive Indian Online Fraud Dataset** - India-specific patterns
3.  **Elliptic Bitcoin Dataset (203K nodes)** - Graph anomaly benchmark to prove our graph technique works. We applied same technique to e-commerce graph.
4.  Live Signals: AbuseIPDB, GSTINCheck, DeBounce

### Architecture