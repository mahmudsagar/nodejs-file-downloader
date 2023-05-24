import { localDownload } from "./uploader.js";

((location, properties)=>{
    if(!location && typeof location === "string" ){
        return {
            status: "fail",
            message: "Please select a valid location. eg: (local,google,s3)"
        }
    }
    if(location === "local"){
        localDownload(properties)
    }
})("local", {
    url: "https://www.africau.edu/images/default/sample.pdf",
    path: "/Users/xpeedstudio/nodeProjects/",
    filename: "new",
    extension: "pdf"
})