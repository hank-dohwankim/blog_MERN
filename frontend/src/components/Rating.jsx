import React from 'react';
import { Button } from 'react-bootstrap';

const Rating = ({ value }) => {
  return (
    <>
      <Button>{value.like}</Button>
      <Button>{value.unlike}</Button>
    </>
  );
};

export default Rating;
