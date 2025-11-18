# About the Scenario Tool

This page covers example use cases for the **Scenario Tool** as well as some technical information regarding how optimisations, and the Scenario Tool, function.

## Use cases

Here we collate 5 potential or common use cases. 

### a) I have an allocated budget. How much revenue or new customers will it deliver?

Run an **optimised budget**. Set the **minimum and maximum spend levels to be identical** (the allocated amount). Use wider constraints (as set out in Section 2.c) to demonstrate how changes in external factors could impact the performance of your media.

### b) I have a budget of £5m for next year, how do I spend this?

Run an “**optimised budget**”. Set the total budget level to **£5m** and run the scenario. Set looser constraints to reflect how external changes can impact the expected return.

### c) I have an extra £1m to spend next quarter. How do I best spend this?

Run an “**optimised budget**”. Define the **minimum spend levels** for all already allocated channels. Set the *total* budget at your existing minimum plus the **£1m incremental spend**. Run the scenario to identify the best way to spend the incremental amount while respecting existing commitments.

### d) How do I hit 10k new customers or £1m of media-driven revenue?

Run a “**generate uplift**”. Set the goal as your target revenue or customers within your desired time period. Use the wider constraints to reflect how external changes could make it easier or more difficult to achieve your goals.

### e) What happens if the economy or market for our product increases by 10% next year?

Run an “**Optimised Budget**” or a “**Generate uplift**” and, in the last step when creating the scenario, set the “**Synergy**” overlay to \+10%. This would represent an improvement in the relevant external factor (e.g., industry seasonality, economic trends). This scenario can then be compared to other scenarios to see the impact of these improved conditions on budget allocation and expected returns.

## Technical data Inputs

The Scenario Tool’s optimisations are based on the information from a Marketing-Mix Modelling (MMM) model, specifically the response curves. Various connectors can be set up to automatically feed curves’ data into the **Scenario Tool**. Other information can be provided to the tool, such as historic media spends by channel, to improve the quality of the optimisations. More on historic media spends below.

### **Media response curves**

Media response curves are used in MMM models to capture diminishing returns. These curves are at the core of budget optimisations.

#### Functional form of the response curve 

Media response curves can vary depending on the model. Some examples are below:

| Functional Form | Detail | Notes |
| :---- | :---- | :---- |
| ![][image1] | x \= media spend (or GRPs, impressions, etc.)<br><br>α\>0 \= shape parameter (controls steepness/curvature)<br><br> β\>0 \= half-saturation point (spend level at 50% of saturation) | S-shape curves. Two parameters need to be estimated to define the shape of the curve. Suitable for channels that don’t perform well at lower spend levels. |
| ![][image2] | x \= media spend <br><br> λ = diminishing returns rate (curvature) | Concave curve. Just one parameter needs to be estimated to define the shape of the curve. Suitable for most applications. |

### **Historic Media Spends**

Optimisations are mathematical operations based on the response curves estimated by the MMM models. The curves have been estimated on a range of spend levels, and should be used with care when exceeding those levels. Using **historic media spends by channel**, the **Scenario Tool** takes this consideration into account and pre-sets constraints so that the optimisations don’t generate extreme results.

### **Algorithm**

Linea **Scenario Tool** uses the media response curves to generate the optimal budget allocation. The objective of the optimisation is to maximise ***net uplift**. The proprietary algorithm developed by the Linea team runs significantly faster than other optimisation solutions. 

**net uplift = uplift - spend*

### **Constraints**

Users can set constraints for individual curves to tune the optimisation and run different scenarios. As mentioned above, these constraints are also informed by the historic media spend data.

For example:

1. **Weeks Active**: For **always-on channels**, set this to the maximum number of weeks in the period. For **non-consistent channels**, the Scenario Tool defaults the value to the length of the historic scenario period, but you can increase or decrease this as appropriate to reflect expected flight.  
     
2. **Min Spend**: Used to enforce a specific minimum amount of spend that must be allocated to a channel. This is often necessary for spending up weight scenarios or respecting fixed media commitments.  
     
3. **Max Spend**: Used to enforce a specific maximum amount of spend that can be allocated to a channel.  
     
4. **Multiplier**: Used to represent a change in expected channel performance. Typical uses include overlaying expected **cost inflation** on a media channel or applying a factor to reflect anticipated **performance improvements** (e.g., due to creative changes or better targeting).

### **New Channels**

The **Scenario Tool** will run optimisations using the curves estimated in the MMM models provided. If a new channel is about to be introduced into the mix, the new channel can also be included in the optimisations. Please contact the Linea team for a bespoke build at [info@linea-analytics.com](mailto:info@linea-analytics.com).



## Synergy

The impact of marketing campaigns can be tied to external factors. Here are a few examples.

- **Fintech**: Will the campaign perform as well if the stock market is dipping?
- **Travel & Hospitality**: Will the campaign perform as well if economic uncertainty reduces holiday travel?
- **E-commerce/Retail**: Will the campaign perform as well if supply-chain delays limit product availability?

Where the interaction or synergy between media and wider market/economic factors has been measured, the **Scenario Tool** allows users to plan for different conditions:

* Add a **fixed percentage** to represent a sustained increase or decrease in synergy (e.g., planning for a market increase of 10% for the entire quarter).  
* Overlay a specific **weekly adjustment**, allowing you to change the values to exactly match forecasts or specific conditions for the scenario. These can be uploaded as Excel and CSV files, or via direct API connections.


<figure  class="p-5">
  <img src="./guides/img/inputs-synergy.png" width="100%" class="rounded" alt="screenshot setting the synergy variable to include in the optimisation">
</figure>



[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>
