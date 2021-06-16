import { FC, ReactNode } from "react";

interface SectionProps {
    children: ReactNode,
    height?: number;
    className?: string;
    width?: number;
};

const Section: FC<SectionProps> = (props) => {
    return (
        <section 
        {...props}
        style={{
            height: props.height,
            width: props.width
        }}>
            { props.children }
        </section>
    )
};

export default Section;