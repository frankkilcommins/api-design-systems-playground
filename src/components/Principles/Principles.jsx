import '../../styles.css';

export const Principles = (props) => {
    return(<>
        <div className="no-margin" style={{width: "100%" }}>
            <span>
                <div className="opblock opblock-post is-open">
                    <div className="opblock-summary opblock-summary-post">
                        <span className="opblock-summary-method">{props.principles.length} Principles</span>
                    </div>
                    <div className="no-margin">
                        <div className="opblock-body">
                            <div className="opblock-description-wrapper">
                                <div className="opblock-description">
                                    <div className="markdown"><p>Principles guide how decisions in API design and delivery should be made</p></div>
                                </div>
                            </div>
                            <div className="opblock-section">
                                <div className="parameters-container">
                                    <div className="table-container">
                                        <table className="model">
                                            <thead>
                                                <tr>
                                                    <th className="col_header" style={{width: "40%"}}>Name</th>
                                                    <th className="col_header" style={{width: "40%"}}>Internationalized Resource Identifiers</th>
                                                    <th className="col_header" style={{width: "20%"}}>level</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {props.principles.map((item) => 
                                                    <tr className="property-row">
                                                        <td>{item.name}</td>
                                                        <td><span className="property-primitivetype">{item.iri}</span></td>
                                                        <td><span className="prop-type">{item.level}</span></td>
                                                    </tr>                              
                                                )};

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </>);
};