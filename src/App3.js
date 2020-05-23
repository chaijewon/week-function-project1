import React,{useState,useEffect,useCallback,useMemo} from "react";
import axios from 'axios'
//Container


function App3() {
   // 변수 설정
    const [music,setMusic]=useState([]);
    const [ss,setSs]=useState("");
    // 변수 초기값
    useEffect(()=>{
        axios.get('http://localhost:3000/music.json').then((res)=>{
            setMusic(res.data)
        })
    },[])// mount할때만 실행 => componentDidMount,componentDidUpdate
   return (
       <div className={"row"}>
        <H/>
        <SearchBar/>
        <div style={{"height":"30px"}}></div>
        <MusicTable music={music} ss={ss}/>
       </div>

   )
}
/*
      var s="abcdefg";
             0123456
      var n=s.indexOf("k"); ==> -1
      n=0
 */
function MusicTable(props) {
    let row=[];
    props.music.forEach((m)=>{
        if(m.title.indexOf(props.ss)==-1)
        {
            return;
        }
        // 배열에 추가
        row.push(<MusicRow music={m}/>);
    })
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
           <tbody>
           {row}
           </tbody>
       </table>
   )
}

function MusicRow(props) {
    return (
        <tr>
            <td>{props.music.rank}</td>
            <td><img src={props.music.poster} width={"30"} height={"30"}/> </td>
            <td>{props.music.title}</td>
            <td>{props.music.singer}</td>
        </tr>
    )
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

export default App3;
