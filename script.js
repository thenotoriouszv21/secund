const hours = document.querySelector('.hour'),
      minute = document.querySelector('.minute'),
      secunds = document.querySelector('.secund'),
      button = document.querySelector('.btn')
      
      button.addEventListener('click', function () {  
          console.log(this.innerHTML);
            if (this.innerHTML == 'START') {
                button.innerHTML = 'STOP' 
                interval = setInterval(() => {
                    stopwatch()
                }, 1000);
                
                
                
            }  else if (this.innerHTML == 'STOP') {
                button.innerHTML = 'CLEAR'
                clearInterval(interval)
                
                
            }else if (this.innerHTML = 'CLEAR') {
                button.innerHTML = 'START'
              hours.innerHTML = 0
              minute.innerHTML = 0
              secunds.innerHTML = 0
              hisob = 0
            }
      })
     let hisob = 0
      function stopwatch() {
          hisob++
          if (hisob <= 59) {
              secunds.innerHTML = hisob
          }else if (hisob > 59) {
              hisob = 0
              secunds.innerHTML = hisob
              minute.innerHTML++
          } 
          if (minute.innerHTML > 59) {
              minute.innerHTML = 0
              hours.innerHTML++
          }
      }
      
      
      
      