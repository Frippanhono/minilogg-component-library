import "./App.css";
import { useState } from "react";
import { Button } from "@minilogg/buttons";
import { Badge } from "@minilogg/badges";
import { MealStatusSelector } from "@minilogg/meal-status-selector";
import { Navbar } from "@minilogg/navbar";
import { DepartmentOverviewCard } from "@minilogg/department-overview-card";
import { ChildCard } from "@minilogg/child-card";
import { PostCard } from "@minilogg/cards";
import { TeacherCard } from "@minilogg/teacher-card";
import { toast, Toaster } from "sonner";
import { WeeklySchedule } from "@minilogg/weekly-schedule";
import { Input, Textarea } from "@minilogg/inputs";
import { Modal } from "@minilogg/modals";
import { ToastProvider } from "@minilogg/toasts";
import { MessageCard, NoticeCard } from "@minilogg/message-card";
import { Dropdown } from "@minilogg/dropdowns";
// import { Tabs } from "@minilogg/tabs";
import TabsDemo from "./TabsDemo";

// SVG-placeholder: höstlöv med gröna stövlar (för "Senaste inlägg"-kortet).
const FOREST_POST_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stop-color="#d97706"/>
          <stop offset="60%" stop-color="#92400e"/>
          <stop offset="100%" stop-color="#451a03"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#bg)"/>
      <g fill="#f59e0b" opacity="0.85">
        <ellipse cx="30" cy="40" rx="22" ry="12" transform="rotate(-25 30 40)"/>
        <ellipse cx="170" cy="60" rx="20" ry="11" transform="rotate(20 170 60)"/>
        <ellipse cx="50" cy="170" rx="24" ry="13" transform="rotate(15 50 170)"/>
        <ellipse cx="160" cy="160" rx="22" ry="12" transform="rotate(-30 160 160)"/>
      </g>
      <g fill="#fbbf24" opacity="0.75">
        <ellipse cx="90" cy="30" rx="18" ry="10" transform="rotate(10 90 30)"/>
        <ellipse cx="20" cy="110" rx="20" ry="11" transform="rotate(-40 20 110)"/>
        <ellipse cx="180" cy="120" rx="18" ry="10" transform="rotate(30 180 120)"/>
      </g>
      <g transform="translate(70 80)">
        <path d="M5 10 Q5 0 15 0 L25 0 Q35 0 35 10 L35 60 Q35 75 25 75 L15 75 Q5 75 5 60 Z" fill="#365314"/>
        <path d="M40 10 Q40 0 50 0 L60 0 Q70 0 70 10 L70 60 Q70 75 60 75 L50 75 Q40 75 40 60 Z" fill="#365314"/>
        <ellipse cx="20" cy="78" rx="18" ry="6" fill="#1c1917"/>
        <ellipse cx="55" cy="78" rx="18" ry="6" fill="#1c1917"/>
      </g>
    </svg>`,
  );

// SVG-placeholder: penslar/färgklickar för andra exempelinlägget.
const PAINT_POST_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill="#fef3c7"/>
      <circle cx="55" cy="70" r="32" fill="#ef4444" opacity="0.85"/>
      <circle cx="140" cy="85" r="28" fill="#3b82f6" opacity="0.85"/>
      <circle cx="95" cy="140" r="34" fill="#10b981" opacity="0.85"/>
      <circle cx="160" cy="150" r="20" fill="#f59e0b" opacity="0.9"/>
      <circle cx="35" cy="150" r="18" fill="#8b5cf6" opacity="0.85"/>
    </svg>`,
  );

const scheduleEvents = [
  {
    day: "mon",
    start: "08:30",
    end: "09:15",
    title: "Samling & morgonsång",
    tone: "info",
  },
  {
    day: "mon",
    start: "11:30",
    end: "12:30",
    title: "Lunch och vila",
  },
  {
    day: "tue",
    start: "09:00",
    end: "11:00",
    title: "Utflykt – skogen",
    description: 'Tema "Höstens färger"',
    tone: "success",
  },
  {
    day: "wed",
    start: "10:00",
    end: "11:00",
    title: "Utevistelse på gården",
  },
  {
    day: "wed",
    start: "14:00",
    end: "15:30",
    title: "Skapande verkstad",
    description: "Kom ihåg förkläden",
    tone: "warning",
    onClick: () => toast.info("Öppnar Skapande verkstad"),
  },
  {
    day: "thu",
    start: "09:30",
    title: "Sångsamling",
    tone: "info",
  },
  {
    day: "fri",
    start: "13:00",
    end: "14:00",
    title: "Filmstund",
  },
];

function App() {
  const [name, setName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ToastProvider position="top-right">
      <div className="app__main">
        <header className="app__hero">
          <h1>MiniLogg Components Library</h1>
          <nav className="app__hero-toc" aria-label="Komponenter">
            <span className="app__hero-intro">
              En samling React-komponenter:
            </span>
            {[
              { href: "#navbar", label: "navbar", variant: "success" },
              { href: "#components", label: "buttons", variant: "info" },
              {
                href: "#meal-status",
                label: "meal-status-selector",
                variant: "success",
              },
              { href: "#badges", label: "badges", variant: "success" },
              { href: "#cards", label: "cards", variant: "info" },
              {
                href: "#department-overview",
                label: "department-overview-card",
                variant: "success",
              },
              { href: "#child-card", label: "child-card", variant: "success" },
              {
                href: "#teacher-card",
                label: "teacher-card",
                variant: "success",
              },
              {
                href: "#message-card",
                label: "message-card",
                variant: "success",
              },
              { href: "#dropdown-tabs", label: "dropdowns", variant: "info" },
              { href: "#dropdown-tabs", label: "tabs", variant: "info" },
              {
                href: "#weekly-schedule",
                label: "weekly-schedule",
                variant: "success",
              },
              { href: "#forms", label: "inputs", variant: "success" },
              { href: "#feedback", label: "modals", variant: "info" },
              { href: "#feedback", label: "toasts", variant: "info" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="app__hero-toc-link"
              >
                <Badge variant={item.variant}>{item.label}</Badge>
              </a>
            ))}
          </nav>
        </header>

        <Toaster richColors position="top-right" />
        <section id="navbar" className="section">
          <h2 className="section__title">Navbar</h2>
          <p className="section__hint">
            Navigeringsmeny som visas högst upp på sidan i desktop och fast
            längst ner i mobilvy. Stödjer ikoner, avatarer och en markerad aktiv
            länk.
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

        <section id="cards" className="section">
          <h2 className="section__title">Cards</h2>
          <p className="section__hint">
            Generella kort som grupperar relaterat innehåll. Med modifieraren
            <code> fc-card--row </code>kan ett kort visa en bild till vänster
            och innehåll till höger – passar t.ex. för en "Senaste
            inlägg"-lista.
          </p>

          <h3 className="section__subtitle">Senaste inlägg</h3>
          <div className="stack-cards">
            {[
              {
                id: "forest",
                image: FOREST_POST_IMAGE,
                imageAlt: "Höstlöv och gröna stövlar i skogen",
                title: "Utflykt till skogen – vad vi hittade bland löven!",
                date: "23 april",
              },
              {
                id: "paint",
                image: PAINT_POST_IMAGE,
                imageAlt: "Färgglada penseldrag och färgklickar",
                title: "Måleri på avdelningen – färgglada konstverk",
                date: "18 april",
              },
            ].map((post) => (
              <PostCard
                key={post.id}
                image={post.image}
                imageAlt={post.imageAlt}
                title={post.title}
                date={post.date}
                href="#cards"
                onClick={() => toast.info(`Öppnar: ${post.title}`)}
              />
            ))}
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

        <section id="department-overview" className="section">
          <h2 className="section__title">DepartmentOverviewCard</h2>
          <p className="section__hint">
            Hero/header-kort som presenterar en avdelning med namn, antal
            inskrivna barn, antal pedagoger och aktuellt tema.
          </p>
          {[
            {
              id: "snackan",
              name: "Snäckan",
              childrenCount: 16,
              teachersCount: 3,
              theme: "Färger och former",
            },
          ].map((dept) => (
            <DepartmentOverviewCard
              key={dept.id}
              name={dept.name}
              childrenCount={dept.childrenCount}
              teachersCount={dept.teachersCount}
              theme={dept.theme}
            />
          ))}
        </section>

        <section id="child-card" className="section">
          <h2 className="section__title">ChildCard</h2>
          <p className="section__hint">
            Pedagogiskt kort för att presentera ett barn med namn, avdelning,
            status och avatar.
          </p>
          <div className="stack-cards">
            {[
              {
                id: "alma",
                name: "Alma Andersson",
                department: "Solrosen",
                status: "present",
                guardians: ["Anja Andersson", "Per Andersson"],
                onClick: () => toast.info("Öppnar Alma"),
              },
              {
                id: "adam",
                name: "Adam Persson",
                department: "Solrosen",
                status: "present",
                guardians: ["Anja Persson", "Peter Persson"],
              },
              {
                id: "cleo",
                name: "Cleo Cederlund",
                department: "Maskrosen",
                status: "leave",
                guardians: ["Sara Cederlund"],
              },
              {
                id: "doris",
                name: "Doris Dahl",
                department: "Smörblomman",
                status: { label: "Hämtas 14:30", tone: "info" },
                guardians: ["Mikael Dahl", "Lisa Dahl"],
              },
            ].map((child) => (
              <ChildCard
                key={child.id}
                name={child.name}
                department={child.department}
                status={child.status}
                guardians={child.guardians}
                onClick={child.onClick}
              />
            ))}
          </div>
        </section>

        <section id="teacher-card" className="section">
          <h2 className="section__title">TeacherCard</h2>
          <p className="section__hint">
            Kort för personal på en avdelning – visar titel, namn och avdelning.
          </p>
          <h3 className="section__subtitle">Personal på avdelningen</h3>
          <div className="row-cards">
            {[
              {
                id: "anja",
                name: "Anja Jansson",
                title: "forskollarare",
                department: "Solrosen",
                onClick: () => toast.info("Öppnar Anja"),
              },
              {
                id: "tove",
                name: "Tove Karlsson",
                title: "forskollarare",
                department: "Solrosen",
              },
              {
                id: "lena",
                name: "Lena Johansson",
                title: "barnskotare",
                department: "Solrosen",
              },
              {
                id: "sven",
                name: "Sven Sköld",
                title: { label: "Vikarie v.24", tone: "warning" },
                department: "Maskrosen",
              },
            ].map((teacher) => (
              <TeacherCard
                key={teacher.id}
                name={teacher.name}
                title={teacher.title}
                department={teacher.department}
                onClick={teacher.onClick}
              />
            ))}
          </div>
        </section>

        <section id="message-card" className="section">
          <h2 className="section__title">MessageCard / NoticeCard</h2>
          <p className="section__hint">
            Kort för information mellan pedagog och vårdnadshavare – t.ex.
            meddelanden, anslag och aviseringar.
          </p>
          <div className="stack-cards">
            {[
              {
                id: "msg-utveckling",
                type: "message",
                sender: { name: "Anna Lärare", role: "teacher" },
                recipient: { name: "Per Persson", role: "guardian" },
                subject: "Utvecklingssamtal v.24",
                preview:
                  "Hej Per! Vill du boka tid för utvecklingssamtal nästa vecka? Jag har tider tisdag eftermiddag och torsdag förmiddag.",
                timestamp: "09:42",
                unread: true,
                attachments: 1,
                onClick: () => toast.info("Öppnar meddelande"),
                actions: (
                  <>
                    <Button size="sm" variant="secondary">
                      Markera läst
                    </Button>
                    <Button size="sm">Svara</Button>
                  </>
                ),
              },
              {
                id: "msg-sjuk",
                type: "message",
                sender: { name: "Lisa Dahl", role: "guardian" },
                recipient: { name: "Solrosen", role: "teacher" },
                subject: "Doris är sjuk idag",
                preview: "Hej! Doris vaknade med feber så hon stannar hemma.",
                timestamp: "07:15",
              },
              {
                id: "notice-planering",
                type: "notice",
                sender: { name: "Förskolan Solrosen", role: "system" },
                subject: "Stängt fredag den 7 juni – planeringsdag",
                priority: "high",
                timestamp: new Date(),
                attachments: 2,
                body: "Förskolan håller stängt för planeringsdag. Behöver du barnomsorg kontakta kommunens jourförskola.",
              },
            ].map((item) =>
              item.type === "notice" ? (
                <NoticeCard
                  key={item.id}
                  sender={item.sender}
                  subject={item.subject}
                  priority={item.priority}
                  timestamp={item.timestamp}
                  attachments={item.attachments}
                >
                  {item.body}
                </NoticeCard>
              ) : (
                <MessageCard
                  key={item.id}
                  sender={item.sender}
                  recipient={item.recipient}
                  subject={item.subject}
                  preview={item.preview}
                  timestamp={item.timestamp}
                  unread={item.unread}
                  attachments={item.attachments}
                  onClick={item.onClick}
                  actions={item.actions}
                />
              ),
            )}
          </div>
        </section>

        <section id="dropdown-tabs" className="section">
          <h2 className="section__title">Dropdown & Tabs</h2>
          <div className="row">
            <Dropdown
              label="Choose action"
              items={[
                { label: "Edit", value: "edit" },
                { label: "Duplicate", value: "duplicate" },
                { label: "Archive", value: "archive" },
                { label: "Delete", value: "delete", disabled: true },
              ]}
              onSelect={(item) => toast.info(`Selected: ${item.label}`)}
            />
          </div>

          <TabsDemo toast={toast} />
        </section>

        <section id="weekly-schedule" className="section">
          <h2 className="section__title">WeeklySchedule</h2>
          <p className="section__hint">
            Enkel veckovy med kort, tider och responsiv layout. Visar mån–fre
            som standard och staplar till en kolumn på smala skärmar.
          </p>
          <WeeklySchedule title="Vecka 19" events={scheduleEvents} />
        </section>

        <section id="forms" className="section">
          <h2 className="section__title">Inputs</h2>
          <div className="form-grid">
            <Input
              label="Name"
              placeholder="MiniLogg"
              hint="Visas i din profil"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              error={!name ? "Fyll först i namn ovan" : undefined}
            />
            <Textarea label="Message" placeholder="Skriv något..." />
          </div>
        </section>

        <section id="feedback" className="section">
          <h2 className="section__title">Modal & Toasts</h2>
          <div className="row">
            <Button onClick={() => setModalOpen(true)}>Open modal</Button>
            <Button variant="secondary" onClick={() => toast.success("Saved!")}>
              Toast: success
            </Button>
            <Button
              variant="secondary"
              onClick={() => toast.warning("Heads up!")}
            >
              Toast: warning
            </Button>
            <Button
              variant="danger"
              onClick={() => toast.error("Something failed")}
            >
              Toast: error
            </Button>
          </div>
        </section>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Bekräfta åtgärd"
          footer={
            <>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Avbryt
              </Button>
              <Button
                onClick={() => {
                  setModalOpen(false);
                  toast.success("Bekräftad!");
                }}
              >
                Bekräfta
              </Button>
            </>
          }
        >
          <p>Är du säker på att du vill fortsätta? Detta är bara ett demo.</p>
        </Modal>
      </div>
    </ToastProvider>
  );
}

export default App;
