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
        document.getElementById("e_name").value = data[0].Item;
        document.getElementById("e_supplier").value = data[0].Supplier;
        document.getElementById("e_bin").value = data[0].Bin;
        document.getElementById("e_location").value = data[0].Location;
        document.getElementById("e_number").value = data[0].Number;
        document.getElementById("e_note").value = data[0].Note;
    }
    
}