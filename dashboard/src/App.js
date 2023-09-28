import Footer from './components/pages/Footer';
import SideBar from './components/pages/SideBar';
import Header from './components/pages/Header';
import { Box, Grid } from '@mui/material';
import DataGridDisplay from './components/pages/DataGridDisplay';
import ActionStatusBlock from './components/pages/ActionStatusBlock';
import ChartSection from './components/pages/ChartSection';

function App() {
  let statusSet = [
    { text: 'Successful Logons', number: 25 },
    { text: 'Failed Logons', number: 25 },
    { text: 'Failed Transfers', number: 25 },
    { text: 'Permission Error', number: 25 }
  ]
  return (
    <>
      <Grid container height={'94vh'}>
        <Grid item style={{ width: '5vw' }}>
          <SideBar />
        </Grid>
        <Grid item style={{ width: '95vw' }} >
          <Header />

          <ChartSection />

          {/* Action Status */}
          <Box display="flex" flexDirection='row' justifyContent='space-between' alignItems="center"
            marginRight={'10px'} marginBottom={'10px'}
          >
            {statusSet.map(item => {
              return <ActionStatusBlock text={item.text} number={item.number} />
            })}
          </Box>

          <DataGridDisplay />

        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
