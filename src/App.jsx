import React from 'react';
import './App.css';
import Navmenu from './components/NavMenu'
import GetListOfCards from './components/GetListofCards'


export default function App() {
    let jsonData = [
        {id: 1, title: 'lorem ipsum '},
        {id: 2, title: 'lorem ipsum '},
        {id: 3, title: 'lorem ipsum '},
        {id: 4, title: 'lorem ipsum '},


    ]
    console.log(window.screen.width)
    if (window.screen.width >=768) {
        return (
            <div className='App'>
                <Navmenu/>
                <h1>Hello React</h1>
                <div className="row">
                    <GetListOfCards jsonData={jsonData}/>
                </div>


            </div>
        )
    } else {
        return (
            <div className='App'>
                <h1>Hello React</h1>
                <GetListOfCards jsonData={jsonData} />
            </div>
        )
    }
}



