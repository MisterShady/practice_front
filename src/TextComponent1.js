import React, { useState, useEffect } from 'react';

const TextComponent1 = () => {
    const [dynamicInfo, setDynamicInfo] = useState('Загрузка...');

    useEffect(() => {
        setTimeout(() => {
            setDynamicInfo('Это некоторая динамическая информация');
        }, 2000); // Симуляция асинхронного запроса с задержкой в 2 секунды
    }, []);

    return (
        <div>
            <h1>Text Component 1</h1>
            <div className="dynamic-info">
                {dynamicInfo}
            </div>
        </div>
    );
};

export default TextComponent1;