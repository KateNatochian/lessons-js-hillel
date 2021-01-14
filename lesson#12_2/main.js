window.addEventListener('load', function(){
    const square = document.querySelector('.square');
    let newLeft;
    const elem = document.querySelector('.elem');
    elem.hidden = true;

    function eventHandler(event){
        // console.log(event.type, event);
        if(!isBlockInWindow()){   
            return true;
        }
        
        // move right
        if(event.type == 'keydown' && event.keyCode == 39){
            console.log(square.style.left)
            if(square.style.left == ''){
                newLeft = window.innerWidth/2;
            } else{
                newLeft = parseInt(square.style.left)+1;
            }
            square.style.left = `${newLeft+2}px`;
            
        }
        // move left
      if (event.type == 'keydown' && event.keyCode == 37) {
        console.log(square.style.left)
        if (square.style.left == '') {
          newLeft = window.innerWidth / 2;
        } else {
          newLeft = parseInt(square.style.left) - 1;
        }
        square.style.left = `${newLeft - 2}px`;
            
        }  
    }
    document.addEventListener('keydown', eventHandler);

    function isBlockInWindow(){
        
        //right side
        if(square.offsetLeft + square.offsetWidth >= window.innerWidth){
            square.style.left = window.innerWidth - square.offsetWidth - 2 + 'px';
            elem.hidden = false;
            setTimeout(() => elem.hidden = true, 2000);
            return false;
        }
        // left side
        if(square.offsetLeft <= 0){
            square.style.left = 2 + 'px';
            elem.hidden = false;
            setTimeout(() => elem.hidden = true, 2000);
            return false;
        }
        return true;
    }
});
