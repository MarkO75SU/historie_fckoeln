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

const events = [
  { "date": "13.02.1948", "title": "Gründung des 1. FC Köln", "description": "Fusion von Kölner BC 01 und SpVgg Sülz 07. Franz Kremer wird erster Präsident und Visionär der Bundesliga.", "type": "info", "rank": "3. Platz", "league": "Rheinbezirksliga (Aufstieg)", "extra":"Die legendäre Frage Franz Kremers: 'Wollt ihr mit mir Deutscher Meister werden?'" },
  { "date": "01.07.1949", "title": "Saisonabschluss 1949/50", "description": "Erreichen der Oberliga West.", "type": "info", "rank": "5. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "20.02.1950", "title": "Die Geburt von Hennes", "description": "Auf der zweiten Karnevalssitzung wird dem FC ein Geißbock geschenkt und auf den Spielertrainer Hennes Weisweiler getauft.", "type": "info", "rank": null, "league": null, "extra":"Hennes I. wird zum Maskottchen des Vereins." },
  { "date": "01.07.1950", "title": "Saisonabschluss 1950/51", "description": "Etablierung in der Oberliga.", "type": "info", "rank": "4. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1951", "title": "Saisonabschluss 1951/52", "description": "Mittelfeldplatz in der Oberliga.", "type": "info", "rank": "5. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1952", "title": "Saisonabschluss 1952/53", "description": "Vizemeister der Oberliga West und Teilnahme an der Endrunde.", "type": "info", "rank": "2. Platz", "league": "Oberliga West", "extra":"Endrunde: Platz 3 in Gruppe 1." },
  { "date": "01.07.1953", "title": "Saisonabschluss 1953/54", "description": "Vizemeister der Oberliga West und Endrundenteilnahme.", "type": "info", "rank": "2. Platz", "league": "Oberliga West", "extra":"Endrunde: Platz 2 in Gruppe 2." },
  { "date": "17.04.1954", "title": "DFB-Pokalfinale (Niederlage)", "description": "Der 1. FC Köln läuft im DFB-Pokalfinale gegen den VfB Stuttgart erstmals mit dem Geißbock-Emblem auf den Trikots auf.", "type": "info", "rank": null, "league": "DFB-Pokalfinale (Niederlage 0:1 n.V.)", "extra":"Ein Meilenstein für das Vereinswappen und -symbol." },
  { "date": "01.07.1954", "title": "Saisonabschluss 1954/55", "description": "Guter Platz im oberen Tabellendrittel.", "type": "info", "rank": "3. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1955", "title": "Saisonabschluss 1955/56", "description": "" , "type": "info", "rank": "4. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1956", "title": "Saisonabschluss 1956/57", "description": "" , "type": "info", "rank": "6. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1957", "title": "Saisonabschluss 1957/58", "description": "" , "type": "info", "rank": "7. Platz", "league": "Oberliga West", "extra":"" },
  { "date": "01.07.1958", "title": "Saisonabschluss 1958/59", "description": "Oberliga-Vizemeister und Endrundenteilnahme.", "type": "info", "rank": "2. Platz", "league": "Oberliga West", "extra":"Endrunde: Platz 2 in Gruppe 1." },
  { "date": "25.06.1960", "title": "Saisonabschluss 1959/60", "description": "Oberliga West Meister und Deutsche Vize-Meisterschaft.", "type": "info", "rank": "1. Platz", "league": "Oberliga West", "extra":"Finalniederlage 2:3 gegen den Hamburger SV." },
  { "date": "01.07.1961", "title": "Saisonabschluss 1960/61", "description": "Oberliga-Vizemeister und Endrundenteilnahme.", "type": "info", "rank": "2. Platz", "league": "Oberliga West", "extra":"Karl-Heinz Schnellinger wechselt zum FC." },
  { "date": "23.06.1962", "title": "Saisonabschluss 1961/62: Erster Titel", "description": "Oberliga West Meister und **Erste Deutsche Meisterschaft**.", "type": "erfolg", "rank": "1. Platz", "league": "Oberliga West", "extra":"Der erste nationale Titel (4:0 gegen 1. FCN). **Karl-Heinz Schnellinger** wird 'Fußballer des Jahres'." },
  { "date": "29.06.1963", "title": "Saisonabschluss 1962/63", "description": "Oberliga West Meister und Deutsche Vize-Meisterschaft.", "type": "info", "rank": "1. Platz", "league": "Oberliga West", "extra":"Letzter Meister der Oberliga West (Finalniederlage 1:3 gegen BVB). **Hans Schäfer** wird 'Fußballer des Jahres'." },
  { "date": "09.05.1964", "title": "Saisonabschluss 1963/64: Erster Bundesliga-Meister", "description": "Der FC gewinnt die erste Bundesliga-Saison der Geschichte.", "type": "erfolg", "rank": "1. Platz", "league": "Bundesliga", "extra":"Erster Bundesliga-Meister. Trainer: Georg Knöpfle." },
  { "date": "15.05.1965", "title": "Saisonabschluss 1964/65", "description": "Deutsche Vize-Meisterschaft in der Bundesliga.", "type": "info", "rank": "2. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "14.05.1966", "title": "Saisonabschluss 1965/66", "description": "Frühes Aus im Europapokal der Landesmeister gegen Liverpool.", "type": "info", "rank": "7. Platz", "league": "Bundesliga", "extra":"Legendäres Viertelfinale (0:0, 0:0, 2:2) wurde durch **Münzwurf** entschieden. Trainer: Georg Knöpfle." },
  { "date": "01.07.1966", "title": "Heinz Flohe kommt nach Köln", "description": "Heinz Flohe, einer der größten Techniker der FC-Geschichte, wechselt zum 1. FC Köln.", "type": "info", "rank": null, "league": null, "extra":"Er bleibt dem FC bis 1979 treu und wird 1974 Weltmeister." },
  { "date": "03.06.1967", "title": "Saisonabschluss 1966/67", "description": "" , "type": "info", "rank": "7. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "15.06.1968", "title": "Saisonabschluss 1967/68: Pokalsieger", "description": "Erster DFB-Pokal-Sieg. In der Liga nur Mittelfeld.", "type": "erfolg", "rank": "5. Platz", "league": "Bundesliga", "extra":"Pokalsieger (4:1 gegen den VfL Bochum). **Johannes Löhr** wird Bundesliga-Torschützenkönig (27 Tore)." },
  { "date": "07.06.1969", "title": "Saisonabschluss 1968/69: Pokalsieger-Halbfinale", "description": "Erreichen des Halbfinals im Europapokal der Pokalsieger.", "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"Ausscheiden gegen den FC Barcelona. **Carl-Heinz Rühl** wird Torschützenkönig des Wettbewerbs (6 Tore)." },
  { "date": "03.06.1970", "title": "Saisonabschluss 1969/70", "description": "" , "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "05.06.1971", "title": "Saisonabschluss 1970/71", "description": "DFB-Pokal Finalniederlage und **Bundesligaskandal**.", "type": "skandal", "rank": "10. Platz", "league": "Bundesliga", "extra":"Finalniederlage (1:2) gegen Bayern München (Wiederholungsspiel). Torwart **Manfred Manglitz** ist Hauptfigur im großen Bundesligaskandal (Sperre)." },
  { "date": "28.06.1972", "title": "Saisonabschluss 1971/72", "description": "Wieder DFB-Pokal Finalniederlage.", "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"Finalniederlage (1:2 n.V.) gegen den FC Schalke 04." },
  { "date": "09.06.1973", "title": "Saisonabschluss 1972/73", "description": "Vizemeisterschaft in der Bundesliga.", "type": "info", "rank": "2. Platz", "league": "Bundesliga", "extra":"Vizemeister hinter dem FC Bayern." },
  { "date": "18.05.1974", "title": "Saisonabschluss 1973/74", "description": "" , "type": "info", "rank": "5. Platz", "league": "Bundesliga", "extra":"Vier FC-Spieler (Flohe, Overath, Cullmann, Weber) werden Weltmeister in Deutschland." },
  { "date": "21.06.1975", "title": "Saisonabschluss 1974/75", "description": "" , "type": "info", "rank": "5. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "12.11.1975", "title": "Einweihung des neuen Müngersdorfer Stadions", "description": "Das neue, komplett überdachte Müngersdorfer Stadion wird mit einem 3:0-Sieg im Stadtderby gegen Fortuna Köln eröffnet.", "type": "info", "rank": null, "league": null, "extra":"Das Stadion wird zur festen Heimat des 1. FC Köln." },
  { "date": "12.06.1976", "title": "Saisonabschluss 1975/76", "description": "" , "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "21.05.1977", "title": "Saisonabschluss 1976/77: Pokalsieg", "description": "DFB-Pokal-Sieger.", "type": "erfolg", "rank": "5. Platz", "league": "Bundesliga", "extra":"Pokalsieg (2:1 im Wiederholungsspiel gegen Hertha BSC). Trainer Hennes Weisweiler kehrt zurück. **Dieter Müller** wird Bundesliga-Torschützenkönig (34 Tore)." },
  { "date": "29.04.1978", "title": "Saisonabschluss 1977/78: Das Double", "description": "**Gewinn des Doubles** (Meisterschaft und DFB-Pokal).", "type": "erfolg", "rank": "1. Platz", "league": "Bundesliga", "extra":"Meisterschaft durch die bessere Tordifferenz. **Dieter Müller** wird erneut Bundesliga-Torschützenkönig (24 Tore)." },
  { "date": "09.06.1979", "title": "Saisonabschluss 1978/79", "description": "Erreichen des Halbfinals im Europapokal der Landesmeister.", "type": "info", "rank": "6. Platz", "league": "Bundesliga", "extra":"Ausscheiden gegen Nottingham Forest." },
  { "date": "31.05.1980", "title": "Saisonabschluss 1979/80", "description": "" , "type": "info", "rank": "5. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "13.06.1981", "title": "Saisonabschluss 1980/81", "description": "" , "type": "info", "rank": "8. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "29.05.1982", "title": "Saisonabschluss 1981/82", "description": "Deutsche Vize-Meisterschaft.", "type": "info", "rank": "2. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "28.05.1983", "title": "Saisonabschluss 1982/83: Pokalsieg", "description": "DFB-Pokal-Sieger (Sieg gegen Fortuna Köln).", "type": "erfolg", "rank": "6. Platz", "league": "Bundesliga", "extra":"Der vierte und bislang letzte DFB-Pokalsieg (1:0 im Derby-Finale)." },
  { "date": "26.05.1984", "title": "Saisonabschluss 1983/84", "description": "" , "type": "info", "rank": "6. Platz", "league": "Bundesliga", "extra":"**Harald 'Toni' Schumacher** wird 'Fußballer des Jahres'." },
  { "date": "22.06.1985", "title": "Saisonabschluss 1984/85", "description": "" , "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"**Klaus Allofs** wird Bundesliga-Torschützenkönig (26 Tore)." },
  { "date": "26.04.1986", "title": "Saisonabschluss 1985/86: UEFA-Pokal-Finale", "description": "Finalniederlage im UEFA-Pokal gegen Real Madrid.", "type": "info", "rank": "13. Platz", "league": "Bundesliga", "extra":"Hinspiel 1:5, Rückspiel 2:0." },
  { "date": "01.07.1986", "title": "Toni Schumacher wird erneut geehrt", "description": "Harald 'Toni' Schumacher wird zum zweiten Mal 'Fußballer des Jahres' in Deutschland.", "type": "info", "rank": null, "league": null, "extra":"" },
  { "date": "17.06.1987", "title": "Saisonabschluss 1986/87", "description": "" , "type": "info", "rank": "3. Platz", "league": "Bundesliga", "extra":"Trainer Christoph Daum beginnt, eine neue Spitzenmannschaft zu formen." },
  { "date": "21.05.1988", "title": "Saisonabschluss 1987/88", "description": "Skandal um Toni Schumacher und sein Buch 'Anpfiff'.", "type": "skandal", "rank": "7. Platz", "league": "Bundesliga", "extra":"Schumacher wird wegen Doping-Enthüllungen aus dem Verein und der Nationalmannschaft ausgeschlossen." },
  { "date": "17.06.1989", "title": "Saisonabschluss 1988/89", "description": "Deutsche Vize-Meisterschaft.", "type": "info", "rank": "2. Platz", "league": "Bundesliga", "extra":"Vizemeister hinter Bayern München. **Thomas Allofs** wird Torschützenkönig und **Thomas Häßler** 'Fußballer des Jahres'." },
  { "date": "12.05.1990", "title": "Saisonabschluss 1989/90", "description": "Erneute Deutsche Vize-Meisterschaft und UEFA-Pokal Halbfinale.", "type": "info", "rank": "2. Platz", "league": "Bundesliga", "extra":"Vizemeister hinter Bayern München. Ausscheiden im UEFA-Pokal Halbfinale gegen Juventus Turin (3:2, 0:0)." },
  { "date": "06.06.1991", "title": "Saisonabschluss 1990/91", "description": "DFB-Pokal-Finalniederlage (i.E.) gegen Werder Bremen.", "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"Trainer Christoph Daum wird im Finale beurlaubt." },
  { "date": "19.11.1991", "title": "Tragödie um Maurice Banach", "description": "Der damalige Top-Torjäger Maurice Banach kommt bei einem Verkehrsunfall ums Leben.", "type": "skandal", "rank": null, "league": null, "extra":"Ein schwerer Schock für Verein und Fans." },
  { "date": "16.05.1992", "title": "Saisonabschluss 1991/92", "description": "" , "type": "info", "rank": "4. Platz", "league": "Bundesliga", "extra":"Letzte Qualifikation für den UEFA-Cup für lange Zeit." },
  { "date": "05.06.1993", "title": "Saisonabschluss 1992/93", "description": "UEFA-Cup-Aus in der 1. Runde.", "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"Ausscheiden gegen Celtic Glasgow (2:0, 0:3). Die finanzielle Situation beginnt sich zuzuspitzen." },
  { "date": "07.05.1994", "title": "Saisonabschluss 1993/94", "description": "" , "type": "info", "rank": "14. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "17.06.1995", "title": "Saisonabschluss 1994/95", "description": "Beginn des 'FC Eupen'-Steuerskandals.", "type": "skandal", "rank": "10. Platz", "league": "Bundesliga", "extra":"Zahlreiche Spieler melden ihren Wohnsitz im belgischen Eupen, um Steuern zu sparen. Die Staatsanwaltschaft ermittelt wegen Steuerhinterziehung." },
  { "date": "18.05.1996", "title": "Saisonabschluss 1995/96", "description": "" , "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "31.05.1997", "title": "Saisonabschluss 1996/97", "description": "" , "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "23.05.1998", "title": "Saisonabschluss 1997/98: Erster Abstieg", "description": "Erster Bundesliga-Abstieg nach 35 Jahren.", "type": "skandal", "rank": "17. Platz", "league": "Bundesliga", "extra":"Beginn der 'Fahrstuhl-Jahre'." },
  { "date": "30.05.1999", "title": "Saisonabschluss 1998/99", "description": "Verpasster direkter Wiederaufstieg.", "type": "info", "rank": "10. Platz", "league": "2. Bundesliga", "extra":"" },
  { "date": "09.05.2000", "title": "Saisonabschluss 1999/00: Wiederaufstieg", "description": "Wiederaufstieg als Meister der 2. Bundesliga.", "type": "erfolg", "rank": "1. Platz", "league": "2. Bundesliga", "extra":"Direkter Wiederaufstieg unter Ewald Lienen." },
  { "date": "19.05.2001", "title": "Saisonabschluss 2000/01", "description": "Klassenerhalt in der Bundesliga.", "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "28.05.2002", "title": "Saisonabschluss 2001/02", "description": "Abstieg in die 2. Bundesliga.", "type": "skandal", "rank": "17. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "25.05.2003", "title": "Saisonabschluss 2002/03: Wiederaufstieg", "description": "Wiederaufstieg in die Bundesliga.", "type": "erfolg", "rank": "2. Platz", "league": "2. Bundesliga", "extra":"Postwendende Rückkehr unter Friedhelm Funkel." },
  { "date": "31.01.2004", "title": "Eröffnung des RheinEnergieSTADIONs", "description": "Das umgebaute Müngersdorfer Stadion wird als reines Fußballstadion und Austragungsort der WM 2006 neu eröffnet.", "type": "info", "rank": null, "league": null, "extra":"Erstes Spiel: 1. FC Köln - Borussia Mönchengladbach 1:0." },
  { "date": "15.05.2004", "title": "Saisonabschluss 2003/04", "description": "Abstieg in die 2. Bundesliga.", "type": "skandal", "rank": "17. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "28.05.2005", "title": "Saisonabschluss 2004/05: Wiederaufstieg", "description": "Aufstieg als Meister der 2. Bundesliga.", "type": "erfolg", "rank": "1. Platz", "league": "2. Bundesliga", "extra":"**Lukas Podolski** wird Torschützenkönig der 2. Bundesliga (24 Tore)." },
  { "date": "13.05.2006", "title": "Saisonabschluss 2005/06", "description": "Abstieg aus der Bundesliga und Abschied von Lukas Podolski zum FC Bayern.", "type": "skandal", "rank": "17. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "27.05.2007", "title": "Saisonabschluss 2006/07", "description": "Verpasster direkter Wiederaufstieg.", "type": "info", "rank": "9. Platz", "league": "2. Bundesliga", "extra":"Christoph Daum übernimmt im November 2006." },
  { "date": "18.05.2008", "title": "Saisonabschluss 2007/08: Wiederaufstieg", "description": "Wiederaufstieg in die 1. Bundesliga.", "type": "erfolg", "rank": "3. Platz", "league": "2. Bundesliga", "extra":"Aufstieg unter Trainer Christoph Daum. **Milivoje Novakovic** wird Torschützenkönig der 2. Bundesliga (20 Tore)." },
  { "date": "23.05.2009", "title": "Saisonabschluss 2008/09", "description": "Klassenerhalt in der Bundesliga.", "type": "info", "rank": "12. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "08.05.2010", "title": "Saisonabschluss 2009/10", "description": "Klassenerhalt in der Bundesliga.", "type": "info", "rank": "13. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "14.05.2011", "title": "Saisonabschluss 2010/11", "description": "Klassenerhalt in der Bundesliga.", "type": "info", "rank": "10. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "05.05.2012", "title": "Saisonabschluss 2011/12", "description": "Abstieg in die 2. Bundesliga als Tabellenletzter.", "type": "skandal", "rank": "18. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "19.05.2013", "title": "Saisonabschluss 2012/13", "description": "Verpasster direkter Wiederaufstieg.", "type": "info", "rank": "5. Platz", "league": "2. Bundesliga", "extra":"" },
  { "date": "11.05.2014", "title": "Saisonabschluss 2013/14: Wiederaufstieg", "description": "Aufstieg als Meister der 2. Bundesliga.", "type": "erfolg", "rank": "1. Platz", "league": "2. Bundesliga", "extra":"Beginn einer stabileren Phase unter Peter Stöger." },
  { "date": "23.05.2015", "title": "Saisonabschluss 2014/15", "description": "Souveräner Klassenerhalt.", "type": "info", "rank": "12. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "14.05.2016", "title": "Saisonabschluss 2015/16", "description": "" , "type": "info", "rank": "9. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "27.05.2017", "title": "Saisonabschluss 2016/17: Rückkehr nach Europa", "description": "Qualifikation für die UEFA Europa League nach 25 Jahren Abwesenheit.", "type": "erfolg", "rank": "5. Platz", "league": "Bundesliga", "extra":"Der größte sportliche Erfolg der jüngeren Vergangenheit unter Peter Stöger." },
  { "date": "12.05.2018", "title": "Saisonabschluss 2017/18", "description": "Abstieg in die 2. Bundesliga.", "type": "skandal", "rank": "18. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "12.05.2019", "title": "Saisonabschluss 2018/19: Wiederaufstieg", "description": "Wiederaufstieg als Meister der 2. Bundesliga.", "type": "erfolg", "rank": "1. Platz", "league": "2. Bundesliga", "extra":"**Simon Terodde** wird Torschützenkönig der 2. Bundesliga (29 Tore)." },
  { "date": "27.06.2020", "title": "Saisonabschluss 2019/20", "description": "Klassenerhalt in der Bundesliga.", "type": "info", "rank": "14. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "22.05.2021", "title": "Saisonabschluss 2020/21", "description": "Klassenerhalt über die Relegation (Sieg gegen Kiel).", "type": "info", "rank": "16. Platz", "league": "Bundesliga", "extra":"Endete mit emotionalen Szenen unter Interimstrainer Friedhelm Funkel." },
  { "date": "01.07.2021", "title": "Steffen Baumgart wird Cheftrainer", "description": "Der Beginn einer neuen, emotionalen Ära, die den Verein zurück in den Europapokal führt.", "type": "info", "rank": null, "league": null, "extra":"" },
  { "date": "14.05.2022", "title": "Saisonabschluss 2021/22: Conference League", "description": "Qualifikation für die UEFA Europa Conference League.", "type": "erfolg", "rank": "7. Platz", "league": "Bundesliga", "extra":"Erfolgreiche Saison unter Trainer Steffen Baumgart und erste Conference-League-Teilnahme." },
  { "date": "27.05.2023", "title": "Saisonabschluss 2022/23", "description": "Souveräner Klassenerhalt.", "type": "info", "rank": "11. Platz", "league": "Bundesliga", "extra":"" },
  { "date": "18.05.2024", "title": "Saisonabschluss 2023/24", "description": "Abstieg in die 2. Bundesliga am letzten Spieltag.", "type": "skandal", "rank": "17. Platz", "league": "Bundesliga", "extra":"Die Niederlage gegen Heidenheim besiegelte den siebten Abstieg. Trainer: Timo Schultz." }
];

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
    
    yearGroupDiv.appendChild(yearTitle);

    // Jahr-Content (Der aufklappbare Bereich)
    const yearContent = document.createElement('div');
    yearContent.classList.add('year-content');
    
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
        yearContent.classList.toggle('closed');
        yearTitle.classList.toggle('closed');
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
        
        const year = document.getElementById('reportYear').value;
        const title = document.getElementById('reportTitle').value;
        const description = document.getElementById('reportDescription').value;
        
        // Hier würde normalerweise die Logik zum Senden der Daten an einen Server stehen
        reportMessage.textContent = `Vielen Dank! Ihr Ereignis "${title}" wurde gemeldet.`;
        reportForm.reset();
        
        setTimeout(() => {
            reportMessage.textContent = '';
        }, 5000);
    });
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    initEventListeners();
});