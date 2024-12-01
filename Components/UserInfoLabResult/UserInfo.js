import { svgConverter } from "../Shared/Shared.js";
import { MaleIcon, userInfoData } from "./Data.js";

const userDetails = document.querySelector(".user_details .user_details_list_wrapper")


export const UserInfo = (user) => {
  // Clear the existing content of listWrapper
  userDetails.innerHTML = '';

  // user img tag
  const userDetailsImg = document.querySelector(".user_details .user_details_img img")
  userDetailsImg.setAttribute("src", user.profile_picture);
  userDetailsImg.setAttribute("alt", `userDetailsImg ${user.name}`); 
  userDetailsImg.setAttribute("loading", "lazy"); 

  // User name h3 tag
  const UserName = document.querySelector(".user_details .user_details_name")
  UserName.textContent = user.name

  userInfoData.forEach(item => {
    // List tag to wrap each item
    const listItem = document.createElement("li");
    listItem.setAttribute("id", item.id); 
    listItem.classList.add("user_details_list")

    let itemIcons

    if (user[item.link] === "Female") {
      itemIcons = svgConverter(MaleIcon.female)
    } else if (user[item.link] === "Male") {
      itemIcons = svgConverter(MaleIcon.male)
    } else {
      itemIcons = svgConverter(item?.icon)
    }

    // a div serving as name and detail
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item_wrapper")

    // a small tag that wraps the  name 
    const itemName = document.createElement("small");
    itemName.classList.add("item_name")
    itemName.textContent = item.name

    // a b that wraps the user gender
    const itemDetail = document.createElement("b");
    itemDetail.classList.add("item_detail")
    

    // Regular expression to match the format "YYYY-MM-DD"
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (regex.test(user[item.link])) {
      const date = new Date(user[item.link]);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      // Format the date using `toLocaleDateString`
      const formattedDate = date.toLocaleDateString('en-US', options);
      itemDetail.textContent =  formattedDate
    } else {
      itemDetail.textContent = user[item.link]
    }


    // joining
    itemWrapper.append(itemName, itemDetail);
    listItem.append(itemIcons, itemWrapper);
    userDetails.appendChild(listItem);
  });
}