import { ResultDisplay } from "../Shared/Shared.js";
import { systolicDiastolicData } from "./Data.js";

const systolicDiastolicList = document.querySelector(".blood_pressure .systolic_diastolic")

export const systolicDiastolic = (user) => {
   // Clear the existing content of listWrapper
   systolicDiastolicList.innerHTML = '';

  systolicDiastolicData.forEach(item => {
    // List tag to wrap each item
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.id); 
    listItem.classList.add("systolic_diastolic_list")

    const myNewList = ResultDisplay(listItem, 
      user.diagnosis_history[0].blood_pressure[item.link].value, 
      user.diagnosis_history[0].blood_pressure[item.link].levels, item.title)

    // joining
    systolicDiastolicList.appendChild(myNewList);
  });
}