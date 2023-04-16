import { writeFileSync } from "node:fs";
import profileData from "./assets/data.ts";

function writeToFile(fileName, data) {
  try {
    console.log(data);
    writeFileSync(fileName, data);
  } catch (err) {
    console.log(err.message);
  }
}

const jsonString = JSON.stringify(profileData);
console.log("Converting");
writeToFile("./src/assets/data.json", jsonString);
