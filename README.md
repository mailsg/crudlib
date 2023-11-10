<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Author](#author)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# Bookstore API <a name="about-project"></a>

**Bookstore API** is a backend service used to perform CRUD operation with books. It is built with NodeJS and uses MongoDB as the database.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **API Endpoints to perform CRUD operations**
- **Database deployment on Mongo Atlas**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

### Setup

Clone this repository to your desired folder:

```sh  
  git clone https://github.com/mailsg/crudlib.git
  cd crudlib  
```

### Install

Install this project by executing the following commands. Since its an Open API, there is no need to set up any API keys:

```sh
  cd crudlib

  npm install

  touch .env
    `Add the following lines to the .env file`
      MONGODB_URI=`Your MongoDB-Atlas URI (mongodb+srv)`
      DATABASE_NAME=`Your MongoDB Database Name`
      COLLECTION_NAME=`Your MongoDB Collection Name`

  - Please note that the above 3 variables are mandatory for the project to run.

  - I have used Database Name as `library` and Collection Name as `books` for this project. You can use any name of your choice or use the same as mine.
  
  - The database and collection has to be created manually in MongoDB Atlas.
```

### Usage

To run the project, execute the following command:

```sh
  npm start
```

Below are the Endpoints to perform CRUD operations:
- **GET** `http://localhost:3000/api/books` - Get all books
- **GET** `http://localhost:3000/api/books/:id` - Get a book by id
- **POST** `http://localhost:3000/api/books` - Create a new book
    - **Request Body**
      ```json
      {
        "title": "Book Title",
        "author": "Book Author",
        "summary": "Book Summary"
      }
      ```
- **PUT** `http://localhost:3000/api/books/:id` - Update a book by id
    - **Request Body** (Any or all of the following)
      ```json
      {
        "title": "Book Title", 
        "author": "Book Author",
        "summary": "Book Summary"
      }
      ```
- **DELETE** `http://localhost:3000/api/books/:id` - Delete a book by id

<!-- AUTHORS -->

👤 **Sandeep Ghosh**

- GitHub: [@mailsg](https://github.com/mailsg)
- LinkedIn: [LinkedIn](https://linkedin.com/in/sandeep0912)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project consider leaving a star to the repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Thank you for giving me the opportunity to showcase my skills.   

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
