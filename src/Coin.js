import React, { useState } from "react";
import "./Coin.css";
import { useStateValue } from "./StateProvider";
//where will I get data.coin ?? Component taking shape
//React collapsible component + API data??

function Coin({ id, symbol, name }) {
const [state, dispatch] = useStateValue();
	
const addToHidden = () => {
    //Data Layer Level action (through reducer)
    dispatch({
      type: "ADD_TO_HIDDEN",
      item: {
        id: id
      },
    });
  };
	
	return;
	<div key={id}>
		<p>
			{name}: {symbol}
		</p>
	</div>;
	<button onClick={addToHidden} class="Hide">Hide Coin</button>;
}

export default Coin;
