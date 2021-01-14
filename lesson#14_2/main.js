window.addEventListener('load', function(){

    const inputRange = document.querySelector('.inputRange'); 
    const inputNumber = document.querySelector('.inputNumber') 
    const block = document.querySelector('.block'); 
    const comission = document.querySelector('.comission')

    function eventHandler(event) {
        console.log(event.type, event);
        inputRange.addEventListener('input', function (event) {
            inputNumber.value = event.target.value;
            
        });
        inputNumber.addEventListener('input', function (event) {
            inputRange.value = event.target.value;
        });

        block.style.height = inputRange.value+'px';
        if (inputRange.value >= 75){
            comission.style.height = inputRange.value*0.08 + 'px';
        }else if(inputRange.value >= 50){
            comission.style.height = inputRange.value*0.06 + 'px';
        }else if(inputRange.value >= 20){
            comission.style.height = inputRange.value*0.04 + 'px';    
        }else{
            comission.style.height = inputRange.value*0.02 + 'px';
        }

        


    }

    document.addEventListener('mousedown', eventHandler);
    document.addEventListener('mousemove', eventHandler);
    document.removeEventListener('mouseup', eventHandler);
});
