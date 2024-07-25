import styles from "./styles.module.scss";
import { Location } from "../../interfaces/Location";

interface UnitProps extends Location {}

export function Unit({
  title,
  opened,
  content,
  mask,
  towel,
  fountain,
  locker_room,
  schedules,
}: UnitProps) {
  return (
    <li className={styles.unit}>
      <strong className={`${opened ? styles.open__unit : styles.closed__unit}`}>
        {opened ? "Aberta" : "Fechada"}
      </strong>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.image__list}>
        <img src={`/images/${mask}-mask.png`} />
        <img src={`/images/${towel}-towel.png`} />
        <img src={`/images/${fountain}-fountain.png`} />
        <img src={`/images/${locker_room}-lockerroom.png`} />
      </div>
      <ul className={styles.schedule__list}>
        {schedules?.map((schedule, index) => (
          <li key={index}>
            <strong>{schedule.weekdays}</strong>
            <span>{schedule.hour}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
