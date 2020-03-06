let patientListDemo = require("./patientDemoData.json");
let observationDemo = require("./observationDemoData.json");

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
    fetch("http://178.62.0.181:5000/api/Observation/" + id)
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

function request() {
  return new Promise((resolve, reject) => {
    let localCache = localStorage.getItem("patients");
    if (localCache) {
      setTimeout(() => {
        resolve(JSON.parse(localCache));
      }, 1000);
    } else {
      fetch("http://178.62.0.181:5000/api/Patient/")
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

export { request, requestObservation, getPatientDemo, getObservationDemo };
