import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "..", "dist");

const leads = [];

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.post("/api/lead", (req, res) => {
  const { name, phone } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ error: "name and phone are required" });
  }

  const lead = {
    id: Date.now(),
    name,
    phone,
    createdAt: new Date().toISOString()
  };

  leads.push(lead);
  return res.json({ ok: true, lead });
});

app.get("/api/leads", (req, res) => {
  res.json(leads);
});

if (fs.existsSync(path.join(distPath, "index.html"))) {
  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ error: "Not found" });
    }
    return res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
