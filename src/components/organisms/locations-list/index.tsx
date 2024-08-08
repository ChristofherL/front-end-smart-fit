import { Location as ILocation } from "../../../interfaces/Location";
import { Location } from "../../molecules/location";
import styles from "./styles.module.scss";

interface LocationsListProps {
  locations: ILocation[];
}

export function LocationsList({ locations }: LocationsListProps) {
  return (
    <ul className={styles.locations__list}>
      {locations.map((location) => (
        <Location
          key={location.id}
          {...location}
        />
      ))}
    </ul>
  );
}
