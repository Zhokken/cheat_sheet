// This is the content for the cards. Add or edit cards here.
const ARBEIDSFLYT = [
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

// This is a separate section, but it uses the same WorkflowCard component.
const branches = [
  {
    title: "BRANCH",
    description: "En branch er en separat arbeidslinje i Git.",
    items: [
      "For enkle individuelle skoleoppgaver holder det ofte å bruke main.",
      "Branches er nyttige når du skal utvikle funksjoner separat eller samarbeide med andre.",
      "Sjekk at arbeidsområdet er ryddig før du bytter branch.",
      "Oppdater main før du merger en branch.",
    ],
  },
  {
    title: "MERGE",
    description:"Merge brukes for å kombinere endringer fra én branch med en annen.",
    items: [
    ],
  },
];
// This is a separate section, but it uses the same WorkflowCard component.
const name = [
  {
    title: "",
    description: "",
    items: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "",
    description:"",
    items: [
    ],
  },
];

// This is a separate section, but it uses the same WorkflowCard component.
const merge_conflict = [
  {
    title: "MERGE CONFLICT",
    description: "En merge conflict oppstår når Git finner forskjellige endringer på samme område av en fil og ikke klarer å avgjøre hvilken endring som skal beholdes.",
    items: [
      "Ikke slett Git-repositoryet.",
      "Ikke bruk tilfeldige løsninger.",
      "Les konflikten nøye.",
      "Bestem hvilken endring som skal beholdes.",
      "Kontroller resultatet.",
      "Lagre løsningen i Git og send den til GitHub.",
    ],
  },
];

// This is a separate section, but it uses the same WorkflowCard component.
const sikkerhet = [
  {
    title: ".gitignore",
    description: "Bruk .gitignore for filer og mapper som ikke skal legges på GitHub.",
    items: [
      "avhengigheter som ikke trenger å lagres i repositoryet",
      "miljøfiler",
      "loggfiler",
      "sensitive filer",
      
    ],
  },
  {
    title: "ALDRI LEGG UT HEMMELIGHETER",
    items: [
        "Ikke legg passord i kildekoden.",
        "Ikke legg API-nøkler på GitHub.",
        "Bruk miljøvariabler for hemmelig informasjon.",
        "Pass på at miljøfiler er ignorert.", 
    ],
    sub_description: "Hvis et passord allerede er pushet til GitHub, er det ikke nok å bare legge filen i .gitignore. Passordet kan fortsatt finnes i Git-historikken og bør byttes.",
  },
];

const narNoeGarGalt = [
  {
    title: "START ALLTID MED Å SJEKKE STATUS",
    description: "Spør deg selv:",
    items: [
      "Hvilken mappe står jeg i?",
      "Hvilket repository er dette?",
      "Hvilken branch står jeg på?",
      "Hva sier feilmeldingen faktisk?",
    ],
    sub_description: "Ikke gjør drastiske endringer før du vet hva problemet er.",
  },
  {
    title: "UNNGÅ DRASTISKE LØSNINGER",
    items: [
      "Ikke bruk løsninger som kan slette arbeid.",
      "Ikke overskriv historikk.",
      "Ikke fjern Git-repositoryet.",
    ],
  },
];

const gitVsCodeGithub = [
  {
    title: "GIT BASH",
    description: "Brukes til å kontrollere og styre Git-repositoryet.",
    items: [],
  },
  {
    title: "VS CODE",
    description: "Her bør du normalt gjøre selve arbeidet med prosjektfilene.",
    items: [],
  },
  {
    title: "GITHUB",
    description: "Brukes til lagring, deling og kontroll av repositoryet.",
    items: [
      "Alle tre bør vise samme prosjekt, branch og endringer.",
    ],
  },
  {
    title: "3 REGLER DU BØR HUSKE",
    items: [
      "Pull før du begynner.",
      "Commit og push før du avslutter.",
      "Når noe er galt: sjekk status før du gjør noe annet.",
    ],
  },
];

// A component is a reusable piece of HTML.
// The values inside { } are data received from the parent component.
function WorkflowCard({ title, description, items, sub_description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <ul>
        {/* map creates one <li> for every item in the array. */}
        {items.map((item) => (
          // key helps React keep track of each list item.
          <li key={item}>{item}</li>
        ))}
      </ul>
      {sub_description && <p>{sub_description}</p>}
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
        {ARBEIDSFLYT.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            description={step.description}
            items={step.items}
            subTitle={step.subTitle}
            subText={step.subText}
          />
        ))}
      </div>

      <h1>BRANCHES</h1>
      <div className="cards">
        {branches.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            description={step.description}
            items={step.items}
          />
        ))}
      </div>

      <h1>NÅR NOE GÅR GALT</h1>
      <div className="cards">
        {narNoeGarGalt.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            description={step.description}
            items={step.items}
            sub_description={step.sub_description}
          />
        ))}
      </div>

      <h1>GIT, VS CODE OG GITHUB</h1>
      <div className="cards">
        {gitVsCodeGithub.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            description={step.description}
            items={step.items}
          />
        ))}
      </div>

      <h1>SIKKERHET</h1>
      <div className="cards">
        {sikkerhet.map((step) => (
          <WorkflowCard
            key={step.title}
            title={step.title}
            description={step.description}
            items={step.items}
            sub_description={step.sub_description}
          />
        ))}
      </div>
    </main>
  );
}

export default App;