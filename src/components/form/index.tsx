import { Button } from "../button";
import { Period } from "../period";
import styles from "./styles.module.scss";

const periods = [
  {
    period: "Manhã",
    time: "06:00 às 12:00",
  },
  {
    period: "Tarde",
    time: "12:01 às 18:00",
  },
  {
    period: "Noite",
    time: "18:01 às 23:00",
  },
];

export function Form() {
  return (
    <form className={styles.form}>
      <div>
        <img
          src="../public/images/icon-hour.png"
          alt="clock"
        />
        <span>Horário</span>
      </div>
      <h2>Qual periodo quer treinar?</h2>
      {periods.map((period) => (
        <Period
          period={period.period}
          time={period.time}
        />
      ))}
      <div className={styles.units__filter}>
        <label>
          <input type="checkbox" />
          Exibir unidades fechadas
        </label>
        <span>
          Resultados encontrados: <strong className={styles.results__found}>0</strong>
        </span>
      </div>
      <div>
        <Button>Encontrar unidades</Button>
        <Button variant="scondary">Limpar</Button>
      </div>
    </form>
  );
}
