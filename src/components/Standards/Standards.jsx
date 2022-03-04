import '../../styles.css';

export const Standards = (props) => {
    return(<>
        <div className="no-margin" style={{width: "100%" }}>
            <span>
                <div className="opblock opblock-get is-open">
                    <div className="opblock-summary opblock-summary-get">
                        <span className="opblock-summary-method">{props.standards.length} Standards</span>
                    </div>
                    <div className="no-margin">
                        <div className="opblock-body">
                            <div className="opblock-description-wrapper">
                                <div className="opblock-description">
                                    <div className="markdown"><p>Standards are industry best practices (e.g. RFCs) that shall influence the rules for API design</p></div>
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

                                                {props.standards.map((item) => 
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