import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './Data';

function Test() {
    
  const [idx,setIdx] = useState(0); //문제질문 idx 넘겨주는 용도
  const [score,setScore] = useState(0); //score를 설정해주는 용도

  const endPoint = 3; //질문의 갯수
  const navigate = useNavigate();

  function goNext() {
      console.log(idx);
      if(endPoint !== idx + 1){
          setIdx(idx+1);
      }
      else{ //결과 페이지 이동
          navigate("/result");
      }
  }
  //goNext에서 결과값을 반환하면
  
  //dictionary는 key,value의 pair로 저장하여, 리스트에서 인덱스로 접근하는 거와 다르게 key의 값으로 접근하여, 원하는 값을 찾을때 빠르게 찾을 수 있다는 장점
  return( 
      <div>
          <p>{Data[idx].q}</p>
          <button onClick={goNext}>
              {Data[idx].a[0].answer}
          </button>
          <button onClick={goNext}>
              {Data[idx].a[1].answer}
          </button>
      </div>
  );
  //처음에는 0번째 질문이 나오고
  //button을 누르면 다음 질문으로 넘어가야함
  //setQna함수는 qna를 다음 질문으로 만드는 역할
  //마지막질문을 눌렀을때 result페이지로 넘어가야함
  //11개의 질문이 있을때,idx는10인것이 마지막
}

export default Test