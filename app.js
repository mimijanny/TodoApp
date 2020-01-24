(function(){
//localStorage.clear()
//for getting elements in our html page
let form = document.getElementById('form');
let input = document.getElementById('activity');

//ends here

//for displaying data from our local storage
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value1 = localStorage.getItem(key);
   let list = document.createElement('li')
   list.className ="list-group-item";
   let btn = document.createElement('button');
   btn.className = "btn btn-danger btn-sm float-right delete";
  //btn.createClassName ='close'
  let btnValue = document.createTextNode('X');
  btn.appendChild(btnValue);
  let value = document.createTextNode(value1);
//   let keyElement = doc
// let key = document.createTextNode(key);
  list.appendChild(value);
  list.appendChild(btn);
  let ul = document.getElementById('items');
  ul.appendChild(list);
  }  
//ends here
//To implement the today functionalities
let today = document.getElementById('today');
today.addEventListener('click',(e)=>{
e.preventDefault();
let items = itemList.getElementsByTagName('li');
//console.log(items);
let arr = Array.from(items);
arr.forEach((item)=>{
  item.style.display = 'none'; 
  
  // let itemName= item.firstChild.textContent;
  //       if(){
       // item.style.display = 'block';
        // }
        // else{
        //     item.style.display= 'none';
        // }
});

});
// let previous = document.getElementById('previous');
// previous.addEventListener('click',(e)=>{
//   e.preventDefault();
//   alert('previou')

// });
// let next = document.getElementById('next');
// next.addEventListener('click',(e)=>{
//   alert('next')
// });


//where we are adding  the listitems and then store them to the localstorage
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // let date = document.getElementById('date').value;
    // console.log(date)

let inputValue = input.value;
let now = new Date();
 


localStorage.setItem(now,inputValue);
console.log(localStorage);
  
let list = document.createElement('li');
list.className ="list-group-item";
let btn = document.createElement('button');
btn.className = "btn btn-danger btn-sm float-right delete";
btn.createClassName ='close'
let btnValue = document.createTextNode('X');
btn.appendChild(btnValue);
let value = document.createTextNode(inputValue);
list.appendChild(value);
list.appendChild(btn);
      //A function that will alert you when you add an empty list
      let ul = document.getElementById('items');
      if (inputValue === '') {
          alert("You must write something!");
        } else {
          ul.appendChild(list);
          
        }
      //it ends here


  //A function that will clear the text on the text area once you click on the add button
  input.value = "";

  let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = ()=> {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
//it ends here
});
//it ends here




//A function that will delete the list item once you click on the delete button
let itemList= document.getElementById("items");
itemList.addEventListener('click', (e)=>{
if(e.target.classList.contains('delete')){
      //for removing from the local storage
            for (let i = 0; i < localStorage.length; i++) {
              let key = localStorage.key(i);
              localStorage.removeItem(key);
            }
      //it ends here

      //for deleting the list items
      let li = e.target.parentElement;
              itemList.removeChild(li);
          }
      //it ends here
});
//it ends here
//Clear All
// function clear(){
//   itemList= document.getElementById("items");
//   while(lis.length > 0){                   
//      todo.removeChild(lis[0]);
//   }
// };       


 
//console.log(itemList)
let clear = document.getElementById('clearall');
clear.addEventListener('click',(e)=>{
  localStorage.clear();
  let items = itemList.getElementsByTagName('li');
let arr = Array.from(items);
arr.forEach((item)=>{
  item.style.display = 'none'; 
  
  
});
})
//console.log(clear)







//A function that changes the background color anytime you hover on list card
let main = document.getElementById('main');
main.addEventListener('mousemove',(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor =`rgb(200,${e.offsetX},${e.offsetY})`;

});
//it ends here

//A function for the search
let search = document.getElementById('filter');
search.addEventListener('keyup',(e)=>{
    e.preventDefault();
let text = e.target.value.toLowerC
ase();
let items = itemList.getElementsByTagName('li');
let arr = Array.from(items);
arr.forEach((item)=>{
 
    let itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        }
        else{
            item.style.display= 'none';
        }
});

});
//it ends here




})();