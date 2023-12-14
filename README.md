There are 2 main folder: client and server

In visual studio code, turn on 3 terminal, 1 access client folder, 1 access serverand the last one is in the outermost file. Run these commandline:
- With client: npm i  --force
- With server: npm i
- With last one: npm i

After finish installing all npm modules that needs, in client terminal, run: npm run dev
With server terminal, run npm start

you can change your database information in server/src/config/db

ENV file is for saving Paypal client information
