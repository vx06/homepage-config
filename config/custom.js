function initCyberRain() {
    if (document.getElementById('cyberRainCanvas')) return;

    console.log("Matrix Initialization started...");

    const canvas = document.createElement('canvas');
    canvas.id = 'cyberRainCanvas';
    
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '1'; 
    canvas.style.pointerEvents = 'none'; 
    canvas.style.opacity = '0.25'; 

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const chars = '01'.split(''); 
    const fontSize = 14;
    const columns = Math.floor(width / fontSize); 
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * height; 
    }

    function draw() {
        ctx.fillStyle = 'rgba(9, 16, 20, 0.15)'; 
        ctx.fillRect(0, 0, width, height);

        ctx.font = fontSize + 'px "Share Tech Mono", monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            if (Math.random() > 0.90) {
                ctx.fillStyle = '#00f3ff'; 
            } else {
                ctx.fillStyle = '#008f99'; 
            }

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initCyberRain();
} else {
    document.addEventListener("DOMContentLoaded", initCyberRain);
}

setTimeout(initCyberRain, 1000);