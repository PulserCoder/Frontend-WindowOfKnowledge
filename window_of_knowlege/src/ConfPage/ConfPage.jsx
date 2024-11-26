import React, { useState } from 'react';
import './ConfPage.css';
import { useColors } from "../ColorContext/ColorContext.jsx";
import Chat from "../Chat/Chat.jsx";

const ColorSettings = () => {
    const { colors, setColors } = useColors(); // Получаем значения и функцию для обновления цветов
    const [isChatVisible, setIsChatVisible] = useState(false); // Состояние для управления видимостью чата

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value,
        }));
    };

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setColors((prevColors) => ({
            ...prevColors,
            [name]: value.endsWith("vh") || value.endsWith("vw") || value.endsWith("px")
                ? value
                : name.includes("Height") || name.includes("Width")
                    ? `${value}vh`
                    : `${value}px`,
        }));
    };

    const toggleChatVisibility = () => {
        setIsChatVisible(!isChatVisible); // Переключаем состояние видимости чата
    };

    return (
        <div className="settings-container">
            <h2>Настройки цветов</h2>


            {isChatVisible && (
                <div className="preview-chat">
                    <Chat/>
                </div>
            )}

            <div className="chat-open-button">
                <button onClick={toggleChatVisibility}>
                    {isChatVisible ? 'Скрыть чат' : 'Открыть чат'}
                </button>
            </div>

            <div className="settings-item">
                <label htmlFor="backgroundColorSite">Цвет фона сайта:</label>
                <input
                    type="color"
                    id="backgroundColorSite"
                    name="backgroundColorSite"
                    value={colors.backgroundColorSite}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="backgroundColor">Цвет фона:</label>
                <input
                    type="color"
                    id="backgroundColor"
                    name="backgroundColor"
                    value={colors.backgroundColor}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="messageAreaBg">Цвет фона области сообщений:</label>
                <input
                    type="color"
                    id="messageAreaBg"
                    name="messageAreaBg"
                    value={colors.messageAreaBg}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="messageShadow">Цвет тени сообщений:</label>
                <input
                    type="color"
                    id="messageShadow"
                    name="messageShadow"
                    value={colors.messageShadow}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="clientBubbleBg">Цвет фона сообщения клиента:</label>
                <input
                    type="color"
                    id="clientBubbleBg"
                    name="clientBubbleBg"
                    value={colors.clientBubbleBg}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="clientBubbleText">Цвет текста сообщения клиента:</label>
                <input
                    type="color"
                    id="clientBubbleText"
                    name="clientBubbleText"
                    value={colors.clientBubbleText}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="supportBubbleBg">Цвет фона сообщения поддержки:</label>
                <input
                    type="color"
                    id="supportBubbleBg"
                    name="supportBubbleBg"
                    value={colors.supportBubbleBg}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="supportBubbleText">Цвет текста сообщения поддержки:</label>
                <input
                    type="color"
                    id="supportBubbleText"
                    name="supportBubbleText"
                    value={colors.supportBubbleText}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="inputBorder">Цвет рамки ввода:</label>
                <input
                    type="color"
                    id="inputBorder"
                    name="inputBorder"
                    value={colors.inputBorder}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="buttonBg">Цвет фона кнопки:</label>
                <input
                    type="color"
                    id="buttonBg"
                    name="buttonBg"
                    value={colors.buttonBg}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="buttonBgHover">Цвет фона кнопки при наведении:</label>
                <input
                    type="color"
                    id="buttonBgHover"
                    name="buttonBgHover"
                    value={colors.buttonBgHover}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="fontFamily">Шрифт:</label>
                <input
                    type="text"
                    id="fontFamily"
                    name="fontFamily"
                    value={colors.fontFamily}
                    onChange={handleColorChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="buttonHeight">Высота кнопки (vh):</label>
                <input
                    type="range"
                    id="buttonHeight"
                    name="buttonHeight"
                    min="5"
                    max="20"
                    value={parseFloat(colors.buttonHeight)}
                    onChange={handleRangeChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="buttonWidth">Ширина кнопки (vw):</label>
                <input
                    type="range"
                    id="buttonWidth"
                    name="buttonWidth"
                    min="8"
                    max="20"
                    value={parseFloat(colors.buttonWidth)}
                    onChange={handleRangeChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="buttonMargin">Отступ кнопки (px):</label>
                <input
                    type="range"
                    id="buttonMargin"
                    name="buttonMargin"
                    min="0"
                    max="50"
                    value={parseInt(colors.buttonMargin, 10)}
                    onChange={handleRangeChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="chatPrewHeight">Высота чата (vh):</label>
                <input
                    type="range"
                    id="chatPrewHeight"
                    name="chatPrewHeight"
                    min="20"
                    max="80"
                    value={parseFloat(colors.chatPrewHeight)}
                    onChange={handleRangeChange}
                />
            </div>

            <div className="settings-item">
                <label htmlFor="chatPrewWidth">Ширина чата (vw):</label>
                <input
                    type="range"
                    id="chatPrewWidth"
                    name="chatPrewWidth"
                    min="20"
                    max="80"
                    value={parseFloat(colors.chatPrewWidth)}
                    onChange={handleRangeChange}
                />
            </div>
        </div>
    );
};

export default ColorSettings;
