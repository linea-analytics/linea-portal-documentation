# MMM Onboarding

## 1. Onboarding with Linea Analytics

The journey from raw data to actionable marketing insights follows a structured 5-stage process.

| Stage | Action | Description |
| :---- | :---- | :---- |
| 1\. Connect | Connect to Data (via APIs) | We use a mix of sources to link your ad platforms and databases, seeking 2+ years of data. This ensures a continuous, automated flow of raw data. Where data is not available through an API, we seek to derive a regular data stream. The Linea team supports this process as needed. |
| 2\. Verify | Data Accuracy | Our team audits the initial sync to ensure spend, conversions, and impressions match your platform. We run a data verification to ensure the data is accurate at this stage. |
| 3\. Analyse | Linea Run | Linea set up an initial MMM model to analyse the key drivers of sales and how marketing levers work alongside wider business influences to drive growth. |
| 4\. Educate | Training | We walk your team through the dashboard, explaining how to interpret ROI, MROI, and diminishing returns curves. Crucially, we explain how MMM approaches differ and work alongside your current measurement approach. |
| 5\. Take Action | Take Action | Use the model outputs to take action. Including reallocating budgets, diving deeper into channels, testing new channels, and maximising total growth. |
| 6\. Take ownership | Ease of access | Once the analysis is set up and running, Linea integrates the AI Measurement Chat into your own environment (Slack/ Teams/ Gmeet). Allowing fast answers to your queries. |


## 2. Project Timeline & Milestones

See below a typical onboarding timeline. This timeline is after a contractual agreement. 

* **Week 1:** Connection & Authentication.  
* **Week 2:** Data Quality Audit   
* **Week 3/4:** Model Training & Calibration.  
* **Week 4/5:** First Insights Delivery & Training.  
* **Week 5 & beyond:** Allow for the Linea Measurement expert.  
* Data refreshes at a cadence agreed in the contract 

Key risks include access to data connections in week 1 and any issues that arise with data quality in week 2\.

## 3. How to Authenticate an API

We use two approaches to build API connections: 

- For many common connections Linea builds a direct API connection  
- We also use pre-built API connections, via Fivetran. They are a leading provider of automated data connections and support the ease of onboarding when multiple APIs are used.

With either approach used the APIs are built to handle authentications because it provides a "set-and-forget" infrastructure. The process is designed to be user-friendly and highly secure (see security below).

### The Authentication Process

1. **Set Up Connector:** Within the Linea/Fivetran dashboard, you will select the specific platform (e.g., Google Ads).  
2. **OAuth Authorisation:** For most tools, a "Connect Card" will appear. You simply log in with your platform credentials. Linea never sees or stores your password; we only receive an encrypted "access token."  
3. **Permissions:** Ensure the authenticating user has "Read-Only" or "Reporting" access. We do not require "Admin" or "Write" permissions.

### Handling Sensitive Data & GDPR

To ensure GDPR compliance, we prioritise privacy at the ingestion level:

* **Column Blocking:** We proactively block any tables containing PII (Personally Identifiable Information) before the sync begins.  
* **Data Tables:** For highly sensitive internal data, we recommend providing Linea with access to a dedicated Data Table or View rather than a raw database. This ensures that only the information required for the analysis is shared with Linea.  
  * The Linea team can support you in setting up a specific Data Table to run in the API.  
* **Anonymisation:** Any necessary data is hashed during data transit, ensuring no source data can be re-identified.

## 4. Platform-Specific Commentary

Different platforms require different considerations. Below are the key notes for some of our commonly supported integrations:

### Ad Platforms

* **Google Ads / DV 360:** Requires "Manager" or "MCC" level access to sync multiple accounts under one connector.  
* **Meta (Facebook/Instagram):** Authentication is done via a personal Facebook profile that has "Ad Account" access.  
* **TikTok LinkedIn Ads:** Ensure the API user has "Viewer" or "Analyst" roles. We pull data at the "Campaign" and "Ad Group" levels.  
* **LinkedIn Ads:** Ensure the API user has "Viewer" or "Analyst" roles. We pull data at the "Campaign" and "Ad Group" levels.  
* **The Trade Desk:** Requires an API Token and your specific Partner ID.  
* **Amazon Ads:** We connect to the Amazon Advertising API to pull Sponsored Products, Brands, and Display data.  
* **Bing Ads:** Requires a Microsoft Account with access to the Bing Ads Shell.

### Data Warehouses

* **Snowflake:** We recommend creating a dedicated LINEA\_USER service account with specific warehouse permissions.  
* **BigQuery:** We recommend creating a dedicated LINEA\_USER service account with specific warehouse permissions.  
* **Amazon Redshift:** We recommend creating a dedicated LINEA\_USER account. Requires whitelisting IP addresses in your security groups.  
* **Databricks:** Connected via specific SQL Warehouse endpoints.  
* **Azure Analytics:** We use service principal authentication for secure, keyless access.

### Payments & E-Commerce

* **Stripe:** Use a Restricted API Key if your security policy requires it. Ensure the key has `Read-only` permissions for Charges, Customers, Plans, and Subscriptions.  
* **Shopify:** You must be a Store Admin to authorize the install. We will create a "Custom App" within your Shopify admin to pull orders, products, and refunds.

### Analytics Platforms

* **GA4 (Google Analytics 4):** You will need to provide a Property ID to authenticate. Note that GA4 has API quota limits; We manage this automatically, but initial historical syncs may take 24–48 hours depending on your traffic volume.  
* **Adobe Analytics:** Requires a Client ID and Client Secret generated via the Adobe Developer Console. You will need to select the specific "Report Suites" you want to sync. 

### CRM 

* **Salesforce:** We highly recommend using a Dedicated Integration User with "API Enabled" permissions. This prevents the sync from breaking if an individual employee leaves the company.  
* **HubSpot:** You must be a "Super Admin" or have "App Installation" permissions to approve the connection. We detect custom properties you’ve created for Deals or Contacts, ensuring your unique business logic is captured.  
* **Zoho CRM:** You will select your Zoho "Data Center" region and sign in via OAuth. Ensure the user authenticating has the "Administrator" profile or a role with "Export" permissions enabled in Zoho.

## 5. Support & Troubleshooting

A common issue & how to overcome it:

* **The "Auth-Refresh"**: API tokens can expire (e.g., if a user leaves the company, changes their password or due to an update in the platform). At this point, we would seek to re-authenticate.  
* **Communication Channels**: We would set up a shared communication platform (across Teams/ Slack/ GMeets), which allows for faster communication to support your questions

## 6. Security Overview

Security is built into the architecture of our data pipeline. We treat your data with the highest level of encryption and privacy standards. 

### MMM Data and Non-PII data Compliance

Marketing Mix Modelling (MMM) is inherently privacy-first because it relies on Aggregated Data rather than user-level tracking.

* **Non-PII by Design:** We do not collect names, emails, IP addresses, or device IDs. We only require daily totals (e.g., *"How much was spent on Meta on day XX?"*).   
* **Cookie-Less:** Since MMM looks at broad correlations between spend and sales, it is unaffected by the "death of the cookie" or iOS privacy changes.  
* **No data Risk:** Because no individual customer data is moved, there is no risk of a PII breach within the Linea environment.  
* **Data storage:** For the data we do connect to this, it is stored within Linea’s environment.

### How APIs Use Your Data

Our API connections provide highly secure data **pipelines**. At no point is it a storage facility.

* **Transient Processing:** Data is removed from servers within 24 hours of a successful sync to your destination.  
* **Encryption:** All data is encrypted in transit and at rest   
* **No Access:** The API owner cannot see your data; access is strictly restricted to automated system processes.