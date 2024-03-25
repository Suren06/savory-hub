import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URL as string, {
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      // You can choose to handle the error differently based on your application's requirements
      process.exit(1); // Exit the process with a non-zero exit code to indicate failure
    }
  }
  
connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req, res ) => {
    res.json({message: "Hello!"});
});

app.listen(7001, ()=> {
    console.log("Server started on localhost 7001")
});