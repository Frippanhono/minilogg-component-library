import { Tabs } from "@minilogg/tabs";
import { Badge } from "@minilogg/badges";
import { Input } from "@minilogg/inputs";

// Exempel på tabbar för demo
export default function TabsDemo() {
  const tabItems = [
    {
      label: "Översikt",
      icon: "🌼",
      content: (
        <div className="dashboard">
          <div className="dashboard__stats">
            <div className="stat">
              <span className="stat__label">Barn</span>
              <span className="stat__value">24</span>
              <Badge variant="info">3 avdelningar</Badge>
            </div>
            <div className="stat">
              <span className="stat__label">Närvaro idag</span>
              <span className="stat__value">21</span>
              <Badge variant="success">88%</Badge>
            </div>
            <div className="stat">
              <span className="stat__label">Aktiviteter</span>
              <span className="stat__value">5</span>
              <Badge variant="info">denna vecka</Badge>
            </div>
            <div className="stat">
              <span className="stat__label">Olästa meddelanden</span>
              <span className="stat__value">2</span>
              <Badge variant="warning">från vårdnadshavare</Badge>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Dagens aktiviteter",
      icon: "🎨",
      content: (
        <ul className="activity">
          <li>
            <Badge variant="info">08:30</Badge> Samling och morgonsång
          </li>
          <li>
            <Badge variant="success">09:15</Badge> Utflykt till skogen – tema
            "Höstens färger"
          </li>
          <li>
            <Badge variant="info">11:30</Badge> Lunch och vila
          </li>
          <li>
            <Badge variant="warning">14:00</Badge> Skapande verkstad – kom ihåg
            förkläden
          </li>
        </ul>
      ),
    },
    {
      label: "Barngrupp",
      icon: "🧒",
      content: (
        <table className="table">
          <thead>
            <tr>
              <th>Namn</th>
              <th>Avdelning</th>
              <th>Närvaro</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Alma Andersson",
                department: "Solrosen",
                status: { label: "På plats", variant: "success" },
              },
              {
                name: "Bruno Berg",
                department: "Solrosen",
                status: { label: "Sjukanmäld", variant: "warning" },
              },
              {
                name: "Cleo Cederlund",
                department: "Maskrosen",
                status: { label: "På plats", variant: "success" },
              },
              {
                name: "Doris Dahl",
                department: "Smörblomman",
                status: { label: "Ledig", variant: "info" },
              },
            ].map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.department}</td>
                <td>
                  <Badge variant={row.status.variant}>{row.status.label}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      label: "Inställningar",
      icon: "⚙️",
      content: (
        <div className="form-grid">
          <Input label="Förskola" defaultValue="Lilla Ekens förskola" />
          <Input label="Kontakt" defaultValue="rektor@lillaeken.se" />
        </div>
      ),
    },
  ];

  return <Tabs tabs={tabItems} />;
}
