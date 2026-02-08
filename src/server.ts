import express from "express";
import type { Request, Response } from "express";
import {
  getAllEvents,
  getEventByCategory,
  getEventById,
  addEvent,
} from "./services/EventService";
import type Event from "./models/Event";
import { get } from "node:http";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

app.get("/test", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/events", async (req, res) => {
  if (req.query.category) {
    const category = req.query.category as string;
    const filteredEvents = await getEventByCategory(category);
    res.json(filteredEvents);
  } else {
    res.json(await getAllEvents());
  }
});

app.get("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send({ message: "Event not found" });
  }
});

app.post("/events", async (req, res) => {
  const newEvent: Event = req.body;
  await addEvent(newEvent);
  res.json(newEvent);
});
