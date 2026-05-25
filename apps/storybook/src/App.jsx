import "./App.css";
import { Button } from "@minilogg/buttons";
import { Badge } from "@minilogg/badges";
import { MealStatusSelector } from "@minilogg/meal-status-selector";

function App() {
  return (
    <main className="app__main">
      <section className="section">
        <h2 className="section__title">Buttons</h2>

        <div className="section__row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>

        <div className="section__row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section id="badges" className="section">
        <h2 className="section__title">Badges</h2>
        <div className="section__row">
          <Badge>Neutral</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      <section id="meal-status" className="section">
        <h2 className="section__title">Meal Status Selector</h2>
        <p className="section__hint">
          Horisontell väljare för att rapportera hur en måltid gick. Stora
          touch-ytor, tydligt vald-state och stöd för tangentbord.
        </p>
        <div style={{ maxWidth: 520 }}>
          <MealStatusSelector
            defaultValue="bra"
            onChange={(v) => console.log(`Måltid markerad som: ${v}`)}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
