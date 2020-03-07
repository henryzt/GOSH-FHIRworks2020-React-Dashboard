let patientListDemo = require("./patientDemoData.json");
let observationDemo = require("./observationDemoData.json");

const SERVER_URL = "https://henryz.cc:5001/api/";

const moment = require("moment");

const getPatientDemo = () => {
  return combinePatientsBundle(patientListDemo);
};

const getObservationDemo = () => {
  return combinePatientsBundle(observationDemo);
};

function combinePatientsBundle(json) {
  let result = [];
  for (let bundle of json) {
    result = result.concat(bundle.entry);
  }
  console.log(result);
  return result;
}

function requestObservation(id) {
  return new Promise((resolve, reject) => {
    fetch(SERVER_URL + "Observation/" + id)
      .then(async res => {
        let json = await res.json();
        console.log(json);
        json = combinePatientsBundle(json);
        resolve(json);
      })
      .catch(e => {
        reject(e);
        console.log(e);
      });
  });
}

function requestPatientList() {
  return new Promise((resolve, reject) => {
    let localCache = localStorage.getItem("patients");
    if (localCache) {
      setTimeout(() => {
        resolve(JSON.parse(localCache));
      }, 1000);
    } else {
      fetch(SERVER_URL + "Patient/")
        .then(async res => {
          let json = await res.json();
          console.log(json);
          json = combinePatientsBundle(json);
          localStorage.setItem("patients", JSON.stringify(json));
          resolve(json);
        })
        .catch(e => {
          reject(e);
          console.log(e);
        });
    }
  });
}

function getPatientList(message) {
  return new Promise(async resolve => {
    let json = null;
    if (window.$globalPatients) {
      json = window.$globalPatients;
    } else {
      // start load api, show loading
      const hideLoading = message.loading("Please wait, fetching patient data...", 0);
      try {
        json = await requestPatientList();
        message.success({ content: "Patient data loaded!", duration: 2 });
      } catch (e) {
        json = getPatientDemo();
        message.warn({
          content: "Network Error, the server might be down. Local demo data is loaded.",
          duration: 5
        });
      }
      window.$globalPatients = json;
      hideLoading();
    }
    resolve(json);
  });
}

function parseAllPatientData(patients) {
  const tableData = [];
  patients.forEach(elementRaw => {
    if (!elementRaw) {
      return null;
    }
    let element = elementRaw.resource;
    let patient = new Object();
    patient.name = element.name?.[0]?.family + " " + element.name?.[0]?.given?.[0];
    patient.id = element.id;
    patient.phone = element.telecom?.[0]?.value;
    patient.language = element.communication?.[0]?.language?.text;
    patient.maritalStatus = element.maritalStatus?.text;
    patient.address = element.address?.[0]?.line[0];
    patient.city = element.address?.[0]?.city;
    patient.state = element.address?.[0]?.state;
    patient.country = element.address?.[0]?.country;
    patient.gender = element.gender;
    patient.birthDate = element.birthDate;
    patient.birthMonth = moment(element.birthDate).format("MMMM");
    patient.age = moment().diff(element.birthDate, "years");
    patient.raw = elementRaw;
    tableData.push(patient);
  });

  return tableData;
}

export {
  requestPatientList,
  requestObservation,
  getPatientDemo,
  getObservationDemo,
  parseAllPatientData,
  getPatientList
};
