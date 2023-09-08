import { parallel } from 'async';
//Using Callbacks

    parallel([
        function(callback) {
            setTimeout(function() {
                callback(null, 'one');
            }, 2000);
        },
        function(callback) {
            setTimeout(function() {
                callback(null, 'two');
            }, 1000);
        }
    ], function(err, results) {
        console.log(results);
        // results is equal to ['one','two'] even though
        // the second function had a shorter timeout.
    });

    //using promise dict
    parallel({
        one: function(callback) {
            setTimeout(function() {
                callback(null, 'one');
            }, 2000);
        },
        two: function(callback) {
            setTimeout(function() {
                callback(null, 'two');
            }, 1000);
        }
    }).then(res=>{
        console.log(res)
    }).catch(err =>{
        console.log(err)
    });

    //async await
    async function a(){
        console.log("async")
        try{
            let res = parallel([
                function(callback) {
                    setTimeout(function() {
                        callback(null, 'one');
                    }, 2000);
                },
                function(callback) {
                    setTimeout(function() {
                        callback(null, 'two');
                    }, 1000);
                }
            ]);
            res.then(r=>{
                console.log(r , "from async await")
            })
            res.then(r=>{
                console.log(r , "from async await")
            })
            
        }
        catch (err){
            console.log(err)
        }
    }
    a()
    
    const b= async ()=>{
        try {
            let results = await parallel([
                function(callback) {
                    setTimeout(function() {
                        callback(null, 'one');
                    }, 200);
                },
                function(callback) {
                    setTimeout(function() {
                        callback(null, 'two');
                    }, 100);
                }
            ]);
            console.log(results, "from asyn await two");
            // results is equal to ['one','two'] even though
            // the second function had a shorter timeout.
        }
        catch (err) {
            console.log(err);
        }
    }
    b()
    
    console.log("hello")

    function ab(){
        return new Promise((res, rej)=>{
            setTimeout(function() {
                res("one to three");
            }, 2000);   
        })
    }
    async function abc(){
        console.log(ab())
        console.log(await ab())
    }
    abc()
