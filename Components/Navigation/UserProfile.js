
export const UserProfile = (user) => {
  const userImage = document.querySelector(".user .image_wrapper img")
  userImage.setAttribute("src", user.profile_picture)

  const userNmae = document.querySelector(".user_info .user_name")
  userNmae.textContent = user.name

  const userOccupation = document.querySelector(".user_info .user_occupation")
  userOccupation.textContent = user.insurance_type
}