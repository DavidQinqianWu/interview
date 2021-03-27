let targetString = `曲谱介绍<`;

let exg = /曲谱(资源|介绍)(:|<)?/g;

let result = targetString.match(exg);
console.log(result);
