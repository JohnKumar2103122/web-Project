// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase,set,ref,get,remove} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyIEEZXfVuNzuS6X1ufBX7f0gUlrM_xEw",
    authDomain: "crudapp-42df2.firebaseapp.com",
    projectId: "crudapp-42df2",
    storageBucket: "crudapp-42df2.firebasestorage.app",
    messagingSenderId: "56371569987",
    appId: "1:56371569987:web:355e607acb0fe188793bf6"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  const add_data=document.getElementById('add_data')
  const notification=document.getElementById('Notification')
  const update=document.getElementById('update_data')

  function AddStudent()
  {
   
     const name=document.getElementById('name').value
     const email=document.getElementById('email').value
     const number=document.getElementById('number').value
     set(ref(db,'student/' +number),{
      name:name,
      email:email,
      number:number
  

     })
     notification.innerText="Added Successfully";
       document.getElementById('name').value=""
       document.getElementById('email').value=""
       document.getElementById('number').value=""
     
       ReadData()


  }


  function ReadData()
  {
    const userRef=ref(db,'student/')
  
    get(userRef).then((snapshoot)=>{
    const data=snapshoot.val();
    const table=document.querySelector('table')
    let html='';
    for (const key in data)
    {
      const{name,email,number}=data[key];
      html +=
      ` <tr>
        <td> ${name}</td>
        <td> ${email}</td>
        <td> ${number}</td>
        <td><button class="del" onclick="deleteData('${number}')">Delete</button></td>
        <td><button class="up" onclick="updateData('${number}')">Update</button></td>
       
      </tr> `
    }
    
     table.innerHTML=html
    

    }
    )
  }
   

  
    ReadData()
    window.deleteData=function(number)
     {
      const userRef=ref(db,`student/${number}`)
      remove(userRef)
      notification.innerText="Delete successfully"
      ReadData()
   
    }
    window.updateData=function(number)
    {
      const userRef=ref(db,`student/${number}`)
      get(userRef).then((item)=>{
        document.getElementById('name').value=item.val().name;
        document.getElementById('email').value=item.val().email;
        document.getElementById('number').value=item.val().number;
       
        ReadData()
      
      })

    } 
  add_data.addEventListener('click',AddStudent)
 
    