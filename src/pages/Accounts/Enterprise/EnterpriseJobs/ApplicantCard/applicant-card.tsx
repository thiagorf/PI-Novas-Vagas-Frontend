import { RiFileLine } from "react-icons/ri";
import { Applicants } from "../types";
import "./style.css";

export const ApplicantCard = ({ curriculum, photo, user }: Applicants) => {
    return (
        <div className="applicant-card-wrapper">
            <div className="applicant-card-photo">
                <img src={photo} />
            </div>
            <div className="applicant-card-content">
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
                <a href={curriculum} target="_blank" rel="noopener noreferrer">
                    <RiFileLine />
                </a>
            </div>
        </div>
    );
};
