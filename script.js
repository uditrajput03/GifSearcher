let input=document.querySelector('.input');
let searchBtn=document.querySelector('.btn');
let result = document.querySelector('.result');
let select = document.querySelector('.select');
const api_key = `nfg5GZLI9Ccsmdjh6paFc8afXPr3boXP`;
searchBtn.addEventListener("click",search);

input.addEventListener("keyup",(e) => {
    if (e.key == "Enter") {
        search();
    }
})
function search(){
    result.innerHTML="";
    let url;
    if (input.value == "") {
        url = `https://api.giphy.com/v1/${select.value}/trending?api_key=${api_key}`;
    }
    else{
        url=`https://api.giphy.com/v1/${select.value}/search?api_key=${api_key}&q=${input.value}`;
    }
    let req = new XMLHttpRequest();
    req.addEventListener("load",()=>{
        let res =JSON.parse(req.responseText);
for(let i=0 ; i < res.data.length ; i++){
        let imgHTML = `<img src="${res.data[i].images.fixed_height.url}" alt="loading gif"></img>`;
        result.innerHTML += imgHTML;
}
        console.log("Loading......");
    });
    req.open('GET',url);
    req.send();
};
