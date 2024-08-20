import { FormEvent, useState } from "react";
import { LocationFilter } from "../interfaces/LocationsFilter";

export function useForm(handleFilter: (filters: LocationFilter) => void) {
  const [period, setPeriod] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const payload = {
      opened,
      period,
    };

    handleFilter(payload);
  }

  return {
    handleSubmit,
    opened,
    setOpened,
    setPeriod,
    period,
  };
}
