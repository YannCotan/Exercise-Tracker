
import React from 'react';
import { useParams } from 'react-router-dom';
import EditExercises from './EditExercise';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  };

  export default withRouter();