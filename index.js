const freelancer = [
  { name: "Dasher", price: 90, occupation: "athlete" },
  { name: "Dancer", price: 25, occupation: "actor" },
  { name: "Prancer", price: 33, occupation: "philosopher" },
  { name: "Vixen", price: 72, occupation: "dancer" },
  { name: "Comet", price: 61, occupation: "scientist" },
  { name: "Cupid", price: 49, occupation: "match maker" },
  { name: "Donner", price: 23, occupation: "reindeer" },
  { name: "Blitzen", price: 53, occupation: "entrepreneur" },
];

const names = ["Edward", "Jacob", "Bella", "Jasper", "Alice"];
const occupations = ["artist", "programmer", "designer", "teacher"];
const minPrice = 100;
const maxPrice = 20;

function render() {
  const tableBody = document.querySelector("#freelancerTable");
  tableBody.innerHTML = "";
  freelancer.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>${freelancer.price}</td>`;
    freelancerTable.appendChild(row);
  });

  const avgPrice = calcAvg();
  document.getElementById("avgPrice").textContent = avgPrice;

  function calcAvg() {
    let total = freelancer.reduce((sum, freelancers) => {
      console.log("SUM:\n", sum, "PRICE:\n", freelancers.price);
      return sum + freelancers.price;
    }, 0);
    console.log(total);
    console.log(freelancer.length);
    return Math.round(total / freelancer.length);
  }
}

function addFreelancer() {
  const nameFL = names[Math.floor(Math.random() * names.length)];
  const occupationFL =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice;
  const newFreelancer = {
    name: nameFL,
    occupation: occupationFL,
    price: price,
  };

  freelancer.push(newFreelancer);

  render();
}

setInterval(addFreelancer, 2000);

render();
