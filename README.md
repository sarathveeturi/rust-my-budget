# rust-my-budget
A personal budget and finance application used for managing and visualizing monthly trends in your personal expenses. 

# Pre-requisites
* Docker - To run the app
* google-cloud-storage-bucket
* Google cloud configuration key file 

# Instructions to setup
- Once you've the google cloud configuration key file, create a directory in `my-budget-server/env_variables`
- Paste the JSON file inside the newly created `env_variables` directory
- Create a storage bucket on google cloud
- Copy the name of the bucket and paste it in `src/main.rs` line 31 and replace the name of your bucket with "BUCKET_NAME_HERE" 

# Instruction to run

- Backend rust application has been containerized using Docker. To run the app and spin up the postgres DB, run the following command 
from root i.e. `rust-my-budget`

`docker compose up`

- Once the servers spin up and start accepting requests, go to `cd my-budget-ui` directory and run 
`npm run dev`

- This starts the front-end UI on localhost which can send user's details and let's users upload a pdf/excel file into the google cloud
bucket.

![Sample UI](my-budget-ui\src\assets\cloudstorage.png)

![File in the Google Storage Bucket](my-budget-ui\src\assets\UI.png)