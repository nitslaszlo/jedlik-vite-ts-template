import { defineStore } from "pinia";
import IEvent from "../types/IEvent";
import EventService from "../services/EventService";

interface IState {
  user: string;
  events: Array<IEvent>;
  event: IEvent | null;
}

export const useEventsStore = defineStore({
  id: "eventsStore",
  state: (): IState => ({
    user: "Adam Jahr",
    events: [],
    event: null,
  }),
  getters: {
    getUser(): string {
      return this.user;
    },
    getEvents(): Array<IEvent> {
      return this.events;
    },
    getEvent(): IEvent | null {
      return this.event;
    },
  },
  actions: {
    setEvent(event: IEvent) {
      this.event = event;
    },
    addEvent(event: IEvent) {
      this.events.push(event);
    },
    async createEvent(event: IEvent) {
      return EventService.postEvent(event)
        .then(() => {
          this.addEvent(event);
          this.setEvent(event);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
