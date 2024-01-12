This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the project :

First install the node modules :
npm i

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries Used

1. bootstrap : to use bootstrap shorthand css classes for faster styling
2. reactstrap : to use in-built components for ease of styling
3. react-chartjs-2 : to use in-built charts to display data
4. chart.js : to add plugins to react-chartjs-2 charts for added functionality like tooltip and liner scale
5. sass : helps to write css in a better formatted way which reduces redundancy and decreases development time
6. react-context: to persist login status and some required data across components

## Features Added

# Login/ Logout

1. For Login page, user needs to put in valid credentials to be able to see any dashboard pages, sidebar and the header bar.
   Valid credentials are stored in '/assets/data/login.js' file.
2. Logout tab in the sidebar will logout the user and redirect them to the login page.
3. For login status, I have used "react-context" to store the login status so each component has access to it. Both login and logout uses "react-context "to communicate login status to other components.
   @warning Due to this, the login status goes false when we refresh the page. In production, a more robust approach is required for achieving login status persistence like access-token and refresh-token.
4. Created a HOC called "WithAuth", which adds authentication layer to any component it wraps. All dashboard pages are wrapped woith this HOC. So if the user tries to navigate to some page without logging in, they are redirected to the login page.

# Sidebar/Header

1. Sidebar navigates user to respective pages
2. Header data including user selected and no. of notifications changes according to the user selected.
3. These both components are common to all dashboard pages hence their functionality is decoupled and independent.

# Dashboard

1. Page made for the requirements of the figma design.
2. Dashboard Chart displays dataset for each month of the year and if we hover over any month for 0.5 secs and the top stat cards gets populated with that month's data. Used "debouncing" to achieve this.
3. Selected User name appears on the Dashboard welcome message.
4. Dashboard date dropdowns changes the data message according to the month selected.

# Residence page

1. This page is static made for the requirements of the figma design.
2. All input fields and dropdowns are functional.

# Owner Management page

1. This page is static with dynamic table and pagination made for the requirements of the figma design.
2. In Owner management page, the table data is segregated through "pagination". And the pagination is dynamic according the total data available for table with respect to the decided size of data to be shown on one page.
3. All input fields and dropdowns are functional.
