//window.onload=function(){
    //alert("hi");
//};

let imageURL_Array = [
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/398324/cbb643d4814055da.jpg",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    "https://sdc.net.tw/uploads/demoproduct_image/thumbs/20200812184742-5f33c8ce79bbd.jpg",
    "https://assets.blog.engoo.com/wp-content/uploads/sites/3/2022/12/22090555/pizza_english_vocabulary_toppings_crust.jpg"
];



var l=0;
$(function(){
    
    $("input").on("click",function(){
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        
        switch(true){
            case randomChildNumber==l: //如果亂數值等於紀錄值
            if(r<3){
                randomChildNumber=randomChildNumber+1;
            }
            else{
                randomChildNumber=randomChildNumber-1;
            }
            break;
            default: //如果亂數值不等於紀錄值
            l = randomChildNumber; //更新紀錄值
            break;
        }
        
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});

