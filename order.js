let currentTotalCost = 0;
let currentTotalTickets = 0;

function processOrder(activityName, fieldId, activityPrice) {
    const selectedQty = parseInt(document.getElementById(fieldId).value);
    
    if (selectedQty <= 0 || isNaN(selectedQty)) { 
        alert("אנא בחר כמות משתתפים תקינה."); 
        return; 
    }
    
    currentTotalCost += selectedQty * activityPrice;
    currentTotalTickets += selectedQty;
    
    document.getElementById('total-cost').innerText = "₪" + currentTotalCost;
    document.getElementById('total-tickets').innerText = currentTotalTickets;
    
    alert(`נוספו בהצלחה ${selectedQty} כרטיסים עבור: ${activityName}!`);
    document.getElementById(fieldId).value = 0;
}