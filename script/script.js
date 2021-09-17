
var app = new Vue({
    el: '#root',
    data: {
        picIndex: 0,
        pictures :[
            {
                id: 0,
                url: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "field sunset"
            },
            {
                id: 1,
                url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "alp lake"
            },
            {
                id: 2,
                url: "https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                name: "windy canyon"
            },
            {
                id: 3,
                url: "https://images.unsplash.com/photo-1534030665069-90e016e995e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                name: "rapeseed field"
            },
            {
                id: 4,
                url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                name: "milky way mountain"
            }]
    },
    methods: {
        nextImg(){
            this.picIndex<this.pictures.length-1 ? this.picIndex++ : this.picIndex=0;
            // this.picIndex++
        },
        prevImg(){
            this.picIndex>0 ? this.picIndex-- : this.picIndex=this.pictures.length-1;
        },
        selectedImage(index){
            if(this.picIndex==index){
                return "selected";
            }
            return "";
            // picIndex==index ? 'selected': '' 
        },
        selectDot(index){
            this.picIndex=index;
        }
    }
});