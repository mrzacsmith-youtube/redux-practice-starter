import React, { useState } from "react";
import { connect } from "react-redux";
import { postPlayer } from "../actions/index";

const PlayerForm = (props) => {
  const [player, setPlayer] = useState({
    name: "",
    rank: "",
    nickname: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.postPlayer(player);
    document.getElementById("playerForm").reset();
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form id="playerForm">
        <input
          type="text"
          name="name"
          label="name"
          placeholder="Player Name"
          value={props.name}
          onChange={inputHandler}
          className="input"
        />
        <input
          type="text"
          name="rank"
          label="rank"
          placeholder="PlayerRank"
          value={props.rank}
          onChange={inputHandler}
          className="input"
        />
        <input
          type="text"
          name="nickname"
          label="nickname"
          placeholder="Player Nickname"
          value={props.nickname}
          onChange={inputHandler}
          className="input"
        />
        <button onClick={submitHandler} className="btn">
          Add new player
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postPlayer })(PlayerForm);
