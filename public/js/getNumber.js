{
    var tool_url="/tool"
    var consumable_url="/consumable"
    var tool_number=0
    var consumable_number=0

    T_getdata(tool_url);  
    C_getdata(consumable_url); 

    async function T_getdata(url) {
    
        const response = await fetch(url);
        
        var data = await response.json();
        document.getElementById("t_number").innerHTML = data.length+" Items";
}




async function C_getdata(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    document.getElementById("c_number").innerHTML = data.length+" Items";
}

}