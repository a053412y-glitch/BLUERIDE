let currentDegree = 0;
const rewards = ["בננה אקסטרים", "אבוב שכיבה", "ספינת טורנדו", "אופנוע ים", "סירת ספורט", "ספינת אליזבת"];

function spinTheWheel() {
    const wheel = document.getElementById("wheel-element");
    const btn = document.getElementById("spin-btn");
    const resultText = document.getElementById("result-text");

    btn.disabled = true;
    // הגדלנו את כמות הסיבובים כדי שייקח יותר זמן (7 שניות ב-CSS)
    const randomExtra = Math.floor(Math.random() * 360);
    currentDegree += 3600 + randomExtra; 
    wheel.style.transform = `rotate(${currentDegree}deg)`;

    setTimeout(() => {
        const prizeIndex = Math.floor(((360 - (currentDegree % 360)) % 360) / 60);
        // שינינו את הכיתוב כפי שביקשת
        resultText.innerHTML = `נבחרה לכם האטרקציה: <br> <span style="color:#4DDAFF">${rewards[prizeIndex]}</span>!`;
        btn.disabled = false;
    }, 7200); // תואם לזמן ה-CSS
}