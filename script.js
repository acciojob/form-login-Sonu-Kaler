function getFormvalue() {
    //Write your code here
	
  var x=document.getElementById("form1");
  var s="";
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      s+=x.elements[i].value;
      s+=" ";
     }  
   }
   alert(s);

}
