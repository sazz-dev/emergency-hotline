
// Heart Counter

document.getElementById("heart-icon").addEventListener("click", function () {

  const heartCount = parseInt(document.getElementById("heart-count").innerText);
  const totalCount = heartCount + 1;

  document.getElementById("heart-count").innerText = totalCount;

});
