import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getSmurfs, addSmurf} from "../actions/index";

import SmurfCard from "./SmurfCard";

const Smurfs = props => {
    const smurfList = props.getSmurfs
    useEffect(() => {
        smurfList()
    }, [smurfList])

    return (
        <div>
            <button onClick={() => props.getSmurfs()}>{props.isFetching ? "error" : "Get Smurf"}</button>
            <div className="smurfcard">
                {props.smurfs && props.smurfs.map ((item) =>
                <SmurfCard name={item.name} age={item.age} height={item.height} />)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurf: state.smurf,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf}) (Smurfs);