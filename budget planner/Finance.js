function displayInformation(clientInformation)
{

    console.log("display");
    console.log(clientInformation);

    var table = document.getElementById("clientTable");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = clientInformation.name;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = clientInformation.projectName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = clientInformation.budget;


}

function retrieveInformation()
{
    var sum = 0;
    var data = sessionStorage.getItem("clientInformation");
    var objList = JSON.parse(data);
    
    console.log("objects: ");
    console.log(objList);

    var ind = objList.length;
    console.log("index: "+ ind);

    for(let i=0; i<ind; i++)
    {
        displayInformation(objList[i]);
        sum = sum + eval(objList[i].budget);
    }
  
    document.getElementById("total").innerHTML = "The total budget: " + sum;
}