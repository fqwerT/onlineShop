import { connect } from "react-redux";
import "./amount.style.scss";
import { IncrementAmount, DecrementAmount } from "../../../redux/actions";

function Amount(props) {
  console.log(props);
  return (
    <div className="btn__controls">
      <button className="btn__btn" onClick={props.onDecrementAmounts}>
        -
      </button>
      <div className="btn__result">Колл-во : {props.amount}</div>
      <button className="btn__btn" onClick={props.onIncrementAmounts}>
        +
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  const { amountReducer } = state;
  return {
    amount: amountReducer.amount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementAmounts: () => dispatch(IncrementAmount()),
    onDecrementAmounts: () => dispatch(DecrementAmount())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Amount);
