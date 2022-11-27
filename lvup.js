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
button.style.textAlign = "center"

exp.style.width="300px";
exp.style.height="500px";
exp.style.fontSize = "40px"


monster.style.width="200px"
monster.style.height = "200px"
monster.style.textAlign = "center"


//버튼을 클릭했을 시 이벤트 발생
// button.addEventListener("click",()=>{
//   let count= 0
  //일일히 클릭하는게 힘들어서 인터벌을 주었음
//     setInterval(()=>{
//     count ++
    //Lv이 100일때 
//     for (let i = 0; i <= 100; i++){
//       console.log(count)
      // 조건문으로 10의 제곱근을 추가하여 경험치를 구현      
//       if(count === 10**i){        
//         alert("Lv"+(i+1))
//       }      
//     }
//   },100)
// });



// 레벨업시 경험치를 초기화 되는 것을 구현하기위해 경험치 획득과 레벨업 획들을 구분해놨음
let count= 0
let maxexp = 1
let level = 1

// 경험치 증가
button.addEventListener("click",()=>{
  //일일히 클릭하는게 힘들어서 인터벌을 주었음
    setInterval(()=>{
      count ++
      console.log(count)
      //Lv이 100일때 
    },100)  
  })

// 레벨업
button.addEventListener("click",()=>{
  setInterval(()=>{
    if(count >= maxexp){
      console.log("레벨업")
      count = 0
      maxexp =  maxexp * 10
      level++
    }
    exp.innerText = "Exp : " + count + " / " + maxexp  + "\n Lv : " + level
  },100)
})

