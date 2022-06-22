import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Home() {
    return(
        <Wrapper>
            <div>
            <Link to="/Test">
                <Button>
                    MBTI 유형 검사하기
                    {/*<button type="button">MBTI 유형 검사하기</button>*/}
                </Button>
            </Link>
        </div>
        </Wrapper>
        
    );
}

const Wrapper = styled.div`
	background-color: #F7E40F;
	height: 100vh;//전체다
	width : 100%;
    display:flex;
    justify-content:center;//밑에 감싸준 요소 좌우 가운데
    align-items:center;//상하 가운데
`

const Button = styled.button`
    display:inline-block;
    justify-content:center;
    align-items: center;//text-align :center일 경우 위에만
    position:relative;//부모 요소와 정렬
    outline: none;
    border: none;//안예뻐서 모두 삭제
    border-radius: 5px;
    color: black; //폰트컬러
    font-weight: bold;
    cursor: pointer;//위에 올리면 마우스 포인터 모양
    height: 10rem;
    width: 50rem;
    font-size: 2rem;
    background-color:white;
    font-family:ongle;
`

export default Home;