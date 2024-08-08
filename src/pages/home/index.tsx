import styles from "./styles.module.scss";
import { Form, Legend, LocationsList } from "../../components";
import { useLocations } from "../../hooks/useLocations";
import { filterLocations } from "../../utils/filterLocations";
import { extractHourFromString } from "../../utils/extractHourFromString";

export function Home() {
  const {
    locations,
    // resultsFound,
    handleClickToMeet,
    handleClickClear,
    period,
  } = useLocations();

  const filteredLocations = filterLocations(locations, {
    init: extractHourFromString(period, 0),
    end: extractHourFromString(period, 1),
  });

  return (
    <main className={styles.main__container}>
      <header className={styles.header}>
        <img src="/images/logo.svg" alt="smart fit logo" />
      </header>
      <div className={styles.main__content__container}>
        <div>
          <h1>REABERTURA SMART</h1>
          <p>
            O horário de funcionamento das nossas unidades está seguindo os
            decretos de cada município. Por isso, confira aqui se a sua unidade
            está aberta e as medidas de segurança que estamos seguindo.
          </p>
          <Form
            resultsFound={filteredLocations?.length}
            handleClickClear={handleClickClear}
            handleClickToMeet={handleClickToMeet}
          />
          <Legend />

          <LocationsList locations={filteredLocations} />
        </div>
      </div>
      <footer className={styles.footer}>
        <img src="/images/logo.svg" alt="smart fit logo" />
        <span>Todos os direitos reservados - 2020</span>
      </footer>
    </main>
  );
}
