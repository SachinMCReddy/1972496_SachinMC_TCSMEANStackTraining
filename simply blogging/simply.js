var blogBox = [];

function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("blogBox"));
    console.log(obj);
}

function onFormSubmit() {
    alert("hello")
    readData();
    insertNewRecord(readData);
    displayBlogBox();
}

function readData() {
    var obj={};
    obj.title =document.getElementById("title").value;
    obj.arti = document.getElementById("arti").value;
    obj.image = document.getElementById("image").value;

    console.log(obj);
    return readData;
}

function insertNewRecord(){
    sessionStorage.setItem('blogBox',JSON.stringify(blogBox));
    var entry = readData();
    blogBox.push(entry);
    
}

function displayBlogBox(){
    retrieveFromSession();
    var layer = document.getElementById('1');
			for (let i = 0; i < blogBox.length; i++) 
			{
                document.getElementById('1').title;
                document.getElementById('1').arti;
                document.getElementById('1').image;
					
	        }
}


