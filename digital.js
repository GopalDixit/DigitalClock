const clock = document.getElementById('clock')
// Date is predefined object
setInterval(function(){
    let date = new Date() 
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
},1000)