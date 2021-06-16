import { FC, ReactNode } from "react";
import './Container.css';

interface ContainerProps {
    children: ReactNode
};

const Container: FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
        className="SignedealContainerComponent">
            { children }
        </div>
    )
};

export default Container;