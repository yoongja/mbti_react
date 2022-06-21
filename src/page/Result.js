import React from "react";
import { useLocation } from "react-router-dom";
import { ResultData } from "../data/resultdata";
import { useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    const {mbti} = location.state;
    console.log(mbti);
    const mbtiArr = ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ'];
    const idx = mbtiArr.indexOf(mbti); //result의 idx를 찾기위함
    console.log(idx);
    
    return(
        <>
            <h1>결과페이지입니다</h1>
            <h2>{ResultData[idx].title}</h2>
            <p>{ResultData[idx].desc}</p>
            <img src={ResultData[idx].img} alt={mbti}></img>
            <button onClick={() => navigate('/')}>테스트다시하기</button>
        </>
    );
}

export default Result;