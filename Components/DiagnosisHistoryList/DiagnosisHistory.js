import { ResultDisplay, svgConverter } from "../Shared/Shared.js";
import { DiagnosisHistoryData } from "./Data.js";

const healthStatus = document.querySelector(".diagnosis_history .rate_temperature")

export const DiagnosisHistory = (user) => {
  // Clear the existing content of listWrapper
  healthStatus.innerHTML = '';
  
  // Create a new ul element
  const Ul = document.createElement("ul")

  DiagnosisHistoryData.forEach(item => {
    // List tag to wrap each item
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.id); 
    listItem.classList.add("health_list")

    const healthIcons = svgConverter(item.icon)

    // a div that wraps the rest of the informantion
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("svg_span")

    const myNewInfoWrapper = ResultDisplay(infoWrapper, 
      user.diagnosis_history[0][item.link].value, 
      user.diagnosis_history[0][item.link].levels, item.title, item.unit)

    // joining
    listItem.append(healthIcons, myNewInfoWrapper);
    Ul.appendChild(listItem);
  });

  healthStatus.appendChild(Ul)
}
