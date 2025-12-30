let t = 0;
const f = 10;   // force
const mu = 0.3; // friction
const m = 50;   // mass
let a = 0;      // angle in degrees
let rafId;

function rotationLoop() {
    t += 0.016; // Increment time (approx 16ms per frame at 60fps)

    // Physics calculation
    let w = (f / m) * (1 - mu) * (t ** 2);
    a = (180 / Math.PI) * w;

    // Update visual with proper 'deg' units
    rotateCard.style.transform = `rotate(${a}deg)`;

    // Continue loop
    rafId = requestAnimationFrame(rotationLoop);
}

function stopRotation() {
    cancelAnimationFrame(rafId);
    // Note: Do not reset 't' here if you want it to pick up where it left off (inertia)
}

// Event Listeners
rotateCard.addEventListener('mousedown', () => {
    // Prevent multiple loops starting if user clicks rapidly
    cancelAnimationFrame(rafId);
    rotationLoop();
});

// Use 'window' for mouseup so it stops even if the mouse leaves the card area
window.addEventListener('mouseup', stopRotation);
