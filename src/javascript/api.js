function request() {
  if (window.$globalPatients) {
    return window.$globalPatients;
  }
  return new Promise((resolve, reject) => {
    fetch("http://178.62.0.181:5000/api/Patient/")
      .then(async res => {
        let json = await res.json();
        console.log(json);
        resolve(json);
      })
      .catch(console.log);
  });
}

export default request;
