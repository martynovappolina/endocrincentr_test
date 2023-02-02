import './FirstSection.css';
import { useState } from "react";

const FirstSection = ({
    setConclusion, 
    conclusionText
    }) => {

    const [concentration, setConcentration] = useState(0);
    const [concentrationUnit, setConcentrationUnit] = useState(1);
    
    const onConclusionClick = () => {
        if(concentrationUnit==0 || typeof concentration==='undefined' 
        || typeof concentration=='' || concentration==0) {
            setConclusion(0);
        } else if(concentration<10 && concentrationUnit==1 || concentration<25 && concentrationUnit==2) {
            setConclusion(1);
        } else if(concentration>=10 && concentration<20 && concentrationUnit==1 
            || concentration>=25 && concentration<50 && concentrationUnit==2) {
            setConclusion(2);
        } else if(concentration>=20 && concentration<30 && concentrationUnit==1 
            || concentration>=50 && concentration<75 && concentrationUnit==2) {
            setConclusion(3);
        } else if(concentration>=30 && concentration<100 && concentrationUnit==1 
            || concentration>=75 && concentration<250 && concentrationUnit==2) {
            setConclusion(4);
        } else setConclusion(5)
    }

    return <div className='first-section'>
        <div className='section-title'>
            Введите сывороточную концентрации 25(OH) витамина D
        </div>

        <input 
        className='custom-input' 
        type='number'
        value={concentration}
        onChange={(e) => setConcentration(e.target.value)}
        />

        <select 
        className='custom-select'
        id='select-concentration'
        required={false}
        value={concentrationUnit}
        onChange={(e) => setConcentrationUnit(e.target.value)}
        >
            <option value={1}>нг/мл</option>
            <option value={2}>нмоль/л</option>
        </select>

        <button 
        onClick={onConclusionClick}
        className='calculator-button'>
            Получить заключение
        </button>

        <div className='first-section-conclusion'>
            {conclusionText}
        </div>
    </div>;
};

export default FirstSection; 