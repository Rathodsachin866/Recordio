# Recordio (Currently Working)

Recordio is a full-stack application with **client (React)** and **server (Node.js + TypeScript)** components.  
Follow this guide to run the project locally or with Docker.

---

## 🚀 Git Workflow

```bash
# Switch to main and update
git checkout main
git pull origin main

# Create new branch called development
git checkout -b development

# Push the new branch to GitHub
git push -u origin development

Note : Node-js and Docker Must be installed in your local machine
Docker
💻 Run Locally
# Step 1 – Clone the repository
git clone https://github.com/Rathodsachin866/Recordio_project.git

# Step 2 – Start the client

cd client
npm install
npm start

# Step 3 – Start the server

cd server
npm install
tsc -b
node src/index.js


🐳 Run with Docker (Optional)
docker-compose up --build


📂 Project Structure

Recordio_project/
│── client/       # React frontend
│── server/       # Node.js backend (TypeScript)
│── README.md     # Documentation


📌 Branching Strategy
main → Stable production branch

development → Active development branch

feature/* → Feature-specific branches



🤝 Contributing
Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit (git commit -m "Add feature")

Push (git push origin feature-name)

Open a Pull Request
