let mark=[
    'Bmw',
    'opel',
    'toyota',
    'Mercedes'
]

let model=[
    ['x5','m5','x6'],
    ['Astra','Vectra','corsa'],
    ['Camry','Prius','carolla'],
    ['190','s-class','amg']
]

let marka_s=document.getElementById('marka');
let model_s=document.getElementById('model');
let image=document.getElementById("image")


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

function display() {
    let mark_name = marka_s.options[marka_s.selectedIndex].text;
    let model_name = model_s.options[model_s.selectedIndex].text;
    let data = `<img style="background-size:cover;"  src="/JS-3/cars_images/${mark_name}/${model_name}.jpg" alt="${mark_name}_${model_name}">`;
    image.innerHTML = data;
  }
