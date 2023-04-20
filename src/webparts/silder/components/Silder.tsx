// import * as React from 'react';
// import './Silder.module.scss';
// import { ISilderProps } from './ISilderProps';
// // import { escape } from '@microsoft/sp-lodash-subset';
// import Slidercomponent from './Slidercomponent';
// import { getSP } from './pnpConfig';
// import { SPFI } from '@pnp/sp';
// import "@pnp/sp/profiles";
// import "@pnp/sp/webs";
// import "@pnp/sp/site-users/web";
// import { ICamlQuery } from "@pnp/sp/lists";
// const caml: ICamlQuery = {
//   ViewXml: "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
// };
// export default class Silder extends React.Component<ISilderProps, {}> {

//   public async getData():Promise<void>{
//     let _sp:SPFI  = getSP(this.context)
//     const list = await _sp.web.lists.getByTitle("ImagesList");
//     const r = await list.getItemsByCAMLQuery(caml);
  
//   // log resulting array to console
//   console.log(r);
//   }

//   public render(): React.ReactElement<ISilderProps> {
   
//     const {
//       // // description,
//       // // isDarkTheme,
//       // // environmentMessage,
//       // hasTeamsContext,
//       // // userDisplayName
//     } = this.props;
//     this.getData();
//     return (
      
//         <div><Slidercomponent/></div>
            
       
//     );
//   }
// }

import * as React from 'react'
// import { ISliderProps } from 'office-ui-fabric-react'
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getSP } from './pnpConfig';
import { SPFI } from '@pnp/sp';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { ICamlQuery } from "@pnp/sp/lists";
import { ISilderProps } from './ISilderProps';

const caml:ICamlQuery={
  ViewXml:"<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionTitle' /></Query></View>",
}

//const[data, setData] = React.useState<any>()
const Silder = async (props:ISilderProps) => {
//const [urls,setUrl] = React.useState<any>([])
let arr = new Array()
const[data,setData] = React.useState<any>()
const getData = async()=>{
  let _sp:SPFI  = getSP(props.context)
      const list = await _sp.web.lists.getByTitle("OpinionPoll");
       console.log(list)
      const r = await list.getItemsByCAMLQuery(caml);
      console.log(r);
      arr=r
      setData(arr)
      console.log(arr);
      
   
      r.map((x:any)=>{
        console.log(x.Title);
        let arr = x.Choices;
        arr.map((i:any)=>{
          console.log(i);
        })
      })

    
    // log resulting array to console

    
}

React.useEffect(()=>{
  getData()
},[])

// public async onSave(){
//   const currentUser:any= await this.Service.getCurrentUser(this.props.siteUrl);
//   console.log(currentUser);
//  let userobj= currentUser.Email
// }


      

  return (
  //   <Slide>
  //     {urls.map((x:any)=>{
  //    return(
  //     <div className='each-slide'>
  //     <img src={x} height="1500" width="1000"/>
  //  </div>
  //    )
  //     })}
  //   </Slide>
  
  // navItems.map((x:any)=>{ 
  //   return(
  //     renderSwitch(x)
  //   )
  <>

<div>
  {data&&data.map((x:any)=>{
    return(
      <p >{x.Title}<br/>{x.Choices.map((y:any)=>{return<p>{y}</p>})}</p>
    )
  
  })}
<div >
        <button>Vote</button>
      </div>
</div>
</>

  )
}

export default Silder