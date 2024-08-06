import { useEffect, useState } from "react";
import { filterLocations } from "../utils/filterLocations";
import { Location } from "../interfaces/Location";
import { extractHourFromString } from "../utils/extractHourFromString";
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

      if (period) {
        const payload = {
          init: extractHourFromString(period, 0),
          end: extractHourFromString(period, 1),
        };

        const filteredLocations = filterLocations(response.data.locations, payload);
        setLocations(filteredLocations);
      } else if (!period) {
        setLocations(response.data.locations);
        return;
      }
    })();
  }, [displayClosedUnits, period]);

  function handleClickToMeet(data: { displayClosedUnits: boolean; period: string }) {
    setDisplayClosedUnits(data.displayClosedUnits);
    setPeriod(data.period);
  }

  function handleClickClear() {
    setPeriod("");
    setDisplayClosedUnits(true);
  }

  const resultsFound = locations.length;

  return { locations, handleClickToMeet, handleClickClear, resultsFound };
}
