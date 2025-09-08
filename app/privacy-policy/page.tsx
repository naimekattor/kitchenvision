import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Impressum und Datenschutzerklärung
        </h1>

        {/* Impressum Section */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Impressum
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>CONTE Küche & Raum GmbH</strong>
            <br />
            Hauptstr. 36
            <br />
            D-83527 Haag in Oberbayern
          </p>
          <p className="text-gray-600 mb-4">
            Telefon: 08072/6869555
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@contekuechen.de"
              className="text-blue-600 hover:underline"
            >
              info@contekuechen.de
            </a>
            <br />
            <a
              href="http://www.contekuechen.de"
              className="text-blue-600 hover:underline"
            >
              www.contekuechen.de
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            USt ID: DE334377741
            <br />
            Handelsregister: HRB 29094 Traunstein
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Vertretungsberechtigt:</strong>
            <br />
            Die GmbH wird durch den Geschäftsführer
            <br />
            Daniele Conte vertreten.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </strong>
            <br />
            Daniele Conte
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Streitbeilegung
          </h3>
          <p className="text-gray-600">
            Die Zufriedenheit unserer Kunden steht für uns an erster Stelle.
            Sollten Sie Beschwerden im Zusammenhang mit unseren Leistungen
            haben, können Sie sich deshalb jederzeit an uns wenden und uns unter{" "}
            <a
              href="mailto:info@contekuechen.de"
              className="text-blue-600 hover:underline"
            >
              info@contekuechen.de
            </a>{" "}
            kontaktieren. Wir werden dann gemeinsam eine einvernehmliche Lösung
            suchen. An einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle nehmen wir nicht teil.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Haftungshinweis
          </h3>
          <p className="text-gray-600">
            Es wird keine Haftung für die Richtigkeit, Vollständigkeit und
            Aktualität der Inhalte der eigenen Webseite übernommen. Auf die
            Gestaltung und die Inhalte verlinkter Webseiten haben wir keinerlei
            Einfluss. Deshalb distanzieren wir uns hiermit ausdrücklich von
            allen Inhalten aller verlinkten Seiten Dritter und machen uns diese
            Inhalte nicht zu eigen. Die verlinkten Seiten wurden zum Zeitpunkt
            der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
            permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
            ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
            Bei bekannt werden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
        </section>

        {/* Datenschutz Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Datenschutzinformation
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            I. Gegenstand dieser Datenschutzerklärung
          </h3>
          <p className="text-gray-600 mb-4">
            Wir freuen uns über Ihr Interesse an unserem Internetauftritt und
            unseren Angeboten auf unseren Webseiten. Der Schutz Ihrer
            personenbezogenen Daten (im Folgenden kurz „Daten“) ist uns ein
            großes und sehr wichtiges Anliegen. Als personenbezogene Daten
            gelten alle Angaben, die einen Rückschluss auf Ihre Identität als
            Nutzer unseres Angebotes zulassen (z.B. Name, E-Mail-Adresse,
            Anschrift).
          </p>
          <p className="text-gray-600 mb-4">
            Nachfolgend möchten wir Sie daher ausführlich darüber informieren,
            welche Daten bei Ihrem Besuch unseres Internetauftritts und Nutzung
            unserer dortigen Angebote erhoben und wie diese von uns im Folgenden
            verarbeitet oder genutzt werden, ebenso wie, welche begleitenden
            Schutzmaßnahmen wir auch in technischer und organisatorischer
            Hinsicht getroffen haben.
          </p>
          <p className="text-gray-600">
            Der Nutzung der auf unserer Internetseite veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Wir behalten uns ausdrücklich rechtliche
            Schritte im Falle der unverlangten Zusendung von Werbeinformationen
            vor.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            II. Name und Anschrift des Verantwortlichen
          </h3>
          <p className="text-gray-600 mb-4">
            Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und
            anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie
            sonstiger datenschutzrechtlicher Bestimmungen ist:
          </p>
          <p className="text-gray-600 mb-4">
            <strong>CONTE Küche & Raum GmbH</strong>
            <br />
            Hauptstr. 36, D-83527 Haag in Oberbayern
            <br />
            Telefon 08072/6869555
            <br />
            E-Mail{" "}
            <a
              href="mailto:info@contekuechen.de"
              className="text-blue-600 hover:underline"
            >
              info@contekuechen.de
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Vertretungsberechtigt:</strong>
            <br />
            Die GmbH wird durch den Geschäftsführer
            <br />
            Daniele Conte vertreten.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            Kontaktdaten des Datenschutzbeauftragten
          </h4>
          <p className="text-gray-600 mb-4">
            Die Kontaktdaten des Datenschutzbeauftragten sind:
          </p>
          <p className="text-gray-600 mb-4">
            Daniele Conte
            <br />
            Hauptstr. 36
            <br />
            Telefon 0176/75876349
            <br />
            E-Mail{" "}
            <a
              href="mailto:info@contekuechen.de"
              className="text-blue-600 hover:underline"
            >
              info@contekuechen.de
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            III. Datenverarbeitung
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            1. Verarbeitung personenbezogener Daten
          </h4>
          <p className="text-gray-600 mb-4">
            Wir erheben und verwenden personenbezogene Daten unserer Nutzer
            grundsätzlich nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Erhebung und Verwendung personenbezogener
            Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
            Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
            vorherige Einholung einer Einwilligung aus tatsächlichen Gründen
            nicht möglich ist und die Verarbeitung der Daten durch gesetzliche
            Vorschriften gestattet ist.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            2. Rechtsgrundlage für die Verarbeitung personenbezogener Daten
          </h4>
          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.1.
          </h5>
          <p className="text-gray-600 mb-4">
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
            Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
            lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage für
            die Verarbeitung personenbezogener Daten.
          </p>
          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.2.
          </h5>
          <p className="text-gray-600 mb-4">
            Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
            eines Vertrages, dessen Vertragspartei die betroffene Person ist,
            erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
            Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
            Durchführung vorvertraglicher Maßnahmen erforderlich sind.
          </p>
          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.3.
          </h5>
          <p className="text-gray-600 mb-4">
            Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich ist, der unsere Behörde
            unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            3. Löschung der Daten/ Speicherdauer
          </h4>
          <p className="text-gray-600 mb-4">
            Die personenbezogenen Daten der betroffenen Person werden gelöscht
            oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
            Speicherung kann darüber hinaus dann erfolgen, wenn dies durch den
            europäischen oder nationalen Gesetzgeber in unionsrechtlichen
            Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
            Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
            Löschung der Daten erfolgt auch dann, wenn eine durch die genannten
            Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
            Erforderlichkeit zur weiteren Speicherung der Daten für einen
            Vertragsabschluss oder eine Vertragserfüllung besteht.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            IV. Bereitstellung der Website für informatorische Nutzung
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            1. Beschreibung und Umfang der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Umfang und Art der Erhebung und Verwendung Ihrer Daten unterscheidet
            sich danach, ob Sie unseren Internetauftritt nur zum Abruf von
            Informationen besuchen oder direkt Kontakt mit uns aufnehmen. Für
            die nur informatorische Nutzung unseres Internetauftritts ist es
            grundsätzlich nicht erforderlich, dass Sie personenbezogene Daten
            angeben.
          </p>
          <p className="text-gray-600 mb-4">
            Vielmehr erheben und verwenden wir in diesem Fall nur diejenigen
            Ihrer Daten, die uns Ihr Internetbrowser automatisch übermittelt,
            wie etwa:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Datum und Uhrzeit des Abrufs einer unserer Internetseiten</li>
            <li>Ihren Browsertyp</li>
            <li>die Browser-Einstellungen</li>
            <li>das verwendete Betriebssystem</li>
            <li>die von Ihnen zuletzt besuchte Seite</li>
            <li>
              die übertragene Datenmenge und der Zugriffsstatus (Datei
              übertragen, Datei nicht gefunden etc.) sowie
            </li>
            <li>Ihre IP-Adresse.</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Diese Daten erheben und verwenden wir bei einem informatorischen
            Besuch ausschließlich in nicht-personenbezogener Form. Dies erfolgt,
            um die Nutzung der von Ihnen abgerufenen Internetseiten überhaupt zu
            ermöglichen, zu statistischen Zwecken sowie zur Verbesserung unseres
            Internetangebots. Die IP-Adresse speichern wir nur für die Dauer
            Ihres Besuchs, eine personenbezogene Auswertung findet nicht statt.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            2. Rechtsgrundlage
          </h4>
          <p className="text-gray-600 mb-4">
            Rechtsgrundlage für die vorübergehende Speicherung der Daten ist
            Art. 6 Abs. 1 lit. a, b DSGVO.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            3. Zweck der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Die vorübergehende Speicherung der IP-Adresse durch das System ist
            notwendig, um eine Auslieferung der Website an den Rechner der
            Nutzerin bzw. des Nutzers zu ermöglichen. Hierfür muss die
            IP-Adresse der Nutzerin/des Nutzers für die Dauer der Sitzung
            gespeichert bleiben.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            4. Dauer der Speicherung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
            ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung
            der Daten zur Bereitstellung der Website ist dies der Fall, wenn die
            jeweilige Sitzung beendet ist.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            5. Widerspruchs- und Beseitigungsmöglichkeit
          </h4>
          <p className="text-gray-600 mb-4">
            Die Erfassung der Daten zur Bereitstellung der Website und die
            Speicherung der Daten in Logfiles ist für den Betrieb der
            Internetseite zwingend erforderlich.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            V. Kontaktaufnahme über unsere Website
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            1. Beschreibung und Umfang der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Soweit Sie uns über unseren Internetauftritt kontaktieren, ist es
            für die weiterführende Korrespondenz notwendig, dass Sie dazu
            weitere Daten angeben. Es handelt sich um diejenigen Daten, die zur
            jeweiligen Abwicklung erforderlich sind, insbesondere Ihre
            Telefonnummer/ E-Mailadresse oder postalische Anschrift. Diese
            Angaben können Sie freiwillig machen und dienen ausschließlich dem
            Zweck, die von Ihnen gewünschte Rücksprache zu tätigen. Wenn Sie
            eine Anfrage über das Kontaktformular oder per E-Mail an die uns
            richten, werden Ihre Daten ausschließlich für die Korrespondenz mit
            Ihnen verwendet.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            2. Rechtsgrundlage für die Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Nutzung der individuellen Dienste/Log-in Bereiche erfolgt
            aufgrund von Anmeldung der Nutzerin/des Nutzers auf der Website.
            Rechtsgrundlage für die Verarbeitung der Daten nach Anmeldung zu den
            individuellen Diensten/Log-in Bereiche durch die Nutzerinnen und
            Nutzer ist bei Vorliegen einer Einwilligung der Nutzerinnen und
            Nutzer Art. 6 Abs. 1 lit. a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie unser Kontaktformular für Anfragen einen bestehenden
            Vertrag bzw. einen möglichen Vertragsschluss betreffend verwenden,
            ist die Rechtsgrundlage der Datenverarbeitung die Durchführung
            (vor-)vertraglicher Maßnahmen auf Anfrage des Betroffenen, Art. 6
            Abs. Satz 1 lit. b DSGVO.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            3. Zweck der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Erhebung Daten der Nutzerinnen und Nutzer dient dazu, die
            individuellen Dienste/Log-in Bereiche verwenden zu können.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            4. Dauer der Speicherung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
            ihrer Erhebung nicht mehr erforderlich sind. Die für die Nutzung der
            individuellen Dienste/Log-in Bereiche angegebenen personenbezogenen
            Daten werden gespeichert, bis sich die Nutzerin bzw. der Nutzer vom
            jeweiligen Dienst abmeldet.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            5. Widerspruchs- und Beseitigungsmöglichkeit
          </h4>
          <p className="text-gray-600 mb-4">
            Eine Abmeldung von den individuellen Diensten ist jederzeit möglich.
            In Falle der Abmeldung werden die personenbezogenen Daten
            unverzüglich gelöscht.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            VI. Newsletter
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            1. Beschreibung und Umfang der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Um Ihnen unseren Newsletter zusenden zu können, verwenden wir das
            sogenannte Double Opt-In-Verfahren. Nur wenn Sie uns zuvor
            ausdrücklich bestätigt haben, dass Sie den Newsletter erhalten
            wollen, werden wir Ihnen eine Aktivierungs-E-Mail zusenden und Sie
            bitten, durch das Anklicken eines in dieser E-Mail enthaltenen Links
            zu bestätigen, dass Sie unseren Newsletter erhalten möchten. Für die
            Verarbeitung der Daten wird im Rahmen des Anmeldevorgangs Ihre
            Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            2. Rechtsgrundlage für die Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Der Newsletter-Versand erfolgt aufgrund von Anmeldung der
            Nutzerin/des Nutzers auf der Website. Rechtsgrundlage für die
            Verarbeitung der Daten nach Anmeldung zum Newsletter durch die
            Nutzerinnen und Nutzer ist bei Vorliegen einer Einwilligung Art. 6
            Abs. 1 lit. a DSGVO.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            3. Zweck der Datenverarbeitung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Erhebung der Daten der Nutzerinnen und Nutzer dient dazu, den
            Newsletter zuzustellen.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            4. Dauer der Speicherung
          </h4>
          <p className="text-gray-600 mb-4">
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
            ihrer Erhebung nicht mehr erforderlich sind. Die E-Mail-Adresse der
            Nutzerin oder des Nutzers wird demnach ab Anmeldung zum Newsletter
            bis zur Beendigung des Abonnements gespeichert.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            5. Widerspruchs- und Beseitigungsmöglichkeit
          </h4>
          <p className="text-gray-600 mb-4">
            Das Abonnement des Newsletters kann durch die Nutzerin/den Nutzer
            jederzeit gekündigt werden. Zu diesem Zweck findet sich in jedem
            Newsletter ein entsprechender Link. In Falle der Kündigung werden
            die personenbezogenen Daten unverzüglich gelöscht.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            VII. Verwendung von Cookies
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            1. Allgemeines
          </h4>
          <p className="text-gray-600 mb-4">
            Wir verwenden auf unseren Internetseiten Cookies. Cookies sind
            kleine Textdateien, die in der Regel aus Buchstaben und Zahlen
            bestehen und bei Besuch bestimmter Internetseiten auf dem Computer
            des Nutzers abgelegt werden.
          </p>
          <p className="text-gray-600 mb-4">
            Einige dieser Cookies sind für die Funktion unserer Webseite
            unerlässlich, während andere Cookies uns dabei helfen, unsere
            Webseite zu verbessern, indem wir Einblicke in die Nutzung der
            Webseite durch Sie erhalten.
          </p>
          <p className="text-gray-600 mb-4">
            Standardmäßig verwenden wir nur notwendige Cookies. Notwendige
            Cookies ermöglichen die Kernfunktionalitäten unserer Webseite. Die
            Webseite kann ohne diese Cookies nicht richtig angezeigt werden bzw.
            einzelne Bereiche funktionieren unter Umständen nicht richtig.
            Erforderliche Cookies können nur durch entsprechende Einstellungen
            in Ihrem Browser verhindert werden.
          </p>
          <p className="text-gray-600 mb-4">
            Cookies, die nicht für die Funktion der Webseite notwendig sind
            („nicht-notwendige Cookies“), verwenden wir nur, wenn Sie über unser
            Cookie-Banner Ihre Einwilligung gegeben haben. Sie können jederzeit
            zu unserer Datenschutzinformation zurückkehren und Ihre Einwilligung
            widerrufen bzw. Änderungen vornehmen. Folgende zusätzliche
            Möglichkeiten bestehen in Bezug auf Cookies:
          </p>
          <p className="text-gray-600 mb-4">
            Falls Sie nicht möchten, dass Cookies auf Ihrem Rechner gespeichert
            werden, können Sie die entsprechende Option in den
            Systemeinstellungen Ihres Browsers deaktivieren. Gespeicherte
            Cookies können in den Systemeinstellungen des Browsers gelöscht
            werden. Bitte beachten Sie, dass die Deaktivierung von Cookies zu
            Funktionseinschränkungen dieser Webseite führen kann.
          </p>
          <p className="text-gray-600 mb-4">
            Sie können dem Einsatz von Cookies, die dem Webseite-Tracking und
            Werbezwecken dienen, über die Netzwerkwerbeinitiative{" "}
            <a
              href="http://optout.networkadvertising.org/"
              className="text-blue-600 hover:underline"
            >
              http://optout.networkadvertising.org/
            </a>{" "}
            oder die amerikanische Webseite{" "}
            <a
              href="http://www.aboutads.info/choices"
              className="text-blue-600 hover:underline"
            >
              http://www.aboutads.info/choices
            </a>{" "}
            oder die europäische Webseite{" "}
            <a
              href="http://www.youronlinechoices.com/uk/your-ad-choices/"
              className="text-blue-600 hover:underline"
            >
              http://www.youronlinechoices.com/uk/your-ad-choices/
            </a>{" "}
            widersprechen.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            2. Google Analytics
          </h4>
          <p className="text-gray-600 mb-4">
            Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website
            Google Analytics 4 eingesetzt, ein Webanalysedienst der Google LLC.
            Verantwortliche Stelle für Nutzer in der EU/ dem EWR und der Schweiz
            ist Google Ireland Limited, Google Building Gordon House, 4 Barrow
            St, Dublin, D04 E5W5, Irland („Google“).
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.1 Beschreibung und Umfang
          </h5>
          <p className="text-gray-600 mb-4">
            Google Analytics verwendet Cookies, die eine Analyse der Benutzung
            unserer Webseiten durch Sie ermöglichen. Die mittels der Cookies
            erhobenen Informationen über Ihre Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert.
          </p>
          <p className="text-gray-600 mb-4">
            Wir nutzen die Funktion User-ID. Mithilfe der User ID können wir
            einer oder mehreren Sitzungen (und den Aktivitäten innerhalb dieser
            Sitzungen) eine eindeutige, dauerhafte ID zuweisen und
            Nutzerverhalten geräteübergreifend analysieren.
          </p>
          <p className="text-gray-600 mb-4">
            Wir nutzen Google Signale. Damit werden in Google Analytics
            zusätzliche Informationen zu Nutzern erfasst, die personalisierte
            Anzeigen aktiviert haben (Interessen und demographische Daten) und
            Anzeigen können in geräteübergreifenden Remarketing-Kampagnen an
            diese Nutzer ausgeliefert werden.
          </p>
          <p className="text-gray-600 mb-4">
            Bei Google Analytics 4 ist die Anonymisierung von IP-Adressen
            standardmäßig aktiviert. Aufgrund der IP-Anonymisierung wird Ihre
            IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen
            Union oder in anderen Vertragsstaaten des Abkommens über den
            Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die
            volle IP-Adresse an einen Server von Google in den USA übertragen
            und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem
            Browser übermittelte IP-Adresse wird laut Google nicht mit anderen
            Daten von Google zusammengeführt.
          </p>
          <p className="text-gray-600 mb-4">
            Während Ihres Website-Besuchs wird Ihr Nutzerverhalten in Form von
            „Ereignissen“ erfasst. Ereignisse können sein:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Seitenaufrufe</li>
            <li>Erstmaliger Besuch der Website</li>
            <li>Start der Sitzung</li>
            <li>Besuchte Webseiten</li>
            <li>Ihr „Klickpfad“, Interaktion mit der Website</li>
            <li>
              Scrolls (immer wenn ein Nutzer bis zum Seitenende (90%) scrollt)
            </li>
            <li>Klicks auf externe Links</li>
            <li>interne Suchanfragen</li>
            <li>Interaktion mit Videos</li>
            <li>Dateidownloads</li>
            <li>gesehene / angeklickte Anzeigen</li>
            <li>Spracheinstellung</li>
          </ul>
          <p className="text-gray-600 mb-4">Außerdem wird erfasst:</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Ihr ungefährer Standort (Region)</li>
            <li>Datum und Uhrzeit des Besuchs</li>
            <li>Ihre IP-Adresse (in gekürzter Form)</li>
            <li>
              technische Informationen zu Ihrem Browser und den von Ihnen
              genutzten Endgeräten (z.B. Spracheinstellung, Bildschirmauflösung)
            </li>
            <li>Ihr Internetanbieter</li>
            <li>
              die Referrer-URL (über welche Website/ über welches Werbemittel
              Sie auf diese Website gekommen sind)
            </li>
          </ul>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.2. Zwecke der Verarbeitung
          </h5>
          <p className="text-gray-600 mb-4">
            Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre potenziell pseudonyme Nutzung der
            Website auszuwerten und um Reports über die Website-Aktivitäten
            zusammenzustellen. Die durch Google Analytics bereitgestellten
            Reports dienen der Analyse der Leistung unserer Website.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.3 Empfänger
          </h5>
          <p className="text-gray-600 mb-4">
            Empfänger der Daten sind/können sein
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland
            </li>
            <li>
              Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA
            </li>
            <li>
              Alphabet Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043,
              USA
            </li>
          </ul>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.4 Drittlandtransfer
          </h5>
          <p className="text-gray-600 mb-4">
            Für die USA hat die Europäische Kommission am 10.Juli 2023 ihren
            Angemessenheitsbeschluss angenommen. Google LLC ist nach dem EU-US
            Privacy Framework zertifiziert. Da Google-Server weltweit verteilt
            sind und eine Übertragung in Drittländer (beispielsweise nach
            Singapur) nicht völlig ausgeschlossen werden kann, haben wir mit dem
            Anbieter zudem die EU-Standardvertragsklauseln abgeschlossen.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.5 Speicherdauer
          </h5>
          <p className="text-gray-600 mb-4">
            Die von uns gesendeten und mit Cookies verknüpften Daten werden nach
            2 Monaten automatisch gelöscht. Die maximale Lebensdauer der Google
            Analytics Cookies beträgt 2 Jahre. Die Löschung von Daten, deren
            Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
            Monat.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.6 Rechtsgrundlage
          </h5>
          <p className="text-gray-600 mb-4">
            Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung
            gem. Art.6 Abs.1 S.1 lit.a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Zudem hat der Websitebetreiber ein berechtigtes Interesse an der
            Analyse und Verbesserung seiner Werbeangebote, Art. 6 Abs. 1 lit f
            DSGVO:
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            2.7 Widerruf
          </h5>
          <p className="text-gray-600 mb-4">
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen, indem Sie die Cookie-Einstellungen aufrufen und dort
            Ihre Auswahl ändern. Die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung bleibt davon
            unberührt.
          </p>
          <p className="text-gray-600 mb-4">
            Sie können die Speicherung von Cookies auch von vornherein durch
            eine entsprechende Einstellung Ihrer Browser-Software verhindern.
            Wenn Sie Ihren Browser so konfigurieren, dass alle Cookies abgelehnt
            werden, kann es jedoch zu Einschränkung von Funktionalitäten auf
            dieser und anderen Websites kommen. Sie können darüber hinaus die
            Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der
            Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem Sie
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Ihre Einwilligung in das Setzen des Cookies nicht erteilen oder
            </li>
            <li>
              das Browser-Add-on zur Deaktivierung von Google Analytics{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-blue-600 hover:underline"
              >
                HIER
              </a>{" "}
              herunterladen und installieren.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            Nähere Informationen zu Nutzungsbedingungen von Google Analytics und
            zum Datenschutz bei Google finden Sie unter{" "}
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/de/"
              className="text-blue-600 hover:underline"
            >
              https://marketingplatform.google.com/about/analytics/terms/de/
            </a>{" "}
            und unter{" "}
            <a
              href="https://policies.google.com/?hl=de"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/?hl=de
            </a>
            .
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            3. Verwendung von Google Maps
          </h4>
          <p className="text-gray-600 mb-4">
            Soweit Sie Ihre Einwilligung erklärt haben, nutzt diese Website das
            Angebot Google Maps der Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, California 94043, USA. Verantwortliche Stelle für
            Nutzer in der EU/ dem EWR und der Schweiz ist Google Ireland
            Limited, Google Building Gordon House, 4 Barrow St, Dublin, D04
            E5W5, Irland („Google“).
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.1. Beschreibung und Umfang
          </h5>
          <p className="text-gray-600 mb-4">
            Google Maps ist ein Webdienst zur Darstellung von interaktiven
            (Land-)Karten, um geographische Informationen visuell darzustellen.
            Durch die Verwendung können wir Ihnen interaktive Karten direkt in
            der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung
            der Karten-Funktion
          </p>
          <p className="text-gray-600 mb-4">
            Aufgrund des Besuches unserer Webseite erhält Google Information,
            dass Sie die entsprechende Unterseite unserer Webseite aufgerufen
            haben sowie Datum und Uhrzeit des Besuchs auf der betreffenden
            Webseite und IP-Adresse. Dies erfolgt unabhängig davon, ob Sie bei
            Google eingeloggt sind. Wenn Sie eingeloggt sind, werden Ihre Daten
            allerdings Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem
            Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung
            einer Map ausloggen.
          </p>
          <p className="text-gray-600 mb-4">
            Bereits beim Aufrufen derjenigen Unterseiten, in die die Karte von
            Google Maps eingebunden ist, werden Informationen über Ihre Nutzung
            unserer Website (wie z.B. Ihre IP-Adresse) an Server von Google
            übertragen und dort gespeichert, hierbei kann es auch zu einer
            Übermittlung an die Server der Google LLC. in den USA kommen. Dazu
            zählen unter anderem auch die eingegebenen Suchbegriffe, Ihre
            IP-Adresse und auch die Breiten- bzw. Längenkoordinaten. Die
            Speicherung erfolgt unabhängig davon, ob Google ein Nutzerkonto
            bereitstellt, über das Sie eingeloggt sind oder ob ein Nutzerkonto
            besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten
            direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem
            Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung
            des Buttons ausloggen. Google speichert Ihre Daten (selbst für nicht
            eingeloggte Nutzer) als Nutzungsprofile und wertet diese aus.
          </p>
          <p className="text-gray-600 mb-4">
            Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene
            Startadresse gespeichert. Diese Datenspeicherung passiert allerdings
            auf den Webseiten von Google Maps. Wir können Sie darüber nur
            informieren, aber keinen Einfluss nehmen. Da wir Google Maps in
            unsere Webseite eingebunden haben, setzt Google mindestens ein
            Cookie in Ihrem Browser. Dieses Cookie speichert Daten über Ihr
            Userverhalten.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.2 Zweck der Verarbeitung
          </h5>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung ihrer Daten erfolgt, damit Google Maps ihren Dienst
            vollständig anbieten kann. Google nutzt zudem diese Daten, um eigene
            Dienste zu optimieren und individuelle, personalisierte Werbung für
            Sie bereitzustellen.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.3 Empfänger
          </h5>
          <p className="text-gray-600 mb-4">
            Empfänger der Daten sind/können sein
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland
            </li>
            <li>
              Google LLC, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA
            </li>
            <li>
              Alphabet Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043,
              USA
            </li>
          </ul>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.4 Drittlandtransfer
          </h5>
          <p className="text-gray-600 mb-4">
            Für die USA hat die Europäische Kommission am 10.Juli 2023 ihren
            Angemessenheitsbeschluss angenommen. Google LLC ist nach dem EU-US
            Privacy Framework zertifiziert. Da Google-Server weltweit verteilt
            sind und eine Übertragung in Drittländer (beispielsweise nach
            Singapur) nicht völlig ausgeschlossen werden kann, haben wir mit dem
            Anbieter zudem die EU-Standardvertragsklauseln abgeschlossen.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.5 Speicherdauer
          </h5>
          <p className="text-gray-600 mb-4">
            Die Google-Server stehen in Rechenzentren auf der ganzen Welt, wobei
            jedoch die meisten Server sich in Amerika befinden. Aus diesem Grund
            werden Ihre Daten vermehrt in den USA gespeichert. Hier finden Sie
            einen Überblick zu den Google-Rechenzentren:{" "}
            <a
              href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
              className="text-blue-600 hover:underline"
            >
              https://www.google.com/about/datacenters/inside/locations/?hl=de
            </a>
          </p>
          <p className="text-gray-600 mb-4">
            Manche Daten speichert Google für einen festgelegten Zeitraum. Bei
            anderen Daten bietet Google lediglich die Möglichkeit, diese manuell
            zu löschen. Bestimmte Informationen anonymisiert das Unternehmen
            (wie zum Beispiel Werbedaten) in Serverprotokollen, indem sie einen
            Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten
            löschen.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.6 Rechtsgrundlage
          </h5>
          <p className="text-gray-600 mb-4">
            Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung
            gem. Art.6 Abs.1 S.1 lit.a iVm Art. 49 Abs 1 lit a DSGVO.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            3.7 Widerruf
          </h5>
          <p className="text-gray-600 mb-4">
            Zur vorstehend dargestellten Verarbeitung Ihrer Daten haben wir Ihre
            Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie können
            Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen. Ihren Widerruf können Sie schriftlich erklären oder
            indem Sie die Cookie-Einstellungen aufrufen und dort Ihre Auswahl
            ändern.
          </p>
          <p className="text-gray-600 mb-4">
            Ihnen steht ein Widerspruchsrecht gegen die Bildung dieser
            Nutzerprofile zu, wobei Sie sich für dessen Ausübung an Google
            wenden müssen. Wenn Sie mit der künftigen Übermittlung Ihrer Daten
            an Google im Rahmen der Nutzung von Google Maps nicht einverstanden
            sind, besteht auch die Möglichkeit, den Webdienst von Google Maps
            vollständig zu deaktivieren, indem Sie die Anwendung JavaScript in
            Ihrem Browser ausschalten. Google Maps und damit auch die
            Kartenanzeige auf dieser Internetseite kann dann nicht genutzt
            werden.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            4. Matomo
          </h4>
          <p className="text-gray-600 mb-4">
            Wir nutzen den Webanalysedienst Matomo, um die Nutzung unserer
            Webseite analysieren und regelmäßig verbessern zu können. Über die
            gewonnenen Statistiken können wir unser Angebot verbessern und für
            Sie als Nutzer interessanter ausgestalten. Rechtsgrundlage für die
            Nutzung von Matomo ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1
            lit. a) DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Für diese Auswertung werden Cookies auf Ihrem Computer gespeichert.
            Die so erhobenen Informationen speichern wir ausschließlich auf
            unseren Servern in Deutschland. Die Auswertung können Sie durch
            Löschung ggf. vorhandener Cookies verhindern. Wenn Sie die
            Speicherung der Cookies verhindern, weisen wir darauf hin, dass Sie
            gegebenenfalls diese Webseite nicht vollumfänglich nutzen können.
            Die Verhinderung der Speicherung von Cookies ist auch durch
            entsprechende Einstellung in Ihrem Browser möglich. Die Verhinderung
            des Einsatzes von Matomo ist möglich, indem Sie den folgenden Haken
            entfernen und so das Opt-out-Plug-in aktivieren:
          </p>
          <p className="text-gray-600 mb-4">
            Diese Webseite verwendet Matomo mit der Erweiterung „AnonymizeIP“.
            Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine direkte
            Personenbeziehbarkeit kann damit ausgeschlossen werden. Die mittels
            Matomo von Ihrem Browser übermittelte IP-Adresse wird nicht mit
            anderen von uns erhobenen Daten zusammengeführt.
          </p>
          <p className="text-gray-600 mb-4">
            Das Programm Matomo ist ein Open-Source-Projekt. Informationen des
            Drittanbieters zum Datenschutz erhalten Sie unter{" "}
            <a
              href="http://matomo.org/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              http://matomo.org/privacy-policy
            </a>
            .
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            5. Einbindung von YouTube-Videos
          </h4>
          <p className="text-gray-600 mb-4">
            Wir haben YouTube-Videos in unser Online-Angebot eingebunden, die
            auf{" "}
            <a
              href="http://www.youtube.com"
              className="text-blue-600 hover:underline"
            >
              http://www.YouTube.com
            </a>{" "}
            der Google Ireland Limited (Registernummer: 368047), Gordon House,
            Barrow Street, Dublin 4, Irland gespeichert sind und von unserer
            Webseite aus direkt abspielbar sind. Rechtsgrundlage für die Nutzung
            von YouTube ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a)
            und Art. 49 Abs. 1 S. 1 lit. a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Die Videos sind so eingebunden, dass erst Daten über Sie als Nutzer
            an YouTube übertragen werden, wenn Sie die Videos abspielen. Auf die
            dann stattfindende Datenübertragung an Google haben wir keinen
            Einfluss.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt in gemeinsamer Verantwortung
            zwischen Google und uns gemäß Art 26 DSGVO. Mit Google ist
            vereinbart, dass die primäre Verantwortlichkeit gemäß DSGVO für die
            Verarbeitung personenbezogener Daten bei Google liegt und sämtliche
            Pflichten aus der DSGVO im Hinblick auf die Verarbeitung
            personenbezogener Daten von Google erfüllt werden (insbesondere die
            Informationspflichten gemäß Artikel 12 ff. DSGVO, Sicherstellung der
            Betroffenenrechte gemäß Artikel 15 ff. DSGVO, Meldung von
            Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Durch den Besuch auf der Webseite erhält YouTube die Information,
            dass Sie die entsprechende Unterseite unserer Webseite aufgerufen
            haben und Daten zu Standort (GPS-Daten), IP-Adresse und verwendeten
            Geräten inklusive Informationen über Objekte in der Nähe Ihres
            Geräts, wie etwa WLAN-Zugriffspunkte, Funkmasten und
            Bluetooth-fähige Geräte sowie Sensordaten von Ihrem Gerät (siehe
            YouTube Datenschutzinformation des Anbieters). Dies erfolgt
            unabhängig davon, ob Sie bei Google bzw. YouTube eingeloggt sind.
            Wenn Sie eingeloggt sind, werden Ihre Daten allerdings Ihrem Konto
            zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei YouTube
            nicht wünschen, müssen Sie sich vor Aktivierung eines Videos
            ausloggen. YouTube speichert Ihre Daten als Nutzungsprofile und
            nutzt sie für Zwecke der Bereitstellung der Dienste, Wartung und
            Verbesserung der Dienste, Messung der Leistung, Entwicklung neuer
            Dienste und Bereitstellung personalisierter Dienste, einschließlich
            Inhalte und Werbeanzeigen. Ihnen steht gegen die Bildung dieser
            Nutzerprofile ein Widerspruchsrecht zu, wobei Sie sich zur Ausübung
            an YouTube richten müssen.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt im Rahmen dieses Dienstes auch in
            den USA. Die durch die Cookies erzeugten Informationen über
            Benutzung unserer Webseite werden in der Regel an einen Server von
            Google in den USA übertragen und dort gespeichert. Mit der
            Verarbeitung Ihrer Daten in den USA sind entsprechende Risiken
            verbunden. Mit der Abgabe Ihrer Einwilligung über unseren
            Cookie-Banner erklären Sie sich trotz potenzieller Zugriffe durch
            US-Behörden mit der Verarbeitung Ihrer Daten in den USA
            einverstanden, Art. 49 Abs. 1 S. 1 lit. a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Weitere Informationen zu Zweck und Umfang der Datenerhebung und
            ihrer Verarbeitung durch YouTube erhalten Sie in der
            Datenschutzinformation. Dort erhalten Sie auch weitere Informationen
            zu Ihren Rechten und Einstellungsmöglichkeiten zum Schutze Ihrer
            Privatsphäre:
          </p>
          <p className="text-gray-600 mb-4">
            Die YouTube-Datenschutzinformation finden Sie unter{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:underline"
            >
              https://policies.google.com/privacy
            </a>{" "}
            und ein Opt-Out von personalisierter Werbung ist unter{" "}
            <a
              href="https://adssettings.google.com/authenticated"
              className="text-blue-600 hover:underline"
            >
              https://adssettings.google.com/authenticated
            </a>{" "}
            möglich.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            6. Facebook Pixel
          </h4>
          <p className="text-gray-600 mb-4">
            Diese Website nutzt zur Messung der Effektivität unserer
            Marketingmaßnahmen das Besucheraktions-Pixel von Facebook. Anbieter
            dieses Dienstes ist die Facebook Inc., 1601 S. California Ave, Palo
            Alto, CA 94304, USA (“Facebook”). Die erfassten Daten werden nach
            Aussage von Facebook auch in die USA und in andere Drittländer
            übertragen.
          </p>
          <p className="text-gray-600 mb-4">
            So kann das Verhalten der Seitenbesucher nachverfolgt werden,
            nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die
            Website des Anbieters weitergeleitet wurden. Dadurch können die
            Wirksamkeit der Facebook-Werbeanzeigen für statistische und
            Marktforschungszwecke ausgewertet werden und zukünftige
            Werbemaßnahmen optimiert werden.
          </p>
          <p className="text-gray-600 mb-4">
            Die erhobenen Daten sind für uns als Betreiber dieser Website
            anonym, wir können keine Rückschlüsse auf die Identität der Nutzer
            ziehen. Die Daten werden aber von Facebook gespeichert und
            verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil
            möglich ist und Facebook die Daten für eigene Werbezwecke,
            entsprechend der Facebook-Datenverwendungsrichtlinie verwenden kann.
            Dadurch kann Facebook das Schalten von Werbeanzeigen auf Seiten von
            Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung
            der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
          </p>
          <p className="text-gray-600 mb-4">
            Die Nutzung von Facebook-Pixel erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
            an effektiven Werbemaßnahmen unter Einschluss der sozialen Medien.
            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO; diese Einwilligung ist jederzeit widerrufbar. Sie können Ihre
            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem
            Sie die Cookie-Einstellungen aufrufen und dort Ihre Auswahl ändern.
          </p>
          <p className="text-gray-600 mb-4">
            Die Datenübertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gestützt. Details finden
            Sie hier:{" "}
            <a
              href="https://www.facebook.com/legal/EU_data_transfer_addendum"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/legal/EU_data_transfer_addendum
            </a>{" "}
            und{" "}
            <a
              href="https://de-de.facebook.com/help/566994660333381"
              className="text-blue-600 hover:underline"
            >
              https://de-de.facebook.com/help/566994660333381
            </a>
            .
          </p>
          <p className="text-gray-600 mb-4">
            In den Datenschutzhinweisen von Facebook finden Sie weitere Hinweise
            zum Schutz Ihrer Privatsphäre:{" "}
            <a
              href="https://de-de.facebook.com/about/privacy/"
              className="text-blue-600 hover:underline"
            >
              https://de-de.facebook.com/about/privacy/
            </a>
            .
          </p>
          <p className="text-gray-600 mb-4">
            Sie können außerdem die Remarketing-Funktion „Custom Audiences“ im
            Bereich Einstellungen für Werbeanzeigen unter{" "}
            <a
              href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
            </a>{" "}
            deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie kein Facebook Konto besitzen, können Sie nutzungsbasierte
            Werbung von Facebook auf der Website der European Interactive
            Digital Advertising Alliance deaktivieren:{" "}
            <a
              href="http://www.youronlinechoices.com/de/praferenzmanagement/"
              className="text-blue-600 hover:underline"
            >
              http://www.youronlinechoices.com/de/praferenzmanagement/
            </a>
            .
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            7. Einbindung sozialer Netzwerke (Facebook, X, Instagram, Pinterest)
          </h4>
          <p className="text-gray-600 mb-4">
            Wir nutzen sogenannte Social Plugins, durch die Sie Inhalte über
            soziale Netzwerke teilen können. Wir setzen dabei Techniken zum
            Schutz Ihrer Privatsphäre ein die verhindern, dass bereits bei
            Aufruf unserer Seiten eine Datenübertragung an die Anbieter der
            sozialen Netzwerke erfolgt. Eine Datenübertragung erfolgt erst bei
            aktivem Anklicken des jeweiligen Plugins.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            a. Facebook
          </h5>
          <p className="text-gray-600 mb-4">
            Wir setzen auf unserer Webseite einen Plugin von Facebook (Facebook
            Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland) ein. Sie erkennen diesen an dem Facebook-Logo oder dem
            „Like-Button“ („Gefällt mir“). Eine Übersicht über die Facebook
            Plugins finden Sie hier:{" "}
            <a
              href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
              className="text-blue-600 hover:underline"
            >
              https://developers.facebook.com/docs/plugins/?locale=de_DE
            </a>
            .
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie eine Seite unserer Webseite aufrufen, wird für den Fall,
            dass Sie aktiv den Facebook-Button betätigen, eine direkte
            Verbindung zwischen Ihrem Browser und dem Facebook-Server
            hergestellt sowie ein Cookie gesetzt. Die erfassten Daten werden
            nach Aussage von Facebook auch in die USA und in andere Drittländer
            übertragen. Bitte beachten Sie, dass der Schutz von
            personenbezogenen Daten in den USA nicht dem von der EU geforderten
            Datenschutzniveau entspricht. Insbesondere fehlen durchsetzbare
            Rechte, die den Schutz Ihrer Daten gegen den Zugriff von staatlichen
            Stellen absichern. Es besteht also das Risiko, dass diese
            staatlichen Stellen auf die personenbezogenen Daten zugreifen
            können, ohne dass der Datenübermittler oder der Empfänger dies
            wirksam verhindern können. Wenn Sie nicht wünschen, dass Facebook
            den Besuch dieser Website Ihrem Facebook-Nutzerkonto zuordnen kann,
            loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt in gemeinsamer Verantwortung von
            Facebook und uns gemäß Art 26 DSGVO. Die primäre Verantwortlichkeit
            für die Verarbeitung personenbezogener Daten im Rahmen der Plugins
            liegt bei Facebook und sämtliche Pflichten aus der DSGVO werden im
            Hinblick auf die Verarbeitung personenbezogenen Daten von Facebook
            erfüllt (insbesondere die Informationspflichten gemäß Artikel 12 ff.
            DSGVO, Sicherstellung der Betroffenenrechte gemäß Artikel 15 ff.
            DSGVO, Meldung von Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Die Datenschutzinformation von Facebook finden Sie unter{" "}
            <a
              href="https://www.facebook.com/about/privacy/"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/about/privacy/
            </a>{" "}
            Einstellung zur Verarbeitung der personenbezogenen Daten und
            Opt-Outs können unter folgendem Link vorgenommen werden:{" "}
            <a
              href="https://www.facebook.com/settings?tab=ads"
              className="text-blue-600 hover:underline"
            >
              https://www.facebook.com/settings?tab=ads
            </a>{" "}
            und{" "}
            <a
              href="http://www.youronlinechoices.com"
              className="text-blue-600 hover:underline"
            >
              http://www.youronlinechoices.com
            </a>
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            b. X
          </h5>
          <p className="text-gray-600 mb-4">
            In unsere Webseite sind evtl. Plugins des Kurznachrichtennetzwerks X
            International Company, One Cumberland Place, Fenian Street, Dublin
            2, D02 AX07 IRLAND (X) integriert. Die X-Plugins (tweet-Button)
            erkennen Sie an dem X-Logo auf unserer Seite. Eine Übersicht über
            tweet-Buttons finden Sie hier{" "}
            <a
              href="https://about.x.com/resources/buttons"
              className="text-blue-600 hover:underline"
            >
              https://about.x.com/resources/buttons
            </a>
            . Rechtsgrundlage für die Nutzung von X ist Ihre Einwilligung gemäß
            Art. 6 Abs. 1 S. 1 lit. a) und Art. 49 Abs. 1 S. 1 lit. a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie eine Seite unserer Webseite aufrufen, wird für den Fall,
            dass Sie aktiv den X-Button betätigen, eine direkte Verbindung
            zwischen Ihrem Browser und dem X-Server hergestellt sowie ein Cookie
            gesetzt. X erhält dadurch die Information, dass Sie mit Ihrer
            IP-Adresse unsere Seite besucht haben. Wenn Sie den X „tweet-Button“
            anklicken, während Sie in Ihrem X-Account eingeloggt sind, können
            Sie die Inhalte unserer Seiten auf Ihrem X-Profil verlinken. Dadurch
            kann X den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir
            weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
            vom Inhalt der übermittelten Daten sowie deren Nutzung durch X
            erhalten.
          </p>
          <p className="text-gray-600 mb-4">
            Die von X erfassten Daten werden auch in die USA übertragen.
            Aufgrund des am 10.07.2023 von der Europäische Kommission
            angenommenen Angemessenheitsbeschluss für das EU-U.S. Data Privacy
            können seitdem Übermittlungen von personenbezogenen Daten an
            bestimmte Organisationen in den USA auf dieser Grundlage erfolgen.
            Dennoch kann kein generelles angemessenes Datenschutzniveau für
            Übermittlungen an Organisationen in den USA vorausgesetzt werden
            kann. Datenexporteure aus der EU müssen zunächst vorab prüfen, dass
            die Organisation, an die übermittelt wird, unter dem EU-U.S. Data
            Privacy Framework zertifiziert ist.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt in gemeinsamer Verantwortung von
            X und uns gemäß Art 26 DSGVO. Die primäre Verantwortlichkeit für die
            Verarbeitung personenbezogener Daten im Rahmen der Plugins liegt bei
            X und sämtliche Pflichten aus der DSGVO werden im Hinblick auf die
            Verarbeitung personenbezogener Daten von X erfüllt (insbesondere die
            Informationspflichten gemäß Artikel 12 ff. DSGVO, Sicherstellung der
            Betroffenenrechte gemäß Artikel 15 ff. DSGVO, Meldung von
            Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie nicht wünschen, dass X den Besuch unserer Seiten zuordnen
            kann, loggen Sie sich bitte aus Ihrem X-Benutzerkonto aus.
          </p>
          <p className="text-gray-600 mb-4">
            Weitere Informationen hierzu finden Sie in der
            Datenschutzinformation von X unter{" "}
            <a
              href="https://x.com/privacy"
              className="text-blue-600 hover:underline"
            >
              https://x.com/privacy
            </a>
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            c. Instagram
          </h5>
          <p className="text-gray-600 mb-4">
            Auf unserer Website werden evtl. auch sogenannte Social Plugins
            („Plugins“) von Instagram verwendet, das von der Instagram LLC.,
            1601 Willow Road, Menlo Park, CA 94025, USA („Instagram“) betrieben
            wird. Rechtsgrundlage für die Nutzung von Instagram ist Ihre
            Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a) und Art. 49 Abs. 1 S.
            1 lit. a DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Die Plugins sind mit einem Instagram-Logo beispielsweise in Form
            einer „Instagram-Kamera“ gekennzeichnet.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie eine Seite unseres Webauftritts aufrufen, wird für den
            Fall, dass Sie aktiv den Instagram-Button betätigen, stellt Ihr
            Browser eine direkte Verbindung zu den Servern von Instagram her.
            Der Inhalt des Plugins wird von Instagram direkt an Ihren Browser
            übermittelt und in die Seite eingebunden. Durch diese Einbindung
            erhält Instagram die Information, dass Ihr Browser die entsprechende
            Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein
            Instagram-Profil besitzen oder gerade nicht bei Instagram eingeloggt
            sind.
          </p>
          <p className="text-gray-600 mb-4">
            Diese Information und insbesondere auch Ihrer IP-Adresse wird von
            Ihrem Browser direkt an einen Server von Instagram in die USA
            übermittelt und dort gespeichert. Sind Sie bei Instagram eingeloggt,
            kann Instagram den Besuch unserer Website Ihrem Instagram-Account
            unmittelbar zuordnen. Wenn Sie mit den Plugins interagieren, zum
            Beispiel das „Instagram“-Button betätigen, wird diese Information
            ebenfalls direkt an einen Server von Instagram übermittelt und dort
            gespeichert.
          </p>
          <p className="text-gray-600 mb-4">
            Die erfassten Daten werden auch in die USA übertragen. Bitte
            beachten Sie, dass der Schutz von personenbezogenen Daten in den USA
            nicht dem von der EU geforderten Datenschutzniveau entspricht.
            Insbesondere fehlen durchsetzbare Rechte, die den Schutz Ihrer Daten
            gegen den Zugriff von staatlichen Stellen absichern. Es besteht also
            das Risiko, dass diese staatlichen Stellen auf die personenbezogenen
            Daten zugreifen können, ohne dass der Datenübermittler oder der
            Empfänger dies wirksam verhindern können.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt in gemeinsamer Verantwortung von
            Instagram und uns gemäß Art 26 DSGVO. Die primäre Verantwortlichkeit
            für die Verarbeitung personenbezogener Daten im Rahmen der Plugins
            liegt bei Instagram und sämtliche Pflichten aus der DSGVO werden im
            Hinblick auf die Verarbeitung personenbezogener Daten von Instagram
            erfüllt (insbesondere die Informationspflichten gemäß Artikel 12 ff.
            DSGVO, Sicherstellung der Betroffenenrechte gemäß Artikel 15 ff.
            DSGVO, Meldung von Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Die Informationen werden außerdem auf Ihrem Instagram-Account
            veröffentlicht und dort Ihren Kontakten angezeigt.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie nicht möchten, dass Instagram die über unseren Webauftritt
            gesammelten Daten unmittelbar Ihrem Instagram-Account zuordnet,
            müssen Sie sich vor Ihrem Besuch unserer Website bei Instagram
            ausloggen.
          </p>
          <p className="text-gray-600 mb-4">
            Weitere Informationen hierzu Sie in der Datenschutzinformation unter{" "}
            <a
              href="https://help.instagram.com/155833707900388"
              className="text-blue-600 hover:underline"
            >
              https://help.instagram.com/155833707900388
            </a>{" "}
            von Instagram.
          </p>

          <h5 className="text-base font-semibold text-gray-800 mt-3 mb-2">
            d. Pinterest
          </h5>
          <p className="text-gray-600 mb-4">
            Auf unserer Website werden evtl. auch sogenannte Social Plugins
            („Plugins“) von Pinterest verwendet, das von der Pinterest Inc., 635
            High Street, Palo Alto, CA, 94301, USA („Pinterest“) betrieben wird.
            Rechtsgrundlage für die Nutzung von Pinterest ist Ihre Einwilligung
            gemäß Art. 6 Abs. 1 S. 1 lit. a) und Art. 49 Abs. 1 S. 1 lit. a
            DSGVO.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie eine Seite unserer Webseite aufrufen, die ein solches
            Plugin enthält, wird für den Fall, dass Sie aktiv den
            Pinterest-Button betätigen eine direkte Verbindung zwischen Ihrem
            Browser und dem Pinterest-Server hergestellt sowie ein Cookie
            gesetzt. Pinterest erhält dadurch die Information, dass Sie mit
            Ihrer IP-Adresse unsere Seite besucht haben.
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie den Pinterest „Pin it“-Button anklicken, während Sie in
            Ihrem Pinterest-Account eingeloggt sind, können Sie die Inhalte
            unserer Seiten auf Ihrem Pinterest-Profil verlinken. Dadurch kann
            Pinterest den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
            Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
            Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung
            durch Pinterest erhalten.
          </p>
          <p className="text-gray-600 mb-4">
            Die erfassten Daten werden auch in die USA übertragen. Bitte
            beachten Sie, dass der Schutz von personenbezogenen Daten in den USA
            nicht dem von der EU geforderten Datenschutzniveau entspricht.
            Insbesondere fehlen durchsetzbare Rechte, die den Schutz Ihrer Daten
            gegen den Zugriff von staatlichen Stellen absichern. Es besteht also
            das Risiko, dass diese staatlichen Stellen auf die personenbezogenen
            Daten zugreifen können, ohne dass der Datenübermittler oder der
            Empfänger dies wirksam verhindern können.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der Daten erfolgt in gemeinsamer Verantwortung von
            Pinterest und uns gemäß Art 26 DSGVO. Die primäre Verantwortlichkeit
            für die Verarbeitung personenbezogener Daten im Rahmen der Plugins
            liegt bei Pinterest und sämtliche Pflichten aus der DSGVO werden im
            Hinblick auf die Verarbeitung personenbezogener Daten von Pinterest
            erfüllt (insbesondere die Informationspflichten gemäß Artikel 12 ff.
            DSGVO, Sicherstellung der Betroffenenrechte gemäß Artikel 15 ff.
            DSGVO, Meldung von Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Wenn Sie nicht wünschen, dass Pinterest den Besuch unserer Seiten
            zuordnen kann, loggen Sie sich bitte aus Ihrem
            Pinterest-Benutzerkonto aus.
          </p>
          <p className="text-gray-600 mb-4">
            Weitere Informationen hierzu finden Sie in der
            Datenschutzinformation von Pinterest unter{" "}
            <a
              href="https://about.pinterest.com/de/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              https://about.pinterest.com/de/privacy-policy
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            VIII. Unsere Social Media Präsenzen
          </h3>
          <p className="text-gray-600 mb-4">
            Sie finden uns mit Präsenzen innerhalb sozialer Netzwerke und
            Plattformen, damit wir auch dort mit Ihnen kommunizieren und sie
            dort über unsere Leistungen informieren können. Wir weisen darauf
            hin, dass dabei Ihre Daten außerhalb der Europäischen Union
            verarbeitet werden können und dass die Daten im Regelfall für
            Marktforschungs- und Werbezwecke verarbeitet werden. Aus dem
            Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer
            können Nutzungsprofile erstellt werden. Diese Nutzungsprofile können
            wiederum verwendet werden, um z. B. Werbeanzeigen innerhalb und
            außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen
            der Nutzer entsprechen. Hierfür werden u. U. Cookies auf den
            Computern der Nutzer gespeichert, in denen das Nutzungsverhalten und
            die Interessen der Nutzer gespeichert werden. In diesen
            Nutzungsprofilen können auch anderweitige Daten gespeichert werden,
            insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen
            sind und bei diesen eingeloggt sind.
          </p>
          <p className="text-gray-600 mb-4">
            Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf
            Basis Ihrer Einwilligung gemäß Art. 6 Abs. 1 Satz 1 lit. a) DSGVO
            und in gemeinsamer Verantwortung zwischen den Plattformanbietern und
            uns gemäß Art 26 DSGVO. Mit diesen ist vereinbart, dass die primäre
            Verantwortlichkeit gemäß DSGVO für die Verarbeitung
            personenbezogener Daten bei den Plattformanbietern liegt und
            sämtliche Pflichten aus der DSGVO im Hinblick auf die Verarbeitung
            personenbezogener Daten von den jeweiligen Plattformanbietern
            erfüllt werden (insbesondere die Informationspflichten gemäß Artikel
            12 ff. DSGVO, Sicherstellung der Betroffenenrechte gemäß Artikel 15
            ff. DSGVO, Meldung von Datenpannen gemäß Artikel 33, 34 DSGVO).
          </p>
          <p className="text-gray-600 mb-4">
            Für Informationen über die jeweiligen Verarbeitungen und die
            jeweiligen Widerspruchsmöglichkeiten verweisen wir auf die
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
