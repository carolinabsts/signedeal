import { FC, ReactNode } from 'react';
import './Marker.css';

interface MarkerProps {
    children: ReactNode
};

const Marker: FC<MarkerProps> = ({
    children
}) => {
    return (
        <label className="MarkerComponent__container">
            {children}
        </label>
    )
};

export default Marker;