import { spawn } from "child_process";
import fs from "fs";

const input = ""

export function useModel(input: any, type = "text") {
  let inputData = input;

  if (type === "image") {
    const imageBuffer = fs.readFileSync(input); // image path
    inputData = imageBuffer.toString("base64");
  }

  const process = spawn("python3", ["../ai/model/rf_model.pkl", type, inputData]);

  process.stdout.on("data", (data) => {
    console.log(`Python Output: ${data}`);
  });

  process.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });

  process.on("close", (code) => {
    if (code === 0) {
      console.log("Model used successfully.");
    } else {
      console.log(`Python process exited with code ${code}`);
    }
  });
}
