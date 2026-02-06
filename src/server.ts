import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;
app.use(express.json());

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Sports",
    title: "Football Match",
    description: "Premier League football match",
    location: "Manchester",
    date: "2021-07-15",
    time: "15:00",
    petsAllowed: false,
    organizer: "Manchester United",
  },
  {
    id: 3,
    category: "Theater",
    title: "Shakespeare Play",
    description: "A classic Shakespeare production",
    location: "West End, London",
    date: "2021-08-01",
    time: "19:30",
    petsAllowed: false,
    organizer: "Royal Shakespeare Company",
  },
  {
    id: 4,
    category: "Festival",
    title: "Jazz Festival",
    description: "International jazz music festival",
    location: "Edinburgh",
    date: "2021-08-10",
    time: "18:00",
    petsAllowed: true,
    organizer: "Edinburgh Festivals",
  },
  {
    id: 5,
    category: "Art",
    title: "Modern Art Exhibition",
    description: "Contemporary art exhibition",
    location: "Birmingham",
    date: "2021-09-01",
    time: "10:00",
    petsAllowed: false,
    organizer: "Birmingham Museum",
  },
  {
    id: 6,
    category: "Food",
    title: "Food Festival",
    description: "Street food and culinary festival",
    location: "Bristol",
    date: "2021-09-20",
    time: "12:00",
    petsAllowed: true,
    organizer: "Bristol Food Network",
  },
];

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

app.get("/events", (req, res) => {
  const category = req.query.category;
  const filterdEvents = events.filter((event) => event.category === category);
  res.send(filterdEvents);
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find((event) => event.id === id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send({ message: "Event not found" });
  }
});

app.post("/events", (req, res) => {
  const newEvent: Event = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.json(newEvent);
});
