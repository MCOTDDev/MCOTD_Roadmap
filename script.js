// Generate small stars with random positions and animations
const starContainer = document.querySelector('.stars');

// Check if the screen width is less than 600px (for mobile)
const isMobile = window.innerWidth <= 600;

const numberOfStars = isMobile ? 50 : 150; // Limit stars to 50 for mobile, 150 for desktop/tablet

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    if (Math.random() > 0.95) star.classList.add('bright'); // Brighter stars occasionally
    star.style.top = `${Math.random() * 100}vh`; // Random vertical position
    star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    star.style.animationDuration = `${Math.random() * 20 + 10}s`; // Random animation speed
    star.style.animationDelay = `${Math.random() * 5}s`; // Random delay for animation
    starContainer.appendChild(star);
}

// Generate shooting stars dynamically
const shootingStarContainer = document.getElementById('shooting-star-container');

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

    // Randomize starting position along the top
    const startX = Math.random() * 100; // Start position (viewport width percentage)
    const startY = -10; // Start above the viewport
    const endX = Math.random() * 100 + 100; // End far off-screen horizontally
    const endY = endX * 2; // Adjust slope here (currently y = 2x)

    // Calculate the trajectory
    const dx = endX - startX;
    const dy = endY - startY;

    // Correct the angle calculation
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 75; // Convert radians to degrees

    // Set star position and rotation
    shootingStar.style.top = `${startY}vh`;
    shootingStar.style.left = `${startX}vw`;
    shootingStar.style.transform = `rotate(${angle}deg)`; // Rotate star to align with trajectory

    shootingStarContainer.appendChild(shootingStar);

    // Animate the star
    shootingStar.animate(
        [
            { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 1 },
            { transform: `translate(${dx}vw, ${dy}vh) rotate(${angle}deg)`, opacity: 0 }
        ],
        {
            duration: 5000, // Animation duration in milliseconds
            easing: 'linear',
        }
    );

    // Remove the star after animation ends
    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}

// Trigger shooting stars at intervals
setInterval(createShootingStar, 7000); // Adjust frequency of shooting stars
