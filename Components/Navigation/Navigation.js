import { svgConverter } from "../Shared/Shared.js";

const HtmlNav = document.querySelector("nav")
const Ul = document.createElement("ul")

// Function to create the nav list
export const createImageList = (data) => {
  data.forEach(item => {
    // List tag to wrap each nav link
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.id); 
    listItem.classList.add("navList")

    // a: link tag and its attributes
    const href = document.createElement("a");
    href.setAttribute("href", item.link);
    href.setAttribute("target", "_blank");
    href.setAttribute("rel", "noopener noreferrer");
    href.classList.add("navLink")

    const NavIcons = svgConverter(item.icon)

    // a span that wraps the nav text
    const textSpan = document.createElement("span");
    textSpan.classList.add("svg_span")
    textSpan.textContent = item.name

    // joining
    href.append(NavIcons, textSpan);
    listItem.appendChild(href);
    Ul.appendChild(listItem);
  });
}

HtmlNav.append(Ul)