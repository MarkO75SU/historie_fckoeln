# Beitrag zur 1. FC Köln Geschichts-Zeitleiste

Wir lieben Beiträge aus der Community! Egal, ob es darum geht, neue Ereignisse hinzuzufügen, bestehende Informationen zu korrigieren, den Code zu verbessern oder das Design zu optimieren – deine Hilfe wird sehr geschätzt.

Please nimm dir einen Moment Zeit, dieses Dokument zu lesen, um den Beitragsprozess so reibungslos wie möglich zu gestalten.

## Wie man beiträgt

### 1. Fehler melden oder Funktionen vorschlagen

*   **GitHub Issues verwenden:** Der beste Weg, einen Fehler zu melden oder eine neue Funktion vorzuschlagen, ist das Öffnen eines Issues in unserem [GitHub-Repository](https://github.com/DEIN_BENUTZERNAME/DEIN_REPO_NAME/issues).
*   **Sei spezifisch:**
    *   Für Fehler: Beschreibe das Problem, die Schritte zur Reproduktion, das erwartete Verhalten und das tatsächliche Verhalten. Füge nach Möglichkeit Screenshots hinzu.
    *   Für Funktionen: Beschreibe die Funktion klar, warum sie nützlich ist und wie sie funktionieren würde.

### 2. Ereignisdaten hinzufügen oder korrigieren

Die historischen Ereignisdaten werden in `events.json` gespeichert.

*   **Repository forken:**
    1.  Gehe zum [Projekt-Repository](https://github.com/DEIN_BENUTZERNAME/DEIN_REPO_NAME).
    2.  Klicke oben rechts auf den "Fork"-Button. Dadurch wird eine Kopie des Repositorys unter deinem GitHub-Konto erstellt.

*   **Deinen Fork klonen:**
    ```bash
    git clone https://github.com/DEIN_BENUTZERNAME/DEIN_REPO_NAME.git
    cd DEIN_REPO_NAME
    ```
    (Ersetze `DEIN_BENUTZERNAME` und `DEIN_REPO_NAME` durch deine tatsächlichen GitHub-Details.)

*   **Einen neuen Branch erstellen:**
    Erstelle immer einen neuen Branch für deine Änderungen. Verwende einen aussagekräftigen Namen.
    ```bash
    git checkout -b feature/ereignis-hinzufuegen-JJJJ
    # oder
    git checkout -b fix/rechtschreibfehler-ereignisbeschreibung
    ```

*   **`events.json` bearbeiten:**
    1.  Öffne `events.json` in deinem bevorzugten Texteditor.
    2.  **Ein neues Ereignis hinzufügen:** Füge ein neues JSON-Objekt zum Array hinzu und stelle sicher, dass es der bestehenden Struktur und den Datentypen entspricht.
    3.  **Ein bestehendes Ereignis korrigieren:** Suche das Ereignis und nimm deine Korrektur vor.
    4.  **Datenstruktur:** Jedes Ereignisobjekt sollte die folgenden Eigenschaften haben:
        *   `"date"`: `string` (Erforderlich) - Format: "TT.MM.JJJJ" (z.B. "13.02.1948")
        *   `"title"`: `string` (Erforderlich) - Ein prägnanter Titel für das Ereignis.
        *   `"description"`: `string` (Erforderlich) - Eine kurze Beschreibung des Ereignisses.
        *   `"type"`: `string` (Erforderlich) - Kategorie des Ereignisses. Erlaubte Werte: `"info"`, `"erfolg"`, `"skandal"`.
        *   `"rank"`: `string` (Optional) - Der Rang/die Platzierung des Teams, falls zutreffend (z.B. "1. Platz", "17. Platz").
        *   `"league"`: `string` (Optional) - Die Liga oder der Wettbewerb, falls zutreffend (z.B. "Bundesliga", "Oberliga West", "DFB-Pokalfinale").
        *   `"extra"`: `string` (Optional) - Zusätzliche interessante Fakten oder Details.
        *   `"imageUrl"`: `string` (Optional) - URL zu einem Bild, das mit dem Ereignis zusammenhängt. (Zukünftige Erweiterung)
        *   `"sourceUrl"`: `string` (Optional) - URL zu einer Quelle für die Information. (Zukünftige Erweiterung)

*   **Deine Änderungen lokal testen:**
    1.  Befolge die Anweisungen unter "Lokale Entwicklungsumgebung einrichten" in der `README.md`, um das Projekt lokal auszuführen.
    2.  Überprüfe, ob dein hinzugefügtes oder korrigiertes Ereignis korrekt angezeigt wird und keine Fehler verursacht.

*   **Deine Änderungen committen:**
    ```bash
    git add events.json
    git commit -m "feat: Neues Ereignis hinzugefügt: [Ereignistitel]"
    # oder
    git commit -m "fix: Rechtschreibfehler in [Ereignistitel] Beschreibung korrigiert"
    ```
    (Verwende nach Möglichkeit konventionelle Commit-Nachrichten, z.B. `feat:` für neue Funktionen, `fix:` für Fehlerbehebungen, `docs:` für Dokumentation.)

*   **In deinen Fork pushen:**
    ```bash
    git push origin dein-branch-name
    ```

*   **Einen Pull Request (PR) erstellen:**
    1.  Gehe zu deinem Fork auf GitHub.
    2.  Du solltest einen "Compare & pull request"-Button sehen. Klicke darauf.
    3.  Gib einen klaren Titel und eine Beschreibung für deinen PR an, die deine Änderungen erläutern.
    4.  Sende den Pull Request ab.

### 3. Code-Beiträge (HTML, CSS, JavaScript)

*   Befolge den gleichen Workflow "Fork -> Klonen -> Branch -> Testen -> Committen -> Pushen -> PR" wie bei Datenbeiträgen.
*   **Code-Stil:** Bitte versuche, den bestehenden Code-Stil zu übernehmen.
*   **Testen:** Wenn du neue Funktionen hinzufügst, ziehe in Betracht, einfache Tests hinzuzufügen, falls in Zukunft ein Test-Framework eingeführt wird.
*   **Kommentare:** Füge Kommentare hinzu, wo die Absicht des Codes nicht sofort ersichtlich ist.

### 4. Design-Beiträge (CSS)

*   Befolge den gleichen Workflow.
*   Stelle sicher, dass deine Änderungen responsiv sind und bestehende Layouts nicht beeinträchtigen.

## Verhaltenskodex

Bitte beachte, dass dieses Projekt mit einem [Verhaltenskodex](CODE_OF_CONDUCT.md) veröffentlicht wird. Durch die Teilnahme an diesem Projekt erklärst du dich mit dessen Bedingungen einverstanden.