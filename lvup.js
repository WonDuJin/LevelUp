const root = document.getElementById("root")
const monster = document.getElementById("monster")
const button = document.getElementById("button")
const exp = document.getElementById("exp")

root.style.display = "flex"
root.style.justifyContent = "space-around"
root.style.alignItems = "center"
root.style.flexDirection =  "culumn"

button.style.width="300px";
button.style.height="500px";
button.style.backgroundColor = "#808080"

exp.style.width="300px";
exp.style.height="500px";
exp.style.fontSize = "50px"
exp.style.innerHTML = "Exp :"

monster.style.width="100px"
monster.style.height = "100px"
monster.style.backgroundColor = "red"



button.addEventListener("click",()=>{
  let count= 0
    setInterval(()=>{
    count ++
    for (let i = 0; i < 100; i++){
      console.log(count)      
      if(count === 10**i){        
        alert("Lv"+(i+1))
      }      
    }
  },100)
});



