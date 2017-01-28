# Canal Auto Rebuilders Web Application
Node.js WebSite + Server built for Canal Auto Rebuilders in Lockport, Illinois
(This readme is specifically directed to run on a ubuntu instance)

Installation of stuffz...
1. Install Node
      - Run in terminal 'sudo apt-get update', followed by 'sudo apt-install nodejs'
2. Install npm
      - Run in terminal 'sudo apt-get install npm'
3. Install mongodb
      - I used this guide to install mongodb on my system
      https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Start Database...
1. to start mongo, run in terminal 'sudo service mongod start'
2. to run the mongo shell
      - change directory to where mongo is installed, for me this is 'cd /var/lib/mongodb'
      - run in terminal 'mongod'


How to get server started...
1. Open terminal
2. Change current working directory to the CanalAutoRebuilders folder
3. run the command 'npm install' to install all dependencies
4. run the command 'npm update' to make sure everything is up to date
5. run the command 'npm start', the server is now running and listening on port 3000
6. test by opening web browser and entering the webaddress, on a local machine this is 'localhost:3000'
