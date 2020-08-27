import React from 'react';
import './index.css'


export default function NavMenu() {
    return (
        <nav className="navigation">
            <div className="nav-menu">
                <ul className="nav-list">
                    <li className="nav-link">
                        <a href="/">Главная</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Lorem4</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Admin</a>
                    </li>

                    <li className="nav-link">
                        <a href="#">Создать запись</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Выход</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Вход</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Регистрация</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
