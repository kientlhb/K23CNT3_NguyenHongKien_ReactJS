import React from 'react'

export default function NhkJsxExpression() {
    const name="Nguyen Hong Kien";

    const user ={
         firstName :"kien",
         lastName : "Nguyen Hong",
    }
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName ;
    }
     const element =(
        <div>
             {/* bieu thuc jsx*/}
             <h2>{fullName(user)}</h2>
             <hr/>
             <h3> Welcome to,{name}</h3>        
        </div>
     );
     //ham
     const sayWelcome = (name)=>{
          if (name){
               return <h3> Welcome to {name}</h3>
          }else{
               return <h3>Welcome to Fit-NTU- K23CNT3</h3>
          }
     }
  return (
     
    <div>
         <h1> Nhk - JSX Expression</h1>
         {/* su dung element */}
         {element}
          <hr/>
          {sayWelcome()}
          <hr/>
          {sayWelcome("Trinh Van Chung")}
    </div>
  )
}
