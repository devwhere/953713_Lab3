import type Event from "../models/Event";

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

export function getEventByCategory(category: string): Event[] {
  const FilgeredEvents = events.filter(
    (events) => events.category === category,
  );
  return FilgeredEvents;
}

export function getAllEvents(): Event[] {
  return events;
}

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

export function addEvent(newEvent: Event): Event {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return newEvent;
}
