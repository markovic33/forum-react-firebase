import React from 'react'
import './main.css';

const Main = () => {
  return (
    <div className='main__'>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga laudantium placeat corporis ullam harum ex, inventore perspiciatis, minus assumenda omnis laboriosam quis adipisci at quia praesentium! Odio, sed laudantium!</p>
        <div className='main__images'>
            <img src="data:image/png;base64,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" />
            <img src="data:image/jpeg;base64,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" />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium perferendis saepe amet quos ipsa magnam reiciendis molestias, dicta iste doloribus voluptatem corrupti, a nulla iusto qui! Quam porro iure reiciendis?</p>
        <img src="" />
    </div>
  )
}

export default Main