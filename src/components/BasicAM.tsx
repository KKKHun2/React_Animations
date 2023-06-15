import styled from 'styled-components'
import {motion} from "framer-motion"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100,0,3,0.5);
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const myVars = {
    start: { scale: 0 },
    end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.3 } },
  };

export const BasicAM = () => {
  return (
   <Wrapper>
     <Box variants={myVars} initial="start" animate="end">
        나올떄 Z축으로 회전~
    </Box>
  </Wrapper>
  )
}
