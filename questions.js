const originalQuestions = [
  {
    question: "In che modo l’Intelligenza Artificiale può influenzare positivamente il giornalismo?",
    options: [
      "Automatizzare la produzione di notizie senza bisogno di giornalisti",
      "Ridurre la diversità delle voci rappresentate nei media",
      "Eliminare completamente la necessità di verifica delle notizie",
      "Analizzare grandi dataset per identificare tendenze e storie emergenti"
    ],
    correctAnswer: "Analizzare grandi dataset per identificare tendenze e storie emergenti"
  },
  {
    question: "Qual è uno dei principali limiti dell’Intelligenza Artificiale?",
    options: [
      "L’incapacità di comprendere il linguaggio naturale",
      "La mancanza di trasparenza del processo decisionale",
      "La mancanza di capacità di apprendimento",
      "L’incapacità di elaborare grandi quantità di dati"
    ],
    correctAnswer: "La mancanza di trasparenza del processo decisionale"
  },
  {
    question: "Qual è una delle principali preoccupazioni etiche nell’uso dell’Intelligenza Artificiale nel sistema giudiziario?",
    options: [
      "Risolvere completamente i pregiudizi nei processi legali",
      "Introdurre o amplificare pregiudizi nei processi decisionali",
      "Aumentare la trasparenza delle decisioni giudiziarie",
      "Garantire l’efficienza senza errori nella gestione dei casi"
    ],
    correctAnswer: "Introdurre o amplificare pregiudizi nei processi decisionali"
  },
  {
    question: "Qual è uno dei principali problemi legati ai dati di addestramento nell’Intelligenza Artificiale?",
    options: [
      "Mancanza di interpretabilità",
      "Bias dell’algoritmo",
      "Discriminazione/pregiudizi nei dati",
      "Sovrapprendimento"
    ],
    correctAnswer: "Discriminazione/pregiudizi nei dati"
  },
  {
    question: "Come può l’Intelligenza Artificiale contribuire al settore sanitario?",
    options: [
      "Migliorare l’efficienza delle procedure chirurgiche",
      "Sostituire la diagnosi medica umana con precisione al 100%",
      "Automatizzare completamente la gestione degli ospedali",
      "Eliminare completamente la necessità di personale medico"
    ],
    correctAnswer: "Migliorare l’efficienza delle procedure chirurgiche"
  },
  {
    question: "Come l’Intelligenza Artificiale contribuisce all’ottimizzazione delle rotte di consegna?",
    options: [
      "Ignorando completamente le variabili esterne per mantenere la semplicità nei percorsi",
      "Utilizzando esclusivamente mappe tradizionali per la pianificazione delle rotte",
      "Sostituendo completamente i conducenti umani con veicoli autonomi",
      "Analizzando il traffico stradale e le condizioni meteorologiche per pianificare percorsi efficienti"
    ],
    correctAnswer: "Analizzando il traffico stradale e le condizioni meteorologiche per pianificare percorsi efficienti"
  },
  {
    question: "Perché l’Intelligenza Artificiale è cruciale per il monitoraggio e la tracciabilità delle merci?",
    options: [
      "Per rendere più difficile la localizzazione delle merci durante il trasporto",
      "Per ignorare completamente la necessità di tracciare le merci",
      "Per monitorare e tracciare le merci in tempo reale attraverso analisi dati avanzate",
      "Per garantire la sicurezza delle merci attraverso l’oscuramento delle informazioni"
    ],
    correctAnswer: "Per monitorare e tracciare le merci in tempo reale attraverso analisi dati avanzate"
  },
  {
    question: "Qual è l’obiettivo principale della responsabilità nelle linee etiche dell’Intelligenza Artificiale?",
    options: [
      "Eliminare la responsabilità a carico degli sviluppatori",
      "Garantire che l’Intelligenza Artificiale non funzioni in modo autonomo",
      "Assicurare che chi sviluppa e utilizza l’Intelligenza Artificiale sia responsabile delle sue conseguenze",
      "Promuovere la diffusione incontrollata dell’Intelligenza Artificiale"
    ],
    correctAnswer: "Assicurare che chi sviluppa e utilizza l’Intelligenza Artificiale sia responsabile delle sue conseguenze"
  },
  {
    question: "Perché l’equità è un principio chiave nelle linee etiche dell’Intelligenza Artificiale?",
    options: [
      "Per garantire un funzionamento segreto degli algoritmi",
      "Perché l’Intelligenza Artificiale non dovrebbe mai prendere decisioni",
      "Per aumentare la complessità degli algoritmi",
      "Per evitare discriminazioni ingiustificate nelle decisioni dell’Intelligenza Artificiale"
    ],
    correctAnswer: "Per evitare discriminazioni ingiustificate nelle decisioni dell’Intelligenza Artificiale"
  },
  {
    question: "Come può l’Intelligenza Artificiale aiutare il settore finanziario?",
    options: [
      "Riduzione della trasparenza del mercato",
      "Aumento della volatilità del mercato",
      "Aumento del costo dei servizi finanziari",
      "Miglioramento della gestione del rischio"
    ],
    correctAnswer: "Miglioramento della gestione del rischio"
  },
  {
    question: "Perché la privacy è una preoccupazione etica nell’uso dell’Intelligenza Artificiale?",
    options: [
      "Perché l’Intelligenza Artificiale può violare la privacy degli individui attraverso la raccolta e l’uso non autorizzato dei dati",
      "Per promuovere la trasparenza negli algoritmi di Intelligenza Artificiale",
      "Perché l’Intelligenza Artificiale migliora la sicurezza dei dati personali",
      "Perché la privacy è irrilevante nel contesto dell’Intelligenza Artificiale"
    ],
    correctAnswer: "Perché l’Intelligenza Artificiale può violare la privacy degli individui attraverso la raccolta e l’uso non autorizzato dei dati"
  },
  {
    question: "Perché l’opacità degli algoritmi può essere un limite nell’Intelligenza Artificiale?",
    options: [
      "Incrementa la velocità di esecuzione",
      "Può rendere difficile comprendere come il modello prende decisioni",
      "Rende più facile l’interpretazione",
      "Aumenta la sicurezza dell’algoritmo"
    ],
    correctAnswer: "Può rendere difficile comprendere come il modello prende decisioni"
  },
  {
    question: "In che modo la diversità è importante nelle linee etiche dell’Intelligenza Artificiale?",
    options: [
      "Per evitare l’eterogeneità nelle applicazioni dell’Intelligenza Artificiale",
      "Per includere una varietà di prospettive durante lo sviluppo e l’implementazione dell’Intelligenza Artificiale",
      "Per garantire che tutti gli algoritmi siano altamente specializzati",
      "Perché l’Intelligenza Artificiale non dovrebbe essere accessibile a tutti"
    ],
    correctAnswer: "Per includere una varietà di prospettive durante lo sviluppo e l’implementazione dell’Intelligenza Artificiale"
  },
  {
    question: "Cosa significa “trasparenza” nel contesto delle linee etiche dell’Intelligenza Artificiale?",
    options: [
      "Rendere gli algoritmi di Intelligenza Artificiale accessibili e comprensibili",
      "Nascondere informazioni sugli algoritmi per aumentare la sicurezza",
      "Implementare restrizioni etiche sulle applicazioni dell’Intelligenza Artificiale",
      "Creare modelli di Intelligenza Artificiale altamente complessi"
    ],
    correctAnswer: "Rendere gli algoritmi di Intelligenza Artificiale accessibili e comprensibili"
  }
];
