import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>MBTI 유형 검사하기</h1>
            <Link to="/Test">
                <button type="button">test</button>
            </Link>
        </div>
    );
}


export default Home;