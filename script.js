/* MIT License - Copyright (c) 2025 Your Name or Organization - See LICENSE for details. */
/**
 * Hilfsfunktion zum Konvertieren von DD.MM.YYYY zu YYYY-MM-DD für Sortierung
 */
function parseDate(dateString) {
  const parts = dateString.split('.');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
  }
  return '9999-01-01'; 
}

let events = []; // This will hold the fetched events

const timelineElement = document.getElementById('timeline');
const searchInput = document.getElementById('search-input');
const reportForm = document.getElementById('reportForm');
const reportMessage = document.getElementById('reportMessage');

let eventIndexCounter = 0; 
let activeDetailBox = null; 

/**
 * Erzeugt die HTML-Struktur der Zeitleiste
 */
function renderTimeline(filterTerm = '') {
  timelineElement.innerHTML = ''; 
  eventIndexCounter = 0;

  // 1. Sortieren (Chronologisch nach dem vollständigen Datum)
  events.sort((a, b) => {
    const dateA = new Date(parseDate(a.date));
    const dateB = new Date(parseDate(b.date));
    return dateA - dateB;
  });

  // 2. Filtern (nach Suchbegriff)
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
  
  if (filteredEvents.length === 0) {
      timelineElement.innerHTML = `<p style="padding: 1rem;">Keine Ereignisse für die Suche gefunden.</p>`;
      return;
  }

  // 3. Gruppieren nach Jahr
  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = event.date.split('.')[2];
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {});

  // 4. Rendern der Gruppen
  for (const year in eventsByYear) {
    const yearGroupDiv = document.createElement('div');
    yearGroupDiv.classList.add('year-group');

    // Jahr-Titel (Zum Aufklappen)
    const yearTitle = document.createElement('div');
    yearTitle.classList.add('year-title');
    yearTitle.textContent = year;
    yearTitle.setAttribute('role', 'button'); // Make it semantically a button
    yearTitle.setAttribute('aria-expanded', 'true'); // Initially expanded
    yearTitle.setAttribute('aria-controls', `year-content-${year}`); // Link to content

    yearGroupDiv.appendChild(yearTitle);

    // Jahr-Content (Der aufklappbare Bereich)
    const yearContent = document.createElement('div');
    yearContent.classList.add('year-content');
    yearContent.setAttribute('id', `year-content-${year}`); // Unique ID for accessibility
    
    // 5. Events rendern
    eventsByYear[year].forEach(event => {
        // Abwechselnde Farbe
        const alternatingClass = (eventIndexCounter % 2 === 0) ? 'event-white' : 'event-red';
        eventIndexCounter++;

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event', alternatingClass);
        eventDiv.setAttribute('data-date', event.date);
        eventDiv.setAttribute('data-type', event.type);

        // Prüfen, ob eine Abschlussplatzierung vorhanden ist
        const rankDisplay = event.rank ? `<p><strong>Saison-Abschluss:</strong> <span class="table-rank">${event.rank}</span> (${event.league || 'Liga nicht angegeben'})</p>` : `<p><strong>Liga/Kategorie:</strong> ${event.league || 'Sonderereignis'}</p>`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('event-content');
        contentDiv.innerHTML = `
          <p><strong>${event.date}</strong></p>
          <h3>${event.title}</h3>
          ${rankDisplay}
          <p>${event.description}</p>
        `;

        // Detail-Box
        const detailsBox = document.createElement('div');
        detailsBox.classList.add('event-details-box');
        detailsBox.innerHTML = `
            <h4>Zusatzinfo zu ${event.title}</h4>
            <p>${event.extra || 'Keine weiteren Details verfügbar.'}</p>
        `;
        
        contentDiv.appendChild(detailsBox);
        eventDiv.appendChild(contentDiv);
        yearContent.appendChild(eventDiv);

        eventDiv.addEventListener('click', () => toggleDetails(detailsBox));
    });

    yearGroupDiv.appendChild(yearContent);
    timelineElement.appendChild(yearGroupDiv);
    
    // Toggle-Funktionalität für Jahr-Gruppen
    yearTitle.addEventListener('click', () => {
        const isClosed = yearContent.classList.toggle('closed');
        yearTitle.classList.toggle('closed');
        yearTitle.setAttribute('aria-expanded', !isClosed); // Toggle aria-expanded
    });
  }
}

/**
 * Zeigt/Versteckt die Detail-Informationen eines Events
 */
function toggleDetails(detailsBox) {
    // Schließe zuerst die aktuell geöffnete Box, falls vorhanden und nicht die gleiche
    if (activeDetailBox && activeDetailBox !== detailsBox) {
        activeDetailBox.classList.remove('open');
    }
    
    // Toggle der angeklickten Box
    detailsBox.classList.toggle('open');
    
    // Aktualisiere die Referenz
    if (detailsBox.classList.contains('open')) {
        activeDetailBox = detailsBox;
    } else {
        activeDetailBox = null;
    }
}

/**
 * Initialisiert die Event-Listener
 */
function initEventListeners() {
    // Suchfunktion
    searchInput.addEventListener('input', (e) => {
        renderTimeline(e.target.value);
    });
    
    // Report-Formular
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Since the form now directs users to send an email,
        // this listener will just provide a confirmation message.
        reportMessage.textContent = `Vielen Dank für deine Meldung! Bitte sende die Details an historie_fckoeln@web.de.`;
        reportForm.reset();
        
        setTimeout(() => {
            reportMessage.textContent = '';
        }, 5000);
    });
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            events = data;
            renderTimeline();
            initEventListeners();
        })
        .catch(error => console.error('Error loading events:', error));
});