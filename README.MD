# Welcome to my shopping list app

My name is **Arad Tenenbaum**, I developed a shopping list. \
The **Frontend** is built with React with typescript, using material UI library for the design. \
The **Backend** is built with NodeJS, express with typescript. \
The **Database** I used for the task is mongoDB that is running on mongo atlas cloud.

## Run instructions

First you need to clone the project using this command:

```bash
git clone https://github.com/AradTenenbaum/ShoppingList.git
```

Next, you can go in to the folder `./ShoppingList` that was created.
There are a few options to run it:

1.  **Run as production**: If you have docker installed on your computer you can click on `start-prod.bat` and it will build the docker images and run the application on `http://127.0.0.1:80` (requirements: Docker, Windows OS)

2.  **Run as development**: Click on `start-dev.bat` and it will install the backend and frontend dependencies and run the application. The frontend will run on `http://127.0.0.1:3000` (requirements: Windows OS, NodeJS)

3.  **Run manually**: You can run cmd from each folder: `./frontend` and `./backend` and run: - From the backend: \
     a. `npm i` \
     b. `npm run dev` - From the frontend: \
     a. `npm i` \
     b. `npm start` \
    The frontend will run on `http://127.0.0.1:3000`. \
    (requirements: NodeJS)

## Extras

I added several things that are not in the requirements of the task:

1.  **Delete a product**: When you click on a product and there will be a "-" that appears near the product name. Clicking on it will decrease it's amount by 1.

2.  **Auto scroll**: When there are many categories in the list and the screen is small it will auto scroll left and right to give a nice display of all the items. When hovering with the mouse or clicking on an item it should stop for 10-15 seconds.

3.  **Settings**: There is a small settings button in the left corner. Clicking on it will open a small modal that let you turn the auto scroll off and on(This is the only setting currently)
