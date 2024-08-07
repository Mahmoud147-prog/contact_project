function x(){
    let ele=document.querySelector('nav');
    if(scrollY=="0"){
      
      ele.style.paddingBlock="24px"
      

    }
    else { ele.classList.remove('py-6')
      ele.style.paddingBlock="12px"}
  }