let qrimg = document.getElementById('qrImage');
let imgBox = document.getElementById('imgBox');
let qrText = document.getElementById('qrText');
function genrateQR(){
  if(qrText.value.length > 0 && qrText.value.trim() !== ''){
qrimg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
imgBox.classList.add('show-img');
} else{
qrText.classList.add('error');
setTimeout(()=>{
  qrText.classList.remove('error')
},1000);
} 
}
