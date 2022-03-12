const fs = require('fs');
const path = require('path');

const contentFolder = "content/",
      questionnairesFolder = "src/lib/questionnaires/";

const clearFolder = (folder) => {
  if (fs.existsSync(folder)){
    console.log(`Limpando totalmente o conteudo de ${folder}.....`)
    fs.rmdirSync(folder, { recursive: true });
  }
}

const createFolder = (folder) => {
  console.log(`Criando ${folder}...`);
  if (!fs.existsSync(folder))
    fs.mkdirSync(folder, { recursive: true });
}

const getAllQuestionnaires = (dir) => {
  if (fs.existsSync(dir)) {
    let folder = path.resolve(process.cwd(), dir)
    let files = fs.readdirSync(folder);

    return files.map((fileName) => {
        let filePath = path.resolve(folder, fileName)
        const contentFile = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(contentFile);
      }
    );
  }else{
    return [];
  }
}

const makeGeneralFile = (questionnaires, questionnairesFolder) => {
  console.log("Construindo JSON geral...");
  console.log("Total de " + questionnaires.length + " questionários");

  fs.writeFileSync(questionnairesFolder + 'data.js', `export default ${JSON.stringify(questionnaires)}`);
  console.log("Questionarios prontos!");
}

const init = () => {
  const questionnaires = getAllQuestionnaires(contentFolder);

  console.log("Montando JSON das questões..");
  
  clearFolder(questionnairesFolder);
  createFolder(questionnairesFolder);
  
  makeGeneralFile(questionnaires, questionnairesFolder);
  
  console.log("JSON dos questionários montado com sucesso!");
}; init();