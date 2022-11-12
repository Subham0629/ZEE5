
var home_slide=["https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/cover/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233808/cover/1920x770e1e200eb2ab84c2bb678ee60e3dcf06b243111bceaad490a94d223a2872f5a7a.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/cover/1920x770485283887ce04c66a91f3e5dc0e20747.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5191161/cover/1920x770bc4eccaecfc244d5abf81008d247152999b6f14eca0d474287fa92038b166e0d.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246084/cover/1920x7706643570fad7d4b018eb8ee595ee8f66a.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/cover/1920x7701789cd01c98a4b098ff87b399b61530c3e52cc15ff174f4689cc1ebefe5b40ff.jpg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/cover/1920x77061cfc501b93f489b971525bcc03d06c2.jpg"
];


let news=[{title:"Zee News",
image:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-zeenews/channel_list/zeenews1170f2ce73fb97a048d494b94baf12db0efa.png",
category:"All Channels"},
{title:"News Nation",
image:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-170/channel_list/newsnation117080739cd3b19243c5aa39196f8a85db04.png",
category:"All Channels"},
{title:"Aaj Tak",
image:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-aajtak/channel_list/aajtak11705bd3799ece9d4491b87ba04a2c57e78e.png",
category:"All Channels"},
{title:"India Today",
image:"https://akamaividz2.zee5.com/image/upload/w_223,h_125,c_scale,f_webp,q_auto:eco/resources/0-9-indiatoday/channel_list/indiatodayrajeevsardesdai11700e203579951e458ea4e88b2935bb3d1a.png",
category:"All Channels"},
{title:"Aap Sanjha",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-404/list/abpsanjha1170158a8de1129d48f190b311037b59902e.jpg",
category:"All Channels"},
{title:"Zee Business",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-zeebusiness/list/zeebusiness117089cf9de2406d4ceeaaa577c12734ede5.jpg",
category:"All Channels"},
{title:"ABP News",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-398/list/abpnews11704aa2374358d8463c8960fb9b9529a5c6.jpg",
category:"All Channels"},
{title:"News X",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-273/list/newsx1170b6c1d2e4d2084279bd8ba4bc0719248c.jpg",
category:"All Channels"},
{title:"E24",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-207/list/e241440aef5cb4e7bf242b5be599298be7f5b2a4554686f4b1c4816b35a20cd38d2393a.jpg",
category:"All Channels"},
{title:"DD India",
image:"https://akamaividz2.zee5.com/image/upload/w_382,h_215,c_scale,f_webp,q_auto:eco/resources/0-9-ddindia/list/ddindiab1170f889db27123a438db1174cc576e117e9.jpg",
category:"All Channels"},

]


var allData=JSON.parse(localStorage.getItem("allData"))
console.log(allData)
function search(){
    var q=document.querySelector("input").value;
    var filter=allData.filter(function(el){
        return el.title.toLowerCase()==q.toLowerCase()
        
    })   
    
    displayimage(filter);
}
function displayimage(filter){
    document.querySelector("#innercontainer").innerHTML="";       
    filter.forEach(element => {
    let div=document.createElement("div");
    div.setAttribute("class","imagebox")
    let imageProd=document.createElement("img");
    imageProd.setAttribute("src",element.image)
    imageProd.setAttribute("class","searchimage")
    div.append(imageProd);
    document.querySelector("#innercontainer").append(div);
    });
    }



let x=home_slide.length;
    let i=0;
    var z;
    function display(home_slide){
        document.querySelector("#home_slide").innerHTML="";
        let image=document.createElement("img");
        image.setAttribute("src",home_slide[i]);
        document.querySelector("#home_slide").append(image)
        
    }
    display(home_slide);
        z= setInterval(()=>{
            
            i++;
            if(i>x-1){
                i=0;
            }
            display(home_slide)
        },4000)
        document.querySelector("#prev").addEventListener("click",()=>{
            i--;
            if(i<0){
                i=x-1;
            }
            display(home_slide)
        })
        document.querySelector("#nxt").addEventListener("click",()=>{
            i++;
            if(i>x-1){
                i=0;
            }
            display(home_slide)
        })


        displayhome(news);
        function displayhome(news){
            news.forEach(element => {
            let div=document.createElement("div");
            div.setAttribute("class","swiper-slide")
            let image=document.createElement("img");
            image.setAttribute("src",element.image)
            div.append(image);
            document.querySelector(".inbox").append(div);
                
            });
        }

