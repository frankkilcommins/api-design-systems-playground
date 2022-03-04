import '../../styles.css'

export const Scenario = (props) => {
    console.log(props.when);


    return (<>
        <div id='{props.key}' className='modal-container' data-name='{props.key}'>
            <span className="model-box">
                <button aria-expanded="false" className="model-box-control">
                    <span className="pointer">
                        <span className="model-box">
                            <span className="model model-title">
                                <strong>Scenario: </strong> [{props.scenario.when.join(" > ")}]
                            </span>
                        </span>
                    </span>
                    
                    <div className="description">
                        <div className="markdown">
                            <p>{props.scenario.description}</p>
                        </div>
                    </div>

                    <div className="table-container">
                        <table className="model">
                            <thead>
                                <tr>
                                    <th className="col_header" style={{width: "40%"}}>Subject</th>
                                    <th className="col_header">Level</th>
                                    <th className="col_header" style={{width: "50%"}}>Values</th>
                                </tr>
                            </thead>
                            <tbody>

                                {props.scenario.then.map((item) => 
                                    <tr className="property-row">
                                      <td>[{item.subject.join(" > ")}]</td>
                                      <td><span className="prop-type">{item.level}</span></td>
                                      <td><span className="property-primitive">{item.values.join(", ")}</span></td>
                                  </tr>                              
                                )};

                            </tbody>
                        </table>
                    </div>

                </button>
            </span>
        </div>
    </>);
}

