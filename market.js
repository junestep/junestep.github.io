                const hamburger = document.getElementById("hamburger");
                const overlay = document.getElementById("overlay");
                const sidebar= document.getElementById("sidebar");
                const close = document.getElementById("close");
                
                // open sidebar by clicking hamburger //
                hamburger.addEventListener("click",()=>{
                    sidebar.classList.add("active");
                    overlay.classList.add("active");
                });

                // closing sidebar by clicking close button //
                close.addEventListener("click",()=>{
                    sidebar.classList.remove("active");
                     overlay.classList.remove("active");
                });

                // closing slidebar by clicking ovelay //
                overlay.addEventListener("click",()=>{
                    sidebar.classList.remove("active");
                     overlay.classList.remove("active");
                });