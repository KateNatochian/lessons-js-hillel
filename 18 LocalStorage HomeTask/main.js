
const COLOR_DEFAULT = '#ffffff';
class Block{
    constructor(id, startNumber, step, color = COLOR_DEFAULT){
        this.id = id;
        this.startNumber = startNumber;
        this.step = step;
        this.backgroundColor = color;
    }

    blockTemplate(){
        return `
        <div class="block">
            <div class="counter">
                Counter: <span class="clicks_counter" data-block-id="${this.id}">${this.startNumber}</span>
            </div>
            <button class="click_me" data-block-id="${this.id}">${this.id} CLICK</button>        
        </div>
        `;
    }
    getStartNumber(){
        return this.startNumber;
    }
    setStartNumber(number){
        this.startNumber = number;
    }
    getDefaultColor(){
        return this.backgroundColor;
    }
    
}

window.addEventListener('load', () =>{

    const blocksContainer = document.querySelector('.blocksContainer');

    //const blocks = [new Block('Block1', 0 , 1), new Block('Block2', 0 , 1)];

    const blocks = [new Block(prompt('ID блока 1',),prompt('Стартовое значение блока 1',) , 1), new Block(prompt('ID блока 2',),prompt('Стартовое значение блока 2',), 1)];

    blocksContainer.innerHTML = `${blocks.map(blck => blck.blockTemplate()).join('')}`;

    const clickButtons = document.querySelectorAll('.click_me');
    const counters = document.querySelectorAll('.clicks_counter');

    const clearButton = document.querySelector('.clear_all');

    let clicksDictionary = {};

    console.log(clicksDictionary);

    if(localStorage.buttonClickTracker){
        clicksDictionary = JSON.parse(localStorage.buttonClickTracker)
    } 

    renderClicksCounter()

    clickButtons.forEach(btn =>{
        btn.addEventListener('click', (event) => {
            // const buttonStorVal = localStorage.click_key;

            // if(clicksDictionary[event.target.dataset.blockId]){
            //     clicksDictionary[event.target.dataset.blockId] =clicksDictionary[event.target.dataset.blockId] + 1;
            // } else {
            //     clicksDictionary[event.target.dataset.blockId] = 1;
            // }

            const currentBlockId = event.target.dataset.blockId;
            clicksDictionary[currentBlockId] = clicksDictionary[currentBlockId] === undefined || 0 ? 1 : clicksDictionary[currentBlockId] + 1;
            
            console.log(clicksDictionary);

            localStorage.buttonClickTracker = JSON.stringify(clicksDictionary);

            // localStorage.click_key = buttonStorVal === undefined ? 1 : Number(buttonStorVal)+1;
            
            event.target.style.backgroundColor = getRandomColor();
            event.target.parentNode.style.backgroundColor = getRandomColor();

            if (clicksDictionary[event.target.dataset.blockId]>= 50){
                event.target.parentNode.style.backgroundColor = COLOR_DEFAULT;
            }
            
            renderClicksCounter();
            
        })
    })
    
    function renderClicksCounter(){
        counters.forEach(span => {  
            let spanInner = Number(span.innerText);
            let content = spanInner;
            //let content = 0;
            if (clicksDictionary[span.dataset.blockId]){
               content = clicksDictionary[span.dataset.blockId];
            } 
           span.innerHTML = content;
        })
    }
    
    clearButton.addEventListener('click', () => {
        localStorage.clear();
        counters.forEach(span => {span.innerHTML = 0;});    
    })  
})

function getRandomColor() {
    const colors = [
        getRand(),
        getRand(),
        getRand()
    ]
    return `rgb(${colors})`;
}

function getRand() {
    return Math.floor(Math.random()*256);
}