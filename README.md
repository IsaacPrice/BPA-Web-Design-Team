# Stage Fright Band Website

This repository contains the official website for the up-and-coming local band, **Stage Fright**. It is built using **React**, **TypeScript**, and **Material-UI (MUI)** to deliver a visually appealing and responsive website.

The website is hosted on **GitHub Pages** for easy access and presentation.

**BE AWARE: THE PAYPAL CHECKOUT ACTUALLY WORKS, THERE ARE NO REFUNDS AND NO ACTUAL PRODUCTS**

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Relevant Documentation](#relevant-documentation)
5. [Credits](#credits)
6. [Other](#other)

---

## Project Overview

This project is created for the **Business Professionals of America (BPA)** web design team competition. The website is designed to promote the band **Stage Fright**, which includes:
- **About Us**: A description of the band and profiles for each band member.
- **Tour Dates**: A schedule of upcoming events and online ticket purchasing options. 
- **Merch**: A page to display merchandise for sale.
- **Contact Us**: Contact information including booking and customer service links.

---

## Installation

To run this project locally, follow the steps below:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/stage-fright-website.git
    cd stage-fright-website/react-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the project:
    ```bash
    npm start
    ```
    This will start a development server and open the website in your default browser.

---

## Project Structure

The project is organized into two main directories:
- **`react-app/`**: Contains the React application, including the components and static assets.
  - **`public/`**: Static files like `index.html` and images.
  - **`src/`**: Source code for the React app.
- **`docs/`**: Documentation for the project and any necessary supporting files.

---

## Relevant Documentation

Here are the documents that are relevant to the project:
- [Works Cited](#docs/Works Cited.pdf) (also added under each image)

---

## Credits

- **Team Members**: 
    - Rick: Graphic Designer
    - Clark: Media Editor
    - Mattias: Creative Director & Photographer
    - Isaac: Web Developer
- **Technologies Used**:
    - React
    - TypeScript
    - Material-UI (MUI)
    - GitHub Pages for hosting

---

## Other

**Some odd code accomodations:**
 - Since this project is hosted on GitHub Pages, I chose to use `useNavigate` for routing, including on `Link` elements, because it simplifies navigation by correctly handling the base path (`/BPA-Website-Design-Team/` instead of `/`).