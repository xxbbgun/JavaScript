var marginBox = 10
document.getElementById('ok').addEventListener('click',function(e){
    marginBox = marginBox+30
    document.getElementById('cancel').style.marginLeft = `${marginBox}px`
    document.getElementById('cancel').style.marginRight = `${marginBox}px`
    document.getElementById('no').style.marginLeft = `${marginBox}px`
    document.getElementById('no').style.marginRight = `${marginBox}px`
})