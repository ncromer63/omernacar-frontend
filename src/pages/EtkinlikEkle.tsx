import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../types/campus-event";
import EventForm from "../components/forms/EventForm";

const emptyData: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  capacity: "",
  description: "",
};

export default function EtkinlikEkle() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <EventForm
      initialData={emptyData}
      submitText="Kaydet"
      onSubmit={(data) => {
        addEvent(data);
        navigate("/admin");
      }}
    />
  );
}
