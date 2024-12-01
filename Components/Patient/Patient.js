import { svgConverter } from "../Shared/Shared.js";
import { calculateAge } from "./Data.js";

const listWrapper = document.querySelector(".patient .user_list_wrapper")

export const PatientList = (data, activeuser) => {
  // Clear the existing content of listWrapper
  listWrapper.innerHTML = '';

  // Create a new ul element
  const Ul = document.createElement("ul")

  const svgstring = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                      <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,
                      1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,
                      .546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,
                      0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,
                      1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,
                      1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,
                      0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635"/>
                    </svg>`


  data.forEach(item => {
    // List tag to wrap each patient
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.name); 
    listItem.classList.add("patient_list")

    if (item.name === activeuser.name) {
      listItem.classList.add("active")
    }

    // a div serving as user information wrapper
    const userInfoWrapper = document.createElement("div");
    userInfoWrapper.classList.add("user")

    // a div serving as image wrapper
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image_wrapper")

    // user img tag
    const image = document.createElement("img");
    image.setAttribute("src", item.profile_picture);
    image.setAttribute("alt", `Image ${item.name}`); 
    image.setAttribute("loading", "lazy"); 

    // a div serving as user name and user gender wrapper
    const userNameGender = document.createElement("div");
    userNameGender.classList.add("user_name_gender")

    // a b tag that wraps the user name 
    const userName = document.createElement("b");
    userName.classList.add("user_name")
    userName.textContent = item.name

    // a small that wraps the user gender
    const userGender = document.createElement("small");
    userGender.classList.add("user_gender")

    // change age from 2006-08-19 to 18 years
    const age = calculateAge(item.date_of_birth);
    userGender.textContent = item.gender + ", " + age

    const moreIcons = svgConverter(svgstring)

    // joining
    imageWrapper.appendChild(image)
    userNameGender.append(userName, userGender);
    userInfoWrapper.append(imageWrapper, userNameGender);
    listItem.append(userInfoWrapper, moreIcons);
    Ul.appendChild(listItem);
  });

  // Create and append the nav list
  listWrapper.append(Ul)
}
