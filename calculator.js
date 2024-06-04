const dis_input = document.getElementById("display")
let str = ''

function calcu(s){
    str+=s
    dis_input.innerText = str
}

const clear_btn = document.getElementById("clear")
clear_btn.addEventListener("click",function() {
    str = ''
    dis_input.innerText = ''
})

const o_list = document.getElementById("list")
function calculate(){
    let history = str
    if(str.includes('+')){
        let a = str.split('+')
        a[0] = parseInt(a[0])
        a[1] = parseInt(a[1])
        let total = a[0]+a[1]
        str = ''+total
        history+='='+total
        dis_input.innerText = ''+total
    }
    if(str.includes('-')){
        let a = str.split('-')
        a[0] = parseInt(a[0])
        a[1] = parseInt(a[1])
        let total = a[0]-a[1]
        str = ''+total
        history+='='+total
        dis_input.innerText = ''+total
    }
    if(str.includes('/')){
        let a = str.split('/')
        a[0] = parseInt(a[0])
        a[1] = parseInt(a[1])
        let total = a[0]/a[1]
        str = ''+total
        history+='='+total
        dis_input.innerText = ''+total
    }
    if(str.includes('*')){
        let a = str.split('*')
        a[0] = parseInt(a[0])
        a[1] = parseInt(a[1])
        let total = a[0]*a[1]
        str = ''+total
        history+='='+total
        dis_input.innerText = ''+total
    }
    o_list.innerHTML+="<li>"+history+"</li>"
    history=''
}


