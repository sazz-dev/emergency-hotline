


const callButtons = document.getElementsByClassName('call-btn');
const coinDisplay = document.getElementById('coin-count');

const callHistorySection = document.querySelector('.history-sidebar');
let coinCount = parseInt(coinDisplay.textContent);

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener('click', function() {
    const card = callButtons[i].closest('.info-card');
    if (!card) return;

    const hotlineElem = card.getElementsByClassName('hotline-number')[0];
    const serviceNameElem = card.getElementsByClassName('service-name')[0];

    if (!hotlineElem || !serviceNameElem) return;

    const number = hotlineElem.textContent.trim();
    const serviceName = serviceNameElem.textContent.trim();

    // coin check
    if (coinCount < 20) {
      alert("You do not have enough coins to make this call!");
      return;
    }

    // coin deduct
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    // alert
    alert(`${serviceName} : ${number}`);

    // Add to call history
    const historyItem = document.createElement("div");
    historyItem.className = "bg-[#F6F6F6] px-5 py-3 rounded-2xl flex justify-between";
    historyItem.innerHTML = `
     
    

    
    <div>
        <h2 class="font-medium text-[18px] md:text-[22px]">${serviceName}</h2>
        <p class="text-[24px] text-[#5C5C5C]">${number}</p>
      </div>
      <p class="text-[18px]">${new Date().toLocaleTimeString()}</p>
    `;
    callHistorySection.prepend(historyItem);
  });
}
// ========== Clear Button ==========
const clearButton = document.getElementById('clear-history');
clearButton.addEventListener('click', function() {
  callHistorySection.innerHTML = ""; 
});

