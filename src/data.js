import React from "react";
import { useState } from "react";
import Result from "./Result";


function Data() {

    var [idx,setIdx] = useState(0); //idx를 넘겨주는 용도
    const endPoint = 3; //질문의 갯수
    function goNext() {
        console.log(idx);
        if(idx+1 === endPoint){
            console.log("넘어가자")
            return(endPoint);
        }
        else{
            setIdx(idx+1);
        }
    }
    //goNext에서 결과값을 반환하면
    
   const qna = [
    {q:'아무 생각하지 마',a:[{answer:'응 아무 생각 안할게',type:'S'},{answer:'아무 생각하지 말라고? 그럼 일단 백지를 상상하자',type:'N'}]},
    {q:'공부하기 싫을 때',a:[{answer:'범위가 줄었으면 좋겠다',type:'S'},{answer:'시험을 왜 봐야 하는 거지 시험이 없어지는 시대도 올까?',type:'N'}]},
    {q:'만약 내가 회사 팀장이라면',a:[{answer:'할 일을 구체적으로 지시해줘야 편함 ',type:'S'},{answer:'방향만 제시하고 맡겨줘야 편함',type:'N'}]},
    ];

    //dictionary는 key,value의 pair로 저장하여, 리스트에서 인덱스로 접근하는 거와 다르게 key의 값으로 접근하여, 원하는 값을 찾을때 빠르게 찾을 수 있다는 장점
    return( 
        <div>
            <p>{qna[idx].q}</p>
            <button onClick={goNext}>
                {qna[idx].a[0].answer}
            </button>
            <button onClick={goNext}>
                {qna[idx].a[1].answer}
            </button>
        </div>
    );
    //처음에는 0번째 질문이 나오고
    //button을 누르면 다음 질문으로 넘어가야함
    //setQna함수는 qna를 다음 질문으로 만드는 역할
    //마지막질문을 눌렀을때 result페이지로 넘어가야함
    //11개의 질문이 있을때,idx는10인것이 마지막
}

export default Data;