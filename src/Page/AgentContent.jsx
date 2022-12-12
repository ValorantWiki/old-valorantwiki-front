import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function AgentContent() {
    const { name } = useParams()
    const [Content, SetArray] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents/" + name + "?language=tr-TR")
            .then(response => response.json())
            .then(json => {
                SetArray(json.data)
            });
    }, []);
  
    return (
        <div className="center">
            <div className="agentcontent-cards-bodys">
                <div style={{
                    backgroundImage: "url(" + Content.background + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="agentcontent-img">
                    <img className="center" src={Content.fullPortrait} alt={Content.displayName} />
                </div>
                <div className="agentcontent-content">
                    <div><h3>{Content.displayName}</h3></div>
                    <div><p>{Content.description}</p></div>
                    <div><h3>{Content.role?.displayName}</h3></div>
                    <div><p>{Content.role?.description}</p></div>
                </div>
            </div>
            <div>
                <h1>Skills</h1>
            </div>
            <div className="center">
                <div className="Skills-cards">
                {
                    Content.abilities?.map((item, index) => {
                        if(!item.displayIcon) {
                            return(
                                <div key={index} className="Skills-card">
                                <div className="center bg-cardss">
                                    <img style={{ padding:"0rem", width:"155px", height:"161px" }} src="https://cdn.discordapp.com/attachments/902302627767918602/1023996010629963890/pngegg_2.png" alt={item.displayName} />
                                </div>
                                <div className="center gs" > 
                                    <div><h3>{item.displayName}</h3></div>
                                    <div><p>{item.description}</p></div>
                                </div>
                            </div>
                            )
                        }
                        return (
                            <div key={index} className="Skills-card">
                                <div className="center bg-cardss">
                                    <img src={item.displayIcon} alt={item.displayName} />
                                </div>
                                <div className="center gs" > 
                                    <div><h3>{item.displayName}</h3></div>
                                    <div><p>{item.description}</p></div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )

}