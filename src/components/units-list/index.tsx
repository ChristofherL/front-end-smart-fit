import { Location } from "../../interfaces/Location";
import { Unit } from "../unit";
import styles from "./styles.module.scss";

interface ListOfUnitsProps {
  locations: Location[];
}

export function ListOfUnits({ locations }: ListOfUnitsProps) {
  console.log(locations);
  return (
    <ul className={styles.unit__listing}>
      {locations.map((location) => (
        <Unit
          key={location.id}
          {...location}
        />
      ))}
    </ul>
  );
}
