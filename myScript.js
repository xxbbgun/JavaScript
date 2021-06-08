var marginBox = 10
document.getElementById('ok').addEventListener('click',function(e){
    marginBox = marginBox+30
    document.getElementById('cancel').style.marginLeft = `${marginBox}px`
    document.getElementById('cancel').style.marginRight = `${marginBox}px`
    document.getElementById('no').style.marginLeft = `${marginBox}px`
    document.getElementById('no').style.marginRight = `${marginBox}px`
})






var text = ['ok','วิชานี้','ง่าย','จริงๆนะ']
var count = 0
var newText =document.getElementById('no')
newText.addEventListener('dblclick',function(e){
 if(count>3){
     count = 0
 }else{
     document.getElementById('ok').innerHTML = text[count]
     count++
 }
})