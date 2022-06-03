var readline = require('readline');

var rl = readline.createInterface(
  process.stdin, process.stdout);
const userdata = {
  uname: '',
  TotalBal: 200000,
  wamt: 0,
  damt: 0

}

function getName(moneyDeposit) {
  console.log("inside getName")
  rl.question('Enter your name: ', (uname) => {
    console.log('Your name is: ' + uname);
    userdata.uname = uname;
   moneyDeposit(function withdrawMoney() {
      rl.question('Enter Amount to deposit: ', (damt) => {
        console.log('amount entered is: ' + damt);
        userdata.damt = damt;
        userdata.TotalBal = Number(userdata.TotalBal) + Number(userdata.damt)
        console.log("remaining amount is:" + userdata.TotalBal)
rl.question('do u want to continue?',(ans)=>{
  if (ans==='yes')
  {
    console.log("yes")
  }
  else
  {
     console.log("Account summary:"+userdata.uname+"\n"+userdata.TotalBal)
    console.log("Thank u for banking with us..")
  }
})
      });


    })

  });

}
getName(function moneyDeposit(withdrawMoney) {
  rl.question('Enter Amount to be withdraw: ', (amt) => {
    console.log('amount entered is: ' + amt);
    userdata.wamt = amt;
    userdata.TotalBal = userdata.TotalBal - userdata.wamt
    console.log("remaining amount is:" + userdata.TotalBal)
    rl.question('do u want to continue?',(ans)=>{
  if (ans==='yes')
  {
   
    withdrawMoney()
  }
  else
  {
    
    console.log("Account summary:"+userdata.uname+"\n"+userdata.TotalBal)
    console.log("Thank u for banking with us..")
   // break
  }
})
   
  });


})



