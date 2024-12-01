export const calculateAge = (dateString) =>  {
  const birthDate = new Date(dateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear(); // Calculate the difference in years
  const monthDifference = today.getMonth() - birthDate.getMonth(); // Calculate the month difference

  // Adjust age if the current date is before the birthdate in the current year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}