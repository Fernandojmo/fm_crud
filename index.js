
function cargarls(){
    if (JSON.parse(localStorage.getItem("codigo"))===null && JSON.parse(localStorage.getItem("items"))===null){
        const Codigo = 3
        localStorage.setItem("codigo", JSON.stringify(Codigo))
        const inicialItems =[
            {   title: "Muffin chips de chocolate",
                type: "Postre",
                difficulty: "Fácil",
                description: "Muffin de vainillas con chips de chocolate",
                // recypecontent: "",
                image: "https://images.unsplash.com/photo-1599394922679-1214f9ee16e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                cod: 0,
            },
            {   title: "Muffin relleno de chocolate",
                type: "Postre",
                difficulty: "Fácil",
                description: "muffin relleno con crema de chocolate",
                // recypecontent: "",
                image: "https://images.unsplash.com/photo-1609271873730-ed73bb15b9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                cod: 1,
            },
            {
                title: "Muffin de arandanos",
                type: "Postre",
                difficulty: "Fácil",
                description: "muffin relleno con arandanos",
                // recypecontent: "",
                image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
                cod: 2,
            },
        ]
        localStorage.setItem("items", JSON.stringify(inicialItems))
    }
}
cargarls()

const Items = JSON.parse(localStorage.getItem("items"))

const listaArticulos = document.getElementById("recype-list")

const addForm = document.getElementById("addform")

var Codigo = JSON.parse(localStorage.getItem("codigo"))

function asignarcodigo(){
    Codigo=Codigo+1
    console.log(Codigo)
    localStorage.setItem("codigo", JSON.stringify(Codigo))
    return Codigo
}


function pintaraddform(){
    const form = document.createElement("form")
    form.setAttribute("id","addform-box")
    form.innerHTML=`<h4 class="form-item-h4">Agrega tu receta aqui</h4>
                    <input class="form-item form-item-title" type="text" name="title" placeholder="Titulo" id="title">
                    <input class="form-item form-item-type" type="text" name="type" placeholder="Tipo de receta" id="type">
                    <input class="form-item form-item-difficulty" type="text" name="difficulty" placeholder="Dificultad" id="difficulty">
                    <input class="form-item form-item-description" type="text" name="description" placeholder="Descripción" id="description">
                    <!-- <input class="form-item form-item-recype" type="text" name="recype" placeholder="Receta" id="recype-content"> -->
                    <input class="form-item form-item-image" type="text" name="image" placeholder="Link imagen" id="image" accept="image/*">
                    <button id="summitaddform"onclick>Subir</button>`
    addForm.appendChild(form)
}

pintaraddform()


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
                    <div class="card-item card-disp-btn"><button onclick="editarelemento(${product.cod})" class="card-btn editbtn">Editar receta</button></div>
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
   console.log(e)
    e.preventDefault()
  
    const titleInput = document.querySelector("#title")
    const typeInput = document.querySelector("#type")
    const difficultyInput = document.querySelector("#difficulty")
    const descriptionInput = document.querySelector("#description")
    // const recypecontentInput = document.querySelector("#recype-content")
    const imageInput = document.querySelector("#image")
    const cod= ""
    if (
        !titleInput.value ||
        !typeInput.value ||
        !difficultyInput.value ||
        !descriptionInput.value ||
        // !recypecontentInput.value ||
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
    //   recypecontent: recypecontentInput.value,
      image: imageInput.value,
      cod: asignarcodigo()
    })
    

    titleInput.value="" 
    typeInput.value="" 
    difficultyInput.value="" 
    descriptionInput.value="" 
    // recypecontentInput.value="" 
    imageInput.value=""
  
    pintarItems(Items)
    localStorage.setItem("items", JSON.stringify(Items))
  })

console.log(Items)

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

const btnSearch = document.getElementById("filterbtn")
const inputSearch = document.querySelector("#filter")

btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
    const productos = Items.filter((Item) => {
    return Item.title.toLowerCase().includes(inputSearch.value.toLowerCase())
  })

  pintarItems(productos)
})


function editarelemento(cod){
    document.getElementById("addform-box").remove()
    for (let i =0; i<Items.length; i++){
        if(cod===Items[i].cod){
            const form2 = document.createElement("div")
            form2.setAttribute("id","addform-box")
            form2.innerHTML=`
                <h4 class="form-item-h4">Edita tu receta aqui</h4>
                <input class="form-item form-item-title" type="text" name="title" value="${Items[i].title}" placeholder="${Items[i].title}" id="edittitle">
                <input class="form-item form-item-type" type="text" name="type" value="${Items[i].type}" placeholder="${Items[i].type}" id="edittype">
                <input class="form-item form-item-difficulty" type="text" name="difficulty" value="${Items[i].difficulty}" placeholder="${Items[i].difficulty}" id="editdifficulty">
                <input class="form-item form-item-description" type="text" name="description" value="${Items[i].description}" placeholder="${Items[i].description}" id="editdescription">
                <!-- <input class="form-item form-item-recype" type="text" name="recype" value="${Items[i].recypecontent}" placeholder="${Items[i].recypecontent}" id="editrecype-content"> -->
                <input class="form-item form-item-image" type="text" name="image" value="${Items[i].image}" placeholder="${Items[i].image}" id="editimage" accept="image/*">
                <button id="summiteditform" onclick="Actualizar(${i},${cod})">Actualizar</button>
                `
            addForm.appendChild(form2)
        return  
        }
    }    
}

const codigo=""
const indexedit=""
function Actualizar(indexedit,codigo){

    const edittitleInput = document.querySelector("#edittitle")
    const edittypeInput = document.querySelector("#edittype")
    const editdifficultyInput = document.querySelector("#editdifficulty")
    const editdescriptionInput = document.querySelector("#editdescription")
    // const editrecypecontentInput = document.querySelector("#editrecype-content")
    const editimageInput = document.querySelector("#editimage")

    if (
        !edittitleInput.value ||
        !edittypeInput.value ||
        !editdifficultyInput.value ||
        !editdescriptionInput.value ||
        // !editrecypecontentInput.value ||
        !editimageInput.value
    ) {
      alert("Por favor rellenar todos los datos del formulario")
      return
    }


    Items.splice(indexedit,1,{
        title: edittitleInput.value,
        type: edittypeInput.value,
        difficulty: editdifficultyInput.value,
        description: editdescriptionInput.value,
        // recypecontent: editrecypecontentInput.value,
        image: editimageInput.value,
        cod: codigo
      }
    );

    pintarItems(Items)
    localStorage.setItem("items", JSON.stringify(Items))
    document.getElementById("addform-box").remove()
    pintaraddform()
    return
}


