$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //一秒鐘有1000毫秒//每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;
    let Arr= new Array;
    $("#moviedate").change(function(){
        
        $("#moviedate").attr("value",$(this).val()); //賦值
        Arr = $('#moviedate').val().split("-");
        //alert(Arr[1]);
        if(Arr[1]<10){
            Arr[1]%=10;
        }
        startDate.setMonth(Arr[1]-1,Arr[2]);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        //alert(Arr[1]);
    
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>"+
        `<td>${x+1}</td>`+
        `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");
        
    }
        
    
    });
    
    
});
