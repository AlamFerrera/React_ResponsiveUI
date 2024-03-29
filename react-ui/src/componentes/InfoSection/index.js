import React from 'react';
import {Button} from '../buttonElement';
import { BtnWrap, 
    Column1, 
    Column2, 
    Heading, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine } from './infoElements';

function InfoSection({id,lightBg,imgStart, topLine,lighText,headLine,darkText,description,buttonLabel,img,alt, primary, dark, dark2}) {
    return (
        <>
            <InfoContainer lightBg={lightBg}>
                
                <InfoWrapper id={id}>
                    <InfoRow imgStart= {imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lighText={lighText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="/"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
