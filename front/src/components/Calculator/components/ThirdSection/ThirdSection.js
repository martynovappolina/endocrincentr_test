import { useState } from 'react';
import './ThirdSection.css';

const ThirdSection = ({conclusion}) => {
    const [dosage, setDosage] = useState(1);
    const [text, setText] = useState('')

    const onGetModeClick = () => {
        if(conclusion === 1 || conclusion === 2) {
            if (dosage==1) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (100 капель) 1 раз в неделю - 8 недель</li>
                        <li>25 000 МЕ (50 капель) 2 раза в неделю - 8 недель</li>
                        <li>7000 МЕ (14 капель) 1 раз в сутки - 8 недель</li>
                    </ul>
                )
            } else if (dosage==2) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (50 капсул) 1 раз в неделю - 8 недель</li>
                        <li>25 000 МЕ (25 капсул) 2 раза в неделю - 8 недель</li>
                        <li>7000 МЕ (7 капсул) 1 раз в сутки - 8 недель</li>
                    </ul>
                ) 
            } else if (dosage==3) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>8 000 МЕ (2 капсулы) 1 раз в сутки - 8 недель</li>
                    </ul>
                ) 
            } else if (dosage==4) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (5 капсул) 1 раз в неделю - 8 недель</li>
                    </ul>
                ) 
            }
        } else if(conclusion === 3) {
            if (dosage==1) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (100 капель) 1 раз в неделю - 4 недели</li>
                        <li>25 000 МЕ (50 капель) 2 раза в неделю - 4 недели</li>
                        <li>7000 МЕ (14 капель) 1 раз в сутки - 4 недели</li>
                    </ul>
                )
            } else if (dosage==2) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (50 капсул) 1 раз в неделю - 4 недели</li>
                        <li>25 000 МЕ (25 капсул) 2 раза в неделю - 4 недели</li>
                        <li>7000 МЕ (7 капсул) 1 раз в сутки - 4 недели</li>
                    </ul>
                ) 
            } else if (dosage==3) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>8 000 МЕ (2 капсулы) 1 раз в сутки - 4 недели</li>
                    </ul>
                ) 
            } else if (dosage==4) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>50 000 МЕ (5 капсул) 1 раз в неделю - 4 недели</li>
                    </ul>
                ) 
            }
        } else if(conclusion === 4) {
            if (dosage==1) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>1500-2000 МЕ (3-4 капли) 1 раз в сутки</li>
                        <li>10 000-14 000 МЕ (21-28 капель) 1 раз в неделю</li>
                    </ul>
                )
            } else if (dosage==2) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>2000 МЕ (2 капсулы) 1 раз в сутки</li>
                        <li>10 000-14 000 МЕ (10-14 капсул) 1 раз в неделю</li>
                    </ul>
                ) 
            } else if (dosage==3) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>12 000 МЕ (3 капсулы) 1 раз в неделю</li>
                    </ul>
                ) 
            } else if (dosage==4) {
                setText(
                    <ul>
                        Варианты приема: <br /> <br />
                        <li>10 000 МЕ (1 капсула) 1 раз в неделю</li>
                    </ul>
                ) 
            }
        }
    }

    return <div className='third-section'>
        {   conclusion !== 0 && conclusion !==5 && typeof conclusion !== 'undefined' &&
            <>
                <div className='section-title'>
                    Выберите дозировку колекальциферола
                </div>

                <select 
                className='custom-select'
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                >
                    <option value={1}>500 МЕ (12,5 мкг)</option>
                    <option value={2}>1000 МЕ (25 мкг)</option>
                    <option value={3}>4000 МЕ (100 мкг)</option>
                    <option value={4}>10 000 МЕ (250 мкг)</option>
                </select>

                <button 
                onClick={onGetModeClick}
                className='third-section-button calculator-button'>
                    Получить варианты режимов дозирования
                </button>

                <div className='third-section-text'>
                    {text}
                </div>
            </>
        }
    </div>
};

export default ThirdSection;
