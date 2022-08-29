window.onload=function(){
    var div=document.getElementsByClassName("d1")[0]
    var divList=div.children
    var length=divList.length
    var count=0
    setInterval(()=>{
    if(count+1 == length){
        div.scrollTop=0
    }
    else{
        count++
        let top=count*200
        div.scrollTop=top
    }
    },3000)
}