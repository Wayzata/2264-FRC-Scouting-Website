// // var u;
// function nameList(){
//   if(nameArray >= 4239){
//     console.log(nameArray);
    // nameArray.forEach(function (name) {
    //   ul = document.createElement('ul');
    //   document.getElementById('myItemList').appendChild(ul);
    //   for(u = 0; u < nameArray.length; u++){
    //     let li = document.createElement('li');
    //     ul.classList.add('listStuff');
    //     li.classList.toggle('inline-centering');
    //     ul.appendChild(li);
    //
    //     li.innerHTML += name;
    //     console.log(nameArray);
    //   }
    // });
//
//   }
//
// //   // console.log(nameArray + "THIS IS EPIC");
// //
// //   // Make a container element for the list
// //    listContainer = document.createElement('div'),
// //    // Make the list
// //    listElement = document.createElement('ul'),
// //    // Set up a loop that goes through the items in listItems one at a time
// //    numberOfListItems = nameArray.length,
// //    listItem,
// //    i;
// //
// //    // Add it to the page
// //    document.getElementsByTagName('body')[0].appendChild(listContainer);
// //    listContainer.appendChild(listElement);
// //
// //    for (i = 0; i < numberOfListItems; ++i) {
// //        // create an item for each one
// //        listItem = document.createElement('li');
// //
// //        // Add the item text
// //        listItem.innerHTML = listData[i];
// //
// //        // Add listItem to the listElement
// //        listElement.appendChild(listItem);
// //    }
// // }
// // }
var name;
function teamList() {
  var u = 0;
  teamArray.forEach(function () {
    ul = document.createElement('ul');
    document.getElementById('myItemList').appendChild(ul);
    // for(u = 0; u < teamArray.length; u++){
    name = teamArray[u];
    let li = document.createElement('li');
    ul.classList.add('listStuff');
    li.classList.toggle('inline-centering');
    ul.appendChild(li);
    li.innerHTML += name;
    u++;
    // }
});
}
var teamArray = [];

function makeList(x){
  $('ul').empty()
  teamArray = [];
  var teamRequest = new XMLHttpRequest();
  teamRequest.open("GET", "https://www.thebluealliance.com/api/v3/event/" + x + "/teams" , true);
  teamRequest.setRequestHeader("X-TBA-Auth-Key", "lrqZK0XAvSpeHXuWi9vhbmnAbF4ueBRQB3OevJC1pOWIWQdwX1WKRJ4oQceP0ox5");
  teamRequest.send();
  teamRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200){
        console.log("firstLevel epic");

          var teamRequestObj = JSON.parse(this.responseText);
          var a;

          for (a = 0; a < teamRequestObj.length; a++) {
            console.log("epic");
            teamArray.push(teamRequestObj[a].nickname);
        }
        teamList();

      }
    }

}