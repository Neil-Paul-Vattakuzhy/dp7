import nutcaseimg1 from './nutcase1.jpg'

export default function MyComponent(){
    return (
        <div>
            <div className="fulllayout">
                <div className="casesheading">
                    Nutrition Cases
                </div>
                <div className="gridlayout">               
                    <div className="gridcard">
                        <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div> 
                    <div className="gridcard">
                    <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div>
                    <div className="gridcard">
                    <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div>    
                    <div className="gridcard">
                    <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div> 
                    <div className="gridcard">
                    <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div> 
                    <div className="gridcard">
                    <div className="caseimgtext">
                            <span>Family Care</span>
                        </div>
                        <img src={nutcaseimg1} alt="" height="350" width="380" />
                    </div> 
                </div>
            </div>
        </div>
    )
}