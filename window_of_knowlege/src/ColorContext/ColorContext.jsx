import React, { createContext, useContext, useState, useEffect } from 'react';

// Контекст для цветов
const ColorContext = createContext();

// Провайдер контекста
export const ColorProvider = ({ children }) => {
    // Используем функцию для инициализации состояния, чтобы при загрузке брать данные из localStorage
    const [colors, setColors] = useState(() => {
        const savedColors = JSON.parse(localStorage.getItem('chatColors'));
        return savedColors || {
            backgroundColorSite: '#c3bbbb',
            backgroundColor: '#f9f9f9',
            messageAreaBg: '#ffffff',
            messageShadow: 'rgba(0, 0, 0, 0.1)',
            clientBubbleBg: '#007bff',
            clientBubbleText: '#fff',
            supportBubbleBg: '#e5e5e5',
            supportBubbleText: '#000',
            inputBorder: '#ccc',
            buttonBg: '#007bff',
            buttonBgHover: '#0056b3',
            fontFamily: 'Arial, sans-serif',
            buttonHeight: '5vh',
            buttonWidth: '5vw',
            buttonMargin: '10px',
            chatPrewHeight: '55vh',
            chatPrewWidth: '30vw',
        };
    });

    // Применение цветов в :root
    const applyColors = (colors) => {
        Object.keys(colors).forEach((key) => {
            document.documentElement.style.setProperty(`--${key}`, colors[key]);
        });
    };

    // Восстановление цветов из localStorage
    useEffect(() => {
        applyColors(colors);  // Применяем полученные цвета при монтировании
    }, [colors]); // При изменении цветов в состоянии, также обновляем их в :root

    // Сохранение цветов в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('chatColors', JSON.stringify(colors));
    }, [colors]);

    return (
        <ColorContext.Provider value={{ colors, setColors }}>
            {children}
        </ColorContext.Provider>
    );
};

// Хук для использования контекста
export const useColors = () => useContext(ColorContext);
