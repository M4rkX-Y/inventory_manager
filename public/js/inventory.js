{
    async function updateTable(root){
        const table = root.querySelector(".table-inventory")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()


        for (var i = 0; i < data.length; i++){
            console.log(data[i].Item)
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td><a href="item.html">${data[i].Item}</td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }

    for (const root of document.querySelectorAll(".table-wrapper[data-url]")){
        updateTable(root)
    }
}