import React from 'react';
import { Grid, Button /* , makeStyles */ } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { actions } from '../store';
import { EAppealsActions } from "../store/reducers/appeals";

/*
const styles = (makeStyles((theme) => ({

})))();*/

const TestComponent: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={dispatch(actions[EAppealsActions.ADD])}>
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
