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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
import * as React from 'react';
// import { ISliderProps } from 'office-ui-fabric-react'
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { getSP } from './pnpConfig';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
var caml = {
    ViewXml: "<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionTitle' /></Query></View>",
};
//const[data, setData] = React.useState<any>()
var Silder = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var arr, _a, data, setData, getData;
    return __generator(this, function (_b) {
        arr = new Array();
        _a = React.useState(), data = _a[0], setData = _a[1];
        getData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _sp, list, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _sp = getSP(props.context);
                        return [4 /*yield*/, _sp.web.lists.getByTitle("OpinionPoll")];
                    case 1:
                        list = _a.sent();
                        console.log(list);
                        return [4 /*yield*/, list.getItemsByCAMLQuery(caml)];
                    case 2:
                        r = _a.sent();
                        console.log(r);
                        arr = r;
                        setData(arr);
                        console.log(arr);
                        r.map(function (x) {
                            console.log(x.Title);
                            var arr = x.Choices;
                            arr.map(function (i) {
                                console.log(i);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        React.useEffect(function () {
            getData();
        }, []);
        // public async onSave(){
        //   const currentUser:any= await this.Service.getCurrentUser(this.props.siteUrl);
        //   console.log(currentUser);
        //  let userobj= currentUser.Email
        // }
        return [2 /*return*/, (
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
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    data && data.map(function (x) {
                        return (React.createElement("p", null,
                            x.Title,
                            React.createElement("br", null),
                            x.Choices.map(function (y) { return React.createElement("p", null, y); })));
                    }),
                    React.createElement("div", null,
                        React.createElement("button", null, "Vote")))))];
    });
}); };
export default Silder;
//# sourceMappingURL=Silder.js.map