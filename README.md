# TxTBx---Social-Media-Post-Creator
Generate aesthetic posts for a variety of social media platforms
## Installation

1. Clone the repository to your local machine.
    
   ```bash
   git clone https://github.com/lord-benjamin/TxTBx---Social-Media-Post-Creator.git
   ```

2. Navigate to the project directory.

   ```bash
   cd TxTBx---Social-Media-Post-Creator
   ```

3. Install the required dependencies using NPM.

   ```bash
   npm install
   ```
   

## Starting the Development Server

To start the development server, run the following command in the project directory:

    npm start
    
This will start the server and it will be accessible at [`http://localhost:3000`](http://localhost:3000).

## Extracting `node_modules` from Git Ignore

The `node_modules` folder is typically included in the `.gitignore` file to prevent it from being uploaded to the Git repository. However, if you want to extract the `node_modules` folder, you can use the following steps:

1. Install the required dependencies using NPM as described above.

2. Install the `npm-force-resolutions` package globally using the following command:

    ```bash
    npm install -g npm-force-resolutions
    ```
    
3. Run the following command to extract the `node_modules` folder:

    ```bash
    npm-force-resolutions
    ```
    
This will extract the `node_modules` folder to your local machine, but it will not be uploaded to the Git repository.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.
