
import DefaultLayout from "../components/layouts/defaultLayout/Index"


import Home from "../pages/Home";
import Market from "../pages/Market";
import Watch from "../pages/Watch";
import Group from "../pages/Group";
import Game from "../pages/Game";
import { ComponentType } from "react";
const router:{
    component:ComponentType
    path:string,
    layout?:any 
}[] =[
        {
            component:Home ,
            path:'/',
            layout:DefaultLayout
        },
        {
            component:Market,
            path:'/market',
            layout:DefaultLayout
        },
        {
            component:Watch ,
            path:'/watch',
            layout:DefaultLayout
        },{
            component:Group,
            path:'/group',
            layout:DefaultLayout

          
        },{
            component:Game ,
            path:'/game',
            layout:DefaultLayout

          
        }

]

export default router;