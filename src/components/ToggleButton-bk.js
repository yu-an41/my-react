import { useState, useContext } from "react";
import ThemeContext, {themes} from '../contexts/ThemeContext' ;

export default function ToggleButton ({stateIndex, texts}) {
    // console.log({stateIndex});
    const [myIndex, setMyIndex] = useState(stateIndex);
    const  {name, setTheme} = useContext(ThemeContext);

     const classNames = ['btn'];
     classNames.push(myIndex === 0? 'btn-primary': 'btn-outline-primary');

     const myClick = ()=> {
        setMyIndex(myIndex ===0 ? 1: 0);
        setTheme(myIndex ===0 ? themes.light: themes.dark);
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
}