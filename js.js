var c=document.getElementsByClassName("abbey1");
var int;
 for(var i=0;i<c.length;i++)
 {   
c[i].addEventListener('click',function(event)
{
   event.preventDefault();
 var ele=this.textContent.trim().toLowerCase();
 var targetelemen=document.getElementById(ele);

 int=setInterval(ada,20,targetelemen)

});
function ada(targetelemen)
{  var cordinates=targetelemen.getBoundingClientRect();
if(cordinates.y<=0)
{
    clearInterval(int);
    return; 
}
else{
window.scrollBy(0,40);
}


}
 }

var bars=document.getElementsByClassName("skill");



function reducewidth(i)
{
  
  i.style.width=0+"%";  
  

}
for(let i of bars)
{
reducewidth(i);
}


function increasebars(i)
{
  let counter=0;
 var clearing= setInterval(function(){
 
    var maxw=i.getAttribute("data-percentage");
    if(counter<=maxw)
    {
      counter++;
     i.style.width=counter+"%";
    }
    else
    {
clearInterval(clearing);
return;
    }

 },7);
}
done=[false,false,false,false,false,false];
function checkscroll()
{
for(var i=0;i<6;i++)
{
  var skillbarheight=bars[i].getBoundingClientRect();
if(done[i]==false&&skillbarheight.top<=window.innerHeight)
{
  increasebars(bars[i]);
 done[i]=true;

}
else if(skillbarheight.top>window.innerHeight)
{
 done[i]=false;
reducewidth(bars[i]);
}
}


}
window.addEventListener("scroll",checkscroll)
window.addEventListener("load", checkscroll);