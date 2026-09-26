import React, { useState } from "react";
import { RequestModal } from "../../components/RequestModal";
import { useT } from "../../Ctx";
import { getVacancies } from "../../data";
import { Line } from "../../ui/Line";
import { Link } from "../../ui/Link";
import { Video } from "../../ui/Video";
import { Container, Item } from "./style";

const RESUME_MAX_BYTES = Math.round(68.5 * 1024 * 1024);

export const VacanciesContent = () => {
    const t = useT();
    const data = getVacancies()
    const [vacancy, setVacancy] = useState("");
    const [formOpen, setFormOpen] = useState(false);
    return <Container>
        <Line/>
        <div className="hero">
            <Video data={ ["vac_banner"] } index={ 0 }/>
            <h1>{ t("vacancies") }</h1>
            <p>{ t("vacanciesLead") }</p>
        </div>
        <div className="content">
            { data.map((el, i) => <Item key={ i } pic={ el.images }>
                <h2>{ el.name }</h2>
                <div className="text">
                    <h3>{ t("conditions") }</h3>
                    <ul>
                        { el.conditions.map((item, j) => <li key={ j }>{ item }</li>) }
                    </ul>
                    <h3>{ t("responsibilities") }</h3>
                    <ul>
                        { el.responsibilities.map((item, j) => <li key={ j }>{ item }</li>) }
                    </ul>
                    <h3>{ t("requirements") }</h3>
                    <ul>
                        { el.requirements.map((item, j) => <li key={ j }>{ item }</li>) }
                    </ul>
                </div>
                <div className="other">
                    { el.payments && <div className={ "row" }>
                        <h4>
                            { t("payments") }
                            <span>{ el.payments.tooltip }</span>
                        </h4>
                        <p>{ el.payments.text }</p>
                    </div> }
                    { el.registration && <div className={ "row" }>
                        <h4>
                            { t("registration") }
                            <span>{ el.registration.tooltip }</span>
                        </h4>
                        <p>{ el.registration.text }</p>
                    </div> }
                </div>
                <div className="images">
                    <div className="img img1"/>
                    <div className="img img2"/>
                </div>
                <div className="links">
                    <h3>{ t("contact") }</h3>
                    <ul>
                        { el.links.map((item, j) => <li key={ j }>
                            <a target="_blank" href={ item.link }>
                                { item.title }
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8"
                                     fill="none">
                                    <path
                                        d="M10.3536 4.03715C10.5488 3.84189 10.5488 3.5253 10.3536 3.33004L7.17157 0.14806C6.97631 -0.0472023 6.65973 -0.0472023 6.46447 0.14806C6.2692 0.343322 6.2692 0.659904 6.46447 0.855167L9.29289 3.68359L6.46447 6.51202C6.2692 6.70728 6.2692 7.02387 6.46447 7.21913C6.65973 7.41439 6.97631 7.41439 7.17157 7.21913L10.3536 4.03715ZM0 3.68359V4.18359H10V3.68359V3.18359H0V3.68359Z"
                                        fill="#55532E"/>
                                </svg>
                            </a>
                        
                        </li>) }
                    </ul>
                </div>
                <Link
                    to=""
                    color="dark"
                    hover="dark"
                    onClick={(e) => {
                        e.preventDefault();
                        setVacancy(el.name);
                        setFormOpen(true);
                    }}
                >{ t("feedback") }</Link>
            </Item>) }
        </div>
        <RequestModal
            active={formOpen}
            onClose={() => setFormOpen(false)}
            title={ t("sendResume") }
            successMessage={ t("resumeSuccess") }
            source="vacancy"
            values={{ vacancy }}
            fields={[
                { name: "vacancy", label: t("vacancy"), readOnly: true },
                { name: "name", label: t("nameStar"), required: true },
                { name: "phone", label: t("phoneStar"), type: "tel", required: true },
                { name: "email", label: t("emailStar"), type: "email", required: true },
                { name: "city", label: t("city") },
                { name: "social", label: t("social") },
                { name: "message", label: t("message"), type: "textarea" },
            ]}
            file={{
                name: "resume",
                label: t("attachResume"),
                hint: t("resumeHint"),
                accept: "application/pdf,.pdf",
                maxSize: RESUME_MAX_BYTES,
            }}
        />
    </Container>
}