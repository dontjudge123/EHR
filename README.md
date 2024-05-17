# MedVault EHR Data Visualization

This project is a two-tier web application designed to visualize health data encoded in FHIR (Fast Healthcare Interoperability Resources) format. It includes a backend server for data management and a frontend client for data visualization using D3.js.

## Features

- **Backend:**
  - Developed using Node.js and Express.js.
  - Provides RESTful APIs to interact with FHIR data.
  - Uses MongoDB for storing health records.

- **Frontend:**
  - Built with HTML, CSS, and JavaScript.
  - Utilizes D3.js for data visualization.
  - Interacts with the backend to fetch and post data.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Deployment with GitHub Codespaces](#deployment-with-github-codespaces)
7. [Contributing](#contributing)
8. [License](#license)

## Project Structure

```
medvault/
├── backend/
│   ├── models/
│   │   └── Patient.js
│   ├── routes/
│   │   └── patientRoutes.js
│   ├── app.js
│   └── config.js
├── frontend/
│   ├── index.html
│   └── script.js
├── .devcontainer/
│   └── devcontainer.json
├── Dockerfile
└── README.md
```

## Prerequisites

- Node.js
- MongoDB
- GitHub Codespaces (optional, for cloud-based development environment)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dontjudge123/EHR.git
   cd EHR
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `config.js` file and add your MongoDB URI and desired port:
     ```javascript
     module.exports = {
       mongoURI: "your_mongodb_connection_string",
       port: 3000
     };
     ```
   - Start the backend server:
     ```bash
     node app.js
     ```

3. **Frontend Setup:**
   - Ensure you are in the project root directory:
     ```bash
     cd ../frontend
     ```
   - Open `index.html` in a web browser to view the application.

## Usage

1. **Retrieve all patients:**
   - Send a GET request to `http://localhost:3000/api/patients`.

2. **Post a new patient:**
   - Send a POST request with a JSON body to `http://localhost:3000/api/patients`. Example JSON:
     ```json
     {
       "id": "example-id",
       "name": [{"given": ["John"], "family": "Doe"}],
       "gender": "male",
       "birthDate": "1980-01-01"
     }
     ```

3. **View Visualization:**
   - Open `frontend/index.html` in a web browser.
   - The chart will visualize the number of patients by gender using D3.js.

## API Endpoints

- **GET /api/patients**
  - Retrieves all patient records.

- **POST /api/patients**
  - Creates a new patient record.

## Deployment with GitHub Codespaces

1. **Configure GitHub Codespaces:**

   - Ensure your repository has a `.devcontainer` directory with a `devcontainer.json` file and a `Dockerfile`.

   - Example `devcontainer.json`:
     ```json
     {
       "name": "MedVault EHR",
       "dockerFile": "Dockerfile",
       "appPort": [3000, 3001]
     }
     ```

   - Example `Dockerfile`:
     ```dockerfile
     FROM node:14

     WORKDIR /usr/src/app

     COPY package*.json ./

     RUN npm install

     COPY . .

     EXPOSE 3000
     CMD [ "node", "backend/app.js" ]
     ```

2. **Launch Codespaces:**

   - Navigate to your repository on GitHub.
   - Click on the `Code` button and select `Open with Codespaces`.
   - Codespaces will set up the environment based on the `devcontainer.json` and `Dockerfile`.
   - Once set up, the application should be running, and you can access it via the provided port.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

This README file provides a comprehensive guide on how to set up, run, and use the MedVault EHR project, including the use of GitHub Codespaces for development.
