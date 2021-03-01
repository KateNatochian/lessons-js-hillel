window.addEventListener('load', () => {

    const products = [
        {
            id: "id-1",
            name: 'Title 1',
            cost: '100',
            image: 'https://stjohnsbuilderscouncil.com/wp-content/uploads/2014/10/Red-high-heel-women-shoes-on-white-background-600x600.jpg'
        },
        {
            id: "id-2",
            name: 'Title 2',
            cost: '300',
            image: 'https://stjohnsbuilderscouncil.com/wp-content/uploads/2014/10/Red-high-heel-women-shoes-on-white-background-600x600.jpg'
        }
    ];

    const productContainer = document.querySelector('.products');
    productContainer.innerHTML = `${products.map(item => `
        <div class="product solid">
            <div class="product__name">${item.name}</div>
            <img class="product__image" src="${item.image}">
            <div class="product__cost">
                <button class="product_add" data-product-id="${item.id}">ADD</button> 
                <span>${item.cost}</span>
                <button class="product_remove" data-product-id="${item.id}">Remove</button> 
            </div>
        </div>
    `).join('')}`


    const buttons = productContainer.querySelectorAll('button.product_add');
    console.log(buttons);

    const costTotals = document.querySelectorAll('#total');
    const GrandTtl = document.querySelector('#grand_total');
    const quantitys = document.querySelectorAll('#qty');

    let totalCostStarts = [0, 0];
    let quantitiesStart = [0, 0];
    let GrandTotal = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonClick);
    })

    function onButtonClick(event) {
        
        const productId = event.target.dataset.productId;
        const currentProd = products.find(prod => prod.id == productId);

        console.log(currentProd);
        GrandTotal += Number(currentProd.cost);

        for (let i = 0; i < products.length; i++) {
            if (productId == products[i].id) {
                totalCostStarts[i] += Number(currentProd.cost);
                quantitiesStart[i]++;
                costTotals[i].innerHTML = totalCostStarts[i];
                quantitys[i].innerHTML = quantitiesStart[i];
                GrandTtl.innerHTML = GrandTotal;
            }
        }
    }

    const btnRemoves = productContainer.querySelectorAll('button.product_remove');

    btnRemoves.forEach(btnR => {
        btnR.addEventListener('click', removeClick);
    })

    function removeClick(event){
        const productId = event.target.dataset.productId;
        const currentProd = products.find(prod => prod.id == productId);

        console.log(currentProd);
        GrandTotal -= Number(currentProd.cost);

        for (let i = 0; i < products.length; i++) {
            if (productId == products[i].id) {
                totalCostStarts[i] -= Number(currentProd.cost);
                quantitiesStart[i]--;
                costTotals[i].innerHTML = totalCostStarts[i];
                quantitys[i].innerHTML = quantitiesStart[i];
                GrandTtl.innerHTML -= GrandTotal; 
            }
            if(totalCostStarts[i]<=0){
                costTotals[i].innerHTML = 0;
                quantitys[i].innerHTML = 0;
                GrandTtl.innerHTML = GrandTotal-totalCostStarts[i];
            }
        }

    }
    
    const clear = document.createElement('div');
    document.body.appendChild(clear);
    
    const clearButton = document.createElement('button');
    clearButton.innerText = 'CLEAR ALL';
    clear.appendChild(clearButton);

    clearButton.addEventListener('click', clearALL);

    function clearALL(){
        GrandTotal = 0;

        for (let i = 0; i < products.length; i++) {
            totalCostStarts[i] = 0;
            quantitiesStart[i] = 0;
            costTotals[i].innerHTML = totalCostStarts[i];
            quantitys[i].innerHTML = quantitiesStart[i];
            GrandTtl.innerHTML = GrandTotal; 
        }
    }

    let currencyCont = document.querySelector('#currencyCont');
    console.dir(currencyCont);

    let currencies = document.querySelectorAll('.currency');
    console.dir(currencies);

    currencyCont.addEventListener('change', changeCurrency);
    
    function changeCurrency(){

        let selectedCurr = currencyCont.options[currencyCont.selectedIndex];
        // console.log(selectedCurr.innerHTML);

        if(selectedCurr.dataset.currId == 'USD'){
            let grttlUSD = Number(GrandTotal) / 28;
            console.log(grttlUSD);
            GrandTtl.innerHTML = Math.ceil(grttlUSD*100)/100;
        } else if(selectedCurr.dataset.currId == 'EUR'){
            let grttlEUR = Number(GrandTotal) / 30;
            console.log(grttlEUR);
            GrandTtl.innerHTML = Math.ceil(grttlEUR*100)/100;
        } else {
            GrandTtl.innerHTML = GrandTotal;
        }        
    }

})