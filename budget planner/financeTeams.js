function insertNewRecord(data){
    var table = document.getElementById("budgetList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.client;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.program;

    var cell1 = newRow.insertCell(2);
    cell1.innerHTML="$"+data.budget;
}