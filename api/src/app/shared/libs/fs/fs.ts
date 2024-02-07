import * as fs from 'fs';

export const PathCreate=(path: fs.PathLike) => {
    try { 
        return fs.mkdirSync(path, { recursive: true }); 
    } 
    catch (err) { 
        return false; 
    } 
}

export const FileCreate=(pathfile: string) => {
    try { 
        return fs.writeFileSync(pathfile,''); 
    } 
    catch (err) { 
        return false; 
    } 
}

export const PathExist=(path: fs.PathLike) => {
    try { 
        return fs.existsSync(path); 
    } 
    catch (err) { 
        return false; 
    } 
}

export const PathFile = (path: string ,filename: string) => {
    const pathfile = path + '/'+filename;
    try { 
        if (!PathExist(path)) {
            PathCreate(path);
        }
        if (!PathExist(pathfile)) {
            FileCreate(pathfile)
            return true
        }
        return true
    } 
    catch (err) { 
        return false; 
    } 
}

export const AppEndFile = (path:string, fileName:string, text: string) =>{
    PathFile(path,fileName)
    fs.appendFile(path+fileName, `${text} \n`, function (err) {
      if (err) throw err;
  });
}