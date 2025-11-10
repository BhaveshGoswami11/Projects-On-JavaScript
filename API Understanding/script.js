function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText);
            const user = data.results[0];

            document.getElementById("card").innerHTML = `
                <img class="avatar" src="${user.picture.large}" alt="User Picture">
                <h2>${user.name.first} ${user.name.last}</h2>
                <div class="info">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                </div>
            `;
        }
    };

    xhr.send();
}

// Load on start
loadUser();

// Reload button
document.getElementById("reload").addEventListener("click", () => {
    document.getElementById("card").innerHTML = "<p>Loading user...</p>";
    loadUser();
});
