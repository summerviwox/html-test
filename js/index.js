var app = new Vue({
    el:'#root',
    data:{
        head:{
            data:[
                {"text":"首页"},
                {"text":"图片"},
                {"text":"搜索"},
                {"text":"日历"},
                {"text":"我的"},
            ]
        },
        foot:{
            data:{
                "text":"©summer1992-2020"
            }
        },
        test:{
            "imgurl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=723716787,1035166074&fm=15&gp=0.jpg",
            "url":"http://222.186.36.75:8888/record/record/getAllRecordsStepwithLimit?atype=1&limit=20&pageindex=0",
            data:[]
        }
    },
    methods:{
        getImagesData:function () {
            axios.get(app.test.url)
                .then(res=>{
                    this.dealNetData(res.data.data)
                    app.test.data = res.data.data
                })
        },
        getShortDes(str){
            return str.substr(str.length-26,str.length)
        },
        dealNetData:function (str) {
            for(let i=
                0;i<str.length;i++){
                str[i].netpath = str[i].netpath.replace("E:\\records\\","http://222.186.36.75:8888/thumbnail/").replace("\\","/")
            }
        }
    }
})
window.onload = function () {
    app.getImagesData()
}