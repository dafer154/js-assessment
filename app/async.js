asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   *
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   *
   *
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    //Review
    //http://127.0.0.1:4444/data/testdata.json
    /*
        fetch(url).then((response) => {
        return response.json();
      }).then((jsonData)=>{
        jsonData.people.map((value)=>{
          return console.log(value.name);
        })
      })
    */
    /*
   new Promise(resolve, reject){

      return fetch(url).then((data) =>{
        var names = [];
        data.people.forEach(function(person) {
          names.push(person.name);
        });
      }
      resolve(names.sort());

   }
   */
    /*
   fetch(url).then((data) =>{
     var names = [];
     data.people.forEach(function(person) {
       names.push(person.name);
     });

     promise.resolve(names.sort());
   });

   return promise;
   */
  }
};
