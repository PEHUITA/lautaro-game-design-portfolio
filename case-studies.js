const CASE_STUDIES = {
  kia: {
    number: "01",
    images: [
      "assets/img/case-studies/keep-it-alive/KIA TITLE.jpg",
      "assets/img/case-studies/keep-it-alive/Kia cards.jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY.jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY (2).jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY (3).jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY (4).jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY (5).jpg",
      "assets/img/case-studies/keep-it-alive/KIA GAMEPLAY (6).jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES depresion.jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES enredadera.jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES fiebre.jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES quimera.jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES reloj roto.jpg",
      "assets/img/case-studies/keep-it-alive/KIA ENEMIES= muerte.jpg"
    ],
    en: {
      title: "Keep It Alive",
      tagline: "How much are you willing to sacrifice to keep them alive?",
      status: "WORK IN PROGRESS",
      overview: "Keep It Alive is a turn-based card game about an individual fighting against a system that constantly pushes them toward exhaustion and collapse. The player controls their own condition while trying to keep another person alive. The hospital setting is part of the game's visual language, but the central conflict is personal rather than a doctor simulation.",
      role: "Game Designer / Unity Developer",
      intent: "Turn exhaustion into a gameplay system that changes decisions instead of functioning as a simple penalty. The central question is how much of the player's own health, energy and stability they are willing to sacrifice to protect someone else.",
      mechanics: "Player HP, Target HP, Energy, Fatigue, Overexertion, Stabilization, Containment, card categories, status effects and enemy-specific effects on the player's hand.",
      loop: "Draw cards → read the current threat → spend Energy → play an intervention → protect the Target → manage Fatigue → respond to enemy effects → survive the encounter.",
      decisions: "The resource chain is designed to escalate pressure: Energy can become Fatigue, Fatigue can become Exhaustion, and Exhaustion can eventually affect the player's own HP. Overexertion allows certain cards to be played without enough Energy, but converts the missing cost into additional Fatigue. Stabilization protects the Target persistently, while Containment protects the Player temporarily. Almost every strong action therefore carries a personal cost.",
      development: "Actively being developed in Unity using C#. Current work includes gameplay systems, card data, interactions, UI and enemy mechanics. A major design feature is that enemies can attack the player's hand itself: Fever can burn cards, Depression can wet and disable them, while other threats alter the information or availability of cards. The goal is for enemy mechanics to directly affect decision making."
    },
    es: {
      title: "Keep It Alive",
      tagline: "¿Cuánto estás dispuesto a sacrificar para mantenerlo vivo?",
      status: "EN DESARROLLO",
      overview: "Keep It Alive es un juego de cartas por turnos sobre una persona que lucha contra un sistema que constantemente la empuja hacia el agotamiento y el colapso. El jugador gestiona su propio estado mientras intenta mantener con vida a otra persona. El hospital forma parte del lenguaje visual del juego, pero el conflicto central es personal y no una simulación médica.",
      role: "Game Designer / Unity Developer",
      intent: "Convertir el agotamiento en un sistema de gameplay que modifique las decisiones en lugar de funcionar como una simple penalización. La pregunta central es cuánto de la propia salud, energía y estabilidad está dispuesto a sacrificar el jugador para proteger a otra persona.",
      mechanics: "HP del jugador, HP del objetivo, Energía, Fatiga, Sobreexigencia, Estabilización, Contención, categorías de cartas, estados y efectos específicos de los enemigos sobre la mano.",
      loop: "Robar cartas → leer la amenaza actual → gastar Energía → jugar una intervención → proteger al Objetivo → gestionar la Fatiga → responder a los efectos enemigos → sobrevivir al encuentro.",
      decisions: "La cadena de recursos está diseñada para aumentar la presión: la Energía puede convertirse en Fatiga, la Fatiga en Agotamiento y el Agotamiento puede terminar afectando el propio HP del jugador. La Sobreexigencia permite jugar determinadas cartas sin suficiente Energía, pero convierte el costo faltante en Fatiga adicional. La Estabilización protege al Objetivo de forma persistente, mientras que la Contención protege temporalmente al jugador. De esta manera, casi toda acción poderosa tiene un costo personal.",
      development: "En desarrollo activo en Unity utilizando C#. El trabajo actual incluye sistemas de gameplay, datos e interacciones de cartas, UI y mecánicas de enemigos. Una de las características centrales es que los enemigos pueden atacar directamente la mano: Fiebre puede quemar cartas, Depresión puede mojarlas e inutilizarlas y otras amenazas modifican la información o disponibilidad de las cartas. La intención es que la mecánica enemiga afecte directamente las decisiones."
    }
  },

  blood: {
    number: "02",
    images: [
      "assets/img/case-studies/blood-debt/title.jpg",
      "assets/img/case-studies/blood-debt/judging.jpg",
      "assets/img/case-studies/blood-debt/side ab.jpg",
      "assets/img/case-studies/blood-debt/soul play.jpg",
      "assets/img/case-studies/blood-debt/soul play (2).jpg"
    ],
    en: {
      title: "Blood Debt",
      tagline: "A supernatural bureaucracy where every decision leaves a mark.",
      status: "WORK IN PROGRESS",
      overview: "Blood Debt is a strategic card game set inside a supernatural bureaucracy. The player has been condemned to serve as the tollkeeper of a spiritual bridge, processing souls while trying to reduce their own sentence. Every soul arrives with memories, guilt, sins and earthly attachments that must be understood before its fate can be decided.",
      role: "Game Designer",
      intent: "Build a decision system where narrative is not separated from gameplay. The player's judgment of each soul should create immediate consequences while also affecting the wider state of the run.",
      mechanics: "Card-based decisions, soul dossiers, risk and reward, resource management, corruption, unresolved cases and consequence-driven narrative systems.",
      loop: "Inspect a soul → read its case → evaluate its memories, guilt and attachments → choose how to intervene → resolve the consequence → continue processing souls.",
      decisions: "The design is built around trade-offs rather than purely correct answers. Immediate advantages can create corruption or future problems, while unresolved souls can become a growing source of pressure. Systems such as Impact Weight, Memories vs. Burden, Earthly Anchor and Burden Points connect the narrative state of a soul with gameplay decisions.",
      development: "Currently in design and development. The project is being used to explore card systems, narrative mechanics, UI and consequence-driven decision making. Visual material includes prototypes, card concepts and gameplay explorations rather than a finished commercial game."
    },
    es: {
      title: "Deuda de Sangre",
      tagline: "Una burocracia sobrenatural donde cada decisión deja una marca.",
      status: "EN DESARROLLO",
      overview: "Deuda de Sangre es un juego estratégico de cartas ambientado dentro de una burocracia sobrenatural. El jugador ha sido condenado a trabajar como cobrador de un puente espiritual, procesando almas mientras intenta reducir su propia condena. Cada alma llega con recuerdos, culpa, pecados y vínculos terrenales que deben ser comprendidos antes de decidir su destino.",
      role: "Game Designer",
      intent: "Construir un sistema de decisiones donde la narrativa no esté separada del gameplay. El juicio sobre cada alma debe generar consecuencias inmediatas y, al mismo tiempo, modificar el estado general de la partida.",
      mechanics: "Decisiones mediante cartas, expedientes de almas, riesgo y recompensa, gestión de recursos, corrupción, casos sin resolver y sistemas narrativos basados en consecuencias.",
      loop: "Inspeccionar un alma → leer su caso → evaluar recuerdos, culpa y vínculos → decidir cómo intervenir → resolver la consecuencia → continuar procesando almas.",
      decisions: "El diseño busca generar decisiones con costos y beneficios en lugar de respuestas puramente correctas. Una ventaja inmediata puede generar corrupción o problemas futuros, mientras que las almas sin resolver aumentan la presión. Sistemas como Peso del Impacto, Recuerdos vs. Carga, Anclaje Terrenal y Puntos de Carga conectan el estado narrativo de cada alma con el gameplay.",
      development: "Actualmente en etapa de diseño y desarrollo. El proyecto se utiliza para explorar sistemas de cartas, narrativa mediante mecánicas, UI y decisiones con consecuencias. El material visual incluye prototipos, conceptos de cartas y exploraciones de gameplay, no un juego comercial terminado."
    }
  },

  junk: {
    number: "03",
    images: [
      "assets/img/case-studies/junkborn/title junk.jpg",
      "assets/img/case-studies/junkborn/gameplay.jpg",
      "assets/img/case-studies/junkborn/synergies.jpg"
    ],
    en: {
      title: "Junkborn",
      tagline: "Survive by adapting to whatever the run gives you.",
      status: "WORK IN PROGRESS",
      overview: "Junkborn is a roguelite systems prototype built around exploration, discarded technology and forced adaptation. The player assembles a robot from components that can degrade during combat, meaning the build is never completely stable.",
      role: "Game Designer",
      intent: "Test whether equipment degradation can create meaningful improvisation instead of feeling like arbitrary punishment.",
      mechanics: "Five attachment slots, component durability, power and defense trade-offs, telegraphed enemy attacks, enemy loot, atmosphere pressure and run-based adaptation.",
      loop: "Enter combat → choose actions → components degrade → react to the changing build → defeat the enemy → choose or reject loot → rebuild → adapt to the next encounter.",
      decisions: "Components deliberately trade strength against durability. Powerful equipment may break quickly, while weaker equipment can remain reliable for longer. Enemies use fixed, telegraphed attack patterns so the player can plan around incoming pressure. Defeated enemies offer component choices instead of automatic upgrades, turning loot into another build decision.",
      development: "The project includes a playable Unity systems prototype intentionally built with very simple UI. The prototype tracks turns survived, enemies defeated, components broken, remaining atmosphere and final loadout. Its purpose is to test whether degradation naturally produces adaptation."
    },
    es: {
      title: "Junkborn — Eco de Chatarra",
      tagline: "Sobrevivir adaptándose a lo que la partida te entregue.",
      status: "EN DESARROLLO",
      overview: "Junkborn es un prototipo de sistemas roguelite construido alrededor de la exploración, tecnología descartada y adaptación forzada. El jugador arma un robot a partir de componentes que pueden degradarse durante el combate, por lo que el build nunca permanece completamente estable.",
      role: "Game Designer",
      intent: "Comprobar si la degradación del equipamiento puede generar improvisación significativa en lugar de sentirse como un castigo arbitrario.",
      mechanics: "Cinco slots de equipamiento, durabilidad de componentes, intercambio entre poder y defensa, patrones de ataque telegráficos, loot de enemigos, presión atmosférica y adaptación durante la partida.",
      loop: "Entrar en combate → elegir acciones → degradar componentes → reaccionar al cambio del build → derrotar al enemigo → elegir o rechazar loot → reconstruir → adaptarse al siguiente encuentro.",
      decisions: "Los componentes intercambian deliberadamente potencia por durabilidad. Un componente muy poderoso puede romperse rápido, mientras uno más débil puede resultar más confiable. Los enemigos utilizan patrones de ataque fijos y telegráficos para permitir planificación. Al derrotarlos, el jugador recibe opciones de componentes en lugar de mejoras automáticas, convirtiendo el loot en otra decisión de build.",
      development: "El proyecto cuenta con un prototipo jugable en Unity construido intencionalmente con una UI muy simple. El prototipo registra turnos sobrevividos, enemigos derrotados, componentes rotos, atmósfera restante y equipamiento final. El objetivo es comprobar si la degradación genera adaptación de forma natural."
    }
  },

  breath: {
    number: "04",
    images: [
      "assets/img/case-studies/last-breath/title.gif",
      "assets/img/case-studies/last-breath/gameplay.jpg",
      "assets/img/case-studies/last-breath/previous fight.jpg"
    ],
    en: {
      title: "Last Breath",
      tagline: "When oxygen becomes part of the tactical decision.",
      status: "WORK IN PROGRESS",
      overview: "Last Breath is a turn-based survival and combat concept built around oxygen as a limited resource. The central idea is to make oxygen something the player actively manages during encounters rather than a passive timer or simple replacement for health.",
      role: "Game Designer",
      intent: "Explore how scarcity changes the way players approach turn-based combat.",
      mechanics: "Turn-based combat, oxygen management, survival pressure, tactical decision making, resource scarcity and risk/reward.",
      loop: "Read the encounter → evaluate available actions → spend resources → manage oxygen → react to the outcome → prepare for the next turn.",
      decisions: "The key design decision is treating oxygen as part of the player's tactical economy. The player must consider not only what an action accomplishes, but whether its oxygen cost is justified by the situation.",
      development: "Currently in design and development. The available material represents gameplay concepts and visual explorations of the system rather than a finished build."
    },
    es: {
      title: "Último Aliento — Oxígeno Zero",
      tagline: "Cuando el oxígeno se convierte en parte de la decisión táctica.",
      status: "EN DESARROLLO",
      overview: "Último Aliento es un concepto de supervivencia y combate por turnos construido alrededor del oxígeno como recurso limitado. La idea central es convertir el oxígeno en algo que el jugador gestione activamente durante los encuentros, en lugar de un simple temporizador o sustituto de la vida.",
      role: "Game Designer",
      intent: "Explorar cómo la escasez cambia la forma en que el jugador encara un combate por turnos.",
      mechanics: "Combate por turnos, gestión de oxígeno, presión de supervivencia, decisiones tácticas, escasez de recursos y riesgo/recompensa.",
      loop: "Leer el encuentro → evaluar las acciones disponibles → gastar recursos → gestionar el oxígeno → reaccionar al resultado → prepararse para el siguiente turno.",
      decisions: "La decisión central de diseño es tratar el oxígeno como parte de la economía táctica del jugador. La pregunta no es solamente qué consigue una acción, sino si el costo de oxígeno está justificado por la situación.",
      development: "Actualmente en etapa de diseño y desarrollo. El material disponible representa conceptos de gameplay y exploraciones visuales del sistema, no un build terminado."
    }
  },

  grey: {
    number: "05",
    images: [
      "assets/img/case-studies/grey-market/title.jpg",
      "assets/img/case-studies/grey-market/characters.jpg",
      "assets/img/case-studies/grey-market/gameplay.jpg",
      "assets/img/case-studies/grey-market/gameplay 2.jpg"
    ],
    en: {
      title: "Grey Market",
      tagline: "Information spreads. People react. The system changes.",
      status: "CONCEPT",
      overview: "The Specter Guild — Grey Market is a systemic strategy simulation built around information, influence and an interconnected underground economy. Instead of directly controlling every character, the player manipulates relationships and information and observes how the system reacts.",
      role: "Game Designer",
      intent: "Design a game where indirect control is the main source of agency. The player should learn to understand a network of actors and anticipate how one action can create several secondary consequences.",
      mechanics: "Information propagation, supply and demand, influence, relationships, interconnected actors, risk and reward and emergent consequences.",
      loop: "Take an action → information spreads → actors react → supply, demand or relationships change → new consequences appear → adapt the next action.",
      decisions: "The player does not simply issue commands to individual characters. The design focuses on manipulating conditions inside the system and allowing buyers, influencers, suppliers and competitors to react. The challenge comes from understanding the connections well enough to create the desired outcome.",
      development: "Currently a concept and design exploration. The visual material represents the proposed systemic map, characters and gameplay direction rather than a finished game."
    },
    es: {
      title: "El Gremio del Espectro — Grey Market",
      tagline: "La información se propaga. La gente reacciona. El sistema cambia.",
      status: "CONCEPTO",
      overview: "El Gremio del Espectro — Grey Market es una simulación estratégica sistémica basada en información, influencia y una economía clandestina interconectada. En lugar de controlar directamente a cada personaje, el jugador manipula relaciones e información y observa cómo responde el sistema.",
      role: "Game Designer",
      intent: "Diseñar un juego donde el control indirecto sea la principal fuente de agencia. El jugador debe aprender a comprender una red de actores y anticipar cómo una acción puede generar varias consecuencias secundarias.",
      mechanics: "Propagación de información, oferta y demanda, influencia, relaciones, actores interconectados, riesgo y recompensa y consecuencias emergentes.",
      loop: "Realizar una acción → la información se propaga → los actores reaccionan → cambian la oferta, demanda o relaciones → aparecen nuevas consecuencias → adaptar la siguiente acción.",
      decisions: "El jugador no se limita a dar órdenes a personajes individuales. El diseño se centra en manipular las condiciones del sistema y permitir que compradores, influencers, proveedores y competidores reaccionen. El desafío surge de comprender las conexiones lo suficiente como para provocar el resultado buscado.",
      development: "Actualmente es un concepto y exploración de diseño. El material visual representa el mapa sistémico, personajes y dirección de gameplay propuestos, no un juego terminado."
    }
  },

  shift: {
    number: "06",
    images: [
      "assets/img/case-studies/shift-protocol/title.jpg",
      "assets/img/case-studies/shift-protocol/explication.jpg",
      "assets/img/case-studies/shift-protocol/gameplay.jpg"
    ],
    en: {
      title: "Shift Protocol",
      tagline: "Reality itself becomes the puzzle.",
      status: "CONCEPT",
      overview: "Shift Protocol is a 3D environmental puzzle concept about perception, spatial disorientation and an unstable reality. The environment can contain duplicated objects, impossible perspectives and elements that do not completely match between different states.",
      role: "Game Designer",
      intent: "Treat reality itself as the gameplay system. Instead of presenting puzzles as objects placed inside an environment, the environment becomes the thing the player must understand, compare and manipulate.",
      mechanics: "Environmental puzzles, spatial manipulation, perception, reality states, systemic interactions and player experimentation.",
      loop: "Observe the environment → identify an inconsistency → shift reality → compare states → understand the relationship → manipulate the difference → solve the puzzle.",
      decisions: "The central decision is to make spatial inconsistency mechanically meaningful. A strange object or impossible room is not only visual decoration; it can become information that helps the player understand how different states of reality relate to each other.",
      development: "Currently a concept and design exploration. The available material focuses on communicating the puzzle premise, environmental direction and the relationship between different states of the same space."
    },
    es: {
      title: "Desfase — Shift Protocol",
      tagline: "La realidad misma se convierte en el puzzle.",
      status: "CONCEPTO",
      overview: "Desfase es un concepto de puzzle ambiental 3D basado en percepción, desorientación espacial y una realidad inestable. El entorno puede contener objetos duplicados, perspectivas imposibles y elementos que no coinciden completamente entre distintos estados.",
      role: "Game Designer",
      intent: "Tratar la propia realidad como el sistema de gameplay. En lugar de colocar puzzles dentro de un escenario, el escenario se convierte en aquello que el jugador debe comprender, comparar y manipular.",
      mechanics: "Puzzles ambientales, manipulación espacial, percepción, estados de realidad, interacciones sistémicas y experimentación del jugador.",
      loop: "Observar el entorno → detectar una inconsistencia → cambiar de realidad → comparar estados → comprender la relación → manipular la diferencia → resolver el puzzle.",
      decisions: "La decisión central es hacer que la inconsistencia espacial tenga significado mecánico. Un objeto extraño o una habitación imposible no son solamente decoración visual: pueden convertirse en información que permite comprender cómo se relacionan los distintos estados de la realidad.",
      development: "Actualmente es un concepto y exploración de diseño. El material disponible se concentra en comunicar la premisa del puzzle, la dirección ambiental y la relación entre distintos estados de un mismo espacio."
    }
  }
};

function getCaseLanguage() {
  return localStorage.getItem("lm-language") === "es" ? "es" : "en";
}

function openCaseStudy(projectId) {
  const modal = document.getElementById("case-modal");
  const data = CASE_STUDIES[projectId];

  if (!modal || !data) return;

  const language = getCaseLanguage();
  const content = data[language] || data.en;
  const images = data.images || [];

  document.getElementById("case-modal-number").textContent = data.number;
  document.getElementById("case-modal-status").textContent = content.status;
  document.getElementById("case-modal-title").textContent = content.title;
  document.getElementById("case-modal-tagline").textContent = content.tagline;
  document.getElementById("case-modal-overview").textContent = content.overview;
  document.getElementById("case-modal-role").textContent = content.role;
  document.getElementById("case-modal-intent").textContent = content.intent;
  document.getElementById("case-modal-mechanics").textContent = content.mechanics;
  document.getElementById("case-modal-loop").textContent = content.loop;
  document.getElementById("case-modal-decisions").textContent = content.decisions;
  document.getElementById("case-modal-development").textContent = content.development;

  const mainImage = document.getElementById("case-modal-image");
  const thumbs = document.getElementById("case-modal-thumbs");

  thumbs.innerHTML = "";

  if (images.length > 0) {
    mainImage.src = images[0];
    mainImage.alt = content.title;

    images.forEach(function(image, index) {
      const button = document.createElement("button");
      const thumbnail = document.createElement("img");

      button.type = "button";
      button.className = "case-modal-thumb";
      button.setAttribute("aria-label", "View image " + (index + 1));

      thumbnail.src = image;
      thumbnail.alt = content.title + " image " + (index + 1);

      button.appendChild(thumbnail);

      button.addEventListener("click", function() {
        mainImage.src = image;
        mainImage.alt = content.title;

        document.querySelectorAll(".case-modal-thumb").forEach(function(item) {
          item.classList.remove("is-active");
        });

        button.classList.add("is-active");
      });

      if (index === 0) {
        button.classList.add("is-active");
      }

      thumbs.appendChild(button);
    });
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-modal-open");
}

function closeCaseStudy() {
  const modal = document.getElementById("case-modal");

  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("case-modal-open");
}

function initCaseStudies() {
  document.querySelectorAll(".project").forEach(function(project) {
    const trigger = project.querySelector(".project-trigger");

    if (!trigger) return;

    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();

      const projectId = project.dataset.project;
      openCaseStudy(projectId);
    });
  });

  document.querySelectorAll("[data-case-close]").forEach(function(element) {
    element.addEventListener("click", closeCaseStudy);
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeCaseStudy();
    }
  });
}

document.addEventListener("DOMContentLoaded", initCaseStudies);
