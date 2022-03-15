{

var url="/ind_data"
getdata(url);    

async function getdata(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);
    show(data);
}

document.querySelector(".delete").addEventListener("click", () => {
    window.alert("test")
    if(window.confirm("Are you sure?")){
        document.getElementById("delete_item").submit();
      } else {
        return;
      }
    });



function show(data){
    document.getElementById("h1").innerHTML = data[0].Item;
    document.getElementById("name").innerHTML = data[0].Item;
    document.getElementById("supplier").innerHTML = data[0].Supplier;
    document.getElementById("bin").innerHTML = data[0].Bin;
    document.getElementById("location").innerHTML = data[0].Location;
    document.getElementById("number").innerHTML = data[0].Number;
    document.getElementById("note").innerHTML = data[0].Note;

}



}

