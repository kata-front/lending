import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});