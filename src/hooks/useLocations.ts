import { useEffect, useState } from "react";
import { Location } from "../interfaces/Location";
import axios, { AxiosResponse } from "axios";
import { SmartFitApiResponse } from "../interfaces/SmartFitApiResponse";
import { extractHourFromString } from "../utils/extractHourFromString";
import { filterLocations } from "../utils/filterLocations";
import { LocationFilter } from "../interfaces/LocationsFilter";

export function useLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [period, setPeriod] = useState("");
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<SmartFitApiResponse> = await axios.get(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      );
      setLocations(response.data.locations);
    })();
  }, []);

  function handleFilter(filter: LocationFilter) {
    setPeriod(filter.period);
    setOpened(filter.opened);
  }

  function handleResetFilter() {
    setPeriod("");
    setOpened(false);
  }

  const filteredLocations = filterLocations(locations, {
    start: extractHourFromString(period, 0),
    end: extractHourFromString(period, 1),
  });

  function filterOpenOrClosedUnits(locations: Location[], opened: boolean) {
    return locations.filter((location) => (opened ? !location.opened : location));
  }

  return {
    locations: filterOpenOrClosedUnits(period ? filteredLocations : locations, opened),
    handleFilter,
    handleResetFilter,
    opened,
    setOpened,
  };
}
