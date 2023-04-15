import { writeFileSync } from "node:fs";
import profileData from "./assets/data";

function writeToFile(fileName, data) {
  try {
    writeFileSync(fileName, data);
  } catch (err) {
    console.log(err.message);
  }
}

const jsonString = JSON.stringify(profileData);
console.log("Converting");
writeToFile("./src/assets/data.json", jsonString);
