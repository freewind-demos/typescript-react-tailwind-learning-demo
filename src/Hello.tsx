import React, {FC} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <div className='border-2 border-yellow-300 rounded'>Hello React</div>
    </div>;
}
