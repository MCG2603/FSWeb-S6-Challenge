import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styled from 'styled-components';

export default function Example2(props) {
const Divv1  = styled.div`
display: flex ;
flex-direction : column;
:&hover: black;
`

    const {verilerName,verilerGender,verilerHeight,verilerMass,verilerBirthYear,verilerEyeColor,verilerHairColor,verilerSkinColor,verilerName1,verilerGender1,verilerHeight1,verilerMass1,verilerBirthYear1,verilerEyeColor1,verilerHairColor1,verilerSkinColor1,verilerName2,verilerGender2,verilerHeight2,verilerMass2,verilerBirthYear2,verilerEyeColor2,verilerHairColor2,verilerSkinColor2,verilerName3,verilerGender3,verilerHeight3,verilerMass3,verilerBirthYear3,verilerEyeColor3,verilerHairColor3,verilerSkinColor3,verilerName4,verilerGender4,verilerHeight4,verilerMass4,verilerBirthYear4,verilerEyeColor4,verilerHairColor4,verilerSkinColor4,verilerName5,verilerGender5,verilerHeight5,verilerMass5,verilerBirthYear5,verilerEyeColor5,verilerHairColor5,verilerSkinColor5}=props;
  return (
    <Accordion>
      <AccordionItem header={verilerName2}>
      <Divv1 >
            <p> gender:{verilerGender2}</p>
            <p>Height:{verilerHeight2}</p>
            <p> Mass:{verilerMass2}</p>
            <p>BirthYear:{verilerBirthYear2}</p>
            <p>Eye Color:{verilerEyeColor2} </p>
            <p> Hair Color:{verilerHairColor2}</p>
            <p>Skin Color:{verilerSkinColor2}</p>

      </Divv1>
      </AccordionItem>


    </Accordion>
  );
}