import "./App.css";
import { Button } from "@minilogg/buttons";
import { Badge } from "@minilogg/badges";
import { MealStatusSelector } from "@minilogg/meal-status-selector";
import { Navbar } from "@minilogg/navbar";

function App() {
  return (
    <main className="app__main">
      <section id="navbar" className="section">
        <h2 className="section__title">Navbar</h2>
        <p className="section__hint">
          Navigeringsmeny som visas högst upp på sidan i desktop och fast längst
          ner i mobilvy. Stödjer ikoner, avatarer och en markerad aktiv länk.
        </p>

        <h3 className="section__subtitle">Desktopvy</h3>
        <Navbar />

        <h3 className="section__subtitle">Mobilvy</h3>
        <div className="phone-frame" aria-label="Förhandsvisning i mobilvy">
          <div className="phone-frame__notch" aria-hidden="true" />
          <div className="phone-frame__screen">
            <div className="phone-frame__content">
              <p className="phone-frame__placeholder">
                Innehåll i appen visas här. Navigeringen är fast längst ner så
                den alltid är inom tummens räckhåll.
              </p>
            </div>
            <div className="phone-frame__navbar">
              <Navbar />
            </div>
          </div>
        </div>
      </section>

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
