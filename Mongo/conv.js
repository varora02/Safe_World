let csvToJson = require('convert-csv-to-json');
let fileInputName = 'Crime_Rates_By_Region.csv'; 
let fileOutputName = 'myOutputFile.json';
 
jsona = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fileInputName);
for(i  = 0 ; i < jsona.length ; i++){
	console.log(jsona[i]["Location"])
	jsona[i]["Score"] = parseInt(jsona[i]["Score"])
	console.log(jsona[i])
}