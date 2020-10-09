import React, { useEffect } from 'react'
import PlayerCard from './PlayerCard'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/index.js'

const PlayerList = (props) => {
  useEffect(() => {
    props.fetchPlayers()
  }, [])

  return (
    <div>
      <h2>Player List</h2>
      {props.players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    isLoading: state.isLoading,
    errors: state.errors,
  }
}

export default connect(mapStateToProps, { fetchPlayers })(PlayerList)
