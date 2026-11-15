console.log("script.js is connected");

// SAMPLE WEEKLY PRACTICE DATA
// Seven objects satisfy the requirement of at least five items.
const practiceWeek = [
  {
    day: "Monday",
    shortLabel: "M",
    status: "Completed",
    completed: true,
    today: false
  },
  {
    day: "Tuesday",
    shortLabel: "T",
    status: "No practice",
    completed: false,
    today: false
  },
  {
    day: "Wednesday",
    shortLabel: "W",
    status: "Completed",
    completed: true,
    today: false
  },
  {
    day: "Thursday",
    shortLabel: "T",
    status: "Completed",
    completed: true,
    today: false
  },
  {
    day: "Friday",
    shortLabel: "F",
    status: "Completed",
    completed: true,
    today: false
  },
  {
    day: "Saturday",
    shortLabel: "S",
    status: "In progress",
    completed: false,
    today: true
  },
  {
    day: "Sunday",
    shortLabel: "S",
    status: "Not started",
    completed: false,
    today: false
  }
];

// MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("main-navigation");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

menuButton.addEventListener("click", () => {
  const isOpen =
    menuButton.getAttribute("aria-expanded") === "true";

  navigation.classList.toggle("is-open", !isOpen);

  menuButton.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );
});

// Close the mobile menu after choosing a link.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Escape closes the menu and returns focus to its button.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    navigation.classList.contains("is-open")
  ) {
    closeMenu();
    menuButton.focus();
  }
});

// DAILY PRACTICE STATE
const exerciseOrder = ["chords", "rhythm", "song-section"];
const completedExercises = new Set(["chords"]);

const practiceCards = document.querySelectorAll("#practice [data-exercise]");
const practiceCount = document.getElementById("practice-count");
const dailyProgress = document.getElementById("daily-progress");
const weekContainer = document.getElementById("week-container");
const weeklyTotal = document.getElementById("weekly-total");
const todayLabel = document.getElementById("today-label");

// render: updates the exercise cards, daily progress and seven-day practice record from state.
function render() {
  const total = exerciseOrder.length;
  const completedCount = exerciseOrder.filter(
    (id) => completedExercises.has(id)
  ).length;
  const nextExercise = exerciseOrder.find(
    (id) => !completedExercises.has(id)
  );
  const dayIsComplete = completedCount === total;

  // Draw each exercise card from its ID.
  practiceCards.forEach((card) => {
    const id = card.dataset.exercise;
    const isComplete = completedExercises.has(id);

    card.classList.toggle("card-primary", isComplete);
    card.classList.toggle("card-surface", !isComplete && id === "rhythm");
    card.classList.toggle("card-accent", !isComplete && id === "song-section");

    const button = card.querySelector(".practice-step-button");
    if (!button) return; // Chords already has a static Completed label.

    const isNext = id === nextExercise;
    button.disabled = !isNext;

    if (isComplete) {
      button.textContent = "Completed";
    } else if (isNext) {
      button.textContent = "Mark complete";
    } else {
      button.textContent = "Ready to start";
    }

    if (isNext) {
      const title = card.querySelector("h3").textContent.trim();
      button.setAttribute("aria-label", `Mark ${title} complete`);
    } else {
      button.removeAttribute("aria-label");
    }
  });

  // Calculate the count and progress bar from the same state.
  practiceCount.textContent =
    `${completedCount} / ${total} complete${dayIsComplete ? "!" : ""}`;
  dailyProgress.max = total;
  dailyProgress.value = completedCount;

  // Clear the previous list before drawing the seven days again.
  weekContainer.replaceChildren();
  let completedDays = 0;
  let todayText = "No current day selected";

  practiceWeek.forEach((record) => {
    let isComplete = record.completed;
    let status = record.status;

    // Only the sample day marked as today follows the exercise state.
    if (record.today) {
      isComplete = dayIsComplete;
      status = isComplete ? "Completed" : "In progress";
      todayText = `Today: ${record.day}`;
    }

    const item = document.createElement("li");
    item.classList.add("week-day");
    item.setAttribute("data-day", record.day);
    item.setAttribute("aria-label", `${record.day}: ${status}`);
    item.classList.toggle("is-today", record.today);

    const label = document.createElement("span");
    label.classList.add("day-label");
    label.setAttribute("aria-hidden", "true");
    label.textContent = record.shortLabel;

    const mark = document.createElement("span");
    mark.classList.add("day-mark");
    mark.setAttribute("aria-hidden", "true");

    if (isComplete) {
      mark.textContent = "✓";
      item.classList.add("is-complete");
      completedDays += 1;
    } else {
      mark.textContent = record.today ? "·" : "–";
    }

    item.appendChild(label);
    item.appendChild(mark);
    weekContainer.appendChild(item);
  });

  weeklyTotal.textContent = `${completedDays} days practiced`;
  todayLabel.textContent = todayText;
}

practiceCards.forEach((card) => {
  const button = card.querySelector(".practice-step-button");
  if (!button) return;

  button.addEventListener("click", () => {
    const nextExercise = exerciseOrder.find(
      (id) => !completedExercises.has(id)
    );
    if (card.dataset.exercise !== nextExercise) return;

    completedExercises.add(card.dataset.exercise);
    render();// Update the page after clicking
  });
});

render();// Draw the initial state when the page loads