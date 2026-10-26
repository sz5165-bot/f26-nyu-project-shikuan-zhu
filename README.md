## **Instructions**

### **Step-by-Step: Getting Set Up**

**1\. Click the green "Use this template" button**

This creates a brand new repository under your own GitHub account, pre-loaded with the starting files.

**2\. Name your repository**

Use this naming convention:

`nyu-f26-lastname-firstname`

**3\. Click "Create repository from template"**

GitHub copies the files and takes you to your new repo page.

**4\. Click the green "Code" button → "Create Codespace"**

**5\. Wait about 15 minutes while it boots up**

This is normal. Codespaces is spinning up a virtual computer for you in the cloud, installing dependencies, and opening VS Code in your browser. Grab a sip of water while it loads.

**6\. You're ready**

When the browser tab opens to VS Code, open the `style.css` file in the file explorer on the left. The base styles are already written for you, and each rule has **STEP** comments showing where the grid properties go. That's your starting point — we'll type the grid code together in class, one step at a time.

---

## **GitHub Codespaces — A Brief Guide**

### **What Is It?**

Codespaces is a development environment that runs entirely in your browser. Instead of installing software on your own computer, you get a virtual computer in the cloud — pre-configured and ready to code — that you access through a web browser. Microsoft (which owns GitHub) hosts it.

### **What It Saves Us From**

Normally, getting a development environment set up requires installing and configuring a bunch of tools:

- A code editor (VS Code)
- A terminal (command line)
- Git (version control)
- Node.js, Python, or whatever runtime the project needs
- Extensions, themes, settings

Each one of these can break in unique ways depending on your operating system, your computer's permissions, or just bad luck. **Codespaces eliminates all of that.** You click one button and you're in a fully working environment. No "it works on my machine" problems.

### **How It Works (High Level)**

1. A project lives in a GitHub repository.
2. You click the green **Code** button and select **Open with Codespaces**.
3. GitHub spins up a lightweight virtual machine running Linux, installs the project's dependencies automatically, and opens a browser-based version of VS Code.
4. You code, save, and commit just like you would on your local machine.
5. When you're done, you stop the Codespace. Next time you come back, everything is exactly where you left it.

The environment is defined by a file called `devcontainer.json` (or `.devcontainer/`) in the repository. It's like a recipe that tells GitHub "this project needs X, Y, and Z."

### **The Catch: It's Slow to Start (And Why)**

A cold start takes **1–3 minutes**. Here's why:

- **A new virtual machine has to boot.** Codespaces isn't "running" until you open it. There's no always-on computer — one is created for you on demand. That means spinning up an OS from scratch.
- **Your dependencies install.** If the project requires packages or libraries, Codespaces runs the install process when it starts. This is the same `npm install` or `pip install` you'd run locally — it just happens automatically.
- **Extensions and settings sync.** VS Code loads your extensions, themes, and preferences from your GitHub account.

**Once it's running, it's fast.** The delay is only on the first launch of the day (or after you've manually stopped the Codespace). If you keep it open between sessions, there's no wait.

### **Tips**

- **Don't close your Codespace mid-session.** Just leave the tab open. If you close it, stop the Codespace from the GitHub dashboard so it doesn't eat into your monthly usage hours.
- **Your work is saved automatically.** Even if the Codespace stops, the files are stored on GitHub. You won't lose anything.
- **You get a fixed number of free hours per month** through the GitHub Student Developer Pack. A cold start uses some of those hours just booting up, so it's worth keeping one Codespace alive while you're actively working.
- **If you need to work offline,** you can always install VS Code and Git locally instead but it does take some set up — Codespaces is a convenience, not a requirement.

## **Weekly Update — JavaScript Arrays and Dynamic Content**

###\.Latest Mockup

     View the latest mockup

###\. Main Changes

- Created a separate script.js file and linked it to index.html.
- Created seven objects representing a sample week of guitar practice.
- Replaced the hard-coded weekly records with dynamically generated content.
- Added the original logo, menu icon, guitar, record, and sticker images.
- Organized the page into a single vertical layout matching the mobile mockup.

###\. Data Displayed

The practiceWeek array contains seven daily practice records.

Each object includes:

- day: the full name of the day
- shortLabel: the letter displayed above the daily marker
- status: the practice status
- completed: whether practice was completed
- today: whether the record represents the sample current day

The data is based on the mockup. It displays four completed days and Saturday in progress.

###\. How JavaScript Creates the HTML

The script selects the week-container element using getElementById().

A forEach() loop goes through the practiceWeek array. For each object, document.createElement() creates an li and two span elements.

The script uses textContent to set the day label and status marker. It adds classes and attributes, then uses appendChild() to insert the generated elements into the container.

The script also counts the completed days and displays the weekly total.

Keeping data in an array allows the weekly content to be updated without rewriting repeated HTML.

###\. Challenges and Solutions

Combining earlier styles with new layout changes created conflicting CSS rules. Incomplete removal of the desktop layout also left an unmatched brace.

I resolved this with assistance by consolidating the CSS into one vertical layout and removing leftover desktop rules. I also removed an extra closing section tag and invalid nested comments from the HTML.

###\. Goals Before Next Week

- Add interactive exercise completion.
- Connect exercise completion to weekly progress.
- Explore saving practice and reflection choices between visits.

## Structure Audit — October 26, 2026

###\.Fixed today:
-Fixed the sizing and responsiveness of certain fonts.

###\.Still missing:

- Confirm the required desktop layout.
- Add any missing section or content found during the audit.

###\.One thing I couldn't figure out:

- My current page follows the 375px mobile mockup. Should I also implement the desktop layout before the next layout assignment?
