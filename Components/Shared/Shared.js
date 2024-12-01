import { ArrowIcons } from "../DiagnosisHistoryList/Data.js";

export const svgConverter = (item) => {  
  // a span that wraps the svg 
  const svgSpan = document.createElement("span");
  svgSpan.classList.add("svg_span")

  // Parse the SVG string into an actual DOM node
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(item, 'image/svg+xml').documentElement;
  svgSpan.append(svgDoc)
  
  
  return svgSpan
}

export const ResultDisplay = (listItem, value, levels, title, unit) => {
  
  // a span that wraps the health title
  const healthTitle = document.createElement("span");
  healthTitle.classList.add("result_title")
  healthTitle.textContent = title

  // a strong that wraps the numbers
  const resultNumber = document.createElement("strong");
  resultNumber.classList.add("result_number")
  resultNumber.textContent =`${value} ${unit ? unit : ""}`

  // a small that wraps the the state of health and arrow
  const healthState = document.createElement("small");
  healthState.classList.add("result_state")

  // a span that wraps the text for state of health
  const healthStateText = document.createElement("span");
  healthTitle.classList.add("result_state_text")
  healthStateText.textContent = levels

  const arrowUpIcons = svgConverter(ArrowIcons.higherThan)
  const arrrowDownIcons = svgConverter(ArrowIcons.lowerThan)

  if (levels === "Lower than Average") {
  healthState.append(arrrowDownIcons, healthStateText)
  } else if (levels === "Higher than Average") {
  healthState.append(arrowUpIcons, healthStateText)
  } else {
  healthState.append(healthStateText)
  } 

  listItem.append(healthTitle, resultNumber, healthState);

  return listItem
}