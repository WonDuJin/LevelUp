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


//버튼을 클릭했을 시 이벤트 발생
button.addEventListener("click",()=>{
  let count= 0
  //일일히 클릭하는게 힘들어서 인터벌을 주었음
    setInterval(()=>{
    count ++
    //Lv이 100일때 
    for (let i = 0; i <= 100; i++){
      console.log(count)
      // 조건문으로 10의 제곱근을 추가하여 경험치를 구현      
      if(count === 10**i){        
        alert("Lv"+(i+1))
      }      
    }
  },100)
});



