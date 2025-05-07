const btnEl=document.getElementById("btn")
const bmiEl=document.getElementById("bmi-result")

const bmrEl=document.getElementById("bmr-result")
const weightconditionEl=document.getElementById("weight-condition")

const ageEl=document.getElementById("age")
const genderEl=document.getElementById("gender")




function CalculateBMI()
{
    const heightValue=document.getElementById("height").value/100
    const weightValue=document.getElementById("weight").value
    
    const ageValue=document.getElementById("age").value
    const genderValue=document.getElementById("gender").value
    
    
  

   const bmiValue=weightValue/(heightValue*heightValue)
    bmiEl.value=bmiValue
   
   const insValue=calculateins(bmiValue)
   const bmrValue1=BMR =(10*weightValue) + (6.25*heightValue*100) - (5*ageValue)+5
   const bmrValue2=BMR = (10*weightValue) + (6.25*heightValue*100) - (5*ageValue)-161
   if(genderValue=="male")
   {
    bmrEl.value=bmrValue1;
   }
   else
   {
    bmrEl.value=bmrValue2;

   }

  
   
     
     console.log(bmrValue1,bmrValue2);
    
 
   
   

   
     

}
function calculateins(bmiValue)
{
  if(bmiValue<18.5)
  {
     weightconditionEl.innerText="Under Weight"
  }
  else if(bmiValue>=18.5 && bmiValue<=24.9)
  {
    weightconditionEl.innerText="Normal Weight"
  
  }
  else if(bmiValue>=25 && bmiValue<=29.9)
  {

    weightconditionEl.innerText="Over Weight"
  
  }
  else
  {
    weightconditionEl.innerText="Obesity"
    

  }
  

}




btnEl.addEventListener("click",CalculateBMI)