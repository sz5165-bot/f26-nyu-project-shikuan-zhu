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

// GET THE WEEKLY RECORD CONTAINER
const weekContainer = document.getElementById("week-container");
const weeklyTotal = document.getElementById("weekly-total");

let completedDays = 0;

// CREATE THE SEVEN DAILY RECORDS
practiceWeek.forEach((record) => {
  const listItem = document.createElement("li");
  const dayLabel = document.createElement("span");
  const dayMark = document.createElement("span");

  // Set classes and attributes.
  listItem.classList.add("week-day");

  listItem.setAttribute(
    "aria-label",
    `${record.day}: ${record.status}`
  );

  listItem.setAttribute("data-day", record.day);

  dayLabel.classList.add("day-label");
  dayMark.classList.add("day-mark");

  // The full accessible description is on the list item.
  dayLabel.setAttribute("aria-hidden", "true");
  dayMark.setAttribute("aria-hidden", "true");

  // Set visible content.
  dayLabel.textContent = record.shortLabel;

  if (record.completed) {
    dayMark.textContent = "✓";
    listItem.classList.add("is-complete");
    completedDays += 1;
  } else if (record.today) {
    dayMark.textContent = "·";
  } else {
    dayMark.textContent = "–";
  }

  if (record.today) {
    listItem.classList.add("is-today");
  }

  // Assemble the record and insert it into the page.
  listItem.appendChild(dayLabel);
  listItem.appendChild(dayMark);
  weekContainer.appendChild(listItem);
});

// DISPLAY THE TOTAL
weeklyTotal.textContent = `${completedDays} days practiced`;

// Find the day marked as today in the array.
const todayRecord = practiceWeek.find((record) => record.today);

const todayLabel = document.getElementById("today-label");

todayLabel.textContent = todayRecord
  ? `Today: ${todayRecord.day}`
  : "No current day selected";

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