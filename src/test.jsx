// This is the content for the cards. Add or edit cards here.
const workflowSteps = [
  {
    title: "1. START",
    items: [
      "Åpne riktig prosjektmappe i VS Code.",
      "Kontroller at du er på riktig branch.",
      "Hent siste endringer fra GitHub før du begynner.",
    ],
  },
  {
    title: "2. JOBB",
    items: [
      "Lag eller endre filer i VS Code.",
      "Arbeid lokalt på PC-en.",
      "Sjekk status underveis.",
    ],
  },
  {
    title: "3. KONTROLLER",
    items: [
      "Se hvilke filer som er endret.",
      "Kontroller hva som faktisk er endret.",
      "Rett eventuelle feil før commit.",
    ],
  },
  {
    title: "4. COMMIT",
    items: [
      "Velg hvilke endringer som skal lagres.",
      "Lag en kort og beskrivende commit-melding.",
      "Lag flere små commits i stedet for én stor.",
    ],
  },
  {
    title: "5. PUSH",
    items: [
      "Hent nye endringer før du pusher.",
      "Send commitene til GitHub.",
      "Kontroller at riktig branch er oppdatert.",
    ],
  },
];

// A component is a reusable piece of HTML.
// The values inside { } are data received from the parent component.
function WorkflowCard({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {/* map creates one <li> for every item in the array. */}
        {items.map((item) => (
          // key helps React keep track of each list item.
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <main className="container">
      <h1>FAST ARBEIDSFLYT</h1>
      <div className="code">
        <code>PULL - JOBB - SJEKK - COMMIT - PUSH</code>
      </div>
      <div className="cards">
        {/* map creates one WorkflowCard for every object above. */}
        {workflowSteps.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            items={step.items}
          />
        ))}
      </div>
    </main>
    
  );
}

export default App;