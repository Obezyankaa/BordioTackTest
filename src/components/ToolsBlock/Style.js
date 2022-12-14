/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import img from './img/ico_union1.svg';
import img2 from './img/ico_calendar2.svg';
import img3 from './img/ico_tasks3.svg';
import img4 from './img/ico_notes4.svg';
import img5 from './img/ico_files5.svg';

export const ToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 154px;
    position: absolute;
    left: 220px;
    top: 0px;
    bottom: 0px;
    background: rgb(245, 248, 250);
    
`;

export const ToolsHeading = styled.div`
    position: relative;
    top: 25px;
    font-size: 25px;
    color: rgb(34, 34, 34);    
    font-weight: 400;
    transform: translateX(16px) scale(0.8) translateZ(0px);
    transform-origin: 0% 0% 0px;
`;

export const BlockTest = styled.div`
    position: relative;
    top: 50px;
    display: block;
`;

export const ToolsSelectBlock = styled.div`
&{
   display: flex;
    align-items: end;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px 8px 8px 0px;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    height: 51px;
    /* overflow: hidden; */
    margin-right: 10px;
    color: #222222;
}
&:hover {
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 4px;
    background: rgb(0, 148, 255);
    color: rgb(0, 148, 255);
} 
&:active {
    background-color: white;
}
`;

export const ToolsSelectIcon = styled.div`
&{
    width: 35px;
    height: 35px;
    flex: 0 0 auto;
    margin-left: 18px;
    background: url(${img}) no-repeat;
    background-position: center;
    fill:inherit;
    stroke:inherit;
    stroke-width:inherit;
} 
&:hover {
    /* background-color: red; */
    fill:#222222;
}  
`;

export const ToolsSelectIconTwo = styled(ToolsSelectIcon)`
    background: url(${img2}) no-repeat;
    background-position: center;
`;
export const ToolsSelectIconThree = styled(ToolsSelectIcon)`
    background: url(${img3}) no-repeat;
    background-position: center;
`;
export const ToolsSelectIconFour = styled(ToolsSelectIcon)`
    background: url(${img4}) no-repeat;
    background-position: center;
`;
export const ToolsSelectIconFive = styled(ToolsSelectIcon)`
    background: url(${img5}) no-repeat;
    background-position: center;
`;

export const ToolsSelectText = styled.div`
    &{
        flex: 1 1 auto;
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        font-size: 14px;
        letter-spacing: 0px;
        line-height: 47px;
    }
`;
