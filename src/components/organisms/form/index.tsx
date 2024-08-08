import { Button } from "../../atoms/button";
import { Period } from "../../molecules/period";
import styles from "./styles.module.scss";
import { Checkbox } from "../../atoms/checkbox";
import { useForm } from "../../../hooks/useForm";
import { LocationFilter } from "../../../interfaces/LocationsFilter";

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
  handleClickToMeet: (data: LocationFilter) => void;
  handleClickClear: () => void;
}

export function Form({ resultsFound, handleClickToMeet, handleClickClear }: FromProps) {
  const { setOpened, setPeriod, handleSubmit } = useForm(handleClickToMeet);

  return (
    <form
      className={styles.form}
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
          period={period.period}
          time={period.time}
          name="period"
          value={period.time}
          handleOnChange={(ev) => setPeriod(ev.target.value)}
        />
      ))}
      <div className={styles.units__filter}>
        <label>
          <Checkbox onChange={() => setOpened((prev) => !prev)} />
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
