async function login(event) {
    event.preventDefault();

    const username = document.querySelector("input[name='BND123']").value;
    const password = document.querySelector("input[name='BND123']").value;

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = "purchaseorder.html";
        } else {
            document.getElementById("errorMessage").classList.add("show");
            setTimeout(() => {
                document.getElementById("errorMessage").classList.remove("show");
            }, 3000);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
