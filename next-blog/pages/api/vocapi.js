import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "GET") {

        const filePath = path.join(process.cwd(), "data", "lists.json"); // return le chemin avec 'data' et 'liste' ('cwd = current working directory') )
        const fileData = fs.readFileSync(filePath); // lit la data de filePath
        const data = JSON.parse(fileData); // parse les data en JS

        res.status(200).json(data);
    }
} 

