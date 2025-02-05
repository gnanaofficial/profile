let experiences = [
  {
    role: "Frontend Developer",
    company: "Webortex",
    year: "2023",
    mode: "Remote - Full-time",
  },
  {
    role: "UI Designer",
    company: "ABC Agency",
    year: "2022",
    mode: "Onsite - Full-time",
  },
];

function renderExperiences() {
  const container = document.getElementById("experience-list");
  container.innerHTML = "";
  experiences.forEach((exp) => {
    container.innerHTML += `
            <div class="relative flex items-center gap-4">
                <div class="w-4 h-4 bg-black rounded-full absolute -left-[10px]"></div>
                <div class="bg-gray-200 p-3 rounded-lg w-full">
                    <h3 class="text-md font-semibold">${exp.role} - ${exp.company}</h3>
                    <p class="text-sm text-gray-600">${exp.year} • ${exp.mode}</p>
                </div>
            </div>
        `;
  });
}

function addExperience() {
  const role = prompt("Enter Role:");
  const company = prompt("Enter Company:");
  const year = prompt("Enter Year:");
  const mode = prompt("Enter Work Mode (Remote/Onsite - Full-time/Part-time):");

  if (role && company && year && mode) {
    experiences.push({ role, company, year, mode });
    renderExperiences();
  }
}

// Show the add button when needed
document.getElementById("add-btn").classList.remove("hidden");

renderExperiences();
