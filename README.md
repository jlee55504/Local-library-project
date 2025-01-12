# Local Library Project

A web application that uses several databases to display the information from a local neighborhood library.

## Features
  - **Account Management:** Lists the library's account information.
  - **Book Management:** Lists the library's book information.
  - **Authors Management:** Lists the library's authors information.
  - **User-friendly Interface:** Simple, easy to navigate interface.

## Technologies Used
  * **JavaScript:** Core programming language (JavaScript ES6)
  * **HTML:** Visually displays content of the application
  * **Bootstrap:** Provides visual styling for the application
  * **Chai:** Unit testing framework

## Screenshot

![Alt text](https://github.com/jlee55504/Local-library-project/blob/main/imgs/Local%20library%20project%20home%20screen%20image.png?raw=true  "Local library project home page")

## Getting Started
  ### Prerequisites
    - Node Package Manager (NPM)
  
  ### Installation
    1. Clone the repository:
      ```
        git clone https://github.com/jlee55504/Local-library-project.git
      ```
    2. Navigate to the project directory:
       ```
        cd Local-library-project
       ```
    3. Build the project:
       ```
        npm install
       ```
    4. Run the application:
       ```
        npm start
       ```

## Usage
Upon running the application, you'll be presented with a home screen and 3 links:
  1. Overall Stats
  2. Stats by Book
  3. Stats by Account

Click the appropriate link to see the desired information.

## Code Structure
  - **index.html:** Application home page
  - **books.html:** Web page displaying the library's book information
  - **accounts.html:** Web page displaying the library's account information
  - **src/accounts.js:** Handles the account web page's functionality
  - **src/books.js:** Handles the book web page's functionality
  - **src/home.js:** Handles the home page's functionality

## Acknowledgments
  - This project was built for the Chegg Skill's software engineering program
  - This project contains extra commented-out code in functions to use 2 datasets instead of 1 to get the same correct data
