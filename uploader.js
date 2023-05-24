import { promises as fs } from "fs";
import fileDownloader from "./file-downloader.js";
export const localDownload = async (properties)=>{
    const {url, path, filename, extension} = properties
    const buffer = await fileDownloader(url)
    const fileDirectory = path+filename+"."+extension
    await fs.writeFile(fileDirectory, buffer);
}

export const googleUploader= async()=>{}

// GOOGLE_DRIVE_CLIENT_ID="471988427617-r52mfse5aae0dmhau3b228bdqbgmeh7a.apps.googleusercontent.com"
// GOOGLE_DRIVE_CLIENT_SECRET="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"
// GOOGLE_DRIVE_REDIRECT_URI=https://developers.google.com/oauthplayground
// GOOGLE_DRIVE_REFRESH_TOKEN="1//04vqipl6mC-djCgYIARAAGAQSNwF-L9IrTEv4KLL3FeUw31rhN3jlRotM3Lsj4LgCJ8YLt1b8l2YLQEGb5BzEFZ1DcsIznArSxwQ"