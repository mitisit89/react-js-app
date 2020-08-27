import  React from 'react'
import './index.css'



export default function Index({data}){
    return(
        <div className='Card'>
            <h2>{data.title}</h2>
            <div className='card-body'>
                <p>
                    tooddoddoo
                </p>
            </div>
            <span className='datetime'>datetime</span>
        </div>
    )
}
