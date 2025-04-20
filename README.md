# 💰 dBank - Decentralized Banking App on the Internet Computer

A simple decentralized banking application built using **Motoko** and deployed on the **DFINITY Internet Computer**. This project demonstrates the basics of interacting with a blockchain via smart contracts (canisters), handling balance updates, and integrating frontend with the backend on Web3.

---

## 🚀 Tech Stack

- 🧠 **Motoko** – Smart contract language for Internet Computer
- 🌐 **DFINITY Internet Computer** – Blockchain platform for canister deployment
- ⚛️ **React** – Frontend framework
- 📜 JavaScript (JS) – Core language for frontend logic
- 🎨 **SCSS** – Styling
- 🛠️ **DFX** – DFINITY SDK for local development and deployment

---

## 🏦 Features

- View current account balance
- Top-up balance
- Withdraw amount
- Real-time interaction with Motoko canister
- Deployed and served directly from the blockchain

---

## 📸 Demo

![Screenshot 2025-04-20 171928](https://github.com/user-attachments/assets/9214912e-1140-474d-92ff-dbeaadd36d22)



---

## 🛠️ Getting Started Locally

### 1. Clone the repository


    git clone https://github.com/divyanshu3020/Web3-blockchain-banking-DApp.git

cd into the project 

    cd dbank

### 2. Install DFINITY SDK
    Follow official setup: 
    https://smartcontracts.org/docs/quickstart/quickstart.html

### 3. Start local Internet Computer replica
    # Starts the replica, running in the background
    dfx start --background

### 4. Deploy canister
    # Deploys your canisters to the replica and generates your  candid interface 
    dfx deploy

Once the job completes, your application will be available at http://localhost:4943?canisterId={asset_canister_id}.

```
(OPTIONAL)

If you have made changes to your backend canister, you can generate a new candid interface with

npm run generate

(at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run dfx deploy.)

If you are making frontend changes, you can start a development server with

npm start

Which will start a server at http://localhost:8080, proxying API requests to the replica at port 4943.

```

### 5. Run frontend
    npm install
    npm run start

## 📚 Learnings
-How to write Motoko code for handling state

-Deploying canisters on Internet Computer

-Frontend-backend integration using actors

-Decentralized app (dApp) development flow

## 🤝 Contributing
Feel free to fork, contribute, and raise issues. PRs are welcome!
If you're learning Motoko or blockchain dev, happy to collaborate.

## 🧠 Author

Divyanshu Singh

[GitHub](https://github.com/divyanshu3020) • [LinkedIn](https://www.linkedin.com/in/divyanshu-singh-1b4924254/)
