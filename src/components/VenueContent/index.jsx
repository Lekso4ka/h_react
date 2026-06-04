import React from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../../data/venues";
import { Breadcrumbs } from "../Breadcrumbs";
import { Tour } from "../Tour";
import { Vector } from "../Vector";
import { Block, Content, Info, InfoItem, Options, Variant, Text, Images, Image, Formats } from "./style";

export const VenueContent = () => {
    const { id } = useParams();
    const data = getVenueById(id);
    
    return <Block>
        <Breadcrumbs data={ [
            { text: "Главная", link: "/" },
            { text: "Конференц-залы", link: "/events/venues" },
            { text: data.name }
        ] }/>
        <Content>
            <h1>{ data.name }</h1>
            <div className="center">
                <Info>
                    <InfoItem>
                        <h4>Площадь зала</h4>
                        <p>{ data.size }<span>м<sup>2</sup></span></p>
                    </InfoItem>
                    <InfoItem>
                        <h4>Вместимость человек</h4>
                        <p>{ data.guests }</p>
                    </InfoItem>
                    { data.variants.length > 0 && <InfoItem>
                        <h4>Варианты рассадки</h4>
                        <p>{ data.variants.length }</p>
                    </InfoItem> }
                </Info>
                { data.formats.length > 0 && <Formats>
                    <h3>Форматы мероприятий</h3>
                    <ul>
                        { data.formats.map((el, i) => <li key={ i }>
                            <span>{ i < 9 && 0 }{ i + 1 }</span>
                            <span className="text">{ el }</span>
                        </li>) }
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 29" fill="none">
                        <path
                            d="M120.521 28.5055C104.725 29.425 99.3439 24.8982 85.7851 17.3299C72.2263 9.69085 60.7642 9.125 57.8987 9.125H-8.91693H-221.734"
                            stroke="#55532E" strokeMiterlimit="10"/>
                        <path
                            d="M89.4219 28.5055C105.217 29.425 110.599 24.8982 124.158 17.3299C137.716 9.69085 149.178 9.125 152.044 9.125H218.929H431.747"
                            stroke="#55532E" strokeMiterlimit="10"/>
                        <path
                            d="M162.673 18.7444L160.367 20.0883C160.367 20.0883 158.549 20.5127 155.334 20.0883C152.05 19.664 119.061 12.0249 117.454 11.6005C115.846 11.1762 106.271 8.91274 106.76 4.17371C107.11 -0.636042 117.943 0.000543445 117.943 0.000543445L130.593 1.41518V1.76884L118.502 0.424934C118.502 0.424934 110.604 -0.423847 107.669 2.75908C105.502 5.09323 113.749 8.27615 115.497 8.62981L132.34 12.5908L149.114 16.6225C149.114 16.6225 154.146 17.9664 157.571 18.3201C160.926 18.6737 162.673 18.7444 162.673 18.7444Z"
                            fill="#55532E"/>
                        <path
                            d="M48.2578 18.7444L50.5642 20.0883C50.5642 20.0883 52.3814 20.5127 55.5963 20.0883C58.8812 19.664 91.8697 12.0249 93.4771 11.6005C95.0846 11.1762 104.66 8.91274 104.17 4.17371C103.821 -0.636042 92.9879 0.000543445 92.9879 0.000543445L80.3377 1.48591V1.83957L92.4288 0.424934C92.4288 0.424934 100.326 -0.423847 103.262 2.75908C105.428 5.09323 97.1814 8.27615 95.4341 8.62981C93.6868 9.0542 78.5904 12.5908 78.5904 12.5908L61.8166 16.6225C61.8166 16.6225 56.7845 17.9664 53.3598 18.3201C50.0051 18.6737 48.2578 18.7444 48.2578 18.7444Z"
                            fill="#55532E"/>
                    </svg>
                </Formats> }
                
                <div
                    className="plan"
                    dangerouslySetInnerHTML={ { __html: data.plan } }
                />
                <div>
                    { data.variants.map(v => <Variant key={ v.name }>
                        <h5>Вместимость</h5>
                        <h5>{ v.name }</h5>
                        <div className="digit">{ v.guests }</div>
                        <Vector name={ v.name }/>
                    </Variant>) }
                </div>
                <Options>
                    <h4>{ data.formats.length > 0
                        ? "Дополнительные возможности"
                        : "Оснащение зала" }</h4>
                    <ul>
                        { data.options.map(el => <li
                            key={ el }
                            dangerouslySetInnerHTML={ { __html: el } }
                        />) }
                    </ul>
                    {data.formats.length > 0 && <span>предоставим по запросу</span>}
                </Options>
            </div>
            <Images>
                <Tour dark link={ data.tour_link } pos style={ { top: 0, left: "-15.8rem" } }/>
                <Text>
                    { data.text.map((el, i) => <p key={ i }>{ el }</p>) }
                </Text>
                { data.images.map((el, i) => <Image key={ i } bg={ el }/>) }
            </Images>
            <a href="">Отправить запрос</a>
        </Content>
    </Block>
}