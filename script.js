
const starContainer = document.querySelector('.stars');


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


const shootingStarContainer = document.getElementById('shooting-star-container');

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

   
    const startX = Math.random() * 100; // Start position (viewport width percentage)
    const startY = -10; // Start above the viewport
    const endX = Math.random() * 100 + 100; // End far off-screen horizontally
    const endY = endX * 2; // Adjust slope here (currently y = 2x)

    
    const dx = endX - startX;
    const dy = endY - startY;

   
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 75; // Convert radians to degrees

    
    shootingStar.style.top = `${startY}vh`;
    shootingStar.style.left = `${startX}vw`;
    shootingStar.style.transform = `rotate(${angle}deg)`; // Rotate star to align with trajectory

    shootingStarContainer.appendChild(shootingStar);

    
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

   
    setTimeout(() => {
        shootingStar.remove();
    }, 5000);
}


const shootingStarInterval = isMobile ? 10000 : 7000; // Slow down shooting stars on mobile
setInterval(createShootingStar, shootingStarInterval); // Adjust frequency of shooting stars

