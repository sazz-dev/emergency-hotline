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


/*

const serviceData = [];

const callButton = document.getElementsByClassName("call-btn");
const countSection = document.getElementById("coin-count");
const serviceNameAlert = document.getElementById("service-name");

let coinCount = 0;

for (let i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener("click", function () {
    const button = callButton[i];
    const card = button.closest(".info-card");
    if (!card) return;
    const hotline = card.getElementsByClassName("hotline-number")[0];
    if (!hotline) return;
    const number = hotline.textContent;


        const data = {
      serviceName: "National Emergency Number",
      hotline: "999",
      date: new Date().toLocaleTimeString(),
    };
    serviceData.push(data);

    alert(serviceNameAlert + number)

  });
}


*/



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


