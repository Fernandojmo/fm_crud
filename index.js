// let Items = [
//     {
//     title: "muffin de chocolate",
//     type: "Postre",
//     difficulty:"Facil", 
//     description: "muffin de chocolate",
//     recypecontent: "cosas",
//     image: "https://images.unsplash.com/photo-1582898967731-b5834427fd66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     cod:0
//     },
// ]

// 

const Items = JSON.parse(localStorage.getItem("items"))

const listaArticulos = document.getElementById("recype-list")

const Codigo = JSON.parse(localStorage.getItem("codigo"))

function asignarcodigo(Codigo){
    Codigo=Codigo+1
    console.log(Codigo)
    localStorage.setItem("codigo", JSON.stringify(Codigo))
    return Codigo
}



pintarItems(Items)

function pintarItem(product) {
  const card = document.createElement("div")
  card.classList.add("recype-post")
  card.innerHTML = `
                    <div class="card-item marcoimg "><img class="card-img" src="${product.image}" alt="post-image"></div>
                    <div class="card-item card-title"><p>${product.title}</p></div>
                    <div class="card-item card-description"><p>${product.description}</p></div>
                    <div class="card-item card-type"><p>${product.type}</p></div>
                    <div class="card-item card-diffidculty"><p>${product.difficulty}</p></div>
                    <div class="card-item card-disp-btn"><button  class="card-btn editbtn">Editar receta</button></div>
                    <div class="card-item card-era-btn"><button onclick="borrarelemento(${product.cod})" class="card-btn erasebtn">Borrar receta</button></div>
                    `

  listaArticulos.appendChild(card)
}

function pintarItems(product) {
    listaArticulos.innerHTML = ""
    product.forEach(pintarItem)
  }

  const btnForm = document.querySelector("#summitaddform")


  btnForm.addEventListener("click", (e) => {
    e.preventDefault()
    const titleInput = document.querySelector("#title")
    const typeInput = document.querySelector("#type")
    const difficultyInput = document.querySelector("#difficulty")
    const descriptionInput = document.querySelector("#description")
    const recypecontentInput = document.querySelector("#recype-content")
    const imageInput = document.querySelector("#image")
    const cod= ""
    if (
        !titleInput.value ||
        !typeInput.value ||
        !difficultyInput.value ||
        !descriptionInput.value ||
        !recypecontentInput.value ||
        !imageInput.value
    ) {
      alert("Por favor rellenar todos los datos del formulario")
      return
    }
  
    Items.push({
      title: titleInput.value,
      type: typeInput.value,
      difficulty: difficultyInput.value,
      description: descriptionInput.value,
      recypecontent: recypecontentInput.value,
      image: imageInput,
      cod: asignarcodigo(Codigo)
    })
    

    titleInput.value="" 
    typeInput.value="" 
    difficultyInput.value="" 
    descriptionInput.value="" 
    recypecontentInput.value="" 
    imageInput.value=""
  
    pintarItems(Items)
    localStorage.setItem("items", JSON.stringify(Items))
  })

  console.log(Items)













// const btnerase = document.getElementById(".erasebtn")

// btnerase.addEventListener("click", (e) => {
//     e.preventDefault()
//     const productos = Items.filter((Item) => {
//       return Item.title.toLowerCase().includes(inputSearch.value.toLowerCase())
//     })
  
//     pintarItems(Items)
//   })






// let nombreaborrar = "Informatica1"

// console.log (nombreaborrar)

function borrarelemento (cod){
    for (let i =0; i<Items.length; i++){
        if(cod===Items[i].cod){
            Items.splice(i,1)
            pintarItems(Items)
            localStorage.setItem("items", JSON.stringify(Items))
            return
        }
    }
 
}
// borrarelemento(nombreaborrar)
// console.log(Items)




const btnSearch = document.getElementById("filterbtn")
const inputSearch = document.querySelector("#filter")

btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
  const productos = Items.filter((Item) => {
    return Item.title.toLowerCase().includes(inputSearch.value.toLowerCase())
  })

  pintarItems(productos)
})










//     // btnedit.addEventListener("click", (e) => { e.preventDefault()

//     //     let posts = JSON.parse(localStorage.getItem(items))
//     //     let formulario = document.getElementById("addform-box")
//     //     for (let i = 0; i<posts.lenght; i++ ){
//     //         if(posts[i].description === description){
//     //             console.log(i)
//     //             console.log($post.title)
//     //             document.getElementById("#addform-box").innerHTML=`
//     //             <h4 class="form-item-h4">Edita tu receta aqui</h4>
//     //             <input class="form-item form-item-title" type="text" name="title" placeholder="${posts[i].title}" id="title">
//     //             <input class="form-item form-item-type" type="text" name="type" placeholder="${posts[i].type}" id="type">
//     //             <input class="form-item form-item-difficulty" type="text" name="difficulty" placeholder="${posts[i].difficulty}" id="difficulty">
//     //             <input class="form-item form-item-description" type="text" name="description" placeholder="${posts[i].description}" id="description">
//     //             <input class="form-item form-item-recype" type="text" name="recype" placeholder="${posts[i].recypecontent}" id="recype-content">
//     //             <input class="form-item form-item-image" type="file" name="image" placeholder="${posts[i].image}" id="image" accept="image/*">
//     //             <button id="summitaddform" onclick="actualizar("${i}")">Actualizar</button>

//     //             `
                
//     //             formulario.appendChild(card)
//     //         }
//     //     }
//     // })
//     //         // let tituloP = items[1]
//     //         // let typep =items[2] 
//     //         // let difficultyp=items[3]
//     //         // let descriptionp=items[4]
//     //         // let recypecontentp=items[5]
//     //         // let imagep=items[6]

//     // // const btnedit = document.querySelector(".card-disp-btn")