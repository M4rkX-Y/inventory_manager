{

var url="/ind_data"
getdata(url);    

async function getdata(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);
    show(data);
}



function show(data){
    document.getElementById("h1").innerHTML = data[0].Item;
    document.getElementById("name").innerHTML = data[0].Item;
    document.getElementById("supplier").innerHTML = data[0].Supplier;
    document.getElementById("bin").innerHTML = data[0].Bin;
    document.getElementById("location").innerHTML = data[0].Location;
    if (data[0].Type==1){
        document.getElementById("type").innerHTML = "Tool";
    }
    if(data[0].Type==0){
        document.getElementById("type").innerHTML = "Consumable";
    }
    document.getElementById("number").innerHTML = data[0].Number;
    document.getElementById("note").innerHTML = data[0].Note;

}



}

