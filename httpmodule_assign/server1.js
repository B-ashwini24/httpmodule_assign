require("dotenv").config
const http=require("http")
const fs=require("fs")

const port=process.env.PORT || 9090

const data=[]
let body=''
function requestListener(req,res){

    if(req.method=="GET" && req.url=="/get"){
        
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                res.write(data)
                res.end();
            }
        })
       
    }
    else if(req.method=="POST" && req.url=="/post")
    {
      req.on('data',(data)=>{
          body += data
      })
      req.on('end',()=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(body,()=>{
                res.end();
            })
      })
    }

}

const server=http.createServer(requestListener)
server.listen(port,function(){
    console.log(`server started ${port}`)
})