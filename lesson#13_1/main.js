window.addEventListener('load', function(){
    const platformer = document.querySelector('.platformer');

    let newLeft;
    let newTop;
    let step = 10;
    let h = 100;
    

    function eventHandler(event){
        
        if(!isBlockInWindow()){   
            return true;
        }

        if(event.keyCode == 37){ // left
            if(platformer.style.left == ''){
                newLeft = 10;
            } else{
                newLeft = parseInt(platformer.style.left)+1;
            }
            platformer.style.left = `${newLeft-step}px`;
        }
        if(event.keyCode == 39){ // right
            if(platformer.style.left == ''){
                newLeft = 10;
            } else{
                newLeft = parseInt(platformer.style.left)+1;
            }
            platformer.style.left = `${newLeft+step}px`;
        }
        if(event.keyCode == 38){ // up
            if(platformer.style.top == ''){
                newTop = 150;
            } else{
                newTop = parseInt(platformer.style.top)-1;
            }
            platformer.style.top = `${newTop-step}px`;
        }
        if(event.keyCode == 40){ // down
            if(platformer.style.top == ''){
                newTop = 150;
            } else{
                newTop = parseInt(platformer.style.top)+1;
            }
            platformer.style.top = `${newTop+step}px`;
        }

        if(event.keyCode == 32){ // jump
            if(platformer.style.top == ''){
                newTop = 150;
            }else{
                newTop = parseInt(platformer.style.top)+1;
            }
            platformer.style.top = `${newTop-h}px`;
            setTimeout(() => {platformer.style.top = `${newTop}px`}, 200);
            
        }
        if(event.keyCode == 17){ // sit
            
            let stylesSit = ['platformerSit', 'platformer']
            if(platformer.className != stylesSit[1]){
                platformer.className = stylesSit[1];
            }else{
                platformer.className = stylesSit[0];
            }            
        }
    }

    document.addEventListener('keydown', eventHandler);

    function isBlockInWindow(){
        
        //right side
        if(platformer.offsetLeft + platformer.offsetWidth >= window.innerWidth){
            platformer.style.left = window.innerWidth - platformer.offsetWidth - 2 + 'px';
            return false;
        }
        // left side
        if(platformer.offsetLeft <= 0){
            platformer.style.left = 2 + 'px';
            return false;
        }
        // top side
        if(platformer.offsetTop <= 0){
            platformer.style.top = 2 + 'px';
            return false;
        }
        // bottom side
        if(platformer.offsetTop + platformer.offsetHeight >= window.innerHeight){
            platformer.style.top = window.innerHeight - platformer.offsetHeight - 2 + 'px';
            return false;
        }
        return true;
    }

    
});