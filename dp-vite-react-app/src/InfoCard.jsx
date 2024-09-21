import bg from './bg1.jpg'
import card1 from './card1.jpg'
export default function MyComponent(){
    return (
        <div>
            <div className="card">
                <div className="imgtext">
                    <div className="imgtexthead">Choose Health</div>
                    <div className="imgtextbody">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo asperiores minus maiores vel, suscipit consequatur aliquid rerum beatae labore aperiam? Dolor!</div>
                    <button id='txtcontactbtn'>Contact Us</button>
                </div>
                <div className="subcardspace">
                    <div className="subcard">
                        <img src={card1}   alt=""  />
                        <div className="desc">
                            Cooking Coaching
                        </div>
                    </div>
                    <div className="subcard">
                        <img src={card1}  alt=""  />
                        <div className="desc">
                            Cooking Coaching
                        </div>
                    </div>
                    <div className="subcard">
                        <img src={card1}  alt=""  />
                        <div className="desc">
                            Cooking Coaching
                        </div>
                    </div>
                </div>
                <img src={bg} alt="" id='bgimg'  width='100%' height='100%'/>
                
            </div>        
        </div>
    )
}