var  now  =  new  Date();

function  createtime() {

 var  grt=  new  Date("07/23/2024 16:37:00");

 now.setTime(now.getTime()+250);

 days  = (now  -  grt ) /  1000  /  60  /  60  /  24; dnum  =  Math.floor(days);

 hours  = (now  -  grt ) /  1000  /  60  /  60  - (24  *  dnum); hnum  =  Math.floor(hours);

 if(String(hnum).length  ==1 ){hnum  =  "0"  +  hnum;} minutes  = (now  -  grt ) /  1000  /60  - (24  *  60  *  dnum) - (60  *  hnum);

 mnum  =  Math.floor(minutes); if(String(mnum).length  ==1 ){mnum  =  "0"  +  mnum;}

 seconds  = (now  -  grt ) /  1000  - (24  *  60  *  60  *  dnum) - (60  *  60  *  hnum) - (60  *  mnum);

 snum  =  Math.round(seconds); if(String(snum).length  ==1 ){snum  =  "0"  +  snum;}

 document.getElementById("time").innerHTML  =  "��վ�Ѱ�ȫ���� "+  dnum+" �� "+  hnum  +  " Сʱ "  +  mnum  +  " �� "  +  snum  +  " ��";

}

setInterval("createtime()",250);