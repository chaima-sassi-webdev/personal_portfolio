import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import certif1 from "../assets/img/certif1.PNG";
import certif2 from "../assets/img/certif2.PNG";
import "../App.css";

export const Certification = () => {
    return (
        <>
            <div style={{paddingTop: "27px"} }>
                <h1 align="center">Certifications</h1>
                <MDBCarousel showIndicators showControls fade style={{ margin: "15px" }}>
                    <MDBCarouselItem style={{ width: "50%", height:"390px", marginLeft: "25%" }} itemId={1} src={certif1} alt="...">
                    </MDBCarouselItem>
                    <MDBCarouselItem style={{ width: "50%", height: "390px", marginLeft: "25%" }} itemId={2} src={certif2} alt="...">
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </>
    );
};
