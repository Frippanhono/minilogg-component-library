import "./App.css";
import { Button } from "@minilogg/buttons";
import { Badge } from "@minilogg/badges";

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
    </main>
  );
}

export default App;
