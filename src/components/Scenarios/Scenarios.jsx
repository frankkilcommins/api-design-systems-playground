import '../../styles.css';
import { Scenario } from '../Scenario';

export const Scenarios = (props) => {
    return(<>
        <div className="wrapper" style={{width: "100%" }}>
            <section class="block col-12 block-desktop col-12-desktop" style={{width: "100%" }}>
                <section class="models is-open">
                    <h4>
                        <button aria-expanded="true" class="models-control">
                            <span>{props.scenarios.length} Governance Scenarios</span>
                            <svg width="20" height="20" aria-hidden="true" focusable="false"></svg>
                        </button>
                    </h4>

                    <div className="no-margin">

                        {props.scenarios.map((item, key) => 
                            <Scenario scenario={item} key={key}/>
                        )}

                        
                    </div>
                </section>
            </section>
        </div>
    </>);
}