function change_select_order() {
    let block_for_lang = document.querySelector(".for_lang");
    if (localStorage.getItem("lang") == "eng") {
        block_for_lang.insertAdjacentHTML("beforeend", `
        <select name=""  class="lang">
            <option value="eng" class="lag-lang1">English</option>
            <option value="ru" class="lag-lang2">Russian</option>
        </select>`
        );
    } else {
        block_for_lang.insertAdjacentHTML("beforeend", `
     <select name=""  class="lang">
        <option value="ru" class="lag-lang2">Русский</option>
        <option value="eng" class="lag-lang1">Английский</option>
    </select>`
        );
    }
}
change_select_order();


let select = document.querySelector('.lang');
let lang_current = localStorage.getItem("lang");
console.log(lang_current);
for (let k in lang_header) {
    let elem = document.querySelector(".lag-" + k);
    elem.innerHTML = lang_header[k][lang_current];
}



function change_lang_header(){
    select.addEventListener("input",function(){
        let lang = select.value;
        localStorage.setItem('lang', lang);
        let lang_current = localStorage.getItem("lang");
        console.log(lang_current);
        for(let k in lang_header){
            let elem = document.querySelector(".lag-" + k);
            console.log(".lag-" + k);
            elem.innerHTML = lang_header[k][lang_current];
        }
    });
}

change_lang_header();

function change_lang_programs(){
    select.addEventListener("input",function(){
        let lang_current = localStorage.getItem("lang");
        for(let k in lang_programs){
            let elem = document.querySelector(".lag-" + k);
            elem.innerHTML = lang_programs[k][lang_current];
        }
    });
}

function change_lang_home(){
    select.addEventListener("input",function(){
        let lang_current = localStorage.getItem("lang");
        for(let k in lang_home){
            let elem = document.querySelector(".lag-" + k);
            console.log(elem);
            elem.innerHTML = lang_home[k][lang_current];
        }
    });
}



let file_name = location.pathname.split("/");
let last_ind = file_name.length - 1;
file_name = file_name[last_ind];

if(file_name == "index.html"){
    for(let k in lang_programs){
        let elem = document.querySelector(".lag-" + k);
        elem.innerHTML = lang_programs[k][lang_current];
    }
    change_lang_programs();
}

if(file_name == "home.html"){
    let lang_current = localStorage.getItem("lang");
    for(let k in lang_home){
        let elem = document.querySelector(".lag-" + k);
        console.log(elem);
        elem.innerHTML = lang_home[k][lang_current];
    }
    change_lang_home();
}


