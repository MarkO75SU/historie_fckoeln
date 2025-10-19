# 1. FC Köln Geschichts-Zeitleiste

Ein gemeinschaftliches, interaktives Projekt, das die reiche Geschichte des 1. FC Köln darstellt. Es beinhaltet wichtige Ereignisse, Saisonübersichten, legendäre Persönlichkeiten und bedeutende Meilensteine von 1948 bis heute.

## Funktionen

*   **Chronologischer Überblick:** Erkunde die Geschichte des 1. FC Köln Jahr für Jahr.
*   **Ereignisdetails:** Klicke auf Ereignisse, um zusätzliche Informationen und Kontext anzuzeigen.
*   **Suchfunktion:** Finde schnell spezifische Ereignisse, Spieler oder Saisons.
*   **Kategorisierte Ereignisse:** Erfolge (gold), Skandale (schwarz) und allgemeine Informationen (rot) sind leicht erkennbar.
*   **Beitragsformular:** Melde fehlende Ereignisse oder schlage Korrekturen vor (zukünftige Erweiterung).

## Verwendete Technologien

*   HTML5
*   CSS3
*   JavaScript (ES6+)
*   JSON (für Ereignisdaten)

## Erste Schritte

Um dieses Projekt lokal auszuführen, benötigst du einen lokalen Webserver, da die Anwendung Ereignisdaten aus einer JSON-Datei abruft. Moderne Browser schränken `fetch`-Anfragen von lokalen `file://`-Pfaden aus Sicherheitsgründen ein.

### Voraussetzungen

*   Ein Webbrowser (Chrome, Firefox, Edge, Safari usw.)
*   Node.js (empfohlen für `http-server`) ODER Python (für `http.server`)

### Lokale Entwicklungsumgebung einrichten

1.  **Repository klonen:**
    ```bash
    git clone https://github.com/DEIN_BENUTZERNAME/DEIN_REPO_NAME.git
    cd DEIN_REPO_NAME
    ```
    (Ersetze `DEIN_BENUTZERNAME` und `DEIN_REPO_NAME` durch deine tatsächlichen GitHub-Details.)

2.  **Lokalen Webserver starten:**

    *   **Mit `http-server` (Node.js):**
        Falls `http-server` nicht global installiert ist, installiere es zuerst:
        ```bash
        npm install -g http-server
        ```
        Starte dann den Server aus dem Projekt-Root-Verzeichnis:
        ```bash
        http-server -p 8000
        ```

    *   **Mit Pythons integriertem Server:**
        Aus dem Projekt-Root-Verzeichnis:
        ```bash
        python -m http.server 8000
        ```
        (Für Python 2 verwende `python -m SimpleHTTPServer 8000`)

3.  **Im Browser öffnen:**
    Sobald der Server läuft, öffne deinen Webbrowser und navigiere zu:
    `http://localhost:8000/index.html`

## Projektstruktur

```
.
├── events.json         # Alle historischen Ereignisdaten
├── history_fckoeln.html # Hauptseite der Zeitleiste (kann in index.html umbenannt werden)
├── index.html          # Haupt-Einstiegspunkt (leitet weiter oder ist die Hauptseite)
├── script.js           # Kern-JavaScript-Logik für Rendering und Interaktivität
├── style.css           # Styling für die Zeitleiste
└── CONTRIBUTING.md     # Richtlinien für Beiträge zum Projekt
└── README.md           # Projektübersicht und Einrichtungsanweisungen
```

## Mitwirken

Wir freuen uns über Beiträge aus der Community! Bitte lies unsere Datei [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Richtlinien, wie du dich beteiligen kannst.

## Lizenz

[Gib hier deine Lizenz an, z.B. MIT, Apache 2.0, etc.]

## Kontakt

Für Fragen oder Vorschläge öffne bitte ein Issue auf GitHub.