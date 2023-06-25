const jwt=require('jsonwebtoken');

const jsonsecret="Hello! Hope you are fine. With thi secret key you can access the api"

module.exports.Generatetoken=(user,userid,clientid)=>{
    const token=jwt.sign({user:user,userid:userid,clientid:clientid},jsonsecret);
    return token;

}


module.exports.Verifytoken=(token,user)=>{
    flag=false
    jwt.verify(token,jsonsecret,function(err,decoded){
        if(err){
            console.log("error called")
            flag=false;    
        }
        else
        {
            console.log("Not error");
            console.log("decoded.user=>"+decoded.user)
            console.log(user);
            console.log("Check=>"+equal(decoded.user,user))
            if(equal(decoded.user,user))
            {
                console.log("True");
                flag= true;
            }
            else
            {
                console.log("False");
                flag= false;
            }
        }

    })
    return flag;
}

const equal=(user1,user)=>{return JSON.stringify(user1)===JSON.stringify(user)}

// module.exports.url="https://crm-web-api.herokuapp.com"

// module.exports.url="https://crmapiexcel.herokuapp.com" //paste API URL here.

module.exports.url="http://localhost:3000"