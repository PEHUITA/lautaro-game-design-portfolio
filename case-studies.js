(function () {
  "use strict";

  var caseStudies = {
    blood: {
      number: "01",
      image: "assets/img/blood-debt.webp",
      en: {
        title: "Blood Debt",
        status: "WORK IN PROGRESS",
        tagline: "A strategic card game about guilt, judgment and redemption.",
        overview: "The player takes the role of an ex-servant of a spiritual court, condemned to operate a bridge toll for 1,000 years. Each arriving soul brings a dossier containing crimes, actions and earthly attachments. The player must interpret that information and decide how each soul should be resolved.",
        role: "Game Design — systems design, card mechanics, decision-making structure and player experience.",
        intent: "Create a moral decision game where there is no simple good-or-bad meter. The player must balance information, resources, uncertainty and the consequences of every judgment.",
        mechanics: "Impact Weight, Memories vs. Burden, Status, Main Sin, Earthly Anchor, Guilt, Violence, Sacrifice, Soul Mana and Burden Points. Deck Corruption is another pressure system that can eventually cause defeat.",
        loop: "Receive a soul → inspect the dossier → evaluate its information → play cards → manage resources and corruption → resolve the soul → receive the next case.",
        decisions: "Instead of reducing morality to a single value, the design uses several overlapping variables. A decision can help one aspect of a soul while creating pressure somewhere else, making each case a small strategic puzzle.",
        development: "Work in progress. Core systems, card structure and the visual direction are being developed."
      },
      es: {
        title: "Deuda de Sangre",
        status: "EN DESARROLLO",
        tagline: "Un juego de cartas estratégico sobre culpa, juicio y redención.",
        overview: "El jugador asume el rol de un antiguo servidor de un tribunal espiritual, condenado a trabajar durante 1.000 años cobrando el paso de las almas por un puente. Cada alma llega con un expediente que contiene delitos, acciones y vínculos terrenales. El jugador debe interpretar esa información y decidir cómo resolver cada caso.",
        role: "Game Design — diseño de sistemas, mecánicas de cartas, estructura de decisiones y experiencia del jugador.",
        intent: "Crear un juego de decisiones morales donde no exista una simple barra de bueno o malo. El jugador debe equilibrar información, recursos, incertidumbre y las consecuencias de cada juicio.",
        mechanics: "Peso del Impacto, Recuerdos vs. Carga, Estatus, Pecado Principal, Anclaje Terrenal, Culpa, Violencia, Sacrificio, Maná de Almas y Puntos de Carga. La Corrupción del Mazo funciona como otra presión que puede llevar a la derrota.",
        loop: "Recibir un alma → revisar el expediente → analizar la información → jugar cartas → administrar recursos y corrupción → resolver el caso → recibir la siguiente alma.",
        decisions: "En lugar de reducir la moralidad a un único valor, el diseño utiliza varias variables que se cruzan entre sí. Una decisión puede ayudar a un aspecto del alma mientras genera presión en otro, convirtiendo cada caso en un pequeño puzzle estratégico.",
        development: "En desarrollo. Los sistemas principales, la estructura de cartas y la dirección visual continúan en construcción."
      }
    },

    kia: {
      number: "02",
      image: "assets/img/keep-it-alive.webp",
      en: {
        title: "Keep It Alive",
        status: "WIP / UNITY PROTOTYPE",
        tagline: "An 8-bit card game about fighting a system while trying to keep someone alive.",
        overview: "The player is not a doctor. The experience focuses on the personal fight against an overwhelming system, with the patient and their relative represented directly in the interface. Medical, bureaucratic and emotional pressure becomes part of the gameplay.",
        role: "Game Design — card systems, resources, encounters, bosses and the overall gameplay loop.",
        intent: "Turn bureaucratic, medical and emotional pressure into readable gameplay decisions without turning the experience into a conventional combat game.",
        mechanics: "Player and target HP, Energy / Action Points, Lucid Fatigue, Mild Stress and Exhaustion. Cards are divided into medical, bureaucratic and emotional categories rather than weapons.",
        loop: "Read the situation → choose an action → manage energy and stress → react to the encounter → protect the target → survive the next pressure point.",
        decisions: "Bosses are personifications of diseases and conditions rather than traditional enemies. Fever can burn cards, while Depression can soak cards with tears and disable them, making the enemy affect the player's resources and options instead of simply dealing damage.",
        development: "Work in progress in Unity / C#. The core card structure, visual direction, bosses and encounter systems are being developed."
      },
      es: {
        title: "Keep It Alive",
        status: "WIP / PROTOTIPO UNITY",
        tagline: "Un juego de cartas en 8-bit sobre luchar contra un sistema mientras intentás mantener a alguien con vida.",
        overview: "El jugador no es un médico. La experiencia se centra en la lucha personal contra un sistema que puede resultar abrumador, con el paciente y su familiar representados directamente en la interfaz. La presión médica, burocrática y emocional se convierte en parte del gameplay.",
        role: "Game Design — sistemas de cartas, recursos, encuentros, jefes y loop general de gameplay.",
        intent: "Convertir la presión burocrática, médica y emocional en decisiones de gameplay claras sin transformar la experiencia en un juego de combate convencional.",
        mechanics: "HP del jugador y del objetivo, Energía / Puntos de Acción, Cansancio Lúcido, Estrés Leve y Agotamiento. Las cartas se dividen en categorías médicas, burocráticas y emocionales, no en armas.",
        loop: "Leer la situación → elegir una acción → administrar energía y estrés → reaccionar al encuentro → proteger al objetivo → sobrevivir al siguiente punto de presión.",
        decisions: "Los jefes son personificaciones de enfermedades y condiciones, no enemigos tradicionales. La Fiebre puede quemar cartas, mientras que la Depresión puede mojarlas con lágrimas e inutilizarlas, haciendo que el enemigo afecte los recursos y opciones del jugador en lugar de limitarse a hacer daño.",
        development: "En desarrollo en Unity / C#. La estructura principal de cartas, dirección visual, jefes y sistemas de encuentros continúan en construcción."
      }
    },

    junk: {
      number: "03",
      image: "assets/img/junkborn.webp",
      en: {
        title: "Junkborn",
        status: "WORK IN PROGRESS",
        tagline: "A top-down 2D exploration game built around modular scrap equipment.",
        overview: "The player controls a robot that explores hostile environments searching for discarded mechanical parts. Arms, legs and head components can degrade, be replaced and interact with each other through different synergies.",
        role: "Game Design — equipment systems, progression, resource management and gameplay structure.",
        intent: "Make discarded objects feel valuable by turning every piece of scrap into a potential gameplay decision. Equipment degradation is designed as a strategic pressure rather than a simple durability bar.",
        mechanics: "Scrap collection, special rooms, enemy drops, modular body parts, equipment degradation and item synergies. The interface represents the condition of the robot's body through a battery-like visual system.",
        loop: "Explore → fight → collect scrap → evaluate equipment → replace or combine parts → adapt the build → continue exploring.",
        decisions: "The body-part interface makes degradation immediately readable while also connecting equipment condition with build choices. The robot's body becomes part of the player's resource management.",
        development: "Work in progress. Core gameplay structure, equipment systems and visual direction are being explored."
      },
      es: {
        title: "Junkborn",
        status: "EN DESARROLLO",
        tagline: "Una experiencia 2D cenital de exploración basada en equipamiento modular de chatarra.",
        overview: "El jugador controla un robot que explora entornos hostiles buscando piezas mecánicas descartadas. Brazos, piernas y cabeza pueden deteriorarse, reemplazarse y combinarse mediante diferentes sinergias.",
        role: "Game Design — sistemas de equipamiento, progresión, gestión de recursos y estructura de gameplay.",
        intent: "Hacer que los objetos descartados tengan valor convirtiendo cada pieza de chatarra en una posible decisión de gameplay. El deterioro del equipamiento funciona como una presión estratégica y no solamente como una barra de durabilidad.",
        mechanics: "Recolección de chatarra, habitaciones especiales, drops de enemigos, piezas modulares, deterioro del equipamiento y sinergias entre objetos. La interfaz representa el estado del cuerpo mediante un sistema visual similar al de una batería.",
        loop: "Explorar → combatir → recolectar chatarra → evaluar equipamiento → reemplazar o combinar piezas → adaptar la build → continuar explorando.",
        decisions: "La interfaz de las partes del cuerpo hace que el deterioro sea fácil de leer y, al mismo tiempo, lo conecta con las decisiones de construcción del personaje. El cuerpo del robot se convierte en parte de la gestión de recursos.",
        development: "En desarrollo. La estructura principal de gameplay, los sistemas de equipamiento y la dirección visual continúan en exploración."
      }
    },

    breath: {
      number: "04",
      image: "assets/img/last-breath.webp",
      en: {
        title: "Last Breath",
        status: "CONCEPT / WIP",
        tagline: "A 2D survival concept where every action has a cost in oxygen.",
        overview: "Last Breath is built around a simple survival pressure: oxygen is constantly running out. The player must navigate the environment while deciding when to move, when to act and when to conserve the resource that keeps them alive.",
        role: "Game Design — survival rules, resource pressure and turn-based decision structure.",
        intent: "Make oxygen more than a timer. Every movement becomes a meaningful decision because spending the resource now can determine whether the player has enough to survive later.",
        mechanics: "Turn-based movement, oxygen consumption, survival pressure and resource conservation.",
        loop: "Assess the situation → choose an action → consume oxygen → react to the new state → decide whether to move forward or conserve resources.",
        decisions: "The design focuses on creating tension through scarcity rather than combat complexity. The player's main opponent is the shrinking amount of time and oxygen available.",
        development: "Concept in progress. Core rules and gameplay direction are being explored."
      },
      es: {
        title: "Último Aliento",
        status: "CONCEPTO / WIP",
        tagline: "Un concepto de supervivencia 2D donde cada acción tiene un costo en oxígeno.",
        overview: "Último Aliento se construye alrededor de una presión de supervivencia simple: el oxígeno se termina constantemente. El jugador debe recorrer el entorno mientras decide cuándo moverse, cuándo actuar y cuándo conservar el recurso que lo mantiene con vida.",
        role: "Game Design — reglas de supervivencia, presión de recursos y estructura de decisiones por turnos.",
        intent: "Hacer que el oxígeno sea algo más que un temporizador. Cada movimiento se convierte en una decisión importante porque gastar el recurso ahora puede determinar si queda suficiente para sobrevivir después.",
        mechanics: "Movimiento por turnos, consumo de oxígeno, presión de supervivencia y conservación de recursos.",
        loop: "Analizar la situación → elegir una acción → consumir oxígeno → reaccionar al nuevo estado → decidir si avanzar o conservar recursos.",
        decisions: "El diseño busca generar tensión mediante la escasez en lugar de depender de la complejidad del combate. El principal oponente del jugador es la cantidad cada vez menor de tiempo y oxígeno disponible.",
        development: "Concepto en desarrollo. Las reglas principales y la dirección del gameplay continúan en exploración."
      }
    },

    grey: {
      number: "05",
      image: "assets/img/grey-market.webp",
      en: {
        title: "Grey Market",
        status: "CONCEPT / WIP",
        tagline: "An underground strategy game built around information, reputation and influence.",
        overview: "Grey Market explores an underground economy where information can be as valuable as money. The player navigates a map of opportunities and dilemmas, building reputation and influence while dealing with the consequences of each decision.",
        role: "Game Design — strategic structure, dilemmas, progression and player decision-making.",
        intent: "Create a strategy experience where information itself becomes a resource and every opportunity can produce a new problem.",
        mechanics: "Map progression, information, reputation, influence and branching dilemmas. The presentation uses a modern comic direction with exaggerated character expressions.",
        loop: "Discover an opportunity → evaluate the information → choose an action → deal with the consequence → increase or lose influence → unlock new opportunities.",
        decisions: "The core design revolves around imperfect information. The player is encouraged to make decisions with incomplete knowledge and deal with the consequences instead of waiting for a completely safe option.",
        development: "Concept in progress. Strategic systems, progression and visual direction are being developed."
      },
      es: {
        title: "El Gremio del Espectro",
        status: "CONCEPTO / WIP",
        tagline: "Un juego de estrategia clandestina basado en información, reputación e influencia.",
        overview: "El Gremio del Espectro explora una economía clandestina donde la información puede valer tanto como el dinero. El jugador recorre un mapa de oportunidades y dilemas, construyendo reputación e influencia mientras enfrenta las consecuencias de sus decisiones.",
        role: "Game Design — estructura estratégica, dilemas, progresión y toma de decisiones del jugador.",
        intent: "Crear una experiencia estratégica donde la información sea un recurso y cada oportunidad pueda generar un nuevo problema.",
        mechanics: "Progresión por mapa, información, reputación, influencia y dilemas ramificados. La presentación utiliza una dirección visual de cómic moderno con expresiones exageradas.",
        loop: "Descubrir una oportunidad → evaluar la información → elegir una acción → enfrentar la consecuencia → aumentar o perder influencia → desbloquear nuevas oportunidades.",
        decisions: "El diseño gira alrededor de la información imperfecta. El jugador debe tomar decisiones con conocimiento incompleto y enfrentar sus consecuencias en lugar de esperar una opción completamente segura.",
        development: "Concepto en desarrollo. Los sistemas estratégicos, la progresión y la dirección visual continúan en construcción."
      }
    },

    shift: {
      number: "06",
      image: "assets/img/shift-protocol.webp",
      en: {
        title: "Shift Protocol",
        status: "CONCEPT / EXPERIMENTAL",
        tagline: "A 3D concept built around physical-environment desynchronization.",
        overview: "Shift Protocol explores environments where physical relationships can become desynchronized. Objects, movement and inertia stop behaving exactly as the player expects, turning the environment itself into the central gameplay system.",
        role: "Game Design — core concept, interaction ideas and experimental gameplay direction.",
        intent: "Explore how small changes to physical rules can create unexpected interactions and force the player to reinterpret familiar spaces.",
        mechanics: "Environmental desynchronization, altered physical relationships, movement and inertia-based interactions.",
        loop: "Observe → identify an inconsistency → experiment with the environment → adapt to the new physical rule → progress.",
        decisions: "The concept focuses on making the player question whether the environment is behaving incorrectly or whether its rules have simply changed. Discovery comes from experimentation rather than explicit tutorials.",
        development: "Experimental concept. The core interaction and physical rule systems are still being explored."
      },
      es: {
        title: "Desfase",
        status: "CONCEPTO / EXPERIMENTAL",
        tagline: "Un concepto 3D basado en la desincronización física del entorno.",
        overview: "Desfase explora entornos donde las relaciones físicas pueden dejar de estar sincronizadas. Los objetos, el movimiento y la inercia dejan de comportarse exactamente como el jugador espera, convirtiendo al propio entorno en el sistema central del gameplay.",
        role: "Game Design — concepto central, ideas de interacción y dirección experimental del gameplay.",
        intent: "Explorar cómo pequeños cambios en las reglas físicas pueden generar interacciones inesperadas y obligar al jugador a reinterpretar espacios conocidos.",
        mechanics: "Desincronización del entorno, relaciones físicas alteradas e interacciones basadas en movimiento e inercia.",
        loop: "Observar → detectar una inconsistencia → experimentar con el entorno → adaptarse a la nueva regla física → avanzar.",
        decisions: "El concepto busca que el jugador se pregunte si el entorno está funcionando mal o si sus reglas simplemente cambiaron. El descubrimiento surge de la experimentación y no de tutoriales explícitos.",
        development: "Concepto experimental. La interacción central y los sistemas de reglas físicas todavía están en exploración."
      }
    }
  };

  function getLanguage() {
    return localStorage.getItem("lm-language") === "es" ? "es" : "en";
  }

  function openCaseStudy(projectId) {
    var modal = document.getElementById("case-modal");
    var data = caseStudies[projectId];

    if (!modal || !data) return;

    var language = getLanguage();
    var content = data[language];

    document.getElementById("case-modal-number").textContent = data.number;
    document.getElementById("case-modal-image").src = data.image;
    document.getElementById("case-modal-image").alt = content.title;
    document.getElementById("case-modal-title").textContent = content.title;
    document.getElementById("case-modal-status").textContent = content.status;
    document.getElementById("case-modal-tagline").textContent = content.tagline;
    document.getElementById("case-modal-overview").textContent = content.overview;
    document.getElementById("case-modal-role").textContent = content.role;
    document.getElementById("case-modal-intent").textContent = content.intent;
    document.getElementById("case-modal-mechanics").textContent = content.mechanics;
    document.getElementById("case-modal-loop").textContent = content.loop;
    document.getElementById("case-modal-decisions").textContent = content.decisions;
    document.getElementById("case-modal-development").textContent = content.development;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("case-modal-open");
  }

  function closeCaseStudy() {
    var modal = document.getElementById("case-modal");

    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("case-modal-open");
  }

  function initCaseStudies() {
    var modal = document.getElementById("case-modal");

    if (!modal) return;

    document.querySelectorAll(".project").forEach(function (card) {
      card.addEventListener("click", function (event) {
        if (event.target.closest("[data-case-close]")) return;

        var projectId = card.getAttribute("data-project");
        if (caseStudies[projectId]) {
          event.preventDefault();
          event.stopPropagation();
          openCaseStudy(projectId);
        }
      });
    });

    modal.querySelectorAll("[data-case-close]").forEach(function (button) {
      button.addEventListener("click", closeCaseStudy);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeCaseStudy();
    });
  }

  window.__CASE_STUDIES__ = caseStudies;
  window.__INIT_CASE_STUDIES__ = initCaseStudies;
})();
