import { useState } from 'react';
import './SecondSection.css';

const SecondSection = () => {

    const [mkg, setMkg] = useState(0);
    const [ME, setME] = useState();

    return <div className='second-section'>
        <div className='section-title'>
            При необходимости введите дозировку колекальциферола в мкг для перерасчета в МЕ
        </div>

        <div style={{marginBottom: '15px'}}>
            <div className='second-section-input-container'>
                <input 
                className='second-section custom-input' 
                type='number'
                value={mkg}
                onChange={(e) => setMkg(e.target.value)}
                />
                <div className='second-section-input-unit'>
                    мкг
                </div>
            </div>

            {
                typeof ME !== 'undefined' &&
                <div className='second-section-input-container'>
                <input 
                className='second-section custom-input' 
                type='number'
                value={ME}
                />
                    <div className='second-section-input-unit'>
                        ME
                    </div>
                </div>
            }
        </div>

        <button 
        onClick={() => {
            if(mkg!=='') setME(mkg*40);
        }}
        className='calculator-button'>
            Перевести мкг в МЕ
        </button>

    </div>
};

export default SecondSection;
