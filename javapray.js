function getcity() {
  let fajr = document.getElementById("fajr");
  fajr.innerHTML = "";
  // fajr.addEventListener("click", () => {
  //   fajr.classList.add("active");
  // });
  let sunrise = document.getElementById("sunrise");
  sunrise.innerHTML = "";
  // sunrise.addEventListener("click", () => {
  //   sunrise.classList.add("active");
  // });
  let duhr = document.getElementById("dhuhr");
  duhr.innerHTML = "";
  let asr = document.getElementById("asr");
  asr.innerHTML = "";
  let Maghrib = document.getElementById("maghrib");
  Maghrib.innerHTML = "";
  let Isha = document.getElementById("isha");
  Isha.innerHTML = "";
  let clock = document.getElementById("clock");
  clock.innerHTML = "";
  let date = document.getElementById("date");
  date.innerHTML = "";
  let hijriDate = document.getElementById("hijriDate");
  hijriDate.innerHTML = "";
  let params = {
    country: "SA",
    city: "Makkah El Mukkarama",
  };
  axios
    .get("https://aladhan.api.alislam.ru/v1/timingsByCity", {
      params: params,
    })
    .then((response) => {
      fajr.innerHTML += `

       <div class="card active">
            <div>
              <i class="fa-solid fa-sun"></i>
               <span>Fajr</span>
            </div>

            <h4 id="fajr">${response.data.data.timings.Fajr}</h4>
          </div>

        `;
      sunrise.innerHTML += `
 <div class="card">
          <div>
            <i class="fa-solid fa-sun"></i>
            <span>Sunrise</span>
          </div>

          <h4 id="sunrise">${response.data.data.timings.Sunrise}</h4>
        </div>


        `;
      duhr.innerHTML += `
        <div class="card">
          <div>
            <i class="fa-solid fa-sun"></i>
            <span>Dhuhr</span>
          </div>

          <h4 id="dhuhr">${response.data.data.timings.Dhuhr}</h4>
        </div>
        `;
      asr.innerHTML += `
        <div class="card">
          <div>
            <i class="fa-solid fa-cloud-sun"></i>
            <span>Asr</span>
          </div>

          <h4 id="asr">${response.data.data.timings.Asr}</h4>
        </div>

        `;
      Maghrib.innerHTML += `
        <div class="card">
          <div>
            <i class="fa-solid fa-cloud-moon"></i>
            <span>Maghrib</span>
          </div>

          <h4 id="maghrib">${response.data.data.timings.Maghrib}</h4>
        </div>
        `;
      Isha.innerHTML += `

        
         <div class="card">
          <div>
            <i class="fa-solid fa-moon"></i>
            <span>Isha</span>
          </div>

          <h4 id="isha">${response.data.data.timings.Isha}</h4>
        </div>`;
      date.innerHTML += `
              <p id="date">${response.data.data.date.readable}</p>
              `;
      hijriDate.innerHTML += `
              <p id="hijriDate">${response.data.data.date.hijri.date}</p>
              `;
      clock.innerHTML += `
                 <h2 id="clock">${response.data.data.meta.timezone}</h2>
              
              `;
    });

  getcity.catch((error) => {
    console.log(error);
  });
}
getcity();
