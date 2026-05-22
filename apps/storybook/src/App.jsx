import "./App.css";
import { Button } from "@minilogg/buttons";

function App() {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="primary" loading>
        Loading Button
      </Button>
    </>
  );
}

export default App;
