// function call to access innerText value
const history = [];
function callInt(id) {
  const strNum = document.getElementById(id).innerText;
  const strToInt = parseInt(strNum);
  return strToInt;
}
// heart adding function
const heartBtn = document.querySelectorAll(".heart1");
for (const btn of heartBtn) {
  btn.addEventListener("click", function () {
    const number = callInt("add-heart");
    const addHeart = number + 1;
    document.getElementById("add-heart").innerText = addHeart;
  });
}
// copy adding function
const copyBtn = document.getElementsByClassName("copy-btn");
for (const copy of copyBtn) {
  copy.addEventListener("click", function () {
    const copyCount = callInt("copy-count");
    const addCopy = copyCount + 1;
    document.getElementById("copy-count").innerText = addCopy;
  });
}

// copy function
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const text = card.querySelector(".copy-text").innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.innerHTML =
        '<copy-icon fa-regular fa-copy text-lg text-gray-500"></i> Copied!';
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML =
          '<i class="copy-icon fa-regular fa-copy text-lg text-gray-500"></i> Copy';
        btn.classList.remove("copied");
      }, 1500);
    });
  });
});

// calling function
// National Emergency
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
// add National Emergency history function
document.getElementById("call-btn").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";

  // history.reverse();

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
  //  history.reverse();
  // const coin = callInt("total-coin");
  // const callingRate = coin - 20;
  // if (callingRate < 0) {
  //   // history.reverse(stop);
  //   return;
  // }
});
// copy National Emergency number alert
document.getElementById("copy").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementById("National-number").innerText
  );
});

// Police
document.getElementById("call-police").addEventListener("click", function () {
  const coin = callInt("total-coin");
  const callingRate = coin - 20;

  if (callingRate < 0) {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  } else {
    alert(
      "Calling" +
        " " +
        document.getElementById("police").innerText +
        " " +
        document.getElementById("police-number").innerText +
        "..."
    );
  }
  document.getElementById("total-coin").innerText = callingRate;

  // history
  const data = {
    name: "পুলিশ",
    number: 999,
    time: new Date().toLocaleTimeString(),
  };
  history.push(data);
});
// add police call history
document.getElementById("call-police").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";



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
});
// copy police number alert
document.getElementById("copy-police").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementById("police-number").innerText
  );
});

// fire service
document
  .getElementById("call-fire-service")
  .addEventListener("click", function () {
    const coin = callInt("total-coin");
    const callingRate = coin - 20;

    if (callingRate < 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert(
        "Calling" +
          " " +
          document.getElementById("fire").innerText +
          " " +
          document.getElementById("police-number").innerText +
          "..."
      );
    }
    document.getElementById("total-coin").innerText = callingRate;

    // history
    const data = {
      name: "ফায়ার সার্ভিস",
      number: 999,
      time: new Date().toLocaleTimeString(),
    };
    history.push(data);
  });
// add fire service call history
document
  .getElementById("call-fire-service")
  .addEventListener("click", function () {
    const historyDiv = document.getElementById("history-div");
    historyDiv.innerText = "";

    

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
    
  });
// copy fire service number alert
document.getElementById("fire-btn").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" + " " + document.getElementById("fire-number").innerText
  );
});
// copy ambulance number alert
document.getElementById("ambulance").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementById("ambulanceP-number").innerText
  );
});

// call ambulance
document
  .getElementById("call-ambulance")
  .addEventListener("click", function () {
    const coin = callInt("total-coin");
    const callingRate = coin - 20;

    if (callingRate < 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert(
        "Calling" +
          " " +
          document.getElementById("ambulanceP").innerText +
          " " +
          document.getElementById("ambulanceP-number").innerText +
          "..."
      );
    }
    document.getElementById("total-coin").innerText = callingRate;

    // history
    const data = {
      name: "অ্যাম্বুলেন্স",
      number: "1994-999999",
      time: new Date().toLocaleTimeString(),
    };
    history.push(data);
  });
// ambulance call history
document
  .getElementById("call-ambulance")
  .addEventListener("click", function () {
    const historyDiv = document.getElementById("history-div");
    historyDiv.innerText = "";


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
  });

// copy Helpline number alert
document.getElementById("helpline").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementById("helpline-number").innerText
  );
});

// call helpline
document.getElementById("call-helpline").addEventListener("click", function () {
  const coin = callInt("total-coin");
  const callingRate = coin - 20;

  if (callingRate < 0) {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  } else {
    alert(
      "Calling" +
        " " +
        document.getElementById("help-the-people").innerText +
        " " +
        document.getElementById("helpline-number").innerText +
        "..."
    );
  }
  document.getElementById("total-coin").innerText = callingRate;

  // history
  const data = {
    name: "নারী ও শিশু সহায়তা",
    number: "109",
    time: new Date().toLocaleTimeString(),
  };
  history.push(data);
});

// helpline call history
document.getElementById("call-helpline").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";


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
  
});

// copy Anti-Corruption number alert
document
  .getElementById("Anti-Corruption-btn")
  .addEventListener("click", function () {
    alert(
      "নম্বর কপি হয়েছে:" +
        " " +
        document.getElementById("Anti-Corruption-number").innerText
    );
  });

// call Anti-Corruption
document
  .getElementById("call-Anti-Corruption")
  .addEventListener("click", function () {
    const coin = callInt("total-coin");
    const callingRate = coin - 20;

    if (callingRate < 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert(
        "Calling" +
          " " +
          document.getElementById("anti-corrupt").innerText +
          " " +
          document.getElementById("Anti-Corruption-number").innerText +
          "..."
      );
    }
    document.getElementById("total-coin").innerText = callingRate;

    // history
    const data = {
      name: "দুদক",
      number: "106",
      time: new Date().toLocaleTimeString(),
    };
    history.push(data);
  });

// Anti-Corruption call history
document
  .getElementById("call-Anti-Corruption")
  .addEventListener("click", function () {
    const historyDiv = document.getElementById("history-div");
    historyDiv.innerText = "";

   

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
    
  });

// copy Electricity Outage number alert
document
  .getElementById("Electricity Outage-btn")
  .addEventListener("click", function () {
    alert(
      "নম্বর কপি হয়েছে:" +
        " " +
        document.getElementById("Electricity-Outage-number").innerText
    );
  });

// call Electricity Outage
document
  .getElementById("call-Electricity-Outage")
  .addEventListener("click", function () {
    const coin = callInt("total-coin");
    const callingRate = coin - 20;

    if (callingRate < 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert(
        "Calling" +
          " " +
          document.getElementById("Outage").innerText +
          " " +
          document.getElementById("Electricity-Outage-number").innerText +
          "..."
      );
    }
    document.getElementById("total-coin").innerText = callingRate;

    // history
    const data = {
      name: "বিদ্যুৎ বিভ্রাট",
      number: "16216",
      time: new Date().toLocaleTimeString(),
    };
    history.push(data);
  });

// Electricity Outage call history
document
  .getElementById("call-Electricity-Outage")
  .addEventListener("click", function () {
    const historyDiv = document.getElementById("history-div");
    historyDiv.innerText = "";


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

  });

// copy brac number alert
document.getElementById("brac-btn").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" + " " + document.getElementById("brac-number").innerText
  );
});

// call brac
document.getElementById("call-brac").addEventListener("click", function () {
  const coin = callInt("total-coin");
  const callingRate = coin - 20;

  if (callingRate < 0) {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  } else {
    alert(
      "Calling" +
        " " +
        document.getElementById("brac").innerText +
        " " +
        document.getElementById("brac-number").innerText +
        "..."
    );
  }
  document.getElementById("total-coin").innerText = callingRate;

  // history
  const data = {
    name: "ব্র্যাক",
    number: "16445",
    time: new Date().toLocaleTimeString(),
  };
  history.push(data);
});

// brac call history
document.getElementById("call-brac").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";

  

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
  
});

// copy Bangladesh Railway number alert
document.getElementById("railway-btn").addEventListener("click", function () {
  alert(
    "নম্বর কপি হয়েছে:" +
      " " +
      document.getElementById("railway-number").innerText
  );
});

// call Bangladesh Railway
document.getElementById("call-railway").addEventListener("click", function () {
  const coin = callInt("total-coin");
  const callingRate = coin - 20;

  if (callingRate < 0) {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    return;
  } else {
    alert(
      "Calling" +
        " " +
        document.getElementById("railway").innerText +
        " " +
        document.getElementById("railway-number").innerText +
        "..."
    );
  }
  document.getElementById("total-coin").innerText = callingRate;

  // history
  const data = {
    name: "বাংলাদেশ রেলওয়ে",
    number: "163",
    time: new Date().toLocaleTimeString(),
  };
  history.push(data);
});

// railwayc call history
document.getElementById("call-railway").addEventListener("click", function () {
  const historyDiv = document.getElementById("history-div");
  historyDiv.innerText = "";

 

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
  
});

// clear function
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("history-div").innerText = "";
});
