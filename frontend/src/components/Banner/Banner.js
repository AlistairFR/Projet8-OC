import './Banner.scss'

function Banner() {
    return (
        <div className='banner-container'>
            <div className="banner-titles">
                <h1>Winckel Jean-Baptiste</h1>
                <h2>
                    <span>Développeur Web</span>
                    <div className='message'>
                        <div className='word1'>Junior</div>
                        <div className='word2'>Curieux</div>
                        <div className='word3'>Volontaire</div>
                    </div>
                </h2>
            </div>
            <div className="banner-button">
                <button>COMMENCER</button>
            </div>
        </div>
    )
}

export default Banner;