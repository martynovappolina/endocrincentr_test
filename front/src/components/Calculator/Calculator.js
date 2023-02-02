import { useEffect, useState } from 'react';
import './Calculator.css';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';

const Calculator = () => {

    const [conclusion, setConclusion] = useState();
    const [conclusionText, setConclusionText] = useState('');

    const conclusions = [
        'Недостаточное количество данных',
        'Выраженный дефицит витамина D. Рекомендуется насыщающая доза колекальциферола 400 000 МЕ в течение 8 недель',
        'Дефицит витамина D. Рекомендуется насыщающая доза колекальциферола 400 000 МЕ в течение 8 недель',
        'Недостаточность витамина D. Рекомендуется насыщающая доза колекальциферола 200 000 МЕ в течение 4 недель',
        'Нормальный уровень витамина D. Рекомендуется поддерживающая доза колекальциферола 1500- 2000 МЕ в сутки',
        'Вероятно проявление токсического эффекта витамина D. Необходимо исследование уровня кальция в крови для исключения гиперкальциемии'
    ]

    useEffect(() => {
        setConclusionText(conclusions[conclusion])
    }, [conclusion])

    console.log(conclusion)
    
    return <div className='container'>
        <div className='calculator-title'>
            Калькулятор для расчета режимов дозирования различных 
            форм препаратов нативного витамина D (колекальциферол) 
            в зависимости от сывороточной концентрации 25(OH) витамина D
        </div>

        <FirstSection 
        setConclusion={setConclusion}
        conclusionText={conclusionText}/>
        
        <SecondSection />
    </div>
};

export default Calculator;