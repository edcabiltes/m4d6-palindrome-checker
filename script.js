document.getElementById("check-btn").addEventListener("click", function () {
    const input = document.getElementById("text-input").value;
    const resultEl = document.getElementById("result");

    if (input.trim() === "") {
        alert("Please input a value");
        return;
    }

    const original = input;
    const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        resultEl.textContent = `${original} is a palindrome.`;
    } else {
        resultEl.textContent = `${original} is not a palindrome.`;
    }
});