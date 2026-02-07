const rotateCard = document.createElement("div");
rotateCard.className = "rotate-card card";
rotateCard.id = "rotate-card";
rotateCard.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24"><title xmlns="">rotate-right-outline</title><g class="rotate-right-outline"><g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><path d="M12 6.05c-3.869 0-7 3.126-7 6.975C5 16.875 8.131 20 12 20s7-3.126 7-6.975a6.9 6.9 0 0 0-.673-2.987a1 1 0 0 1 1.806-.86A8.9 8.9 0 0 1 21 13.024C21 17.985 16.968 22 12 22s-9-4.015-9-8.975s4.032-8.974 9-8.974c1.24 0 2.425.25 3.502.705l-.777 1.843A7 7 0 0 0 12 6.05"/><path d="M13.806 2.233a.857.857 0 0 1 1.15.385l1.332 2.683c.267.537.046 1.19-.493 1.456l-2.691 1.329a.857.857 0 1 1-.758-1.536L14.47 5.5l-1.053-2.118a.857.857 0 0 1 .388-1.149Z"/></g></g></svg>`;
rotateCard.style.height = rotateCard.style.width = "min(45vw, 400px)";
rotateCard.style.transform = "rotate(0)";

if (cardsContainer) cardsContainer.append(rotateCard);

rotateCardObject = new Card(1, rotateCard, rotate);
cards.push(rotateCardObject);

// --- PHYSICS VARIABLES ---
let angle = 0; // Current rotation angle
let velocity = 0; // How fast it's turning
let isMouseDown = false;
let animationId = null;

// Tuning Constants
const ACCELERATION = 0.0025; // How fast it speeds up
const FRICTION = 0.96; // Air resistance (1 = no friction, 0.9 = high friction)
const MAX_SPEED = 0.8; // Cap the speed so it doesn't fly off

// --- CONTROL LOGIC ---
function rotate() {
  rotateCard.addEventListener("mousedown", () => {
    isMouseDown = true;
    // Start the loop if it's not already running
    if (!animationId) {
      loop();
    }
  });

  window.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  // Handle mouse leaving the window too
  window.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });
}

// --- THE PHYSICS LOOP ---
const loop = () => {
  // 1. Apply Forces
  if (isMouseDown) {
    // Accelerate
    velocity += ACCELERATION;
  } else {
    // Apply Drag/Friction only when not pushing
    velocity *= FRICTION;
  }

  // 2. Cap Velocity (Optional, prevents infinite speed)
  if (velocity > MAX_SPEED) velocity = MAX_SPEED;

  // 3. Apply Velocity to Position (Angle)
  angle += velocity;

  // 4. Render
  rotateCard.style.transform = `rotate(${angle}rad)`;
  rotateCard.style.borderRadius = `${velocity * 250}px`;

  // 5. Loop Management
  // Keep running if we are holding the mouse OR if the card is still spinning fast enough
  if (isMouseDown || Math.abs(velocity) > 0.001) {
    animationId = requestAnimationFrame(loop);
  } else {
    // Stop the loop to save battery/cpu
    animationId = null;
    velocity = 0; // Snap to 0 to prevent micro-movements
  }
};

// Start
rotate();
