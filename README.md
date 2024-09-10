# Sirma Academy Final Project - Football Tournament Breakdown

This repository contains the final project for the Sirma Academy. The goal of the project is to implement an algorithm that organizes and displays a tournament bracket, progressing from a group stage to a knockout stage, ending in a final match.

The project is focused on handling tournament data from CSV input files and parsing it to present matches in a clean and user-friendly bracket and details page.

-   The detailed task description can be found in the `task` folder.
-   Test input files are available in the `csv_test_files` folder for use in testing and validation.

## Task Overview

The objective of this project is to handle data for a knockout-style tournament. The algorithm is designed to:

1. **Parse Input Data**: Read input data from CSV files which contain match information, teams, scores, and dates. These files simulate a real-world tournament setup (test files simulate the UEFA Euro 2024).

    - **Data Parsing**: The CSV files are processed and transformed into a structured object, ensuring the data is formatted in a way that is easy for developers to work with.
    - **Data Validation**: Each file is checked to ensure it contains all the necessary fields, guaranteeing the integrity and completeness of the data.
    - **Date Handling**: A wide range of common date formats (e.g., `MM/DD/YYYY`, `DD/MM/YYYY`, `YYYY-MM-DD`, and others) are supported and converted into a consistent standardized format.

2. **Group Stage and Knockout Rounds**:
    - **Group Stage**: The tournament begins with a group stage, where teams are divided into groups and compete in matches. The group winners and runners-up advance to the knockout stage. Matches in the group stages are organized by date.
    - **Knockout Stage**: In the knockout stage, 16 teams are paired in each round, and the winners advance to the next round. This process continues until the final match determines the tournament champion.

## Live Application

You can view the deployed app [here](https://football-tournament-breakdown.vercel.app/).

## Running the App Locally

To run this project on your local machine, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-repo/sirma-final-project.git
    cd sirma-final-project
    ```
2. **Install Dependencies: Ensure you have `npm` or `yarn` installed, then run:**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Start the Development Server**
    ```bash
    npm run dev
    ```
4. **Test the App** - go to the url shown in the console and use the provided CSV files located in the `csv_test_files` folder to test the app.
