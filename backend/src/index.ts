import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req, res ) => {
    res.json({message: "Hello!"});
});

app.listen(7001, ()=> {
    console.log("Server started on localhost 7001")
});