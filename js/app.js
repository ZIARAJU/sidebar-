 let sideBarOpenBtn= document.querySelector(`.btn`)
   let sideBar= document.querySelector(`.sidebar`)

function sideBarOpen(){
   sideBar.classList.toggle(`active`);

   if(sideBar.classList.contains(`active`)== true){
    console.log( `sideBar is open`);
  sideBarOpenBtn.innerHTML= `<i class="bi bi-x-circle"></i>`;  
}
    else{
        console.log(`side bar is closed`);
        sideBarOpenBtn.innerHTML= `<i class="bi bi-list"></i>`;
    }
  
   }


 sideBarOpenBtn.addEventListener(`click`, sideBarOpen)