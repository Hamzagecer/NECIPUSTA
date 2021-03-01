let ciftlik=['inek','koyun','domuz','tavuk'];
const inek=4
const koyun=4
const domuz="siz müslümansınız" 
const tavuk=2

choice="toplam"

if(choice==="toplam"){
console.log(inek+koyun+tavuk);
}else if(choice==="inek"){
    console.log(inek);
}else if(choice==="koyun"){
    console.log(koyun);
}else if(choice==="tavuk"){
    console.log(tavuk);
}else if(choice==="buyuk bas"){
    console.log(koyun+inek);
}else if(choice==="kucuk bas"){
    console.log(tavuk);
}else if(choice==="domuz"){
    console.log(domuz);
}else{
    console.log("gecersiz giris");
}