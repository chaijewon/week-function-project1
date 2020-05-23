import React,{useState,useEffect,useCallback,useMemo} from "react";
import axios from 'axios'
//Container


function App3() {
   return (
       <div className={"row"}>
        <H/>
        <SearchBar/>
        <div style={{"height":"30px"}}></div>
        <MusicTable/>
       </div>

   )
}

function MusicTable() {
   return (
       <table className={"table"}>
           <thead>
            <tr className={"danger"}>
                <th>순위</th>
                <th></th>
                <th>노래명</th>
                <th>가수명</th>
            </tr>
           </thead>
       </table>
   )
}

function MusicRow() {

}

function SearchBar() {
   // useCallback
    return (
        <table className={"table"}>
            <tr>
                <td>
                    <input type={"text"} size={"25"} className={"input-sm"}
                      placeholder={"Search"}
                    />
                </td>
            </tr>
        </table>
    )
}

const H=()=>{
  // memo
    return (
        <h1 className={"text-center"}>Music Top 50</h1>
    )
}
const H2=()=>{

}
