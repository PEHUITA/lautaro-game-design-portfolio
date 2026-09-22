const CASE_STUDIES = {
  blood: {
    number: "01",
    images: ["assets/img/blood-debt.webp"],
    en: {
      title: "Blood Debt",
      tagline: "A supernatural bureaucracy where every decision has consequences.",
      status: "WORK IN PROGRESS",
      overview: "Blood Debt is a strategic card game set within a supernatural bureaucracy. The player has been condemned to serve as the tollkeeper of a spiritual bridge, processing souls while trying to reduce their own sentence. Each soul carries memories, guilt, sin and earthly attachments that must be evaluated before deciding their fate.",
      role: "Game Designer",
      intent: "Create a decision-driven card system where narrative is expressed through mechanics, forcing the player to balance immediate advantages against corruption, future consequences and unresolved cases.",
      mechanics: "Card systems, decision making, risk and reward, resource management, narrative through mechanics and consequence-based choices.",
      loop: "Inspect soul → understand its case → evaluate available information → make a decision → deal with the consequence → continue processing souls.",
      decisions: "No decision should feel completely free. Helping one side can create another problem, while short-term advantages can generate corruption or future complications.",
      development: "Currently in design and development. Visual material represents prototypes, UI concepts, card designs and visual exploration rather than a finished game."
    },
    es: {
      title: "Deuda de Sangre",
      tagline: "Una burocracia sobrenatural donde cada decisión tiene consecuencias.",
      status: "EN DESARROLLO",
      overview: "Deuda de Sangre es un juego estratégico de cartas ambientado dentro de una burocracia sobrenatural. El jugador ha sido condenado a trabajar como cobrador de un puente espiritual, procesando almas mientras intenta reducir su propia condena. Cada alma posee recuerdos, culpa, pecados y vínculos terrenales que deben ser evaluados antes de decidir su destino.",
      role: "Game Designer",
      intent: "Crear un sistema de decisiones donde la narrativa se exprese a través de las mecánicas, obligando al jugador a equilibrar ventajas inmediatas con corrupción, consecuencias futuras y casos sin resolver.",
      mechanics: "Sistemas de cartas, toma de decisiones, riesgo y recompensa, gestión de recursos, narrativa mediante mecánicas y decisiones con consecuencias.",
      loop: "Inspeccionar el alma → comprender su caso → analizar la información disponible → tomar una decisión → afrontar la consecuencia → continuar procesando almas.",
      decisions: "Ninguna acción debería sentirse completamente gratuita. Ayudar a una parte puede generar otro problema, mientras que una ventaja inmediata puede producir corrupción o complicaciones futuras.",
      development: "Actualmente en etapa de diseño y desarrollo. El material visual representa prototipos, conceptos de UI, diseños de cartas y exploraciones visuales, no un juego terminado."
    }
  },

  kia: {
    number: "02",
    images: ["assets/img/keep-it-alive.webp"],
    en: {
      title: "Keep It Alive",
      tagline: "How much are you willing to sacrifice to keep them alive?",
      status: "WORK IN PROGRESS",
      overview: "Keep It Alive is a card-based combat game about an individual struggling against a system that constantly pushes them toward exhaustion and collapse. The player manages both their own condition and the target's survival while responding to escalating threats.",
      role: "Game Designer / Unity Developer",
      intent: "Turn exhaustion into an active gameplay system instead of a simple penalty. Every powerful action can create additional pressure, forcing the player to decide how much of their own health, energy and stability they are willing to sacrifice.",
      mechanics: "Card-based combat, Energy, Fatigue, Overexertion, Stabilization, Containment, status effects, enemy-specific mechanics and resource management.",
      loop: "Draw cards → evaluate the current threat → spend Energy → play cards → manage Fatigue → protect the Target → react to enemy effects → survive the encounter.",
      decisions: "Almost no useful action is completely free. Healing can create personal costs, aggressive actions increase exhaustion and defensive systems interact differently with different threats. Enemies can directly affect how the player's hand works.",
      development: "Actively being developed in Unity using C#. Current work includes gameplay systems, card data, card interactions, UI and enemy mechanics."
    },
    es: {
      title: "Keep It Alive",
      tagline: "¿Cuánto estás dispuesto a sacrificar para mantenerlo vivo?",
      status: "EN DESARROLLO",
      overview: "Keep It Alive es un juego de combate basado en cartas sobre una persona que lucha contra un sistema que constantemente la empuja hacia el agotamiento y el colapso. El jugador debe gestionar su propio estado y la supervivencia del objetivo mientras responde a amenazas cada vez mayores.",
      role: "Game Designer / Unity Developer",
      intent: "Convertir el agotamiento en un sistema de gameplay activo en lugar de una simple penalización. Cada acción poderosa puede generar presión adicional y obliga a decidir cuánto de la propia salud, energía y estabilidad se está dispuesto a sacrificar.",
      mechanics: "Combate con cartas, Energía, Fatiga, Sobreexigencia, Estabilización, Contención, estados, mecánicas específicas de enemigos y gestión de recursos.",
      loop: "Robar cartas → evaluar la amenaza → gastar Energía → jugar cartas → gestionar la Fatiga → proteger al Objetivo → responder a los efectos enemigos → sobrevivir al encuentro.",
      decisions: "Casi ninguna acción útil es completamente gratuita. Curar puede generar costos personales, las acciones agresivas aumentan el agotamiento y los sistemas defensivos interactúan de manera diferente con cada amenaza.",
      development: "En desarrollo activo en Unity utilizando C#. El trabajo actual incluye sistemas de gameplay, datos de cartas, interacciones, UI y mecánicas de enemigos."
    }
  },

  junk: {
    number: "03",
    images: ["assets/img/junkborn.webp"],
    en: {
      title: "Junkborn",
      tagline: "Survive by adapting to whatever the run gives you.",
      status: "WORK IN PROGRESS",
      overview: "Junkborn is a roguelite concept centered around exploration, discarded technology and unexpected combinations. The player discovers components and uses them to rebuild their character while dealing with degradation and limited resources.",
      role: "Game Designer",
      intent: "Test whether equipment degradation can create meaningful improvisation rather than simply punishing the player. Losing a component should force adaptation and create new possibilities.",
      mechanics: "Component slots, durability, asymmetrical equipment, enemy loot, atmosphere management, resource pressure and build adaptation.",
      loop: "Explore → fight → components degrade → defeat enemy → choose loot → rebuild loadout → adapt → face the next encounter.",
      decisions: "Components deliberately trade power against durability and defense against fragility. The prototype focuses on whether these trade-offs make players reconsider their build during a run.",
      development: "Currently in design and prototype development. The project includes a playable systems prototype focused on validating degradation and forced adaptation."
    },
    es: {
      title: "Junkborn — Eco de Chatarra",
      tagline: "Sobrevivir adaptándose a lo que la partida te entregue.",
      status: "EN DESARROLLO",
      overview: "Junkborn es un concepto roguelite centrado en exploración, tecnología descartada y combinaciones inesperadas. El jugador encuentra componentes y los utiliza para reconstruir su personaje mientras enfrenta degradación y recursos limitados.",
      role: "Game Designer",
      intent: "Comprobar si la degradación del equipamiento puede generar improvisación significativa en lugar de funcionar simplemente como castigo. Perder un componente debe obligar a adaptarse y abrir nuevas posibilidades.",
      mechanics: "Slots de componentes, durabilidad, equipamiento asimétrico, loot de enemigos, gestión de atmósfera, presión de recursos y adaptación del build.",
      loop: "Explorar → combatir → degradar componentes → derrotar al enemigo → elegir loot → reconstruir el equipamiento → adaptarse → enfrentar el siguiente encuentro.",
      decisions: "Los componentes intercambian deliberadamente poder por durabilidad y defensa por fragilidad. El prototipo busca comprobar si estas decisiones hacen que el jugador reconsidere su build durante una partida.",
      development: "Actualmente en etapa de diseño y prototipado. El proyecto cuenta con un prototipo jugable centrado en validar la degradación y la adaptación forzada."
    }
  },

  breath: {
    number: "04",
    images: ["assets/img/last-breath.webp"],
    en: {
      title: "Last Breath",
      tagline: "When oxygen becomes part of the tactical decision.",
      status: "WORK IN PROGRESS",
      overview: "Last Breath is a turn-based survival and combat concept built around oxygen as a limited and constantly relevant resource. Instead of functioning only as a timer, oxygen becomes part of the player's tactical decision making.",
      role: "Game Designer",
      intent: "Explore how resource scarcity can change the way players approach turn-based combat. Oxygen should create pressure without becoming a passive countdown.",
      mechanics: "Turn-based combat, oxygen management, survival pressure, tactical decisions, risk and reward and resource scarcity.",
      loop: "Evaluate the encounter → choose actions → spend resources → manage oxygen → react to the consequences → survive the next turn.",
      decisions: "The main design decision is to make oxygen a gameplay resource rather than a simple health substitute. Players must constantly consider whether an action is worth the oxygen it consumes.",
      development: "Currently in design and development. Visual material represents concepts, prototypes and explorations of the game's systems."
    },
    es: {
      title: "Último Aliento — Oxígeno Zero",
      tagline: "Cuando el oxígeno se convierte en parte de la decisión táctica.",
      status: "EN DESARROLLO",
      overview: "Último Aliento es un concepto de supervivencia y combate por turnos construido alrededor del oxígeno como un recurso limitado y constantemente relevante. El oxígeno forma parte de las decisiones tácticas del jugador.",
      role: "Game Designer",
      intent: "Explorar cómo la escasez de recursos puede cambiar la forma en que los jugadores afrontan un combate por turnos. El oxígeno debe generar presión sin convertirse simplemente en una cuenta regresiva pasiva.",
      mechanics: "Combate por turnos, gestión de oxígeno, presión de supervivencia, decisiones tácticas, riesgo y recompensa y escasez de recursos.",
      loop: "Evaluar el encuentro → elegir acciones → gastar recursos → gestionar oxígeno → reaccionar a las consecuencias → sobrevivir al siguiente turno.",
      decisions: "La decisión principal es convertir el oxígeno en un recurso de gameplay y no simplemente en un sustituto de la vida. El jugador debe evaluar constantemente si una acción vale el oxígeno que consume.",
      development: "Actualmente en etapa de diseño y desarrollo. El material visual representa conceptos, prototipos y exploraciones de los sistemas del juego."
    }
  },

  grey: {
    number: "05",
    images: ["assets/img/grey-market.webp"],
    en: {
      title: "Grey Market",
      tagline: "Information spreads. People react. The system changes.",
      status: "CONCEPT",
      overview: "The Specter Guild — Grey Market is a systemic strategy simulation built around information, influence and an interconnected market. Instead of directly controlling every character, the player manipulates relationships, demand, supply and information.",
      role: "Game Designer",
      intent: "Create a system where the player acts indirectly and learns to predict how information and relationships propagate through an interconnected network.",
      mechanics: "Information propagation, economy, influence, relationships, interconnected systems, risk and reward and emergent consequences.",
      loop: "Player action → information spreads → people react → market changes → new consequences → player adapts.",
      decisions: "The core design choice is indirect control. The player does not simply issue commands; they manipulate a system and observe how different actors respond.",
      development: "Currently a concept and design project. Visual material represents the proposed gameplay direction and visual language."
    },
    es: {
      title: "El Gremio del Espectro — Grey Market",
      tagline: "La información se propaga. La gente reacciona. El sistema cambia.",
      status: "CONCEPTO",
      overview: "El Gremio del Espectro — Grey Market es una simulación estratégica sistémica basada en información, influencia y un mercado interconectado. En lugar de controlar directamente a cada personaje, el jugador manipula relaciones, demanda, oferta e información.",
      role: "Game Designer",
      intent: "Crear un sistema donde el jugador actúe de manera indirecta y aprenda a anticipar cómo la información y las relaciones se propagan dentro de una red interconectada.",
      mechanics: "Propagación de información, economía, influencia, relaciones, sistemas interconectados, riesgo y recompensa y consecuencias emergentes.",
      loop: "Acción del jugador → la información se propaga → las personas reaccionan → cambia el mercado → aparecen nuevas consecuencias → el jugador se adapta.",
      decisions: "La decisión central de diseño es el control indirecto. El jugador no se limita a dar órdenes: manipula un sistema y observa cómo responden sus diferentes actores.",
      development: "Actualmente es un proyecto conceptual y de diseño. El material visual representa la dirección de gameplay y el lenguaje visual propuestos."
    }
  },

  shift: {
    number: "06",
    images: ["assets/img/shift-protocol.webp"],
    en: {
      title: "Shift Protocol",
      tagline: "Reality itself becomes the puzzle.",
      status: "CONCEPT",
      overview: "Shift Protocol is a 3D puzzle concept about perception, spatial disorientation and an unstable reality. Rooms can contain impossible perspectives, duplicated objects, misplaced elements and spaces that do not completely match.",
      role: "Game Designer",
      intent: "Treat reality itself as a gameplay system. The player shifts between different states of the same environment and uses the differences between them to understand and manipulate the world.",
      mechanics: "Environmental puzzles, spatial manipulation, perception, systemic interactions, player experimentation and reality states.",
      loop: "Observe environment → identify inconsistency → shift reality → compare states → manipulate the difference → solve the puzzle.",
      decisions: "The environment is not simply the stage for the puzzle; it is the puzzle. The design focuses on making spatial perception and inconsistencies mechanically meaningful.",
      development: "Currently a concept and design exploration. Visual material represents proposed environments, gameplay ideas and visual direction."
    },
    es: {
      title: "Desfase — Shift Protocol",
      tagline: "La realidad misma se convierte en el puzzle.",
      status: "CONCEPTO",
      overview: "Shift Protocol es un concepto de puzzle 3D basado en percepción, desorientación espacial y una realidad inestable. Las habitaciones pueden contener perspectivas imposibles, objetos duplicados, elementos fuera de lugar y espacios que no coinciden completamente.",
      role: "Game Designer",
      intent: "Tratar la propia realidad como un sistema de gameplay. El jugador cambia entre diferentes estados del mismo entorno y utiliza las diferencias entre ellos para comprender y manipular el mundo.",
      mechanics: "Puzzles ambientales, manipulación espacial, percepción, interacciones sistémicas, experimentación y estados de realidad.",
      loop: "Observar el entorno → detectar una inconsistencia → cambiar de realidad → comparar estados → manipular la diferencia → resolver el puzzle.",
      decisions: "El entorno no es simplemente el escenario del puzzle: es el puzzle. El diseño busca que la percepción espacial y las inconsistencias tengan un significado mecánico.",
      development: "Actualmente es un concepto y exploración de diseño. El material visual representa posibles entornos, ideas de gameplay y dirección visual."
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