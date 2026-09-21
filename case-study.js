(function () {
  "use strict";

  var projects = {
    shift: {
      next: "blood",
      image: "assets/img/shift-protocol.webp",
      en: {
        kicker: "CASE STUDY / 3D PUZZLE",
        title: "Desfase — Shift Protocol",
        summary: "A spatial puzzle about reading unstable rules, testing reality, and turning disorientation into mastery.",
        role: "Game design, level logic, player onboarding",
        format: "3D puzzle / prototype",
        focus: "Rule discovery, spatial reasoning, reality shifts",
        status: "Playable concept",
        storyTitle: "A lab where the room is also the enemy.",
        story: ["Desfase begins with a simple promise: the player is not lost because the space is large, but because the rules are moving. Doors, surfaces and paths become readable only after the player learns how the shift behaves.", "The design goal is to make confusion productive. Each room introduces one instability, asks the player to form a theory, then lets that theory break in a controlled way so the next solution feels earned."],
        systems: ["Reality states that change traversal routes without changing the player's core verb set.", "Puzzle beats built around observation first, execution second, and timing only when the rule is already legible.", "Environmental storytelling that frames every room as a failed experiment rather than a neutral challenge chamber."],
        gallery: "The image language supports the central fantasy: architecture as a machine that refuses to stay still.",
        outcome: "The strongest design insight is that a puzzle can feel premium when the player understands why they failed before they understand how to win."
      },
      es: {
        kicker: "ESTUDIO / PUZZLE 3D",
        title: "Desfase — Shift Protocol",
        summary: "Un puzzle espacial sobre leer reglas inestables, poner a prueba la realidad y convertir la desorientación en dominio.",
        role: "Game design, lógica de niveles, onboarding",
        format: "Puzzle 3D / prototipo",
        focus: "Descubrimiento de reglas, razonamiento espacial, cambios de realidad",
        status: "Concepto jugable",
        storyTitle: "Un laboratorio donde la sala también es el enemigo.",
        story: ["Desfase parte de una promesa simple: el jugador no se pierde porque el espacio sea grande, sino porque las reglas se mueven. Puertas, superficies y rutas se vuelven legibles cuando el jugador aprende cómo se comporta el desfase.", "El objetivo de diseño es hacer que la confusión produzca juego. Cada sala introduce una inestabilidad, invita a formar una teoría y luego la rompe de forma controlada para que la solución se sienta ganada."],
        systems: ["Estados de realidad que cambian rutas sin cambiar los verbos principales del jugador.", "Puzzles construidos desde observación, luego ejecución, y timing solo cuando la regla ya es clara.", "Narrativa ambiental que presenta cada sala como un experimento fallido, no como un desafío neutral."],
        gallery: "La imagen sostiene la fantasía central: arquitectura como máquina que se niega a quedarse quieta.",
        outcome: "El aprendizaje más fuerte: un puzzle se siente premium cuando el jugador entiende por qué falló antes de entender cómo ganar."
      }
    },
    blood: {
      next: "grey",
      image: "assets/img/blood-debt.webp",
      en: {kicker:"CASE STUDY / STRATEGIC CARDS",title:"Deuda de Sangre",summary:"A supernatural bureaucracy where every advantage leaves a debt that returns with interest.",role:"Systems design, card economy, narrative rules",format:"Strategic card game",focus:"Debt, temptation, delayed consequence",status:"Design prototype",storyTitle:"Power is easy. Paying for it is the game.",story:["The player operates inside a ritual administration where favors, contracts and blood prices behave like resources. The fantasy is not simply being powerful; it is managing the paperwork of power.","Every strong action creates a future pressure. The design turns greed into a readable system, so the player can knowingly choose a short-term miracle and fear the invoice that follows."],systems:["Debt tokens that convert immediate advantage into future constraint.","Card effects with narrative costs, making theme and economy share the same language.","Escalating audits that force the player to reveal, repay or weaponize what they owe."],gallery:"The visual tone leans into ceremonial paperwork: elegant, dangerous and slightly bureaucratic.",outcome:"The project works when players stop asking whether a card is strong and start asking whether they can survive what it demands later."},
      es: {kicker:"ESTUDIO / CARTAS ESTRATÉGICAS",title:"Deuda de Sangre",summary:"Una burocracia sobrenatural donde cada ventaja deja una deuda que vuelve con intereses.",role:"Diseño de sistemas, economía de cartas, reglas narrativas",format:"Juego estratégico de cartas",focus:"Deuda, tentación, consecuencia diferida",status:"Prototipo de diseño",storyTitle:"El poder es fácil. Pagarlo es el juego.",story:["El jugador opera dentro de una administración ritual donde favores, contratos y precios de sangre funcionan como recursos. La fantasía no es solo tener poder; es gestionar el papeleo del poder.","Cada acción fuerte crea una presión futura. El diseño convierte la codicia en sistema legible, para que el jugador elija un milagro inmediato y tema la factura que viene después."],systems:["Tokens de deuda que transforman ventaja inmediata en restricción futura.","Efectos de cartas con costos narrativos, uniendo tema y economía en el mismo idioma.","Auditorías crecientes que obligan a revelar, pagar o convertir en arma lo que se debe."],gallery:"El tono visual apunta a papeleo ceremonial: elegante, peligroso y un poco burocrático.",outcome:"El proyecto funciona cuando el jugador deja de preguntar si una carta es fuerte y empieza a preguntar si puede sobrevivir a lo que exigirá después."}
    },
    grey: {
      next: "junk",
      image: "assets/img/grey-market.webp",
      en: {kicker:"CASE STUDY / SIMULATION",title:"Grey Market",summary:"A clandestine economy where information, reputation and influence are more valuable than money.",role:"Economy design, faction logic, player choice",format:"Market simulation",focus:"Information asymmetry, reputation, pressure",status:"Systems concept",storyTitle:"The market is not hidden. The truth is.",story:["Grey Market is designed around incomplete knowledge. Prices matter, but the real resource is knowing who is lying, who is desperate and who benefits if the player moves too fast.","The player navigates deals that are never purely financial. Reputation opens doors, burns bridges and changes which rumors become useful."],systems:["Dynamic rumor value based on faction interests and timing.","Reputation tracks that create different kinds of access instead of a single morality score.","Deals with second-order consequences across suppliers, buyers and informants."],gallery:"The image works like a signal intercepted from a place that wants to be understood only by insiders.",outcome:"The design becomes interesting when success is not buying low and selling high, but deciding which truth is worth exposing."},
      es: {kicker:"ESTUDIO / SIMULACIÓN",title:"Grey Market",summary:"Una economía clandestina donde información, reputación e influencia valen más que el dinero.",role:"Diseño de economía, lógica de facciones, elección del jugador",format:"Simulación de mercado",focus:"Información asimétrica, reputación, presión",status:"Concepto de sistemas",storyTitle:"El mercado no está oculto. La verdad sí.",story:["Grey Market está diseñado alrededor del conocimiento incompleto. Los precios importan, pero el recurso real es saber quién miente, quién está desesperado y a quién beneficia que el jugador se apure.","El jugador navega tratos que nunca son solo financieros. La reputación abre puertas, quema puentes y cambia qué rumores se vuelven útiles."],systems:["Valor dinámico de rumores según intereses de facciones y timing.","Reputaciones separadas que crean accesos distintos en vez de un único medidor moral.","Tratos con consecuencias de segundo orden entre proveedores, compradores e informantes."],gallery:"La imagen funciona como una señal interceptada desde un lugar que solo quiere ser entendido por insiders.",outcome:"El diseño se vuelve interesante cuando ganar no es comprar barato y vender caro, sino decidir qué verdad vale la pena exponer."}
    },
    junk: {
      next: "kia",
      image: "assets/img/junkborn.webp",
      en: {kicker:"CASE STUDY / ROGUELITE",title:"Junkborn — Eco de Chatarra",summary:"A roguelite about adaptation, salvage and finding identity inside discarded machines.",role:"Core loop, upgrade design, world premise",format:"Exploration roguelite",focus:"Synergies, salvage, improvisation",status:"Playable direction",storyTitle:"Nothing is useless if the system is hungry enough.",story:["Junkborn treats trash as possibility. The player explores broken zones, recovers parts and builds temporary identities from unstable combinations.","The design avoids clean power curves. Good builds feel improvised, a little risky and personal, as if the player is assembling a strategy from leftovers under pressure."],systems:["Modular upgrades that combine into surprising synergies instead of fixed classes.","Salvage decisions that ask whether to repair, consume or transform a part.","Biomes defined by what they discard and what kinds of adaptation they reward."],gallery:"The artwork gives the project its texture: rough, dense and full of useful debris.",outcome:"The premium hook is emotional: progression feels like becoming someone through the things everyone else threw away."},
      es: {kicker:"ESTUDIO / ROGUELITE",title:"Junkborn — Eco de Chatarra",summary:"Un roguelite sobre adaptación, rescate e identidad dentro de máquinas descartadas.",role:"Core loop, diseño de mejoras, premisa de mundo",format:"Roguelite de exploración",focus:"Sinergias, chatarra, improvisación",status:"Dirección jugable",storyTitle:"Nada es inútil si el sistema tiene suficiente hambre.",story:["Junkborn trata la basura como posibilidad. El jugador explora zonas rotas, recupera piezas y construye identidades temporales desde combinaciones inestables.","El diseño evita curvas de poder limpias. Las buenas builds se sienten improvisadas, un poco riesgosas y personales, como armar una estrategia con restos bajo presión."],systems:["Mejoras modulares que combinan en sinergias sorpresivas en vez de clases fijas.","Decisiones de rescate: reparar, consumir o transformar una pieza.","Biomas definidos por lo que descartan y por las adaptaciones que recompensan."],gallery:"El arte le da textura al proyecto: áspero, denso y lleno de restos útiles.",outcome:"El gancho premium es emocional: progresar se siente como convertirse en alguien usando lo que otros tiraron."}
    },
    kia: {
      next: "breath",
      image: "assets/img/keep-it-alive.webp",
      en: {kicker:"CASE STUDY / UNITY + C#",title:"Keep It Alive",summary:"A card combat prototype where enemies do not only attack health: they interfere with the player's deck.",role:"Unity implementation, combat rules, encounter design",format:"Digital card combat",focus:"Deck interference, enemy identity, readable pressure",status:"Prototype",storyTitle:"The deck is not a menu. It is a vulnerable body.",story:["Keep It Alive shifts combat pressure from damage alone to the integrity of the player's options. Enemies can pollute, lock, burn or rearrange the deck, making the player's plan physically unstable.","The design asks each enemy to have a mechanical personality. A fight should be recognizable by how it changes your hand before it is recognizable by its damage number."],systems:["Enemy actions that target draw order, discard state and card availability.","Encounter patterns that teach interference through repeated but escalating signatures.","Unity/C# prototype structure built around fast iteration on card effects."],gallery:"The existing card image helps communicate the central promise immediately: your tools can be touched by the enemy.",outcome:"The strongest combat moments come when the player wins by protecting future options, not just surviving the current turn."},
      es: {kicker:"ESTUDIO / UNITY + C#",title:"Keep It Alive",summary:"Un prototipo de combate con cartas donde los enemigos no solo atacan vida: interfieren con el mazo del jugador.",role:"Implementación en Unity, reglas de combate, diseño de encuentros",format:"Combate digital de cartas",focus:"Interferencia del mazo, identidad enemiga, presión legible",status:"Prototipo",storyTitle:"El mazo no es un menú. Es un cuerpo vulnerable.",story:["Keep It Alive mueve la presión del combate desde el daño hacia la integridad de las opciones del jugador. Los enemigos pueden contaminar, bloquear, quemar o reordenar el mazo, haciendo inestable el plan.","El diseño pide que cada enemigo tenga personalidad mecánica. Una pelea debería reconocerse por cómo cambia tu mano antes que por su número de daño."],systems:["Acciones enemigas que apuntan al orden de robo, descarte y disponibilidad de cartas.","Patrones de encuentro que enseñan interferencia con firmas repetidas y escaladas.","Estructura de prototipo en Unity/C# pensada para iterar rápido efectos de cartas."],gallery:"La imagen de cartas comunica la promesa central al instante: tus herramientas pueden ser tocadas por el enemigo.",outcome:"Los mejores momentos de combate aparecen cuando el jugador gana protegiendo opciones futuras, no solo sobreviviendo el turno actual."}
    },
    breath: {
      next: "shift",
      image: "assets/img/last-breath.webp",
      en: {kicker:"CASE STUDY / TURN-BASED SURVIVAL",title:"Último Aliento",summary:"A survival design where every move spends the oxygen that keeps the player alive.",role:"Turn economy, tension pacing, survival rules",format:"Turn-based survival",focus:"Oxygen, routing, irreversible decisions",status:"Design prototype",storyTitle:"The clock is not outside the player. It is inside their lungs.",story:["Último Aliento turns movement into cost. The player is not racing a timer they can ignore; every step is a visible subtraction from the resource that keeps the run alive.","The system is built for quiet panic. Strong choices are often ugly choices: save oxygen, reach safety, rescue something valuable, or accept that not every route can be completed."],systems:["Oxygen as both health and action economy, keeping pressure legible at all times.","Turn-based routing where scouting information matters as much as movement efficiency.","Events that tempt the player away from optimal paths with emotionally loaded rewards."],gallery:"The artwork frames survival as isolation, but the systems make that isolation actionable.",outcome:"The project becomes memorable when the player feels that every tile is a sentence in a negotiation with their own body."},
      es: {kicker:"ESTUDIO / SUPERVIVENCIA POR TURNOS",title:"Último Aliento",summary:"Un diseño de supervivencia donde cada movimiento gasta el oxígeno que mantiene vivo al jugador.",role:"Economía de turnos, ritmo de tensión, reglas de supervivencia",format:"Supervivencia por turnos",focus:"Oxígeno, rutas, decisiones irreversibles",status:"Prototipo de diseño",storyTitle:"El reloj no está fuera del jugador. Está en sus pulmones.",story:["Último Aliento convierte el movimiento en costo. El jugador no corre contra un timer que puede ignorar; cada paso resta de forma visible el recurso que mantiene viva la partida.","El sistema busca pánico silencioso. Las decisiones fuertes suelen ser incómodas: ahorrar oxígeno, llegar a salvo, rescatar algo valioso o aceptar que no todas las rutas se pueden completar."],systems:["Oxígeno como vida y economía de acciones, manteniendo la presión siempre legible.","Ruteo por turnos donde la información explorada importa tanto como la eficiencia del movimiento.","Eventos que tientan al jugador a desviarse con recompensas emocionalmente cargadas."],gallery:"El arte presenta la supervivencia como aislamiento, pero los sistemas vuelven ese aislamiento jugable.",outcome:"El proyecto se vuelve memorable cuando el jugador siente que cada casilla es una frase dentro de una negociación con su propio cuerpo."}
    }
  };

  var dictionary = {
    en: {storyEyebrow:"THE STORY", systemsEyebrow:"DESIGN SYSTEMS", systemsTitle:"WHAT THE PLAYER LEARNS BY PLAYING", galleryEyebrow:"VISUAL SIGNAL", galleryTitle:"A GAME READS BEFORE IT EXPLAINS.", outcomeEyebrow:"DESIGN TAKEAWAY", back:"BACK TO ARCHIVE", next:"NEXT PROJECT"},
    es: {storyEyebrow:"LA HISTORIA", systemsEyebrow:"SISTEMAS DE DISEÑO", systemsTitle:"LO QUE EL JUGADOR APRENDE JUGANDO", galleryEyebrow:"SEÑAL VISUAL", galleryTitle:"UN JUEGO SE LEE ANTES DE EXPLICARSE.", outcomeEyebrow:"APRENDIZAJE DE DISEÑO", back:"VOLVER AL ARCHIVO", next:"SIGUIENTE PROYECTO"}
  };

  var order = Object.keys(projects);
  var $ = function (selector) { return document.querySelector(selector); };
  var $$ = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("project") || location.hash.replace("#", "") || "shift";
  if (!projects[slug]) slug = "shift";
  var language = localStorage.getItem("lm-language") === "es" ? "es" : "en";

  function render() {
    var project = projects[slug];
    var copy = project[language];
    document.documentElement.lang = language;
    document.title = copy.title + " — Lautaro Montoya";
    $(".lang-toggle").classList.toggle("is-es", language === "es");
    $$("[data-i18n]").forEach(function (el) { el.innerHTML = dictionary[language][el.dataset.i18n] || el.innerHTML; });
    $("[data-case-kicker]").textContent = copy.kicker;
    $("[data-case-title]").textContent = copy.title;
    $("[data-case-summary]").textContent = copy.summary;
    $("[data-case-role]").textContent = copy.role;
    $("[data-case-format]").textContent = copy.format;
    $("[data-case-focus]").textContent = copy.focus;
    $("[data-case-status]").textContent = copy.status;
    $("[data-case-story-title]").textContent = copy.storyTitle;
    $("[data-case-story]").innerHTML = copy.story.map(function (paragraph) { return "<p>" + paragraph + "</p>"; }).join("");
    $("[data-case-systems]").innerHTML = copy.systems.map(function (item, index) { return "<article><span>0" + (index + 1) + "</span><p>" + item + "</p></article>"; }).join("");
    $("[data-case-gallery-note]").textContent = copy.gallery;
    $("[data-case-outcome]").textContent = copy.outcome;
    $$("[data-case-image], [data-case-gallery-image]").forEach(function (img) { img.src = project.image; img.alt = copy.title + " artwork"; });
    var next = projects[project.next] ? project.next : order[0];
    $("[data-next-case]").href = "project.html?project=" + next;
    $("[data-next-case]").innerHTML = dictionary[language].next + " <span>↗</span>";
    $(".case-actions .arrow-link").innerHTML = dictionary[language].back + " <span>↙</span>";
  }

  function boot() {
    render();
    $(".lang-toggle").addEventListener("click", function () { language = language === "en" ? "es" : "en"; localStorage.setItem("lm-language", language); render(); });
    $("#year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
