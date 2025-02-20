import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/save", (req: Request, res: Response): any => {
  const data = req.body;

  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, existingData) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data file" });
    }

    let jsonData = [];

    try {
      jsonData = JSON.parse(existingData);
    } catch (parseError) {
      console.error("Error parsing JSON: ", parseError);
    }
    jsonData.push(data);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to write to data file " });
      }
      res
        .status(200)
        .json({ message: "Data saved successfully.", id: data.id });
    });
  });
});

app.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, existingData) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data file" });
    }
    let jsonData = [];
    try {
      jsonData = JSON.parse(existingData);
    } catch (parseError) {
      console.error("Error parsing JSON", parseError);
    }

    const data = jsonData.find((item: any) => item.id === id);
    if (!data) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({ data });
  });
});

app.listen(3000, () => console.log("backend is running on port 3000"));
