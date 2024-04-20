# Angular CRUD Application

## Description
This project is a simple Single Page Application (SPA) built with Angular, implementing CRUD (Create, Read, Update, Delete) functionalities for managing a list of items. It utilizes Angular features such as routing, directives, and services to create a responsive and user-friendly interface.

## Features
- **Single Page Application (SPA)**: Implements a single-page application architecture for seamless navigation between different views.
- **Routing**: Utilizes Angular routing to navigate between different pages including Home, Add Item, Item List, About Us, and Contact Us.
- **Directive**: Implements Angular directives for dynamic rendering of HTML elements and interaction with the DOM.
- **Services**: Uses Angular services to manage data and business logic across different components.

## Getting Started
To run this project locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sricharan666/angular-crud.git
             
2.Navigate to the project directory:
   cd angular-crud

3.Install dependencies:
   npm install

Running the Application

1.Start the JSON server to simulate the backend with mock data:
  json-server --watch db.json
2.Open a new terminal window and start the Angular development server:
  npm start
3.Open your browser and navigate to http://localhost:4200 to view the application.

Usage

Home: Displays dummy content and provides a button to navigate to the Add Item page or use the navigation bar.
Add Item: Allows users to add new items with names and descriptions and prices.
Item List: Displays a list of items with their names and descriptions and prices, along with options to edit or delete each item.

Note

About Us and Contact Us links are included in the navigation for appearance, but the corresponding pages are not implemented.