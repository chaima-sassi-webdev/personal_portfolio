import React, { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import local from "../assets/img/adresse.png";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState("");
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            onValidated({ EMAIL: email });
        }
    };

    const clearFields = () => {
        setEmail("");
    };

    const Circle = ({ backgroundImage }) => {
        const [transformStyle, setTransformStyle] = useState("none");

        const circleStyle = {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundColor: "linear-gradient(90.21deg, #e3dac9  -5.91%, #4A2FBD 111.58%)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "6px solid #c71585",
            padding: "33px",
            marginRight: "95px",
            marginLeft: "25px",
            cursor: "pointer",
            color: "black",
            transition: "transform 0.3s ease",
            transform: transformStyle,
        };

        const handleMouseEnter = () => {
            setTransformStyle("translateZ(100px)");
        };

        const handleMouseLeave = () => {
            setTransformStyle("none");
        };

        return (
            <div
                style={circleStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>
        );
    };

    return (
        <Col lg={8} style={{ marginLeft: "185px" }}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "55px" }}>
                        <div>
                            <Circle backgroundImage={local} />
                            <p style={{ color: "gray", marginLeft: "18px" }}>01 rue Yassmine, <br /> Zeramdine</p>
                        </div>
                        <div>
                            <Circle backgroundImage={phone} />
                            <p style={{ color: "gray" }}> (+216) 56 254 878 </p><br />
                        </div>
                        <div>
                            <Circle backgroundImage={mail} />
                            <p style={{ color: "gray" }}>chaiyma.sassi@outlook.fr</p><br />
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
