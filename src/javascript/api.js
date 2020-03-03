function combinePatientsBundle(json) {
  let result = [];
  for (let bundle of json) {
    result = result.concat(bundle.entry);
  }
  console.log(result);
  return result;
}

function request() {
  return new Promise((resolve, reject) => {
    fetch("http://178.62.0.181:5000/api/Patient/")
      .then(async res => {
        let json = await res.json();
        console.log(json);
        json = combinePatientsBundle(json);
        resolve(json);
      })
      .catch(console.log);
  });
}

export default request;
