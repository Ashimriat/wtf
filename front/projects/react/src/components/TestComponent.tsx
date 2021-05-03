import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import { EAppealsActions } from '../store/reducers/appeals';


const TestComponent: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={e => dispatch(actions[EAppealsActions.ADD_APPEAL]())}>
        {'Тестовая отправка'}
      </Button>
      <Grid
        container
        direction={'column'}
      >
        <Grid
          item
          component={'div'}
        >
          {'test'}
        </Grid>
      </Grid>
    </div>
  );
};

export default TestComponent;
