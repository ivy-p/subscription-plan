var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
//^^subscription cost appears here
var subType = "basic";
//^^this is the default value in the subscription dropdown.
var subDuration = 1;
//^^default value for duration dropdown.

//SUBSCRIPTION TYPE DROPDOWN
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

//SUBSCRIPTION DURATION DROPDOWN
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
})

//CALCULATES SUBSCRIPTION COST BASED ON TYPE
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  //^default monthly cost for a basic subscription
  if (subType === "standard") {
    monthlyCost = 7;
  }
  else if (subType === "premium") {
    monthlyCost = 10;
  }

  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month
  ${subType} plan for $${total}.`
};





