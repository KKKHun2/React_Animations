import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color:#1a7dce
`;

const LeftArrow = styled(AiOutlineArrowLeft)`
   display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(102, 109, 244, 0.1);
    border-radius: 100px;
    height:100px;
    width:100px;
    color: rgba(255, 255, 255, 0.5);
    margin: 50px;
    cursor:pointer;
`;
const RightArrow = styled(AiOutlineArrowRight)`
display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(102, 109, 244, 0.1);
    border-radius: 100px;
    height:100px;
    width:100px;
    color: rgba(255, 255, 255, 0.5);
    margin: 50px;
    cursor:pointer;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: #6ca8e17f;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
    entry:(isBack:boolean) =>({
        x:isBack ? - 500 :500,
        opacity:0,
        scale:0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
        },
  },
  exit: (isBack:boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3 } }),
};


function Basic() {
  const [visible, setVisible] = useState(1);
  const [back,setBack] = useState(false);
  const nextPlease = () => {
    setBack(false) 
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));}
  const prevPlease = () => {
    setBack(true)
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));}
   const explan= [
   {key:1, text:"어쩌고1"},
   {key:2, text:"어쩌고2"},
   {key:3, text:"어쩌고2"},
   {key:4, text:"어쩌고2"},
   {key:5, text:"어쩌고2"},
   {key:6, text:"어쩌고2"},
   {key:7, text:"어쩌고2"},
   {key:8, text:"어쩌고2"},
   {key:9, text:"어쩌고2"},
   {key:10, text:"어쩌고2"},
]
  return (
    <Wrapper>
        <LeftArrow onClick={prevPlease}/>
      <AnimatePresence>
        visible ? (
            <Link to={`${visible}`}>
            <Box
              custom={back}
              variants={box}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              {explan.map((item, index)=> (
                item.text
              )
              )}

            </Box>
            </Link>
          ) : null
        
      </AnimatePresence>
      <RightArrow onClick={nextPlease} />
    </Wrapper>
  );
}
export default Basic;
