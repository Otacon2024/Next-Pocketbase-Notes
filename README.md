# Next.js + PocketBase Notes App Setup

This README provides step-by-step instructions for setting up and running the Next.js + PocketBase Notes App. The setup is beginner-friendly and requires a few straightforward steps to get the application up and running.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (Download from [Node.js website](https://nodejs.org/))
- A code editor (e.g., Visual Studio Code, Atom)

## Step 1: Install Dependencies

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the cloned repository's root directory.
3. Run the following command to install all required packages:

**npm install**

This will install Next.js and all other necessary modules listed in `package.json`.


## Step 2: Set Up PocketBase

1. Download the latest version of the PocketBase executable for your operating system from the [PocketBase GitHub Releases page](https://github.com/pocketbase/pocketbase/releases).
2. Place the downloaded PocketBase executable in the root directory of the cloned repository.
3. In the terminal, run the following command to start the PocketBase server:

**./pocketbase serve**

This command will start the PocketBase server on your local machine.


## Step 3: Configure PocketBase

1. Open a web browser and go to the PocketBase Admin UI at [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/).
2. Click on "Create a new collection" and name it `notes`.
3. Go to the "Fields" tab and create two fields of type "text":
- Name the first field `title`.
- Name the second field `content`.

## Running the Application

Once you have completed the above steps, your Next.js + PocketBase Notes App is set up and ready to run. To start the Next.js application, run the following command in your terminal:

**npm run dev**

This will start the Next.js development server, and you can access the app at [http://localhost:3000](http://localhost:3000).


## Conclusion

You have now successfully set up and configured the Next.js + PocketBase Notes App. If you encounter any issues or have questions, feel free to open an issue on this GitHub repository.
