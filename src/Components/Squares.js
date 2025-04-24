// import {useState} from 'react';

export default function Squares({value,onClickReference}) {
  
  return (
    <>

        <button className="btn btn-outline-primary m-2" onClick={onClickReference}> {value}</button>
  
    </>

  );
}
