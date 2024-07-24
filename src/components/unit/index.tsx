import styles from "./styles.module.scss";
import forbidenLockerroom from "../../assets/images/forbidden-lockerroom.png";
import partialFountain from "../../assets/images/partial-fountain.png";
import requiredTowel from "../../assets/images/required-towel.png";
import requiredMask from "../../assets/images/required-mask.png";

export function Unit() {
  return (
    <li className={styles.unit}>
      <strong>Aberto</strong>
      <h3>Vicente Linhares</h3>
      <span>Rua Tibúrcio Cavalcante, 1885 - Meireles Fortaleza, CE</span>
      <ul className={styles.image__list}>
        <li>
          <img src={requiredMask} />
        </li>
        <li>
          <img src={requiredTowel} />
        </li>
        <li>
          <img src={partialFountain} />
        </li>
        <li>
          <img src={forbidenLockerroom} />
        </li>
      </ul>
      <ul className={styles.schedule__list}>
        <li>
          <strong>Seg. à Sex.</strong>
          <span>06h às 22h</span>
        </li>
        <li>
          <strong>Sab.</strong>
          <span>09h às 18h</span>
        </li>
        <li>
          <strong>Dom.</strong>
          <span>Fechada</span>
        </li>
      </ul>
    </li>
  );
}
