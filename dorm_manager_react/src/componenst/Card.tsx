import React, {FC, ReactNode} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: ReactNode;
    // variant: CardVariant;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
        //  variant,
         children
     }) => {
    // const [state, setState] = useState(0);
        return (
            <div style={{width, height, border: '1px solid gray', background: 'lightgray'}}
            >
                {children}
            </div>
        );
    };

export default Card;
