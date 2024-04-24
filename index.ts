#! /usr/bin/env node

import inquirer from "inquirer";

async function calculateBmi() {
  const { weight, height } = await inquirer.prompt([
    {
      name: "weight",
      type: "number",
      message: "Enter your weight in KG"
    },
    { name: "height", 
      type: "number",
      message: "Enter your height in meters"
    }
  ]);
  const bmi = weight / (height * height);

  const category = getBmiCategory(bmi);

  console.log(`Your BMI is ${bmi} (${category})`);
}

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Oobsss";
  }
}

calculateBmi();
