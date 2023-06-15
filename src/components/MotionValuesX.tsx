import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#7f8fa6;
`;
const Title = styled.div`
display: flex;
margin-top: 50px;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValuesX() {
  
  const x = useMotionValue(0);
  /*
  useEffect(()=>{
    x.onChange(()=> console.log(x.get()))
  },[x])
  */
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
 
  return (
    <>
    <Title> X축 퍼센트로 상자 위치 이동</Title>
    <Wrapper>
      {/* <button onClick={()=> x.set(200)}>Click ME</button> 마우스로 x위치 설정 */}
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
    </>
    
  );
}
export default MotionValuesX;