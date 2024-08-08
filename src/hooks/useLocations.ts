import { useEffect, useState } from "react";
import { Location } from "../interfaces/Location";
import axios, { AxiosResponse } from "axios";
import { SmartFitApiResponse } from "../interfaces/SmartFitApiResponse";

export function useLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [displayClosedUnits, setDisplayClosedUnits] = useState(true);
  const [period, setPeriod] = useState("");

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<SmartFitApiResponse> = await axios.get(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      );
      setLocations(response.data.locations);
    })();
  }, []);

  function handleClickToMeet(data: { displayClosedUnits: boolean; period: string }) {
    // setDisplayClosedUnits(data.displayClosedUnits);
    setPeriod(data.period);
  }

  function handleClickClear() {
    setPeriod("");
    setDisplayClosedUnits(true);
  }

  const resultsFound = locations.length;

  return {
    locations,
    handleClickToMeet,
    handleClickClear,
    resultsFound,
    displayClosedUnits,
    period,
  };
}
