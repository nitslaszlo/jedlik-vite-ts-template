import axios from "axios";
import IEvent from "../types/IEvent";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id: string) {
    return apiClient.get("/events/" + id);
  },
  postEvent(event: IEvent) {
    return apiClient.post("/events", event);
  },
};
