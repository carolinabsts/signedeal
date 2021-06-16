import { FC } from 'react';
import './LittleParagraph.css';

interface LittleParagraphProps {
    title?: string;
    paragraph?: string[];
}

const LittleParagraph: FC<LittleParagraphProps> = ({
    title,
    paragraph
}) => {
    return (
        <div className="LittleParagraph__container">
            { title && <h4>{title}</h4> }
            <p>
                <ul>
                   { paragraph &&
                   paragraph.map(p => 
                    <li key={p}>{p}</li>
                    )}
                </ul>
            </p>
        </div>
    )
};

export default LittleParagraph;