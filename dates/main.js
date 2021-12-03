(() => {
	let calendar = document.getElementById("calendar");
	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let daysInMonth = 32 - new Date(currentDate.getFullYear(),currentDate.getMonth(),32).getDate();
	let startDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),1).getDay();
	let startOffset = (startDate -1) % 6;
	let day = 0;
	while (day<daysInMonth) {
		let row = document.createElement("tr");
		for (let weekday = 0; weekday < 7; weekday++) {
			cell = document.createElement("td");
            cellText = document.createTextNode("");
			if (day>=startOffset && day<daysInMonth+startOffset) {				
				cell.appendChild(document.createTextNode(day-startOffset+1));
			}
			row.appendChild(cell);
			day += 1
		}
		calendar.appendChild(row)
	}
})();
