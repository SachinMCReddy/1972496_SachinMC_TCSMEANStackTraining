var Infolist = []; 
function getInformation()
{
    var clientInformation = {}; 
    clientInformation.name = document.getElementById("clientName").value;
    clientInformation.projectName = document.getElementById("projectName").value;
    clientInformation.budget = document.getElementById("Budget").value;
    console.log(clientInformation);
    return clientInformation;
}
function add()
{
    var clientInfo = getInformation(); 
    Infolist.push(clientInfo); 
    clearInput(); 
}

function saveInformation()
{
    var clientString = JSON.stringify(Infolist);
    sessionStorage.setItem("clientInformation", clientString);

}

function clearInput()
{
    document.getElementById("clientName").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("Budget").value = "";

}
