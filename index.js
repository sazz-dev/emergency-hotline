const heartCounter = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("heart-icon");

let count = 0;

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    count += 1;
    heartCounter.textContent = count;
  });
}

//Copy Hotline Number

const copyButtons = document.getElementsByClassName("copy-btn");
const copyCount = document.getElementById("copy-count");

let countCopy = 0;

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const button = copyButtons[i];
    const card = button.closest(".info-card");
    if (!card) return;

    const hotline = card.getElementsByClassName("hotline-number")[0];
    if (!hotline) return;

    const number = hotline.textContent;

    if (number) {
      navigator.clipboard.writeText(number);
      alert("Hotline number copied: " + number);

      countCopy += 1;
      copyCount.textContent = countCopy;
    }
  });
}

const callButtons = document.getElementsByClassName("call-btn");
const coinDisplay = document.getElementById("coin-count");
let coinCount = parseInt(coinDisplay.textContent);

const callHistorySection = document.getElementById("history-sidebar");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const card = this.closest(".info-card");
    if (!card) return;

    const serviceName = card.querySelector(".service-name").textContent;
    const number = card.querySelector(".hotline-number").textContent;

    if (coinCount < 20) {
      alert("You do not have enough coins! must 20 conins need");
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    alert(`☎️ Calling ${serviceName} : ${number}`);

    // Call history

    const historyItem = document.createElement("div");
    historyItem.className = "history-sidebar";
    historyItem.innerHTML = `
     
        <div class="bg-[#F6F6F6] px-5 py-3 rounded-2xl flex justify-between">
        <div>
        <h2 class="font-medium text-[18px] md:text-[22px]">${serviceName}</h2>
        <p class="text-[24px] text-[#5C5C5C]">${number}</p>
        </div>
        <p class="text-[18px]">${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    callHistorySection.prepend(historyItem);
  });
}

// Clear Button
document.getElementById("clear-history").addEventListener("click", function () {
  callHistorySection.innerHTML = "";
});
