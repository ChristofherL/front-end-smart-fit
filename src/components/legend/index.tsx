import requiredTowel from "../../assets/images/required-towel.png";
import recommendedTowel from "../../assets/images/recommended-towel.png";
import requiredMask from "../../assets/images/required-mask.png";
import recommendedMask from "../../assets/images/recommended-mask.png";
import partialFountain from "../../assets/images/partial-fountain.png";
import prohibitedDrinkingFountain from "../../assets/images/forbidden-fountain.png";
import requiredLockerroom from "../../assets/images/required-lockerroom.png";
import partialLockerroom from "../../assets/images/partial-lockerroom.png";
import forbidenLockerroom from "../../assets/images/forbidden-lockerroom.png";

import styles from "./styles.module.scss";

const legendItems = [
  {
    name: "Mascara",
    icons: [
      {
        icon: requiredMask,
        description: "Obridatório",
      },
      {
        icon: recommendedMask,
        description: "Recomendado",
      },
    ],
  },
  {
    name: "Toalha",
    icons: [
      {
        icon: requiredTowel,
        description: "Obridatório",
      },
      {
        icon: recommendedTowel,
        description: "Recomendado",
      },
    ],
  },
  {
    name: "Bebedouro",
    icons: [
      {
        icon: partialFountain,
        description: "Parcial",
      },
      {
        icon: prohibitedDrinkingFountain,
        description: "Proibido",
      },
    ],
  },
  {
    name: "Bebedouro",
    icons: [
      {
        icon: requiredLockerroom,
        description: "Liberado",
      },
      {
        icon: partialLockerroom,
        description: "Parcial",
      },
      {
        icon: forbidenLockerroom,
        description: "Fechado",
      },
    ],
  },
];

export function Legend() {
  return (
    <ul className={styles.legend}>
      {legendItems.map((item) => (
        <li>
          <strong>{item.name}</strong>
          <ul className={styles.caption__images}>
            {item.icons.map((i) => (
              <li>
                <img src={i.icon} />
                <span>{i.description}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
