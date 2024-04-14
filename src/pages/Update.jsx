import React from 'react'
import {useParams} from 'react-router-dom';

const Update = () => {
  const params = useParams();
  return (
    <div>{params.id} Update</div>
  )
}

export default Update