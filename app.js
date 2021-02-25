//Grab container and button from HTML
const container = document.querySelector('.container');
const btn = document.querySelector('button');


//If user inputs anything other than a number: 
function invalid(){
    const p = document.createElement('p');
        p.style.color = 'red';
        p.textContent = 'Invalid input. Enter a number between 1 and 64';    
        container.appendChild(p);  
        setTimeout(function(){
           p.remove();
        }, 3000);  
}

//If user inputs new number, clear previous grid
function clear(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

//The default grid that is loaded when the webpage is loaded
function setDefaultGrid(){
    for(let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.style.cssText = "display:flex; justify-contents: flex-end;"
        row.style.height = (container.offsetHeight / 16) + 'px';
        container.appendChild(row);
        for(let j = 0; j < 16; j++){
            const div = document.createElement('div');
            div.classList.add('babyDiv');
            div.style.width = (container.offsetWidth / 16) + 'px';
            function color(){
                div.style.backgroundColor = random();
            }
            div.addEventListener('mouseover', color);
            row.appendChild(div);
        }
    }
}


//generate random color
function random(){
    var color = [1,2,3,4,5,6,'A','B','C','D','E','F'];
    var hex = '#';
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * color.length);
        var hex = hex + color[index];
    }
    return hex;
}

//If the user inputs a <number>, create a <number> * <number> grid
function createGrid(){
    var changeSize = parseInt(prompt("Enter a number to change size"));  
    if(!Number.isNaN(changeSize) && changeSize > 0 && changeSize < 65){
        clear();
            for(let i = 0; i < changeSize; i++){
                const row = document.createElement('div');
                row.style.cssText = "display:flex; justify-contents: flex-end;"
                row.style.height = (container.offsetHeight / changeSize) + 'px';
                container.appendChild(row);
                    for(let j = 0; j < changeSize; j++){
                    const div = document.createElement('div');
                    div.classList.add('babyDiv');
                    div.style.width = (container.offsetWidth / changeSize) + 'px';
                    function color(){
                        div.style.backgroundColor = random();
                    }
                    div.addEventListener('mouseover', color);
                    row.appendChild(div);
            }
        }
    } else {
        invalid();  
    }
};


//createGrid to load user defined grid and setDefaultGrid to load default grid
btn.addEventListener('click', createGrid);
window.addEventListener('load', setDefaultGrid)