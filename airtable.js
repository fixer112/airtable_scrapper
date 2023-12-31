//This code used on sample page https://airtable.com/app5bMnq5s2ath7Ze/shrfjSEjp0s4VxgG7/tbleNYbxcFbee5DLP

//Check screenshots
let data = [];
function callback(mutations) {
  mutations.forEach(mutation => {

    //Extract Name 
    Array.from(temp1.children).forEach((item) => {
      let id = item.children[1].getAttribute("data-rowindex")//getAttribute("data-rowid");
      let n = id;

      if (!data.includes(n)) {
        data[n] = [];

      }


      data[n]["name"] =
        item.children[1].innerText;

      //console.log(item.children[1].innerText)

      // }

    });


    //Extract other column
    Array.from(temp1.children).forEach((item) => {

      var id = item.children[0].getAttribute("data-rowindex")//getAttribute("data-rowid");
      var n = id;

      var d = [];

      if (!data.includes(n)) {
        data[n] = [];

      }

      Array.from(item.children).forEach((e) => {

        d[parseInt(e.getAttribute("data-columnindex")) - 1] = e.innerText;

      })



      data[n] = d;

      //console.log(d)


    });
  });
}
const observer = new MutationObserver(callback);


observer.observe(document, { subtree: true, attributes: true });


//use copy(data) to copy data and save as json file i.e name.json, data.json, data2.json

// Object.entries(data)

// let all = "";
// ((data)).forEach((e) => {
//   n = e["name"]
//   d = (e["data"]).join(",")
//   all += n + "," + d + "\n"
//   //console.log(n + "," + d)
// })



