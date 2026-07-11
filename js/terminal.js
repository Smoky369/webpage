const commands = {
  help: `Available Protocols:
  help      - Display this protocol list.
  projects  - Scan and log active projects.
  skills    - List core technology stacks.
  whoami    - Access target identity profile.
  sysinfo   - Retreive local system telemetry.
  contact   - Initialize email communication relay.
  clear     - Wipe command terminal history.
  exit      - Close active shell session.`,

  whoami: `IDENTIFICATION RECORD:
  Name: Manish Pathak
  Role: Aerospace & Embedded Systems Builder
  Status: Active Student / Self-Taught Engineer
  Summary: Focused on bridging hardware (ESP32, Arduino) with avionics telemetry and cybersecurity audits. Seeking to pioneer aerospace innovation in Nepal.`,

  skills: `CORE TECHNOLOGY MATRIX:
  ===========================================
  [Embedded/Hardware]: ESP32, ESP8266, Raspberry Pi Pico, Arduino, Telemetry Modules, High-Voltage Physics.
  [Cybersecurity]    : Network pentesting, Nmap, Burp Suite, Hydra, Hashcat, Kali Linux.
  [Programming]      : C, Python, JavaScript, HTML5, CSS3, WebSockets.
  ===========================================`,

  sysinfo: `SYSTEM TELEMETRY SUMMARY:
  ---------------------------------
  OS        : ManishOS v1.0.369
  Platform  : Planet Earth Core
  Terminal  : Secure WebSocket Relay
  Shell     : /bin/bash (restricted)
  Connection: Stable (encrypted)
  Uptime    : Emulated continuous uptime`,
};

function formatProjectList(projects) {
  let output = `RETRIEVING PROJECT DATABASES:\n`;
  output += `===========================================\n`;
  projects.forEach((proj, idx) => {
    output += `[0${idx + 1}] ${proj.name.toUpperCase()}\n`;
    output += `     Tag     : ${proj.tag}\n`;
    output += `     Status  : ${proj.status}\n`;
    output += `     Progress: ${proj.progress}%\n`;
    output += `     Details : ${proj.description}\n\n`;
  });
  output += `===========================================`;
  return output;
}

export function initTerminal(projectCatalog) {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');

  if (!terminalInput || !terminalOutput || !terminalBody) return;

  // Event listener to focus input on terminal click
  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });

  terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const commandLine = terminalInput.value.trim();
      terminalInput.value = '';

      if (!commandLine) return;

      const args = commandLine.split(' ');
      const cmd = args[0].toLowerCase();

      // Append input command line to history
      const userLine = document.createElement('div');
      userLine.className = 'terminal-line';
      userLine.innerHTML = `<span class="terminal-prompt">guest@pathak369:~$</span> ${commandLine}`;
      terminalOutput.appendChild(userLine);

      // Handle output response
      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-line';

      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        return;
      }

      if (cmd === 'exit') {
        const logoutBtn = document.querySelector('.nav-item--muted');
        if (logoutBtn) {
          logoutBtn.click();
        } else {
          outputLine.textContent = 'Session exit sequence not found.';
          terminalOutput.appendChild(outputLine);
        }
        return;
      }

      if (cmd === 'contact') {
        outputLine.textContent = 'Opening contact relay client...';
        terminalOutput.appendChild(outputLine);
        setTimeout(() => {
          window.location.href = 'mailto:pathak369manish@gmail.com?subject=Portfolio Terminal Contact&body=Connection initiated via portfolio shell.';
        }, 500);
        return;
      }

      if (cmd === 'projects') {
        outputLine.textContent = formatProjectList(projectCatalog);
      } else if (commands[cmd]) {
        outputLine.textContent = commands[cmd];
      } else {
        outputLine.innerHTML = `<span style="color: #ef4444;">Error: Unknown command "${cmd}". Type "help" to display operational parameters.</span>`;
      }

      terminalOutput.appendChild(outputLine);

      // Scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}
