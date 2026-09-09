# Fem teknikker brukt i prosjektet

Dette dokumentet forklarer fem teknikker som er brukt i React-delen av prosjektet. De kan virke avanserte i starten, men de gjør koden lettere å gjenbruke og vedlikeholde.

## 1. Gjenbrukbare komponenter

En komponent er en funksjon som returnerer HTML-lignende JSX. `WorkflowCard` er laget én gang, men kan brukes til mange forskjellige kort.

```jsx
function WorkflowCard({ title, description, items, sub_description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {sub_description && <p>{sub_description}</p>}
    </div>
  );
}
```

Fordelen er at vi slipper å skrive den samme `div`-strukturen og klassene på nytt for hvert kort.

## 2. Props

Props er verdier som sendes fra en komponent til en annen. Her sendes `title`, `description`, `items` og `sub_description` inn i `WorkflowCard`.

```jsx
<WorkflowCard
  title={step.title}
  description={step.description}
  items={step.items}
  sub_description={step.sub_description}
/>
```

Komponenten mottar verdiene her:

```jsx
function WorkflowCard({ title, description, items, sub_description }) {
```

Det betyr at samme komponent kan vise forskjellig tekst uten at selve komponenten må endres.

## 3. Data-drevet innhold

Kortene ligger som objekter i en array. Innholdet er dermed skilt fra HTML-strukturen.

```jsx
const branches = [
  {
    title: "BRANCH",
    description: "En branch er en separat arbeidslinje i Git.",
    items: [
      "Bruk main til enkle oppgaver.",
      "Bruk branches til separate funksjoner.",
    ],
  },
];
```

For å legge til et nytt kort trenger vi bare å legge til et nytt objekt. Vi trenger ikke kopiere hele kortets HTML.

## 4. `map()` for å lage gjentakelser

`map()` går gjennom alle objektene i en array og lager noe for hvert objekt.

```jsx
{branches.map((step) => (
  <WorkflowCard
    key={step.title}
    title={step.title}
    description={step.description}
    items={step.items}
  />
))}
```

Hvis `branches` inneholder tre objekter, lager React tre `WorkflowCard`-komponenter.

`key` gir hvert kort en unik identitet. React bruker dette for å holde orden på gjentatte elementer.

## 5. Betinget rendering

Betinget rendering betyr at noe bare vises når en verdi finnes.

```jsx
{description && <p>{description}</p>}
{sub_description && <p>{sub_description}</p>}
```

Hvis et kort ikke har en `description`, vises ikke et tomt avsnitt. Det samme gjelder teksten under punktlisten.

Dette gjør komponenten fleksibel: noen kort kan ha ekstra tekst, mens andre bare har en tittel og en punktliste.

## Oppsummering

| Teknikk | Hva den brukes til |
| --- | --- |
| Komponenter | Gjenbruke samme HTML-struktur |
| Props | Sende tekst og data til komponenter |
| Data-drevet innhold | Holde innholdet samlet i arrays og objekter |
| `map()` | Lage mange kort eller listeelementer |
| Betinget rendering | Vise innhold bare når det finnes |

Disse teknikkene gjør det enkelt å utvide cheat sheet-et. For å lage et nytt kort kan du vanligvis bare legge til et nytt objekt i riktig array.
