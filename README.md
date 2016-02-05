# README

## What?

Space Calendar is a web application that takes a date of your choice and shows you a picture that was taken using **NASA's** satellites on that day.

## Why?

Space is incredibly interesting and it is fun to have a snoop on NASA and see what they are getting up to all year round!

## How?

Using the the code below, apply for an API from NASA's website, and search via a JSON file to find the space images.

```javascript
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

```





## References

* [API code](https://developer.zendesk.com/rest_api/docs/core/requests)
* [JSON](www.json.org/)
* [NASA API](https://api.nasa.gov/)
