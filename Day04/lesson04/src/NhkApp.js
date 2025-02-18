import './NhkApp';
import NhkClassComp from './components/NhkClassComp';
import NhkFuncComp from './components/NhkFuncComp';
import NhkFuncComp1 from './components/NhkFuncComp1';

function NhkApp() {
  //Object
  const user = {
    fullname:'Nguyen Hong Kien',
    age: 19,
    Phone:"0946892616"
  }
  return (
    <div className="container bodeer">
      <h1>Demo Component - props -state</h1>
      <hr/>
      <div className='alert alert-dager'>
        <NhkFuncComp name='Nguyen kien' address='18 tay ho' company='Kienmaster'/>
        <hr/>
        <NhkFuncComp name='Duong' address='220 hai ba chung' company='em iu'/>
      </div>
      <div className='alert alert-info'>
         <NhkFuncComp1 renderInfo={user}/>
      </div>
      <NhkClassComp />
      {/* chuyen du lieu */}
      <NhkClassComp renderName="K23CNT3" renderUser={user} />
    </div>
  );
}

export default NhkApp;
