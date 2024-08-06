import { FormEvent, useRef, useState } from "react";
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

interface FromProps {
  resultsFound: number;
  handleClickToMeet: (data: { displayClosedUnits: boolean; period: string }) => void;
  handleClickClear: () => void;
}

export function Form({ resultsFound, handleClickToMeet, handleClickClear }: FromProps) {
  const [period, setPeriod] = useState("");
  const [opened, setOpened] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const payload = {
      displayClosedUnits: opened,
      period,
    };

    handleClickToMeet(payload);
  }

  return (
    <form
      className={styles.form}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div>
        <img
          src="/images/icon-hour.png"
          alt="clock"
        />
        <span>Horário</span>
      </div>
      <h2>Qual periodo quer treinar?</h2>
      {periods.map((period) => (
        <Period
          value={period.time}
          period={period.period}
          time={period.time}
          name="period"
          onChange={(ev) => setPeriod(ev.target.value)}
        />
      ))}
      <div className={styles.units__filter}>
        <label>
          <input
            type="checkbox"
            name="displayClosedUnits"
            onChange={() => setOpened((prev) => !prev)}
          />
          Exibir unidades fechadas
        </label>
        <span>
          Resultados encontrados: <strong className={styles.results__found}>{resultsFound}</strong>
        </span>
      </div>
      <div>
        <Button>Encontrar unidades</Button>
        <Button
          variant="scondary"
          type="button"
          onClick={handleClickClear}
        >
          Limpar
        </Button>
      </div>
    </form>
  );
}
