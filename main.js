var name=document.getElementById("name");
var address=document.getElementById("address");
var contact=document.getElementById("contact");
var parent=document.getElementById("parent");
var blood=document.getElementById("blood-grp");
var idno=document.getElementById("idno");

var name1=prompt("Please Enter Student Name:")
var address1=prompt("Please Enter Student Address:")
var contact1=prompt("Please Enter Student Contact No.:")
var parent1=prompt("Please Enter Student Parent Name:")
var blood1=prompt("Please Enter Student Blood Group:")
var idno1=prompt("Please Enter Student ID No.:")

function generateIdcard(){
    document.getElementById("name").innerHTML=name1;
    document.getElementById("address").innerHTML=address1;
    document.getElementById("contact").innerHTML=contact1;
    document.getElementById("parent").innerHTML=parent1;
    document.getElementById("blood-grp").innerHTML=blood1;
    document.getElementById("idno").innerHTML=idno1;
}
