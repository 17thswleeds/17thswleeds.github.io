(() => {
	let calendar = document.getElementById("calendar");
	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let daysInMonth = 32 - new Date(currentDate.getFullYear(),currentDate.getMonth(),32).getDate();
	let ohMan = new Date(currentDate.getFullYear(),currentDate.getMonth(),1).getDay();
	let startCount = (ohMan -1) % 6;
	let i = 0;
	while (i<daysInMonth) {
		let row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			cell = document.createElement("td");
            cellText = document.createTextNode("");
			if (i>=startCount && i<daysInMonth+startCount) {				
				cell.appendChild(document.createTextNode(i-startCount+1));
			}
			row.appendChild(cell);
			i += 1
		}
		calendar.appendChild(row)
	}
})();
