// function call to access innerText value
const history = [];
function callInt(id) {
  const strNum = document.getElementById(id).innerText;
  const strToInt = parseInt(strNum);
  return strToInt;
}
// heart adding function
document.getElementById("heart").addEventListener("click", function () {
  const number = callInt("add-heart");
  const addHeart = number + 1;
  document.getElementById("add-heart").innerText = addHeart;
});
// copy adding function
document.getElementById("copy").addEventListener("click", function () {
  const copyCount = callInt("copy-count");
  const addCopy = copyCount + 1;

  document.getElementById("copy-count").innerText = addCopy;
  // const copyNumber=document.getElementsByClassName('copy-number')[0].innerHTML
  // console.log(copyNumber)
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementsByClassName("copy-number")[0].innerText
  );
});

// copy function
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const text = card.querySelector(".copy-text").innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.innerHTML = '<copy-icon fa-regular fa-copy text-lg text-gray-500"></i> Copied!';
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = '<i class="copy-icon fa-regular fa-copy text-lg text-gray-500"></i> Copy';
        btn.classList.remove("copied");
      }, 1500);
    });
  });
});

// calling function
document.getElementById("call-btn").addEventListener("click", function () {
  const coin = callInt("total-coin");
  const callingRate = coin - 20;

  if (callingRate < 0) {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  } else {
    alert(
      "Calling" +
        " " +
        document.getElementById("National").innerText +
        " " +
        document.getElementById("National-number").innerText +
        "..."
    );
  }
  document.getElementById("total-coin").innerText = callingRate;

  // history
  const data = {
    name: "জাতীয় জরুরি সেবা",
    number: 999,
    time: new Date().toLocaleTimeString(),
  };
  history.push(data);
});
// add history function
document.getElementById("call-btn").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";

  history.reverse();

  for (const memory of history) {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="flex justify-between items-center mt-3 bg-[#FAFAFA] rounded-lg p-3">
            <div>
                <h1>${memory.name}</h1>
                <p>${memory.number}</p>
            </div>
            <div>
                <h1>${memory.time}</h1>
            </div>
          </div>  
        `;
    historyDiv.appendChild(div);
  }
  const coin = callInt("total-coin");
  const callingRate = coin - 20;
  if (callingRate < 0) {
    history.reverse(stop);
    return;
  }
});

// clear function
document.getElementById("clear").addEventListener("click", function () {
   document.getElementById('history-div').innerText=''
   
});


