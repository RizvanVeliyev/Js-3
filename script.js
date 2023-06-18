let mark=[
    'Bmw',
    'opel',
    'toyota',
    'Mercedes'
]

let model=[
    ['x5','m5','x6'],
    ['Astra','Vectra'],
    ['Camry','carolla'],
    ['190','s-class']
]

let marka_s=document.getElementById('marka');
let model_s=document.getElementById('model');

function markaSelect(){
    let data=`<option value="" disabled selected>Marka select</option>`;
    for(let i=0;i<mark.length;i++){
        data+=`<option value="${i}"> ${mark[i]}</option>`

    };
    marka_s.innerHTML=data;
}
markaSelect();

function modelSelect(){ 
    let value=marka_s.value
    let data=`<option value="" disabled selected>Model select</option>`;
    for(let i=0;i<model[value].length;i++){
        data+=`<option value="${i}"> ${model[value][i]}</option>`

    };
    model_s.innerHTML=data;

}
