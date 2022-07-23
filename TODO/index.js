var count=0;
document.getElementById('d').innerHTML= "_";
function add(){
    
    let inv = document.getElementById('inv').value;
     let out=document.getElementById('out');
     let  li = document.createElement('li');
     li.textContent=inv;
     // out.appendChild(li);
     var ele = document.createElement('a');
     ele.textContent='x';
     ele.href="javascript:void(0)";
     ele.className='remove';
     li.appendChild(ele);
     var pos = out.firstElementChild;
     
     if(pos==null){
         out.appendChild(li);
         count=count+1;
         document.getElementById('d').innerHTML= count;
     }else{
         out.insertBefore(li,pos);
         count = count+1;
         document.getElementById('d').innerHTML=count;
     }
    
    document.getElementById('inv').value='';
    
 }
 let btn=document.querySelector('ul');
 btn.addEventListener('click',function(e){
     let out = document.getElementById('out');
     let li = e.target.parentNode;
     out.removeChild(li);
     count=count-1;
     document.getElementById('d').innerHTML= count;
     
 });
 