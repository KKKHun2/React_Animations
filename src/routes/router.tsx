import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Basic from "../pages/Basic"
import  AnimatePre from "../components/AnimatePre";
import { BasicAM } from "../components//BasicAM";
import { GesturesAM } from "../components/GesturesAM";
import { VariantsAM } from "../components/VariantsAM";
import  ModalAM from "../components/ModalAM";
import MotionValuesY  from "../components/MotionValuesY";
import SliderAM  from "../components/SliderAM";
import  SVGAM  from "../components/SVGAM";
import NotFound from "../pages/NotFound";
import MotionValuesX from "../components/MotionValuesX";
import MoveAM from "../components/MoveAM"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Basic />
            
          },
      {
        path: "1",
        element: <AnimatePre/>
        
      },
      {
        path: "2",
      element: <BasicAM />
         
      },
      {
        path: "3",
        element: <GesturesAM />
      },
      {
        path: "4",
        element: <ModalAM />
      },
      {
        path: "5",
        element: <MotionValuesY />
      },
      {
        path: "6",
        element: <MotionValuesX />
      },
      {
        path: "7",
        element: <MoveAM />
      },
      {
        path: "8",
        element: <SliderAM />
      },
      {
        path: "9",
        element: <SVGAM />
      },
      {
        path: "10",
        element: <VariantsAM />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
