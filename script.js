function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("screen").value;
    document.getElementById("screen").value = currentValue.slice(0, -1);
}

function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("screen").value);
        if (Number.isFinite(result)) {
            document.getElementById("screen").value = result;
        } else {
            document.getElementById("screen").value = "Erro";
        }
    } catch (e) {
        document.getElementById("screen").value = "Erro";
    }
}
