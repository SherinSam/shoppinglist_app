const add   = document.getElementById("add")


//user clicked on the add button
add.addEventListener("click", function(){
  const value = document.getElementById("item").value
  if (value) {
      addItemTodo(value)
      document.getElementById("item").value = ""
  }
})


//clear the list
clear.addEventListener("click", function(){
  const ul = document.getElementById("todo")
  ul.innerHTML = ""
})

function removeItem(e){
  const item = this.parentNode //select parent of this button(whic is the li)
  const itemParent = item.parentNode //select the parenet of this li (which is the ul)
  itemParent.removeChild(item)
}

function addItemTodo(text){
  const list = document.getElementById("todo")

  const item = document.createElement("li")
  item.innerText = text 
  item.classList.add("list")

  const remove = document.createElement("button")
  remove.classList.add("remove")
  remove.innerText = "Remove"

  //user clicks the remove button
  remove.addEventListener("click", removeItem)

  item.appendChild(remove)
  //list.appendChild(item)
  list.insertBefore(item, list.childNodes[0]) //latest item on top

}

