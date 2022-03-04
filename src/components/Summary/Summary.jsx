import '../../styles.css'


export const Summary = (props) => {

    return (<>
            
            <section className='block col-12'>
                <div>
                    <div className='info'>
                        <hgroup className='main'>
                            <h2 className='title'>{props.title}
                                <span>
                                    <small>
                                        <pre className="version">2021-05-07</pre>
                                    </small>
                                    <small className="version-stamp">
                                        <pre className="version">ADS</pre>
                                    </small>
                                </span>
                            </h2>
                        </hgroup>
                        <hgroup className='main title'>
                            <span>
                                <small className='summary-pill'>
                                    <pre className='version'> {props.principlesCount} Principles</pre>
                                </small>
                                <small className='summary-pill'>
                                    <pre className='version'> {props.standardsCount} Standards</pre>
                                </small>
                                <small className='summary-pill'>
                                    <pre className='version'> {props.scenariosCount} Scenarios</pre>
                                </small>
                                <small className='summary-pill'>
                                    <pre className='version'> {props.subjectsCount} Subjects</pre>
                                </small>                                                                                    
                            </span>
                        </hgroup>

                        <div className='description'>
                            <div className='renderedMarkdown'>
                                <p>{props.description}</p>
                            </div>                
                        </div>
                    </div>
                </div>
            </section>


    </>);
}
