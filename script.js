document.addEventListener("DOMContentLoaded", function () {
    const fishData = JSON.parse(localStorage.getItem("fishData")) || [];

    const speciesList = document.getElementById("speciesList");

    function loadFishData() {
        speciesList.innerHTML = "";
        fishData.forEach((fish, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${fish.name}:</strong> ${fish.details}`;
            speciesList.appendChild(listItem);
        });
    }

    loadFishData();
});

function searchSpecies() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll("#speciesList li");

    items.forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(input) ? "block" : "none";
    });
}

function showAdminPanel() {
    let password = prompt("Enter admin password:");
    if (password === "admin123") {
        document.getElementById("adminPanel").classList.remove("hidden");
    } else {
        alert("Incorrect password!");
    }
}

function addSpecies() {
    let name = document.getElementById("fishName").value;
    let details = document.getElementById("fishDetails").value;

    if (name && details) {
        let fishData = JSON.parse(localStorage.getItem("fishData")) || [];
        fishData.push({ name, details });
        localStorage.setItem("fishData", JSON.stringify(fishData));
        alert("Species added!");
        location.reload();
    } else {
        alert("Please fill in all fields.");
    }
}

function logout() {
    document.getElementById("adminPanel").classList.add("hidden");
}
