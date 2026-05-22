import "./App.css";
import { Button } from "@minilogg/buttons";

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
    </main>
  );
}

export default App;

