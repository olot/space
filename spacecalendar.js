document.getElementById('datesearch', 'year', 'month', 'day').addEventListener('submit',function(e){
   e.preventDefault();
   document.getElementById('results').innerHTML += "This is the space picture for your date!!!";
   var year = document.getElementById('year').value;
   var month= document.getElementById('month').value;
   var day  = document.getElementById('day').value;
   var calendar1 = (year + "-" + month + "-"+ day);
    dateget(calendar1);

});

function dateget(date){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.nasa.gov/planetary/apod?date="+ date +keys.nasa, true);

  xhr.onload = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          document.getElementById('picture').setAttribute("src",response.hdurl );
          document.getElementById('explanation').innerHTML = response.explanation;
          document.getElementById('title').innerHTML = response.title;
          document.getElementById('copyright').innerHTML = response.copyright;
        } else {
          console.error(xhr.statusText);
        }
    };

  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send();
  return xhr.response;

}
var max = 2016,
    min = 1998,
    select = document.getElementById('year');

for (var i = max; i >= min; i--) {
  var opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

// The following functions create options for Year, Month and Day.

var max = 31,
    min = 1,
    select = document.getElementById('day');

for (var i = min; i <= max; i++) {
  var opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

var mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  select = document.getElementById('month');

for (var i = 0; i < mon.length; i++) {
  var opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = mon[i];
  select.appendChild(opt);
}
