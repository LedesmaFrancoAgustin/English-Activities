// Body
const bntABody = document.getElementById("bntA-Body")
const bntAnBody = document.getElementById(`bntAn-Body`)
const spanBody = document.getElementById(`spanBody`)

bntABody.addEventListener('click',() => {spanBody.innerHTML = "Correcto";bntABody.style.color = "white"; bntABody.style.backgroundColor = "green";bntABody.style.scale = "1.2";bntAnBody.style.display = "none"}
)
bntAnBody.addEventListener('click',() => {spanBody.innerHTML = "Incorrecto";bntAnBody.style.color = "white"; bntAnBody.style.backgroundColor = "red";})

//Apple ----------------------------------------------------------------------
const bntAApple = document.getElementById("bntA-Apple")
const bntAnApple = document.getElementById(`bntAn-Apple`)
const spanApple = document.getElementById(`spanApple`)

bntAApple.addEventListener('click',() => {spanApple.innerHTML = "Incorrecto";bntAApple.style.color = "white"; bntAApple.style.backgroundColor = "red";}
)
bntAnApple.addEventListener('click',() => {spanApple.innerHTML = "Correcto";bntAnApple.style.color = "white"; bntAnApple.style.backgroundColor = "green";bntAnApple.style.scale = "1.2";bntAApple.style.display = "none"})

//Tree ----------------------------------------------------------------------
const bntATree = document.getElementById("bntA-Tree")
const bntAnTree = document.getElementById(`bntAn-Tree`)
const spanTree = document.getElementById(`spanTree`)

bntATree.addEventListener('click',() => {spanTree.innerHTML = "Correcto";bntATree.style.color = "white"; bntATree.style.backgroundColor = "green";bntATree.style.scale = "1.2";bntAnTree.style.display = "none"}
)
bntAnTree.addEventListener('click',() => {spanTree.innerHTML = "Incorrecto";bntAnTree.style.color = "white"; bntAnTree.style.backgroundColor = "red";})

//Boy ----------------------------------------------------------------------
const bntAEgg = document.getElementById("bntA-Egg")
const bntAnEgg = document.getElementById(`bntAn-Egg`)
const spanEgg = document.getElementById(`spanEgg`)

bntAEgg.addEventListener('click',() => {spanEgg.innerHTML = "Correcto";bntAEgg.style.color = "white"; bntAEgg.style.backgroundColor = "green";bntAEgg.style.scale = "1.2";bntAnEgg.style.display = "none"}
)
bntAnEgg.addEventListener('click',() => {spanEgg.innerHTML = "Incorrecto";bntAnEgg.style.color = "white"; bntAnEgg.style.backgroundColor = "red";})