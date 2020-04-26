window.addEventListener("load",()=>{
let bill=document.getElementById("bill").value;
let noOfPeople=document.getElementById("noOfPeople").value;
let tip=document.getElementById("tip").value;
let a=document.getElementById("amount");
calculate(bill,noOfPeople,tip);
});
calculate=(bill,noOfPeople,tip)=>{
const amount=(bill+tip)/noOfPeople;
return a.innerHtml+=amount;;
}

