import { FormEvent, useState } from "react";
import { LocationFilter } from "../interfaces/LocationsFilter";

export function useForm(handleClickToMeet: (data: LocationFilter) => void) {
  const [period, setPeriod] = useState("");
  const [opened, setOpened] = useState(true);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const payload = {
      displayClosedUnits: opened,
      period,
    };

    handleClickToMeet(payload);
  }

  return { setPeriod, setOpened, handleSubmit };
}
