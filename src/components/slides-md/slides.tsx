import { useEffect, useState, type FC } from "react";
import './slides.scss'

import greenSlide from '../../images/слайды/green-slide.webp'
import yellowSlide from '../../images/слайды/yellow-slide.webp'
import pinkSlide from '../../images/слайды/pink-slide.webp'
import blueSlide from '../../images/слайды/blue-slide.jpg'

interface Content {
    name: string,
    description: string,
    button: string
}

const Slides: FC = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [showText, setShowText] = useState(false)

    const slides: Array<string> =  [greenSlide, yellowSlide, pinkSlide, blueSlide]
    const textContent: Content[] = [
        {
            name: 'Dive into the World of Frontend Development',
            description: 'Discover the exciting world of frontend development! Learn how to create beautiful and functional web interfaces using modern technologies and tools.',
            button: 'Learn More'        
        },
        {
            name: 'Building Interactive Web Applications',
            description: 'Learn to develop interactive web applications using React, Vue.js, and other popular frameworks. Discover how to create dynamic and responsive interfaces.',
            button: 'Start Learning'        
        },
        {
            name: 'Responsive Design and Mobile Development',
            description: 'Master the skills of creating responsive websites and mobile applications. Learn how to make your projects accessible and user-friendly on any device.',
            button: 'Learn More'        
        },
        {
            name: 'Performance Optimization',
            description: 'Learn how to improve the performance of your web applications. Discover tools for analyzing and optimizing code to make your projects faster and more efficient.',
            button: 'Get Skills'        
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setShowText(true)
        }, 500)
    }, [activeSlide])

    return (
        <section className="slides">
            {slides.map((item: string, i: number) => {
                return <div 
                    key={i} 
                    style={{ backgroundImage: `url(${item})` }} 
                    className={ i === activeSlide ? 'slide active-slide' : 'slide' }
                    onClick={() => {
                        activeSlide !== i && setShowText(false)
                        setActiveSlide(i);
                    }}
                >
                    { i === activeSlide ? 
                        <div className={ showText ? 'active-content slide-content' : 'slide-content' } id={`slide${i}`}>
                            <span>{textContent[i].name}</span>
                            <span>{textContent[i].description}</span>
                            <span onClick={() => {
                                
                            }}>{textContent[i].button}</span>
                        </div>
                    : ''
                    }
                </div>
            })}
        </section>
    )
}

export default Slides