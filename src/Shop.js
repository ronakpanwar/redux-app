import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreation} from './state/index'
import { withExtraArgument } from 'redux-thunk'
import { depositMoney, withdrawMoney } from './state/action-creation'
import {useSelector} from "react-redux"

const Shop = () => {
  const dispatch = useDispatch()
  const {depositMoney , withdrawMoney} = bindActionCreators(actionCreation,dispatch);
  const balance = useSelector(state => state.amount)
  return (
    <div>
     
      <h2>Deposit/Withraw money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        your balance - {balance}
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
     
    </div>
  )
}

export default Shop
