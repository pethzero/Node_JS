function longRunnigOpreation(callback){
    setTimeout(callback,3000);
}

// function userClicked(){
//     console.log('starting a long operation')

//     longRunnigOpreation(function(){
//     console.log('endig a long operation')    
//     });
// }

// userClicked();

function webRequest(request){
    console.log('starting a long operation for request:',request.id)

    longRunnigOpreation(function(){
    console.log('endig a long operation for request:',request.id)    
            });
}

webRequest({id:1});
webRequest({id:2});