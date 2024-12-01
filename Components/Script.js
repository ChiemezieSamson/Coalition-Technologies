import { fetchData } from './API_CALL.js';
import { myChart } from './DiagnosisHistoryList/Chart.js';
import { DiagnosisHistory } from './DiagnosisHistoryList/DiagnosisHistory.js';
import { DiagnosticList } from './DiagnosisHistoryList/DiagnosticList.js';
import { systolicDiastolic } from './DiagnosisHistoryList/SystolicDiastolic.js';
import { Navigation_Data } from "./Navigation/Data.js"
import { createImageList } from './Navigation/Navigation.js';
import { UserProfile } from './Navigation/UserProfile.js';
import { PatientList } from './Patient/Patient.js';
import { labResult } from './UserInfoLabResult/LabResult.js';
import { UserInfo } from './UserInfoLabResult/UserInfo.js';

/**
 * Navigation: unordered list of nav links
 */
// Create and append the nav list
createImageList(Navigation_Data);

// Making An API CAll
const apiURL = "https://fedskillstest.coalitiontechnologies.workers.dev";
let usedData

async function getData(patientName) {
  
  const data = await fetchData(apiURL);
  if (data) {
    let currentPatient 

    if (patientName) {
      currentPatient = data.find(patient => patient.name === patientName)
    }

    usedData = currentPatient ? currentPatient : data[0]

    UserProfile(usedData)
    PatientList(data, usedData)
    DiagnosticList(usedData?.diagnostic_list)
    DiagnosisHistory(usedData)
    labResult(usedData.lab_results)
    UserInfo(usedData)
    myChart(usedData)
    systolicDiastolic(usedData)
  } else {
    console.log('Failed to fetch data');
  }
}

// Call the function
getData();

let previousPatientName
// Getting all the patient list
const patientListWrapper = document.querySelector(".user_list_wrapper")

patientListWrapper.addEventListener("click", (event) => {
  
  if (event.target.nodeName === "LI") {
    const patientName = event.target.id

    if (previousPatientName !== patientName && usedData.name !== patientName) {
      getData(patientName) 
      previousPatientName = patientName
    }
  }
})
