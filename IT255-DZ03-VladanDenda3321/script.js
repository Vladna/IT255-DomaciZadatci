var rezultat=0;
document.querySelector(".rez").addEventListener('click',function(){
    rezultat=0;
  if(document.querySelector("input[value='1977']").checked==true){
      rezultat++;
  }
  if(document.querySelector("input[value='han']").checked==true){
    rezultat++;
}
if(document.querySelector("input[value='anakin']").checked==true){
    rezultat++;
}
if(document.querySelector("input[value='Star Wars']").value=="Star Wars"){
    rezultat++;
}
document.querySelector('#resenje').textContent='Broj tacno odgovorenih pitanja: '+rezultat;
})