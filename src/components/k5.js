import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styled from 'styled-components';

export default function Example1(props) {
const Divv1  = styled.div`
display: flex ;
flex-direction : column;
:&hover: black;
`

    const {verilerName,verilerGender,verilerHeight,verilerMass,verilerBirthYear,verilerEyeColor,verilerHairColor,verilerSkinColor,verilerName1,verilerGender1,verilerHeight1,verilerMass1,verilerBirthYear1,verilerEyeColor1,verilerHairColor1,verilerSkinColor1,verilerName2,verilerGender2,verilerHeight2,verilerMass2,verilerBirthYear2,verilerEyeColor2,verilerHairColor2,verilerSkinColor2,verilerName3,verilerGender3,verilerHeight3,verilerMass3,verilerBirthYear3,verilerEyeColor3,verilerHairColor3,verilerSkinColor3,verilerName4,verilerGender4,verilerHeight4,verilerMass4,verilerBirthYear4,verilerEyeColor4,verilerHairColor4,verilerSkinColor4,verilerName5,verilerGender5,verilerHeight5,verilerMass5,verilerBirthYear5,verilerEyeColor5,verilerHairColor5,verilerSkinColor5}=props;
  return (
    <Accordion>
      <AccordionItem header={verilerName5}>
      <Divv1 >
            <p> gender:{verilerGender5}</p>
            <p>Height:{verilerHeight5}</p>
            <p> Mass:{verilerMass5}</p>
            <p>BirthYear:{verilerBirthYear5}</p>
            <p>Eye Color:{verilerEyeColor5} </p>
            <p> Hair Color:{verilerHairColor5}</p>
            <p>Skin Color:{verilerSkinColor5}</p>

      </Divv1>
      </AccordionItem>


    </Accordion>
  );
}