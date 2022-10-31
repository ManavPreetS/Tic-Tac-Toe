let counter =0;
let check=0;
let id="";
let keeper=0;
let button = document.getElementsByClassName('digit');
let clear = document.getElementById('clear');

button[0].addEventListener('click',displayDigit);
button[1].addEventListener('click',displayDigit);
button[2].addEventListener('click',displayDigit);
button[3].addEventListener('click',displayDigit);
button[4].addEventListener('click',displayDigit);
button[5].addEventListener('click',displayDigit);
button[6].addEventListener('click',displayDigit);
button[7].addEventListener('click',displayDigit);
button[8].addEventListener('click',displayDigit);
clear.addEventListener('click',displayDigit);



function displayDigit(e)
{ 
    if(e.target.innerHTML=="New Game"){
        for (let key in button) {
            button[key].innerHTML = "";
            }
    }
    let aa = ""+ this.id;
    let checker = ""+e.target.innerHTML
    if(counter==0 && checker==""){
    aa = aa.slice(3,4)
    aa = parseInt(aa)
    button[aa-1].innerHTML="X"
    counter++;
    }
    else if(counter==1 &&checker==""){
        aa = aa.slice(3,4)
    aa = parseInt(aa)
    button[aa-1].innerHTML="O"
    counter=0;
    }
    id = this.id;
    checkWinner(e);

}

function checkWinner(e){
    let aa=""+e.target.innerHTML;
    id = (id.slice(3,4));
    let num = parseInt(id);
    let winner=0;

if((num-1)==3 ||(num-1)==0||(num-1)==6){
    let previous = ""+button[num].innerHTML;
    let next = ""+button[num+1].innerHTML;
    if(previous==aa){
        winner++
    
    }
    if(next==aa){winner++}
}
if(winner==1){
    winner=0;
}
if((num-1)==2 ||(num-1)==5||(num-1)==8){
    let previous = ""+button[num-2].innerHTML;
    let next = ""+button[num-3].innerHTML;
        if(previous==aa){
        winner++
    
    }
    if(next==aa){winner++}

}
if(winner==1){
    winner=0;
}
if((num-1)==1||(num-1)==4||(num-1)==7){
    let previous = ""+button[num-2].innerHTML;
    let next = ""+button[num].innerHTML;
    let symbol = ""+e.target.innerHTML;
        if(previous==aa){
            winner++
        }
        if(next==aa){
            winner++;
        }
        
    }
    if(winner==1){
        winner=0;
    }
    if((num-1)==3||(num-1)==4||(num-1)==5){
        let above = ""+button[num-4].innerHTML;
        let below=""+button[num+2].innerHTML;
        if(above==aa){
            winner++
        }
        if(below==aa){
            winner++;
        }

    }
    if(winner==1){
        winner=0;
    }
    if((num-1)==0||(num-1)==1||(num-1)==2){
        let below1 = ""+button[num+2].innerHTML;
        let below2=""+button[num+5].innerHTML;
        if(below1==aa){
            winner++
        }
        if(below2==aa){
            winner++;
        }
    }
    if(winner==1){
        winner=0;
    }
    if((num-1)==6||(num-1)==7||(num-1)==8){
        let above1 = ""+button[num-4].innerHTML;
        let above2=""+button[num-7].innerHTML;
        if(above1==aa){
            winner++
        }
        if(above2==aa){
            winner++;
        }
    }
    if(winner==1){
        winner=0;
    }
    if((num-1)==0||(num-1)==2||(num-1)==6||(num-1)==8){
        if((num-1)==0){
            let above1 = ""+button[num+3].innerHTML;
            let above2=""+button[num+7].innerHTML;
        
            if(above1==aa){
                winner++
            }
            if(above2==aa){
                winner++;
            }
        }
        if((num-1)==2){
            let above1 = ""+button[num+1].innerHTML;
            let above2=""+button[num+3].innerHTML;
        
            if(above1==aa){
                winner++
            }
            if(above2==aa){
                winner++;
            }
        }
        if((num-1)==6){
            let above1 = ""+button[num-5].innerHTML;
            let above2=""+button[num-3].innerHTML;
            if(above1==aa){
                winner++
            }
            if(above2==aa){
                winner++;
            }
        }
        if((num-1)==8){
            let above1 = ""+button[num-3].innerHTML;
            let above2=""+button[num-7].innerHTML;
            if(above1==aa){
                winner++
            }
            if(above2==aa){
                winner++;
            }
        }
    }

    if(winner==1){
        winner=0;
    }
    if((num-1)==4){
        let above1 = ""+button[0].innerHTML;
        let above2=""+button[8].innerHTML;
        if(above1==aa){
            winner++
        }
        if(above2==aa){
            winner++;
        }
    }
    if(winner==1){
        winner=0;
    }
    id="";
    if(winner>=2){
alert("We have a Winner: "+ aa);
    }
}

