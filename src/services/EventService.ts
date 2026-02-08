import type Event from "../models/Event";
import {
  getAllEvents as allEvents,
  getEventByCategory as eventByCategory,
  getEventById as eventById,
  addEvent as addNewEvent,
} from "../repositories/EventRepository";

export function getEventByCategory(category: string): Promise<Event[]> {
  return eventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return eventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return addNewEvent(newEvent);
}
