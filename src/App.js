import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
} from '@material-ui/core';
import ViewUno from './ViewOne';
import ViewTwo from './ViewTwo';

const useStyles = makeStyles(() => ({
  coloredRed: {
    color: 'magenta',
    fontSize: '32px',
  },
  coloredGreen: {
    color: 'green',
    fontSize: '72px',
  },
}));

const App = () => {
  const classes = useStyles();
  const [ currentPage, setCurrentPage ] = useState(1);
  return (
    <Grid container spacing={2} >
      <Grid item sm={12}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            onClick={() => setCurrentPage(1)}
          >
            One
          </Button>
          <Button
            onClick={() => setCurrentPage(2)}
          >
            Two
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        {
          currentPage === 1 ?
            <ViewUno/>
            :
            <ViewTwo
              className='col-md-4'
              id='ViewTwo'
              string='Hello World'
              isHungry={false}
              myObj={{
                primaryWeapon: 'Trombone',
                secondaryWeapon: 'Sponge',
              }}
              myFn={() => alert('This is my function')}
              items={[
                'Sleeping',
                'Eating',
                'Skating',
              ]}
            />
        }
      </Grid>
    </Grid>
  );
}
export default App;
// <div>
//   <button
//     onClick={ () => setCurrentPage(1)}
//   >
//     Change View One
//   </button>
//   <button
//     onClick={ () => setCurrentPage(2)}
//   >
//     Change View Two
//   </button>

// </div>
