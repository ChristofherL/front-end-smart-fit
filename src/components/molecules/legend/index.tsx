import styles from "./styles.module.scss";

const legendItems = [
  {
    name: "Mascara",
    icons: [
      {
        icon: "/images/required-mask.png",
        description: "Obridatório",
      },
      {
        icon: "/images/recommended-mask.png",
        description: "Recomendado",
      },
    ],
  },
  {
    name: "Toalha",
    icons: [
      {
        icon: "/images/required-towel.png",
        description: "Obridatório",
      },
      {
        icon: "/images/recommended-towel.png",
        description: "Recomendado",
      },
    ],
  },
  {
    name: "Bebedouro",
    icons: [
      {
        icon: "/images/partial-fountain.png",
        description: "Parcial",
      },
      {
        icon: "/images/not_allowed-fountain.png",
        description: "Proibido",
      },
    ],
  },
  {
    name: "Vestiários",
    icons: [
      {
        icon: "/images/allowed-lockerroom.png",
        description: "Liberado",
      },
      {
        icon: "/images/partial-lockerroom.png",
        description: "Parcial",
      },
      {
        icon: "/images/closed-lockerroom.png",
        description: "Fechado",
      },
    ],
  },
];

export function Legend() {
  return (
    <ul className={styles.legend}>
      {legendItems.map((item, itemIndex) => (
        <li key={itemIndex}>
          <strong>{item.name}</strong>
          <ul className={styles.caption__images}>
            {item.icons.map((icon, iconIndex) => (
              <li key={iconIndex}>
                <img src={icon.icon} />
                <span>{icon.description}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
