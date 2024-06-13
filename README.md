This is the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/huang0h/c4c-challenge-fall-2024.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`



1) Instructions to run it: CD into the project directory, then type in 'npm run dev', and open `http://localhost:3000` and `http://localhost:4000`

2) Overview of the application: This application  consists of a React frontend and an Express backend. The frontend will provide a user interface for viewing, adding, and deleting partner information, while the backend will handle data storage and retrieval. The data will be stored in memory for simplicity

3) Design Decisions: I decided to keep the design the same as the sample. I made the decision to toggle the "Add Partner Info" so that the Partner form can show when you press the button and disapeer when you press the submit button 

4)Reflection of my work: 
   - React and Backend is very new for me so this was my first time working on a project including React. I learned so much such as React syntax, how backend and frontend connect, and about API
   - If I had more time I would change the design a little bit. I wish I could experiment with it and learn more about front end design
   - I ran into issues with being able to remove partners information from the screen and the partners list 
