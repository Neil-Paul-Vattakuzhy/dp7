import avatar from './avatar.jpg'

export default function MyComponent(){
    return (
        <div>
            <div className="Detailslayout">
                <div className="leftcard">
                    <img src={avatar} style={{borderRadius:"50%"}} alt="" width="200" height="200"/>
                    <span style={{fontSize:"3rem",padding:"1.5rem 0"}}>Say hello</span>
                    <span style={{fontSize:"1.8rem",lineHeight:"2.5rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, consequatur?</span>
                </div>
                <div className="rightcard">
                    <div className="query">
                        <div className="inputelements">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" placeholder='Enter Your First Name'/>
                        </div>
                        <div className="inputelements">
                            <label htmlFor="Lname">Last Name</label>
                            <input type="text" placeholder='Enter Your Last Name'/>
                        </div>
                    </div>
                    <div className="query">
                        <div className="inputelements">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder='Enter Your Email'/>
                        </div>
                        <div className="inputelements">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" placeholder='Enter Your Phone'/>
                        </div>
                    </div>
                    <div className="addmessage">
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" placeholder='Enter Your Message'></textarea>
                    </div>
                    <button>Submit</button>
                </div>

            </div>
        </div>
    )
}