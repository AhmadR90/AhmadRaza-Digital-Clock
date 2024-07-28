async function printDate() {
    for (; true; ) {
      const pro = new Promise((res, rej) => {
        setTimeout(() => {
          console.log(new Date());
          res("resolved");
        }, 1000);
      
      });
  
      await pro;
    }
  }
  
  printDate();