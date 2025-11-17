document.getElementById("bookingForm").addEventListener("submit", function(e) {
e.preventDefault();


const name = document.getElementById("name").value;
const date = document.getElementById("date").value;
const slot = document.getElementById("slot").value;
const message = document.getElementById("message");


if (!name || !date || !slot) {
message.textContent = "Please fill all fields";
message.style.color = "red";
return;
}


message.textContent = `Slot booked successfully for ${name} on ${date} at ${slot}`;
message.style.color = "green";


document.getElementById("bookingForm").reset();
});
