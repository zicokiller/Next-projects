import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "GET") {

        const filePath = path.join(process.cwd(), "data", "lists.json"); // return le chemin avec 'data' et 'liste' ('cwd = current working directory') )
        const fileData = fs.readFileSync(filePath); // lit la data de filePath
        const data = JSON.parse(fileData); // parse les data en JS

        res.status(200).json(data);

    } else if (req.method === "POST") {
        // J'isole les data reçues (en/fr)
        const enWord = req.body.en;
        const frWord = req.body.fr;

        const newWord = {
            en: enWord,
            fr: frWord
        }

        const filePath = path.join(process.cwd(), "data", "lists.json");
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);

        // Va add l'objet 'newWord' ds la liste 'words' (index 0 de l'array)
        data.englishList[0].data.push(newWord);

        // Va créer un new fichier et parser les data en json
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({message: "Succès!"});
    }
} 

