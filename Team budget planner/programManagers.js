var teamBudgetObj = []
function addBudget() {
    var obj = {}
    var client = document.getElementById("clientName").value;
    var program = document.getElementById("programName").value;
    var budget = document.getElementById("budget").value;
    obj.client = client
                obj.program = program
                obj.budget = budget
                save(obj)
                clearInputs()
}

function clearInputs() {
    document.getElementById("clientName").value = ""
    document.getElementById("programName").value = ""
    document.getElementById("budget").value = ""
}