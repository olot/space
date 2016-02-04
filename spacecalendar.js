document.getElementById('datesearch', 'year', 'month', 'day').addEventListener('submit',function(e){
   e.preventDefault();
   document.getElementById('results').innerHTML += "This is the space picture for your date!!!";
   var year = document.getElementById('year').value;
   var month= document.getElementById('month').value;
   var day  = document.getElementById('day').value;
   var calendar1 = (year + "-" + month + "-"+ day);
    console.log(dateget(calendar1));

                   dateget(calendar1);

});

//  var TestVar = form.inputbox.value;
function dateget(date){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.nasa.gov/planetary/apod?date="+ date +"&api_key=O2FKnnEpNUEeNa07o0jczIRzh2cg1fnarl5Yu0As", true);

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

// this function takes the results object from StackOverflow
// and returns the number of results and tags to be appended to DOM
//var showSearchResults = function(query, resultNum) {
//    var results = resultNum + ' results for <strong>' + query + '</strong>';
//    return results;
//};

// takes a string from input and searches
// for unaswered questions on StackOverflow API.
