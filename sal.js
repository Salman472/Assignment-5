// document.getElementById("call-btn").addEventListener("click", function () {
//   const coin = callInt("total-coin");
//   const callingRate = coin - 20;

//   if (callingRate < 0) {
//     alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
//     return;
//   } else {
//     alert(
//       "Calling" +
//         " " +
//         document.getElementById("National").innerText +
//         " " +
//         document.getElementById("National-number").innerText +
//         "..."
//     );
//   }
//   document.getElementById("total-coin").innerText = callingRate;

//   // history
//   const data = {
//     name: "জাতীয় জরুরি সেবা",
//     number: 999,
//     time: new Date().toLocaleTimeString(),
//   };
//   history.push(data);
// });
// document.getElementById("call-btn").addEventListener("click", function () {
//   const coin = callInt("total-coin");
//   const callingRate = coin - 20;

//   if (callingRate < 0) {
//     alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
//     return;
//   } else {
//     alert(
//       "Calling" +
//         " " +
//         document.getElementById("National").innerText +
//         " " +
//         document.getElementById("National-number").innerText +
//         "..."
//     );
//   }
//   document.getElementById("total-coin").innerText = callingRate;

//   // history
//   const data = {
//     name: "জাতীয় জরুরি সেবা",
//     number: 999,
//     time: new Date().toLocaleTimeString(),
//   };
//   history.push(data);
// });



// document.getElementById("copy").addEventListener("click", function () {
//   const copyCount = callInt("copy-count");
//   const addCopy = copyCount + 1;

//   document.getElementById("copy-count").innerText = addCopy;
//   alert(
//     "নম্বর কপি হয়েছে:" +
//       " " +
//       document.getElementsByClassName("copy-number")[0].innerText
//   );
// });