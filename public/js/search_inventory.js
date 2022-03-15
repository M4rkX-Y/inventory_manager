{
    var sort_option=[0, 0, 0, 0, 0]
    var num=50

    for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
        updateTable(root)
    }


    document.querySelector(".sort_item").addEventListener("click", () => {
        sort_option[0]=sort_option[0]+1     
        for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
            updateTable_item(root, sort_option)
        }
    }
    )
    document.querySelector(".sort_supplier").addEventListener("click", () => {
        sort_option[1]=sort_option[1]+1     
        for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
            updateTable_supplier(root, sort_option)
        }
    }
    )
    document.querySelector(".sort_bin").addEventListener("click", () => {
        sort_option[2]=sort_option[2]+1     
        for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
            updateTable_bin(root, sort_option)
        }
    }
    )
    document.querySelector(".sort_location").addEventListener("click", () => {
        sort_option[3]=sort_option[3]+1     
        for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
            updateTable_location(root, sort_option)
        }
    }
    )
    document.querySelector(".sort_number").addEventListener("click", () => {
        sort_option[4]=sort_option[4]+1     
        for (const root of document.querySelectorAll(".table-search-wrapper[data-url]")){
            updateTable_number(root, sort_option)
        }
    }
    )


    function compareObjects(object1, object2, key) {
        const obj1 = object1[key].toUpperCase()
        const obj2 = object2[key].toUpperCase()
      
        if (obj1 < obj2) {
          return -1
        }
        if (obj1 > obj2) {
          return 1
        }
        return 0
      }

    async function updateTable(root){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }



    async function updateTable_item(root, sort_option){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()
        

        if (sort_option[0]%2==0){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Item')
              })
        }
        if (sort_option[0]%2==1){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Item')
              })
            data.reverse()
        }

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }


    async function updateTable_supplier(root, sort_option){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()
        

        if (sort_option[1]%2==0){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Supplier')
              })
        }
        if (sort_option[1]%2==1){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Supplier')
              })
            data.reverse()
        }

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }



    async function updateTable_bin(root, sort_option){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()
        

        if (sort_option[2]%2==0){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Bin')
              })
        }
        if (sort_option[2]%2==1){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Bin')
              })
            data.reverse()
        }

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }



    async function updateTable_location(root, sort_option){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()
        

        if (sort_option[3]%2==0){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Location')
              })
        }
        if (sort_option[3]%2==1){
            data.sort((a, b) => {
                return compareObjects(a, b, 'Location')
              })
            data.reverse()
        }

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }


    async function updateTable_number(root, sort_option){
        const table = root.querySelector(".table-search")
        const respond = await fetch(root.dataset.url)
        const data = await respond.json()
        

        if (sort_option[4]%2==0){
            data.sort((a, b) => {
                return a.Number-b.Number
              })
        }
        if (sort_option[4]%2==1){
            data.sort((a, b) => {
                return a.Number-b.Number
              })
            data.reverse()
        }

        table.querySelector("tbody").innerHTML="";

        for (var i = 0; i < num; i++){
            table.querySelector("tbody").insertAdjacentHTML("beforeend",`
                <tr>
                    <td>
                        <form method="post" action="/ind_item" class="inline">
                        <input type="hidden" name="Name" value='${data[i].Item}'>
                            <button type="submit" class="link-button">
                            ${data[i].Item}
                            </button>
                        </form>
                        </td>
                    <td>${data[i].Supplier}</td>
                    <td>${data[i].Bin}</td>
                    <td>${data[i].Location}</td>
                    <td>${data[i].Number}</td>
            `);
        }
    }
}