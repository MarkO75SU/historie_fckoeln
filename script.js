/* MIT License - Copyright (c) 2025 Your Name or Organization - See LICENSE for details. */
/**
 * Hilfsfunktion zum Konvertieren von DD.MM.YYYY zu YYYY-MM-DD für Sortierung
 * Konvertiert ein Datum im Format TT.MM.JJJJ in JJJJ-MM-TT für eine korrekte chronologische Sortierung.
 * @param {string} dateString - Das Datum im Format TT.MM.JJJJ.
 * @returns {string} Das Datum im Format JJJJ-MM-TT oder ein Standardwert bei ungültigem Format.
 */
function parseDate(dateString) {
  const parts = dateString.split('.');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
  }
  return '9999-01-01'; // Ungültige Daten ans Ende sortieren
}

let events = []; // Dieses Array wird die aus events.json geladenen Ereignisse enthalten

// DOM-Elemente abrufen
const timelineElement = document.getElementById('timeline');
const searchInput = document.getElementById('search-input');
const reportForm = document.getElementById('reportForm');
const reportMessage = document.getElementById('reportMessage');

let eventIndexCounter = 0; // Zähler für abwechselnde Event-Farben
let activeDetailBox = null; // Referenz zur aktuell geöffneten Detailbox

/**
 * Erzeugt die HTML-Struktur der Zeitleiste basierend auf gefilterten Ereignissen.
 * @param {string} filterTerm - Der Suchbegriff zum Filtern der Ereignisse.
 */
function renderTimeline(filterTerm = '') {
  timelineElement.innerHTML = ''; // Zeitleiste leeren
  eventIndexCounter = 0; // Zähler zurücksetzen

  // 1. Ereignisse chronologisch nach Datum sortieren
  events.sort((a, b) => {
    const dateA = new Date(parseDate(a.date));
    const dateB = new Date(parseDate(b.date));
    return dateA - dateB;
  });

  // 2. Ereignisse nach Suchbegriff filtern
  const filteredEvents = events.filter(event => {
    const term = filterTerm.toLowerCase();
    const rankDisplay = event.rank ? `${event.rank} ${event.league || ''}` : '';
    return event.title.toLowerCase().includes(term) ||
           event.description.toLowerCase().includes(term) ||
           (event.extra && event.extra.toLowerCase().includes(term)) ||
           (event.league && event.league.toLowerCase().includes(term)) ||
           (event.rank && event.rank.toLowerCase().includes(term)) ||
           rankDisplay.toLowerCase().includes(term) ||
           event.date.includes(term);
  });
  
  // Meldung anzeigen, wenn keine Ereignisse gefunden wurden
  if (filteredEvents.length === 0) {
      timelineElement.innerHTML = `<p style="padding: 1rem;">Keine Ereignisse für die Suche gefunden.</p>`;
      return;
  }

  // 3. Ereignisse nach Jahr gruppieren
  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = event.date.split('.')[2];
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {});

  // 4. Gruppen rendern (Jahr für Jahr)
  for (const year in eventsByYear) {
    const yearGroupDiv = document.createElement('div');
    yearGroupDiv.classList.add('year-group');

    // Jahr-Titel (Zum Aufklappen)
    const yearTitle = document.createElement('div');
    yearTitle.classList.add('year-title');
    yearTitle.textContent = year;
    yearTitle.setAttribute('role', 'button'); // Semantisch als Button kennzeichnen
    yearTitle.setAttribute('aria-expanded', 'true'); // Anfangs als geöffnet markieren
    yearTitle.setAttribute('aria-controls', `year-content-${year}`); // Mit dem Inhalt verknüpfen

    yearGroupDiv.appendChild(yearTitle);

    // Jahr-Content (Der aufklappbare Bereich)
    const yearContent = document.createElement('div');
    yearContent.classList.add('year-content');
    yearContent.setAttribute('id', `year-content-${year}`); // Eindeutige ID für Barrierefreiheit
    
    // 5. Einzelne Ereignisse rendern
    eventsByYear[year].forEach(event => {
        // Abwechselnde Farbe für Events (weiß/rot)
        const alternatingClass = (eventIndexCounter % 2 === 0) ? 'event-white' : 'event-red';
        eventIndexCounter++;

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event', alternatingClass);
        eventDiv.setAttribute('data-date', event.date);
        eventDiv.setAttribute('data-type', event.type);

        // Prüfen, ob eine Abschlussplatzierung vorhanden ist, und entsprechend formatieren
        const rankDisplay = event.rank ? `<p><strong>Saison-Abschluss:</strong> <span class="table-rank">${event.rank}</span> (${event.league || 'Liga nicht angegeben'})</p>` : `<p><strong>Liga/Kategorie:</strong> ${event.league || 'Sonderereignis'}</p>`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('event-content');
        contentDiv.innerHTML = `
          <p><strong>${event.date}</strong></p>
          <h3>${event.title}</h3>
          ${rankDisplay}
          <p>${event.description}</p>
        `;

        // Detail-Box für zusätzliche Informationen
        const detailsBox = document.createElement('div');
        detailsBox.classList.add('event-details-box');
        detailsBox.innerHTML = `
            <h4>Zusatzinfo zu ${event.title}</h4>
            <p>${event.extra || 'Keine weiteren Details verfügbar.'}</p>
        `;
        
        contentDiv.appendChild(detailsBox);
        eventDiv.appendChild(contentDiv);
        yearContent.appendChild(eventDiv);
    });

    yearGroupDiv.appendChild(yearContent);
    timelineElement.appendChild(yearGroupDiv);
    
    // Toggle-Funktionalität für Jahr-Gruppen (Barrierefreiheit: aria-expanded wird umgeschaltet)
    yearTitle.addEventListener('click', () => {
        const isClosed = yearContent.classList.toggle('closed');
        yearTitle.classList.toggle('closed');
        yearTitle.setAttribute('aria-expanded', !isClosed); // aria-expanded aktualisieren
    });
  }
}

/**
 * Zeigt/Versteckt die Detail-Informationen eines Events.
 * Schließt automatisch andere geöffnete Detailboxen.
 * @param {HTMLElement} detailsBox - Das HTML-Element der Detailbox, das umgeschaltet werden soll.
 */
function toggleDetails(detailsBox) {
    // Schließe zuerst die aktuell geöffnete Box, falls vorhanden und nicht die gleiche
    if (activeDetailBox && activeDetailBox !== detailsBox) {
        activeDetailBox.classList.remove('open');
    }
    
    // Toggle der angeklickten Box
    detailsBox.classList.toggle('open');
    
    // Aktualisiere die Referenz auf die aktuell geöffnete Box
    if (detailsBox.classList.contains('open')) {
        activeDetailBox = detailsBox;
    } else {
        activeDetailBox = null;
    }
}

/**
 * Initialisiert alle Event-Listener für die Seite.
 */
function initEventListeners() {
    // Suchfunktion (mit Debounce, um häufige Aufrufe zu vermeiden)
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderTimeline(e.target.value);
        }, 300); // 300ms Verzögerung
    });
    
    // Event Delegation für Event-Details (ein Listener für alle Events)
    timelineElement.addEventListener('click', (e) => {
        // Prüfen, ob das geklickte Element oder ein Elternteil davon ein '.event' ist
        const eventDiv = e.target.closest('.event');
        if (eventDiv) {
            // Die Detailbox innerhalb dieses Events finden
            const detailsBox = eventDiv.querySelector('.event-details-box');
            if (detailsBox) {
                toggleDetails(detailsBox);
            }
        }
    });

    // Report-Formular (E-Mail-Versand-Hinweis)
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Da das Formular nun Benutzer anweist, eine E-Mail zu senden,
        // wird dieser Listener nur eine Bestätigungsnachricht anzeigen.
        reportMessage.textContent = `Vielen Dank für deine Meldung! Bitte sende die Details an historie_fckoeln@web.de.`;
        reportForm.reset();
        
        setTimeout(() => {
            reportMessage.textContent = '';
        }, 5000);
    });
}

// Initialisierung beim Laden der Seite: Ereignisse laden, Zeitleiste rendern und Event-Listener einrichten.
document.addEventListener('DOMContentLoaded', () => {
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            events = data;
            renderTimeline();
            initEventListeners();
        })
        .catch(error => {
            console.error('Error loading events:', error);
            timelineElement.innerHTML = `<p style="color: red; padding: 1rem;">Fehler beim Laden der Ereignisse: ${error.message}. Bitte versuche es später erneut.</p>`;
        });
});
