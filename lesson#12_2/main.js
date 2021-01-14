window.addEventListener('load', function(){
    const square = document.querySelector('.square');

    let newLeft;
    let newTop;

    const elem = document.querySelector('.elem');
    elem.hidden = true;
    
    function eventHandler(event){
        console.log(event.type, event);
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
            square.style.left = ${newLeft+2}px;
        }
        // move left
        if(event.type == 'keydown' && event.keyCode == 37){
            console.log(square.style.left)
            if(square.style.left == ''){
                newLeft =  window.innerWidth/2;
            } else{
                newLeft = parseInt(square.style.left)-1;
            }
            square.style.left = ${newLeft-2}px;
        }  
        // move top
        if(event.type == 'keydown' && event.keyCode == 38){
            console.log(square.style.top)
            if(square.style.top == ''){
                newTop =  window.innerHeight/2;
            } else{
                newTop = parseInt(square.style.top)-1;
            }
            square.style.top = ${newTop-2}px;
        }  
        //move bottom
        if(event.type == 'keydown' && event.keyCode == 40){
            console.log(square.style.top)
            if(square.style.top == ''){
                newTop =  window.innerHeight/2;
            } else{
                newTop = parseInt(square.style.top)+1;
            }
            square.style.top = ${newTop+2}px;
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
        // top side
        if(square.offsetTop <= 0){
            square.style.top = 2 + 'px';
            elem.hidden = false;
            setTimeout(() => elem.hidden = true, 2000);
            return false;
        }
        
        // bottom side
        if(square.offsetTop + square.offsetHeight >= window.innerHeight){
            square.style.top = window.innerHeight - square.offsetHeight - 2 + 'px';
            elem.hidden = false;
            setTimeout(() => elem.hidden = true, 2000);
            return false;
        }

        return true;
    }
});
