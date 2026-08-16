# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛍️ React Product Management App

React Product Management App is a modern **Vite + React CRUD application** for viewing, creating, editing, deleting, and comparing products.

The frontend is built with **React** and **React Router**, while `json-server` provides a lightweight REST API using a local `db.json` file.

---

## 📌 Project Objectives

By completing this project, you should be able to demonstrate the following concepts:

- Build a React application using **Vite**
- Create reusable React components
- Manage application state using React Hooks
- Use `useState` to manage local state
- Use `useEffect` to perform side effects
- Fetch data from an API
- Perform all four CRUD operations:
  - **Create**
  - **Read**
  - **Update**
  - **Delete**
- Handle asynchronous API requests using `fetch`
- Create and submit controlled forms
- Dynamically display API data
- Implement **search and compare features**
- Use **React Router** for client-side routing
- Use dynamic route parameters
- Implement nested routes
- Persist data using `json-server`
- Handle loading, empty, and error states
- Build a responsive and user-friendly interface

---

# 🚀 Core Functional Requirements

## 1. View All Products

When the application loads, users should be able to see a navigation menu containing all products stored in the API.

```http
GET /products
2. View a Single Product
Users can click a product from the product list and view its full details.

Product details should include:

Product name

Product image

Description

Compare option

Edit button

Delete button

Request:

http
GET /products/:id
🔄 CRUD Requirements
The application must implement all four CRUD operations against the /products resource.

🟢 CREATE — Add a Product
Users should be able to create a new product using a form.

Endpoint:

http
POST /products
Expected request body:

🔵 READ — Retrieve Products
Get all products
http
GET /products
Get one product
http
GET /products/:id
🟠 UPDATE — Edit a Product
Users should be able to edit an existing product.

Endpoint:

http
PATCH /products/:id
Example:

json
{
  "description": "Updated product description."
}
🔴 DELETE — Remove a Product
Users should be able to permanently remove a product.

Endpoint:

http
DELETE /products/:id
⭐ Compare
Users should be able to select multiple products and compare them side by side.

🌐 API Endpoints
Method	Endpoint	Purpose
GET	/products	Retrieve all products
GET	/products/:id	Retrieve one product
POST	/products	Create a new product
PATCH	/products/:id	Update product information
DELETE	/products/:id	Delete a product


Default API URL:

text
http://localhost:3000
🛣️ Client-Side Routing
The project includes routes such as:

Home
text
/
Create Product
text
/products/new
View Product
text
/products/:productId
Edit Product
text
/products/:productId/edit
Compare Products
text
/compare
Route Tree Structure
text
/
├── products
│   ├── new
│   └── :productId
│       └── edit
└── compare
🔎 Search Functionality
The product navigation includes a search input.

Users can enter part of a product’s name to filter the displayed products.

For example:

text
phone
could return:


Searching happens on the frontend and does not modify db.json.

🎨 User Interface Features
The project includes:

Responsive layout

Product-themed design

Product navigation/sidebar

Search input

Product details page

Product images

Compare page

Create product form

Edit product form

Delete product functionality

Navigation between products

Loading states

Error handling

Empty states

Client-side routing

🛠️ Project Setup
Requirements
Before running the project, ensure that you have installed:

Node.js

npm

Check your installations with:

bash
node --version
npm --version
1. Clone the Repository
bash
git clone <repository-url>
Then navigate into the project:

bash
cd react-product-app
2. Install Dependencies
Run:

bash
npm install
This installs all packages listed inside package.json.

▶️ Running the Application
Run Frontend and Backend Together
The recommended command is:

bash
npm start
This starts both the React frontend and the json-server backend.

Frontend runs at:

text
http://localhost:5173
API runs at:

text
http://localhost:3000
🗃️ Database Structure
The backend uses:

text
db.json
The root object must contain a products array.

Example:

🧪 Expected CRUD Flow
A user should be able to complete the following workflow:

Open the app

See all available products

Select a product

View the product details

Search for a product

Edit the product’s details

Refresh the browser and still see the edited information

Create a new product

See the new product appear in the navigation

Open the newly created product

Delete the product

See the deleted product removed from the interface and API

Compare multiple products

Successfully completing this flow demonstrates that the CRUD functionality is working correctly.

📋 CRUD Summary
CREATE
http
POST /products
json
{
  "name": "New Product",
  "description": "New product description",
  "image_url": "https://example.com/product.jpg"
}
READ
http
GET /products
GET /products/:id
UPDATE
http
PATCH /products/:id
Example:

json
{
  "description": "Updated description"
}
DELETE
http
DELETE /products/:id
💻 Technologies Used
React

Vite

React Router

JavaScript

HTML

CSS

Fetch API

JSON

json-server

REST API

npm

✅ Final Project Requirements
A completed Product Management application should support:

✅ Create new products

✅ View all products

✅ View individual product details

✅ Edit existing products

✅ Delete products

✅ Compare products

✅ Search products

✅ React Router navigation

✅ Dynamic product routes


✅ Responsive user interface

✅ Loading states

✅ Error handling

✅ Vite development environment

✅ Local REST API using json-server

🛍️ React Product Management App
Browse products, compare them, edit them, add your own, and remove the ones that no longer fit your store or showcase.

Happy coding! 🚀