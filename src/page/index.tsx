import styles from "./styles.module.scss";
import { Form, Legend, Unit } from "../components";
import { useEffect, useState } from "react";
import { Location } from "../interfaces/Location";
import { smartFitService } from "../service/SmartFitService";

export function Page() {
  const [units, setUnits] = useState<Location[]>([]);

  useEffect(() => {
    (async () => {
      const allLocations = await smartFitService.getUnits();
      setUnits(allLocations);
    })();
  }, []);

  return (
    <main className={styles.main__container}>
      <header className={styles.header}>
        <img
          src="/images/logo.svg"
          alt="smart fit logo"
        />
      </header>
      <div className={styles.main__content__container}>
        <div>
          <h1>REABERTURA SMART FIT</h1>
          <p>
            O horário de funcionamento das nossas unidades está seguindo os decretos de cada
            município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança
            que estamos seguindo.
          </p>
          <Form />
          <Legend />
          <ul className={styles.unit__listing}>
            {units.map((unit) => (
              <Unit
                key={unit.id}
                {...unit}
              />
            ))}
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <img
          src="/images/logo.svg"
          alt="smart fit logo"
        />
        <span>Todos os direitos reservados - 2020</span>
      </footer>
    </main>
  );
}
