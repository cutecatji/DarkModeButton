let mode="Dark";
      let btn=document.querySelector("#color");
      btn.onclick=()=>{
        if(mode==="Dark")
        {
          let theme=document.querySelector("body");
          theme.style.backgroundColor="black";
          mode="Light";
          let btnname=document.querySelector("#color");
          btnname.innerText="Light Mode";
        }
      
      else
      {
        let theme=document.querySelector("body");
        theme.style.backgroundColor="white";
        mode="Dark";
        let btnname=document.querySelector("#color");
          btnname.innerText="Dark Mode";
      }
      }