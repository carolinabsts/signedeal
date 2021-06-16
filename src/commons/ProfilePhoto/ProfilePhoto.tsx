import { Typography } from "@material-ui/core"
import { FC } from "react";
import './ProfilePhoto.css';

interface ProfilePhotoProps {
    fullName: string;
    description: string;
    img: string
};

const ProfilePhoto: FC<ProfilePhotoProps> = ({
    fullName,
    description,
    img
}) => {
    return (
        <div className="ProfilePhoto__container">
            <div className="ProfilePhoto__img">
                <img src={img} alt="img"/>
            </div>
            <Typography 
            variant="h6"
            className="ProfilePhoto__fullName">
                {fullName}
            </Typography>
            <Typography 
            className="ProfilePhoto__description">
                {description}
            </Typography>
        </div>
    )
};

export default ProfilePhoto;