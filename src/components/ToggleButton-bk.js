import { useState} from "react";

export default function ToggleButton ({stateIndex, texts, handler}) {
    // console.log({stateIndex});
    const [myIndex, setMyIndex] = useState(stateIndex);

     const classNames = ['btn'];
     classNames.push(myIndex === 0? 'btn-primary': 'btn-outline-primary');

     const myClick = ()=> {
        const nextStatusIndex = myIndex === 0? 1: 0;
        setMyIndex(nextStatusIndex);
        handler(nextStatusIndex);
    };

    return (
        <>
            <button 
            type="button" 
            className={classNames.join(' ')}
            onClick={myClick}
            >
            {texts[myIndex]}</button>
        </>
    )
}
ToggleButton.defaultProps= {
    stateIndex: 0,
    texts: ['關', '開'],
    handler: (index) => {},
};