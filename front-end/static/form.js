const delCard = (card) => {
  card.remove()
}

const validateForm = (food, desc, img, rank) => {
  console.log(food, desc, img, rank)
  if (food == "" || desc == "" || img == "" || rank == "")
    return false

  return true
}

const submitForm = () => {
  const food = document.getElementById("food").value
  const desc = document.getElementById("desc").value
  const img = document.getElementById("img").value
  const rank = document.getElementById("rank").value

  if(!validateForm(food, desc, img, rank))
    return

  const cards = document.getElementById("cards")
  const template = cards.children[0]

  const newCard = template.cloneNode(true)
  newCard.setAttribute("style", `display: flex; order: ${rank}`)

  const newCardChildren = newCard.children
  newCardChildren.item(0).setAttribute("src", img)
  newCardChildren.item(1).innerText = food
  newCardChildren.item(2).innerText = desc
  // newCardChildren.item(3).addEventListener("click", () => { delCard(newCard) })
  
  cards.appendChild(newCard)
}


const submit = document.getElementById("submit")
submit.addEventListener("click", submitForm)