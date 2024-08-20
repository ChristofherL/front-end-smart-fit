import { Button } from "../../atoms/button/button.component";
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
  handleFilter: (filter: LocationFilter) => void;
  handleResetFilter: () => void;
}

export function Form({ resultsFound, handleFilter, handleResetFilter }: FromProps) {
  const {
    handleSubmit,
    opened,
    setOpened,
    setPeriod,
    period: selectedPeriod,
  } = useForm(handleFilter);

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
      {periods.map((period, index) => (
        <Period
          checked={period.period === selectedPeriod}
          key={index}
          period={period.period}
          time={period.time}
          name="period"
          handleOnChange={() => setPeriod(period.period)}
        />
      ))}
      <div className={styles.units__filter}>
        <label>
          <Checkbox
            onChange={() => setOpened((prev) => !prev)}
            checked={opened}
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
          onClick={() => {
            handleResetFilter();
            setOpened(false);
            setPeriod("");
          }}
        >
          Limpar
        </Button>
      </div>
    </form>
  );
}
