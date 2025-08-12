    ///1
//     Array.prototype.myForEach=function (callback){
//     for(let i=0;i<this.length;i++){
//         callback(this[i],i,this);
//     }
//     };
// [1,2,3].myForEach(function (j,s){
//     console.log(j,s)
//     })

    ////2
//     Array.prototype.myFind=function (callback){
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             return this[i];
//         }
//     }return undefined
//     };
// let arr=[2,3,4,6];
// let top=arr.myFind(a=>a>5)
//     console.log(top)

    ////3
//     Array.prototype.mySome=function (callback){
//     for(let i=0;i<this.length;i++){
//        if( callback(this[i],i,this)){
//            return true;
//        }
//     }return false;
//     };
// let arr=[3,4,2,11,55,77];
// let res=arr.mySome(x=>x%2===1)
//     console.log(res)

    ////4
//     Array.prototype.myEvery=function (callback){
//     for(let i=0;i<this.length;i++){
//         if(!callback(this[i],i,this)){
//           return false;
//         }
//     }  return true;
//     }
//     let arr=[2,33,44,55];
// let itog=arr.myEvery(x=>x>1);
//     console.log(itog)
