
import './App.css';
import NhkEventForm1 from './components/NhkEventForm1';
import NhkEventForm2 from './components/NhkEventForm2';
import NhkEventForm3 from './components/NhkEventForm3';
import NhkEventForm4 from './components/NhkEventForm4';
import NhkEventForm5 from './components/NhkEventForm5';
import NhkEventForm6 from './components/NhkEventForm6';
import NhkRenderArray from './components/NhkRenderArray';
import NhkRenderCondition from './components/NhkRenderCondition';
import NhkRenderListObject from './components/NhkRenderListObject';

function NhkApp() {
 
  

      return (
        <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NhkEventForm1/>
          <NhkEventForm2/>
          <NhkEventForm3/>
          <NhkEventForm4/>
          <NhkEventForm5/>
          <NhkEventForm6/>
          <NhkRenderCondition/>
          <NhkRenderArray/>
          <NhkRenderListObject/>

         </div>
    
      
        
        
      
   
  );
}


export default NhkApp;
