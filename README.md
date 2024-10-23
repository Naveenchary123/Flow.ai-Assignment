project setup 

step: 1 Create a new Directory:
mkdir tracker (it create a new file)
cd tracker (its navigated to tracker file)

step: 2 initialize a project:
npm init -y (using this a package.json will be created in your project includes basic information)

step:3 install dependencies 
npm i express mongoose(express and mongodb will be installed in tour project)


step4: Run the application:
npm start

API documentation:
1 Add a New Documentaion: 
  End point: POST
  /api/transactions
  Request body: 

  {
    "type": "expense",
    "category": "glocery",
    "amount": 2200,
    "date": "2024-02-02T18:30:00.000Z",
    "description": "oiltin"
}


2. Get all Transactions
   End point: GET
   /api/transctions
   RESPONSE: Returns an array of all transactions

   [...]

3. Get Transaction by Id:
   End point: GET
   /api/transctions/:id
   RESPONSE: Returns an object for one specified id 

  {...}

4. Update Transction by Id:
   End point: PUT
   /api/transctions/:id

   Response Body:

   {
   "amound" : 50
   }

   Resposne: Returns the updated trasnction object

5.Delete Transction by Id:
  End point: DELETE
   /api/transctions/:id

  Response: Returns a message of successfully deleted

6.Get Summary of transactions:
 Endpoint: GET
 /api/summary

 Response: Returns an object containing total income, total expenses and balance

  
