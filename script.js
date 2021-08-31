const submitBtn= document.querySelector('.submit_btn');
submitBtn.addEventListener('click',function(){
    const para = document.querySelector('.user_msg');
    const userMsg = document.getElementById('msg').value;
    if(userMsg){
        para.textContent = userMsg;
    }
    setTimeout(()=>{
        document.getElementById('msg').value='';
    },2000)
    
    
})