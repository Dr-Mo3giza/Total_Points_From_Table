let userOne = "";
let userTwo = "";
let pointsUserOne = 0;
let pointsUserTwo = 0;
let container = document.querySelector(".container");

// Creating list of tables that is abbreviated to count months
let tables = document.querySelectorAll("table");

// looping through months and extracting data
for (let i = 0; i < tables.length; i++) {
  userOne = tables[i].children[1].firstElementChild.firstElementChild.textContent;
  userTwo = tables[i].children[1].lastElementChild.firstElementChild.textContent;
  pointsUserOne += Number(tables[i].children[1].firstElementChild.lastElementChild.textContent);
  pointsUserTwo += Number(tables[i].children[1].lastElementChild.lastElementChild.textContent);
}

// creating a new table for the total points
let totalPointsTable = document.createElement("table");
totalPointsTable.innerHTML = `<caption>Total Points</caption><tr><td>${
  pointsUserOne > pointsUserTwo ? userOne : userTwo
}</td><td>${pointsUserOne > pointsUserTwo ? pointsUserOne : pointsUserTwo}</td></tr><tr><td>${
  pointsUserOne < pointsUserTwo ? userOne : userTwo
}</td><td>${pointsUserOne < pointsUserTwo ? pointsUserOne : pointsUserTwo}</td></tr>`;

container.appendChild(totalPointsTable);
